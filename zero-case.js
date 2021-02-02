import { isObject } from './core/index.js'
export const Zero = {
    effectStack: [],
    _evnetStack:[],
    _State: [],
    _stateIndex: 0,
    init: {
        'status': 'init',
        'initfn': null,
        'root': null,
        'updatefn': null
    },
    targetMap: new WeakMap(),
    ReactElement(type, key, ref, props){
        const element = {
            $$typeof: Symbol('key'),
            type: type,
            key: key,
            ref: ref,
            props: props
        };

        return element
    },
    createElement: function(type, attrs, ...children){
        const props = {
            children: []
        };
        let key, ref = null;

        if (attrs) {
            ref = attrs.ref || null;
            key = attrs.key || null; 
        }

        for (const key in attrs) {
            if (Object.hasOwnProperty.call(attrs, key)) {
                if (typeof attrs[key] === 'function') {
                    let fn = attrs[key]
                    // console.log(fn);
                }
                props[key] = attrs[key] || null
            }
        }

        for (const child of children) {
            if (typeof child === 'function') {
                child = child()
            }

            props.children.push(child)
        }

        return this.ReactElement(
            type,
            key,
            ref,
            props
        )

    },
    reactive(params){
        let that = this
        if (!isObject(params)) {
            return params
        }

        const observed = new Proxy(params, {
            get(target, key, receiver){
                const result = Reflect.get(target, key, receiver);
                console.log('getter...', key);
                that.track(target, key);
                return that.reactive(result)
            },
            set(target, key, value, receiver){
                const result = Reflect.set(target, key, value, receiver);
                console.log('Setter...', key, value);
                that.trigger(target, key)
                return result
            },
            deleteProperty(target, key){
                const result = Reflect.deleteProperty(target, key)
                return result
            }
        })

        return observed
    },
    effect(cb){
        let that = this;
        const rxEffect = function(){
            try {
                that.effectStack.push(rxEffect)
                return cb()
            } finally {
                that.effectStack.pop()
            }
        }
        rxEffect()
        return rxEffect
    },
    track(target, key){
        const effecFn = this.effectStack[this.effectStack.length-1]

        if (effecFn) {
            let depsMap = this.targetMap.get(target)
            if (!depsMap) {
                depsMap = new Map()
                this.targetMap.set(target, depsMap)
            }
            let deps = depsMap.get(key)
            if (!deps) {
                deps = new Set()
                depsMap.set(key, deps)   
            }
            deps.add(effecFn)
        }
    },
    trigger(target, key){
        const depsMap = this.targetMap.get(target)
        if (depsMap) {
            const deps = depsMap.get(key)
            if (deps) {
                deps.forEach(effecFn => effecFn());
            }
        }
        // this.render()
    },
    useState(initVal){
        let that = this;
        let currentIndex = that._stateIndex;
       
        that._State[currentIndex] = that._State[currentIndex] || initVal;
        that._stateIndex++;

        const setState = newState => {
            that._stateIndex = 0;
            that.init.status = 'update';
            that._State[currentIndex] = newState;
            let vNode = that.init.initfn();
            that.updateDom(vNode);
        }

        // console.log(that._State[currentIndex], currentIndex);
        return [that._State[currentIndex], setState];
    },
    render: function(vNode) {
        let el = document.createElement(vNode.type)
        let { props } = vNode;
        let specialKeyMap = {
            className: 'class',
            fontSize: 'font-size',
            marginTop: 'margin-top',
            onClick: 'click',
            onChange: 'change'
        }

        props && Object.keys(props).forEach( key => {
            if (key === 'children') {
                props.children.forEach( child => {
                    if (typeof child === 'string' ||
                        typeof child === 'number') {
                        child = document.createTextNode(child); 
                        el.appendChild(child);
                    } else {
                        el.appendChild(this.render(child));
                    }
                })
            }else if (key === 'style') {
                let styleObj = props.style;
                let styleItems = [];
                Object.keys(styleObj).forEach( styleKey => {
                    styleItems.push(`${specialKeyMap[styleKey] || styleKey}: ${styleObj[styleKey]}`)
                })
                el.setAttribute('style', styleItems.join(';'))
            } else {
                if (typeof props[key] === 'function') {
                    // 添加事件
                    el.addEventListener(specialKeyMap[key], props[key], false);
                    let event = new Set();
                    event.add(specialKeyMap[key], props[key]);
                    this._evnetStack.push(event);

                }else {
                    el.setAttribute(specialKeyMap[key] || key, props[key]);
                }
            }
        })

        return el;
    },
    updateDom(app){
        
        this.init.root.innerHTML  = '';   
        let target = this.init.root;
        let result = this.render(app);
        target.appendChild(result);
    },
    renderDom: function(el, target){
        this.init.initfn = el;
        this.init.root = target;

        let app = el();
        let result = this.render(app);
        target.appendChild(result);
    }
} 

function getAttrs(obj, value){
    let o = {}
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if (key !== value) {
                o[key] = element;
            }
        }
    }
    return o
}
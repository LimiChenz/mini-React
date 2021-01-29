import { isObject } from './core/index.js'
export const Zero = {
    effectStack: [],
    targetMap: new WeakMap(),
    createElement: function(type, attrs, ...children){
        let el = document.createElement(type)

        for (const key in attrs) {
            if (attrs.hasOwnProperty.call(attrs, key)) {
                switch (key) {
                    case 'value':
                        if (el.tagName.toUpperCase() === 'INPUT' ||
                            el.tagName.toUpperCase() === 'TEXTAREA') {
                            el[key] = attrs[key];
                        } else {
                            el.setAttribute(key, attrs[key]);
                        }
                        break;
                    case 'style':
                        el.style.cssText = attrs[key];
                        break;
                    default:
                        el.setAttribute(key, attrs[key]);
                        break;
                }

                if (/on\w+/.test(key)) {
                    let event = key.toLowerCase();
                    el[event] = attrs[key]
                }

            }
        }

        for (const child of children) {
            if (typeof child === 'string') {
                child = document.createTextNode(child); 
            }
            if (typeof child === 'function') {
                child = child()
            }
            el.appendChild(child);
        }
    
        return el;
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
                console.log('Setter...', key);
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
            } catch (error) {
                that.effectStack.pop()
            }
        }
        rxEffect()
        return rxEffect
    },
    track(target, key){
        const effecFn = this.effectStack[this.effectStack.length -1]
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
    },
    render: function(vNode) {
        let dd = vNode();
        return dd
    },
    renderDom: function(el, target){
        let app = el();
        target.appendChild(app);
    }
} 
export const Zero = {
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
                    console.log(key);
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
    render: function(vNode) {
        let dd = vNode();
        return dd
    },
    renderDom: function(el, target){
        let app = el();
        target.appendChild(app);
    }
} 
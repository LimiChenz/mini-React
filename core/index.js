function isObject(obj){
    if (Object.prototype.toString.call(obj) === '[object Object]') return true;
    return false;
}

export {
    isObject
}
function extend(dest) { // (Object[, Object, ...]) ->
    for (var i = 1; i < arguments.length; i++) {
        var src = arguments[i]
        for (var k in src) {
            dest[k] = src[k]
        }
    }
    return dest
}

class A {
    constructor() {
        this.options = Object.create(this.options)
        this.callInitHooks()
    }
    static addInitHook(fn) {
        const args = Array.prototype.slice.call(arguments, 1)
        const init = typeof fn === 'function' ? fn : function () {
            this[fn].apply(this, args)
        }
        const proto = this.prototype
        const parentProto = Object.getPrototypeOf(proto)
        if (!proto._initHooks || proto._initHooks === parentProto._initHooks) {
            console.log('init hooks array')
            proto._initHooks = []
        }
        proto._initHooks.push(init)
        return this
    }
    static mergeOptions(options) {
        const proto = this.prototype;
        const parentProto = Object.getPrototypeOf(proto)
        if (!proto.options || proto.options === parentProto.options) {
            proto.options = proto.options ? Object.create(proto.options) : {}
        }
        extend(proto.options, options)
        return this
    }
    callInitHooks() {
        const proto = Object.getPrototypeOf(this)
        this._callHooks(proto)
    }
    _callHooks(proto) {
        if (this._initHooksCalled) {
            return
        }
        const parentProto = Object.getPrototypeOf(proto)
        if (parentProto._initHooks) {
            parentProto._callHooks.call(this, parentProto)
        }
        this._initHooksCalled = true
        const hooks = proto._initHooks
        if (hooks && hooks !== parentProto._initHooks) {
            for (let i = 0; i < hooks.length; i++) {
                hooks[i].call(this)
            }
        }
    }
    setOptions(options) {
        for (let i in options) {
            this.options[i] = options[i]
        }
        return this
    }
    config(conf) {
        if (!conf) {
            return extend({}, this.options)
        } else {
            if (arguments.length === 2) {
                let t = {}
                t[conf] = arguments[1]
                conf = t
            }
            for (let i in conf) {
                this.options[i] = conf[i]
                // enable/disable handler
                /*if (this[i] && (this[i] instanceof maptalks.Handler)) {
                    if (conf[i]) {
                        this[i].enable()
                    } else {
                        this[i].disable()
                    }
                }*/
            }
            //callback when set config
            if (this.onConfig) {
                this.onConfig(conf)
            }
        }
        return this
    }
}
class B extends A {
    constructor() {
        super()
        console.log('B.constructor')
        // console.log(B.prototype._initHooks.join())
    }
    addHandler(name) {
        if (!this.handlers) {
            this.handlers = []
        }
        this.handlers.push(name)
    }
    bMethod() {}
}
class C extends B {
    constructor() {
        super()
        console.log('C.constructor')
        // console.log(C.prototype._initHooks.join())
    }
    addHandlerC(name) {
        if (!this.handlers) {
            this.handlers = []
        }
        this.handlers.push(name)
    }
    cMethod() {}
}

/*B.addInitHook('addHandler', 'h1')
C.addInitHook('addHandler', 'h2')
C.addInitHook('addHandler', 'h3')
console.log('B.hooks', B.prototype._initHooks)
console.log('C.hooks', C.prototype._initHooks)

const b = new B()
const c = new C()
console.log('b.handlers', b.handlers)
console.log('c.handlers', c.handlers)
*/
//------------------------------------------------

A.mergeOptions({
    'type' : 'A',
    'foo'  : 'A'
})

B.mergeOptions({
    'type' : 'B',
    'foo'  : 'B'
})

const a0 = new A()
a0.setOptions({'foo' : 'a0'})
const a1 = new A()
const b = new B()
const c = new C()
console.log('a0', a0.options, 'type : ' + a1.options.type);
console.log('a1', a1.options);
console.log('b', b.options);
console.log('c', 'type : ' + c.options.type, 'foo : ' + c.options.foo)
c.config('foo', 'C')
console.log(c.options.foo)
console.log(C.prototype.options.foo)

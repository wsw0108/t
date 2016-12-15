class A {
    constructor() {
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
    }
    callInitHooks() {
        // TODO: this???
        if (this._initHooksCalled) {
            return
        }
        this._initHooksCalled = true
        const proto = Object.getPrototypeOf(this)
        const parentProto = Object.getPrototypeOf(proto)
        if (parentProto.callInitHooks) {
            parentProto.callInitHooks.call(this)
        }
        const hooks = proto._initHooks
        for (let i = 0; i < hooks.length; i++) {
            hooks[i].call(this)
        }
    }
}
class B extends A {
    constructor() {
        super()
        // this.handlers = []
        console.log('B.constructor')
        console.log(B.prototype._initHooks.join())   
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
        // this.handlers = []
        console.log('C.constructor')
        console.log(C.prototype._initHooks.join())
    }
    addHandlerC(name) {
        if (!this.handlers) {
            this.handlers = []
        }
        this.handlers.push(name)
    }
    cMethod() {}
}

B.addInitHook('addHandler', 'h1')
C.addInitHook('addHandler', 'h2')
C.addInitHook('addHandler', 'h3')
console.log('B.hooks', B.prototype._initHooks)
console.log('C.hooks', C.prototype._initHooks)

const b = new B()
const c = new C()
console.log('b.handlers', b.handlers)
console.log('c.handlers', c.handlers)

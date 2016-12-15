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
        const proto = Object.getPrototypeOf(this)
        this._traverseInitHooks(proto)
    }
    _traverseInitHooks(proto) {
        if (this._initHooksCalled) {
            return
        }
        const parentProto = Object.getPrototypeOf(proto)
        if (parentProto._initHooks) {
            parentProto._traverseInitHooks.call(this, parentProto)
        }
        this._initHooksCalled = true
        const hooks = proto._initHooks
        if (hooks) {
            for (let i = 0; i < hooks.length; i++) {
                hooks[i].call(this)
            }
        }
    }
    addHandler(name) {
        if (!this.handlers) {
            this.handlers = []
        }
        this.handlers.push(name)
    }
}
class A1 extends A {
    constructor() {
        super()
        console.log('A1.constructor')
    }
}
class B extends A {
    constructor() {
        super()
        // this.handlers = []
        console.log('B.constructor')
    }
    
    bMethod() {}
}
class C extends B {
    constructor() {
        super()
        // this.handlers = []
        console.log('C.constructor')
    }
    cMethod() {}
}
A.addInitHook('addHandler', 'h0')
// B.addInitHook('addHandler', 'h1')
// C.addInitHook('addHandler', 'h2')
// C.addInitHook('addHandler', 'h3')

// const a = new A()
const a1 = new A1()
// const b = new B()
// const c = new C()
// console.log('a.handlers', a.handlers)
console.log('a1.handlers', a1.handlers)
// console.log('b.handlers', b.handlers)
// console.log('c.handlers', c.handlers)

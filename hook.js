class A {
    // static hooks = []
    constructor() {
        console.log('A', this.constructor.hooks.join())
        // this.callInitHook()
    }
    static addInitHook(fn) {
        const args = Array.prototype.slice.call(arguments, 1)
        const init = typeof fn === 'function' ? fn : function () {
            this[fn].apply(this, args)
        }
        if (!this.hooks || !this.hasOwnProperty(this.hooks)) {
            console.log('init hooks array')
            this.hooks = []
        }
        // this.hooks.push(init)
        this.hooks.push(fn)
    }
    callInitHook() {
        if (this._initHooksCalled) {
            return
        }
        this._initHooksCalled = true
        const hooks = this.constructor.hooks
        for (let i = 0; i < hooks.length; i++) {
            hooks[i].call(this)
        }
    }
}
class B extends A {
    // static hooks = []
    constructor() {
        super()
        this.handlers = []
        console.log('B', B.hooks.join())   
    }
    addHandler(name) {
        this.handlers.push(name)
    }
    bMethod() {}
}
class C extends A {
    constructor() {
        super()
        this.handlers = []
        console.log('C', C.hooks.join())
    }
    addHandler(name) {
        this.handlers.push(name)
    }
    cMethod() {}
}

B.addInitHook('addHandler1', 'h1')
C.addInitHook('addHandler2', 'h2')
C.addInitHook('addHandler3', 'h3')
console.log('B.hooks', B.hooks)
console.log('C.hooks', C.hooks)

const b = new B()
const c = new C()
console.log('b.handlers', b.handlers)
console.log('c.handlers', c.handlers)

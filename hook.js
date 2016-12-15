class A {
  constructor () {
    this.callInitHooks()
  }
  static addInitHook (fn, ...args) {
    // const args = Array.prototype.slice.call(arguments, 1)
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
  callInitHooks () {
    const proto = Object.getPrototypeOf(this)
    this._traverseInitHooks(proto)
  }
  _traverseInitHooks (proto) {
    if (this._initHooksCalled) {
      return
    }
    const parentProto = Object.getPrototypeOf(proto)
    if (parentProto._traverseInitHooks) {
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
}

class B extends A {
  constructor () {
    super()
    console.log('B.constructor')
  }
  addHandler (name) {
    if (!this.handlers) {
      this.handlers = []
    }
    this.handlers.push(name)
  }
  addHandlerB () {
    if (!this.handlers) {
      this.handlers = []
    }
    this.handlers.push('hb')
  }
  bMethod () { }
}

class C extends B {
  constructor () {
    super()
    console.log('C.constructor')
  }
  addHandlerC (name1, name2) {
    if (!this.handlers) {
      this.handlers = []
    }
    this.handlers.push([name1, name2])
  }
  cMethod () { }
}

B.addInitHook('addHandler', 'h1')
B.addInitHook('addHandlerB')
C.addInitHook('addHandler', 'h2')
C.addInitHook('addHandlerB')
C.addInitHook('addHandlerC', 'h3', 'h4')
console.log('B.hooks', B.prototype._initHooks)
console.log('C.hooks', C.prototype._initHooks)

const b = new B()
const c = new C()
console.log('b.handlers', b.handlers)
console.log('c.handlers', c.handlers)

const b2 = new B()
const c2 = new C()
console.log('b2.handlers', b2.handlers)
console.log('c2.handlers', c2.handlers)

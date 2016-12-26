import Handler from './handler'

function extend (dest) { // (Object[, Object, ...]) ->
  for (var i = 1; i < arguments.length; i++) {
    var src = arguments[i]
    for (var k in src) {
      dest[k] = src[k]
    }
  }
  return dest
}

export class Class {
  constructor () {
    this.callInitHooks()
  }
  static addInitHook (fn) {
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
  callInitHooks () {
    const proto = Object.getPrototypeOf(this)
    this._callHooks(proto)
  }
  _callHooks (proto) {
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
  config (conf) {
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
        if (this[i] && (this[i] instanceof Handler)) {
          if (conf[i]) {
            this[i].enable()
          } else {
            this[i].disable()
          }
        }
      }
      // callback when set config
      if (this.onConfig) {
        this.onConfig(conf)
      }
    }
    return this
  }
}

export default Class

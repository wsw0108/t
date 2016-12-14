class A {
    constructor() {
    }
    static addInitHook(fn) {
        var proto = this.prototype;
        var parentProto = Object.getPrototypeOf(proto);
        if (!proto._initHooks || proto._initHooks == parentProto._initHooks) {
            console.log('init hooks array');
            proto._initHooks = [];
        }
        proto._initHooks.push(fn);
    }

    aMethod() {
        console.log('aMethod');
    }

    callInitHooks() {
        var proto = Object.getPrototypeOf(this);
        console.log('callInitHooks', proto._initHooks.join());

        if (Object.getPrototypeOf(proto).callInitHooks) {
            this.callInitHooks.call(proto);
        }
    }
}

class B extends A {
    constructor() {
        super()
        this.handlers = []
        console.log('B', B.prototype._initHooks.join())
    }
    bMethod() {}
}

class C extends A {
    constructor() {
        super()
        this.handlers = []
        console.log('C', C.prototype._initHooks.join())
    }
    aMethod() {
        console.log('C.aMethod');
        super.aMethod();
    }
    cMethod() {}
}

A.addInitHook('addHandler0', 'h0')
B.addInitHook('addHandler1', 'h1')
C.addInitHook('addHandler2', 'h2')
C.addInitHook('addHandler3', 'h3')

const b = new B()
const c = new C()

c.callInitHooks();

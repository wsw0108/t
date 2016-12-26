const maptalks = {};

const extend = function (dest) { // (Object[, Object, ...]) ->
	var sources = Array.prototype.slice.call(arguments, 1),
		i, j, len, src;

	for (j = 0, len = sources.length; j < len; j++) {
		src = sources[j] || {};
		for (i in src) {
			if (src.hasOwnProperty(i)) {
				dest[i] = src[i];
			}
		}
	}
	return dest;
}

maptalks.extend = extend;

/**
 * OOP facilities of the library. <br/>
 * Thanks to Leaflet's inspiration (http://www.leafletjs.com)
 * @see  [Original explanation by Leaflet]{@link http://leafletjs.com/reference.html#class}
 *
 * @class
 * @category core
 * @abstract
 */
maptalks.Class = function () {

};
/**
 * Extend a class with a prototype object with instance methods and properties.
 *
 * @param  {object} props - a literal object with instance properties or methods.
 * @return {maptalks.Class}
 * @static
 * @example
 *  var MyClass = maptalks.Class.extend({
        initialize: function (greeter) {
            this.greeter = greeter;
            // class constructor
        },

        greet: function (name) {
            alert(this.greeter + ', ' + name)
        }
    });

    // create instance of MyClass, passing "Hello" to the constructor
    var a = new MyClass("Hello");

    // call greet method, alerting "Hello, World"
    a.greet("World");
 */
maptalks.Class.extend = function (props) {

    // extended class with the new prototype
    var NewClass = function () {
        var self = this;
        if (!(this instanceof NewClass)) {
            // fix consructing without new silently
            self = maptalks.Util.create(NewClass.prototype);
        }

        // call the constructor
        if (self.initialize) {
            self.initialize.apply(self, arguments);
        }

        // call all constructor hooks
        if (self._initHooks) {
            self.callInitHooks();
        }

        return self;
    };

    var parentProto = NewClass.__super__ = this.prototype;

    /** @lends maptalks.Class.prototype */
    //var proto = maptalks.Util.create(parentProto);
    var proto = Object.create(parentProto);

    proto.constructor = NewClass;

    NewClass.prototype = proto;

    // inherit parent's statics
    for (var i in this) {
        if (i[0] !== '_' && this.hasOwnProperty(i) && i !== 'prototype' && !(this[i] instanceof maptalks.Class)) {
            NewClass[i] = this[i];
        }
    }

    // mix static properties into the class
    if (props.statics) {
        maptalks.Util.extend(NewClass, props.statics);
        delete props.statics;
    }

    // mix includes into the prototype
    if (props.includes) {
        maptalks.Util.extend.apply(null, [proto].concat(props.includes));
        delete props.includes;
    }

    // merge options
    if (proto.options) {
        props.options = maptalks.Util.extend(maptalks.Util.create(proto.options), props.options);
    }

    // mix given properties into the prototype
    maptalks.extend(proto, props);

    proto._initHooks = [];

    // add method for calling all hooks
    proto.callInitHooks = function () {

        if (this._initHooksCalled) { return; }

        if (parentProto.callInitHooks) {
            parentProto.callInitHooks.call(this);
        }

        this._initHooksCalled = true;

        for (var i = 0, len = proto._initHooks.length; i < len; i++) {
            proto._initHooks[i].call(this);
        }
    };

    /**
     * Get a shallow copy of or update Class's options.<br>
     * If the instance has a handler of the same name with the given option key, the handler will be enabled or disabled when the option is updated.
     * @param  {object|string} options - options to update, leave empty to get a shallow copy of options.
     * @return {object|this}
     */
    proto.config = function (conf) {
        if (!conf) {
            var config = {};
            for (var p in this.options) {
                if (this.options.hasOwnProperty(p)) {
                    config[p] = this.options[p];
                }
            }
            return config;
        } else {
            if (arguments.length === 2) {
                var t = {};
                t[conf] = arguments[1];
                conf = t;
            }
            for (var i in conf) {
                if (conf.hasOwnProperty(i)) {
                    this.options[i] = conf[i];
                    // enable/disable handler
                    if (this[i] && (this[i] instanceof maptalks.Handler)) {
                        if (conf[i]) {
                            this[i].enable();
                        } else {
                            this[i].disable();
                        }
                    }
                }
            }
            //callback when set config
            if (this.onConfig) {
                this.onConfig(conf);
            }
        }
        return this;
    };

    return NewClass;
};


/**
 * method for adding properties to prototype
 * @param  {object} props - additional instance methods or properties
 * @static
 */
maptalks.Class.include = function () {
    var sources = arguments;
    for (var j = 0, len = sources.length; j < len; j++) {
        maptalks.extend(this.prototype, sources[j]);
    }
    return this;
};

/**
 * merge new default options to the Class
 * @param  {object} options - default options.
 * @static
 */
maptalks.Class.mergeOptions = function (options) {
    maptalks.extend(this.prototype.options, options);
    return this;
};

/**
 * add a constructor hook
 * @param {string|function} fn - a hook function or name of the hook function and arguments
 * @static
 */
maptalks.Class.addInitHook = function (fn) { // (Function) || (String, args...)
    var args = Array.prototype.slice.call(arguments, 1);

    var init = typeof fn === 'function' ? fn : function () {
        this[fn].apply(this, args);
    };

    this.prototype._initHooks = this.prototype._initHooks || [];
    this.prototype._initHooks.push(init);
    return this;
};

const B = maptalks.Class.extend({
    addHandler: function(name) {
        if (!this.handlers) {
            this.handlers = [];
        }
        this.handlers.push(name)
    },
    bMethod: function() {}
});

const C = maptalks.Class.extend({
    addHandler: function(name) {
        if (!this.handlers) {
            this.handlers = [];
        }
        this.handlers.push(name);
    },
    cMethod: function() {}
});

B.addInitHook('addHandler', 'h1');
C.addInitHook('addHandler', 'h2');
C.addInitHook('addHandler', 'h3');

const b = new B();
const c = new C();

console.log(maptalks.Class.prototype._initHooks);
console.log('B ', B.prototype._initHooks);
console.log('C ', C.prototype._initHooks);
console.log('b.handlers', b.handlers);
console.log('c.handlers', c.handlers);

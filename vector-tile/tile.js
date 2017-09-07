/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.vector_tile = (function() {

    /**
     * Namespace vector_tile.
     * @exports vector_tile
     * @namespace
     */
    var vector_tile = {};

    vector_tile.Tile = (function() {

        /**
         * Properties of a Tile.
         * @memberof vector_tile
         * @interface ITile
         * @property {Array.<vector_tile.Tile.ILayer>} [layers] Tile layers
         */

        /**
         * Constructs a new Tile.
         * @memberof vector_tile
         * @classdesc Represents a Tile.
         * @constructor
         * @param {vector_tile.ITile=} [properties] Properties to set
         */
        function Tile(properties) {
            this.layers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tile layers.
         * @member {Array.<vector_tile.Tile.ILayer>}layers
         * @memberof vector_tile.Tile
         * @instance
         */
        Tile.prototype.layers = $util.emptyArray;

        /**
         * Creates a new Tile instance using the specified properties.
         * @function create
         * @memberof vector_tile.Tile
         * @static
         * @param {vector_tile.ITile=} [properties] Properties to set
         * @returns {vector_tile.Tile} Tile instance
         */
        Tile.create = function create(properties) {
            return new Tile(properties);
        };

        /**
         * Encodes the specified Tile message. Does not implicitly {@link vector_tile.Tile.verify|verify} messages.
         * @function encode
         * @memberof vector_tile.Tile
         * @static
         * @param {vector_tile.ITile} message Tile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.layers != null && message.layers.length)
                for (var i = 0; i < message.layers.length; ++i)
                    $root.vector_tile.Tile.Layer.encode(message.layers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * GeomType enum.
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} POINT=1 POINT value
         * @property {number} LINESTRING=2 LINESTRING value
         * @property {number} POLYGON=3 POLYGON value
         */
        Tile.GeomType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "POINT"] = 1;
            values[valuesById[2] = "LINESTRING"] = 2;
            values[valuesById[3] = "POLYGON"] = 3;
            return values;
        })();

        Tile.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof vector_tile.Tile
             * @interface IValue
             * @property {string} [stringValue] Value stringValue
             * @property {number} [floatValue] Value floatValue
             * @property {number} [doubleValue] Value doubleValue
             * @property {number|Long} [intValue] Value intValue
             * @property {number|Long} [uintValue] Value uintValue
             * @property {number|Long} [sintValue] Value sintValue
             * @property {boolean} [boolValue] Value boolValue
             */

            /**
             * Constructs a new Value.
             * @memberof vector_tile.Tile
             * @classdesc Represents a Value.
             * @constructor
             * @param {vector_tile.Tile.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value stringValue.
             * @member {string}stringValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.stringValue = "";

            /**
             * Value floatValue.
             * @member {number}floatValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.floatValue = 0;

            /**
             * Value doubleValue.
             * @member {number}doubleValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.doubleValue = 0;

            /**
             * Value intValue.
             * @member {number|Long}intValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.intValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Value uintValue.
             * @member {number|Long}uintValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.uintValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Value sintValue.
             * @member {number|Long}sintValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.sintValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Value boolValue.
             * @member {boolean}boolValue
             * @memberof vector_tile.Tile.Value
             * @instance
             */
            Value.prototype.boolValue = false;

            /**
             * Creates a new Value instance using the specified properties.
             * @function create
             * @memberof vector_tile.Tile.Value
             * @static
             * @param {vector_tile.Tile.IValue=} [properties] Properties to set
             * @returns {vector_tile.Tile.Value} Value instance
             */
            Value.create = function create(properties) {
                return new Value(properties);
            };

            /**
             * Encodes the specified Value message. Does not implicitly {@link vector_tile.Tile.Value.verify|verify} messages.
             * @function encode
             * @memberof vector_tile.Tile.Value
             * @static
             * @param {vector_tile.Tile.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringValue);
                if (message.floatValue != null && message.hasOwnProperty("floatValue"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.floatValue);
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.doubleValue);
                if (message.intValue != null && message.hasOwnProperty("intValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.intValue);
                if (message.uintValue != null && message.hasOwnProperty("uintValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.uintValue);
                if (message.sintValue != null && message.hasOwnProperty("sintValue"))
                    writer.uint32(/* id 6, wireType 0 =*/48).sint64(message.sintValue);
                if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.boolValue);
                return writer;
            };

            return Value;
        })();

        Tile.Feature = (function() {

            /**
             * Properties of a Feature.
             * @memberof vector_tile.Tile
             * @interface IFeature
             * @property {number|Long} [id] Feature id
             * @property {Array.<number>} [tags] Feature tags
             * @property {vector_tile.Tile.GeomType} [type] Feature type
             * @property {Array.<number>} [geometry] Feature geometry
             */

            /**
             * Constructs a new Feature.
             * @memberof vector_tile.Tile
             * @classdesc Represents a Feature.
             * @constructor
             * @param {vector_tile.Tile.IFeature=} [properties] Properties to set
             */
            function Feature(properties) {
                this.tags = [];
                this.geometry = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Feature id.
             * @member {number|Long}id
             * @memberof vector_tile.Tile.Feature
             * @instance
             */
            Feature.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Feature tags.
             * @member {Array.<number>}tags
             * @memberof vector_tile.Tile.Feature
             * @instance
             */
            Feature.prototype.tags = $util.emptyArray;

            /**
             * Feature type.
             * @member {vector_tile.Tile.GeomType}type
             * @memberof vector_tile.Tile.Feature
             * @instance
             */
            Feature.prototype.type = 0;

            /**
             * Feature geometry.
             * @member {Array.<number>}geometry
             * @memberof vector_tile.Tile.Feature
             * @instance
             */
            Feature.prototype.geometry = $util.emptyArray;

            /**
             * Creates a new Feature instance using the specified properties.
             * @function create
             * @memberof vector_tile.Tile.Feature
             * @static
             * @param {vector_tile.Tile.IFeature=} [properties] Properties to set
             * @returns {vector_tile.Tile.Feature} Feature instance
             */
            Feature.create = function create(properties) {
                return new Feature(properties);
            };

            /**
             * Encodes the specified Feature message. Does not implicitly {@link vector_tile.Tile.Feature.verify|verify} messages.
             * @function encode
             * @memberof vector_tile.Tile.Feature
             * @static
             * @param {vector_tile.Tile.IFeature} message Feature message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Feature.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
                if (message.tags != null && message.tags.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.tags.length; ++i)
                        writer.uint32(message.tags[i]);
                    writer.ldelim();
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
                if (message.geometry != null && message.geometry.length) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork();
                    for (var i = 0; i < message.geometry.length; ++i)
                        writer.uint32(message.geometry[i]);
                    writer.ldelim();
                }
                return writer;
            };

            return Feature;
        })();

        Tile.Layer = (function() {

            /**
             * Properties of a Layer.
             * @memberof vector_tile.Tile
             * @interface ILayer
             * @property {number} version Layer version
             * @property {string} name Layer name
             * @property {Array.<vector_tile.Tile.IFeature>} [features] Layer features
             * @property {Array.<string>} [keys] Layer keys
             * @property {Array.<vector_tile.Tile.IValue>} [values] Layer values
             * @property {number} [extent] Layer extent
             */

            /**
             * Constructs a new Layer.
             * @memberof vector_tile.Tile
             * @classdesc Represents a Layer.
             * @constructor
             * @param {vector_tile.Tile.ILayer=} [properties] Properties to set
             */
            function Layer(properties) {
                this.features = [];
                this.keys = [];
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Layer version.
             * @member {number}version
             * @memberof vector_tile.Tile.Layer
             * @instance
             */
            Layer.prototype.version = 1;

            /**
             * Layer name.
             * @member {string}name
             * @memberof vector_tile.Tile.Layer
             * @instance
             */
            Layer.prototype.name = "";

            /**
             * Layer features.
             * @member {Array.<vector_tile.Tile.IFeature>}features
             * @memberof vector_tile.Tile.Layer
             * @instance
             */
            Layer.prototype.features = $util.emptyArray;

            /**
             * Layer keys.
             * @member {Array.<string>}keys
             * @memberof vector_tile.Tile.Layer
             * @instance
             */
            Layer.prototype.keys = $util.emptyArray;

            /**
             * Layer values.
             * @member {Array.<vector_tile.Tile.IValue>}values
             * @memberof vector_tile.Tile.Layer
             * @instance
             */
            Layer.prototype.values = $util.emptyArray;

            /**
             * Layer extent.
             * @member {number}extent
             * @memberof vector_tile.Tile.Layer
             * @instance
             */
            Layer.prototype.extent = 4096;

            /**
             * Creates a new Layer instance using the specified properties.
             * @function create
             * @memberof vector_tile.Tile.Layer
             * @static
             * @param {vector_tile.Tile.ILayer=} [properties] Properties to set
             * @returns {vector_tile.Tile.Layer} Layer instance
             */
            Layer.create = function create(properties) {
                return new Layer(properties);
            };

            /**
             * Encodes the specified Layer message. Does not implicitly {@link vector_tile.Tile.Layer.verify|verify} messages.
             * @function encode
             * @memberof vector_tile.Tile.Layer
             * @static
             * @param {vector_tile.Tile.ILayer} message Layer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Layer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.features != null && message.features.length)
                    for (var i = 0; i < message.features.length; ++i)
                        $root.vector_tile.Tile.Feature.encode(message.features[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.keys != null && message.keys.length)
                    for (var i = 0; i < message.keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.keys[i]);
                if (message.values != null && message.values.length)
                    for (var i = 0; i < message.values.length; ++i)
                        $root.vector_tile.Tile.Value.encode(message.values[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extent != null && message.hasOwnProperty("extent"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.extent);
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.version);
                return writer;
            };

            return Layer;
        })();

        return Tile;
    })();

    return vector_tile;
})();

module.exports = $root;

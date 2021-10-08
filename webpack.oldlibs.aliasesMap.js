var aliasesMap = {
  // Left side - OLD Value
  // Right side - Latest actual value
  './node_modules/react/react.js': './node_modules/react/index.js',
  './node_modules/babel-runtime/helpers/extends.js': './node_modules/@babel/runtime/helpers/esm/extends.js',
  './node_modules/babel-runtime/helpers/classCallCheck.js': './node_modules/@babel/runtime/helpers/esm/classCallCheck.js',
  './node_modules/babel-runtime/helpers/possibleConstructorReturn.js': './node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js',
  './node_modules/babel-runtime/helpers/createClass.js': './node_modules/@babel/runtime/helpers/esm/createClass.js',
  './node_modules/babel-runtime/helpers/inherits.js': './node_modules/@babel/runtime/helpers/esm/inherits.js',
  './node_modules/babel-runtime/helpers/typeof.js': './node_modules/@babel/runtime/helpers/esm/typeof.js',
  './node_modules/babel-runtime/helpers/get.js': './node_modules/@babel/runtime/helpers/esm/get.js',
  './node_modules/babel-runtime/helpers/slicedToArray.js': './node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
  './node_modules/babel-runtime/core-js.js': './node_modules/core-js/index.js',
  './node_modules/core-js/library/index.js': './node_modules/core-js/index.js',
  './node_modules/babel-runtime/core-js/symbol.js': './node_modules/core-js/es/symbol/index.js',
  './node_modules/core-js/fn/symbol/index.js': './node_modules/core-js/es/symbol/index.js',
  './node_modules/babel-runtime/core-js/iterator.js': './node_modules/core-js/es/symbol/iterator.js',
  './node_modules/core-js/fn/symbol/iterator.js': './node_modules/core-js/es/symbol/iterator.js',
  './node_modules/babel-runtime/core-js/object/set-prototype-of.js': './node_modules/core-js/es/object/set-prototype-of.js',
  './node_modules/core-js/fn/object/set-prototype-of.js': './node_modules/core-js/es/object/set-prototype-of.js',
  './node_modules/babel-runtime/core-js/object/get-prototype-of.js': './node_modules/core-js/es/object/get-prototype-of.js',
  './node_modules/core-js/fn/object/get-prototype-of.js': './node_modules/core-js/es/object/get-prototype-of.js',
  './node_modules/babel-runtime/core-js/object/define-property.js': './node_modules/core-js/es/object/define-property.js',
  './node_modules/core-js/fn/object/define-property.js': './node_modules/core-js/es/object/define-property.js',
  './node_modules/babel-runtime/core-js/object/create.js': './node_modules/core-js/es/object/create.js',
  './node_modules/core-js/fn/object/create.js': './node_modules/core-js/es/object/create.js',
  './node_modules/babel-runtime/core-js/object/assign.js': './node_modules/core-js/es/object/assign.js',
  './node_modules/core-js/fn/object/assign.js': './node_modules/core-js/es/object/assign.js',
  './node_modules/babel-runtime/core-js/object/keys.js': './node_modules/core-js/es/object/keys.js',
  './node_modules/core-js/fn/object/keys.js': './node_modules/core-js/es/object/keys.js',
  './node_modules/babel-runtime/core-js/json/stringify.js': './node_modules/core-js/es/json/stringify.js',
  './node_modules/core-js/fn/json/stringify.js': './node_modules/core-js/es/json/stringify.js',
  './node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js': './node_modules/core-js/es/object/get-own-property-descriptor.js',
  './node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js': './node_modules/core-js/es/object/get-own-property-descriptor.js',
  './node_modules/babel-runtime/node_modules/core-js/library/fn/object/get-own-property-descriptor.js': './node_modules/core-js/es/object/get-own-property-descriptor.js',
  './node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js': './node_modules/core-js/es/object/get-own-property-descriptor.js',
  './node_modules/babel-runtime/core-js/object/values.js': './node_modules/core-js/es/object/values.js',
  './node_modules/core-js/fn/object/values.js': './node_modules/core-js/es/object/values.js',
  './node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js': './node_modules/core-js/index.js', // !!!!
  './node_modules/core-js/library/modules/_core.js': './node_modules/core-js/index.js', // !!!!
  './node_modules/babel-runtime/node_modules/core-js/library/fn/json/stringify.js': './node_modules/core-js/es/json/stringify.js',
  './node_modules/babel-runtime/node_modules/core-js/library/fn/object/values.js': './node_modules/core-js/es/object/values.js',
  './node_modules/core-js/library/fn/object/values.js': './node_modules/core-js/es/object/values.js',
  './node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js': './node_modules/core-js/modules/web.dom-collections.iterator.js', // !!!
  './node_modules/core-js/library/modules/web.dom.iterable.js': './node_modules/core-js/modules/web.dom-collections.iterator.js',
  './node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js': './node_modules/core-js/modules/es.string.iterator.js',
  './node_modules/core-js/library/modules/es6.string.iterator.js': './node_modules/core-js/modules/es.string.iterator.js',
  './node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js': './node_modules/core-js/internals/is-iterable.js',
  './node_modules/core-js/library/modules/core.is-iterable.js': './node_modules/core-js/internals/is-iterable.js',
  './node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.values.js': './node_modules/core-js/modules/es.object.values.js',
  './node_modules/core-js/library/modules/es7.object.values.js': './node_modules/core-js/modules/es.object.values.js',
  './node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js': './node_modules/core-js/internals/get-iterator.js',
  './node_modules/core-js/library/fn/get-iterator.js': './node_modules/core-js/internals/get-iterator.js',
  './node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js': './node_modules/core-js/internals/is-iterable.js',
  './node_modules/babel-runtime/core-js/get-iterator.js': './node_modules/core-js/internals/get-iterator.js',
  './node_modules/babel-runtime/core-js/is-iterable.js': './node_modules/core-js/internals/is-iterable.js',
  './node_modules/core-js/library/fn/object/get-own-property-descriptor.js': './node_modules/core-js/es/object/get-own-property-descriptor.js',
  // 7.10-13. babel-runtime migration & 7.15 migration
  "./node_modules/@babel/runtime/helpers/typeof/index.js": "./node_modules/@babel/runtime/helpers/esm/typeof.js",
  "./node_modules/@babel/runtime/helpers/jsx/index.js": "./node_modules/@babel/runtime/helpers/esm/jsx.js",
  "./node_modules/@babel/runtime/helpers/asyncIterator/index.js": "./node_modules/@babel/runtime/helpers/esm/asyncIterator.js",
  "./node_modules/@babel/runtime/helpers/AwaitValue/index.js": "./node_modules/@babel/runtime/helpers/esm/AwaitValue.js",
  "./node_modules/@babel/runtime/helpers/AsyncGenerator/index.js": "./node_modules/@babel/runtime/helpers/esm/AsyncGenerator.js",
  "./node_modules/@babel/runtime/helpers/wrapAsyncGenerator/index.js": "./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js",
  "./node_modules/@babel/runtime/helpers/awaitAsyncGenerator/index.js": "./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js",
  "./node_modules/@babel/runtime/helpers/asyncGeneratorDelegate/index.js": "./node_modules/@babel/runtime/helpers/esm/asyncGeneratorDelegate.js",
  "./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js": "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js",
  "./node_modules/@babel/runtime/helpers/classCallCheck/index.js": "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js",
  "./node_modules/@babel/runtime/helpers/createClass/index.js": "./node_modules/@babel/runtime/helpers/esm/createClass.js",
  "./node_modules/@babel/runtime/helpers/defineEnumerableProperties/index.js": "./node_modules/@babel/runtime/helpers/esm/defineEnumerableProperties.js",
  "./node_modules/@babel/runtime/helpers/defaults/index.js": "./node_modules/@babel/runtime/helpers/esm/defaults.js",
  "./node_modules/@babel/runtime/helpers/defineProperty/index.js": "./node_modules/@babel/runtime/helpers/esm/defineProperty.js",
  "./node_modules/@babel/runtime/helpers/extends/index.js": "./node_modules/@babel/runtime/helpers/esm/extends.js",
  "./node_modules/@babel/runtime/helpers/objectSpread/index.js": "./node_modules/@babel/runtime/helpers/esm/objectSpread.js",
  "./node_modules/@babel/runtime/helpers/objectSpread2/index.js": "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js",
  "./node_modules/@babel/runtime/helpers/inherits/index.js": "./node_modules/@babel/runtime/helpers/esm/inherits.js",
  "./node_modules/@babel/runtime/helpers/inheritsLoose/index.js": "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js",
  "./node_modules/@babel/runtime/helpers/getPrototypeOf/index.js": "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js",
  "./node_modules/@babel/runtime/helpers/setPrototypeOf/index.js": "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js",
  "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct/index.js": "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js",
  "./node_modules/@babel/runtime/helpers/construct/index.js": "./node_modules/@babel/runtime/helpers/esm/construct.js",
  "./node_modules/@babel/runtime/helpers/isNativeFunction/index.js": "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js",
  "./node_modules/@babel/runtime/helpers/wrapNativeSuper/index.js": "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js",
  "./node_modules/@babel/runtime/helpers/instanceof/index.js": "./node_modules/@babel/runtime/helpers/esm/instanceof.js",
  "./node_modules/@babel/runtime/helpers/interopRequireDefault/index.js": "./node_modules/@babel/runtime/helpers/esm/interopRequireDefault.js",
  "./node_modules/@babel/runtime/helpers/interopRequireWildcard/index.js": "./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js",
  "./node_modules/@babel/runtime/helpers/newArrowCheck/index.js": "./node_modules/@babel/runtime/helpers/esm/newArrowCheck.js",
  "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty/index.js": "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js",
  "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose/index.js": "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js",
  "./node_modules/@babel/runtime/helpers/objectWithoutProperties/index.js": "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js",
  "./node_modules/@babel/runtime/helpers/assertThisInitialized/index.js": "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js",
  "./node_modules/@babel/runtime/helpers/possibleConstructorReturn/index.js": "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js",
  "./node_modules/@babel/runtime/helpers/createSuper/index.js": "./node_modules/@babel/runtime/helpers/esm/createSuper.js",
  "./node_modules/@babel/runtime/helpers/superPropBase/index.js": "./node_modules/@babel/runtime/helpers/esm/superPropBase.js",
  "./node_modules/@babel/runtime/helpers/get/index.js": "./node_modules/@babel/runtime/helpers/esm/get.js",
  "./node_modules/@babel/runtime/helpers/set/index.js": "./node_modules/@babel/runtime/helpers/esm/set.js",
  "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral/index.js": "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js",
  "./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose/index.js": "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js",
  "./node_modules/@babel/runtime/helpers/readOnlyError/index.js": "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js",
  "./node_modules/@babel/runtime/helpers/writeOnlyError/index.js": "./node_modules/@babel/runtime/helpers/esm/writeOnlyError.js",
  "./node_modules/@babel/runtime/helpers/classNameTDZError/index.js": "./node_modules/@babel/runtime/helpers/esm/classNameTDZError.js",
  "./node_modules/@babel/runtime/helpers/temporalUndefined/index.js": "./node_modules/@babel/runtime/helpers/esm/temporalUndefined.js",
  "./node_modules/@babel/runtime/helpers/tdz/index.js": "./node_modules/@babel/runtime/helpers/esm/tdz.js",
  "./node_modules/@babel/runtime/helpers/temporalRef/index.js": "./node_modules/@babel/runtime/helpers/esm/temporalRef.js",
  "./node_modules/@babel/runtime/helpers/slicedToArray/index.js": "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js",
  "./node_modules/@babel/runtime/helpers/slicedToArrayLoose/index.js": "./node_modules/@babel/runtime/helpers/esm/slicedToArrayLoose.js",
  "./node_modules/@babel/runtime/helpers/toArray/index.js": "./node_modules/@babel/runtime/helpers/esm/toArray.js",
  "./node_modules/@babel/runtime/helpers/toConsumableArray/index.js": "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js",
  "./node_modules/@babel/runtime/helpers/arrayWithoutHoles/index.js": "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js",
  "./node_modules/@babel/runtime/helpers/arrayWithHoles/index.js": "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js",
  "./node_modules/@babel/runtime/helpers/maybeArrayLike/index.js": "./node_modules/@babel/runtime/helpers/esm/maybeArrayLike.js",
  "./node_modules/@babel/runtime/helpers/iterableToArray/index.js": "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js",
  "./node_modules/@babel/runtime/helpers/iterableToArrayLimit/index.js": "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js",
  "./node_modules/@babel/runtime/helpers/iterableToArrayLimitLoose/index.js": "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimitLoose.js",
  "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js": "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js",
  "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js": "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js",
  "./node_modules/@babel/runtime/helpers/nonIterableSpread/index.js": "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js",
  "./node_modules/@babel/runtime/helpers/nonIterableRest/index.js": "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js",
  "./node_modules/@babel/runtime/helpers/createForOfIteratorHelper/index.js": "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js",
  "./node_modules/@babel/runtime/helpers/createForOfIteratorHelperLoose/index.js": "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelperLoose.js",
  "./node_modules/@babel/runtime/helpers/skipFirstGeneratorNext/index.js": "./node_modules/@babel/runtime/helpers/esm/skipFirstGeneratorNext.js",
  "./node_modules/@babel/runtime/helpers/toPrimitive/index.js": "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js",
  "./node_modules/@babel/runtime/helpers/toPropertyKey/index.js": "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js",
  "./node_modules/@babel/runtime/helpers/initializerWarningHelper/index.js": "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js",
  "./node_modules/@babel/runtime/helpers/initializerDefineProperty/index.js": "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js",
  "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor/index.js": "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js",
  "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey/index.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js",
  "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase/index.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js",
  "./node_modules/@babel/runtime/helpers/classPrivateFieldGet/index.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js",
  "./node_modules/@babel/runtime/helpers/classPrivateFieldSet/index.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js",
  "./node_modules/@babel/runtime/helpers/classPrivateFieldDestructureSet/index.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldDestructureSet.js",
  "./node_modules/@babel/runtime/helpers/classStaticPrivateFieldSpecGet/index.js": "./node_modules/@babel/runtime/helpers/esm/classStaticPrivateFieldSpecGet.js",
  "./node_modules/@babel/runtime/helpers/classStaticPrivateFieldSpecSet/index.js": "./node_modules/@babel/runtime/helpers/esm/classStaticPrivateFieldSpecSet.js",
  "./node_modules/@babel/runtime/helpers/classStaticPrivateMethodGet/index.js": "./node_modules/@babel/runtime/helpers/esm/classStaticPrivateMethodGet.js",
  "./node_modules/@babel/runtime/helpers/classStaticPrivateMethodSet/index.js": "./node_modules/@babel/runtime/helpers/esm/classStaticPrivateMethodSet.js",
  "./node_modules/@babel/runtime/helpers/decorate/index.js": "./node_modules/@babel/runtime/helpers/esm/decorate.js",
  "./node_modules/@babel/runtime/helpers/classPrivateMethodGet/index.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateMethodGet.js",
  "./node_modules/@babel/runtime/helpers/classPrivateMethodSet/index.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateMethodSet.js",
  "./node_modules/@babel/runtime/helpers/wrapRegExp/index.js": "./node_modules/@babel/runtime/helpers/esm/wrapRegExp.js",
  "./node_modules/@babel/runtime/helpers/typeof.js": "./node_modules/@babel/runtime/helpers/esm/typeof.js",
  "./node_modules/@babel/runtime/helpers/jsx.js": "./node_modules/@babel/runtime/helpers/esm/jsx.js",
  "./node_modules/@babel/runtime/helpers/asyncIterator.js": "./node_modules/@babel/runtime/helpers/esm/asyncIterator.js",
  "./node_modules/@babel/runtime/helpers/AwaitValue.js": "./node_modules/@babel/runtime/helpers/esm/AwaitValue.js",
  "./node_modules/@babel/runtime/helpers/AsyncGenerator.js": "./node_modules/@babel/runtime/helpers/esm/AsyncGenerator.js",
  "./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js": "./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js",
  "./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js": "./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js",
  "./node_modules/@babel/runtime/helpers/asyncGeneratorDelegate.js": "./node_modules/@babel/runtime/helpers/esm/asyncGeneratorDelegate.js",
  "./node_modules/@babel/runtime/helpers/asyncToGenerator.js": "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js",
  "./node_modules/@babel/runtime/helpers/classCallCheck.js": "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js",
  "./node_modules/@babel/runtime/helpers/createClass.js": "./node_modules/@babel/runtime/helpers/esm/createClass.js",
  "./node_modules/@babel/runtime/helpers/defineEnumerableProperties.js": "./node_modules/@babel/runtime/helpers/esm/defineEnumerableProperties.js",
  "./node_modules/@babel/runtime/helpers/defaults.js": "./node_modules/@babel/runtime/helpers/esm/defaults.js",
  "./node_modules/@babel/runtime/helpers/defineProperty.js": "./node_modules/@babel/runtime/helpers/esm/defineProperty.js",
  "./node_modules/@babel/runtime/helpers/extends.js": "./node_modules/@babel/runtime/helpers/esm/extends.js",
  "./node_modules/@babel/runtime/helpers/objectSpread.js": "./node_modules/@babel/runtime/helpers/esm/objectSpread.js",
  "./node_modules/@babel/runtime/helpers/objectSpread2.js": "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js",
  "./node_modules/@babel/runtime/helpers/inherits.js": "./node_modules/@babel/runtime/helpers/esm/inherits.js",
  "./node_modules/@babel/runtime/helpers/inheritsLoose.js": "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js",
  "./node_modules/@babel/runtime/helpers/getPrototypeOf.js": "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js",
  "./node_modules/@babel/runtime/helpers/setPrototypeOf.js": "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js",
  "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js": "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js",
  "./node_modules/@babel/runtime/helpers/construct.js": "./node_modules/@babel/runtime/helpers/esm/construct.js",
  "./node_modules/@babel/runtime/helpers/isNativeFunction.js": "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js",
  "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js": "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js",
  "./node_modules/@babel/runtime/helpers/instanceof.js": "./node_modules/@babel/runtime/helpers/esm/instanceof.js",
  "./node_modules/@babel/runtime/helpers/interopRequireDefault.js": "./node_modules/@babel/runtime/helpers/esm/interopRequireDefault.js",
  "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js": "./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js",
  "./node_modules/@babel/runtime/helpers/newArrowCheck.js": "./node_modules/@babel/runtime/helpers/esm/newArrowCheck.js",
  "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js": "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js",
  "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js": "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js",
  "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js": "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js",
  "./node_modules/@babel/runtime/helpers/assertThisInitialized.js": "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js",
  "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js": "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js",
  "./node_modules/@babel/runtime/helpers/createSuper.js": "./node_modules/@babel/runtime/helpers/esm/createSuper.js",
  "./node_modules/@babel/runtime/helpers/superPropBase.js": "./node_modules/@babel/runtime/helpers/esm/superPropBase.js",
  "./node_modules/@babel/runtime/helpers/get.js": "./node_modules/@babel/runtime/helpers/esm/get.js",
  "./node_modules/@babel/runtime/helpers/set.js": "./node_modules/@babel/runtime/helpers/esm/set.js",
  "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js": "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js",
  "./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js": "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js",
  "./node_modules/@babel/runtime/helpers/readOnlyError.js": "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js",
  "./node_modules/@babel/runtime/helpers/writeOnlyError.js": "./node_modules/@babel/runtime/helpers/esm/writeOnlyError.js",
  "./node_modules/@babel/runtime/helpers/classNameTDZError.js": "./node_modules/@babel/runtime/helpers/esm/classNameTDZError.js",
  "./node_modules/@babel/runtime/helpers/temporalUndefined.js": "./node_modules/@babel/runtime/helpers/esm/temporalUndefined.js",
  "./node_modules/@babel/runtime/helpers/tdz.js": "./node_modules/@babel/runtime/helpers/esm/tdz.js",
  "./node_modules/@babel/runtime/helpers/temporalRef.js": "./node_modules/@babel/runtime/helpers/esm/temporalRef.js",
  "./node_modules/@babel/runtime/helpers/slicedToArray.js": "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js",
  "./node_modules/@babel/runtime/helpers/slicedToArrayLoose.js": "./node_modules/@babel/runtime/helpers/esm/slicedToArrayLoose.js",
  "./node_modules/@babel/runtime/helpers/toArray.js": "./node_modules/@babel/runtime/helpers/esm/toArray.js",
  "./node_modules/@babel/runtime/helpers/toConsumableArray.js": "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js",
  "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js": "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js",
  "./node_modules/@babel/runtime/helpers/arrayWithHoles.js": "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js",
  "./node_modules/@babel/runtime/helpers/maybeArrayLike.js": "./node_modules/@babel/runtime/helpers/esm/maybeArrayLike.js",
  "./node_modules/@babel/runtime/helpers/iterableToArray.js": "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js",
  "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js": "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js",
  "./node_modules/@babel/runtime/helpers/iterableToArrayLimitLoose.js": "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimitLoose.js",
  "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js": "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js",
  "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js": "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js",
  "./node_modules/@babel/runtime/helpers/nonIterableSpread.js": "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js",
  "./node_modules/@babel/runtime/helpers/nonIterableRest.js": "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js",
  "./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js": "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js",
  "./node_modules/@babel/runtime/helpers/createForOfIteratorHelperLoose.js": "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelperLoose.js",
  "./node_modules/@babel/runtime/helpers/skipFirstGeneratorNext.js": "./node_modules/@babel/runtime/helpers/esm/skipFirstGeneratorNext.js",
  "./node_modules/@babel/runtime/helpers/toPrimitive.js": "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js",
  "./node_modules/@babel/runtime/helpers/toPropertyKey.js": "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js",
  "./node_modules/@babel/runtime/helpers/initializerWarningHelper.js": "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js",
  "./node_modules/@babel/runtime/helpers/initializerDefineProperty.js": "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js",
  "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js": "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js",
  "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js",
  "./node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js",
  "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js",
  "./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js",
  "./node_modules/@babel/runtime/helpers/classPrivateFieldDestructureSet.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldDestructureSet.js",
  "./node_modules/@babel/runtime/helpers/classStaticPrivateFieldSpecGet.js": "./node_modules/@babel/runtime/helpers/esm/classStaticPrivateFieldSpecGet.js",
  "./node_modules/@babel/runtime/helpers/classStaticPrivateFieldSpecSet.js": "./node_modules/@babel/runtime/helpers/esm/classStaticPrivateFieldSpecSet.js",
  "./node_modules/@babel/runtime/helpers/classStaticPrivateMethodGet.js": "./node_modules/@babel/runtime/helpers/esm/classStaticPrivateMethodGet.js",
  "./node_modules/@babel/runtime/helpers/classStaticPrivateMethodSet.js": "./node_modules/@babel/runtime/helpers/esm/classStaticPrivateMethodSet.js",
  "./node_modules/@babel/runtime/helpers/decorate.js": "./node_modules/@babel/runtime/helpers/esm/decorate.js",
  "./node_modules/@babel/runtime/helpers/classPrivateMethodGet.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateMethodGet.js",
  "./node_modules/@babel/runtime/helpers/classPrivateMethodSet.js": "./node_modules/@babel/runtime/helpers/esm/classPrivateMethodSet.js",
  "./node_modules/@babel/runtime/helpers/wrapRegExp.js": "./node_modules/@babel/runtime/helpers/esm/wrapRegExp.js",
}

module.exports = aliasesMap

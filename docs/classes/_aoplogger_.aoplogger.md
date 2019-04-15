[aop_logger](../README.md) > ["AopLogger"](../modules/_aoplogger_.md) > [AopLogger](../classes/_aoplogger_.aoplogger.md)

# Class: AopLogger

## Type parameters
#### T :  [AopLogWorker](_aoplogworker_.aoplogworker.md)
## Hierarchy

**AopLogger**

## Index

### Constructors

* [constructor](_aoplogger_.aoplogger.md#constructor)

### Properties

* [aop](_aoplogger_.aoplogger.md#aop)

### Methods

* [_logMethod](_aoplogger_.aoplogger.md#_logmethod)
* [_logPromise](_aoplogger_.aoplogger.md#_logpromise)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AopLogger**(type: *`object`*, className?: *`undefined` \| `string`*): [AopLogger](_aoplogger_.aoplogger.md)

*Defined in [AopLogger.ts:7](https://github.com/thewazaa/ts-aop_logger/blob/4ec8220/src/AopLogger.ts#L7)*

Class to perform AOP logs related to class method, functions or promises.

The main concept is to let you control in an easy way code that is repeated between your different methods (or functions or promises) in a confortable way.

This class doesn't rewrite your code. It uses the base structure of typescript to let you perform tasks in a quite easy way. Also, on classes, you can decide to use it as an external class or an extension. Whatever makes you feel more comfortable.

*__example__*:
 ```typescript

class loggerWorker extends AopLogWorker { ... }

class Whatever extends AopLogger<loggerWorker> {
   constructor(...) {
     Super(loggerWorker, Whatever.name);
     ...
   }

   public methodSomething(...): ... {
     return this._logMethod(this.methodSomething.name, arguments, { okLog: eLogLevel.info, koLog: eLogLevel.error, okMessage: 'ok', koMessage: 'ko' }, () => {
       ...
     });
   }

   public async methodSomething2(...): Promise<...> {
     return this._logPromise(this.methodSomething2.name, arguments, { okLog: eLogLevel.info, koLog: eLogLevel.error, okMessage: 'ok', koMessage: 'ko' }, new Promise(
       ...
     ));
   }
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | `object` |  Logger worker to define how ans what to log |
| `Optional` className | `undefined` \| `string` |  In case you use it as an extension, it would help you to see the correct namespace path in the worker helper Methods |

**Returns:** [AopLogger](_aoplogger_.aoplogger.md)

___

## Properties

<a id="aop"></a>

### `<Private>` aop

**● aop**: *`Aop`<`T`>*

*Defined in [AopLogger.ts:7](https://github.com/thewazaa/ts-aop_logger/blob/4ec8220/src/AopLogger.ts#L7)*

___

## Methods

<a id="_logmethod"></a>

###  _logMethod

▸ **_logMethod**(methodName: *`string`*, _arguments: *`any`*, loggerParams: *[iLoggerOptions](../interfaces/_interfaces_.iloggeroptions.md)*, method: *`function`*): `any`

*Defined in [AopLogger.ts:58](https://github.com/thewazaa/ts-aop_logger/blob/4ec8220/src/AopLogger.ts#L58)*

Auxiliar method to perform AOP logging of methods

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| methodName | `string` |  method name |
| _arguments | `any` |  arguments |
| loggerParams | [iLoggerOptions](../interfaces/_interfaces_.iloggeroptions.md) |  logging options |
| method | `function` |  method to log |

**Returns:** `any`
retrieved value

___
<a id="_logpromise"></a>

###  _logPromise

▸ **_logPromise**(methodName: *`string`*, _arguments: *`any`*, loggerParams: *[iLoggerOptions](../interfaces/_interfaces_.iloggeroptions.md)*, promise: *`Promise`<`any`>*): `Promise`<`any`>

*Defined in [AopLogger.ts:70](https://github.com/thewazaa/ts-aop_logger/blob/4ec8220/src/AopLogger.ts#L70)*

Auxiliar method to perform AOP logging of promises

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| methodName | `string` |  method name |
| _arguments | `any` |  arguments |
| loggerParams | [iLoggerOptions](../interfaces/_interfaces_.iloggeroptions.md) |  logging options |
| promise | `Promise`<`any`> |  promise to log |

**Returns:** `Promise`<`any`>
retrieved value

___


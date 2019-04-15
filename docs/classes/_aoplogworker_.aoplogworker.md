[aop_logger](../README.md) > ["AopLogWorker"](../modules/_aoplogworker_.md) > [AopLogWorker](../classes/_aoplogworker_.aoplogworker.md)

# Class: AopLogWorker

## Hierarchy

 `AopWorker`

**↳ AopLogWorker**

## Index

### Constructors

* [constructor](_aoplogworker_.aoplogworker.md#constructor)

### Properties

* [_arguments](_aoplogworker_.aoplogworker.md#_arguments)
* [_endDate](_aoplogworker_.aoplogworker.md#_enddate)
* [_exception](_aoplogworker_.aoplogworker.md#_exception)
* [_extra](_aoplogworker_.aoplogworker.md#_extra)
* [_methodName](_aoplogworker_.aoplogworker.md#_methodname)
* [_ret](_aoplogworker_.aoplogworker.md#_ret)
* [_startDate](_aoplogworker_.aoplogworker.md#_startdate)

### Methods

* [end](_aoplogworker_.aoplogworker.md#end)
* [exception](_aoplogworker_.aoplogworker.md#exception)
* [logger](_aoplogworker_.aoplogworker.md#logger)
* [start](_aoplogworker_.aoplogworker.md#start)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AopLogWorker**(): [AopLogWorker](_aoplogworker_.aoplogworker.md)

*Overrides AopWorker.__constructor*

*Defined in [AopLogWorker.ts:33](https://github.com/thewazaa/ts-aop_logger/blob/2b371d2/src/AopLogWorker.ts#L33)*

It controls the code region defined through the AppLoger, to let you define what to log.

*__example__*:
 ```typescript

class loggerWorker extends AopLogWorker {
   public logLevel: eLogLevel, message?: string): void
     console.log(logLevel, this._startDate, this._endDate, this._methodName, this._arguments, this._exception, this._ret, message);
   }
}
```

**Returns:** [AopLogWorker](_aoplogworker_.aoplogworker.md)

___

## Properties

<a id="_arguments"></a>

### `<Protected>` _arguments

**● _arguments**: *`any`*

*Defined in [AopLogWorker.ts:25](https://github.com/thewazaa/ts-aop_logger/blob/2b371d2/src/AopLogWorker.ts#L25)*

method arguments

___
<a id="_enddate"></a>

### `<Protected>` _endDate

**● _endDate**: *`Date`*

*Defined in [AopLogWorker.ts:17](https://github.com/thewazaa/ts-aop_logger/blob/2b371d2/src/AopLogWorker.ts#L17)*

call end date

___
<a id="_exception"></a>

### `<Protected>``<Optional>` _exception

**● _exception**: *`undefined` \| `string`*

*Defined in [AopLogWorker.ts:29](https://github.com/thewazaa/ts-aop_logger/blob/2b371d2/src/AopLogWorker.ts#L29)*

retrieved exception

___
<a id="_extra"></a>

###  _extra

**● _extra**: *[iLoggerOptions](../interfaces/_interfaces_.iloggeroptions.md)*

*Overrides AopWorker._extra*

*Defined in [AopLogWorker.ts:9](https://github.com/thewazaa/ts-aop_logger/blob/2b371d2/src/AopLogWorker.ts#L9)*

extra parameters provided to manage logs

___
<a id="_methodname"></a>

### `<Protected>` _methodName

**● _methodName**: *`string`*

*Defined in [AopLogWorker.ts:21](https://github.com/thewazaa/ts-aop_logger/blob/2b371d2/src/AopLogWorker.ts#L21)*

method name

___
<a id="_ret"></a>

### `<Protected>``<Optional>` _ret

**● _ret**: *`any`*

*Defined in [AopLogWorker.ts:33](https://github.com/thewazaa/ts-aop_logger/blob/2b371d2/src/AopLogWorker.ts#L33)*

retrieved back parameters

___
<a id="_startdate"></a>

### `<Protected>` _startDate

**● _startDate**: *`Date`*

*Defined in [AopLogWorker.ts:13](https://github.com/thewazaa/ts-aop_logger/blob/2b371d2/src/AopLogWorker.ts#L13)*

call start date

___

## Methods

<a id="end"></a>

###  end

▸ **end**(methodName: *`string`*, _arguments: *`any`*, ret?: *`any`*): `void`

*Overrides AopWorker.end*

*Defined in [AopLogWorker.ts:86](https://github.com/thewazaa/ts-aop_logger/blob/2b371d2/src/AopLogWorker.ts#L86)*

It runs at the end the method. Even when an exception is being performed

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| methodName | `string` |  method name |
| _arguments | `any` |  method arguments |
| `Optional` ret | `any` |  retrieved value |

**Returns:** `void`

___
<a id="exception"></a>

###  exception

▸ **exception**(methodName: *`string`*, _arguments: *`any`*, exception: *`string`*): `void`

*Overrides AopWorker.exception*

*Defined in [AopLogWorker.ts:74](https://github.com/thewazaa/ts-aop_logger/blob/2b371d2/src/AopLogWorker.ts#L74)*

It runs in case of exception.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| methodName | `string` |  method name |
| _arguments | `any` |  method arguments |
| exception | `string` |  exception performed |

**Returns:** `void`

___
<a id="logger"></a>

### `<Abstract>` logger

▸ **logger**(logLevel: *[eLogLevel](../enums/_enums_.eloglevel.md)*, message?: *`undefined` \| `string`*): `void`

*Defined in [AopLogWorker.ts:100](https://github.com/thewazaa/ts-aop_logger/blob/2b371d2/src/AopLogWorker.ts#L100)*

Logger method, to define your log operations

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| logLevel | [eLogLevel](../enums/_enums_.eloglevel.md) |  log level |
| `Optional` message | `undefined` \| `string` |  log message |

**Returns:** `void`

___
<a id="start"></a>

###  start

▸ **start**(methodName: *`string`*, _arguments: *`any`*): `void`

*Overrides AopWorker.start*

*Defined in [AopLogWorker.ts:62](https://github.com/thewazaa/ts-aop_logger/blob/2b371d2/src/AopLogWorker.ts#L62)*

It runs at the start of the region

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| methodName | `string` |  method name |
| _arguments | `any` |  method arguments |

**Returns:** `void`

___


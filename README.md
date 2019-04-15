Index
-----

### Version changes

*   1.0.0 Initial release

### Example

```typescript

class loggerWorker extends AopLogWorker {
   public logLevel: eLogLevel, message?: string): void
     console.log(logLevel, this._startDate, this._endDate, this._methodName, this._arguments, this._exception, this._ret, message);
   }
}

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

import { assert } from 'chai';

import { AopLogger, eLogLevel } from '../src/index';

import { testWorker, _log } from './AopLogWorker';

class Test extends AopLogger<testWorker> {
  constructor() { super(testWorker, Test.name); }

  public testReturnValue(arg1: number, arg2: string): any {
    return this._logMethod(this.testReturnValue.name, { 0: arg1, 1: arg2 }, { okLog: eLogLevel.info, koLog: eLogLevel.error, okMessage: 'ok', koMessage: 'ko' },
      () => { return { arg1: arg1, arg2: arg2 }; });
  }

  public testReturnValueException(arg1: number, arg2: string): any {
    return this._logMethod(this.testReturnValueException.name, { 0: arg1, 1: arg2 }, { okLog: eLogLevel.info, koLog: eLogLevel.error, okMessage: 'ok', koMessage: 'ko' },
      () => { throw 'exception ' + arg1 + arg2; });
  }

  public async testReturnPromise(arg1: number, arg2: string): Promise<any> {
    return this._logPromise(this.testReturnPromise.name, { 0: arg1, 1: arg2 }, { okLog: eLogLevel.info, koLog: eLogLevel.error, okMessage: 'ok', koMessage: 'ko' },
      new Promise((ret) => { ret({ arg1: arg1, arg2: arg2 }); }));
  }

  public async testReturnPromiseException(arg1: number, arg2: string): Promise<any> {
    return this._logPromise(this.testReturnPromiseException.name, { 0: arg1, 1: arg2 }, { okLog: eLogLevel.info, koLog: eLogLevel.error, okMessage: 'ok', koMessage: 'ko' },
      new Promise(() => { throw 'exception ' + arg1 + arg2; }));
  }
}

function testMethodValue(arg1: number, arg2: string): any {
  return new AopLogger<testWorker>(testWorker)._logMethod(testMethodValue.name, arguments, { okLog: eLogLevel.info, koLog: eLogLevel.error, okMessage: 'ok', koMessage: 'ko' },
    () => { return { arg1: arg1, arg2: arg2 }; });
}

function testMethodException(arg1: number, arg2: string): any {
  return new AopLogger<testWorker>(testWorker)._logMethod(testMethodException.name, arguments, { okLog: eLogLevel.info, koLog: eLogLevel.error, okMessage: 'ok', koMessage: 'ko' },
    () => { throw 'exception ' + arg1 + arg2; });
}

describe.only('Class', () => {
  describe('Class Method retrieves one value', () => { check(() => { return new Test().testReturnValue(1, 'a'); }, 'Test.testReturnValue', '{"arg1":1,"arg2":"a"}', undefined) });
  describe('Class Method retrieves one value... no, exception!', () => { check(() => { return new Test().testReturnValueException(1, 'a'); }, 'Test.testReturnValueException', undefined, 'exception 1a') });

  describe('Class Method retrieves one promise', () => { check(async () => { return await new Test().testReturnPromise(1, 'a'); }, 'Test.testReturnPromise', '{"arg1":1,"arg2":"a"}', undefined) });
  describe('Class Method retrieves one promise... no, exception!', () => { check(async () => { return await new Test().testReturnPromiseException(1, 'a'); }, 'Test.testReturnPromiseException', undefined, 'exception 1a') });

  describe('Function retrieves one value', () => { check(() => { return testMethodValue(1, 'a'); }, 'testMethodValue', '{"arg1":1,"arg2":"a"}', undefined) });
  describe('Function retrieves one value... no, exception!', () => { check(() => { return testMethodException(1, 'a'); }, 'testMethodException', undefined, 'exception 1a') });
});

function check(call: () => {}, methodName: string, ret?: any, exception?: any): void {
  it('Call method', async () => {
    try {
      var tmp: any = await call();
      if (exception == undefined) {
        assert.equal(1, tmp.arg1);
        assert.equal('a', tmp.arg2);
      }
    } catch (err) {
      if (exception == undefined) {
        assert.fail()
      } else {
        assert.equal(exception, err);
      }
    }
  });
  it('Check log level', async () => {
    assert.equal(exception == undefined ? eLogLevel.info : eLogLevel.error, _log.logLevel);
  });
  it('Check message', async () => {
    assert.equal(exception == undefined ? "ok" : "ko", _log.message);
  });
  it('Method name', async () => {
    assert.equal(methodName, _log.methodName);
  });
  it('Argument', async () => {
    assert.equal(1, _log.arguments[0]);
    assert.equal('a', _log.arguments[1]);
  });
  it('Check exception level', async () => {
    assert.equal(exception, _log.exception);
  });
  it('Check ret', async () => {
    assert.equal(ret, JSON.stringify(_log.ret));
  });
}

import { assert } from 'chai';

//import aop_logger from '../index';
/*
import { testWorker, _log } from './AopWorker';
/*
class Test extends aop_logger.AopLogger<testWorker> {
  constructor() { super(testWorker, Test.name); }

  public testReturnValue(arg1: number, arg2: string): any {
    return this._logMethod(this.testReturnValue.name, arguments, { okLog: aop_logger.eLogLevel.info, koLog: aop_logger.eLogLevel.error, okMessage: 'ok', koMessage: 'ko' },
      () => { return { arg1: arg1, arg2: arg2 }; });
  }

  public testReturnValueException(arg1: number, arg2: string): any {
    return this._logMethod(this.testReturnValueException.name, arguments, { okLog: aop_logger.eLogLevel.info, koLog: aop_logger.eLogLevel.error, okMessage: 'ok', koMessage: 'ko' },
      () => { throw 'exception ' + arg1 + arg2; });
  }

  public async testReturnPromise(arg1: number, arg2: string): Promise<any> {
    return this._logPromise(this.testReturnPromise.name, arguments, { okLog: aop_logger.eLogLevel.info, koLog: aop_logger.eLogLevel.error, okMessage: 'ok', koMessage: 'ko' },
     new Promise((ret) => { ret({ arg1: arg1, arg2: arg2 }); }));
  }

  public async testReturnPromiseException(arg1: number, arg2: string): Promise<any> {
    return this._logPromise(this.testReturnPromiseException.name, arguments, { okLog: aop_logger.eLogLevel.info, koLog: aop_logger.eLogLevel.error, okMessage: 'ok', koMessage: 'ko' },
     new Promise((ret) => { throw 'exception ' + arg1 + arg2; }));
  }
}

function testMethodValue(arg1: number, arg2: string): any {
  return new aop_logger.AopLogger<testWorker>(testWorker)._logMethod(testMethodValue.name, arguments, { okLog: aop_logger.eLogLevel.info, koLog: aop_logger.eLogLevel.error, okMessage: 'ok', koMessage: 'ko' },
  () => { return { arg1: arg1, arg2: arg2 }; });
}

function testMethodException(arg1: number, arg2: string): any {
  return new aop_logger.AopLogger<testWorker>(testWorker)._logMethod(testMethodException.name, arguments, { okLog: aop_logger.eLogLevel.info, koLog: aop_logger.eLogLevel.error, okMessage: 'ok', koMessage: 'ko' },
  () => { throw 'exception ' + arg1 + arg2; });
}

describe.only('Class', () => {
  describe('Class Method retrieves one value', () => { check(() => { return new Test().testReturnValue(1, 'a'); }, 'Test.testReturnValue', '{"0":1,"1":"a"}', undefined) });
  describe('Class Method retrieves one value... no, exception!', () => { check(() => { return new Test().testReturnValueException(1, 'a'); }, 'Test.testReturnValueException', '{"0":1,"1":"a"}', 'exception 1a') });

  describe('Class Method retrieves one promise', () => { check(async () => { return await new Test().testReturnPromise(1, 'a'); }, 'Test.testReturnPromise', '{"0":1,"1":"a"}', undefined) });
  describe('Class Method retrieves one promise... no, exception!', () => { check(async () => { return await new Test().testReturnPromiseException(1, 'a'); }, 'Test.testReturnPromiseException', '{"0":1,"1":"a"}', 'exception 1a') });

  describe('Function retrieves one value', () => { check(() => { return testMethodValue(1, 'a'); }, 'testMethodValue', '{"0":1,"1":"a"}', undefined) });
  describe('Function retrieves one value... no, exception!', () => { check(() => { return testMethodException(1, 'a'); }, 'testMethodException', '{"0":1,"1":"a"}', 'exception 1a') });
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
  /*
  it('Check method start', async () => {
    assert.equal('start', _start[0]);
    assert.equal(methodName, _start[1]);
    assert.equal('{"0":1,"1":"a"}', _start[2]);
  });
  it('Check method end', async () => {
    assert.equal('end', _end[0]);
    assert.equal(methodName, _end[1]);
    assert.equal(ret, _end[2]);
    if (exception == undefined) {
      assert.equal(1, _end[3].arg1);
      assert.equal('a', _end[3].arg2);
    } else
      assert.isUndefined(_end[3]);
  });
  it('Check method exception', async () => {
    if (exception == undefined) {
      assert.equal(undefined, _exception);
    } else {
      assert.equal('exception', _exception[0]);
      assert.equal(methodName, _exception[1]);
      assert.equal(ret, _exception[2]);
      assert.equal(exception, _exception[3]);
    }
  });*/
//}

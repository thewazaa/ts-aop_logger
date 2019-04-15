import { Aop } from 'aop_pattern';

import { iLoggerOptions } from './Interfaces';
import { AopLogWorker } from './AopLogWorker';

export class AopLogger<T extends AopLogWorker> {
  private readonly aop: Aop<T>;

  /**
   * Class to perform AOP logs  related to class method, functions or promises.
   *
   * The main concept is to let you control in an easy way code that is repeated
   * between your different methods (or functions or promises) in a confortable
   * way.
   *
   * This class doesn't rewrite your code. It uses the base structure of
   * typescript to let you perform tasks in a quite easy way. Also, on classes,
   * you can decide to use it as an external class or an extension. Whatever makes
   * you feel more comfortable.
   * @param type      Logger worker to define how ans what to log
   * @param className In case you use it as an extension, it would help you to
   *                  see the correct namespace path in the worker helper Methods
   * @example
   * ```typescript
   *
   * class loggerWorker extends AopLogWorker { ... }
   *
   * class Whatever extends AopLogger<loggerWorker> {
   *    constructor(...) {
   *      Super(loggerWorker, Whatever.name);
   *      ...
   *    }
   *
   *    public methodSomething(...): ... {
   *      return this._logMethod(this.methodSomething.name, arguments, { okLog: eLogLevel.info, koLog: eLogLevel.error, okMessage: 'ok', koMessage: 'ko' }, () => {
   *        ...
   *      });
   *    }
   *
   *    public async methodSomething2(...): Promise<...> {
   *      return this._logPromise(this.methodSomething2.name, arguments, { okLog: eLogLevel.info, koLog: eLogLevel.error, okMessage: 'ok', koMessage: 'ko' }, new Promise(
   *        ...
   *      ));
   *    }
   * }
   * ```
   */
  constructor(type: (new () => T), className?: string) { this.aop = new Aop<T>(type, className); }

  /**
   * Auxiliar method to perform AOP logging of methods
   * @param  methodName   method name
   * @param  _arguments   arguments
   * @param  loggerParams logging options
   * @param  method       method to log
   * @return              retrieved value
   */
  public _logMethod(methodName: string, _arguments: any, loggerParams: iLoggerOptions, method: () => {}): Promise<any> {
    return this.aop._intereceptMethod(methodName, _arguments, method, loggerParams);
  }

  /**
   * Auxiliar method to perform AOP logging of promises
   * @param  methodName   method name
   * @param  _arguments   arguments
   * @param  loggerParams logging options
   * @param  promise      promise to log
   * @return              retrieved value
   */
  public async _logPromise(methodName: string, _arguments: any, loggerParams: iLoggerOptions, promise: Promise<any>): Promise<any> {
    return this.aop._intereceptPromise(methodName, _arguments, promise, loggerParams);
  }
}

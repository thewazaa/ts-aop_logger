//import aop_pattern from 'aop_pattern';
/*
import { eLogLevel } from './Enums';
import { iLoggerParams } from './Interfaces';
import { AopWorker } from './AopWorker';

export class AopLogger<T extends AopWorker> {
  private readonly aop: aop_pattern.Aop<T>;

  constructor(type: (new () => T), className?: string) { this.aop = new aop_pattern.Aop<T>(type, className); }

  public _logMethod(methodName: string, _arguments: any, loggerParams: iLoggerParams, method: () => {}): Promise<any> {
    return this.aop._intereceptMethod(methodName, _arguments, method, loggerParams);
  }

  public async _logPromise(methodName: string, _arguments: any, loggerParams: iLoggerParams, promise: Promise<any>): Promise<any> {
    return this.aop._intereceptPromise(methodName, _arguments, promise, loggerParams);
  }
}
*/

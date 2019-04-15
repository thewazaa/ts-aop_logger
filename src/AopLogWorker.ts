import { AopWorker } from 'aop_pattern';
import { eLogLevel } from './Enums';
import { iLoggerOptions } from './Interfaces';

export abstract class AopLogWorker extends AopWorker {
  /**
   * extra parameters provided to manage logs
   */
  public _extra: iLoggerOptions;
  /**
   * call start date
   */
  protected _startDate: Date;
  /**
   * call end date
   */
  protected _endDate: Date;
  /**
   * method name
   */
  protected _methodName: string;
  /**
   * method arguments
   */
  protected _arguments: any;
  /**
   * retrieved exception
   */
  protected _exception?: string;
  /**
   * retrieved back parameters
   */
  protected _ret?: any;

  /**
 * It controls the code region defined through the AppLoger, to let you
 * define what to log.
 *
 * @example
 * ```typescript
 *
 * class loggerWorker extends AopLogWorker {
 *    public logLevel: eLogLevel, message?: string): void
 *      console.log(logLevel, this._startDate, this._endDate, this._methodName, this._arguments, this._exception, this._ret, message);
 *    }
 * }
 * ```
 */
  constructor() {
    super();
    this._extra = { okLog: eLogLevel.info, koLog: eLogLevel.error };
    this._startDate = new Date();
    this._endDate = new Date();
    this._methodName = "";
  }

  /**
   * It runs at the start of the region
   * @param methodName method name
   * @param _arguments method arguments
   */
  public start(methodName: string, _arguments: any): void {
    this._startDate = new Date();
    this._methodName = methodName;
    this._arguments = _arguments;
  }

  /**
 * It runs in case of exception.
 * @param methodName method name
 * @param _arguments method arguments
 * @param exception  exception performed
 */
  public exception(methodName: string, _arguments: any, exception: string): void {
    this._methodName = methodName;
    this._arguments = _arguments;
    this._exception = exception;
  }

  /**
 * It runs at the end the method. Even when an exception is being performed
 * @param methodName method name
 * @param _arguments method arguments
 * @param ret        retrieved value
 */
  public end(methodName: string, _arguments: any, ret?: any): void {
    this._endDate = new Date();
    this._methodName = methodName;
    this._arguments = _arguments;
    this._ret = ret;

    this.logger(this._exception != undefined ? this._extra.koLog : this._extra.okLog, this._exception != undefined ? this._extra.koMessage : this._extra.okMessage);
  }

  /**
   * Logger method, to define your log operations
   * @param logLevel log level
   * @param message  log message
   */
  abstract logger(logLevel: eLogLevel, message?: string): void;
}

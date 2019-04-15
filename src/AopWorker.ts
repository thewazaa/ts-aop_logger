import { AopWorker } from 'aop_pattern';
import { eLogLevel } from './Enums';
import { iLoggerParams } from './Interfaces';

export abstract class AopLogWorker extends AopWorker {
  //public _extra: iLoggerParams;
  protected _startDate: Date;
  protected _endDate: Date;
  protected _methodName: string;
  protected _arguments: any;
  protected _exception?: string;
  protected _ret?: any;

  constructor() {
    super();
    this._extra = { okLog: eLogLevel.info, koLog: eLogLevel.error };
    this._startDate = new Date();
    this._endDate = new Date();
    this._methodName = "";
  }

  public start(methodName: string, _arguments: any): void {
    this._startDate = new Date();
    this._methodName = methodName;
    this._arguments = _arguments;
  }
  public exception(methodName: string, _arguments: any, exception: string): void {
    this._methodName = methodName;
    this._arguments = _arguments;
    this._exception = exception;
  }
  public end(methodName: string, _arguments: any, ret?: any): void {
    this._endDate = new Date();
    this._methodName = methodName;
    this._arguments = _arguments;
    this._ret = ret;

    console.log(this._extra);
    //this.logger(this._exception != undefined ? this._extra.koLog : this._extra.okLog, this._exception != undefined ? this._extra.koMessage : this._extra.okMessage);
  }

  abstract logger(logLevel: eLogLevel, message?: string): void;
}

import { AopLogWorker, eLogLevel } from '../index';

var _log: {
  logLevel: eLogLevel,
  message?: string,
  startDate: Date,
  endDate: Date,
  methodName: string,
  arguments: any,
  exception?: string,
  ret?: any
};

export abstract class testWorker extends AopLogWorker {
  public logger(logLevel: eLogLevel, message?: string): void {
    _log = {
      logLevel: logLevel,
      message: message,
      startDate: this._startDate,
      endDate: this._endDate,
      methodName: this._methodName,
      arguments: this._arguments,
      exception: this._exception,
      ret: this._ret
    }
  }
}

export { _log };

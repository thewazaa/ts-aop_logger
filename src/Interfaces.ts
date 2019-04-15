import { eLogLevel } from './Enums';

export interface iLoggerParams {
  okLog: eLogLevel,
  koLog: eLogLevel,
  okMessage?: string,
  koMessage?: string
};

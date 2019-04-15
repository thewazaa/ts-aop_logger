import { eLogLevel } from './Enums';

/**
 * Interface for logging management. It manages the log levels and their respective
 * base messages (on ko extra info will come from throwing the exception)
 */
export interface iLoggerOptions {
  /**
   * ok log level
   */
  okLog: eLogLevel,
  /**
   * ko log level
   */
  koLog: eLogLevel,
  /**
   * ok log message
   */
  okMessage?: string,
  /**
   * ko log message
   */
  koMessage?: string
};

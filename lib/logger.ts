export enum LogLevel {
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

export class Logger {
  private context: string

  constructor(context: string) {
    this.context = context
  }

  debug(message: any, ...optionalParams: any[]): void {
    this.log(LogLevel.DEBUG, message, ...optionalParams)
  }

  info(message: any, ...optionalParams: any[]): void {
    this.log(LogLevel.INFO, message, ...optionalParams)
  }

  warn(message: any, ...optionalParams: any[]): void {
    this.log(LogLevel.WARN, message, ...optionalParams)
  }

  error(message: any, ...optionalParams: any[]): void {
    this.log(LogLevel.ERROR, message, ...optionalParams)
  }

  private log(level: LogLevel, message: any, ...optionalParams: any[]): void {
    const timestamp = new Date().toISOString()
    const formattedMessage = `[${timestamp}] [${level}] [${this.context}] - ${message}`

    switch (level) {
      case LogLevel.DEBUG:
        console.debug(formattedMessage, ...optionalParams)
        break
      case LogLevel.INFO:
        console.info(formattedMessage, ...optionalParams)
        break
      case LogLevel.WARN:
        console.warn(formattedMessage, ...optionalParams)
        break
      case LogLevel.ERROR:
        console.error(formattedMessage, ...optionalParams)
        break
    }
  }
}

export function createLogger(context: string): Logger {
  return new Logger(context)
}


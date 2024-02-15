const { createLogger, transports, format } = require("winston");

process.on('uncaughtException', (error) => {
    errorLogger.error(`Uncaught Exception ${error}`)
})

// create a logger instance
const logger = createLogger({
  lever: "info", // logonly messages with level 'info' and above
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(), // log to the console
    new transports.File({ filename: "app.log" }), // log to a file
  ],
});

// error logger
const errorLogger = createLogger({
    lever: "info", // logonly messages with level 'info' and above
    format: format.combine(
      format.timestamp(),
      format.printf(({ timestamp, level, message, error }) => {
        return `${timestamp} [${level}]: ${message}`;
      })
    ),
    transports: [
      new transports.Console(), // log to the console
      new transports.File({ filename: "app.log" }), // log to a file
    ],
  });

// using the logger

logger.info("This is an info message");
errorLogger.error("This is an error message");
logger.warn("This is an warning message");

errorLogger.debug("This should not show up");

try {
  // somecode that may throw an error
  throw new Error("This is an error!\n");
} catch (error) {
  errorLogger.error(`An error occured: ${error}\n`);
}

throw new Error("Wild Uncaught Error!\n");
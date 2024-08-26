const winston = require("winston");

// Create a new logger instance for only basic loggin (info, error, warn)
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

// Log an info message
logger.info("info message");

// Log an error message
logger.error("log message");

// Log a warning message
logger.warn("warn message");

// Log a debug message
logger.debug("debug message");

// log by passing loggin level
logger.log("info", "log message");

// log debug by passing loggin level
logger.debug("debug");

const winston = require("winston");
const { combine, timestamp, printf, colorize, align, json } = winston.format;

// Create a new logger with syslog levels
const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  level: "info",
  format: combine(timestamp(), json()),
  // transport log to console
  transports: [
    // transport log to console
    new winston.transports.Console(),
    // transport log to file
    new winston.transports.File({
      filename: "./logs/combined.log",
    }),
    // transport log to file with error level only
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error",
    }),
  ],
});

// Log an info message
logger.info("Info message");
logger.error("Error message");

const winston = require("winston");
const { combine, timestamp, printf, colorize, align, json } = winston.format;

// Create a new logger with syslog levels
const logger1 = winston.createLogger({
  levels: winston.config.syslog.levels,
  level: "info",
  format: winston.format.cli(),
  //   format: winston.format.simple(),
  //   format: winston.format.json(),
  //   format: winston.format.colorize({ all: true }),
  format: combine(timestamp({ format: "YYYY-MM-DD hh:mm:ss.SSS A" }), json()),
  //   format: combine(
  //     colorize({ all: true }),
  //     timestamp({
  //       format: "YYYY-MM-DD hh:mm:ss.SSS A",
  //     }),
  //     align(),
  //     printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  //   ),
  transports: [new winston.transports.Console()],
});

// Create a new logger with syslog levels
const logger2 = winston.createLogger({
  levels: winston.config.syslog.levels,
  level: "info",
  format: winston.format.colorize({ all: true }),
  transports: [new winston.transports.Console()],
});

// Log an info message
logger1.info("logger1 info message");

// Log an error message
logger1.error("logger1 error message");

const winston = require("winston");

// Create a new logger with syslog levels
const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

// Log an info message
logger.info("info message");

// Log an error message
logger.error("error message");

// Log a warning message
logger.alert("alert message");

// Log a critical message
logger.crit("critical message");

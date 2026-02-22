import winston from "winston";
import path from "path";
import fs from "fs";

const { combine, timestamp, printf, json, errors } = winston.format;

const isDev = process.env.NODE_ENV !== "production";

if (isDev) {
  const logsDir = path.join(process.cwd(), "logs");
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }
}

const consoleFormat = printf(({ level, message, timestamp, stack, ...meta }) => {
  const metaStr = Object.keys(meta).length
    ? `\n  ${JSON.stringify(meta, null, 2)}`
    : "";
  const stackStr = stack ? `\n${stack}` : "";
  return `[${timestamp}] ${level}: ${message}${metaStr}${stackStr}`;
});

const fileFormat = printf(({ level, message, timestamp, stack, ...meta }) => {
  const metaStr = Object.keys(meta).length
    ? `\n  ${JSON.stringify(meta, null, 2)}`
    : "";
  const stackStr = stack ? `\n${stack}` : "";
  return `[${timestamp}] ${level.toUpperCase()}: ${message}${metaStr}${stackStr}`;
});

const transports: winston.transport[] = [];

if (isDev) {
  transports.push(
    new winston.transports.File({
      filename: "logs/dev.log",
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        fileFormat
      ),
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        errors({ stack: true }),
        fileFormat
      ),
    })
  );
} else {
  // Prod: console only (Vercel captures stdout automatically)
  transports.push(
    new winston.transports.Console({
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        json() // Vercel displays JSON logs nicely in their dashboard
      ),
    })
  );
}

const logger = winston.createLogger({
  level: isDev ? "debug" : "info",
  format: combine(errors({ stack: true }), timestamp()),
  transports,
  exitOnError: false,
});

export default logger;
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new DailyRotateFile({
            filename: 'logs/app-%DATE%.log',
            zippedArchive: true,
            maxFiles: '7d',
            maxSize: '1m'
        })
    ]
})


import { Kafka } from "@upstash/kafka";
import { env } from "process";

const kafka = new Kafka({
    url: env.KAFKA_HOST,
    username: env.KAFKA_USERNAME,
    password: env.KAFKA_PASSWORD
});

const kafka_producer = kafka.producer();
const kafka_consumer = kafka.consumer();

export {
    kafka,
    kafka_producer,
    kafka_consumer
};
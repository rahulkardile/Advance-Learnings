import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    brokers: ['192.168.43.234:9092'],
    clientId: 'zomato'
});

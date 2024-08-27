import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId: "Kafka-client-learnings",
    brokers: ["192.168.161.234:9092"],
})
import { Kafka } from 'kafkajs';

const kafka = new Kafka({ brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'notification-service' });

export const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'todo-events', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const event = JSON.parse(message.value!.toString());
      console.log('Received event:', event);

      // Handle events (e.g., send a notification)
      if (event.type === 'TODO_CREATED') {
        console.log('New To-Do Created:', event.payload);
      }
    },
  });
};


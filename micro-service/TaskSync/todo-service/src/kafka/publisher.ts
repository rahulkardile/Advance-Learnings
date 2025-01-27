import { Kafka } from 'kafkajs';
import { TodoCreatedEvent } from '../shared/types';

const kafka = new Kafka({ brokers: ['localhost:9092'] });
const producer = kafka.producer();

export const publishTodoCreated = async (todo: TodoCreatedEvent['payload']) => {
  await producer.connect();
  await producer.send({
    topic: 'todo-events',
    messages: [{ value: JSON.stringify({ type: 'TODO_CREATED', payload: todo }) }],
  });
  await producer.disconnect();
};

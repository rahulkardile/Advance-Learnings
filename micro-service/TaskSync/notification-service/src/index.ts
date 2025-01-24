import express from 'express';
import { startConsumer } from './kafka/subscriber';

const app = express();

app.use(express.json());

startConsumer()
  .then(() => console.log('Notification Service started Kafka consumer'))
  .catch((err) => console.error(err));

app.listen(5003, () => console.log('Notification Service running on port 5003'));


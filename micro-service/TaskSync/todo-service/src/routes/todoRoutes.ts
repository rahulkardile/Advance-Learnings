import express from 'express';
import Todo from '../models/todoModel';
import { publishTodoCreated } from '../kafka/publisher';

const router = express.Router();

// Create a new To-Do
router.post('/', async (req, res) => {
  try {
    const todo: any = await Todo.create(req.body);

    // Publish To-Do Created event to Kafka
    await publishTodoCreated(todo);

    res.status(201).json(todo);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Fetch all To-Dos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;


import express from 'express';
import Todo from '../models/todoModel';
import { publishTodoCreated } from '../kafka/publisher';
import { TodoDocument } from '../shared/types';
import axios from 'axios';

const router = express.Router();

const USER_SERVICE_URL = 'http://localhost:5001';

router.post('/', async (req, res) => {
  try {
    
    const { title, description, completed, username } = req.body;
    
    const usernameValidationResponse = await axios.get(`${USER_SERVICE_URL}/api/users/check-user/${username}`);

    if (!usernameValidationResponse.data.userFind) {

      return res.status(400).json({
        error: 'Invalid username. Please provide a valid username.',
      });
    }

    // Create a new Todo document
    const todo: TodoDocument = await Todo.create({
      title,
      description,
      completed: completed || false,
      username,
    });

    // Publish event to Kafka
    await publishTodoCreated(todo);

    console.log('Todo created and published');
    res.status(201).json(todo);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;


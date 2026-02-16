import express from 'express';
import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
  getRecommendations,
} from '../controllers/todoController.js';

const router = express.Router();

// Get all todos and create new todo
router.route('/').get(getTodos).post(createTodo);

// Get, update, delete single todo
router.route('/:id').get(getTodo).put(updateTodo).delete(deleteTodo);

// Toggle todo completion
router.patch('/:id/toggle', toggleTodo);

// Get AI recommendations
router.post('/recommend', getRecommendations);

export default router;

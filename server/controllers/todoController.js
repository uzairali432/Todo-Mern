import Todo from '../models/Todo.js';

// Get all todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single todo
export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ success: false, message: 'Todo not found' });
    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create todo
export const createTodo = async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;
    if (!title || !title.trim()) {
      return res.status(400).json({ success: false, message: 'Title is required' });
    }
    const todo = await Todo.create({ title: title.trim(), description, priority, dueDate });
    res.status(201).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update todo
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const todo = await Todo.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!todo) return res.status(404).json({ success: false, message: 'Todo not found' });
    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete todo
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) return res.status(404).json({ success: false, message: 'Todo not found' });
    res.status(200).json({ success: true, message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Toggle todo completion
export const toggleTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ success: false, message: 'Todo not found' });
    todo.completed = !todo.completed;
    await todo.save();
    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

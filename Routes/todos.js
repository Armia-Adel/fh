// Imports
const Todo = require('../Models/Todo');
const router = require('express').Router();


// Create Todo
router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(200).json(newTodo);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update Todo
router.put('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json('Post Updated');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete Todo
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndRemove(req.params.id);
        res.status(200).json('Post Deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get Todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json(err);
    }
});


// Export
module.exports = router;
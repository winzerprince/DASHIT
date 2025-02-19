const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }

})


router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({ name, email, password });
        res.status(201).json(newUser);

    }
    catch (err) {
        res.status(400).json({ error: err.message })

    }

})

router.put('/:id', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        await User.update({ name, email, password }, { where: { id: req.params.id } });
        res.json(user);

    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params);
        if (!user) return res.status(404).json({ message: 'User not found' });
        await user.destroy();
        res.json({ message: 'User deleted' });

    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router;
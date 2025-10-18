const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Birds home page');
})
router.post('/birds', (req, res) => {
    res.send('Birds list');
})
router.put('/birds/:id', (req, res) => {
    res.json({ message: 'Bird updated!' });
})
router.delete('/birds/:id', (req, res) => {
    res.send('Bird deleted!');
})

module.exports = router;
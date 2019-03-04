const router = require('express').Router();

const Note = require('../models/Note');

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note')
})


router.post('/notes/new-note', (req, res) => {
    const { title, description } = req.body;
    const errors = [];
    if (!title) {
        errors.push({text: 'Please Write a Title'});
    }
    if (!description) {
        errors.push({text: 'Please Write a Description'});
    }
    if (errors.length > 0) {
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    } else {
        const newNote = new Note({ title, description});
        newNote.save();
        res.send('ok')
    }
});

router.get('/notes', (req, res) => {
    res.send('Notes from Database');
});

module.exports = router;
const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesCtrl.createNotes = async (req, res) => {
    const { title, description, author } = req.body;
    const newNote = new Note({
        title,
        description,
        author
    });
    await newNote.save();
    res.json(newNote);
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

notesCtrl.updateNote = async (req, res) => {
    const { title, description, author } = req.body;
    const note = await Note.findOneAndUpdate(req.params.id, {
        title,
        description,
        author
    });
    res.json(note);
}

notesCtrl.deleteNote = async (req, res) => {
    const note = await Note.findOneAndDelete(req.params.id);
    res.json({ message: 'note deleted' });
}

module.exports = notesCtrl;
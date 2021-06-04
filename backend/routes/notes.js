const router = require('express').Router()
let Note = require('../models/note.model')

router.route('/').get((req,res)=>{
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/category/:categoryID').get((req,res)=>{
    Note.find({category:1})
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/add').post((req,res)=>{
    const id = req.body.id
    const title = req.body.title
    const description = req.body.description
    const category = req.body.category
    const completed = req.body.completed
    const date = req.body.date

    const newNote = new Note({
        id,
        title,
        description,
        category,
        completed,
        date
    })

    newNote.save()
        .then(()=>res.json('Note added'))
        .catch(err => res.status(400).json('Error'+err))
})


router.route('/:id').get((req,res)=>{
    Note.findById(req.params.id)
        .then(note => res.json(note))
        .catch(err => res.status.apply(400).json('Error: '+err))
})

router.route('/:id').delete((req,res)=>{
    Note.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Note deleted'))
        .catch(err=> res.status(400).json('Error:'+err))
})

router.route('/update/:id').post((req,res)=>{
    Note.findByIdAndUpdate(req.params.id)
        .then(note=>{
            note.title = req.body.title
            note.description = req.body.description
            note.category = req.body.category
            note.completed = req.body.completed

            note.save()
                .then(()=>res.json('Note updated'))
                .catch(err=> res.status(400).json('Error '+err))
        })
        .catch(err=> res.status(400).json('Error:'+err))
})

module.exports = router

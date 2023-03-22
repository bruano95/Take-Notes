const router = require('express').Router()
const fs = require('fs')
const uuid = require('uuid').v4

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', function(err, data){
        if(err) console.log(err)
        // console.log(data)
        res.json(JSON.parse(data))
    })
})

router.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'))
    console.log(req.body)
    const dataNotes = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
    }
    notes.push(dataNotes)
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes)
    // const dataNote = req.body
    dataNotes.id = uuid()
    notes.push(dataNotes)
    fs.writeFile('./db/db.json', JSON.stringify(notes))
    res.json(notes)
})

module.exports = router
const path = require('path');
const router = require('express').Router()
const fs = require('fs');

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', function(err, data){
        if(err) console.log(err)
        console.log(data)
        res.json(JSON.parse(data))
    })
})

router.post('/notes', (req, res) => {
    fs.writeFile
    console.log(req.body)
})


module.exports = router
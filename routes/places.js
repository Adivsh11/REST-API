  
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { Places } = require('../models/places');


// Get All Employees
router.get('/api/places', (req, res) => {
    Places.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// Get Single Employee (First Way)

router.get('/api/places/:id', (req, res) => {
    Places.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});


// Get Single Employee (2nd Way)

// router.get('/api/employee/:id', (req, res) => {
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`No record With Given ID : ${req.params.id}`);

//     Employee.findById(req.params.id, (err, data) => {
//         if(!err) {
//             res.send(data);
//         } else {
//            console.log(err);
//         }
//     });
// });


// Save Employee
router.post('/api/places/add', (req, res) => {
    const pla = new Places({
        name: req.body.name,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        city:req.body.city,
        country:req.body.country,
        time:req.body.time,
        photo:req.body.photo
    });
    pla.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Places Added Successfully', addPlaces: data})
        } else {
           console.log(err);
        }
    });
});



// Update Employee

router.put('/api/places/update/:id', (req, res) => {


    const pla = {
        name: req.body.name,
        city: req.body.city
    };
    Places.findByIdAndUpdate(req.params.id, { $set: pla }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Places Updated Successfully', updatePlaces: data})
        } else {
            console.log(err);
        }
    });
});





// Delete Employee
router.delete('/api/places/:id', (req, res) => {

   Places.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Places deleted', deletePlaces: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;
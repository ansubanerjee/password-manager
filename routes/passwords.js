
const express = require('express');
const router = express.Router();
const {Password} = require('../collection-models/order');



router.get(`/`, async (req, res)=>{
    const passwordList = await Password.find().populate('user', 'name');
    try{
        if(!passwordList){
            res.status(500).json({success: false, message: "Password List was not found"})
        }
        res.status(200).send(passwordList)
    }catch(err){
        res.status(500).json({ success: false, error: err})

    }
    
})

router.get(`/:_id`, async (req, res)=>{
    const password = await Password.findById(req.params._id).populate('user', 'name');
    try{
        if(!password){
            res.status(500).json({ success: false, message: "Password was not found"})
        }
        res.status(200).send(password)
    }catch(err){
        res.status(500).json({ success: false, error: err})

    }
    
})


router.post('/', async (req, res)=>{
    const password = new Password({
        Website : req.body.Website,
        UserName : req.body.UserName,
        Password: req.body.Password
    })
    await password.save();
    
    try{
        if(!password){
            return res.status(404).send('Password cannot be created')}
        res.status(200).send(password);
    }catch(err){
        return res.status(500).json({ success: false, error: err})
    }
    
})

router.put('/:_id', async (req, res)=>{
    const password = await Password.findByIdAndUpdate(
        req.params._id, 
        {
            Website : req.body.Website,
            UserName : req.body.UserName,
            Password: req.body.Password
        },
         {new: true})
        if (!password){
            res.status(400).json({success: false, message: "Password was not found"});
        }
        res.status(200).send(password);

})
 
router.delete('/:_id', async (req,res)=>{
    const password = await findByIdAndDelete(req.params._id)
    try{
        if (!password){
            res.status(404).json({ success: false, message: "Password was not found"})
        }
        res.status(200).json({ success: true, message: "Password was Deleted"})
    }catch(err){
        res.status(400).json({ success: false, error: err})
    }
})



router.get('/get/count', async (req, res)=>{
    const passwordCount = await Password.countDocuments({})
    if (!passwordCount){
        res.status(404).json({ success: false, message: "Password was not found"})
    }
    res.status(200).send({
        count: passwordCount
    })
})

router.get(`/get/userpasswords/:userid`, async (req, res)=>{
    const userPasswordList = await Password.find({user: req.params.userid});
    try{
        if(!userPasswordList){
            res.status(500).json({ success: false, message: "User Password List was not generated"})
        }
        res.status(200).send(userPasswordList)
    }catch(err){
        res.status(500).json({ success: false, error: err})

    }
    
})
module.exports = router; 
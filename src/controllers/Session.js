//index, show, store, udpate, detroy

const User = require('../Model/User');


module.exports = {
    async Store(req,res) {
        const {email} = req.body;

        let user = await User.findOne({email});

        if(user){
            return res.send('Usuario já cadastrado');
        }
        

        user = await User.create({email})

        return res.json(user);
    },

}
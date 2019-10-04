const Spots = require('../Model/Spot');


module.exports = {
    async show(req,res){
        const {user_id} = req.header;

        const spots = await Spots.find({user: user_id});

        return res.json(spots);
    }
}
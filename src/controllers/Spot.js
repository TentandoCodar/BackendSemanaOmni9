const Spot = require('../Model/Spot');
const User = require('../Model/User')

module.exports = {

    async index(req,res) {
        const {tech} = req.query;

        const techs = tech.split(',')

        const spots = await Spot.find({techs: {$in: techs}})

        return res.json(spots)
    },

    async store(req,res){
        const { filename }= req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.header;

        

        const user = await User.findOne({user: user_id})
        

        if(!user) return res.send('Usuario não existe')

        const spot = await Spot.create({
            thumbnail: filename,
            user: user_id,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price: price
        })

        return res.json(spot)
    }
}
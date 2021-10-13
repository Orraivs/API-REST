const { use } = require('../app');
const User = require('../models/User');
const mongoose = require('mongoose')

exports.getPlaylists = async (req,res) => {
    let userID = mongoose.Types.ObjectId(req.params.userID);
    let results;
    let projection = {
        _id: 0,
        playlist: 1
    }
    try {
        results = await User.findById(userID).select(projection);//.projection(projections)    
    } catch (error) {
        console.log(error)
    }
    console.log(results);
    let playlist = results.playlist;
    playlist.forEach(element => {
        let obj = {
            nombre: element.name,
            tiene: element.songs.length
        }
        console.log(obj);
    });
    return res.status(200).send(results.playlist[0]);
}
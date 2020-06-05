const mongoose = require( 'mongoose' );

const moviesSchema = mongoose.Schema({
    movie_ID : {
        type : Number,
        unique : true,
        required : true
    },
    movie_title : {
        type : String,
        required : true
    },
    year :  {
        type : Number,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    actors : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'actors',
        required : true
    }]
});

const moviesCollection = mongoose.model( 'movies', moviesSchema );

const Movies = {
    createMovie : function( newMovie ){
        return moviesCollection
                .create( newMovie )
                .then( createdMovie => {
                    return createdMovie;
                })
                .catch( err => {
                    throw new Error( err );
                });
    },
    getMovieById: function(id){
        return moviesCollection
        .findOne({movie_ID:id})
        .then(movieWithId=>{
            return movieWithId;
        })
        .catch(err=>{
            return err;
        })
    },
    removeActorFromMovieList: function (id,actor_ID){
        return moviesCollection
        .findOneAndRemove({movie_ID:id},{$pop:{actors:actor_ID}})
        .then(movieToRemoveActor=>{
            return movieToRemoveActor.populate[{actors}];
        
        })
        .catch(err=>{
            return err;
        })
        
    }
    /*
        Your code goes here
    */
}

module.exports = {
    Movies
};


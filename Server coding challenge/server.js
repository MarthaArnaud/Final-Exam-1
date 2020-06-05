const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const {Actors}= require('./models/actor-model');
const {Movies}= require('./models/movie-model');
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const {errorHandler} = require('./middleware/errorHandler');
const app = express();
//app.use(errorHandler);


app.delete('/api/delete-movie-actor/:movie_ID',jsonParser,(req,res)=>{
    let id=req.body.movie_ID;
    let movie_ID=req.params.movie_ID;
    let firstName=req.body.firstName;
    let lastName= req.body.lastName;
    if(!id){
        errorHandler(406);
    }
    if(id!=movie_ID){
        errorHandler(409);

    }
    if(!firstName || !lastName){
        errorHandler(403);
    }
    Actors
    .getActorByName(firstName)
    .then(resultActor=>{
        Movies
        .getMovieById(id)
        .then(resultMovie=>{
            Movies
            removeActorFromMovieList(id,resultActor.actor_ID)
            .then(deletedActor=>{
                return res.status(201).end();
            })
            .catch(err=>{
                errorHandler(404);
            })
        })
        .catch(err=>{
            errorHandler(404);
        })
    })
    



})
/* 
    Your code goes here 
*/

app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});
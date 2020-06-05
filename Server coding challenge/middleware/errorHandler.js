function errorHandler(req, res) {
    if(req==406){
        res.statusMessage="Id is missing in the body of the request";
        res.status(406).end();
    }
    if(req==409){
        res.statusMessage="id and movie_ID do not match";
        res.status(409).end();
    }
    if(req==403){
        res.statusMessage="you need to send both firstName and lastName of the actor to remove from the movie list";
        res.status(403).end();
    }
    if(req==404){
        res.statusMessage="the actor or movie do not exist";
        res.status(404).end();
    }
        
    
}

module.exports = errorHandler;
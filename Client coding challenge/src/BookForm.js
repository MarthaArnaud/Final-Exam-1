import React from 'react';

 

function BookForm( props ){
    return(
        <div>
            <form>
                <label htmlFor="bookName">Enter a book name to search</label>
                <input type="text" id="bookName"></input>
                <input type="submit" value="Search"></input>
            </form>
        </div>
    );
}

export default BookForm;
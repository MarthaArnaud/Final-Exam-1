import React from 'react';
import './App.css';
import Book from './Book';
import BookForm from './BookForm';

class App extends React.Component{

  constructor( props ){
    super( props );
    this.state = {
      books:[],
      title:"",
      author:"",
      textSnippet:"",
      thumbnail:""
    }
  }


  handleSubmit= (event)=>{
    console.log("entro al submit");
    event.preventDefault();
    let bookName=document.getElementById('bookName').value;
    console.log(bookName);
    let url = `https://www.googleapis.com/books/v1/volumes?q=${bookName}`;
    let settings={
       method:'GET'
    }
    fetch(url,settings)
    .then(result=>{
      this.setState({books:result});
      this.setState({title:result.volumeInfo.title})
      this.setState({author:result.volumeInfo.authors[0]})
      this.setState({textSnippet:result.searchInfo.textSnippet})
      this.setState({thumbnail:result.imageLinks.thumbnail})
      console.log(result);
        return result;
        
    })
    .catch(err=>{
        return err;
    })
}


  /* 
    Your code goes here
  */

  render(){
    return(
      <div>
        <BookForm onSubmit={this.handleSubmit}>
          <Book {...this.props}></Book>
        </BookForm>
      </div>
    )
  }

}

export default App;

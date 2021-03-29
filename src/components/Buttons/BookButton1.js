import { useHistory } from "react-router"
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import styles from './styles.css'
import BookForm from '../Profile/BookForm';

export default class BookButton extends Component {
  constructor(props) {
      super(props);
      this.state = {
        bookForm: false,
        page: props.page
      };
  }
  
  bookClick=()=>
  {
      if(this.state.bookForm===false)
      {
        this.setState({bookForm:true})
      }
      else
      {
        this.setState({bookForm:false})
      }     
        
  }

  componentDidMount() {
    this.setState({bookForm:false})
  }

    render() {
    return (    
      <div>
        <Button className="det-btn" onClick={this.bookClick}>
          Book
        </Button>
        <div>
          {this.state.bookForm && <BookForm/>}
        </div>       
    </div>
    )
  }
}

// function BookButton() {
// var show = false;

// function bookClick()
// {
//     console.log("book");

//     if(show===false)
//     {
//       show=true;
//       console.log(show);
//     }
//     else
//     {
//       show=false;
//     }
// }

//   return (
//     <div>
//         <Button className="det-btn" onClick={bookClick}>
//           Book
//         </Button>
//         <div>
//           {show && <BookForm/>}
//         </div>       
//     </div>
//   )
// }

// export default BookButton;
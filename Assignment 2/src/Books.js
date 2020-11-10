import React,{ Component } from 'react'


class Books extends Component {

    render() {

        const bookItems = this.props.books.map((book, index) => {
            return <li key = {index}>
                <b>{book.title}</b>
                <img src={book.imageLink} alt="Books"/>
            </li>
        })
    

        return(

            <ul>{bookItems}</ul>

        )
    
    
    
    }   


}


export default Books
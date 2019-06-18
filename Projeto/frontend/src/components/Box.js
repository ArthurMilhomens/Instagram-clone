import React, { Component } from 'react';
import send from '../assets/send.png';

 
class Box extends Component{
    render(){
        return (
            <div className="box-comments">
                <p>Boiola</p>
                <input type='text' placeholder='Comentar'/>
                <button type='button'>
                    <img src={send} alt='send'/>
                </button>
            </div>
        )
    }
}
export default Box
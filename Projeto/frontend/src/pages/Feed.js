import React, { Component } from 'react';
import io from 'socket.io-client';
import ReactDOM from 'react-dom';

import Box from '../components/Box'
import './Feed.css';
import dot from '../assets/dots.png';
import like from '../assets/like.png';
import comment from '../assets/comment.png';
// import send from '../assets/send.png';
import api from '../services/api';

class Feed extends Component {
    state = {
        feed: [],
    };
    async componentDidMount(){
        this.registerToSocket();
        const response = await api.get('posts');
        this.setState({ feed:response.data });
    }
    handleLike = id => {
        api.post(`/posts/${id}/like`);
    }
    registerToSocket = () => {
        const socket = io('http://localhost:3333');
        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed]})
        })
        socket.on('like', likedPost => {
            this.setState({
                feed: this.state.feed.map(post => post._id === likedPost._id ? likedPost : post)
            })
        })
    }
    boxComment() {
        const target = document.querySelector(".target");
    
        ReactDOM.render(<Box/>, target);
      }

    render() {
        return(
            <section id='post-list'>
                {this.state.feed.map(post => (
                     <article key={post._id}>
                     <header>
                         <div className='user-info'>
                             <span>{post.author}</span>
                             <span className='place'>{post.place}</span>
                         </div>
                         <img src={dot} alt='Dot' />
                     </header>
                     <img src={`http://localhost:3333/files/${post.image}`}/>
                     <footer>
                         <div className='actions'>
                            <button type='button' onClick={() => this.handleLike(post._id)}>
                                <img src={like} alt='Like'/>
                            </button>
                            <button type='button' onClick={this.boxComment.bind(this)}>
                                <img src={comment} alt='comment'/>
                            </button>
                             
                         </div>
                         <strong>{post.likes} curtidas</strong>
                         <p>
                             {post.description}
                             <span>{post.hashtags}</span>
                         </p>
                         <div className={"target"}></div>
                         {/* <div className="box-comments">
                            <p>Boiola</p>
                            <input type='text' placeholder='Comentar'/>
                            <button type='button'>
                                <img src={send} alt='send'/>
                            </button>
                         </div> */}
                     </footer>
                 </article>
                ))}
            </section>
        );
    }
}
export default Feed;
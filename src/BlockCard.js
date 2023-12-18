import  React,{Component} from 'react';
import classes from './BlogCard.module.css';

class BlogCard extends Component {
    state = {
        likeCount: 0
    }
    onButtonLike(){
        this.setState((prevState, prevProps) => {
            return {likeCount: prevState.likeCount + 1}
        });
    }
    render(){
        return (
            <div className={classes.BlogCard}>
                <h1>Blog Title: {this.props.title}</h1>
                <h2>Blog Description:</h2>
                {this.props.description}
                <br/>
                Like Count: <span className={classes.likeCount}>{this.state.likeCount}</span>
                <br/>
                <button onClick={this.onButtonLike.bind(this)}>Like</button>

            </div>
        )
    }
}
export default BlogCard;
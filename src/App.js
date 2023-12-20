import './App.css';
import React,{Component} from 'react';
import BlogCard from './BlockCard';
import blogArray from './BlogsList';


class App extends Component {
  state = {
    showBlogs: true
  }
   blogItem = blogArray.map((blog,pos) => {
    return (
      <BlogCard key={pos} id={blog.id} title={blog.title} description={blog.description}/>
    )
  })
  onHideBtnClick = () => {
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    })
    // alert('Hide Button Clicked');
  }
  render(){
    return (
      <div className="App">
        <center>
        <div >
          <br/>
          <button onClick={this.onHideBtnClick}>{this.state.showBlogs?"Hide Blogs":"Show Blogs"}</button><br/>
          <br/>
          {this.state.showBlogs ? this.blogItem : null}
        </div>
        </center>
      </div>
    ); 
  }
} 
export default App;

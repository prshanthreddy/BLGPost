import './App.css';
import React,{Component} from 'react';
import BlogCard from './BlockCard';
import blogArray from './BlogsList';
import Search from './search';


class App extends Component {
  state = {
    showBlogs: true
  }
   blogItem = blogArray.map((blog,pos) => {
    return (
      <BlogCard key={pos} id={blog.id} title={blog.title} description={blog.description} author={blog.author}/>
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
          <h1>BLGPosT</h1>
          <Search/>
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

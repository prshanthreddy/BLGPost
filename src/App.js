import './App.css';
import React,{Component} from 'react';
import BlogCard from './BlockCard';


class App extends Component {
  state = {
    showBlogs: true
  }
  blogArray=[
    {
      id: 1,
      title: 'Blog Title1',
      description: 'Blog Description1'
    },
    {
      id: 2,
      title: 'Blog Title2',
      description: 'Blog Description2'
    },
    {
      id: 3,
      title: 'Blog Title3',
      description: 'Blog Description3'
    }
  ]
 

   blogItem = this.blogArray.map((blog,pos) => {
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

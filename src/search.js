import React from "react";
// import BlogList from "./BlogsList";

class Search extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder=" 🔍 Search" />
        <button onClick={this.onSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
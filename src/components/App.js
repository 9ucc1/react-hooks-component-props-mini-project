import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"
import blog from "../data/blog"

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name={blog.name}/>
      <About src={blog.image}/>
      <ArticleList articles={blog.posts}/>
    </div>
  );
}

export default App;

import React from 'react'
import Article from './Article'
import blog from "../data/blog"

function ArticleList( {posts} ){
    const Articles = blog.posts.map(post => (<Article key={blog.posts.id}>
        </Article>))
    
    return (
        <main>
            {Articles}
        </main>
    )
}

export default ArticleList
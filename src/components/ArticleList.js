import React from "react";
import Article from "./Article";

function ArticleList({articles}) {
    // console.log(articles)
    const singularPost = articles.map((post) => (
         <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>))
    return (
    <>
    <main>
        {singularPost}
    </main>
    </>
    )
}


export default ArticleList;
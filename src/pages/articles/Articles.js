import "./module-css/article-blog.css"
import React, {useEffect, useState} from 'react';
import ArticleBlockComponent from "../../components/article-news-blog/ArticleBlockComponent";

const Articles = () => {

    const[news,setNews]=useState([])
    const[currentPage,setCurrentPage]=useState(1)
    const[newsPerPage,setNewsPerPage]=useState(10)


    useEffect(()=>{
        fetch("https://63f26f05f28929a9df5a8e2d.mockapi.io/news/articles")
            .then(resp=>resp.json())
            .then(data=>{
                setNews(data)
            })
    },[])
    const lastNewsIndex = currentPage * newsPerPage
    const firstNewsIndex = lastNewsIndex - newsPerPage
    const currentNews=news.slice(firstNewsIndex,lastNewsIndex)

    return (
        <div className={"article-page"}>
            {news.map(item=>
                    <ArticleBlockComponent item={item} key={item.id}/>
            )}

        </div>
    );
};

export default Articles;
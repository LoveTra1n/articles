import React from 'react';
import "../../pages/articles/module-css/article-blog.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const ArticleBlockComponent = ({item}) => {
    const dispatch=useDispatch()


    return (
        <div className={"article-block"}>
            <Link to={`/${item.id}`}>
                <h1>{item.title}</h1>
                <h2 className={"description"}>{item.description}</h2>
            </Link>
        </div>
    );
};

export default ArticleBlockComponent;
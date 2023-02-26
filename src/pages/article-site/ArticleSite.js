import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useParams,useNavigate} from "react-router-dom";
import {getSelectNews} from "../../store/newsSlice/NewsSlice";
import "./module-css/style.css"

const ArticleSite = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const{id}=useParams()

    useEffect(()=>{
        dispatch(getSelectNews(id))
    },[])

    const {selectNew}=useSelector(state=>state.newReducer)

    return (
        <div className={"site"}>
            <div className="site-back"><img onClick={()=>navigate(-1)} src={"https://cdn-icons-png.flaticon.com/512/5720/5720446.png"}/></div>
            <div className={"site-block"}>
                <h1>{selectNew.title}</h1>
                <p>{selectNew.date}</p>
                <img src={selectNew.photo}/>
                <h2 style={{color:"black",marginTop:"50px"}}>{selectNew.text?.title}</h2>
                <h2>{selectNew.text?.info}</h2>
                <div className="social">
                    <div className="social-icons">
                        <a href={"https://www.facebook.com/geekskg"}><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"}/></a>
                        <a href={"https://geektech.kg/"}><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"}/></a>
                        <a href={"https://geektech.kg/"}><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png"}/></a>
                        <a href={"https://www.instagram.com/geeks_edu/"}><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"}/></a>
                    </div>
                </div>
                <h1>популярные новости</h1>
            </div>
        </div>
    );
};

export default ArticleSite;
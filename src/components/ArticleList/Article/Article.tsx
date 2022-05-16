import React, {useEffect} from 'react';
import {fetchArticle} from "../../../store/action-creators/article";
import {useTypedSelector} from "../../../hooks/useTypeSelector";
import {useActions} from "../../../hooks/useActions";
import {Link, useParams} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Article.scss"


const Article = () => {
    const {article, loading, error} = useTypedSelector(state => state.article)
    const {fetchArticle} = useActions()
    const {id}: any = useParams()
    console.log(article)

    useEffect(() => {
        fetchArticle(id)
    }, [id])
    if (loading) {
        return <div>LOADING...</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (
        <div className="Article">
            <div className="img" style={{backgroundImage: `url(${article.imageUrl})`}}></div>
            <div  className="content">
                <div className="title">{article.title}</div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt
                    tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus
                    commodo mauris enim, turpis blandit.
                    Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla
                    massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis
                    proin nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae
                    ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum,
                    placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi mauris diam amet et sed.

                    At aliquet id amet, viverra a magna lorem urna. Nibh scelerisque quam quam massa amet, sollicitudin vel
                    non. Gravida laoreet neque tincidunt eu egestas massa vitae nibh. Nec ullamcorper amet tortor, velit.
                    Dictum pellentesque dolor sit duis sed nibh. Euismod rutrum pellentesque semper mattis aliquet ornare.
                    Cursus maecenas massa, arcu ac adipiscing odio facilisis ac eu.
                    In eget ipsum, sed ultrices tempor consequat, elementum cras porta. Sagittis etiam dictumst at duis
                    praesent a. Malesuada odio amet aenean diam. Tincidunt lorem faucibus neque aliquet lobortis feugiat sed
                    aliquam pulvinar. Praesent aliquet ut tempus feugiat placerat quis duis mauris nibh. Eu ullamcorper id
                    feugiat sit risus turpis mi. Tristique posuere sed convallis magna eu vulputate. Cum sit in hac felis
                    blandit. Cursus eu porta lectus mollis nisi, consectetur ac. Ornare vitae lectus iaculis nibh ac et.
                    Adipiscing amet in parturient etiam fames. Facilisi id eu sem in elementum. Lacus, ipsum morbi vel purus
                    ut arcu laoreet id eu.

                    Libero, tincidunt aliquet parturient dolor sapien faucibus nunc. In ipsum suscipit nec pharetra non
                    vitae sagittis aenean sit. Consequat integer sit netus pellentesque scelerisque ut. Elit augue dui
                    viverra facilisi varius. Volutpat iaculis eu ipsum ut. Dui, ut viverra ut amet magna in in varius.
                    Aliquet penatibus pretium feugiat lobortis. Mauris nunc, eu non massa donec sit duis. Libero nascetur
                    mauris, ac in aliquet cras duis donec. Sit porttitor sociis aliquam aliquet odio arcu a viverra. Proin
                    convallis bibendum venenatis non orci id proin vitae. Faucibus eleifend fermentum sit dictum sagittis
                    fermentum. At id nisi, aliquet ut sagittis proin enim.
                    Eget in aenean mi a elit viverra amet urna, diam. Cursus id viverra amet adipiscing. Pretium, amet amet
                    mi mauris urna, maecenas. Risus ut sit quis donec. Lacinia elementum, amet gravida convallis elementum,
                    metus cras. Adipiscing suspendisse etiam tellus tellus arcu. At accumsan rhoncus, fringilla ut
                    scelerisque consectetur.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt
                    tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus
                    commodo mauris enim, turpis blandit.
                    Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla
                    massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis
                    proin nulla.
                </div>
            </div>
            <Link to="/articleList" className="back"><ArrowBackIcon sx={{fontSize: "12px"}}/>
                <span className="back-text">Back to homepage</span>
            </Link>
        </div>
    );
};

export default Article;
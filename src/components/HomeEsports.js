import React from 'react'
import '../css/news.css'
class HomeEsports extends React.Component{
    renderThumbnail = () =>{
        if(this.props.article.thumbnail === "self"){
            return <img className="card-img-top" src = "https://www.grandjunctionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" alt="Card image cap"/>
        }
        else{
            return <img className="card-img-top" src = {this.props.article.thumbnail} alt="Card image cap"/>
        }
    }
    render(){
        return(
            <a href = {this.props.article.url}>
            <div className="card" style={{width: "18rem", border:"none", marginRight:'5vw'}}>
                {this.renderThumbnail()}
                <div className="card-body">
                    <p className="card-text" style = {{color:'#000000',fontSize:'1.5vh' }}>{this.props.article.title}</p>
                </div>
            </div>
            </a>
        )
    }
}
export default HomeEsports

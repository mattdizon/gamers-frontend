import React from 'react'

class NewsCards extends React.Component{
    render(){
        return (
            <a href = {this.props.article.url}>
              <div className="card" style={{width: "18rem", border:"none", marginRight:'5vw'}}>
                <img className="card-img-top" src = {this.props.article.urlToImage} alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text" style = {{color:'#000000',fontSize:'1.5vh' }}>{this.props.article.title}</p>
                </div>
            </div>
        </a>)
    }
}
export default NewsCards

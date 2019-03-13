import React from 'react'

class NewsCards extends React.Component{
    imgRender = () =>{
        if(this.props.article.thumbnail === undefined){
            return <img className="card-img-top" src = "https://www.grandjunctionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" alt="Card image cap"/>
        }
        else{
            return <img className="card-img-top" src = {this.props.article.thumbnail.url} alt="Card image cap"/>
        }
    }
    filteredRender = () =>{
        switch(this.props.game){
            case "League of Legends":
                return<a href = {this.props.article.url}>
                  <div className="card" style={{width: "18rem", border:"none", marginRight:'5vw'}}>
                    <img className="card-img-top" src = {this.props.article.urlToImage} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text" style = {{color:'#000000',fontSize:'1.5vh' }}>{this.props.article.title}</p>
                    </div>
                </div>
                </a>
                break;
            case"Overwatch":

                return <a href = {this.props.article.defaultUrl}>
                        <div className="card" style={{width: "18rem", border:"none", marginRight:'5vw'}}>
                            {this.imgRender()}
                            <div className="card-body">
                                <p className="card-text" style = {{color:'#000000',fontSize:'1.5vh' }}>{this.props.article.title}</p>
                            </div>
                        </div>
                    </a>

                    break;
            default:
            return <a href = {this.props.article.url}>
              <div className="card" style={{width: "18rem", border:"none", marginRight:'5vw'}}>
                <img className="card-img-top" src = {this.props.article.urlToImage} alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text" style = {{color:'#000000',fontSize:'1.5vh' }}>{this.props.article.title}</p>
                </div>
            </div>
            </a>
            }
    }
    render(){
        console.log(this.props)
        return (this.filteredRender())
    }
}
export default NewsCards

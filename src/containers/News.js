import React from 'react'
import NewsCard from '../components/NewsCards'
class News extends React.Component{
    state = {
        news: []
    }
    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=b252f4fed7984135a2823c31a50f3c74')
        .then(resp => resp.json())
        .then(news => this.setState({news:news.articles}))
    }
    renderCards = () =>{
        return this.state.news.map(article => <NewsCard article = {article}/>)
    }
    render(){
        console.log(this.state.news)
        return(
            <div>
            <h1>Gamer News</h1>
            <div class="form-group">
                <label for="sel1">Filter by Game</label>
                <select className="form-control" style = {{width: '25vw'}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div>
                {this.renderCards()}
            </div>
            </div>
        )
    }
}
export default News

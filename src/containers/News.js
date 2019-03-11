import React from 'react'
import NewsCard from '../components/NewsCards'
import '../css/news-container.css'

class News extends React.Component{
    state = {
        news: [],
        games:['---','League of Legends', 'Overwatch','Dota 2', 'CSGo','Hearthstone', 'Starcraft 2', 'Super Smash Bros']
    }
    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=b252f4fed7984135a2823c31a50f3c74')
        .then(resp => resp.json())
        .then(news => this.setState({news:news.articles}))
    }
    renderCards = () =>{
        return this.state.news.map(article => <NewsCard article = {article}/>)
    }
    renderEsports = () =>{
        return this.state.games.map(game => <option>{game}</option>)
    }
    render(){
        console.log(this.state.news)
        return(
            <div>
            <h1>Gamer News</h1>
            <div class="form-group">
                <label for="sel1">Filter by Game</label>
                <select className="form-control" style = {{width: '25vw'}}>
                    {this.renderEsports()}
                </select>
            </div>
            <div className = "news-container">
                {this.renderCards()}
            </div>
            </div>
        )
    }
}
export default News

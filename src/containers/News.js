import React from 'react'
import NewsCard from '../components/NewsCards'
import '../css/news-container.css'

class News extends React.Component{
    state = {
        news: [],
        games:['All','League of Legends', 'Overwatch','Dota 2', 'CSGo','Hearthstone', 'Starcraft 2', 'Super Smash Bros'],
        selectedGame: ""
    }
    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=b252f4fed7984135a2823c31a50f3c74')
        .then(resp => resp.json())
        .then(news => this.setState({news:news.articles}))
    }
    renderCards = () =>{

        return this.state.news.map(article => <NewsCard article = {article} game = {this.state.selectedGame}/>)
    }
    renderEsports = () =>{
        return this.state.games.map(game => <option>{game}</option>)
    }
    changeGame = (e) =>{
        this.setState({selectedGame: e.target.value},() =>{
            this.renderFilteredGame()
        })

    }
    renderFilteredGame = () =>{
        switch(this.state.selectedGame){
            case 'League of Legends':
            fetch('https://newsapi.org/v2/everything?q="+league%20of%20legends"&apiKey=b252f4fed7984135a2823c31a50f3c74')
            .then(resp => resp.json())
            .then(news => this.setState({news:news.articles}))
                break
            case 'Overwatch':
            fetch('https://api.overwatchleague.com/news?page=69')
            .then(resp => resp.json())
            .then(news => this.setState({news:news.blogs}))
                break
            case 'Dota 2':
            case 'League of Legends':
            fetch('https://newsapi.org/v2/everything?q="Dota+2"&apiKey=b252f4fed7984135a2823c31a50f3c74')
            .then(resp => resp.json())
            .then(news => this.setState({news:news.articles}))
                break
            case 'CSGo':
            fetch('https://newsapi.org/v2/everything?q="CS:Go"&apiKey=b252f4fed7984135a2823c31a50f3c74')
            .then(resp => resp.json())
            .then(news => this.setState({news:news.articles}))
                break
            case 'Hearthstone':
            fetch('https://newsapi.org/v2/everything?q="Hearthstone"&apiKey=b252f4fed7984135a2823c31a50f3c74')
            .then(resp => resp.json())
            .then(news => this.setState({news:news.articles}))
                break
            case 'Starcraft 2':
            fetch('https://newsapi.org/v2/everything?q="Starcraft+2"&apiKey=b252f4fed7984135a2823c31a50f3c74')
            .then(resp => resp.json())
            .then(news => this.setState({news:news.articles}))
                break
            case 'Super Smash Bros':
            fetch('https://newsapi.org/v2/everything?q="Super+Smash+Bros"&apiKey=b252f4fed7984135a2823c31a50f3c74')
            .then(resp => resp.json())
            .then(news => this.setState({news:news.articles}))
                break
            default:
            fetch('https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=b252f4fed7984135a2823c31a50f3c74')
            .then(resp => resp.json())
            .then(news => this.setState({news:news.articles}))

        }
    }

    render(){

        return(
            <div>
            <h1>Gamer News</h1>
            <br/>
            <div class="form-group" >
                <label for="sel1">Filter by Game</label>
                <select className="form-control" style = {{width: '25vw'}} value = {this.state.selectedGame} onChange = {(e) => this.changeGame(e)}>
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

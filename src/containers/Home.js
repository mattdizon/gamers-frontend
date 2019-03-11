import React from 'react'
import '../css/home.css'

import HomeEsports from '../components/HomeEsports'
class Home extends React.Component{
    state = {
        news:[]
    }
    componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+`https://reddit.com/r/esports.json`)
        .then(resp => resp.json())
        .then(news => this.setState({news:news.data.children}))

    }
    getNews = () => {
        return this.state.news.map(news => <HomeEsports article = {news.data}/>)
    }
    render(){
        console.log(this.state.news)
        return (
            <div className = "home-esports-container">
                <h1>Latest E-Sports News:</h1>
                <br/>
                <div className = "home-esports-container-content">
                    {this.getNews()}
                </div>
            </div>
        )
    }
}
export default Home

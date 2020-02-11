import React, {Component} from 'react';
import Header from './Components/Header'
import Slots from './Components/Slots'
import Display from './Components/Display'
import axios from 'axios'
import './App.css';


class App extends Component{
  constructor(){
    super()

    this.state = {
      highscore: [],
    }
    this.highScore = this.highScore.bind(this)
    this.erase = this.erase.bind(this)
    this.resultName = this.resultName.bind(this)

  }

    componentDidMount(){
      axios.get('/api/icons').then(res => {
        this.setState({
          something: res.data
        })
      })
    }

    highScore(newImage){
      axios.post('api/icons').then(res => {
        this.setState({
          something: res.data
        })
      })
    }

    resultName(id, changeName){
      axios.put(`/api/icons/${id}`).then(res => {
        this.setState({
          something: res.data
        })
      })
    }

    erase(id){
      axios.delete(`/api/icons/${id}`).then(res => {
        this.setState({
          something: res.data
        })
      })
    }

 render(){

return (
    <div className="App">
      <Header />
     

    </div>
  )}
}

export default App;

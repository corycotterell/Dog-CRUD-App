import React from "react"
import {object} from "./data.js"

export default class ObjDisplay extends React.Component{
    constructor(){
        super()
        this.dog = []
        this.userInput = ""
        // this.answer = "dog2"
        this.state = {
            dogOnDisplay:{
                id:"",
                breed:"",
                size:"",
                inteligence:"",
                kidFriendly:""
            },
            object
        }
        this.displayDog = this.displayDog.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(){
        this.displayDog(this.userInput)
    }
    handleChange(event){
        event.persist()
        this.userInput = event.target.value
    }
    displayDog(input){
        let answer = input
        this.dog = this.state.object.dogs.forEach(function(item){
             if([item][0].id === answer){
                 this.setState({dogOnDisplay:{
                    id:[item][0].id,
                    breed:[item][0].breed,
                    size:[item][0].size,
                    inteligence:[item][0].inteligence,
                    kidFriendly:[item][0].kidFriendly
                 }})
             }
                //  this.setState({
                //  })
        }.bind(this))
    }
    
    render(){
        // this.displayDog()
        // console.log(this.state.object.dogs[0].id)
        return(
            <div>
                <h1> This Rad Dog Bro {this.state.dogOnDisplay.id} </h1>
                <ul>
                    <li>{this.state.dogOnDisplay.breed}</li>
                    <li>{this.state.dogOnDisplay.size}</li>
                    <li>{this.state.dogOnDisplay.inteligence}</li>
                    <li>{this.state.dogOnDisplay.kidFriendly}</li>
                </ul>
                <form >
                    <input type="text" onChange={this.handleChange}></input>
                </form>
                <button onClick={this.handleSubmit}>click me to submit type of dog</button>

            </div>
        )
    }

}
import React from "react"
import {object} from "./data.js"


export default class ObjDisplay extends React.Component{
    constructor(){
        super()
        this.dog = []
        this.options = []
        this.currentValue = "default"
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
        this.displayDog(this.currentValue)
    }
    handleChange(event){
        event.persist()
        this.currentValue = event.target.value
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
        }.bind(this))
    }
    createOptions(){
        let select = document.getElementById("select")
        this.state.object.dogs.forEach(element => {
            let option = document.createElement("OPTION")
            let text = document.createTextNode(element.id)
            option.setAttribute("value", element.id)
            option.appendChild(text)
            select.insertBefore(option,select.lastChild)
        });
    }
    componentDidMount(){
        this.createOptions()
    }
    
    render(){
        return(
            <div>
                <h1> This Rad Dog Bro {this.state.dogOnDisplay.id} </h1>
                    <h2>{this.state.dogOnDisplay.breed}</h2>
                    <h2>{this.state.dogOnDisplay.size}</h2>
                    <h2>{this.state.dogOnDisplay.inteligence}</h2>
                    <h2>{this.state.dogOnDisplay.kidFriendly}</h2>
                <select id="select" onChange={this.handleChange}>
                    <option value="default">default</option>
                </select>
                <button onClick={this.handleSubmit}>click me to submit type of dog</button>
            </div>
        )
    }

}
import React,{Component} from "react";
import "./form.css";


class Form extends Component{
    constructor(){
        super()
        this.state={fname:"",FullName:"",sname:""}
    }
    handleChange=(event)=>{
        const {name,value} = event.target
        this.setState({[name]:value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({FullName:this.state.fname+" "+this.state.sname})
        // this.state.FullName("")
    }
    render(){
        return(
            <div>
                <center><form className="container" onSubmit={this.handleSubmit}>
                    {/* input value will be stored in the value attribute and it can be assigned to name attribute */}
                    <input type="text" name="fname" onChange={this.handleChange} placeholder="Enter your First Name"/><br/><br/>
                    <input type="text" name="sname" onChange={this.handleChange} placeholder="Enter your Second Name"/><br/><br/>
                    <input type="submit" className="sub"/><br/>
                    <h1>{this.state.FullName}</h1>
                </form></center>
            </div>
        )
    }
}
export default Form
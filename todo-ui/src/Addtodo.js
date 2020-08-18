import React ,{Component} from'react';

class Addtodo extends Component{
    constructor(props){
        super(props)
       this.state={
            content:""
        
        }

        this.changehandler= this.changehandler.bind(this)
       
    }
    changehandler=(e)=>{
        this.setState({
            content:e.target.value
        })
        }
handlesubmit=(e)=>{
    e.preventDefault();
    this.props.addtodo(this.state)
    this.setState({
        content:""
    })
}





    render(){
        return(
            <div className="container">
<form onSubmit={this.handlesubmit}>
    <input type="text"  onChange={this.changehandler} value={this.state.content}/>
</form>

            </div>
        )
    }
}

export default Addtodo;
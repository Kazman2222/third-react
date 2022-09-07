import { Component } from "react";

class Go extends Component {
    constructor() {
        super()
        this.state = {
            timer: 0
        }
        this.handleMe = this.handleMe.bind(this)
    }
    handleMe() {
        this.setState(prevState =>{
return {timer: prevState.timer + 1}
        })
    }
    render() {
        return(
            <div>
                <p>{this.props.render(this.state.timer, this.handleMe)}</p>
            </div>
        )
    }
}
export default Go

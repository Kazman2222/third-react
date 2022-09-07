import { Component } from "react";

class Goss extends Component {
   
    render() {
        const {count, handleMe} = this.props
        return (
            <div>
<p>{count}</p>
<button onClick={handleMe}>CLICK NOW</button>
</div>
        )
    }
}
export default Goss
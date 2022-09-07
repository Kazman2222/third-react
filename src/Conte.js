const Conte = (props) => {
    const {person} = props
    return ( 
        <div>
            <ul>
                <li>{person.first}</li>
                <li>{person.skill}</li>
            </ul>
        </div>
     );
}
 
export default Conte;
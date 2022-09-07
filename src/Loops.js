
import Conte from "./Conte";
const Loops = () => {
    const persons = [
        {
            id: 1,
            first: "kazeem",
            skill: "vue"
        },
        {
            id: 2,
            first: "Tobiloba",
            skill: "Angular"
        },
        {
            id: 3,
            first: "ayomide",
            skill: "React"
        }
    ]
    const dataList = persons.map(person => <Conte key={person.id} person={person}> </Conte>)
    return ( 
        <div>{dataList}</div>
     );
}
 
export default Loops;
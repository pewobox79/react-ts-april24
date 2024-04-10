import CardSkills from "./CardSkills"
import { CardType } from "../../../types/employees"

const EmployeeCard = ({ name, age, skills }: CardType) => {
    
    return (
        <div>
            <h4>{name}</h4>
            <p>{age}</p>
            <CardSkills skills={skills}/>
        </div>
    )
}

export default EmployeeCard

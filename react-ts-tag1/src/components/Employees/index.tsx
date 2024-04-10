import { employeesData } from "../../store/employess_data";
import EmployeeCard from "./components/EmployeeCard";


const Employees = () => {

    const ListOfEmployees = employeesData.map((item, index) => {
        return <EmployeeCard
            key={index + item.name}
            {...item} />
    })

    return (
        <div>
            <h3>Unsere Mitarbeiter</h3>
            {ListOfEmployees}
        </div>
    )
}

export default Employees

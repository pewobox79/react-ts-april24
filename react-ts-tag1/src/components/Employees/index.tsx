import { employeesData } from "../../store/employess_data";
import EmployeeCard from "./components/EmployeeCard";
import { UserContext } from "@/store/context";
import { useContext } from "react";


const Employees = () => {

    const userState = useContext(UserContext)
    console.log("userState", userState)
    const ListOfEmployees = employeesData.map((item, index) => {
        return <EmployeeCard
            key={index + item.name}
            {...item} />
    })

    return (
        <div>
            <h3>Unsere Mitarbeiter</h3>
            {userState ? ListOfEmployees : "no list for you"}
        </div>
    )
}

export default Employees


const CardSkills = ({ skills }: { skills: string[] }) => {

    const ListOfSkills = skills.map((item: string) => (
        <li key={item}>
            {item}
        </li>
    ))

    return (
        <ul>
            {ListOfSkills}
        </ul>
    )
}

export default CardSkills

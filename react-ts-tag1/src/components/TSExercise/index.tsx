import ButtonTS from "./ButtonTS"


const TSExercise = () => {

    function handleClick() {

        return 22
    }

    const icon = <i></i>
    return (
        <div>
            <ButtonTS
                style={{
                    backgroundColor: "yellow",
                    padding: "10px 10px 10px 10px",
                    border: "1px solid red"
                }}
                handler={handleClick}>

                {icon}
            </ButtonTS>
        </div>
    )
}

export default TSExercise

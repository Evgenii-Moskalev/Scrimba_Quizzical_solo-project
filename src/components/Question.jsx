import React from "react";
export default function Question({ question, allAnswers }) {
    // console.log(question, correct_answer, incorrect_answers);

    // const allAnswers = [...incorrect_answers];
    // const randomNum = Math.floor(Math.random() * (allAnswers.length + 1));
    // allAnswers.splice(randomNum, 0, correct_answer);

    const [formData, setFormData] = React.useState(
        {
            answer: ""
        }
    )


    // const styles = {
    //     display: "none",
    //     paddingRight: "5px"
    // }
    // console.log(formData.name)

    function handleChange(event) {
        console.log(event.target);

        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    return (
        <form>
            <fieldset>
                <h2>{question}</h2>

                <label style={{ backgroundColor: formData.answer === "one" ? "#D6DBF5" : "" }}>
                    <input
                        type="radio"
                        name="answer"
                        value="one"
                        checked={formData.answer === "one"}
                        onChange={handleChange}
                        style={{display: "none"}}
                    />
                    {allAnswers[0]}
                </label>

                <label style={{ backgroundColor: formData.answer === "two" ? "#D6DBF5" : "" }}>
                    <input
                        type="radio"
                        name="answer"
                        value="two"
                        checked={formData.answer === "two"}
                        onChange={handleChange}
                        style={{ display: "none" }}
                    />
                    {allAnswers[1]}
                </label>

                <label style={{ backgroundColor: formData.answer === "three" ? "#D6DBF5" : "" }}>
                    <input
                        type="radio"
                        name="answer"
                        value="three"
                        checked={formData.answer === "three"}
                        onChange={handleChange}
                        style={{ display: "none" }}
                    />
                    {allAnswers[2]}
                </label>

                <label style={{ backgroundColor: formData.answer === "four" ? "#D6DBF5" : "" }}>
                    <input
                        type="radio"
                        name="answer"
                        value="four"
                        checked={formData.answer === "four"}
                        onChange={handleChange}
                        style={{display: "none"}}
                    />
                    {allAnswers[3]}
                </label>

            </fieldset>
        </form>
    )
}
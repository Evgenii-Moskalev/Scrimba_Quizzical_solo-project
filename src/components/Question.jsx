import React from "react";
export default function Question({ question, correct_answer, incorrect_answers }) {
    // console.log(question, correct_answer, incorrect_answers);

    const allAnswers = [...incorrect_answers];
    const randomNum = Math.floor(Math.random() * (allAnswers.length + 1));
    allAnswers.splice(randomNum, 0, correct_answer);



    const [formData, setFormData] = React.useState(
        {
            answer: ""
        }
    )

    console.log(formData.answer)
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

                <label >
                    <input
                        type="radio"
                        name="answer"
                        value="one"
                        checked={formData.answer === "one"}
                        onChange={handleChange}
                    />
                    {allAnswers[0]}
                </label>

                <label >
                    <input
                        type="radio"
                        name="answer"
                        value="two"
                        checked={formData.answer === "two"}
                        onChange={handleChange}
                    />
                    {allAnswers[1]}
                </label>

                <label >
                    <input
                        type="radio"
                        name="answer"
                        value="three"
                        checked={formData.answer === "three"}
                        onChange={handleChange}
                    />
                    {allAnswers[2]}
                </label>

                <label >
                    <input
                        type="radio"
                        name="answer"
                        value="four"
                        checked={formData.answer === "four"}
                        onChange={handleChange}
                    />
                    {allAnswers[3]}
                </label>

            </fieldset>
        </form>
    )
}
import React from "react";
import "./Question.css"
import { decode } from 'html-entities';

export default function Question({ id, question, allAnswers, collectAnswers, correctAnswer }) {
    const decodedQuestion = decode(question);
    const decodedAllAnswers = allAnswers.map((elem) => decode(elem));

    const [formData, setFormData] = React.useState(
        {
            answer: ""
        }
    )

    function handleChange(event) {
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
                <h3>{decodedQuestion}</h3>

                <label style={{ backgroundColor: formData.answer === "one" ? "#D6DBF5" : "" }}
                >
                    <input
                        type="radio"
                        name="answer"
                        value="one"
                        checked={formData.answer === "one"}
                        onChange={handleChange}
                        style={{ display: "none" }}
                        onClick={(e) => collectAnswers(e, id)}
                    />
                    {decodedAllAnswers[0]}
                    
                </label>

                <label style={{ backgroundColor: formData.answer === "two" ? "#D6DBF5" : "" }}
                >
                    <input
                        type="radio"
                        name="answer"
                        value="two"
                        checked={formData.answer === "two"}
                        onChange={handleChange}
                        style={{ display: "none" }}
                        onClick={(e) => collectAnswers(e, id)}
                    />
                    {decodedAllAnswers[1]}
                </label>

                <label style={{ backgroundColor: formData.answer === "three" ? "#D6DBF5" : "" }}
                >
                    <input
                        type="radio"
                        name="answer"
                        value="three"
                        checked={formData.answer === "three"}
                        onChange={handleChange}
                        style={{ display: "none" }}
                        onClick={(e) => collectAnswers(e, id)}
                    />
                    {decodedAllAnswers[2]}
                </label>

                <label style={{ backgroundColor: formData.answer === "four" ? "#D6DBF5" : "" }}
                >
                    <input
                        type="radio"
                        name="answer"
                        value="four"
                        checked={formData.answer === "four"}
                        onChange={handleChange}
                        style={{ display: "none" }}
                        onClick={(e) => collectAnswers(e, id)}
                    />
                    {decodedAllAnswers[3]}
                </label>
            </fieldset>
        </form>
    )
}
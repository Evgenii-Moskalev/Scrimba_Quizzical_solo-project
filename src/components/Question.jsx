
export default function Question({ question }) {
    console.log();
    return (
        <>
            <h2>{question.question}</h2>
            <div>
                <input type="radio" label="" value="one" name="answer" />
                <input type="radio" label="" value="two" name="answer" />
                <input type="radio" label="" value="three" name="answer" />
                <input type="radio" label="" value="four" name="answer" />
            </div>
        </>
    )
}
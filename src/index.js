import ReactDOM  from "react-dom"

function List()
{
    return (
        <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
        </ul>
    )
}

const element = document.querySelector(".root")
ReactDOM.render(List(), element)
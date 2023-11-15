export const Button = (props) => {
    const change = () => {
        props.setSeeText((prev) => !prev);
    }

    return <button onClick={change}>Click</button>
}
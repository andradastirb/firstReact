export const ChangeShow = (prop) => {
    const show = () => {
        prop.setShow((prev) => !prev);
    };

    return (
        <>
        <button onClick={show}>Change</button>
        </>
    );
}
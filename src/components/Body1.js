import { Body1Child } from "./Body1Child";

export const Body1 = (props) => {
  // console.log("Body 1 " + JSON.stringify(props.array));

  return (
    <>
    <h1>Body1</h1>
    <Body1Child array2={props.array} />
    </>
  );
};

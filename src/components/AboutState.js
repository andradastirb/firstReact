import { useState } from "react";
import { ChangeShow } from "./ChangeShow";

export const AboutState = () => {
  const [showText, setShowText] = useState(false);

  const colors = {
    color: "green",
    backgroundColor: "yellow",
  };

  return (
    <>
      <ChangeShow setShow={setShowText} />
      {showText ? (
        <div style={colors}>Show</div>
      ) : (
        <div style={{ color: "red" }}>Hide</div>
      )}
    </>
  );
};

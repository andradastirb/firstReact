//prop drillig linia 4

export const Body1Child = (props) => {
  // console.log("Body 1 Child " + JSON.stringify(props.array2));
  const Dogs = props.array2;
  return (
    <>
      {Dogs.map((dog) => {
        return (
          <div>
            <h3>{dog.name}</h3>
            <p>
              Has {dog.age} old and is{" "}
              {dog.friendly ? "friendly" : "not friendly"}.
            </p>
            <p>Has {dog.age} old and is {!dog.friendly && 'not'} friendly.</p>
          </div>
        );
      })}
    </>
  );
};

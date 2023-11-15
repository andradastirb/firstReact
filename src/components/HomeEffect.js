import { useState } from "react";
import { useEffect } from "react";
import "../App.css";

export const HomeEffect = () => {
  const [resorceType, setResorceType] = useState("posts");
  // const [items, setItems] = useState([]);
  const [see, setSee] = useState(true);

  useEffect(() => {
    //   fetch(`https://jsonplaceholder.typicode.com/${resorceType}`)
    //     .then((response) => response.json())
    //     .then((x) => setItems(x));

    console.log(resorceType);
  }, [resorceType]);

  return (
    <>
      <div className="effstyle">
        <button className="btn" onClick={() => setResorceType("posts")}>
          Posts
        </button>
        <button className="btn" onClick={() => setResorceType("users")}>
          Users
        </button>
        <button className="btn" onClick={() => setResorceType("comments")}>
          Comments
        </button>
      </div>
      <h1 className="effstyle">{resorceType}</h1>
      {/* {items.map((item) => {
          return <div>{JSON.stringify(item)}</div>;
        })} */}
      <div className="effstyle">
        <button className="btn" onClick={() => setSee((prev) => !prev)}>
          See
        </button>
        {see && <h2>I can see you</h2>}
        {see ? <h2>I can see you</h2> : <h2>I can't see you</h2>}
      </div>
    </>
  );
};

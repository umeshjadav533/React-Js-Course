import React from "react";

const Child = ({click}) => {
    console.log("Child rendred");
  return <button onClick={click}>Child Button</button>
}

export default React.memo(Child)

import React, { useEffect } from "react";

const LifeCycle = () => {
  const [text, setText] = React.useState("");

  // componentDidMount
  React.useEffect(() => {
    console.log("Component mounted");
    return () => {
      // componentWillUnmount
      console.log("Component unmounted");
    };
  }, []);

  // componentDidUpdate
  React.useEffect(() => {
    console.log("Component updated with text:", text);
  }, [text]);

  // montar, actualizar
  useEffect(() => {
    console.log("Always does this");
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      text: {text}
    </div>
  );
};

export default LifeCycle;

import React from 'react';

const App = () => {
  const isLoggedIn = true;
  const num = 4;
  const isVisible = false;

  let message;
  if (isLoggedIn) {
    message = <h1>Welcome User!</h1>;
  } else {
    message = <h2>Please Login</h2>;
  }

  return (
    <>
      {/* Login Condition */}
      <div>{message}</div>

      {/* Number Condition */}
      {num === 4 ? <h1>Equal</h1> : <h1>Not Equal</h1>}

      {/* Visibility using INLINE STYLE */}
      <h1 style={{ visibility: isVisible ? "visible" : "hidden" }}>
        Conditional rendering
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit
        ducimus optio quo dolore deleniti laboriosam numquam iure quas assumenda,
        perspiciatis, laudantium eligendi obcaecati voluptates ex, eos adipisci in
        excepturi harum soluta omnis. Voluptatem deleniti culpa repellat.
        Voluptatum, debitis accusantium.
      </p>
    </>
  );
};

export default App;

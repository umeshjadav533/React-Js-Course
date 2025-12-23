import { useState } from "react";

export function Parent() {
  const [text, setText] = useState('');

  return (
    <div>
      <Child onChange={setText} />
      <h2>Typed: {text}</h2>
    </div>
  );
}

function Child({ onChange }) {
  return (
    <input
      type="text"
      placeholder="Enter Full Name"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Parent;

import { createPortal } from "react-dom";

const PortalTest = () => {
  return (
    <>
      <h1>PortalTest component</h1>
      { createPortal (<h1>Basic Exampleal of createportal App</h1>, document.body)}
    </>
  );
};

export default PortalTest;

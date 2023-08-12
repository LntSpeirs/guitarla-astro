import React, { useState } from "react";

const ComponenteReact = () => {
  const [cliente, setCliente] = useState("juan");
  //Este console.log no sale en el lado del cliente a no ser que le añadas el client:load al llamarlo
  console.log("desde componente react");
  return (
    <>
      <div>ComponenteReact</div>
      {cliente}
    </>
  );
};

export default ComponenteReact;

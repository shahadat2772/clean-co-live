import React, { useState } from "react";

const useAdmin = () => {
  const [admin, serAdmin] = useState(true);

  return [admin];
};

export default useAdmin;

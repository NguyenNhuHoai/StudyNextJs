import React from "react";

const loginLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <main>{children}</main>;
};

export default loginLayout;

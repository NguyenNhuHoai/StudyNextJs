import Link from "next/link";
import React from "react";

const registerLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div>
    {children}
    </div>;
};

export default registerLayout;

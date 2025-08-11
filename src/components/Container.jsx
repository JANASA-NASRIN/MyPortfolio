import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-8">
      {children}
    </div>
  );
};

export default Container;

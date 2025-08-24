import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-[#FDF5E6] py-6">
      <div className="container mx-auto flex justify-center items-center px-4">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Jenesa Ara Nasrin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


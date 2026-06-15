
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";

const Navbar = () => {
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-black font-medium">
            Home
          </a>
          <a href="#" className="text-black font-medium">
            Programs
          </a>
          <a href="#" className="text-black font-medium">
            Pricing
          </a>
        </div>


        <div className="flex items-center gap-2">
          <HexagonOutlinedIcon sx={{ fontSize: 32 }} />
          <h1 className="text-4xl font-bold">HeavyLift</h1>
        </div>

        
        <div className="flex items-center gap-8">
          <a href="#" className="text-black font-medium">
            Contact
          </a>
          <a href="#" className="text-black font-medium">
            About
          </a>
          <a href="#" className="text-black font-medium">
            Faq
          </a>

          <div className="flex items-center gap-4">
            <SearchOutlinedIcon />
            <PersonOutlineOutlinedIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
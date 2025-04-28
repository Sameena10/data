import React, { useState, useEffect, useRef } from 'react';
import "../style/navb.css";
import { Link} from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const navRef = useRef(); 

  const handleMouseEnter = (menu) => {
    if (!isMobileMenuOpen) setOpenMenu(menu);  
  };

  const handleMouseLeave = () => {
    if (!isMobileMenuOpen) setOpenMenu(null);  
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);  
  };

  const toggleMobileDropdown = (id) => {
    setOpenMobileDropdown(openMobileDropdown === id ? null : id); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
        setOpenMobileDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      label: "Use Cases",
      id: "useCases",
      dropdown: [
        { label: "User Overview", path: "/usecase" },
      ],
    },
    {
      label: "Product",
      id: "product",
      dropdown: [
        { label: "Product Overview", path: "/product-overview" },
        { label: "Technology", path: "/technology" },
        { label: "How it compares", path: "/comparison" },
        { label: "FAQs By Job Role", path: "/faqs" },
        { label: "Did You Know?", path: "/did-you-know" },
      ],
    }
  ];

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-left">
        <h2 className="logo">DataSearch</h2>
      </div>

      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>

        <li>
          <Link to="/">Platform</Link>
        </li>

        {menuItems.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => handleMouseEnter(item.id)}  
            onMouseLeave={handleMouseLeave}  
            onClick={() => isMobileMenuOpen && toggleMobileDropdown(item.id)}  
          >
            {item.label}

            {(openMenu === item.id || openMobileDropdown === item.id) && (
              <ul className="dropdown">
                {item.dropdown.map((subItem, index) => (
                  <li key={index}>
                    <Link
                      to={subItem.path}
                      onClick={() => {
                        toggleMobileMenu();
                        setOpenMenu(null);
                        setOpenMobileDropdown(null);
                      }}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>

      <div className="navbar-right">
      <Link to="/book-demo">
      <button className="demo-btn">Request A Demo</button>
     </Link>
      </div>
    </nav>
    
  );
};

export default Navbar;

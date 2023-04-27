import { Link, NavLink } from "react-router-dom";

const Header = () => {
  

  return (
    <header>
      <nav>
        <Link to="/">
          <h1 className="branding">
            <span className="logo">{"//"}</span>
            
          </h1>
        </Link>
        <div className="navigation">
          <NavLink className="button" exact to="/meals">
            All Meals
          </NavLink>
          <NavLink className="button" to="/meals/new">
            Add Meal
          </NavLink>
          <NavLink className="button" to="/calculator">
            Macro Calculator
          </NavLink>
          <NavLink className="button" to="/login">
            Login
          </NavLink>
          <NavLink className="button" to="/signup">
            Sign Up
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;

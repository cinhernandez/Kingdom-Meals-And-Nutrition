import { NavLink } from "react-router-dom";

const Header = () => {
  

  return (
    <header>
      <nav >
        <div className="navigation">
          <NavLink className="button" exact to="/">
           Home
          </NavLink>
          <NavLink className="button" to="/meals">
            Meals
          </NavLink>
          <NavLink className="button" exact to="/new">
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

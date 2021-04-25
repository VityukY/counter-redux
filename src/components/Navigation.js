import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navigation = () => {
   return (
      <nav className="navList">
         <NavLink exact to={routes.home}>
            Home Page
         </NavLink>
         <NavLink exact to={routes.counter}>
            Counter
         </NavLink>
         <NavLink exact to={routes.practice}>
            Other practice
         </NavLink>
      </nav>
   );
};
export default Navigation;

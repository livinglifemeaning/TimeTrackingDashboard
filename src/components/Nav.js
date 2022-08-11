import {NavLink} from "react-router-dom"; 
import classes from './Nav.module.css' 
const Nav = (props) => {


    return (
        <nav className={classes.navList}>
        <ul>
            <li>
            <NavLink activeClassName={classes.active} to='/dashboard/daily'>Daily</NavLink>
            </li>
            <li>
            <NavLink activeClassName={classes.active} to='/dashboard/weekly'>Weekly</NavLink>
            </li>
            <li>
            <NavLink activeClassName={classes.active} to='/dashboard/monthly'>Monthly</NavLink>
            </li>
        </ul>
    </nav> 
    )
}

export default Nav; 
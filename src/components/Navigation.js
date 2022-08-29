import { NavLink, useNavigate } from 'react-router-dom'
import { RiHome4Fill } from 'react-icons/ri'
import { IoIosPaper } from 'react-icons/io'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Navigation = () => {
    const navigate = useNavigate()

    return (
        <div className="navigation_mobile">
            <div className='navigation_items'>
                <NavLink to="/" className={({ isActive }) => isActive ? "link activeLink" : "link"}>  <RiHome4Fill /> </NavLink>
                <NavLink to="/me" className={({ isActive }) => isActive ? "link activeLink" : "link"}> <BsFillPersonFill /> </NavLink>
                <NavLink to="/resume" className={({ isActive }) => isActive ? "link activeLink" : "link"}> <IoIosPaper /> </NavLink>
                <NavLink to="/contact-me" className={({ isActive }) => isActive ? "link activeLink" : "link"}> <BiMessageSquareDetail /> </NavLink>
            </div>
        </div >




        //       <div className="navigation">
        //       <div className='navigation_items'>
        //           <div> <NavLink to="/" className={(navData) => navData.isActive ? "link activeLink" : "link"}>Home</NavLink> </div>
        //           <div> <NavLink to="/resume" className={(navData) => navData.isActive ? "link activeLink" : "link"}>Resume</NavLink> </div>
        //           <div> <NavLink to="/contact-me" className={(navData) => navData.isActive ? "link activeLink" : "link"}>Contact me</NavLink> </div>
        //       </div>
        //   </div >
    );
}

export default Navigation;
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import './head.css'
import img from '/public/ldp_plugin-wpml.png'


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()
    }
    console.log(user)
    return (
        <div className="navbar bg-sky-400">
            <div className="navbar-start">

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  bg-sky-300 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" className='font-bold'>Home</Link></li>
                        <li><Link to="/AllToys" className='font-bold'>All Toys</Link></li>
                        {
                            user ? <ul> <li><Link to="/MyToys" className='font-bold'>My Toys</Link></li>
                                <li><Link to="/AddToys" className='font-bold'>Add Toys</Link></li></ul> : <div></div>
                        }

                        <li><Link to="/Blogs" className='font-bold'>Blogs</Link></li>
                    </ul>
                </div>
                <img className='img-nav' src={img} alt="" />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className='font-bold'>Home</Link></li>
                    <li><Link to="/AllToys" className='font-bold'>All Toys</Link></li>
                    {
                        user ? <ul className='flex '> <li><Link to="/MyToys" className='font-bold'>My Toys</Link></li>
                            <li><Link to="/AddToys" className='font-bold '>Add Toys</Link></li></ul> : <div></div>
                    }
                    <li><Link to="/Blogs" className='font-bold'>Blogs</Link></li>
                </ul>


            </div>
            <div className="navbar-end">
                <div className='flex px-5'>
                    {
                        user && <span className='mx-3'><img className="imgProfile  " title={user.displayName} src={user.photoURL} alt="" /></span>
                    }
                    {user ?
                        <button onClick={handleLogout} className=' font-bold'> Logout</button>
                        :

                        <Link to="/Login">
                            <div className='text-center flex '> <button className='btn btn-primary'>login</button></div>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
import { Outlet, Link } from "react-router-dom";
const Layout =() =>{
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/myform">My form test</Link>
                    </li>
                    <li>
                        <Link to="/multiinputform">My multi input form test</Link>
                    </li>
                    <li>
                        <Link to="/withoutmemo">todo without memo (monitor console.log)</Link>
                    </li>
                    <li>
                        <Link to="/withmemo">todo with memo (monitor console.log)</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}


export default Layout;

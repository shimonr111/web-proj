import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Get Data</Link>
          </li>
          <li>
            <Link to="/edit">Edit Data</Link>
          </li>
          <li>
            <Link to="/add">Add Data</Link>
          </li>
          <li>
            <Link to="/delete">Delete Data</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;

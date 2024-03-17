import { Outlet } from "react-router-dom";

function HomeLayout() {
  return <div>
    <nav>
        <span className='text-4xl text-primary'>Comfy</span>
      </nav>
    <Outlet/>
  </div>;
}

export default HomeLayout;

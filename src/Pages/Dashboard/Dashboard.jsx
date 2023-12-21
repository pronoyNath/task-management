import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();


  let Menus = [];

    Menus = [
      { title: "Dashboard", src: "https://i.ibb.co/pZdfyDq/Chart-fill.png", link: '/dashboard' },
      { title: "Tasks", src: "https://i.ibb.co/W6kRqk6/to-do-list.png", link: 'tasks' },
      { title: "User Profile", src: "https://i.ibb.co/4gS8Pbb/profile.png", gap: true, link: 'profile' },
    ];


  // console.log(userRole, "----->", Menus);


  return (
    <div className="flex ">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-gray-800  p-5 z-50 pt-8 relative duration-300 h-screen`}
      >
        <img
          src="https://i.ibb.co/TPWHKZL/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-green-500
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div onClick={() => navigate('/')} className="flex gap-x-4 items-center">
          <img
            src="https://i.ibb.co/WKbfkZD/task-1.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]  w-[200px] h-[70px]"
              }`}
          />
          
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              onClick={() => {
                navigate(`${Menu.link}`);
              }}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-20" : "mt-2"} ${index === 0 && "border border-green-500"}
              ${location.pathname == `/dashboard/${Menu?.link}` ? "bg-green-500" : ""}
              
              `}
            >

              <img src={Menu.src} className="h-[20px] w-[20px]" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>


            </li>
          ))}
        </ul>
      </div>
      <div className=" flex-1 p-7 z-0bg-gray-700">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Dashboard;
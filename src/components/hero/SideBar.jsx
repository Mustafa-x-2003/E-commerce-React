import React, { useContext } from "react";
import { Link } from "react-router";
import { IoMenuSharp } from "react-icons/io5";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MyContext from "../contexts/MyContext";

export default function SideBar({ links=[]}) {
  const [open, setOpen] = React.useState(false);
    const { allCategorys } = useContext(MyContext);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {links.map((l) => (
          <ListItem 
          
          key={l.name} disablePadding>
            <ListItemButton>
              <Link  className="w-full" to={l.path}>
                <h2 className="text-center text-lg">{l.name}</h2>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {links.map((l) => (
          <ListItem key={l.name} disablePadding>
            <ListItemButton>
              <Link to={l.path}>
                <p>{l.nape}</p>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="md:hidden">
      <span className="text-(--main-color)" onClick={toggleDrawer(true)}>
        <IoMenuSharp />
      </span>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

// =============

// export default function SideBar() {
//   return (

//     <>

//     <div
//       className={` ${show ? " scale-100 opacity-100" : " scale-0 opacity-0"}  transition-all duration-500 absolute z-100 w-full h-screen bg-[rgba(0,0,0,.5)]`}

//     >

//     </div>

//     <div
//         className={`${show ? "  showSidBar  " : "  heddinSidBar  "} top-0  absolute z-100  px-2 py-4 w-[90%] md:w-100 h-screen bg-(--white-color)  shadow-[0_0_10px_4px_rgba(0,0,0,0.2)]`}
//       >
//         <div className="flex items-start ">
//           <div className="flex-1"></div>
//           <IconButton
//             aria-label="off"
//             onClick={() => {
//               handel(false);
//             }}
//           >
//             <HighlightOffIcon className="text-3xl!" />
//           </IconButton>
//         </div>
//         <div>
//           <Stack spacing={2}>
//             {links.map((l) => {
//               return (
//                 <Item
//                   onClick={() => {
//                     handel(false);
//                   }}
//                   key={l.name}
//                 >
//                   <Link className="text-xl text-(--main-color )" to={l.path}>
//                     {l.name}
//                   </Link>
//                 </Item>
//               );
//             })}
//           </Stack>
//         </div>
//       </div>
//     </>

//   );
// }

import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Link } from "react-router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

/*
<div
        className={` ${isShowSideBar?'left-0 ':' -left-full'}  transition-all duration-500 absolute z-100 w-full h-screen bg-[rgba(0,0,0,.5)]`}
      ></div>
*/

export default function SideBar({ show, links = [], handel }) {
  return (

    <>

    <div
      className={` ${show ? " scale-100 opacity-100" : " scale-0 opacity-0"}  transition-all duration-500 absolute z-100 w-full h-screen bg-[rgba(0,0,0,.5)]`}
      
    >
      
    </div>



    <div
        className={`${show ? "  showSidBar  " : "  heddinSidBar  "} top-0  absolute z-100  px-2 py-4 w-[90%] md:w-100 h-screen bg-(--white-color)  shadow-[0_0_10px_4px_rgba(0,0,0,0.2)]`}
      >
        <div className="flex items-start ">
          <div className="flex-1"></div>
          <IconButton
            aria-label="off"
            onClick={() => {
              handel(false);
            }}
          >
            <HighlightOffIcon className="text-3xl!" />
          </IconButton>
        </div>
        <div>
          <Stack spacing={2}>
            {links.map((l) => {
              return (
                <Item
                  onClick={() => {
                    handel(false);
                  }}
                  key={l.name}
                >
                  <Link className="text-xl text-(--main-color )" to={l.path}>
                    {l.name}
                  </Link>
                </Item>
              );
            })}
          </Stack>
        </div>
      </div>
    </>
    
  );
}

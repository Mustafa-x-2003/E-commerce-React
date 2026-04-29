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

export default function SideBar({ show, links = [], handel }) {
  return (
    <div
      className={`${show ? "  showSidBar  " : "  heddinSidBar  "} top-0 sm:hidden absolute z-100  px-2 py-4 w-full h-screen bg-(--white-color)`}
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
              <Item key={l.name} className="bg-amber-900 ">
                <Link className="text-xl text-(--main-color )" to={l.path}>{l.name}</Link>
              </Item>
            );
          })}
        </Stack>
      </div>
    </div>
  );
}

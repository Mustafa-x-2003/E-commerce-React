import React, { useContext } from "react";
import { Link } from "react-router";
import HeaderIcon from "./HeaderIcon";
import MyContext from "../contexts/MyContext";
import ListItemButton from "@mui/material/ListItemButton";

import List from "@mui/material/List";
// === import icons ===
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FaUser } from "react-icons/fa6";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function HeaderIcons() {
  const { productsCart, productsFavorite } = useContext(MyContext);
  return (
    <>
      {/* === Small === */}
      <List>
        <div className=" pl-2 flex md:hidden flex-col items-start  gap-1 ">
          <div className="w-full">
            <Link to={"/Favorite"} className="flex">
              <HeaderIcon
                count={productsFavorite ? productsFavorite.length : 0}
                icon={<FavoriteIcon />}
              />
              <ListItemButton>
                <span className="w-full text-start!">Favorite</span>
              </ListItemButton>
            </Link>
          </div>

          <div className="w-full">
            <Link to={"/CartPage"} className="flex">
              <HeaderIcon
                count={productsCart ? productsCart.length : 0}
                icon={<ShoppingCartIcon />}
              />
              <ListItemButton>
                <span className="w-full text-start!">Cart</span>
              </ListItemButton>
            </Link>
          </div>

          <div className="w-full">
            <Link to={"/CartPage"} className="flex">
              <HeaderIcon icon={<FaUser />} />
              <ListItemButton>
                <span className="w-full text-start!">Profile</span>
              </ListItemButton>
            </Link>
          </div>
        </div>
      </List>

      {/* === Larg === */}
      <div className=" hidden md:flex items-center gap-4 ">
        <Link to={"/Favorite"}>
          <HeaderIcon
            count={productsFavorite ? productsFavorite.length : 0}
            icon={<FavoriteIcon />}
          />
        </Link>

        <Link to={"/CartPage"}>
          <HeaderIcon
            count={productsCart ? productsCart.length : 0}
            icon={<ShoppingCartIcon />}
          />
        </Link>

        <Link to={""} className="flexb">
          <span className="text-2xl  text-(--p-color)">
            <FaUser />
          </span>
        </Link>
      </div>
    </>
  );
}

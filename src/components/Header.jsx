import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import AvatarLogo from "../assets/avatar.png";
import { Link } from "react-router-dom";
import { BsBasket } from "react-icons/bs";
import { MdAdd, MdLogout } from "react-icons/md";
import { firebase__auth, firebase__provider } from "../firebaseConfig";
import { useStateValue } from "../context/StateProvider";
import { signInWithPopup } from "firebase/auth";
import { actionType } from "../context/reducer";
import { Avatar } from "@mui/material";

const Header = () => {
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const [menuToggle, setMenuToggle] = useState(false);

  const loginFunc = async () => {
    const {
      user: { providerData },
    } = await signInWithPopup(firebase__auth, firebase__provider);

    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <>
      <header className="fixed w-screen px-5 md:px-16 py-4 md:py-5 flex bg-headerOverlay items-center justify-between  z-50">
        <Link to="/">
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            <img
              className="w-10 h-10 md:w-12 md:h-12 object-contain cursor-pointer"
              src={Logo}
              alt="logo"
            />
            <h4 className="text-lg md:text-xl capitalize font-semibold tracking-wider">
              City
            </h4>
          </motion.div>
        </Link>

        <ul className="hidden md:flex items-center gap-6 ">
          <motion.li
            whileTap={{ scale: 0.6 }}
            className="li_items hover:text-headingColor"
          >
            home
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.6 }}
            className="li_items hover:text-headingColor"
          >
            menu
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.6 }}
            className="li_items hover:text-headingColor"
          >
            about us
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.6 }}
            className="li_items hover:text-headingColor"
          >
            service
          </motion.li>
        </ul>

        <div className="relative flex items-center justify-center gap-5">
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="flex items-center justify-center relative cursor-pointer"
            onClick={showCart}
          >
            <BsBasket className="w-6 h-6 text-gray-600" />
            {cartItems && cartItems.length > 0 && (
              <p className="bg-red-600 w-4 h-4 rounded-full text-white text-xs flex items-center justify-center absolute -bottom-2 -right-2">
                {cartItems.length}
              </p>
            )}
          </motion.div>

          <div className="relative">
            <motion.div
              whileTap={{ scale: 0.6 }}
              className="w-9 h-9 md:w-11 md:h-11 object-contain rounded-full drop-shadow-2xl cursor-pointer flex items-center justify-center"
              onClick={() => {
                if (user) {
                  setMenuToggle((state) => !state);
                } else {
                  loginFunc();
                }
              }}
            >
              <Avatar
                src={user ? user.photoURL : AvatarLogo}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </motion.div>

            {menuToggle && (
              <div className="absolute top-14 right-0 w-[300px] sm:w-[45vw] md:w-[200px] rounded-xl bg-white drop-shadow-sm overflow-hidden pt-3">
                <ul className="flex flex-col items-start justify-center gap-5 ">
                  {user && user.email === "hm829315@gmail.com" && (
                    <Link
                      to="/CreateItem"
                      className="flex items-center gap-3 px-4 sm:px-5"
                      onClick={() => {
                        setMenuToggle((state) => !state);
                      }}
                    >
                      <p className="li_items hover:text-headingColor">
                        New Item
                      </p>
                      <MdAdd className="w-4 sm:w-5 h-4 sm:h-5 text-textColor" />
                    </Link>
                  )}
                  <motion.li
                    whileTap={{ scale: 0.6 }}
                    className="li_items hover:text-headingColor px-4 sm:px-5 sm:text-lg md:hidden"
                    onClick={() => {
                      setMenuToggle((state) => !state);
                    }}
                  >
                    home
                  </motion.li>
                  <motion.li
                    whileTap={{ scale: 0.6 }}
                    className="li_items hover:text-headingColor px-4 sm:px-5 sm:text-lg md:hidden"
                    onClick={() => {
                      setMenuToggle((state) => !state);
                    }}
                  >
                    menu
                  </motion.li>
                  <motion.li
                    whileTap={{ scale: 0.6 }}
                    className="li_items hover:text-headingColor px-4 sm:px-5 sm:text-lg md:hidden"
                    onClick={() => {
                      setMenuToggle((state) => !state);
                    }}
                  >
                    about us
                  </motion.li>
                  <motion.li
                    whileTap={{ scale: 0.6 }}
                    className="li_items hover:text-headingColor px-4 sm:px-5 sm:text-lg md:hidden"
                    onClick={() => {
                      setMenuToggle((state) => !state);
                    }}
                  >
                    service
                  </motion.li>
                  <div
                    className="flex items-center justify-center gap-3 bg-slate-200 w-full py-2"
                    onClick={() => {
                      firebase__auth.signOut();
                      setMenuToggle((state) => !state);
                      dispatch({
                        type: actionType.SET_USER,
                        user: null,
                      });
                    }}
                  >
                    <p className="li_items hover:text-headingColor sm:text-lg ">
                      Logout
                    </p>
                    <MdLogout className="w-4 sm:w-5 h-4 sm:h-5 text-textColor" />
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

"use client";
import { useState } from "react";
import Link from "next/link";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import {
  ChevronDown,
  CircleUser,
  Menu,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";

import { headerItems } from "@/shared/helpers/data/headerData";

import Logo from "@/assets/icons/Logo.svg";
import style from "@/assets/css/header.module.css";

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  const variants = width <= 1023 && { open: { x: 0 }, closed: { x: "-100%" } };

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.navMenu}>
          <Link href="/">
            <Logo />
          </Link>
          <motion.div
            className={clsx(style.sidebar, { ["!block"]: open })}
            animate={open ? "open" : "closed"}
            variants={variants || undefined}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {headerItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href="/">
                      <span>{item.title}</span>
                      {index === 1 ? <ChevronDown size={20} /> : null}
                    </Link>
                  </li>
                );
              })}
              <li className="bg-accent hover:bg-primary group p-[0.6875rem] rounded w-fit">
                <Search
                  size={16}
                  className="text-secondary group-hover:text-white"
                />
              </li>
              <li className="bg-accent hover:bg-primary group p-[0.6875rem] rounded w-fit">
                <CircleUser
                  size={16}
                  className="text-secondary group-hover:text-white"
                />
              </li>
              <li className="bg-accent hover:bg-primary group p-[0.6875rem] rounded relative w-fit">
                <ShoppingCart
                  size={16}
                  className="text-secondary group-hover:text-white"
                />
                <span className="bg-danger text-[0.625rem] leading-4 font-medium absolute -top-[0.3125rem] -right-[0.4375rem] px-[0.3438rem] py-[0.0625rem] rounded-full">
                  2
                </span>
              </li>
            </ul>
          </motion.div>

          <button
            className="lg:hidden w-10 h-10 grid place-items-center bg-antiFlashWhite rounded-md"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <>
                <X size={24} className="text-slateGray" />{" "}
              </>
            ) : (
              <>
                <Menu size={24} className="text-slateGray" />
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

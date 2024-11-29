"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/icons/Logo.svg";
import { Delete, Menu } from "lucide-react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useWindowSize } from "usehooks-ts";
import style from "@/assets/css/header.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { headerItems } from "@/shared/helpers/data/headerData";

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const { width } = useWindowSize();
  const router = useRouter();
  console.log(router);

  const variants = width <= 1023 && { open: { x: 0 }, closed: { x: "-100%" } };

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    if (open) {
      bodyElement?.classList.add("overlay");
    } else {
      setOpen(false);
      bodyElement?.classList.remove("overlay");
    }
  }, [open]);

  return (
    <header className={clsx(style.header)}>
      <div className="common_container">
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
                    <Link href="">
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <button
            className="lg:hidden w-10 h-10 grid place-items-center bg-red-400 rounded-md"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <>
                <Delete size={24} className="text-red-500" />{" "}
                <span>delete</span>
              </>
            ) : (
              <>
                <Menu size={24} className="text-red-500" />
                <span>delete</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

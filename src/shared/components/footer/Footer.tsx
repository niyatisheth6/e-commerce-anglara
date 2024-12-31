import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/icons/Logo-white.svg";
import Facebook from "@/assets/icons/Facebook.svg";
import Instagram from "@/assets/icons/Instagram.svg";
import Linkedin from "@/assets/icons/Linkedin.svg";
import Twitter from "@/assets/icons/Twitter.svg";
import App from "@/assets/icons/App Store.svg?url";
import Google from "@/assets/icons/Google Play.svg?url";
import style from "@/assets/css/footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <div className="container">
        <Link href="/">
          <Logo />
        </Link>
        <div className={style.footerData}>
          <div>
            <h2 className={style.footerTitle}>Contact us</h2>
            <ul className={style.footerList}>
              <li>
                <Link href="#">Logo@gmail.com</Link>
              </li>
              <li>
                <Link href="#">+91 12345 67890</Link>
              </li>
              <li>
                Lorem ipsum dolor sit amet{" "}
                <span className="block">
                  consectetur. Nulla tempus elit nec.
                </span>
              </li>
              <li className="flex gap-5">
                <Link href="#">
                  <Facebook />
                </Link>
                <Link href="#">
                  <Linkedin />
                </Link>
                <Link href="#">
                  <Twitter />
                </Link>
                <Link href="#">
                  <Instagram />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={style.footerTitle}>Products Links</h2>
            <ul className={style.footerList}>
              <li>
                <Link href="#">Auctor volutpat.</Link>
              </li>
              <li>
                <Link href="#">Fermentum turpis.</Link>
              </li>
              <li>
                <Link href="#">Mi consequat.</Link>
              </li>
              <li>
                <Link href="#">Amet venenatis.</Link>
              </li>
              <li>
                <Link href="#">Convallis porttitor.</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={style.footerTitle}>Quick Links</h2>
            <ul className={style.footerList}>
              <li>
                <Link href="#">Egestas vitae.</Link>
              </li>
              <li>
                <Link href="#">Viverra lorem ac.</Link>
              </li>
              <li>
                <Link href="#">Eget ac tellus.</Link>
              </li>
              <li>
                <Link href="#">Erat nulla.</Link>
              </li>
              <li>
                <Link href="#">Vulputate proin.</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={style.footerTitle}>Legal Links</h2>
            <ul className={style.footerList}>
              <li>
                <Link href="#">Egestas vitae.</Link>
              </li>
              <li>
                <Link href="#">Viverra lorem ac.</Link>
              </li>
              <li>
                <Link href="#">Eget ac tellus.</Link>
              </li>
              <li>
                <Link href="#">Erat nulla.</Link>
              </li>
              <li>
                <Link href="#">Vulputate proin.</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={style.footerTitle}>Get the app</h2>
            <div className={style.footerApp}>
              <Link href="#">
                <Image src={App} alt="app" />
              </Link>
            </div>
            <div className={style.footerApp}>
              <Link href="#">
                <Image src={Google} alt="Google" />
              </Link>
            </div>
          </div>
        </div>
        <p className={style.footerRight}>
          Copyright © 2020. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

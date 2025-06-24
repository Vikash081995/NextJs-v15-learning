import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
   <MainHeaderBackground/>
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={"/"} alt="a plate with food on it"/>Next level food   </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav>
      <div className="navbar flexBetween">
        <div className="flex-1 flexStart gap-10">
          <Link href={"/"}>
            <Image src={"/logo.svg"} width={115} height={43} alt="logo" />
          </Link>
          <ul className="xl:flex hidden text-small gap-7">
            {NavLinks.map((link) => (
              <i key={link.key}>
                <Link href={link.href}>{link.text}</Link>
              </i>
            ))}
          </ul>
        </div>
        {session ? (
          <>
            User Profile
            <Link href="">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

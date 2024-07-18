import { ColumnProps } from "@/types";
import Link from "next/link";
import React from "react";

const FooterColumn = ({ title, links }: ColumnProps) => {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <i key={link}>
            <Link href="/">{link}</Link>
          </i>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;

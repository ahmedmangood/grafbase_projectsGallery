import Image from "next/image";
import React from "react";
import FooterColumn from "./FooterColumn";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src={"/logo-purple.svg"}
            alt="footer logo"
            width={115}
            height={38}
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>© 2024 Projects Gallery. All Rights Reserved.</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10,214</span> projects
          submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;

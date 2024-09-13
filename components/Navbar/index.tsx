import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "../Icons";

export const Navbar = () => {
  return (
    <div className="bg-white sticky z-5- top-0 inset-x-0 h-16">
      <header className="relative bg-inherit">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex flex-center h-16">
              {/* todo movile part */}

              <div className="ml-4 flex lg:ml-0">
                <Link href={"/"}>
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

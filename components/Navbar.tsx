import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
const Navbar = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  return (
    <header className="w-full py-4">
      <nav className="flex items-center justify-between w-full container mx-auto ">
        <h1 className="font-semibold text-2xl">TFlow</h1>
        <div className="flex gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="size-10 relative  rounded-full overflow-hidden">
                <Image
                  src={user.picture || "default-profile-pic.png"}
                  fill
                  alt="profile-pic"
                />
              </div>
              <p className="text-accent-foreground">{user.given_name}</p>
            </div>
          ) : (
            <>
              <RegisterLink>
                <Button>Sign up</Button>
              </RegisterLink>
              <LoginLink>
                <Button variant="secondary">Log In</Button>
              </LoginLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

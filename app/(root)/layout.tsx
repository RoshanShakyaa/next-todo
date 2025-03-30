import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      <SidebarProvider user={user}>
        <AppSidebar />
        <main>
          <Header />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default layout;

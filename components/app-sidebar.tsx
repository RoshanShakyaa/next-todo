"use client";

import * as React from "react";
import {
  AlignJustify,
  AudioWaveform,
  BookOpen,
  Bot,
  Calendar,
  Check,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  Inbox,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  StarIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const data = {
  navMain: [
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Today",
      url: "#",
      icon: StarIcon,
    },
    {
      title: "Upcoming",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Completed",
      url: "#",
      icon: Check,
    },
  ],
  projects: [
    {
      name: "Shopping",
      url: "#",
      icon: AlignJustify,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: AlignJustify,
    },
    {
      name: "Travel",
      url: "#",
      icon: AlignJustify,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <span className="text-2xl ">TaskFlow</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

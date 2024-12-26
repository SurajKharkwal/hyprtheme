import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Appearence",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Themes",
          url: "/themes",
        },
        {
          title: "Fonts",
          url: "/",
        },
        {
          title: "Cursor",
          url: "#",
        },
      ],
    },
    {
      title: "Sound",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Input",
          url: "#",
        },
        {
          title: "Output",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Shoutcuts",
      url: "#",
      icon: Frame,
    },
    {
      name: "Wallpapper",
      url: "/wallpapers",
      icon: PieChart,
    },
    {
      name: "App",
      url: "#",
      icon: Map,
    },

    {
      name: "Mouse and Touchpad",
      url: "#",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-row gap-4 items-center ">
        <Command />
        <div>
          <h1 className="font-bold">Settings</h1>
          <h4 className="italic font-extralight">by Flying Hawk</h4>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

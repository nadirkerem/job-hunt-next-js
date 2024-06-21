import { Layers, CopyPlus, BarChart3, Settings, Mail } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: "/jobs",
    label: "All Jobs",
    icon: <Layers />,
  },
  {
    href: "/add-job",
    label: "Add Job",
    icon: <CopyPlus />,
  },
  {
    href: "/analytics",
    label: "Analytics",
    icon: <BarChart3 />,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: <Settings />,
  },
  {
    href: "/contact",
    label: "Contact Us",
    icon: <Mail />,
  },
];

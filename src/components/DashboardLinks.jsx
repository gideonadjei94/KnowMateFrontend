import clsx from "clsx";
import {
  Bell,
  BookMinus,
  FolderOpen,
  GalleryHorizontalEnd,
  GalleryVerticalEnd,
  Home,
} from "lucide-react";
import { href, Link, useLocation } from "react-router-dom";

const dasboardLinks = [
  {
    name: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Your library",
    href: "/library",
    icon: FolderOpen,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
];

const dasboardLinks2 = [
  {
    name: "Flashcards",
    href: "/flashcards",
    icon: GalleryVerticalEnd,
  },
  {
    name: "Expert Solutions",
    href: "/solutions",
    icon: BookMinus,
  },
];

const link2Colors = {
  0: "hover:text-cyan-600 hover:bg-cyan-50",
  1: "hover:text-green-600 hover:bg-green-50",
};

export function DashboardLinks() {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-y-3">
      <div className="border-b pb-4 border-gray-300">
        {dasboardLinks.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className={clsx(
              location.pathname === link.href
                ? "text-primary text-indigo-600 font-medium bg-indigo-50 "
                : "text-gray-400 hover:text-indigo-600 hover:bg-indigo-50",
              "flex items-center gap-3 rounded-lg p-3 transition-all cursor-pointer text-sm"
            )}
          >
            <link.icon className="size-5" />
            {link.name}
          </Link>
        ))}
      </div>

      <div>
        {dasboardLinks2.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className={clsx(
              "flex items-center gap-3 p-3 text-sm text-gray-400 rounded-lg",
              link2Colors[index]
            )}
          >
            <link.icon className="size-5" />
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

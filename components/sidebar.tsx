"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import links from "@/utils/links";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col bg-muted px-8 py-4">
      <div className="mt-20 flex flex-grow flex-col gap-y-6">
        {links.map((link) => (
          <Button
            asChild
            key={link.href}
            variant={pathname === link.href ? "default" : "link"}
          >
            <Link href={link.href} className="flex items-center gap-x-2">
              {link.icon} {link.label}
            </Link>
          </Button>
        ))}
      </div>
      <div className="mb-5 mt-auto self-center">{<UserButton />}</div>
    </aside>
  );
}

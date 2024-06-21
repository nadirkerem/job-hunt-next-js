"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import links from "@/utils/links";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full bg-muted px-8 py-4">
      <div className="mt-20 flex flex-col gap-y-6">
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
    </aside>
  );
}

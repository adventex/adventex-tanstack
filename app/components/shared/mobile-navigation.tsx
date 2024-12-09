import * as React from "react"
import { Link, useRouterState } from "@tanstack/react-router"

import { Menu } from "lucide-react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"

export function MobileNavigation() {
  const routerState = useRouterState()
  const pathname = routerState.location.pathname

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>เมนู</SheetTitle>
          <SheetDescription>เลือกหมวดหมู่ที่คุณสนใจ</SheetDescription>
        </SheetHeader>
        <nav>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <Link
                to="/"
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === "/" ? "text-primary" : "hover:text-primary"
                )}
              >
                หน้าแรก
              </Link>
            </li>
            <li>
              <Link
                to="/tours"
                search={{ type: "study" }}
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === "/tours" ? "text-primary" : "hover:text-primary"
                )}
              >
                แพ็คเกจ
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === "/blogs" ? "text-primary" : "hover:text-primary"
                )}
              >
                บทความ
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === "/about" ? "text-primary" : "hover:text-primary"
                )}
              >
                เกี่ยวกับเรา
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === "/contact"
                    ? "text-primary"
                    : "hover:text-primary"
                )}
              >
                ติดต่อเรา
              </Link>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

import * as React from "react"
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from "@tanstack/react-router"
import { Meta, Scripts } from "@tanstack/start"

import { SiteFooter } from "~/components/shared/site-footer"
import { SiteHeader } from "~/components/shared/site-header"
import appCss from "~/styles/globals.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "บริษัทแอดเวนเท็กซ์ : ทัวร์ต่างประเทศ แพ็คเกจทัวร์",
        description:
          "ทัวร์ต่างประเทศ ในประเทศ เราคัดสรรแพ็คเกจทัวร์ ที่น่าสนใจ ดีที่สุด หลากหลายเส้นทาง ✓ บริการด้วยความเต็มใจ จองทัวร์ จัดกรุ๊ปส่วนตัว ตั๋วเครื่องบิน บัตรเข้าชม โทร: 02-254-9338.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <div className="relative flex min-h-screen flex-col bg-background">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

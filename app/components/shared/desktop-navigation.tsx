import * as React from "react"
import { Link, useRouterState } from "@tanstack/react-router"

import { cn } from "~/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu"

interface TravelItem {
  id: string
  title: string
  to: string
  type: "travel" | "study"
  location: string
  description: string
}

const travelItems: TravelItem[] = [
  {
    id: "harbin",
    title: "เมืองฮาร์บิน",
    to: "/tours",
    type: "travel",
    location: "harbin",
    description:
      "สัมผัสเทศกาลน้ำแข็งที่ใหญ่ที่สุดในโลก ชมสถาปัตยกรรมรัสเซียโบราณ และลิ้มรสอาหารเหนือแท้ๆ ของจีน",
  },
  {
    id: "xian",
    title: "เมืองเซี่ยงไฮ้",
    to: "/tours",
    type: "travel",
    location: "xian",
    description:
      "เยือนมหานครทันสมัยริมแม่น้ำหวงผู่ ตื่นตากับตึกระฟ้า The Bund และสัมผัสวัฒนธรรมผสมผสานตะวันออก-ตะวันตก",
  },
  {
    id: "chengdu",
    title: "เมืองเฉิงตู",
    to: "/tours",
    type: "travel",
    location: "chengdu",
    description:
      "พบกับหมีแพนด้ายักษ์ในศูนย์อนุรักษ์ ลิ้มรสอาหารเสฉวนแท้ และสัมผัสวิถีชีวิตที่ผ่อนคลายของชาวเฉิงตู",
  },
  {
    id: "beijing",
    title: "เมืองปักกิ่ง",
    to: "/tours",
    type: "travel",
    location: "beijing",
    description:
      "สำรวจพระราชวังต้องห้าม เดินบนกำแพงเมืองจีน และสัมผัสประวัติศาสตร์อันยิ่งใหญ่ของจีนในเมืองหลวง",
  },
  {
    id: "guangzhou",
    title: "เมืองกว่างโจว",
    to: "/tours",
    type: "travel",
    location: "guangzhou",
    description:
      "เมืองท่าการค้าสำคัญพร้อมอาหารกวางตุ้งชื่อดัง ผสมผสานความทันสมัยกับวัฒนธรรมดั้งเดิมได้อย่างลงตัว",
  },
  {
    id: "chongqing",
    title: "เมืองฉงชิ่ง",
    to: "/tours",
    type: "travel",
    location: "chongqing",
    description:
      "สัมผัสมหานครบนภูเขาริมแม่น้ำแยงซี ลิ้มรสหม้อไฟฉงชิ่ง และชมวิวตึกระฟ้ายามค่ำคืนที่สวยงาม",
  },
]

export const DesktopNavigation = () => {
  const routerState = useRouterState()
  const { type } = routerState.location.search

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "bg-transparent text-base font-normal transition-colors hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary",
              type === "study" ? "text-primary" : "hover:text-primary"
            )}
          >
            <Link to="/tours" search={{ type: "study" }}>
              แพ็คเกจเรียนต่อ
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <Link
                  className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  to="/tours"
                  search={{ type: "study" }}
                >
                  <div className="mb-2 mt-4 text-lg font-medium">
                    แพ็คเกจทั้งหมด
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    ค้นพบประสบการณ์การเรียนรู้และการท่องเที่ยวในประเทศจีน
                    พร้อมแพ็คเกจที่ครอบคลุมทั้งที่พัก การเดินทาง และกิจกรรมต่างๆ
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  search={{ type: "study", duration: "short-term" }}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">
                    แพ็คเกจเรียนต่อระยะสั้น
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    เรียนรู้ภาษาและวัฒนธรรมจีนผ่านหลักสูตรระยะสั้น 1-6 เดือน
                    พร้อมที่พักและกิจกรรมครบครัน
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  search={{ type: "study", duration: "long-term" }}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">
                    แพ็คเกจท่องเที่ยวระยะยาว
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    หลักสูตรการศึกษาระยะยาว 1-4 ปี
                    พร้อมโอกาสฝึกงานและเรียนรู้วิถีชีวิตในประเทศจีน
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "bg-transparent text-base font-normal transition-colors hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary",
              type === "travel" ? "text-primary" : "hover:text-primary"
            )}
          >
            <Link to="/tours" search={{ type: "travel" }}>
              แพ็คเกจท่องเที่ยว
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {travelItems.map((item) => (
                <li key={item.title}>
                  <Link
                    to="/tours"
                    search={{ type: "travel", location: item.location }}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      {item.title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

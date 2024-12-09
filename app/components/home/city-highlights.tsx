import * as React from "react"
import { Link } from "@tanstack/react-router"

import { Card, CardContent } from "~/components/ui/card"
import { SparklesText } from "~/components/magicui/sparkles-text"

const cities = [
  {
    name: "HARBIN",
    image: "/images/city/harbin.jpg",
    href: "/destinations/harbin",
    description:
      "สัมผัสเทศกาลน้ำแข็งระดับโลกและดินแดนแห่งความหนาวเย็น พร้อมชมประติมากรรมน้ำแข็งที่สวยงามตระการตา",
  },
  {
    name: "SHANGHAI",
    image: "/images/city/shanghai.jpg",
    href: "/destinations/shanghai",
    description:
      "มหานครทันสมัยที่ผสมผสานวัฒนธรรมตะวันออกและตะวันตก เมืองแห่งตึกระฟ้าและย่านการค้าระดับโลก",
  },
  {
    name: "CHENGDU",
    image: "/images/city/chengdu.jpg",
    href: "/destinations/chengdu",
    description:
      "บ้านของหมีแพนด้ายักษ์และอาหารเสฉวนรสจัดจ้าน พร้อมวิถีชีวิตที่ผ่อนคลายและวัฒนธรรมชาที่เป็นเอกลักษณ์",
  },
  {
    name: "BEIJING",
    image: "/images/city/beijing.jpg",
    href: "/destinations/beijing",
    description:
      "เมืองหลวงเก่าแก่ที่เต็มไปด้วยมรดกทางวัฒนธรรม กำแพงเมืองจีน พระราชวังต้องห้าม และประวัติศาสตร์อันยาวนาน",
  },
  {
    name: "GUANGZHOU",
    image: "/images/city/guangzhou.jpg",
    href: "/destinations/guangzhou",
    description:
      "ประตูสู่จีนตอนใต้ที่มีอาหารกวางตุ้งรสเลิศ ศูนย์กลางการค้าที่คึกคัก และสถาปัตยกรรมผสมผสาน",
  },
  {
    name: "CHONGQING",
    image: "/images/city/chongqing.jpg",
    href: "/destinations/chongqing",
    description:
      "นครภูเขาที่มีชื่อเสียงด้านหม้อไฟและล่องเรือแม่น้ำแยงซี พร้อมวิวตึกระฟ้าที่ตั้งอยู่ท่ามกลางภูมิประเทศที่เป็นเอกลักษณ์",
  },
]

export const CityHighlights = () => {
  return (
    <section className="py-12">
      <div className="mb-8 grid gap-8 text-center">
        <SparklesText
          text="เมืองยอดนิยม"
          className="text-6xl font-medium leading-none"
        />
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
          สำหรับนักท่องเที่ยวที่ต้องการสัมผัสวัฒนธรรมและประสบการณ์ที่หลากหลาย
          จีนมีเมืองที่มีความหลากหลายทางวัฒนธรรมและสถาปัตยกรรม
          ที่จะทำให้คุณมีประสบการณ์ที่ยิ่งใหญ่และทรงพลัง
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-6">
        {/* Left side - 6 columns */}
        <div className="grid gap-4 md:col-span-6">
          {/* Top wide card */}
          <Link to={cities[0].href}>
            <Card className="group overflow-hidden">
              <CardContent className="relative aspect-[16/9] p-0 sm:aspect-[3/2]">
                <img
                  src={cities[0].image}
                  alt={cities[0].name}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="mb-1 font-semibold">{cities[0].name}</h3>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Bottom two cards */}
          <div className="grid grid-cols-2 gap-4">
            {cities.slice(1, 3).map((city) => (
              <Link key={city.name} href={city.href}>
                <Card className="group overflow-hidden">
                  <CardContent className="relative p-0">
                    <div className="relative aspect-square">
                      <img
                        src={city.image}
                        alt={city.name}
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <h3 className="mb-1 font-semibold">{city.name}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Right side - 6 columns */}
        <div className="grid h-full grid-cols-2 gap-4 md:col-span-6">
          {/* Left tall card */}
          <Link href={cities[3].href} className="h-full">
            <Card className="group h-full overflow-hidden">
              <CardContent className="relative h-full p-0">
                <div className="relative h-full">
                  <img
                    src={cities[3].image}
                    alt={cities[3].name}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="mb-1 font-semibold">{cities[3].name}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Right stacked cards */}
          <div className="grid h-full gap-4">
            {[cities[4], cities[5]].map((city) => (
              <Link key={city.name} href={city.href} className="h-full">
                <Card className="group h-full overflow-hidden">
                  <CardContent className="relative h-full p-0">
                    <div className="relative h-full">
                      <img
                        src={city.image}
                        alt={city.name}
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <h3 className="mb-1 font-semibold">{city.name}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

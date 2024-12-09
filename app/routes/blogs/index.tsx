import * as React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/start"

import { Search } from "lucide-react"

import { blogs } from "~/lib/blogs"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { BlogCard } from "~/components/blogs/blog-card"
import { BlogCategories } from "~/components/blogs/blog-categories"

async function readBlogs() {
  return blogs
}

const getBlogs = createServerFn({
  method: "GET",
}).handler(() => {
  return readBlogs()
})

export const Route = createFileRoute("/blogs/")({
  component: RouteComponent,
  loader: async () => await getBlogs(),
})

function RouteComponent() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("all")

  const blogs = Route.useLoaderData()

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" ||
      blog.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  return (
    <article className="min-h-screen bg-gray-50">
      {/* ส่วนหัว */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            เรื่องราวและข้อมูลเชิงลึกการท่องเที่ยว
          </h1>
          <p className="mx-auto mb-8 max-w-[53ch] text-lg text-muted-foreground">
            ค้นพบเคล็ดลับการท่องเที่ยว ข้อมูลเชิงลึกทางวัฒนธรรม
            และคู่มือแนะนำโดยละเอียด เพื่อช่วยคุณวางแผนการผจญภัยครั้งต่อไป
          </p>
          <div className="relative mx-auto max-w-lg">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="ค้นหาบทความ..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* แถบด้านข้าง */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <BlogCategories
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>
          </aside>

          {/* ตารางบทความ */}
          <div className="lg:col-span-3">
            <div className="grid gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                โหลดบทความเพิ่มเติม
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

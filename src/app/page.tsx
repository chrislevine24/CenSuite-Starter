import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-2">
          <Link
            href="https://nextjs.org/docs/14/getting-started"
            target="_blank"
            className={cn(buttonVariants({ size: "default" }))}
          >
            Next.js 14 Docs
          </Link>
          <Link
            href="https://nextjs.org/learn"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "secondary", size: "default" })
            )}
          >
            Learn Next.js
          </Link>
          <Link
            href="/new-page/"
            className={cn(
              buttonVariants({ variant: "destructive", size: "default" })
            )}
          >
            Checkout a new page
          </Link>
          <ModeToggle />
        </div>
      </div>
    </main>
  )
}

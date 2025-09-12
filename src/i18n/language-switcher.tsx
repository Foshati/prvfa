'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fa', name: 'فارسی' }
]

export function LanguageSwitcher() {
  const router = useRouter()
  const locale = useLocale()

  const handleLanguageChange = (langCode: string) => {
    document.cookie = `locale=${langCode}; path=/; max-age=31536000`
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" >
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={locale === language.code ? "bg-accent" : ""}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
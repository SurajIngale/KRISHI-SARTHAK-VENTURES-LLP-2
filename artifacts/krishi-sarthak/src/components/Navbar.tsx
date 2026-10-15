"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Compass,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ship,
  Sparkles,
  Sprout,
  Truck,
  Wheat,
  X,
} from "lucide-react"

// Product categories with rich descriptions and icons
const productCategories = [
  {
    title: "Fresh Fruits & Vegetables",
    href: "/products/fresh-fruits-vegetables/",
    description: "Export-grade apples, bananas, exotic dragon fruit, and premium Indian onions.",
    tag: "01",
    badge: "Core Export",
  },
  {
    title: "Frozen Vegetables",
    href: "/products/frozen-vegetables/",
    description: "Export-grade IQF green peas, French beans, baby corn, broccoli & mushrooms.",
    tag: "02",
    badge: "IQF Frozen",
  },
  {
    title: "Dehydrated Powders",
    href: "/products/dehydrated-powders/",
    description: "Export-grade Moringa, Onion, Garlic, Tomato, Banana & Beetroot powders.",
    tag: "03",
    badge: "Export Grade",
  },
  {
    title: "Spices & Herbs",
    href: "/products/spices-herbs/",
    description: "Export-grade Black Pepper, Cardamom, Turmeric, Cumin, Red Chilli, Ashwagandha & Shatavari.",
    tag: "04",
    badge: "Export Grade",
  },
  {
    title: "Pulses & Grains",
    href: "/products/pulses-grains/",
    description: "Export-quality Basmati and Non-Basmati rice, pulses, and staple grains.",
    tag: "05",
    badge: "Export Grade",
  },
  {
    title: "Dry Fruits & Nuts",
    href: "/products/dry-fruits-nuts/",
    description: "Carefully selected dry fruits, dates, and nuts for international buyers.",
    tag: "06",
    badge: "Export Grade",
  },
  {
    title: "Construction & Road Materials",
    href: "/products/construction-materials/",
    description: "High-purity gypsum, industrial bitumen, and fly ash for infrastructure.",
    tag: "07",
    badge: "Export Grade",
  },
]

// Services offered
const tradeServices = [
  {
    title: "Shipment Services",
    href: "/services/shipments",
    description: "Shipment coordination for group and individual consignments, documentation, and freight booking.",
    icon: Ship,
    badge: "Consignments",
  },
  {
    title: "Global Trade Consultancy",
    href: "/services/global-trade-consultancy",
    description: "Trade advisory, market intelligence, product and market evaluation, and trade planning.",
    icon: Compass,
    badge: "Advisory",
  },
  {
    title: "Freight Forwarding & Logistics",
    href: "/services/freight-forwarding-logistics",
    description: "Sea freight, air freight, customs coordination, inland transportation, and international shipping.",
    icon: Truck,
    badge: "Logistics",
  },
  {
    title: "Documentation Services",
    href: "/services/documentation-services",
    description: "Guidance and coordination concerning IEC, DGFT, RCMC, AD Code, ICEGATE, and compliance.",
    icon: ClipboardList,
    badge: "Compliance",
  },
]



export function Navbar() {
  const router = useRouter()
  const currentPath = router?.pathname || ""
  const isHomePage = currentPath === "/" || currentPath === ""
  const isAboutPage = currentPath === "/about" || currentPath.startsWith("/about/")
  const isFreshFruitsPage = currentPath.includes("fresh-fruits-vegetables")
  const isFrozenVegetablesPage = currentPath.includes("frozen-vegetables")
  const isDehydratedPowdersPage = currentPath.includes("dehydrated-powders")
  const isSpicesHerbsPage = currentPath.includes("spices-herbs")
  const isPulsesGrainsPage = currentPath.includes("pulses-grains")
  const isDryFruitsNutsPage = currentPath.includes("dry-fruits-nuts")
  const isConstructionMaterialsPage = currentPath.includes("construction-materials")
  const isServicesPage = currentPath.startsWith("/services")

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = React.useState<string | null>(null)
  const [headerBottom, setHeaderBottom] = React.useState(76)
  const headerRef = React.useRef<HTMLElement>(null)

  const updateHeaderBottom = React.useCallback(() => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect()
      setHeaderBottom(Math.round(rect.bottom))
    }
  }, [])

  const toggleSubmenu = (key: string) => {
    setMobileActiveSubmenu((prev) => (prev === key ? null : key))
  }

  const closeMobileMenu = React.useCallback(() => {
    setMobileMenuOpen(false)
    setMobileActiveSubmenu(null)
  }, [])

  const toggleMobileMenu = () => {
    if (!mobileMenuOpen) {
      updateHeaderBottom()
      setMobileMenuOpen(true)
    } else {
      closeMobileMenu()
    }
  }

  // Handle in-page smooth navigation and reliable menu closing on touch/click
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    closeMobileMenu()

    if (!href.startsWith("#") && !href.startsWith("/#")) {
      return
    }

    const hash = href.startsWith("/#") ? href.slice(1) : href
    const targetId = hash.slice(1)

    if (isHomePage) {
      e.preventDefault()
      const element = document.getElementById(targetId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
          window.history.pushState(null, "", hash)
        }, 60)
      }
    } else {
      e.preventDefault()
      router.push(`/${hash}`)
    }
  }

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (!mobileMenuOpen) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [mobileMenuOpen])

  // Update header bottom measurement on mount, resize, and scroll while menu is open
  React.useEffect(() => {
    updateHeaderBottom()
    if (!mobileMenuOpen) return
    window.addEventListener("resize", updateHeaderBottom)
    window.addEventListener("scroll", updateHeaderBottom)
    return () => {
      window.removeEventListener("resize", updateHeaderBottom)
      window.removeEventListener("scroll", updateHeaderBottom)
    }
  }, [mobileMenuOpen, updateHeaderBottom])

  // Close mobile menu on desktop resize or on Escape key
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMobileMenu()
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        closeMobileMenu()
      }
    }
    window.addEventListener("resize", handleResize)
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [mobileMenuOpen, closeMobileMenu])

  return (
    <>
      {/* Top Announcements & Quick Info Bar */}
      <div className="hidden border-b border-white/10 bg-[#214c39] text-[#e9e5d8] md:block">
        <div className="wrap flex h-9 items-center justify-between text-[11px] font-medium tracking-wide">
          <div className="flex items-center gap-6 text-[#d8d3c5]">
            <a
              href="tel:[Add Company Phone Number]"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3 text-[#D9A441]" />
              <span>[Add Company Phone Number]</span>
            </a>
            <span className="h-3 w-px bg-white/20" />
            <a
              href="mailto:[Add Company Email]"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3 w-3 text-[#D9A441]" />
              <span>[Add Company Email]</span>
            </a>
            <span className="h-3 w-px bg-white/20" />
            <span className="inline-flex items-center gap-1.5 text-white/70">
              <MapPin className="h-3 w-3 text-[#D9A441]" />
              <span>Office: [Add Registered Office Address]</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-wider text-[#D9A441]">Connect:</span>
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                aria-label="LinkedIn profile"
                className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D9A441] hover:text-[#0a1826]"
              >
                <Linkedin size={12} />
              </a>
              <a
                href="#contact"
                aria-label="Facebook page"
                className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D9A441] hover:text-[#0a1826]"
              >
                <Facebook size={12} />
              </a>
              <a
                href="#contact"
                aria-label="Instagram profile"
                className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D9A441] hover:text-[#0a1826]"
              >
                <Instagram size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b border-[#ddd8ca] bg-[#f7f4eb]/95 shadow-xs backdrop-blur-md"
      >
        <div className="wrap flex h-[70px] sm:h-[76px] items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (isHomePage) {
                handleNavClick(e, "#home")
              } else {
                closeMobileMenu()
              }
            }}
            className="group flex items-center gap-2.5 sm:gap-3 outline-none"
            aria-label="Krishi Sarthak Ventures Home"
          >
            <span className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-[#D9A441]/70 bg-[#214c39] text-[#D9A441] shadow-xs transition-transform duration-300 group-hover:scale-105">
              <Sprout size={20} className="sm:h-[21px] sm:w-[21px]" />
            </span>
            <span className="block leading-tight">
              <span className="block text-[11px] sm:text-[12px] font-extrabold tracking-[.1em] text-[#1d392d]">
                KRISHI SARTHAK
              </span>
              <span className="mt-0.5 block text-[8px] sm:text-[8.5px] font-semibold tracking-[.2em] text-[#788476]">
                VENTURES LLP
              </span>
            </span>
          </Link>

          {/* Desktop NavigationMenu */}
          <div className="hidden lg:flex lg:items-center">
            <NavigationMenu className="relative">
              <NavigationMenuList className="gap-1">
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      href="#home"
                      className="text-xs font-semibold tracking-wide text-[#2e473a] hover:bg-[#ede7d8] hover:text-[#8a682f]"
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About Us – direct link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      href="/about/"
                      className={cn(
                        "text-xs font-semibold tracking-wide text-[#2e473a] hover:bg-[#ede7d8] hover:text-[#8a682f]",
                        isAboutPage && "bg-[#ede7d8] text-[#8a682f] font-bold"
                      )}
                    >
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Our Products Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "text-xs font-semibold tracking-wide text-[#2e473a] hover:bg-[#ede7d8] hover:text-[#8a682f] data-[state=open]:bg-[#ede7d8] data-[state=open]:text-[#8a682f]",
                    (isFreshFruitsPage || isFrozenVegetablesPage || isDehydratedPowdersPage || isSpicesHerbsPage || isPulsesGrainsPage || isDryFruitsNutsPage || isConstructionMaterialsPage) && "bg-[#ede7d8] text-[#8a682f] font-bold"
                  )}>
                    Our Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[680px] p-4 bg-[#fbf9f2]">
                      <div className="mb-3 flex items-center justify-between border-b border-[#ddd8ca] pb-2.5">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#8b682d]">
                            Agricultural Portfolio
                          </p>
                          <h4 className="font-display text-lg font-medium text-[#1d392d]">
                            Export-Grade Sourcing Categories
                          </h4>
                        </div>
                        <Link
                          href="/#products"
                          onClick={(e) => handleNavClick(e, "#products")}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#214c39] hover:text-[#8a682f]"
                        >
                          View all products <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>

                      <ul className="grid grid-cols-2 gap-1.5">
                        {productCategories.map((cat) => {
                          const isActive =
                            (cat.title === "Fresh Fruits & Vegetables" && isFreshFruitsPage) ||
                            (cat.title === "Frozen Vegetables" && isFrozenVegetablesPage) ||
                            (cat.title === "Dehydrated Powders" && isDehydratedPowdersPage) ||
                            (cat.title === "Spices & Herbs" && isSpicesHerbsPage) ||
                            (cat.title === "Pulses & Grains" && isPulsesGrainsPage) ||
                            (cat.title === "Dry Fruits & Nuts" && isDryFruitsNutsPage) ||
                            (cat.title === "Construction & Road Materials" && isConstructionMaterialsPage);
                          return (
                            <ListItem
                              key={cat.title}
                              title={cat.title}
                              href={cat.href}
                              badge={isActive ? "Active Page" : cat.badge}
                              active={isActive}
                              onClick={() => {
                                if (cat.href.startsWith("#") || cat.href.startsWith("/#")) {
                                  // hash navigation
                                }
                              }}
                            >
                              {cat.description}
                            </ListItem>
                          );
                        })}
                      </ul>

                      <div className="mt-3 flex items-center justify-between rounded-lg bg-[#efe9dc] px-4 py-2.5 text-xs text-[#526457]">
                        <span>Looking for customized specifications or grading requirements?</span>
                        <Link
                          href="#contact"
                          className="inline-flex items-center gap-1 font-bold text-[#8a682f] hover:underline"
                        >
                          Enquire now <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Our Services Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-xs font-semibold tracking-wide text-[#2e473a] hover:bg-[#ede7d8] hover:text-[#8a682f] data-[state=open]:bg-[#ede7d8] data-[state=open]:text-[#8a682f]",
                      isServicesPage && "bg-[#ede7d8] text-[#8a682f] font-bold"
                    )}
                  >
                    Our Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4 bg-[#fbf9f2]">
                      <div className="mb-3 border-b border-[#ddd8ca] pb-2.5">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#8b682d]">
                          Comprehensive Trade Support
                        </p>
                        <h4 className="font-display text-lg font-medium text-[#1d392d]">
                          End-to-End Import & Export Execution
                        </h4>
                      </div>

                      <ul className="grid grid-cols-2 gap-2">
                        {tradeServices.map((service) => (
                          <ListItem
                            key={service.title}
                            title={service.title}
                            href={service.href}
                            icon={service.icon}
                            badge={service.badge}
                            active={currentPath === service.href || currentPath === service.href + "/"}
                          >
                            {service.description}
                          </ListItem>
                        ))}
                      </ul>

                      <div className="mt-3 border-t border-[#ddd8ca] pt-3 text-center">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#214c39] hover:text-[#8a682f]"
                        >
                          Book a Trade Consultation Call <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* News & Blogs */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      href="#news"
                      className="text-xs font-semibold tracking-wide text-[#2e473a] hover:bg-[#ede7d8] hover:text-[#8a682f]"
                    >
                      News & Blogs
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Careers */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      href="#careers"
                      className="text-xs font-semibold tracking-wide text-[#2e473a] hover:bg-[#ede7d8] hover:text-[#8a682f]"
                    >
                      Careers
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Contact Us */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      href="#contact"
                      className="text-xs font-semibold tracking-wide text-[#2e473a] hover:bg-[#ede7d8] hover:text-[#8a682f]"
                    >
                      Contact Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Right CTA Action */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-none bg-[#214c39] px-5 py-3 text-xs font-bold text-[#fff9ed] shadow-xs transition-all hover:bg-[#183c2c] hover:shadow-md hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowUpRight size={14} className="text-[#D9A441]" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-lg border border-[#ddd8ca] bg-[#fbf9f2] text-[#214c39] transition-colors hover:bg-[#ede7d8] active:bg-[#e4ded0] lg:hidden touch-manipulation focus:outline-none focus:ring-2 focus:ring-[#214c39]/30"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X size={22} className="transition-transform duration-200" />
            ) : (
              <Menu size={22} className="transition-transform duration-200" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer & Backdrop (Rendered outside header to decouple from backdrop-filter containing block) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          style={{
            top: `${headerBottom}px`,
            height: `calc(100dvh - ${headerBottom}px)`,
          }}
          className="fixed inset-x-0 bottom-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-[#f7f4eb] border-t border-[#ddd8ca] shadow-2xl lg:hidden touch-pan-y animate-in fade-in slide-in-from-top-1 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <nav className="flex flex-1 flex-col p-4 sm:p-6 pb-12" aria-label="Mobile Navigation">
            <div className="space-y-1.5">
              {/* Home */}
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "#home")}
                className="flex min-h-[48px] items-center justify-between rounded-lg border border-[#e4dfd3] bg-[#fbf9f2] px-4 py-3 text-sm font-semibold text-[#1d392d] transition-colors hover:bg-[#eee8dc] active:bg-[#e6dfcf] touch-manipulation"
              >
                <span className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 place-items-center rounded-md border border-[#d8cfb9] bg-[#f7f3e8] text-[#8b682d]">
                    <Sprout className="h-4 w-4" />
                  </span>
                  <span>Home</span>
                </span>
                <ChevronRight size={16} className="text-[#998b76]" />
              </a>

              {/* About Us – direct link */}
              <Link
                href="/about/"
                onClick={closeMobileMenu}
                className={cn(
                  "flex min-h-[48px] items-center justify-between rounded-lg border border-[#e4dfd3] bg-[#fbf9f2] px-4 py-3 text-sm font-semibold text-[#1d392d] transition-colors hover:bg-[#eee8dc] active:bg-[#e6dfcf] touch-manipulation",
                  isAboutPage && "border-[#D9A441] bg-[#ede7d8] text-[#8a682f]"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 place-items-center rounded-md border border-[#d8cfb9] bg-[#f7f3e8] text-[#8b682d]">
                    <Sprout className="h-4 w-4" />
                  </span>
                  <span>About Us</span>
                </span>
                <ChevronRight size={16} className="text-[#998b76]" />
              </Link>

              {/* Our Products Accordion */}
              <div className="rounded-lg border border-[#e4dfd3] bg-[#fbf9f2] overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleSubmenu("products")}
                  className="flex min-h-[48px] w-full items-center justify-between px-4 py-3 text-sm font-semibold text-[#1d392d] transition-colors hover:bg-[#eee8dc] active:bg-[#e6dfcf] touch-manipulation"
                  aria-expanded={mobileActiveSubmenu === "products"}
                  aria-controls="mobile-submenu-products"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="grid h-7 w-7 place-items-center rounded-md border border-[#d8cfb9] bg-[#f7f3e8] text-[#8b682d]">
                      <Boxes className="h-4 w-4" />
                    </span>
                    <span>Our Products</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "text-[#776c59] transition-transform duration-200",
                      mobileActiveSubmenu === "products" && "rotate-180 text-[#214c39]"
                    )}
                  />
                </button>

                {mobileActiveSubmenu === "products" && (
                  <div id="mobile-submenu-products" className="border-t border-[#e4dfd3] bg-[#f3efe4] px-3 py-2.5 space-y-1.5">
                    <a
                      href="#products"
                      onClick={(e) => handleNavClick(e, "#products")}
                      className="block min-h-[44px] rounded-md bg-[#fbf9f2] border border-[#e2dccf] px-3.5 py-2.5 text-xs font-bold text-[#214c39] transition-colors hover:bg-[#ede7d8] active:bg-[#e4ded0] touch-manipulation"
                    >
                      Browse Full Product Catalog
                    </a>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.title}
                          href={cat.href}
                          onClick={(e) => {
                            if (cat.href.startsWith("#") || cat.href.startsWith("/#")) {
                              handleNavClick(e, cat.href)
                            } else {
                              closeMobileMenu()
                            }
                          }}
                          className={cn(
                            "flex min-h-[44px] items-center justify-between rounded-md bg-[#fbf9f2]/80 border border-[#e2dccf]/70 px-3 py-2.5 text-xs text-[#526457] transition-colors hover:bg-[#ede7d8] active:bg-[#e4ded0] touch-manipulation",
                            ((cat.title === "Fresh Fruits & Vegetables" && isFreshFruitsPage) ||
                              (cat.title === "Frozen Vegetables" && isFrozenVegetablesPage) ||
                              (cat.title === "Dehydrated Powders" && isDehydratedPowdersPage) ||
                              (cat.title === "Spices & Herbs" && isSpicesHerbsPage) ||
                              (cat.title === "Pulses & Grains" && isPulsesGrainsPage) ||
                              (cat.title === "Dry Fruits & Nuts" && isDryFruitsNutsPage) ||
                              (cat.title === "Construction & Road Materials" && isConstructionMaterialsPage)) &&
                              "bg-[#ede7d8] border-[#D9A441] text-[#183c2c] font-bold"
                          )}
                        >
                          <div className="flex items-center gap-2 pr-2">
                            <span className="font-semibold text-[#1d392d]">{cat.title}</span>
                            {cat.badge && (
                              <span className="rounded bg-[#e8e1cf] px-1.5 py-0.5 text-[8.5px] font-semibold uppercase tracking-wider text-[#685b41]">
                                {(cat.title === "Fresh Fruits & Vegetables" && isFreshFruitsPage) ||
                                (cat.title === "Frozen Vegetables" && isFrozenVegetablesPage) ||
                                (cat.title === "Dehydrated Powders" && isDehydratedPowdersPage) ||
                                (cat.title === "Spices & Herbs" && isSpicesHerbsPage) ||
                                (cat.title === "Pulses & Grains" && isPulsesGrainsPage) ||
                                (cat.title === "Dry Fruits & Nuts" && isDryFruitsNutsPage) ||
                                (cat.title === "Construction & Road Materials" && isConstructionMaterialsPage)
                                  ? "Active"
                                  : cat.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-bold text-[#9a865b] shrink-0">{cat.tag}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Our Services Accordion */}
              <div className="rounded-lg border border-[#e4dfd3] bg-[#fbf9f2] overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleSubmenu("services")}
                  className="flex min-h-[48px] w-full items-center justify-between px-4 py-3 text-sm font-semibold text-[#1d392d] transition-colors hover:bg-[#eee8dc] active:bg-[#e6dfcf] touch-manipulation"
                  aria-expanded={mobileActiveSubmenu === "services"}
                  aria-controls="mobile-submenu-services"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="grid h-7 w-7 place-items-center rounded-md border border-[#d8cfb9] bg-[#f7f3e8] text-[#8b682d]">
                      <Ship className="h-4 w-4" />
                    </span>
                    <span>Our Services</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "text-[#776c59] transition-transform duration-200",
                      mobileActiveSubmenu === "services" && "rotate-180 text-[#214c39]"
                    )}
                  />
                </button>

                {mobileActiveSubmenu === "services" && (
                  <div id="mobile-submenu-services" className="border-t border-[#e4dfd3] bg-[#f3efe4] px-3 py-2.5 space-y-1.5">
                    <Link
                      href="/services"
                      onClick={closeMobileMenu}
                      className="block min-h-[44px] rounded-md bg-[#fbf9f2] border border-[#e2dccf] px-3.5 py-2.5 text-xs font-bold text-[#214c39] transition-colors hover:bg-[#ede7d8] active:bg-[#e4ded0] touch-manipulation"
                    >
                      All Trade Services Overview
                    </Link>
                    {tradeServices.map((service) => {
                      const IconComponent = service.icon
                      const isActive = currentPath === service.href || currentPath === service.href + "/"
                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={closeMobileMenu}
                          className={cn(
                            "flex min-h-[44px] items-start gap-2.5 rounded-md px-3.5 py-2.5 text-xs text-[#526457] transition-colors hover:bg-[#ede7d8] active:bg-[#e4ded0] touch-manipulation",
                            isActive && "bg-[#ede7d8] font-bold text-[#214c39]"
                          )}
                        >
                          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded border border-[#d8cfb9] bg-[#fbf9f2] text-[#8b682d]">
                            <IconComponent className="h-3.5 w-3.5" />
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-[#1d392d]">{service.title}</span>
                              {service.badge && (
                                <span className="rounded bg-[#e8e1cf] px-1.5 py-0.5 text-[8.5px] font-semibold uppercase tracking-wider text-[#685b41]">
                                  {service.badge}
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] leading-relaxed text-[#718074]">{service.description}</div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* News & Blogs */}
              <a
                href="#news"
                onClick={(e) => handleNavClick(e, "#news")}
                className="flex min-h-[48px] items-center justify-between rounded-lg border border-[#e4dfd3] bg-[#fbf9f2] px-4 py-3 text-sm font-semibold text-[#1d392d] transition-colors hover:bg-[#eee8dc] active:bg-[#e6dfcf] touch-manipulation"
              >
                <span>News & Blogs</span>
                <ChevronRight size={16} className="text-[#998b76]" />
              </a>

              {/* Careers */}
              <a
                href="#careers"
                onClick={(e) => handleNavClick(e, "#careers")}
                className="flex min-h-[48px] items-center justify-between rounded-lg border border-[#e4dfd3] bg-[#fbf9f2] px-4 py-3 text-sm font-semibold text-[#1d392d] transition-colors hover:bg-[#eee8dc] active:bg-[#e6dfcf] touch-manipulation"
              >
                <span>Careers</span>
                <ChevronRight size={16} className="text-[#998b76]" />
              </a>

              {/* Contact Us */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex min-h-[48px] items-center justify-between rounded-lg border border-[#e4dfd3] bg-[#fbf9f2] px-4 py-3 text-sm font-semibold text-[#1d392d] transition-colors hover:bg-[#eee8dc] active:bg-[#e6dfcf] touch-manipulation"
              >
                <span>Contact Us</span>
                <ChevronRight size={16} className="text-[#998b76]" />
              </a>
            </div>

            {/* Mobile CTA */}
            <div className="mt-5 pt-4 border-t border-[#ddd8ca]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#214c39] px-5 py-3.5 text-sm font-bold text-[#fff9ed] shadow-md transition-all hover:bg-[#183c2c] active:bg-[#122e22] active:scale-[0.99] touch-manipulation"
              >
                <span>Start a conversation</span>
                <ArrowUpRight size={16} className="text-[#D9A441]" />
              </a>
            </div>

            {/* Mobile Quick Info footer */}
            <div className="mt-5 rounded-lg border border-[#e2dccf] bg-[#efe9dc] p-4 text-xs text-[#526457] space-y-2.5">
              <p className="font-bold text-[#1d392d] text-sm">Direct Inquiries</p>
              <div className="space-y-1.5 text-xs">
                <p className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#8a682f] shrink-0" />
                  <a
                    href="tel:[Add Company Phone Number]"
                    className="font-medium text-[#214c39] underline decoration-[#214c39]/40 hover:text-[#8a682f] touch-manipulation"
                    onClick={closeMobileMenu}
                  >
                    [Add Company Phone Number]
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#8a682f] shrink-0" />
                  <a
                    href="mailto:[Add Company Email]"
                    className="font-medium text-[#214c39] underline decoration-[#214c39]/40 hover:text-[#8a682f] touch-manipulation"
                    onClick={closeMobileMenu}
                  >
                    [Add Company Email]
                  </a>
                </p>
                <p className="flex items-start gap-2 text-[#637066]">
                  <MapPin className="h-3.5 w-3.5 text-[#8a682f] shrink-0 mt-0.5" />
                  <span>[Add Registered Office Address]</span>
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-[#dfd7c5] text-[#214c39]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a682f]">Follow Us:</span>
                <a
                  href="#contact"
                  aria-label="LinkedIn"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/70 text-[#214c39] transition-colors hover:bg-[#D9A441] hover:text-[#0a1826] active:bg-[#D9A441] touch-manipulation"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="#contact"
                  aria-label="Facebook"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/70 text-[#214c39] transition-colors hover:bg-[#D9A441] hover:text-[#0a1826] active:bg-[#D9A441] touch-manipulation"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href="#contact"
                  aria-label="Instagram"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/70 text-[#214c39] transition-colors hover:bg-[#D9A441] hover:text-[#0a1826] active:bg-[#D9A441] touch-manipulation"
                >
                  <Instagram size={15} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

function ListItem({
  title,
  children,
  href,
  icon: Icon,
  badge,
  className,
  onClick,
  active,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  title: string
  icon?: React.ComponentType<{ className?: string }>
  badge?: string
  onClick?: () => void
  active?: boolean
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          onClick={onClick}
          className={cn(
            "group block select-none rounded-lg p-2.5 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#efe8da] hover:text-[#1d392d] focus:bg-[#efe8da]",
            active && "bg-[#efe8da] border-l-2 border-[#D9A441] shadow-2xs",
            className
          )}
        >
          <div className="flex items-start gap-2.5">
            {Icon && (
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md border border-[#d8cfb9] bg-[#f7f3e8] text-[#8b682d] transition-colors group-hover:border-[#D9A441] group-hover:bg-[#214c39] group-hover:text-[#D9A441]">
                <Icon className="h-3.5 w-3.5" />
              </span>
            )}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1d392d] group-hover:text-[#8a682f]">
                <span>{title}</span>
                {badge && (
                  <span className="rounded bg-[#e8e1cf] px-1.5 py-0.2 text-[8.5px] font-semibold uppercase tracking-wider text-[#685b41]">
                    {badge}
                  </span>
                )}
              </div>
              {children && (
                <p className="line-clamp-2 text-[11px] leading-relaxed text-[#66756a]">
                  {children}
                </p>
              )}
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}


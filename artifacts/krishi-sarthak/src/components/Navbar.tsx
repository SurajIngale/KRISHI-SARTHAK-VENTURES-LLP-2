"use client"

import * as React from "react"
import Link from "next/link"
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
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
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
    href: "#categories",
    description: "Export-grade apples, bananas, exotic dragon fruit, and premium Indian onions.",
    tag: "01",
    badge: "Core Export",
  },
  {
    title: "Frozen Vegetables",
    href: "#categories",
    description: "Quality-preserved IQF vegetables with strict temperature-controlled logistics.",
    tag: "02",
  },
  {
    title: "Dehydrated Powders",
    href: "#categories",
    description: "Nutritious fruit and vegetable powders for global food processing industries.",
    tag: "03",
  },
  {
    title: "Spices & Herbs",
    href: "#categories",
    description: "Rich Indian spices and culinary herbs sourced directly for reliable quality.",
    tag: "04",
    badge: "High Demand",
  },
  {
    title: "Pulses & Grains",
    href: "#categories",
    description: "Export-quality Basmati and Non-Basmati rice, pulses, and staple grains.",
    tag: "05",
  },
  {
    title: "Dry Fruits & Nuts",
    href: "#categories",
    description: "Carefully selected dry fruits, dates, and nuts for international buyers.",
    tag: "06",
  },
  {
    title: "Construction Materials",
    href: "#categories",
    description: "High-purity gypsum and industrial minerals for commercial infrastructure.",
    tag: "07",
  },
]

// Services offered
const tradeServices = [
  {
    title: "Shipment Services",
    href: "#services",
    description: "Container booking, freight guidance, port clearance, and end-to-end cargo logistics.",
    icon: Ship,
    badge: "Turnkey",
  },
  {
    title: "Global Trade Consultancy",
    href: "#services",
    description: "Advisory on international regulations, tariff optimizations, and market entry.",
    icon: Compass,
  },
  {
    title: "Freight Forwarding & Logistics",
    href: "#services",
    description: "Multi-modal sea, land, and air transportation coordination with cold-chain support.",
    icon: Truck,
  },
  {
    title: "Documentation & Licensing",
    href: "#services",
    description: "Regulatory compliance support for IEC, APEDA, FSSAI, RCMC, and DGFT filing.",
    icon: ClipboardList,
  },
]

// About section subsections
const aboutLinks = [
  {
    title: "Our Approach",
    href: "#approach",
    description: "A disciplined 4-stage process from market intelligence to final shipment delivery.",
    icon: Compass,
  },
  {
    title: "Certifications & Compliance",
    href: "#compliance",
    description: "Trade readiness across IEC, APEDA, FSSAI, GSTIN, and international phytosanitary standards.",
    icon: ShieldCheck,
  },
  {
    title: "Global Presence",
    href: "#presence",
    description: "Serving strategic trade routes across the UAE, Saudi Arabia, Gulf, Europe & Southeast Asia.",
    icon: Globe2,
  },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = React.useState<string | null>(null)

  const toggleSubmenu = (key: string) => {
    setMobileActiveSubmenu((prev) => (prev === key ? null : key))
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileActiveSubmenu(null)
  }

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

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
              <Phone className="h-3 w-3 text-[#d5a34c]" />
              <span>[Add Company Phone Number]</span>
            </a>
            <span className="h-3 w-px bg-white/20" />
            <a
              href="mailto:[Add Company Email]"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3 w-3 text-[#d5a34c]" />
              <span>[Add Company Email]</span>
            </a>
            <span className="h-3 w-px bg-white/20" />
            <span className="inline-flex items-center gap-1.5 text-white/70">
              <MapPin className="h-3 w-3 text-[#d5a34c]" />
              <span>Office: [Add Registered Office Address]</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-wider text-[#d5a34c]">Connect:</span>
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                aria-label="LinkedIn profile"
                className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#d5a34c] hover:text-[#1d392d]"
              >
                <Linkedin size={12} />
              </a>
              <a
                href="#contact"
                aria-label="Facebook page"
                className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#d5a34c] hover:text-[#1d392d]"
              >
                <Facebook size={12} />
              </a>
              <a
                href="#contact"
                aria-label="Instagram profile"
                className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#d5a34c] hover:text-[#1d392d]"
              >
                <Instagram size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[#ddd8ca] bg-[#f7f4eb]/95 shadow-xs backdrop-blur-md">
        <div className="wrap flex h-[76px] items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-3 outline-none"
            aria-label="Krishi Sarthak Ventures Home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#d5a34c]/60 bg-[#214c39] text-[#e9c26f] shadow-xs transition-transform duration-300 group-hover:scale-105">
              <Sprout size={21} />
            </span>
            <span className="block leading-tight">
              <span className="block text-[12px] font-extrabold tracking-[.1em] text-[#1d392d]">
                KRISHI SARTHAK
              </span>
              <span className="mt-0.5 block text-[8.5px] font-semibold tracking-[.2em] text-[#788476]">
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

                {/* About Us Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs font-semibold tracking-wide text-[#2e473a] hover:bg-[#ede7d8] hover:text-[#8a682f] data-[state=open]:bg-[#ede7d8] data-[state=open]:text-[#8a682f]">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[620px] grid-cols-[.85fr_1.15fr] gap-3 p-4 bg-[#fbf9f2]">
                      {/* Left Highlight Card */}
                      <div className="flex h-full flex-col justify-between rounded-lg bg-gradient-to-br from-[#214c39] to-[#153426] p-5 text-white shadow-sm">
                        <div>
                          <div className="mb-3 inline-grid h-9 w-9 place-items-center rounded-full border border-[#d5a34c]/60 bg-white/10 text-[#e9c26f]">
                            <Sprout className="h-5 w-5" />
                          </div>
                          <span className="block text-[10px] font-bold uppercase tracking-[.18em] text-[#e5c47c]">
                            About Us
                          </span>
                          <h4 className="font-display mt-2 text-xl font-normal leading-snug text-[#f7f4eb]">
                            Rooted in trust, expanding globally.
                          </h4>
                          <p className="mt-2 text-xs leading-relaxed text-white/75">
                            Bridging domestic producers with verified international buyers through rigorous quality standards.
                          </p>
                        </div>
                        <div className="mt-4 border-t border-white/15 pt-3">
                          <Link
                            href="#about"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f0d18f] hover:underline"
                          >
                            Explore our story <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>

                      {/* Right Sub-links */}
                      <ul className="flex flex-col gap-1.5">
                        {aboutLinks.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Our Products Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs font-semibold tracking-wide text-[#2e473a] hover:bg-[#ede7d8] hover:text-[#8a682f] data-[state=open]:bg-[#ede7d8] data-[state=open]:text-[#8a682f]">
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
                          href="#products"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#214c39] hover:text-[#8a682f]"
                        >
                          View all products <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>

                      <ul className="grid grid-cols-2 gap-1.5">
                        {productCategories.map((cat) => (
                          <ListItem
                            key={cat.title}
                            title={cat.title}
                            href={cat.href}
                            badge={cat.badge}
                          >
                            {cat.description}
                          </ListItem>
                        ))}
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
                  <NavigationMenuTrigger className="text-xs font-semibold tracking-wide text-[#2e473a] hover:bg-[#ede7d8] hover:text-[#8a682f] data-[state=open]:bg-[#ede7d8] data-[state=open]:text-[#8a682f]">
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
                          >
                            {service.description}
                          </ListItem>
                        ))}
                      </ul>

                      <div className="mt-3 border-t border-[#ddd8ca] pt-3 text-center">
                        <Link
                          href="#contact"
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
              <ArrowUpRight size={14} className="text-[#e9c26f]" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-[#ddd8ca] bg-[#fbf9f2] text-[#214c39] transition-colors hover:bg-[#ede7d8] lg:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-[76px] bottom-0 z-50 flex flex-col overflow-y-auto border-t border-[#ddd8ca] bg-[#f7f4eb] shadow-2xl lg:hidden">
            <nav className="flex flex-1 flex-col p-5" aria-label="Mobile Navigation">
              <div className="space-y-1">
                {/* Home */}
                <Link
                  href="#home"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-[#1d392d] hover:bg-[#eee8dc]"
                >
                  <span>Home</span>
                  <ChevronRight size={16} className="text-[#998b76]" />
                </Link>

                {/* About Us Accordion */}
                <div className="rounded-lg border border-[#e4dfd3] bg-[#fbf9f2]">
                  <button
                    type="button"
                    onClick={() => toggleSubmenu("about")}
                    className="flex w-full items-center justify-between px-3 py-3 text-sm font-semibold text-[#1d392d]"
                    aria-expanded={mobileActiveSubmenu === "about"}
                  >
                    <span className="flex items-center gap-2">
                      <Sprout className="h-4 w-4 text-[#8a682f]" />
                      About Us
                    </span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "text-[#776c59] transition-transform duration-200",
                        mobileActiveSubmenu === "about" && "rotate-180"
                      )}
                    />
                  </button>

                  {mobileActiveSubmenu === "about" && (
                    <div className="border-t border-[#e4dfd3] bg-[#f7f4eb] px-3 py-2 space-y-1">
                      <Link
                        href="#about"
                        onClick={closeMobileMenu}
                        className="block rounded-md px-3 py-2 text-xs font-bold text-[#214c39] hover:bg-[#ede7d8]"
                      >
                        Company Overview & Perspective
                      </Link>
                      {aboutLinks.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block rounded-md px-3 py-2 text-xs text-[#526457] hover:bg-[#ede7d8]"
                        >
                          <div className="font-semibold text-[#1d392d]">{item.title}</div>
                          <div className="text-[11px] text-[#718074]">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Our Products Accordion */}
                <div className="rounded-lg border border-[#e4dfd3] bg-[#fbf9f2]">
                  <button
                    type="button"
                    onClick={() => toggleSubmenu("products")}
                    className="flex w-full items-center justify-between px-3 py-3 text-sm font-semibold text-[#1d392d]"
                    aria-expanded={mobileActiveSubmenu === "products"}
                  >
                    <span className="flex items-center gap-2">
                      <Boxes className="h-4 w-4 text-[#8a682f]" />
                      Our Products
                    </span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "text-[#776c59] transition-transform duration-200",
                        mobileActiveSubmenu === "products" && "rotate-180"
                      )}
                    />
                  </button>

                  {mobileActiveSubmenu === "products" && (
                    <div className="border-t border-[#e4dfd3] bg-[#f7f4eb] px-3 py-2 space-y-1">
                      <Link
                        href="#products"
                        onClick={closeMobileMenu}
                        className="block rounded-md px-3 py-2 text-xs font-bold text-[#214c39] hover:bg-[#ede7d8]"
                      >
                        Browse Full Product Catalog
                      </Link>
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.title}
                          href={cat.href}
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between rounded-md px-3 py-2 text-xs text-[#526457] hover:bg-[#ede7d8]"
                        >
                          <span>{cat.title}</span>
                          <span className="text-[10px] text-[#9a865b]">{cat.tag}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Our Services Accordion */}
                <div className="rounded-lg border border-[#e4dfd3] bg-[#fbf9f2]">
                  <button
                    type="button"
                    onClick={() => toggleSubmenu("services")}
                    className="flex w-full items-center justify-between px-3 py-3 text-sm font-semibold text-[#1d392d]"
                    aria-expanded={mobileActiveSubmenu === "services"}
                  >
                    <span className="flex items-center gap-2">
                      <Ship className="h-4 w-4 text-[#8a682f]" />
                      Our Services
                    </span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "text-[#776c59] transition-transform duration-200",
                        mobileActiveSubmenu === "services" && "rotate-180"
                      )}
                    />
                  </button>

                  {mobileActiveSubmenu === "services" && (
                    <div className="border-t border-[#e4dfd3] bg-[#f7f4eb] px-3 py-2 space-y-1">
                      {tradeServices.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={closeMobileMenu}
                          className="block rounded-md px-3 py-2 text-xs text-[#526457] hover:bg-[#ede7d8]"
                        >
                          <div className="font-semibold text-[#1d392d]">{service.title}</div>
                          <div className="text-[11px] text-[#718074]">{service.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* News & Blogs */}
                <Link
                  href="#news"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-[#1d392d] hover:bg-[#eee8dc]"
                >
                  <span>News & Blogs</span>
                  <ChevronRight size={16} className="text-[#998b76]" />
                </Link>

                {/* Careers */}
                <Link
                  href="#careers"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-[#1d392d] hover:bg-[#eee8dc]"
                >
                  <span>Careers</span>
                  <ChevronRight size={16} className="text-[#998b76]" />
                </Link>

                {/* Contact Us */}
                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-[#1d392d] hover:bg-[#eee8dc]"
                >
                  <span>Contact Us</span>
                  <ChevronRight size={16} className="text-[#998b76]" />
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 pt-4 border-t border-[#ddd8ca]">
                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="btn-primary w-full justify-center !py-3.5 text-center"
                >
                  Start a conversation
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Mobile Quick Info footer */}
              <div className="mt-6 rounded-lg bg-[#efe9dc] p-4 text-xs text-[#526457] space-y-2">
                <p className="font-bold text-[#1d392d]">Direct Inquiries</p>
                <div className="space-y-1 text-[11px]">
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a href="tel:[Add Company Phone Number]" className="text-[#214c39] underline">
                      [Add Company Phone Number]
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:[Add Company Email]" className="text-[#214c39] underline">
                      [Add Company Email]
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Office:</span> [Add Registered Office Address]
                  </p>
                </div>
                <div className="flex gap-4 pt-2 text-[#214c39]">
                  <a href="#contact" aria-label="LinkedIn" onClick={closeMobileMenu}>
                    <Linkedin size={16} />
                  </a>
                  <a href="#contact" aria-label="Facebook" onClick={closeMobileMenu}>
                    <Facebook size={16} />
                  </a>
                  <a href="#contact" aria-label="Instagram" onClick={closeMobileMenu}>
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
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
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  title: string
  icon?: React.ComponentType<{ className?: string }>
  badge?: string
  onClick?: () => void
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          onClick={onClick}
          className={cn(
            "group block select-none rounded-lg p-2.5 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#efe8da] hover:text-[#1d392d] focus:bg-[#efe8da]",
            className
          )}
        >
          <div className="flex items-start gap-2.5">
            {Icon && (
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md border border-[#d8cfb9] bg-[#f7f3e8] text-[#8b682d] transition-colors group-hover:border-[#d5a34c] group-hover:bg-[#214c39] group-hover:text-[#e9c26f]">
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


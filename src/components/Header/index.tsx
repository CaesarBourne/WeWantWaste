import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/skips", label: "Skip Hire" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const NavLinks = ({ vertical = false }: { vertical?: boolean }) => (
  <nav className={`flex ${vertical ? "flex-col gap-4" : "items-center gap-6"}`}>
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="text-sm font-medium text-foreground hover:text-waste-green dark:hover:text-waste-light-green"
      >
        {link.label}
      </a>
    ))}
  </nav>
);

const CallToAction = ({ vertical = false }: { vertical?: boolean }) => (
  <div
    className={`flex ${
      vertical ? "flex-col items-start gap-3" : "items-center gap-3 ml-auto"
    }`}
  >
    <Button variant="outline">Call Us</Button>
    <Button className="bg-waste-green text-white hover:bg-waste-dark-green dark:bg-waste-light-green dark:hover:bg-waste-light-green/90">
      Get a Quote
    </Button>
    {!vertical && <ModeToggle />}
  </div>
);

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Desktop View */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="/"
            className="text-xl font-bold text-waste-green dark:text-waste-light-green"
          >
            WeWantWaste
          </a>
          <NavLinks />
        </div>

        <div className="hidden lg:flex">
          <CallToAction />
        </div>

        {/* Mobile View */}
        <div className="flex lg:hidden items-center justify-between w-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 py-16 pl-16">
              <ModeToggle />
              <NavLinks vertical />
              <CallToAction vertical />
            </SheetContent>
          </Sheet>

          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Menu, X } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";

const NavLinks = [
  { href: "#About", label: "About" },
  { href: "#Projects", label: "Projects" },
  { href: "#Experience", label: "Experience" },
  { href: "#Testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function handleToggleButton() {
    if (showMobileMenu) {
      setIsClosing(true);
      setTimeout(() => {
        setShowMobileMenu(false);
        setIsClosing(false);
      }, 500);
    } else {
      setShowMobileMenu(true);
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          CM<span className="text-primary">.</span>
        </a>

        {/* {Desk nav} */}
        <div className="hidden sm:flex items-center gap-1">
          <div className="glass flex rounded-full items-center px-2 py-1 gap-1">
            {NavLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-400 rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* {cta action} */}
        <div className=" hidden sm:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* {mobile menu button} */}

        <button
          className="sm:hidden block p-2 text-foreground"
          onClick={handleToggleButton}
        >
          {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* {mobile menu} */}
      {showMobileMenu && (
        <div
          className={`sm:hidden glass-strong ${
            isClosing ? "animate-fade-out" : "animate-fade-in"
          }`}
        >
          <div className="container mx-auto p-6 flex flex-col gap-4">
            {NavLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
}

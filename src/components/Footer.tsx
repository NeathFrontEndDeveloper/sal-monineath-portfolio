"use client";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto border-t border-[#00ff99]" />
      <footer className="bg-[#1c1c22] text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Name */}
          <div className="text-2xl font-bold text-white hover:text-[#00ff99] transition-colors duration-300">
            Sal Monineath
          </div>

          {/* Quick Links */}
          <ul className="flex space-x-6 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Projects", href: "/project" },
              { label: "Contact", href: "/contact" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-[#00ff99] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sal Monineath. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Our Services",
    items: [
      { name: "Learning Management System", url: "/Learning" },
      { name: "E-commerce Development", url: "/Ecommerce" },
      { name: "Tracking And Delivery", url: "/Tracking" },
      { name: "Firebase App Development", url: "/Firebase" },
      { name: "DBMS", url: "/Dbms" },
    ],
  },
  {
    title: "Quick Links",
    items: [
      { name: "About", url: "/AboutUs" },
      { name: "Services", url: "/Services" },
      { name: "Careers", url: "/Careers" },
      { name: "Privacy Policy", url: "/PrivacyPolicy" },
    ],
  },
  {
    title: "Contact",
    items: [
      { name: "Contact Us", url: "/ContactUs" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function FooterF() {
  return (
    <footer className="relative w-full bg-blue-300 mt-10">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="text-black font-bold mb-4 mt-2">OPTICAL ARC</div>
            <div className="text-black mb-4">Optical Arc is the leading provider of the best software for business.</div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:pl-10 mt-5 md:mt-0 md:col-span-2">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <Typography
                  variant="small"
                  color="black"
                  className="mb-3 font-semibold text-lg opacity-80"
                >
                  {title}
                </Typography>
                <ul>
                  {items.map(({ name, url }) => (
                    <li key={name}>
                      <Typography
                        as="a"
                        href={url}
                        color="black"
                        className="py-1.5 font-normal transition-colors hover:text-blue-800 block"
                      >
                        {name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-black py-4 mt-8">
          {/* Social Icons */}
          <div className="flex gap-4 text-blue-gray-900 mb-4 md:mb-0">
            {/* Add your social icons here */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Replace with your social icon SVG code */}
              </svg>
            </Typography>
            {/* Add more social icons similarly */}
          </div>

          {/* Copyright Notice */}
          <Typography
            variant="small"
            className="text-center text-black font-normal"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/" className="hover:underline">Optical Arc</a>. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

import { cities } from "@/data";
import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="bg-secondary py-12 px-6 md:px-10 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Wanderway</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Inspiring travelers with authentic experiences and personalized
              journeys since 2023.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm">
              {cities.map((city) => (
                <li key={city.slug}>
                  <a
                    href={`/cities/${city.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Wanderway. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

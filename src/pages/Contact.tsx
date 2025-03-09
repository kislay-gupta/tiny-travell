import { useEffect } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-28 pb-12 md:pt-36 md:pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center staggered-fade">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            Reach Out
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            Have questions or need assistance? We're here to help. Reach out to
            our team for personalized support and travel advice.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-12 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-xl border shadow-sm animate-fade-up">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-muted-foreground mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-bold mb-6">Contact information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Our Office</h3>
                  <p className="text-muted-foreground mt-1">
                    123 Traveler's Avenue
                    <br />
                    San Francisco, CA 94103
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-muted-foreground mt-1">
                    <a
                      href="mailto:info@Fleance Kofi Kyere.com"
                      className="hover:text-primary transition-colors"
                    >
                      info@Fleance Kofi Kyere.com
                    </a>
                    <br />
                    <a
                      href="mailto:support@Fleance Kofi Kyere.com"
                      className="hover:text-primary transition-colors"
                    >
                      support@Fleance Kofi Kyere.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-muted-foreground mt-1">
                    <a
                      href="tel:+1234567890"
                      className="hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                    <br />
                    <a
                      href="tel:+1234567891"
                      className="hover:text-primary transition-colors"
                    >
                      +1 (234) 567-891
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-muted-foreground mt-1">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map or Image */}
            <div className="mt-8 rounded-lg overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80"
                alt="Office location"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions. If you can't find what you're
            looking for, please contact us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            className="bg-white p-6 rounded-lg border animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="font-bold mb-2">
              How can I customize my travel itinerary?
            </h3>
            <p className="text-muted-foreground text-sm">
              You can reach out to our travel experts through the contact form
              above, specifying your preferences, budget, and timeframe. We'll
              work with you to create a personalized experience.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg border animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="font-bold mb-2">What's your cancellation policy?</h3>
            <p className="text-muted-foreground text-sm">
              We understand plans change. Most bookings can be modified or
              cancelled up to 30 days before departure for a full refund. Please
              check the specific terms for your booking.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg border animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="font-bold mb-2">Do you offer group discounts?</h3>
            <p className="text-muted-foreground text-sm">
              Yes! For groups of 6 or more travelers, we offer special rates and
              packages. Contact our team with your group details, and we'll
              provide a customized quote.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg border animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="font-bold mb-2">
              How can I stay updated on travel deals?
            </h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest offers, destination
              guides, and travel tips. Follow us on social media for more
              frequent updates and inspiration.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 px-6 md:px-10 border-t">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fleance Kofi Kyere. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

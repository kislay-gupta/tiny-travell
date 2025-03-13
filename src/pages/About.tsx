import { useEffect } from "react";

const About = () => {
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
            Our Story
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            About Fleance Kyere
          </h1>
          <p className="text-muted-foreground text-lg">
            We believe that travel is transformative. Our mission is to inspire
            and enable unforgettable journeys that enrich lives and connect
            cultures.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="px-6 md:px-10 max-w-5xl mx-auto mb-20">
        <div className="aspect-video rounded-xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Team exploring the world"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Our Journey Began With a Passion for Discovery
            </h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2023, Fleance Kyere was born from a simple idea: that
              travel should be more than just visiting places—it should be about
              experiencing them authentically and responsibly.
            </p>
            <p className="text-muted-foreground mb-4">
              Our founders, avid travelers themselves, recognized the need for a
              platform that goes beyond the typical tourist trails, offering
              insights into the heart and soul of destinations.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to help travelers from around the world
              discover meaningful experiences that create lasting memories and
              foster global understanding.
            </p>
          </div>

          <div
            className="grid grid-cols-2 gap-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden translate-y-6">
              <img
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="City exploration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto bg-secondary/30">
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            Our Principles
          </span>
          <h2 className="text-3xl font-bold mb-4">Values That Guide Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Fleance Kyere, our core values inform everything we do, from the
            destinations we feature to the partnerships we form.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-white p-6 rounded-lg border shadow-sm animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Authenticity</h3>
            <p className="text-muted-foreground">
              We believe in showcasing the true essence of each destination,
              beyond the tourist façade, to help travelers connect with local
              cultures and communities.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg border shadow-sm animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Responsibility</h3>
            <p className="text-muted-foreground">
              We promote sustainable and ethical travel practices that respect
              local environments, economies, and traditions for generations to
              come.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg border shadow-sm animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
            <p className="text-muted-foreground">
              We strive to make travel accessible and welcoming for everyone,
              regardless of background, ability, or experience level.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="hidden py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            Meet The Team
          </span>
          <h2 className="text-3xl font-bold mb-4">
            The People Behind Fleance Kyere
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our diverse team brings together expertise in travel, technology,
            and sustainability to create exceptional experiences for our
            community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Team Member 1 */}
          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="aspect-square rounded-full overflow-hidden mb-4 border-2 border-primary/10">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
                alt="Sarah Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold">Sarah Johnson</h3>
            <p className="text-sm text-muted-foreground">Co-founder & CEO</p>
          </div>

          {/* Team Member 2 */}
          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="aspect-square rounded-full overflow-hidden mb-4 border-2 border-primary/10">
              <img
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
                alt="Michael Chen"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold">Michael Chen</h3>
            <p className="text-sm text-muted-foreground">Co-founder & CTO</p>
          </div>

          {/* Team Member 3 */}
          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="aspect-square rounded-full overflow-hidden mb-4 border-2 border-primary/10">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
                alt="Elena Rodriguez"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold">Elena Rodriguez</h3>
            <p className="text-sm text-muted-foreground">Head of Content</p>
          </div>

          {/* Team Member 4 */}
          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="aspect-square rounded-full overflow-hidden mb-4 border-2 border-primary/10">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
                alt="James Wilson"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold">Olivia Wilson</h3>
            <p className="text-sm text-muted-foreground">Community Manager</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join us on this journey
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're planning your next adventure or simply dreaming of
              far-off places, Fleance Kyere is here to inspire and guide you
              every step of the way.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default About;

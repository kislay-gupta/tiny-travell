const Footer = () => {
  return (
    <>
      {" "}
      <footer className="bg-secondary py-12 px-6 md:px-10 border-t">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fleance Kyere. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

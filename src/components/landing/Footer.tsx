const Footer = () => (
  <footer className="px-6 py-10 text-center">
    <p className="text-xs text-muted-foreground">
      © {new Date().getFullYear()} Daniel Reed. All rights reserved.
    </p>
    <p className="mt-1 text-xs text-muted-foreground/70">
      Your privacy matters. We never share your information.
    </p>
  </footer>
);

export default Footer;

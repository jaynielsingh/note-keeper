const Footer = () => {
  return (
    <div className="pt-10">
      <footer className="fixed  text-center bottom-0 w-full p-3 bg-orange-600 text-white">
        <p>Copyright © {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
};

export default Footer;

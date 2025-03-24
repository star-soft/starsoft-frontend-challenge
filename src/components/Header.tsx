import Logo from "./Logo";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="flex items-center px-12 h-[100px] text-white bg-background/80 backdrop-blur-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex items-center">
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;

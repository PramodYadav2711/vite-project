/* eslint-disable react/no-unescaped-entities */
import Button from '../Components/Button';

function Header() {
  return (
    <header className="flex items-center justify-between max-w-[80vw] m-auto relative z-50">
      <img src="\sn-logo_vitaminD3.webp" className="w-60" />
      <nav>
        <ul className=" flex items-center gap-8 text-sm text-white">
          <li>DR.'S SECRET</li>
          <li>WHAT'S IN</li>
          <li>FAQS</li>
          <li>
            <Button variant="secondary">BUY NOW</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

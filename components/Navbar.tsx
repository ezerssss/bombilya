import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="nav">
      <Image
        src="/images/logos/logo-text.png"
        width={200}
        height={42}
        alt="bombilya"
      />
      <div>
        <p>HOME</p>
        <p>ABOUT US</p>
        <p>CONTACT</p>
        <p>INNOV 101</p>
      </div>
    </nav>
  );
};

export default Navbar;

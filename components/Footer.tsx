import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsDiscord,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p>
          <b>Bombilya Home</b>
        </p>
        <p>What we do</p>
      </div>
      <div>
        <p>
          <b>About us</b>
        </p>
        <p>Mission and Vision</p>
        <p>Core Values</p>
        <p>Meet the Core Team</p>
      </div>
      <div id="align-center">
        <p id="reach">Reach us via</p>
        <span>
          <BsFacebook size="2.5rem" />
          <BsInstagram size="2.5rem" />
          <BsTwitter size="2.5rem" />
          <BsLinkedin size="2.5rem" />
          <BsDiscord size="2.5rem" />
        </span>
        <p id="reach">Report a problem</p>
      </div>
    </div>
  );
};

export default Footer;

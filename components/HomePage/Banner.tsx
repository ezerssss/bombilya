import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import CustomButton from '../CustomButton';

const Banner = () => {
  return (
    <div id={styles.banner}>
      <p>CONNECTING MINDS,</p>
      <p>SPARKING IDEAS</p>
      <CustomButton
        width="15vw"
        height="3vw"
        margin="1.7vw 0 -1vw 0"
        borderRadius="30px"
        border="0"
        backgroundColor="#F7D00F"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        onClick={() => console.log('hello')}
      >
        What we do
      </CustomButton>
      <div className={styles.pic} id={styles.pic1}>
        <Image
          src="/images/homepage/screen1.png"
          alt="meeting1"
          layout="fill"
        />
      </div>
      <div className={styles.pic} id={styles.pic2}>
        <Image
          src="/images/homepage/screen2.png"
          alt="meeting1"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Banner;

import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.scss";

interface PropsInterface {
    children?: JSX.Element | JSX.Element[]
}

const Layout = (props: PropsInterface) => {
    const { children } = props;
    return (
        <div className={styles.container}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
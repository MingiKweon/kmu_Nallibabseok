import styles from '../css/ForProfessor.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className={styles.container1}>
                <div className={styles.item1} />
            </div>
            <div className={styles.three_container}>
                <div className={styles.three_item} />
                <div className={styles.main_title}>Nallibabseok</div>
                <div className={styles.three_item} />
            </div>
            <div className={styles.container2}>
                <div className={styles.item2}>ID</div>
            </div>
        </header>
    );
};

const Banner = () => {
    return (
        <div className={styles.banner_top}>
            <div className={styles.banner} />
        </div>
    );
};

function Nav() {
    return (
        <div className={styles.navbar}>
            <div className={styles.blank_nav} />
            <div className={styles.toggle}>
                <div className={styles.left}><NavLink className={styles.link} to='/'>학식</NavLink></div>
                <div className={styles.middle}><NavLink className={styles.link} to='/'>법식</NavLink></div>
                <div className={styles.right}><NavLink className={styles.link} to='/forprofessor'>교직원</NavLink></div>
            </div>
            <div className={styles.blank_nav} />
        </div>
    );
};

function Main() {
    return (
        <div className={styles.list}>
            <div className={styles.blank_list} />
            <div className={styles.mlist}>
                교직원 식당
            </div>
            <div className={styles.blank_list} />
        </div>
    );
};

function Footer() {
    return (
        <div className={styles.label}>
        Nallibabseok
    </div>
    );
};

function ForProfessor() {
    return (
        <div>
            <Header />
            <Banner />
            <Nav />
            <Main />
            <Footer />
        </div>
    );  
};

export default ForProfessor;
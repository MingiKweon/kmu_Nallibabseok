import menustyle from './MenuBox2.module.css';

const MenuBox2 = () => {
    return (
    <div className = {menustyle.MenuBox2}>
        <div className={menustyle.MenuBox2_item}>
            <div className={menustyle.MenuBox2_title}>
                <h2>학식</h2>
            </div>
        </div>

        <div className={menustyle.MenuBox2_item}>
            <div className={menustyle.MenuBox2_breakfast}>
                <h1>아침</h1>
                <div className={menustyle.MenuBox2_breakfast_mntitle}>
                    <h2>김치볶음밥</h2>
                </div>
                <div className={menustyle.MenuBox2_breakfast_price}>
                    <h2>2900원</h2>
                </div>
            </div>
        </div>
        <div className={menustyle.MenuBox2_item}>
            <div className={menustyle.MenuBox2_lunch}>
                <h1>점심</h1>
                <div className={menustyle.MenuBox2_lunch_mntitle}>
                    <h2>김치볶음밥</h2>
                </div>
                <div className={menustyle.MenuBox2_lunch_price}>
                    <h2>2900원</h2>
                </div>
            </div>
        </div>

        <div className={menustyle.MenuBox2_item}>
            <div className={menustyle.MenuBox2_dinner}>
                <h1>저녁</h1>
                <div className={menustyle.MenuBox2_dinner_mntitle}>
                    <h2>김치볶음밥</h2>
                </div>
                <div className={menustyle.MenuBox2_dinner_price}>
                    <h2>2900원</h2>
                </div>
            </div>
        </div>

    </div>
    );
};

export default MenuBox2;
import menustyle from './MenuBox2.module.css';
import "./font/font.css";


const MenuBox2 = () => {
    return (
        
    <div>

    <div className={menustyle.MenuBox2_title}>
        <div className={menustyle.MenuBox2_title_1}>학식</div>
        <div className={menustyle.MenuBox2_title_2}>종합복지관 1층</div>
    </div>
    <div className = {menustyle.MenuBox2}>
        <div className={menustyle.MenuBox2_item}>
            <div className={menustyle.Menuwhen}>착한 아침</div>
            <div className={menustyle.MenuBox2_breakfast}>      
                <div>
                    jhhkj
                </div>
            </div>
            
        </div>

        <div className={menustyle.MenuBox2_item}>
        <div className={menustyle.Menuwhen}>중식</div>
            <div className={menustyle.MenuBox2_lunch}>
                <div>
               
                </div>
                <div>
                    김치볶음밥 2900원
                </div>
                <div>
                    김치볶음밥 2900원
                </div>
                <div>
                    김치볶음밥 2900원
                </div>
            </div>
        </div>

        <div className={menustyle.MenuBox2_item}>
            <div className={menustyle.Menuwhen}>석식</div>
            <div className={menustyle.MenuBox2_dinner}>
                <div className={menustyle.text}>
                    김치볶음밥 2900원
                </div>
            </div>
        </div>

    </div>
    </div>
    );
};

export default MenuBox2;
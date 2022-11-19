import "./card.css";

function Card(props) {
    return (
        <div className={`card-container ${props.cardnumber}`}>
            <div className={`name ${props.stylename}`}>Безлимитный {props.name}</div>
            <div className={`pricecontainer ${props.styleprice}`}>
                <div className="price-innercontainer">
                    <div className="rubles">руб.</div>
                    <div className="price">{props.price}</div>
                    <div className="mounth">/мес</div>
                </div>
            </div>
            <div className="speed">до {props.speed} Мбит/сек</div>
            <div className="volume">Объем включенного трафика не ограничен</div>
        </div>
    );


}

export default Card;
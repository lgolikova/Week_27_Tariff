import "./card.css";

function Card(props) {
    return (
        <div className="card-container">
            <div className={`name ${props.stylename}`}>Безлимитный {props.name}</div>
            <div className={props.styleprice}>
                <div className="rubles">руб.</div>
                <div className="price">{props.price}</div>
                <div className="mounth">/мес</div>
            </div>
            <div className="speed">до {props.speed} Мбит/сек</div>
            <div className="volume">Объем включенного трафика не ограничен</div>
        </div>
    );
}

export default Card;
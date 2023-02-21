export default function Card(props) {
  return (
    <div className="card" onClick={props.handleClick}>
      <div>
        <img src={props.src} className="card-img" />
      </div>
      <div className="card-content">
        <div className="card-title">{props.title}</div>
        <div className="detail-cont">
          <div className="detail">
            <img src="/imgs/star.svg" />
            <div>{props.ratings}</div>
          </div>
          <div className="detail">
            <img src="/imgs/servings.svg" />
            <div>{props.servings}</div>
            <div>{props.unit}</div>
          </div>
          <div className="detail">
            <img src="/imgs/time.svg" />
            <div>{props.time}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

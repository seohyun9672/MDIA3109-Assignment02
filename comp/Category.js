export default function Category({
  text = "text",
  handleClick = () => { },
  src = "/imgs/pizza.svg",

}) {
  return (
    <div
      className="category"
      onClick={handleClick}>
      <img src={src} className="cat-img" />
      <div>{text}</div>
    </div>
  );
}
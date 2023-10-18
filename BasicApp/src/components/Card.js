export default function Card(props) {
  return (
    <li className={props.className}>
      <img src={props.imageSrc} alt={props.altText} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

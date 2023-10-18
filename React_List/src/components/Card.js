import './Card.css'
function Card(props){
    // const classes = 'card ' + props.className ;
    return <div className={`card ${props.className}`}>{props.children}</div>;
}
export default Card;
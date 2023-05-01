//import Card from 'react-bootstrap/Card';


const Item = ({id, img, prenda, marca, talle}) => {
    return(
        <div>
            <h1>{prenda} </h1>
            <h3>{marca} </h3>
            <p>
                {talle}
            </p>
        </div>
    )
}

export default Item



import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from'./ciclo-de-vida-de-un-producto-4.png'

import './ItemCount.css';

function ItemCount({ init, stock }) {

    const [count, setCount] = useState(1);

    const handleCounterUp = () => {
        if (count >= stock) return count;
        return setCount(count+1);
    }

    const handleCounterDown = () => {
        if (count <= init) return count; //para que no pueda bajar de 0
        return setCount(count-1);
    }

    const onAdd = () => {
        return console.log(count);
    }


    return (
        <div className='card_container'>
            <Card className='card_container-item' style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <div>
                        <Button variant="primary" onClick={()=>handleCounterUp()}>+</Button>
                        {count}
                        <Button variant="primary" onClick={()=>handleCounterDown()}>-</Button>
                    </div>
                    <Button onClick={()=>onAdd()}>Agregar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCount
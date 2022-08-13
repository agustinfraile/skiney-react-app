import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import './CartWidget.css';

export default function CartWidget () {
    return (
        <div className="icon-container">
            <a className="icon-container_cart" href="#">
                <FontAwesomeIcon className="icon-container_cart" icon={faCartShopping} />
            </a>
        </div>
    )
}
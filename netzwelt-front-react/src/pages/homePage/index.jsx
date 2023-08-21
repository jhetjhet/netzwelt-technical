import { useEffect, useState } from "react";
import "./homePage.css";
import axios from "axios";

/**
 * EXPECTED NESTED TERRITORY TO BACKEND SHOULD BE:
 *  [
 *      {
 *          id: number
 *          name: string
 *          childrens: [ // this property only exists if it has childrens
 *              {
 *                  ...copy of object
 *              }
 *              ...more here
 *          ]
 *      }
 *      ...more here
 *  ]
 */

/**
 * component with recursion design to make it compatible with the above data (expected data)
 */
const NestedUL = ({ name, childrens }) => {
    const [isOpen, setIsOpen] = useState(false);

    const __on_caret_click__ = () => {
        setIsOpen(!isOpen);
    }

    return (
        <li>
            <span
                className={childrens ? `caret ${isOpen ? "caret-down" : ""}` : ""}
                onClick={__on_caret_click__}
            >{name}</span>
            {childrens && (
                <ul className={isOpen ? "active" : "nested"}>
                    {childrens.map((child) => (
                        <NestedUL
                            id={child.id}
                            key={child.id}
                            name={child.name}
                            childrens={child.childrens}
                        />
                    ))}
                </ul>
            )}
        </li>
    )
}

const HomePage = () => {
    const [territories, setTerritories] = useState([]);

    useEffect(() => {
        // fetch territories lists from backend
        axios.get('http://localhost:8080/territories/').then((resp) => {
            setTerritories(resp.data);
        });
    }, []);

    return (
        <div>
            <h2>Territories</h2>
            <p>Here are the list of territories</p>
            <ul id="myUL">
                {territories.map((ter) => (
                    <NestedUL
                        key={ter.id}
                        name={ter.name}
                        childrens={ter.childrens}
                    />
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
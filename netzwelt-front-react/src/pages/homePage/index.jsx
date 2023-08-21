import { useState } from "react";
import "./homePage.css";

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

const TERRITORIES_TEMP_DATA = [
    {
        id: 1,
        name: 'parent1',
        childrens: [
            {
                id: 2,
                name: 'parent2',
                childrens: [
                    {
                        id: 4,
                        name: 'parent4',
                        childrens: [
                            {
                                id: 5,
                                name: 'chilllldd',
                                childrens: null
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: 'parent3',
                childrens: null,
            }

        ]
    },
    {
        id: 9,
        name: 'parent9',
        childrens: null,
    },

]

const HomePage = () => {

    return (
        <div>
            <h2>Territories</h2>
            <p>Here are the list of territories</p>
            <ul id="myUL">
                {TERRITORIES_TEMP_DATA.map((ter) => (
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
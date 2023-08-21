import "./homePage.css";

const HomePage = () => {

    return (
        <div>
            <h2>Territories</h2>
            <p>Here are the list of territories</p>
            <ul id="myUL">
                <li>
                    <span className="caret">Central Luzon</span>
                    <ul className="nested">
                        <li>Bulacan</li>
                        <li>Nueva Ecija</li>
                        <li>Pampanga</li>
                        <li>Tarlac</li>
                    </ul>
                </li>

                <li>
                    <span className="caret">CALABARZON</span>
                    <ul className="active">
                        <li>
                            <span className="caret">Batangas</span>
                            <ul className="nested">
                                <li>Lipa</li>
                                <li>Bauan</li>
                                <li>Sto. Tomas</li>
                            </ul>
                        </li>
                        <li>
                            <span className="caret">Cavite</span>
                            <ul className="nested">
                                <li>Silang</li>
                                <li>Bacoor</li>
                                <li>Imus</li>
                                <li>Kawit</li>
                            </ul>
                        </li>
                        <li>
                            <span className="caret">Laguna</span>
                            <ul className="nested">
                                <li>Calamba</li>
                                <li>Sta. Rosa</li>
                                <li>San Pedro</li>
                            </ul>
                        </li>
                        <li>TEMP</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
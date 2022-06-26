import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";


export const CardList = (props) => {
    return (
        <div className="card-list">
            {
                props.monsters.map(
                    (item) => <Card key={item.id} monster={item} />
                )
        }
        </div>
    );
}

// export const CardList = (props) => {
//     return (
//         <div className="card-list">
//             {
//                 props.monsters.map(
//                     (item) => <Card key={item.id} sequence={item.id} name={item.name} email={item.email} />
//                 )
//         }
//         </div>
//     );
// }

// function CardList(props) {
//     return <div className="card-list">{props.children}</div>
// }
// export default CardList
import { createElement } from "react";
import styles from "./users.module.scss"

export function UserFavoriteFoods()
{
    return createElement("div",null,
        <span style={{
            fontSize: "32px",
            color: "red"
        }}>Favorite Foods:</span>,
        <br />,
        <ul>
            <li className={styles["foodsTitle"]}>Sushi</li>
            <li>Pizza</li>
            <li>Burger</li>
        </ul>
        )
}
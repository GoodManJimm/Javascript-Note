import React from "react";
import "./styles.css"
import styles from "./styles.module.css"


export function UserUsername(props)
{
    return (
        <>
            <b className="username">Username: </b>
            <span className={styles.test}>{props.username}</span>
            <br />
        </>
    )
}
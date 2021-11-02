import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

const url = "https://randomuser.me/api/?results=2";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>RANDOM USER FACEOFF</h1>
      <h1 className={styles.vs}>VS</h1>
      <div className={styles.users}>
        {users.map((user, index) => {
          return (
            <div key={index} className={styles.user}>
              <img className={styles.img} src={user.picture.large} alt="" />
              <h2>{user.name.first}</h2>
              <h2>{user.name.last}</h2>
              <h2>{}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

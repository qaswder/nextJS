import styles from '../styles/Home.module.css'
import React from "react";
import Link from 'next/link';

function Animal(props) {
  const { name, animal, img } = props.data;
  return (
    <div className={styles.card}>
      <p>{animal}: {name}</p>
      
      
      <img
        className={styles.imgAnimal}
        alt="Фото"
        src={img}
      />
    </div>
  );
}

export default function Home() {
  const [animals, setAnimals] = React.useState([]);

  React.useEffect(() => {
    fetch('api/getAnimals')
      .then(data => data.json())
      .then(data => setAnimals(data))
  }, []);


  return (
    <div>
      <title>WebZoo</title>
      <div className={styles.card}>
        <h1>WebZoo</h1>
      </div>
      <div className={styles.refh}>
        <Link href='/map'>Владельцы</Link>
      </div> 
      <div className={styles.container}>{
        animals.map((data, i) => <div key={i}>
          <Animal data={data} />
        </div>)
      }
      </div><br/>
      <div className={styles.footer}>
        <p>Серов Д.В.\</p>
        <p>Отставнов А.М.\</p>
        <p>Пронин В.А.\</p>
        <p>Группа 19ВВП1</p>

      </div>

    </div>
  )
}
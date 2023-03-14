import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'; 

export default function Time() {
  const [time, setTime] = React.useState("Загрузка времени сервера...");
  React.useEffect(()=>{
    fetch('api/getServerTime')
    .then(data=>data.text())
    .then(data=>setTime(data));
  },[]);
  return (
    <div className={styles.main}>
      <p>{time}</p>
      <p>Серов Д.В.</p>
      <p>Отставнов А.М.</p>
      <p>Пронин В.А.</p>
      <p>Группа 19ВВП1</p>
      <div className={styles.code}>
          <Link href="/content">Загрузка</Link>
        </div>
    </div>
  )
}

import React from "react";
import { YMaps, Map } from '@pbe/react-yandex-maps';
import styles from '../styles/Home.module.css'

function Maps(props) {
    const { address1, address2, human} = props.data;
    let num1 = Number(address1);
    let num2 = Number(address2);
    return (
      <div className={styles.card}>
        <p>Владелец: {human}</p>
        <YMaps>
                <div>
                    Местоположение
                    <Map defaultState={{ center: [num1, num2], zoom: 10 } } />
                </div>
            </YMaps>
      </div>
    );
  }
  

const mapPage = () => {
    const [info, setInfo] = React.useState([]);
    
 React.useEffect(() => {
    fetch('api/getAnimals')
      .then(data => data.json())
      .then(data => setInfo(data))
  }, []);

    return (
        <div>
            <div className={styles.container}>{
        info.map((data, i) => <div key={i}>
          <Maps data={data} />
        </div>)
      }
      </div>
            
        </div>
    );
}


export default mapPage;
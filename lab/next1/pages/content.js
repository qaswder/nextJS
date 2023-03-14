import { ThreeCircles } from 'react-loader-spinner'
import React from "react";
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const ContentPage = () => {

    return (
        <div className={styles.main}>
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
            <div className={styles.code}>
                <Link href="/">Отмена</Link>
            </div>
        </div>
    )
}

export default ContentPage;

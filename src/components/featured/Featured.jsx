import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'


const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
      <b>Hello, I am Whalter! </b>
       A Full-stack developer. Welcome to my blog!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a 
            nihil eum est, quos nisi sed quibusdam excepturi reprehenderit 
            ab distinctio similique officiis consectetur vitae aut nostrum eaque asperiores placeat.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured

import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
       <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
              <span className={styles.date}>11.02.2023 - </span>
              <span className={styles.category}>Culture</span>
            </div>
            <Link href='/'>
              <h1> Title post creative</h1>
            </Link>
            
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo 
              minus excepturi esse assumenda. Molestiae libero totam voluptatem molestias,
               sunt earum sint beatae quibusdam sequi temporibus? Dolorum nesciunt incidunt officia cum.
            </p>
            <Link href='/' className={styles.link}>Read more</Link>
          </div>
    </div>
  )
}

export default Card

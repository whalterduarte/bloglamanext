import Menu from '@/components/Menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.avatar}/>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Whalter Duarte</span>
              <span className={styles.date}>30.11.1995</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Sint blanditiis ratione enim placeat accusamus omnis deserunt 
            tempora. Atque totam cum molestias velit. 
            Aut accusamus nemo tenetur necessitatibus adipisci quasi recusandae?
          </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default SinglePage

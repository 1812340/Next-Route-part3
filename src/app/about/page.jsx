import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/Button/button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/17211591/pexels-photo-17211591/free-photo-of-bicycle-parked-under-building-painted-blue.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experience</h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quis obcaecati animi tempora! Consequatur eum provident asperiores explicabo autem ratione excepturi quas. Molestias consectetur doloribus iure illum et, veritatis modi.</p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}> What we Do?</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto deleniti praesentium minus obcaecati alias quidem quasi accusamus nihil, suscipit reiciendis quo illum illo dolorum a. Qui enim iure ab ex!</p>
            <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About
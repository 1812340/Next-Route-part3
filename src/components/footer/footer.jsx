import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 Waqas Ghori. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" className={styles.icons}  width={15} height={15} alt='Waqas' />
        <Image src="/2.png" className={styles.icons}  width={15} height={15} alt='Waqas' />
        <Image src="/3.png" className={styles.icons}  width={15} height={15} alt='Waqas' />
        <Image src="/4.png" className={styles.icons}  width={15} height={15} alt='Waqas' />
      </div>
      </div>
  )
}

export default Footer
import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store"
  });
  if (!res.ok) {
    throw new Error("failed to fetch data")
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (

        <Link href={`/blog/${item._id}`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              // src="https://images.pexels.com/photos/11299696/pexels-photo-11299696.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=''
              width={400}
              height={250}
              className='styles.image'
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.Desc}</p>
          </div>
        </Link>
      ))}
      {/* <Link href="/blog/testId" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/11299696/pexels-photo-11299696.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=''
          width={400}
          height={250}
          className='styles.image'
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
      </div>
    </Link>
    <Link href="/blog/testId" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/11299696/pexels-photo-11299696.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=''
          width={400}
          height={250}
          className='styles.image'
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
      </div>
    </Link>
    <Link href="/blog/testId" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/11299696/pexels-photo-11299696.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=''
          width={400}
          height={250}
          className='styles.image'
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
      </div>
    </Link> */}

    </div>
  )
}

export default Blog
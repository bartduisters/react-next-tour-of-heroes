import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/app.module.css'
import s from './index.module.css'

const Home: NextPage = () => {
  const [heroes, setHeroes] = useState(['Superman', 'Batman', 'Wonder'])

  return (
    <>
      <div className={`${styles.title} ${s.title}`}>Top Heroes</div>

      <div className={s['top-heroes']}>
        {
          heroes.map((i, index) => (
            <div key={`${i}${index}`} className={s['top-hero']}>{i}</div>
          ))
        }
      </div >

      <button onClick={() => setHeroes([...heroes, 'Jeroen'])}>add</button>
    </>
  )
}

export default Home

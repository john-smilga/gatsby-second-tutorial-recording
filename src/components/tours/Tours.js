import React from 'react'
import Tour from './SingleTour'
import styles from '../../css/items.module.css'
const Tours = ({ tours }) => {
  return (
    <section className={styles.tours}>
      <h2>our tours</h2>
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
    </section>
  )
}

export default Tours

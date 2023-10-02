import React from 'react'

// css import
import styles from './styles/Hero.module.scss'

// comopnents import
import TopText from '../atoms/TopText'
import TagText from '../atoms/TagText'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <TopText
          id={1}
          text={
            <p className={styles.text}>
              Thank you for your interest.
              <br />
              This site is a gallery style to motivate personal study of Blender
              and to visualize what I have learned so far.
              <br />
              If you have any questions, or if you would like to discuss a logo
              or icon project, please contact us at the bottom of this page.
            </p>
          }
        />
      </div>
      <div className={styles.tagFlexBox}>
        <TagText id={1} text="animals" link="/tags/animals" />
      </div>
    </div>
  )
}

export default Hero

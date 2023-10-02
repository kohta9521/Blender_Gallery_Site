import React from 'react'

// css import
import styles from './styles/Hero.module.scss'

// comopnents import
import TopText from '../atoms/TopText'
import TagText from '../atoms/TagText'
import TagLine from '../atoms/TagLine'

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
        <TagText id={1} text="Animals" link="/tags/animals" />
        <TagLine />
        <TagText id={2} text="Furniture" link="/tags/furniture" />
        <TagLine />
        <TagText id={3} text="House" link="/tags/house" />
        <TagLine />
        <TagText id={4} text="Machine" link="/tags/machine" />
        <TagLine />
        <TagText id={5} text="Logo" link="/tags/logo" />
        <TagLine />
        <TagText id={6} text="Food" link="/tags/food" />
        <TagLine />
        <TagText id={7} text="Character" link="/tags/character" />
        <TagLine />
        <TagText id={8} text="City" link="/tags/city" />
      </div>
    </div>
  )
}

export default Hero

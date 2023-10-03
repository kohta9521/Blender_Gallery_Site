import React from 'react'

// css import
import styles from './styles/Animals.module.scss'

// components import
import SubPageLayout from '@/components/templates/SubPageLayout'
import SubPageTitle from '@/components/atoms/SubPageTitle'

const Animals = () => {
  return (
    <SubPageLayout id={0}>
      <div className={styles.hero}>
        <SubPageTitle id={0} text="Animals" />
      </div>

      <p>fajhafh</p>
    </SubPageLayout>
  )
}

export default Animals

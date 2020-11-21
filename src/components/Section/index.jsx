import React from 'react'

import styles from './styles.scss'

export const Section = ({ children, ...props }) => {
  return (
    <div className={styles.section} {...props}>
      {children}
    </div>
  )
}

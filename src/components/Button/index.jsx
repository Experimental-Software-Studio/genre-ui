import classNames from 'classnames'
import React from 'react'

import styles from './styles.scss'

const SHAPE_STYLES = {
  SQUARE: styles.square, // default
  ANGLED: styles.angled,
  ROUNDED: styles.rounded,
  ROUND: styles.round,
  CIRCLE: styles.circle
}

const TYPE_STYLES = {
  DEFAULT: styles.default, // default
  PRIMARY: styles.primary,
  SECONDARY: styles.secondary
}

const VARIANT_STYLES = {
  FILLED: styles.filled, // default
  OUTLINED: styles.outlined,
  EMPTY: styles.empty
}

export const Button = ({ disabled, shape, text, type, variant, ...props }) => {
  const classes = classNames([
    styles.button,
    SHAPE_STYLES[shape?.toUpperCase()],
    TYPE_STYLES[type?.toUpperCase()],
    VARIANT_STYLES[variant?.toUpperCase()],
    ...(disabled ? [styles.disabled] : [])
  ])

  return (
    <button className={classes} disabled={disabled} {...props}>
      {text}
    </button>
  )
}

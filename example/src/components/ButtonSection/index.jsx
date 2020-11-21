import React from 'react'

import { AngledButtons } from './AngledButtons'
import { CircleButtons } from './CircleButtons'
import { RoundButtons } from './RoundButtons'
import { RoundedButtons } from './RoundedButtons'
import { SquareButtons } from './SquareButtons'

import styles from './styles.module.css'

export const ButtonSection = () => (
  <div className={styles.buttonSection}>
    <h1>Square</h1>
    <SquareButtons />

    <h1>Angled</h1>
    <AngledButtons />

    <h1>Rounded</h1>
    <RoundedButtons />

    <h1>Round</h1>
    <RoundButtons />

    <h1>Circle</h1>
    <CircleButtons />
  </div>
)

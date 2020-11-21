import { Button, Section } from 'genre-ui'
import React from 'react'

export const SquareButtons = () => (
  <Section>
    <h2>Filled</h2>
    <div>
      <Button text='Default' />
      <Button text='Primary' type='primary' />
      <Button text='Secondary' type='secondary' />
      <Button disabled text='Disabled' />
    </div>

    <h2>Outlined</h2>
    <div>
      <Button text='Default' variant='outlined' />
      <Button text='Primary' type='primary' variant='outlined' />
      <Button text='Secondary' type='secondary' variant='outlined' />
      <Button disabled text='Disabled' variant='outlined' />
    </div>

    <h2>Empty</h2>
    <div>
      <Button text='Default' variant='empty' />
      <Button text='Primary' type='primary' variant='empty' />
      <Button text='Secondary' type='secondary' variant='empty' />
      <Button disabled text='Disabled' variant='empty' />
    </div>
  </Section>
)

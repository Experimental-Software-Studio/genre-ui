import { Button, Section } from 'genre-ui'
import React from 'react'

export const RoundButtons = () => (
  <Section>
    <h2>Contained</h2>
    <div>
      <Button shape='round' text='Default' />
      <Button shape='round' text='Primary' type='primary' />
      <Button shape='round' text='Secondary' type='secondary' />
      <Button shape='round' disabled text='Disabled' />
    </div>

    <h2>Outlined</h2>
    <div>
      <Button shape='round' text='Default' variant='outlined' />
      <Button shape='round' text='Primary' type='primary' variant='outlined' />
      <Button
        shape='round'
        text='Secondary'
        type='secondary'
        variant='outlined'
      />
      <Button shape='round' disabled text='Disabled' variant='outlined' />
    </div>

    <h2>Empty</h2>
    <div>
      <Button shape='round' text='Default' variant='empty' />
      <Button shape='round' text='Primary' type='primary' variant='empty' />
      <Button shape='round' text='Secondary' type='secondary' variant='empty' />
      <Button shape='round' disabled text='Disabled' variant='empty' />
    </div>
  </Section>
)

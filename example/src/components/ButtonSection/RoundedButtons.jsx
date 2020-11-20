import { Button, Section } from 'genre-ui'
import React from 'react'

export const RoundedButtons = () => (
  <Section>
    <h2>Contained</h2>
    <div>
      <Button shape='rounded' text='Default' />
      <Button shape='rounded' text='Primary' type='primary' />
      <Button shape='rounded' text='Secondary' type='secondary' />
      <Button shape='rounded' disabled text='Disabled' />
    </div>

    <h2>Outlined</h2>
    <div>
      <Button shape='rounded' text='Default' variant='outlined' />
      <Button
        shape='rounded'
        text='Primary'
        type='primary'
        variant='outlined'
      />
      <Button
        shape='rounded'
        text='Secondary'
        type='secondary'
        variant='outlined'
      />
      <Button shape='rounded' disabled text='Disabled' variant='outlined' />
    </div>

    <h2>Empty</h2>
    <div>
      <Button shape='rounded' text='Default' variant='empty' />
      <Button shape='rounded' text='Primary' type='primary' variant='empty' />
      <Button
        shape='rounded'
        text='Secondary'
        type='secondary'
        variant='empty'
      />
      <Button shape='rounded' disabled text='Disabled' variant='empty' />
    </div>
  </Section>
)

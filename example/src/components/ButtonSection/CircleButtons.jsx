import { Button, Section } from 'genre-ui'
import React from 'react'

export const CircleButtons = () => (
  <Section>
    <h2>Filled</h2>
    <div>
      <Button shape='circle' text='Default' />
      <Button shape='circle' text='Primary' type='primary' />
      <Button shape='circle' text='Secondary' type='secondary' />
      <Button shape='circle' disabled text='Disabled' />
    </div>

    <h2>Outlined</h2>
    <div>
      <Button shape='circle' text='Default' variant='outlined' />
      <Button shape='circle' text='Primary' type='primary' variant='outlined' />
      <Button
        shape='circle'
        text='Secondary'
        type='secondary'
        variant='outlined'
      />
      <Button shape='circle' disabled text='Disabled' variant='outlined' />
    </div>

    <h2>Empty</h2>
    <div>
      <Button shape='circle' text='Default' variant='empty' />
      <Button shape='circle' text='Primary' type='primary' variant='empty' />
      <Button
        shape='circle'
        text='Secondary'
        type='secondary'
        variant='empty'
      />
      <Button shape='circle' disabled text='Disabled' variant='empty' />
    </div>
  </Section>
)

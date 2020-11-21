import { Button, Section } from 'genre-ui'
import React from 'react'

export const AngledButtons = () => (
  <Section>
    <h2>Contained</h2>
    <div>
      <Button shape='angled' text='Default' />
      <Button shape='angled' text='Primary' type='primary' />
      <Button shape='angled' text='Secondary' type='secondary' />
      <Button shape='angled' disabled text='Disabled' />
    </div>

    <h2>Outlined</h2>
    <div>
      <Button shape='angled' text='Default' variant='outlined' />
      <Button shape='angled' text='Primary' type='primary' variant='outlined' />
      <Button
        shape='angled'
        text='Secondary'
        type='secondary'
        variant='outlined'
      />
      <Button shape='angled' disabled text='Disabled' variant='outlined' />
    </div>

    <h2>Empty</h2>
    <div>
      <Button shape='angled' text='Default' variant='empty' />
      <Button shape='angled' text='Primary' type='primary' variant='empty' />
      <Button
        shape='angled'
        text='Secondary'
        type='secondary'
        variant='empty'
      />
      <Button shape='angled' disabled text='Disabled' variant='empty' />
    </div>
  </Section>
)

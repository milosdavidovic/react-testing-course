import React from 'react'

interface Props {
  items: string[];
}

export const ShoppingList : React.FC<Props> = ({items}) => {
  return (
    <ol data-testid="shopping-list">
    {items.map(item => {
      return <li data-testid="shopping-item" key={item}>{item}</li>
    })}
  </ol>
  )
}

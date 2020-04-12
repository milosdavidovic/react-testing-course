import React, { useState } from 'react'
import { ShoppingList } from './ShoppingList/ShoppingList';
import { ShoppingInput } from './ShoppingInput/ShoppingInput';
import { Header } from './Header/Header';

export const ShoppingCart = () => {
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = (item: string) => {
    setItems(items => items.concat(item))
  }

  return (
    <div>
      <Header />
      <ShoppingInput onClick={handleAddItem}/>
      <ShoppingList items={items} />
    </div>
  )
}

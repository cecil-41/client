import React, {useContext} from 'react'
import { PriceContext, ItemContext } from '../../App'
import ComponentZ from './ComponentZ'

export default function ComponentY() {
    const price = useContext(PriceContext)
    const item = useContext(ItemContext)
  return (
    <div>
        {price} - {item}
    </div>
  )
}

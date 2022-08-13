import React from 'react'

function Transaction({transaction}) {
  return (
    <div>
        <p>{transaction.item_name}</p>
        <p>{transaction.date}</p>
        <p>{transaction.amount}</p>
    </div>
  )
}

export default Transaction
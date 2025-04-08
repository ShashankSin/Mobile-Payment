import React from 'react'
import { FlatList, Text } from 'react-native'
import ExpenseItems from './ExpenseItems'

function renderExpenseItem(itemData) {
  return <ExpenseItems {...itemData.item} />
}
function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default ExpensesList

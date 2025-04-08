import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import ExpensesOutput from '../components/Expences/ExpensesOutput'
import { ExpensesContext } from '../store/expenses_context'

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext)
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={'Total'}
      fallbackText={'No registered expenses found.'}
    />
  )
}
export default AllExpenses

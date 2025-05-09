import React from 'react'
import { View, Text } from 'react-native'
import ExpensesOutput from '../components/Expences/ExpensesOutput'
import { ExpensesContext } from '../store/expenses_context'
import { getDateMinusDays } from '../util/date'
import { useContext } from 'react'

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDays(today, 7)

    return expense.date >= date7DaysAgo && expense.date <= today
  })

  return (
    <ExpensesOutput
      expensesPeriod={'Last 7 days'}
      fallbackText={'No recent expenses found.'}
      expenses={recentExpenses}
    />
  )
}

export default RecentExpenses

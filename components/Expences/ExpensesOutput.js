import { View, Text, FlatList, StyleSheet } from 'react-native'
import ExpensesSummery from './ExpensesSummery'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = (
    <Text style={styles.infoText}>No registered expenses found.</Text>
  )
  if (expenses && expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }

  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
})

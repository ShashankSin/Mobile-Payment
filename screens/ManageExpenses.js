import React, { useContext, useLayoutEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IconBtn from '../components/UI/IconBtn'
import { GlobalStyles } from '../constants/styles'
import Button from '../components/UI/Button'
import { ExpensesContext } from '../store/expenses_context'

function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId

  const isEditing = !!editedExpenseId

  const expenseCtx = useContext(ExpensesContext)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    })
  }, [navigation, isEditing])

  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(editedExpenseId)
    navigation.goBack()
  }

  function cancelHandler() {
    navigation.goBack()
  }
  function confirmHandler() {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId)
    } else {
      expenseCtx.addExpense({
        description: 'Test',
        amount: 10,
        date: new Date(),
      })
    }
    navigation.goBack()
  }

  return (
    <View style={styles.constainer}>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconBtn
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  )
}

export default ManageExpenses

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
})

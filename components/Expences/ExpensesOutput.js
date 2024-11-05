import { View, Text, FlatList } from 'react-native'

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <View>
        <Text>Last 7 Days</Text>
        <Text>$177.95</Text>
        <FlatList />
      </View>
    </View>
  )
}

export default ExpensesOutput

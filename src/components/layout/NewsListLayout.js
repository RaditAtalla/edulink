import { SafeAreaView, FlatList, Text, View, StyleSheet, ScrollView } from 'react-native'
import MyStatusbar from '../atoms/MyStatusbar'
import { COLORS, horizontalScale, moderateScale, verticalScale } from '../../constant'

const NewsListLayout = ({data, renderItem, title}) => {
  return(
    <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
      <MyStatusbar contentColor='Dark-content' />
      <Text style={Styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{height: verticalScale(32)}} />}
        scrollEnabled={false}
        style={{ marginBottom: verticalScale(30) }}
      />
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(24),
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.textDark,
    fontSize: moderateScale(24),
    fontFamily: 'Satoshi-Bold',
    marginBottom: verticalScale(32),
  },
})

export default NewsListLayout
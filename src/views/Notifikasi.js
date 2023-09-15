import { FlatList, View, SafeAreaView, ScrollView } from 'react-native'
import CardNotifikasi from '../components/atoms/CardNotifikasi'
import { COLORS, horizontalScale, verticalScale } from '../constant'

const DUMMY = [
  {
    id: 1,
    date: '13 Jul 2023',
    title: 'Belajar di Rumah Selama Wabah',
    description: 'Dalam menghadapi wabah covid 19 yang...',
  },
  {
    id: 2,
    date: '13 Jul 2023',
    title: 'Belajar di Rumah Selama Wabah',
    description: 'Dalam menghadapi wabah covid 19 yang...',
  },
  {
    id: 3,
    date: '13 Jul 2023',
    title: 'Belajar di Rumah Selama Wabah',
    description: 'Dalam menghadapi wabah covid 19 yang...',
  },
]

const Notifikasi = () => {
  return(
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }} >
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          scrollEnabled={false}
          data={DUMMY}
          renderItem={({item}) => <CardNotifikasi date={item.date} description={item.description} title={item.title} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{ height: verticalScale(48) }} />}
          style={{
            paddingHorizontal: horizontalScale(24),
            paddingTop: verticalScale(32),
          }}
        />
        <View style={{ height: 50, backgroundColor: COLORS.white }} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Notifikasi
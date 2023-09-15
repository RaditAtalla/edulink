import { FlatList, View, SafeAreaView, ScrollView, Image, Text } from 'react-native'
import CardNotifikasi from '../components/atoms/CardNotifikasi'
import { COLORS, IMAGES, horizontalScale, moderateScale, verticalScale } from '../constant'
import {useState} from 'react'

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
  if(DUMMY.length == 0) {
    return(
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={IMAGES.emptyNotifImg}  />
        <Text style={{ color: COLORS.textDark, fontFamily: 'Satoshi-Bold', fontSize: moderateScale(20), marginTop: verticalScale(32)}}>Notifikasi mu kosong nih...</Text>
        <Text style={{ color: COLORS.textDark, fontSize: moderateScale(16)}}>Tungguin kabar dari kami yaa!</Text>
      </SafeAreaView>
    )
  }
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
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import Styles from '../../styles/pageStyles/HomePage.styles'
import Header from '../../components/atoms/Header'
import { COLORS, ICONS, IMAGES, moderateScale, verticalScale } from '../../constant'
import HCarousel from '../../components/atoms/HCarousel'
import CardButton from '../../components/atoms/CardButton'
import NewsCard from '../../components/atoms/NewsCard'
import {useState} from 'react'
import CtaButton from '../../components/atoms/CtaButton'
import MyStatusbar from '../../components/atoms/MyStatusbar'
import { useNavigation } from '@react-navigation/native'

const DATA = [
  {
    id: 1,
    image: IMAGES.homeImg1,
  },
  {
    id: 2,
    image: IMAGES.homeImg2,
  },
  {
    id: 3,
    image: IMAGES.homeImg3,
  },
]

const HomePage = () => {
  const navigation = useNavigation()
  const [beasiswaActive, setBeasiswaActive] = useState(true)
  const [newsActive, setNewsActive] = useState(false)

  const ActiveComponent = () => {
    if(newsActive) {
      return(
        <View style={Styles.newsCardContainer}>
          <NewsCard action={() => navigation.navigate('NewsStack', {screen: 'NewsPage'})} image={IMAGES.newsImg1} title='Berita sekolah edulinks' description='Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih ...' date='10 Agustus 2023' />
          <NewsCard action={() => navigation.navigate('NewsStack', {screen: 'NewsPage'})} image={IMAGES.newsImg1} title='Berita sekolah edulinks' description='Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih ...' date='10 Agustus 2023' />
          <NewsCard action={() => navigation.navigate('NewsStack', {screen: 'NewsPage'})} image={IMAGES.newsImg1} title='Berita sekolah edulinks' description='Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih ...' date='10 Agustus 2023' />
          <CtaButton action={() => navigation.navigate('NewsStack', {screen: 'ListNews'})} vPadding={verticalScale(12)} text='Lihat semua' background={COLORS.primary} borderRadius={12} fSize={moderateScale(16)} fFamily='Satoshi-Medium' />
        </View>
      )
    }
    return(
      <View style={Styles.newsCardContainer}>
        <NewsCard action={() => navigation.navigate('NewsStack', {screen: 'BeasiswaNews'})} image={IMAGES.beasiswaImg1} title='Beasiswa Paragon 2023' description='Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih ...' date='10 Agustus 2023' />
        <NewsCard action={() => navigation.navigate('NewsStack', {screen: 'BeasiswaNews'})} image={IMAGES.beasiswaImg1} title='Beasiswa Paragon 2023' description='Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih ...' date='10 Agustus 2023' />
        <NewsCard action={() => navigation.navigate('NewsStack', {screen: 'BeasiswaNews'})} image={IMAGES.beasiswaImg1} title='Beasiswa Paragon 2023' description='Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih ...' date='10 Agustus 2023' />
        <CtaButton action={() => navigation.navigate('NewsStack', {screen: 'ListBeasiswa'})} vPadding={verticalScale(12)} text='Lihat semua' background={COLORS.primary} borderRadius={12} fSize={moderateScale(16)} fFamily='Satoshi-Medium' />
      </View>
    )
  }

  return(
    <SafeAreaView style={Styles.container}>
    <MyStatusbar contentColor='dark-content' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={[Styles.circle, Styles.blue]} source={IMAGES.circleBlue} />
        <Image style={[Styles.circle, Styles.orange]} source={IMAGES.circleOrange} />
        <Header />
        <View style={{marginTop: verticalScale(10)}}>
          <HCarousel data={DATA} />
        </View>
        <View style={Styles.cardButtonContainer}>
          <CardButton icon={ICONS.absenIcon} text1='Absen' text2='Siswa' />
          <CardButton icon={ICONS.infoIcon} text1='Informasi' />
          <CardButton icon={ICONS.lowonganIcon} text1='Lowongan' text2='Pekerjaan' />
        </View>
        <View style={Styles.borderContainer}>
          <View style={Styles.border} />
        </View>
        <View style={Styles.newsContainer}>
          <View style={Styles.buttonContainer}>
            <TouchableOpacity style={Styles.buttonWrapper} onPress={() => {setBeasiswaActive(true); setNewsActive(false); console.log(`Beasiswa: ${beasiswaActive}`)}}>
              <Text style={Styles.buttonTitle}>Portal Beasiswa</Text>
              <View style={Styles.buttonUnderlineContainer}>
                <View style={[Styles.buttonUnderline, {backgroundColor: beasiswaActive ? COLORS.primary : COLORS.white}]} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonWrapper} onPress={() => {setBeasiswaActive(false); setNewsActive(true); console.log(`Beasiswa: ${beasiswaActive}`)}}>
              <Text style={Styles.buttonTitle}>News Sekolah</Text>
              <View style={Styles.buttonUnderlineContainer}>
                <View style={[Styles.buttonUnderline, {backgroundColor: newsActive ? COLORS.primary : COLORS.white}]} />
              </View>
            </TouchableOpacity>
          </View>
          <ActiveComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage
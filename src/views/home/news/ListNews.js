import { SafeAreaView, View } from 'react-native'
import NewsListLayout from '../../../components/layout/NewsListLayout'
import NewsCard from '../../../components/atoms/NewsCard'
import { IMAGES, verticalScale } from '../../../constant'

const DUMMY = [
  {
    id: 1,
    title: 'Program Merdeka',
    desc: 'belajar yang berorientasi pada siswa, perbedaan, keanekaragaman, lokalitas, dan kebebasan...',
    date: '10 Agustus 2023',
    img: IMAGES.newsImg1,
  },
  {
    id: 2,
    title: 'Program Merdeka',
    desc: 'belajar yang berorientasi pada siswa, perbedaan, keanekaragaman, lokalitas, dan kebebasan...',
    date: '10 Agustus 2023',
    img: IMAGES.newsImg1,
  },
  {
    id: 3,
    title: 'Program Merdeka',
    desc: 'belajar yang berorientasi pada siswa, perbedaan, keanekaragaman, lokalitas, dan kebebasan...',
    date: '10 Agustus 2023',
    img: IMAGES.newsImg1,
  },
  {
    id: 4,
    title: 'Program Merdeka',
    desc: 'belajar yang berorientasi pada siswa, perbedaan, keanekaragaman, lokalitas, dan kebebasan...',
    date: '10 Agustus 2023',
    img: IMAGES.newsImg1,
  },
  {
    id: 5,
    title: 'Program Merdeka',
    desc: 'belajar yang berorientasi pada siswa, perbedaan, keanekaragaman, lokalitas, dan kebebasan...',
    date: '10 Agustus 2023',
    img: IMAGES.newsImg1,
  },
  {
    id: 6,
    title: 'Program Merdeka',
    desc: 'belajar yang berorientasi pada siswa, perbedaan, keanekaragaman, lokalitas, dan kebebasan...',
    date: '10 Agustus 2023',
    img: IMAGES.newsImg1,
  },
]

const ListNews = () => {
  return(
    <SafeAreaView>
      <NewsListLayout title='News Sekolah' data={DUMMY} renderItem={({item}) => <NewsCard action={() => navigation.navigate('NewsStack', {screen: 'NewsPage'})} image={item.img} date={item.date} description={item.desc} title={item.title} />} />
    </SafeAreaView>
  )
}

export default ListNews
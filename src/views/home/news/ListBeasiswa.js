import { SafeAreaView, View } from 'react-native'
import NewsListLayout from '../../../components/layout/NewsListLayout'
import NewsCard from '../../../components/atoms/NewsCard'
import { IMAGES, verticalScale } from '../../../constant'
import { useNavigation } from '@react-navigation/native'

const DUMMY = [
  {
    id: 1,
    title: 'Beasiswa Paragon 2023',
    desc: 'Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih ...',
    date: '10 Agustus 2023',
    img: IMAGES.beasiswaImg1,
  },
  {
    id: 2,
    title: 'Beasiswa Paragon 2023',
    desc: 'Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih ...',
    date: '10 Agustus 2023',
    img: IMAGES.beasiswaImg1,
  },
  {
    id: 3,
    title: 'Beasiswa Paragon 2023',
    desc: 'Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih ...',
    date: '10 Agustus 2023',
    img: IMAGES.beasiswaImg1,
  },
  {
    id: 4,
    title: 'Beasiswa Paragon 2023',
    desc: 'Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih ...',
    date: '10 Agustus 2023',
    img: IMAGES.beasiswaImg1,
  },
  {
    id: 5,
    title: 'Beasiswa Paragon 2023',
    desc: 'Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih ...',
    date: '10 Agustus 2023',
    img: IMAGES.beasiswaImg1,
  },
  {
    id: 6,
    title: 'Beasiswa Paragon 2023',
    desc: 'Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih ...',
    date: '10 Agustus 2023',
    img: IMAGES.beasiswaImg1,
  },
]

const ListBeasiswa = () => {
  const navigation = useNavigation()
  return(
    <SafeAreaView>
      <NewsListLayout title='Beasiswa' data={DUMMY} renderItem={({item}) => <NewsCard action={() => navigation.navigate('NewsStack', {screen: 'BeasiswaNews'})} image={item.img} date={item.date} description={item.desc} title={item.title} />} />
    </SafeAreaView>
  )
}

export default ListBeasiswa
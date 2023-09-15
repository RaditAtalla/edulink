import { SafeAreaView } from 'react-native'
import NewsDetailLayout from '../../../components/layout/NewsDetailLayout'
import { IMAGES } from '../../../constant'

const DUMMY = [
  {
    id: 1,
    image: IMAGES.beasiswaImg1,
    title: 'Beasiswa Paragon 2023',
    author: 'Admin',
    date: '12 Agustus 2023',
    content: `Deadline: 11 Agustus 2023

    Beasiswa ini dibuka bagi mahasiswa D3 yang akan masuk semester 3 atau mahasiswa D4/S1 semester 5 per Agustus 2023 dari salah satu kampus terpilih dengan IPK minimal 3,0.
    
    Komponen Beasiswa:
    - Tunjangan per semester hingga tahun ke-4
    - Program pengembangan & jejaring penerima beasiswa
    - Community Project
    - Peluang kerja di ParagonCorp
    
    Daftar Kampus Kerja Sama Beasiswa Paragon
    
    - Universitas Gadjah Mada
    - Universitas Indonesia
    - Institut Teknologi Bandung
    - Universitas Padjajaran
    - Universitas Diponegoro
    - Institut Pertanian Bogor
    - Universitas Brawijaya
    - Institut Teknologi Sepuluh Nopember
    - Telkom University
    - Universitas Sultan Ageng Tirtayasa
    - Universitas Andalas
    - Politeknik Negeri Bandung
    - Universitas Sumatera Utara
    - Universitas Sebelas Maret
    - Universitas Airlangga
    
    Info selengkapnya: https://docs.google.com/presentation/d/1BDf6_cUiadfgI0eY3ygS6ga7td56wcMCt5iCVCimiQM/edit href="/search?q=%23slide">#slide=id.gbc8eac13b3_0_0
    
    Form Registrasi: https://docs.google.com/forms/d/e/1FAIpQLSeiBgb8XabjWw1x_-0gzBdrvFjOPnD5pC3PVeRxwTfZfR_S5A/viewform`
  },
]

const BeasiswaPage = () => {
  return(
    <SafeAreaView>
      <NewsDetailLayout data={DUMMY[0]} />
    </SafeAreaView>
  )
}

export default BeasiswaPage
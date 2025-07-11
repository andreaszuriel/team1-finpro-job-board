import { CityType } from '@prisma/client';

interface CityData {
  name: string;
  type: CityType;
  latitude?: number;
  longitude?: number;
}

interface ProvinceData {
  name: string;
  code: string;
  latitude?: number;
  longitude?: number;
  cities: CityData[];
}

export const indonesianLocations: ProvinceData[] = [
  {
    name: 'DKI Jakarta',
    code: 'DKI',
    latitude: -6.2088,
    longitude: 106.8456,
    cities: [
      { name: 'Jakarta Pusat', type: 'CITY', latitude: -6.1805, longitude: 106.8284 },
      { name: 'Jakarta Utara', type: 'CITY', latitude: -6.1478, longitude: 106.8997 },
      { name: 'Jakarta Barat', type: 'CITY', latitude: -6.1352, longitude: 106.8133 },
      { name: 'Jakarta Selatan', type: 'CITY', latitude: -6.2615, longitude: 106.8106 },
      { name: 'Jakarta Timur', type: 'CITY', latitude: -6.2250, longitude: 106.9004 },
      { name: 'Kepulauan Seribu', type: 'REGENCY', latitude: -5.6112, longitude: 106.5247 },
    ],
  },
  {
    name: 'Jawa Barat',
    code: 'JABAR',
    latitude: -6.9175,
    longitude: 107.6191,
    cities: [
      { name: 'Bandung', type: 'CITY', latitude: -6.9175, longitude: 107.6191 },
      { name: 'Bekasi', type: 'CITY', latitude: -6.2349, longitude: 107.0094 },
      { name: 'Bogor', type: 'CITY', latitude: -6.5971, longitude: 106.8060 },
      { name: 'Cirebon', type: 'CITY', latitude: -6.7063, longitude: 108.5571 },
      { name: 'Depok', type: 'CITY', latitude: -6.4025, longitude: 106.7942 },
      { name: 'Sukabumi', type: 'CITY', latitude: -6.9271, longitude: 106.9296 },
      { name: 'Tasikmalaya', type: 'CITY', latitude: -7.3274, longitude: 108.2207 },
      { name: 'Cimahi', type: 'CITY', latitude: -6.8725, longitude: 107.5361 },
      { name: 'Banjar', type: 'CITY', latitude: -7.3553, longitude: 108.5492 },
      { name: 'Kabupaten Bandung', type: 'REGENCY', latitude: -7.0051, longitude: 107.5587 },
      { name: 'Kabupaten Bandung Barat', type: 'REGENCY', latitude: -6.8615, longitude: 107.4962 },
      { name: 'Kabupaten Bekasi', type: 'REGENCY', latitude: -6.2381, longitude: 107.1349 },
      { name: 'Kabupaten Bogor', type: 'REGENCY', latitude: -6.5589, longitude: 106.7767 },
      { name: 'Kabupaten Cianjur', type: 'REGENCY', latitude: -6.8168, longitude: 107.1426 },
      { name: 'Kabupaten Cirebon', type: 'REGENCY', latitude: -6.7767, longitude: 108.4815 },
      { name: 'Kabupaten Garut', type: 'REGENCY', latitude: -7.2253, longitude: 107.8992 },
      { name: 'Kabupaten Indramayu', type: 'REGENCY', latitude: -6.3264, longitude: 108.3200 },
      { name: 'Kabupaten Karawang', type: 'REGENCY', latitude: -6.3067, longitude: 107.3372 },
      { name: 'Kabupaten Kuningan', type: 'REGENCY', latitude: -6.9759, longitude: 108.4836 },
      { name: 'Kabupaten Majalengka', type: 'REGENCY', latitude: -6.8362, longitude: 108.2274 },
      { name: 'Kabupaten Pangandaran', type: 'REGENCY', latitude: -7.6867, longitude: 108.6500 },
      { name: 'Kabupaten Purwakarta', type: 'REGENCY', latitude: -6.5569, longitude: 107.4431 },
      { name: 'Kabupaten Subang', type: 'REGENCY', latitude: -6.5693, longitude: 107.7607 },
      { name: 'Kabupaten Sukabumi', type: 'REGENCY', latitude: -6.8719, longitude: 106.8916 },
      { name: 'Kabupaten Sumedang', type: 'REGENCY', latitude: -6.8595, longitude: 107.9239 },
      { name: 'Kabupaten Tasikmalaya', type: 'REGENCY', latitude: -7.4674, longitude: 108.1309 },
    ],
  },
  {
    name: 'Jawa Tengah',
    code: 'JATENG',
    latitude: -7.1501,
    longitude: 110.1405,
    cities: [
      { name: 'Semarang', type: 'CITY', latitude: -6.9667, longitude: 110.4167 },
      { name: 'Surakarta', type: 'CITY', latitude: -7.5755, longitude: 110.8243 },
      { name: 'Salatiga', type: 'CITY', latitude: -7.3318, longitude: 110.4924 },
      { name: 'Magelang', type: 'CITY', latitude: -7.4698, longitude: 110.2177 },
      { name: 'Pekalongan', type: 'CITY', latitude: -6.8886, longitude: 109.6753 },
      { name: 'Tegal', type: 'CITY', latitude: -6.8694, longitude: 109.1402 },
      { name: 'Kabupaten Banjarnegara', type: 'REGENCY', latitude: -7.3049, longitude: 109.6874 },
      { name: 'Kabupaten Banyumas', type: 'REGENCY', latitude: -7.5186, longitude: 109.2947 },
      { name: 'Kabupaten Batang', type: 'REGENCY', latitude: -6.9115, longitude: 109.7379 },
      { name: 'Kabupaten Blora', type: 'REGENCY', latitude: -6.9695, longitude: 111.4194 },
      { name: 'Kabupaten Boyolali', type: 'REGENCY', latitude: -7.5322, longitude: 110.5955 },
      { name: 'Kabupaten Brebes', type: 'REGENCY', latitude: -6.8731, longitude: 109.0324 },
      { name: 'Kabupaten Cilacap', type: 'REGENCY', latitude: -7.7326, longitude: 109.0093 },
      { name: 'Kabupaten Demak', type: 'REGENCY', latitude: -6.8909, longitude: 110.6396 },
      { name: 'Kabupaten Grobogan', type: 'REGENCY', latitude: -7.0584, longitude: 110.9158 },
      { name: 'Kabupaten Jepara', type: 'REGENCY', latitude: -6.5934, longitude: 110.6687 },
      { name: 'Kabupaten Karanganyar', type: 'REGENCY', latitude: -7.6018, longitude: 111.0381 },
      { name: 'Kabupaten Kebumen', type: 'REGENCY', latitude: -7.6707, longitude: 109.6544 },
      { name: 'Kabupaten Kendal', type: 'REGENCY', latitude: -6.9264, longitude: 110.2037 },
      { name: 'Kabupaten Klaten', type: 'REGENCY', latitude: -7.7058, longitude: 110.6061 },
      { name: 'Kabupaten Kudus', type: 'REGENCY', latitude: -6.8048, longitude: 110.8405 },
      { name: 'Kabupaten Magelang', type: 'REGENCY', latitude: -7.4780, longitude: 110.1970 },
      { name: 'Kabupaten Pati', type: 'REGENCY', latitude: -6.7554, longitude: 111.0378 },
      { name: 'Kabupaten Pekalongan', type: 'REGENCY', latitude: -7.1050, longitude: 109.7853 },
      { name: 'Kabupaten Pemalang', type: 'REGENCY', latitude: -6.8981, longitude: 109.3781 },
      { name: 'Kabupaten Purbalingga', type: 'REGENCY', latitude: -7.3881, longitude: 109.3668 },
      { name: 'Kabupaten Purworejo', type: 'REGENCY', latitude: -7.7210, longitude: 110.0081 },
      { name: 'Kabupaten Rembang', type: 'REGENCY', latitude: -6.7089, longitude: 111.3429 },
      { name: 'Kabupaten Semarang', type: 'REGENCY', latitude: -7.0610, longitude: 110.3294 },
      { name: 'Kabupaten Sragen', type: 'REGENCY', latitude: -7.4246, longitude: 111.0055 },
      { name: 'Kabupaten Sukoharjo', type: 'REGENCY', latitude: -7.6810, longitude: 110.8342 },
      { name: 'Kabupaten Tegal', type: 'REGENCY', latitude: -6.9686, longitude: 109.1175 },
      { name: 'Kabupaten Temanggung', type: 'REGENCY', latitude: -7.3167, longitude: 110.1717 },
      { name: 'Kabupaten Wonogiri', type: 'REGENCY', latitude: -7.8142, longitude: 110.9262 },
      { name: 'Kabupaten Wonosobo', type: 'REGENCY', latitude: -7.3608, longitude: 109.9003 },
    ],
  },
  {
    name: 'DI Yogyakarta',
    code: 'DIY',
    latitude: -7.8014,
    longitude: 110.3644,
    cities: [
      { name: 'Yogyakarta', type: 'CITY', latitude: -7.7956, longitude: 110.3695 },
      { name: 'Kabupaten Bantul', type: 'REGENCY', latitude: -7.8753, longitude: 110.3261 },
      { name: 'Kabupaten Gunungkidul', type: 'REGENCY', latitude: -7.9747, longitude: 110.5993 },
      { name: 'Kabupaten Kulon Progo', type: 'REGENCY', latitude: -7.8264, longitude: 110.1604 },
      { name: 'Kabupaten Sleman', type: 'REGENCY', latitude: -7.7155, longitude: 110.3518 },
    ],
  },
  {
    name: 'Jawa Timur',
    code: 'JATIM',
    latitude: -7.5360,
    longitude: 112.2384,
    cities: [
      { name: 'Surabaya', type: 'CITY', latitude: -7.2504, longitude: 112.7688 },
      { name: 'Malang', type: 'CITY', latitude: -7.9797, longitude: 112.6304 },
      { name: 'Kediri', type: 'CITY', latitude: -7.8181, longitude: 112.0178 },
      { name: 'Blitar', type: 'CITY', latitude: -8.0953, longitude: 112.1609 },
      { name: 'Mojokerto', type: 'CITY', latitude: -7.4664, longitude: 112.4336 },
      { name: 'Madiun', type: 'CITY', latitude: -7.6298, longitude: 111.5239 },
      { name: 'Pasuruan', type: 'CITY', latitude: -7.6453, longitude: 112.9075 },
      { name: 'Probolinggo', type: 'CITY', latitude: -7.7543, longitude: 113.2159 },
      { name: 'Batu', type: 'CITY', latitude: -7.8499, longitude: 112.5284 },
      // Adding some major regencies
      { name: 'Kabupaten Malang', type: 'REGENCY', latitude: -8.1335, longitude: 112.7006 },
      { name: 'Kabupaten Jember', type: 'REGENCY', latitude: -8.1844, longitude: 113.7368 },
      { name: 'Kabupaten Sidoarjo', type: 'REGENCY', latitude: -7.4378, longitude: 112.7178 },
      { name: 'Kabupaten Gresik', type: 'REGENCY', latitude: -7.1554, longitude: 112.6540 },
      { name: 'Kabupaten Banyuwangi', type: 'REGENCY', latitude: -8.3775, longitude: 114.1540 },
    ],
  },
  {
    name: 'Banten',
    code: 'BANTEN',
    latitude: -6.4058,
    longitude: 106.0640,
    cities: [
      { name: 'Serang', type: 'CITY', latitude: -6.1200, longitude: 106.1500 },
      { name: 'Cilegon', type: 'CITY', latitude: -6.0025, longitude: 106.0308 },
      { name: 'Tangerang', type: 'CITY', latitude: -6.1783, longitude: 106.6319 },
      { name: 'Tangerang Selatan', type: 'CITY', latitude: -6.2884, longitude: 106.7183 },
      { name: 'Kabupaten Tangerang', type: 'REGENCY', latitude: -6.1971, longitude: 106.5405 },
      { name: 'Kabupaten Serang', type: 'REGENCY', latitude: -6.3000, longitude: 106.2500 },
      { name: 'Kabupaten Lebak', type: 'REGENCY', latitude: -6.5644, longitude: 106.2522 },
      { name: 'Kabupaten Pandeglang', type: 'REGENCY', latitude: -6.3084, longitude: 106.1067 },
    ],
  },
  {
    name: 'Bali',
    code: 'BALI',
    latitude: -8.4095,
    longitude: 115.1889,
    cities: [
      { name: 'Denpasar', type: 'CITY', latitude: -8.6705, longitude: 115.2126 },
      { name: 'Kabupaten Badung', type: 'REGENCY', latitude: -8.5506, longitude: 115.1775 },
      { name: 'Kabupaten Gianyar', type: 'REGENCY', latitude: -8.5421, longitude: 115.3275 },
      { name: 'Kabupaten Tabanan', type: 'REGENCY', latitude: -8.5384, longitude: 115.1199 },
      { name: 'Kabupaten Klungkung', type: 'REGENCY', latitude: -8.5421, longitude: 115.4048 },
      { name: 'Kabupaten Bangli', type: 'REGENCY', latitude: -8.2967, longitude: 115.3547 },
      { name: 'Kabupaten Karangasem', type: 'REGENCY', latitude: -8.4421, longitude: 115.6048 },
      { name: 'Kabupaten Buleleng', type: 'REGENCY', latitude: -8.1132, longitude: 115.0920 },
      { name: 'Kabupaten Jembrana', type: 'REGENCY', latitude: -8.3549, longitude: 114.6719 },
    ],
  },
  {
    name: 'Sumatera Utara',
    code: 'SUMUT',
    latitude: 2.1154,
    longitude: 99.5451,
    cities: [
      { name: 'Medan', type: 'CITY', latitude: 3.5952, longitude: 98.6722 },
      { name: 'Binjai', type: 'CITY', latitude: 3.6001, longitude: 98.4854 },
      { name: 'Tebing Tinggi', type: 'CITY', latitude: 3.3276, longitude: 99.1625 },
      { name: 'Pematangsiantar', type: 'CITY', latitude: 2.9595, longitude: 99.0687 },
      { name: 'Tanjungbalai', type: 'CITY', latitude: 2.9667, longitude: 99.8000 },
      { name: 'Sibolga', type: 'CITY', latitude: 1.7427, longitude: 98.7792 },
      { name: 'Padang Sidempuan', type: 'CITY', latitude: 1.3721, longitude: 99.2721 },
      { name: 'Gunungsitoli', type: 'CITY', latitude: 1.2881, longitude: 97.6117 },
      // Adding some major regencies
      { name: 'Kabupaten Deli Serdang', type: 'REGENCY', latitude: 3.4313, longitude: 98.6755 },
      { name: 'Kabupaten Langkat', type: 'REGENCY', latitude: 3.7833, longitude: 98.2500 },
      { name: 'Kabupaten Karo', type: 'REGENCY', latitude: 3.1333, longitude: 98.5000 },
    ],
  },
  {
    name: 'Sumatera Barat',
    code: 'SUMBAR',
    latitude: -0.7399,
    longitude: 100.8000,
    cities: [
      { name: 'Padang', type: 'CITY', latitude: -0.9471, longitude: 100.4172 },
      { name: 'Bukittinggi', type: 'CITY', latitude: -0.3073, longitude: 100.3691 },
      { name: 'Padangpanjang', type: 'CITY', latitude: -0.4667, longitude: 100.4000 },
      { name: 'Payakumbuh', type: 'CITY', latitude: -0.2167, longitude: 100.6333 },
      { name: 'Sawahlunto', type: 'CITY', latitude: -0.6819, longitude: 100.7803 },
      { name: 'Solok', type: 'CITY', latitude: -0.7917, longitude: 100.6583 },
      { name: 'Pariaman', type: 'CITY', latitude: -0.6189, longitude: 100.1203 },
      // Major regencies
      { name: 'Kabupaten Agam', type: 'REGENCY', latitude: -0.2500, longitude: 100.3167 },
      { name: 'Kabupaten Lima Puluh Kota', type: 'REGENCY', latitude: -0.0167, longitude: 100.5167 },
    ],
  },
  {
    name: 'Riau',
    code: 'RIAU',
    latitude: 0.2933,
    longitude: 101.7068,
    cities: [
      { name: 'Pekanbaru', type: 'CITY', latitude: 0.5333, longitude: 101.4500 },
      { name: 'Dumai', type: 'CITY', latitude: 1.6667, longitude: 101.4500 },
      { name: 'Kabupaten Kampar', type: 'REGENCY', latitude: 0.3274, longitude: 101.1426 },
      { name: 'Kabupaten Rokan Hulu', type: 'REGENCY', latitude: 0.8667, longitude: 100.4667 },
      { name: 'Kabupaten Bengkalis', type: 'REGENCY', latitude: 1.4667, longitude: 101.4667 },
    ],
  },
  {
    name: 'Kepulauan Riau',
    code: 'KEPRI',
    latitude: 1.1456,
    longitude: 104.0305,
    cities: [
      { name: 'Batam', type: 'CITY', latitude: 1.1456, longitude: 104.0305 },
      { name: 'Tanjungpinang', type: 'CITY', latitude: 0.9167, longitude: 104.4500 },
      { name: 'Kabupaten Bintan', type: 'REGENCY', latitude: 1.1500, longitude: 104.3500 },
      { name: 'Kabupaten Karimun', type: 'REGENCY', latitude: 1.0500, longitude: 103.4167 },
      { name: 'Kabupaten Lingga', type: 'REGENCY', latitude: -0.2000, longitude: 104.6167 },
    ],
  },
  {
    name: 'Jambi',
    code: 'JAMBI',
    latitude: -1.6101,
    longitude: 103.6131,
    cities: [
      { name: 'Jambi', type: 'CITY', latitude: -1.6101, longitude: 103.6131 },
      { name: 'Sungai Penuh', type: 'CITY', latitude: -2.0833, longitude: 101.3833 },
      { name: 'Kabupaten Batanghari', type: 'REGENCY', latitude: -1.7500, longitude: 103.1167 },
      { name: 'Kabupaten Muaro Jambi', type: 'REGENCY', latitude: -1.4833, longitude: 103.8833 },
    ],
  },
  {
    name: 'Sumatera Selatan',
    code: 'SUMSEL',
    latitude: -3.3194,
    longitude: 104.9145,
    cities: [
      { name: 'Palembang', type: 'CITY', latitude: -2.9761, longitude: 104.7754 },
      { name: 'Prabumulih', type: 'CITY', latitude: -3.4333, longitude: 104.2333 },
      { name: 'Pagar Alam', type: 'CITY', latitude: -4.0167, longitude: 103.2667 },
      { name: 'Lubuklinggau', type: 'CITY', latitude: -3.3000, longitude: 102.8667 },
      { name: 'Kabupaten Ogan Komering Ulu', type: 'REGENCY', latitude: -4.0833, longitude: 103.7500 },
    ],
  },
  {
    name: 'Bengkulu',
    code: 'BENGKULU',
    latitude: -3.8004,
    longitude: 102.2655,
    cities: [
      { name: 'Bengkulu', type: 'CITY', latitude: -3.8004, longitude: 102.2655 },
      { name: 'Kabupaten Bengkulu Utara', type: 'REGENCY', latitude: -3.5000, longitude: 102.0833 },
      { name: 'Kabupaten Rejang Lebong', type: 'REGENCY', latitude: -3.4333, longitude: 102.7167 },
    ],
  },
  {
    name: 'Lampung',
    code: 'LAMPUNG',
    latitude: -4.5585,
    longitude: 105.4068,
    cities: [
      { name: 'Bandar Lampung', type: 'CITY', latitude: -5.4292, longitude: 105.2581 },
      { name: 'Metro', type: 'CITY', latitude: -5.1133, longitude: 105.3067 },
      { name: 'Kabupaten Lampung Selatan', type: 'REGENCY', latitude: -5.6167, longitude: 105.5000 },
      { name: 'Kabupaten Lampung Tengah', type: 'REGENCY', latitude: -4.8500, longitude: 105.2833 },
      { name: 'Kabupaten Lampung Utara', type: 'REGENCY', latitude: -4.1667, longitude: 104.7500 },
    ],
  },
  {
    name: 'Kalimantan Barat',
    code: 'KALBAR',
    latitude: -0.0263,
    longitude: 109.3425,
    cities: [
      { name: 'Pontianak', type: 'CITY', latitude: -0.0263, longitude: 109.3425 },
      { name: 'Singkawang', type: 'CITY', latitude: 0.9063, longitude: 108.9896 },
      { name: 'Kabupaten Kubu Raya', type: 'REGENCY', latitude: -0.1167, longitude: 109.4167 },
      { name: 'Kabupaten Sambas', type: 'REGENCY', latitude: 1.3667, longitude: 109.3000 },
      { name: 'Kabupaten Ketapang', type: 'REGENCY', latitude: -1.8500, longitude: 110.0000 },
    ],
  },
  {
    name: 'Kalimantan Tengah',
    code: 'KALTENG',
    latitude: -1.6815,
    longitude: 113.3824,
    cities: [
      { name: 'Palangka Raya', type: 'CITY', latitude: -2.2069, longitude: 113.9165 },
      { name: 'Kabupaten Kotawaringin Barat', type: 'REGENCY', latitude: -2.6833, longitude: 111.6167 },
      { name: 'Kabupaten Barito Selatan', type: 'REGENCY', latitude: -2.3833, longitude: 114.7500 },
    ],
  },
  {
    name: 'Kalimantan Selatan',
    code: 'KALSEL',
    latitude: -3.0926,
    longitude: 115.2838,
    cities: [
      { name: 'Banjarmasin', type: 'CITY', latitude: -3.3194, longitude: 114.5908 },
      { name: 'Banjarbaru', type: 'CITY', latitude: -3.4583, longitude: 114.8406 },
      { name: 'Kabupaten Banjar', type: 'REGENCY', latitude: -3.3167, longitude: 114.8333 },
      { name: 'Kabupaten Barito Kuala', type: 'REGENCY', latitude: -3.1000, longitude: 114.6167 },
    ],
  },
  {
    name: 'Kalimantan Timur',
    code: 'KALTIM',
    latitude: 1.6406,
    longitude: 116.4194,
    cities: [
      { name: 'Samarinda', type: 'CITY', latitude: -0.5017, longitude: 117.1536 },
      { name: 'Balikpapan', type: 'CITY', latitude: -1.2379, longitude: 116.8529 },
      { name: 'Bontang', type: 'CITY', latitude: 0.1333, longitude: 117.5000 },
      { name: 'Kabupaten Kutai Kartanegara', type: 'REGENCY', latitude: -0.5000, longitude: 116.8333 },
      { name: 'Kabupaten Berau', type: 'REGENCY', latitude: 2.0000, longitude: 117.5000 },
    ],
  },
  {
    name: 'Kalimantan Utara',
    code: 'KALUT',
    latitude: 3.0731,
    longitude: 116.0413,
    cities: [
      { name: 'Tarakan', type: 'CITY', latitude: 3.3000, longitude: 117.6333 },
      { name: 'Kabupaten Malinau', type: 'REGENCY', latitude: 3.6000, longitude: 116.0000 },
      { name: 'Kabupaten Nunukan', type: 'REGENCY', latitude: 4.0833, longitude: 117.0833 },
      { name: 'Kabupaten Bulungan', type: 'REGENCY', latitude: 3.0000, longitude: 117.0000 },
    ],
  },
  {
    name: 'Sulawesi Utara',
    code: 'SULUT',
    latitude: 1.4748,
    longitude: 124.8421,
    cities: [
      { name: 'Manado', type: 'CITY', latitude: 1.4748, longitude: 124.8421 },
      { name: 'Bitung', type: 'CITY', latitude: 1.4430, longitude: 125.1825 },
      { name: 'Tomohon', type: 'CITY', latitude: 1.3333, longitude: 124.8333 },
      { name: 'Kotamobagu', type: 'CITY', latitude: 0.7333, longitude: 124.3167 },
      { name: 'Kabupaten Minahasa', type: 'REGENCY', latitude: 1.3000, longitude: 124.9000 },
    ],
  },
  {
    name: 'Sulawesi Tengah',
    code: 'SULTENG',
    latitude: -1.4300,
    longitude: 121.4456,
    cities: [
      { name: 'Palu', type: 'CITY', latitude: -0.8917, longitude: 119.8707 },
      { name: 'Kabupaten Donggala', type: 'REGENCY', latitude: -0.4167, longitude: 119.7500 },
      { name: 'Kabupaten Parigi Moutong', type: 'REGENCY', latitude: -0.6333, longitude: 120.4333 },
    ],
  },
  {
    name: 'Sulawesi Selatan',
    code: 'SULSEL',
    latitude: -3.6687,
    longitude: 119.9740,
    cities: [
      { name: 'Makassar', type: 'CITY', latitude: -5.1477, longitude: 119.4327 },
      { name: 'Pare-Pare', type: 'CITY', latitude: -4.0167, longitude: 119.6333 },
      { name: 'Palopo', type: 'CITY', latitude: -2.9833, longitude: 120.2000 },
      { name: 'Kabupaten Gowa', type: 'REGENCY', latitude: -5.3000, longitude: 119.7667 },
      { name: 'Kabupaten Bone', type: 'REGENCY', latitude: -4.7500, longitude: 120.2500 },
    ],
  },
  {
    name: 'Sulawesi Tenggara',
    code: 'SULTRA',
    latitude: -4.1487,
    longitude: 122.1750,
    cities: [
      { name: 'Kendari', type: 'CITY', latitude: -3.9450, longitude: 122.5986 },
      { name: 'Baubau', type: 'CITY', latitude: -5.4667, longitude: 122.6000 },
      { name: 'Kabupaten Konawe', type: 'REGENCY', latitude: -4.1500, longitude: 122.2500 },
    ],
  },
  {
    name: 'Gorontalo',
    code: 'GORONTALO',
    latitude: 0.6999,
    longitude: 122.4467,
    cities: [
      { name: 'Gorontalo', type: 'CITY', latitude: 0.5435, longitude: 123.0682 },
      { name: 'Kabupaten Gorontalo', type: 'REGENCY', latitude: 0.6333, longitude: 123.0333 },
    ],
  },
  {
    name: 'Sulawesi Barat',
    code: 'SULBAR',
    latitude: -2.8441,
    longitude: 119.2320,
    cities: [
      { name: 'Mamuju', type: 'CITY', latitude: -2.6794, longitude: 118.8868 },
      { name: 'Kabupaten Mamuju', type: 'REGENCY', latitude: -2.5500, longitude: 119.0000 },
    ],
  },
  {
    name: 'Nusa Tenggara Barat',
    code: 'NTB',
    latitude: -8.6529,
    longitude: 117.3616,
    cities: [
      { name: 'Mataram', type: 'CITY', latitude: -8.5833, longitude: 116.1167 },
      { name: 'Bima', type: 'CITY', latitude: -8.4667, longitude: 118.7167 },
      { name: 'Kabupaten Lombok Barat', type: 'REGENCY', latitude: -8.6500, longitude: 116.1167 },
      { name: 'Kabupaten Lombok Tengah', type: 'REGENCY', latitude: -8.7000, longitude: 116.2667 },
      { name: 'Kabupaten Sumbawa', type: 'REGENCY', latitude: -8.4833, longitude: 117.4167 },
    ],
  },
  {
    name: 'Nusa Tenggara Timur',
    code: 'NTT',
    latitude: -8.6574,
    longitude: 121.0794,
    cities: [
      { name: 'Kupang', type: 'CITY', latitude: -10.1718, longitude: 123.6075 },
      { name: 'Kabupaten Timor Tengah Selatan', type: 'REGENCY', latitude: -9.6333, longitude: 124.2000 },
      { name: 'Kabupaten Ende', type: 'REGENCY', latitude: -8.8500, longitude: 121.6667 },
      { name: 'Kabupaten Manggarai', type: 'REGENCY', latitude: -8.6000, longitude: 120.4500 },
    ],
  },
  {
    name: 'Maluku',
    code: 'MALUKU',
    latitude: -3.2385,
    longitude: 130.1453,
    cities: [
      { name: 'Ambon', type: 'CITY', latitude: -3.6954, longitude: 128.1814 },
      { name: 'Tual', type: 'CITY', latitude: -5.6667, longitude: 132.7500 },
      { name: 'Kabupaten Maluku Tengah', type: 'REGENCY', latitude: -3.2167, longitude: 129.5000 },
      { name: 'Kabupaten Buru', type: 'REGENCY', latitude: -3.3833, longitude: 126.6833 },
    ],
  },
  {
    name: 'Maluku Utara',
    code: 'MALUT',
    latitude: 1.5709,
    longitude: 127.8081,
    cities: [
      { name: 'Ternate', type: 'CITY', latitude: 0.7833, longitude: 127.3833 },
      { name: 'Tidore Kepulauan', type: 'CITY', latitude: 0.6833, longitude: 127.4000 },
      { name: 'Kabupaten Halmahera Utara', type: 'REGENCY', latitude: 1.6000, longitude: 127.8000 },
    ],
  },
  {
    name: 'Papua Barat',
    code: 'PAPBAR',
    latitude: -1.3361,
    longitude: 133.1747,
    cities: [
      { name: 'Manokwari', type: 'CITY', latitude: -0.8667, longitude: 134.0833 },
      { name: 'Sorong', type: 'CITY', latitude: -0.8833, longitude: 131.2500 },
      { name: 'Kabupaten Fakfak', type: 'REGENCY', latitude: -2.9167, longitude: 132.3000 },
    ],
  },
  {
    name: 'Papua',
    code: 'PAPUA',
    latitude: -4.2699,
    longitude: 138.0804,
    cities: [
      { name: 'Jayapura', type: 'CITY', latitude: -2.5333, longitude: 140.7167 },
      { name: 'Kabupaten Jayapura', type: 'REGENCY', latitude: -2.6500, longitude: 140.4500 },
      { name: 'Kabupaten Merauke', type: 'REGENCY', latitude: -8.4833, longitude: 140.4000 },
      { name: 'Kabupaten Mimika', type: 'REGENCY', latitude: -4.5333, longitude: 136.5500 },
    ],
  },
  {
    name: 'Aceh',
    code: 'ACEH',
    latitude: 4.6951,
    longitude: 96.7494,
    cities: [
      { name: 'Banda Aceh', type: 'CITY', latitude: 5.5577, longitude: 95.3222 },
      { name: 'Langsa', type: 'CITY', latitude: 4.4683, longitude: 97.9683 },
      { name: 'Lhokseumawe', type: 'CITY', latitude: 5.1801, longitude: 97.1507 },
      { name: 'Sabang', type: 'CITY', latitude: 5.8667, longitude: 95.3167 },
      { name: 'Subulussalam', type: 'CITY', latitude: 2.6833, longitude: 98.0000 },
      { name: 'Kabupaten Aceh Besar', type: 'REGENCY', latitude: 5.3500, longitude: 95.6000 },
      { name: 'Kabupaten Pidie', type: 'REGENCY', latitude: 5.1333, longitude: 96.1333 },
    ],
  },
];    

 
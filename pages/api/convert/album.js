// https://codingbeautydev.com/blog/javascript-convert-csv-to-json/
import csvToJson from 'csvtojson';

const csv = `id,created_at,name,cover,updated_at,artists_id
1,2022-12-22 13:41:57.364685+00,Bintang di Surga,https://i.scdn.co/image/ab67616d00001e02af69d9e82cc973f608481610,2022-12-22 13:41:57.364685,1
2,2022-12-22 14:57:18.54569+00,Hari yang Cerah,https://i.scdn.co/image/ab67616d00001e02076747ead143aa3cd8c1d2f0,2022-12-22 14:57:18.54569,1
3,2022-12-22 14:57:57.39725+00,Taman Langit,https://i.scdn.co/image/ab67616d0000b27324496b7707e9304c4ad76c5a,2022-12-22 14:57:57.39725,1
4,2022-12-22 14:58:29.191501+00,Seperti Seharusnya,https://i.scdn.co/image/ab67616d00001e02f99e19baa3e57fd03b24ff5d,2022-12-22 14:58:29.191501,1
5,2022-12-22 15:00:16.44042+00,Keterkaitan Keterikatan,https://i.scdn.co/image/ab67616d00001e02d6342c75204c065e554ede10,2022-12-22 15:00:16.44042,1
6,2022-12-22 15:24:07.195656+00,Appetite for Destruction,https://i.scdn.co/image/ab67616d0000b27368384dd85fd5e95831252f60,2022-12-22 15:24:07.195656,2
7,2022-12-22 15:27:05.045204+00,Use Your Illusion I,https://i.scdn.co/image/ab67616d00001e022ab85e10aa698513679ff509,2022-12-22 15:27:05.045204,2
8,2022-12-22 15:29:23.751011+00,GNR Lies,https://i.scdn.co/image/ab67616d00001e02d2c9d673548c12ad1c32e38d,2022-12-22 15:29:23.751011,2
9,2022-12-22 15:35:31.495+00,A Head Full of Dreams,https://i.scdn.co/image/ab67616d00001e028ff7c3580d429c8212b9a3b6,2022-12-22 15:35:31.495,3
10,2022-12-22 15:39:21.799066+00,X&Y,https://i.scdn.co/image/ab67616d0000b2734e0362c225863f6ae2432651,2022-12-22 15:39:21.799066,3
11,2022-12-22 15:40:42.855691+00,Parachutes,https://i.scdn.co/image/ab67616d00001e023d92b2ad5af9fbc8637425f0,2022-12-22 15:40:42.855691,3
12,2022-12-22 15:41:49.31301+00,A Rush of Blood to the Head,https://i.scdn.co/image/ab67616d00001e02de09e02aa7febf30b7c02d82,2022-12-22 15:41:49.31301,3
13,2022-12-22 15:43:06.27926+00,Mylo Xyloto,https://i.scdn.co/image/ab67616d0000b273de0cd11d7b31c3bd1fd5983d,2022-12-22 15:43:06.27926,3
14,2023-01-04 06:09:57.829053+00,OST. Alexandria,https://i.scdn.co/image/ab67616d00001e02d945ace4a7fb61330e08a912,2023-01-04 06:09:57.829053,1
15,2023-01-04 06:17:21.673324+00,Second Chance,https://i.scdn.co/image/ab67616d0000b27391079d7ff840d5273aa2957d,2023-01-04 06:17:21.673324,1
16,2023-01-04 08:43:06.337416+00,Use Your Illusion II,https://i.scdn.co/image/ab67616d0000b27392d21aef6c0d288cc4c05973,2023-01-04 08:43:06.337416,2
17,2023-01-04 10:40:41.831992+00,Best of Kshmr,https://i.scdn.co/image/ab67616d00001e02da13398baef8f339131bbbac,2023-01-04 10:40:41.831992,4
18,2023-02-20 10:27:50.829704+00,Sheila On 7,https://i.scdn.co/image/ab67616d00001e0254270208627aa8061a8abe21,2023-02-20 10:27:50.829704,5
19,2023-02-20 10:45:55.808142+00,Kisah Klasik Untuk Masa Depan,https://i.scdn.co/image/ab67616d00001e02e8d4f0596d66ccbe5241918d,2023-02-20 10:45:55.808142,5
20,2023-02-20 10:53:14.493577+00,07 Des,https://i.scdn.co/image/ab67616d00001e0258961269cc5263913f9e0b40,2023-02-20 10:53:14.493577,5
21,2023-02-20 10:57:12.01655+00,Pejantan Tangguh,https://i.scdn.co/image/ab67616d00001e02f0a7efc94687cc049b821529,2023-02-20 10:57:12.01655,5
22,2023-02-20 11:00:58.159609+00,Menentukan Arah,https://i.scdn.co/image/ab67616d00001e025974be9bbf90d8f21af5515f,2023-02-20 11:00:58.159609,5
23,2023-02-20 11:04:12.696817+00,Berlayar,https://i.scdn.co/image/ab67616d00001e02505fb06705d4823830ce5055,2023-02-20 11:04:12.696817,5
24,2023-02-20 11:07:52.445543+00,Musim Yang Baik,https://i.scdn.co/image/ab67616d00001e02eb44a67b266f6987e21a4a9b,2023-02-20 11:07:52.445543,5
25,2023-02-20 11:11:11.795552+00,OST. 30 Hari Mencari Cinta,https://i.scdn.co/image/ab67616d00001e0298b7cd420705531db32b3aeb,2023-02-20 11:11:11.795552,5
26,2023-02-20 11:36:48.437077+00,Dewa 19,https://i.scdn.co/image/ab67616d00001e02d8fbd1079c6cfab4d4b70cea,2023-02-20 11:36:48.437077,6
27,2023-02-20 11:39:30.506061+00,Format Masa Depan,https://i.scdn.co/image/ab67616d00001e02bfc7fa507f4bc822cabe7bde,2023-02-20 11:39:30.506061,6
28,2023-02-20 11:42:59.504378+00,Terbaik Terbaik,https://i.scdn.co/image/dbb127abf2d9f53acf344c6461fb8ae23fdd1730,2023-02-20 11:42:59.504378,6
29,2023-02-20 11:46:54.220417+00,Pandawa Lima,https://i.scdn.co/image/86d5fb0ee073484e45ce0544af78be82b8943024,2023-02-20 11:46:54.220417,6
30,2023-02-20 11:50:27.594677+00,The 2000 Greatest,https://i.scdn.co/image/ab67616d00001e02893d2e279513cf125d385b06,2023-02-20 11:50:27.594677,6
31,2023-02-20 13:15:34.12934+00,Laguku,https://i.scdn.co/image/ab67616d00001e027d3cd831a61fb7cea66bf174,2023-02-20 13:15:34.12934,7
32,2023-02-20 13:19:30.444386+00,Melayang,https://i.scdn.co/image/ab67616d00001e020f1c818c3d95a460cef8410f,2023-02-20 13:19:30.444386,7
33,2023-02-20 13:28:15.805882+00,Ruang Hati,https://i.scdn.co/image/ab67616d00001e02ef6821c358fd21c00921d919,2023-02-20 13:28:15.805882,7
34,2023-02-20 13:46:29.035194+00,"Truth, Cry, And Lie",https://i.scdn.co/image/ab67616d0000b2739a2a476d6cd4500f26fc484f,2023-02-20 13:46:29.035194,8
35,2023-02-20 13:49:13.12425+00,Don’t Make Me Sad,https://i.scdn.co/image/ab67616d00001e02beb3148bd8f70f1f62771d0a,2023-02-20 13:49:13.12425,8`

export default async function handler(req, res) {
  const json = await csvToJson().fromString(csv);
  json.forEach(e => { 
    delete e.created_at 
    delete e.updated_at 
  });
  json.forEach(e => { 
    e.id = Number(e.id) 
    e.artists_id = Number(e.artists_id) 
  });

  let sortedJson = json.sort((a, b) => a.id - b.id)

  const jsonString = JSON.stringify(json, null, 2);

  console.log(sortedJson);
  // console.log(jsonString);
  res.status(200).send(JSON.stringify(sortedJson, null, 2));
}

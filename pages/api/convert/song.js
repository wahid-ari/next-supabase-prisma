// https://codingbeautydev.com/blog/javascript-convert-csv-to-json/
import csvToJson from 'csvtojson';

const csv = `id,name,youtube_url,cover_url,artist_id,created_at,album_id,preview_url
27,Menghapus Jejakmu,nGMP3kYq2bE,https://i.scdn.co/image/ab67616d00001e02076747ead143aa3cd8c1d2f0,1,2023-01-04 06:07:37.915086+00,2,https://p.scdn.co/mp3-preview/e4802e7f358039bb15eaced6211fb4bb9c44c8c1
1,Hari Yang Cerah,fuEdMCclYn0,https://i.scdn.co/image/ab67616d00001e02076747ead143aa3cd8c1d2f0,1,2022-07-06 10:36:12+00,2,https://p.scdn.co/mp3-preview/08bd5940bc2031c8c93306cccb32d5b9756fdc53
28,Dibalik Awan,8wPuuSa7DG8,https://i.scdn.co/image/ab67616d00001e02076747ead143aa3cd8c1d2f0,1,2023-01-04 06:07:55.026307+00,2,https://p.scdn.co/mp3-preview/18695104da611068db72428496fbfdbd4369203b
21,Ada Apa Denganmu,sEM01iNOSQA,https://i.scdn.co/image/ab67616d00001e02af69d9e82cc973f608481610,1,2023-01-04 06:04:09.397488+00,1,https://p.scdn.co/mp3-preview/c6e19c3e7e0af8cf26f54b41468b1b0121166f11
22,Mungkin Nanti,SWcMwUySDvI,https://i.scdn.co/image/ab67616d00001e02af69d9e82cc973f608481610,1,2023-01-04 06:04:32.446516+00,1,https://p.scdn.co/mp3-preview/874ad06ded337fa74144ee3e18efe00b203de178
24,Di Belakangku,0Wd7PCWK6rs,https://i.scdn.co/image/ab67616d00001e02af69d9e82cc973f608481610,1,2023-01-04 06:05:16.270771+00,1,https://p.scdn.co/mp3-preview/bf6b7504a4add5a5e5a5bdadae0554449b28843e
8,Dont Cry,zRIbf6JqkNc,https://i.scdn.co/image/ab67616d0000b273bdba586eb69c503f7ff7d658,2,2022-07-06 10:41:07+00,7,https://p.scdn.co/mp3-preview/34a693fa6d6a033cb0b2f8b4828a0e6781db7729
11,A Head Full Of Dreams,vGZMvV9KBp8,https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6,3,2022-07-06 14:48:43+00,9,https://p.scdn.co/mp3-preview/a5de5c8bb9e27204d232b6e62b23a82d4cc5a7d9
12,Fix You,k4V3Mo61fJM,https://i.scdn.co/image/ab67616d0000b2734e0362c225863f6ae2432651,3,2022-07-06 14:49:27+00,10,https://p.scdn.co/mp3-preview/9263804f340b5ab87ac1456a1b104e02fc79b229
25,Kukatakan Dengan Indah,GrwXogA8Gxg,https://i.scdn.co/image/ab67616d00001e02af69d9e82cc973f608481610,1,2023-01-04 06:05:47.841574+00,1,https://p.scdn.co/mp3-preview/a108c27d2ded471c0644a540b693dd52d13d7b98
2,Bintang Di Surga,B1ynHmn0XZ4,https://i.scdn.co/image/ab67616d00001e02af69d9e82cc973f608481610,1,2022-07-06 10:38:10+00,1,https://p.scdn.co/mp3-preview/09474fc657c15038cb699afa4a52b4fac9383d62
20,Topeng,palz438KT3Y,https://i.scdn.co/image/ab67616d0000b27324496b7707e9304c4ad76c5a,1,2023-01-04 06:02:50.41017+00,3,https://p.scdn.co/mp3-preview/7da40111f9d28915b7a9357495040770e9f79e6a
6,Sweet Child of Mine,1w7OgIMMRc4,https://i.scdn.co/image/ab67616d0000b273e44963b8bb127552ac761873,2,2022-07-06 10:40:13+00,6,https://p.scdn.co/mp3-preview/92ac4ba7bc8ed36373b795b5b9ffe7e37468cc4f
14,The Scientist,RB-RcX5DS5A,https://i.scdn.co/image/ab67616d0000b27340b57befa24e9fe0e888f4a1,3,2022-07-06 15:04:01+00,12,https://p.scdn.co/mp3-preview/d5be3c3e98fc9d1612f0f051ca8f98766c709c54
15,Paradise,1G4isv_Fylg,https://i.scdn.co/image/ab67616d0000b273de0cd11d7b31c3bd1fd5983d,3,2022-07-07 12:37:37+00,13,https://p.scdn.co/mp3-preview/48fd7e9e99a1af02d42769d4b8c781a6de74c020
31,Membebaniku,i-8PqFReWLg,https://i.scdn.co/image/ab67616d00001e02d945ace4a7fb61330e08a912,1,2023-01-04 06:10:32.259348+00,14,https://p.scdn.co/mp3-preview/7f2decd8739dbee1de0d330b354bd536cab1fc5a
32,Menunggu Pagi,65K07Vssb_0,https://i.scdn.co/image/ab67616d00001e02d945ace4a7fb61330e08a912,1,2023-01-04 06:10:48.677927+00,14,https://p.scdn.co/mp3-preview/4c7603591f523971990f40ed283f04810b8a9f26
44,Hero,MZeyWeyDk2I,https://i.scdn.co/image/ab67616d0000b27391079d7ff840d5273aa2957d,1,2023-01-04 06:17:44.40379+00,15,https://p.scdn.co/mp3-preview/cfca027bd83b13c7fafda5e6f88494431cc661ef
16,Aku & Bintang,4jO1t6QMYfg,https://i.scdn.co/image/ab67616d0000b27324496b7707e9304c4ad76c5a,1,2023-01-04 06:00:41.095572+00,3,https://p.scdn.co/mp3-preview/a84561968341bc5cebdc98bacebd104e8dcc5856
18,Mimpi Yang Sempurna,_OW30kEHcZo,https://i.scdn.co/image/ab67616d0000b27324496b7707e9304c4ad76c5a,1,2023-01-04 06:02:03.795879+00,3,https://p.scdn.co/mp3-preview/8ea3c3ed5d06e32b1abbd97d0770a88441acde32
3,Taman Langit,EzcuhqJKlLk,https://i.scdn.co/image/ab67616d0000b27324496b7707e9304c4ad76c5a,1,2022-07-06 10:38:49+00,3,https://p.scdn.co/mp3-preview/f2909fb81ec28143e1dbf032a0e8a4fa5d5d1837
34,Jika Engkau,8Rxj-Drr0dA,https://i.scdn.co/image/ab67616d0000b273aa994128eba603922ce924a0,1,2023-01-04 06:12:41.973983+00,4,https://p.scdn.co/mp3-preview/4d6a691b8d7665750a4f4899b0a961885974281a
37,Ini Cinta,NacLeWWpyvQ,https://i.scdn.co/image/ab67616d0000b273aa994128eba603922ce924a0,1,2023-01-04 06:13:44.857867+00,4,https://p.scdn.co/mp3-preview/51c120eb85a10912a687a218106c45b549e76b98
38,Terbangun Sendiri,rJXR4c4bgcM,https://i.scdn.co/image/ab67616d0000b273aa994128eba603922ce924a0,1,2023-01-04 06:14:16.890373+00,4,https://p.scdn.co/mp3-preview/28a8dc3857cc73aedc5f0678bf5bea4aa63d4244
39,Sendiri Lagi,vTJ2jPiFbrY,https://i.scdn.co/image/ab67616d0000b273aa994128eba603922ce924a0,1,2023-01-04 06:14:27.440998+00,4,https://p.scdn.co/mp3-preview/19b5d1b5c01cb10ebf71857e77df3e8a1353ee33
45,Seperti Kemarin,mGUTs3vxSAg,https://i.scdn.co/image/ab67616d0000b27391079d7ff840d5273aa2957d,1,2023-01-04 06:17:58.960302+00,15,https://p.scdn.co/mp3-preview/ddddbc456e4f941773e432c10480f52658e1139a
40,Wanitaku,sk-T8E4ubfo,https://i.scdn.co/image/ab67706c0000bebb8d82e2ee27cd5b4018e5f480,1,2023-01-04 06:15:03.778421+00,5,https://p.scdn.co/mp3-preview/7039271ed97d5b11db62913b78aabc115682d691
41,Kupeluk Hatimu,jFGkeMPq8Lo,https://i.scdn.co/image/ab67706c0000bebb8d82e2ee27cd5b4018e5f480,1,2023-01-04 06:15:20.27534+00,5,https://p.scdn.co/mp3-preview/62692e596bb6b7210b6ec873802813f38b9b6750
5,My Situation,aYPXy6kE1GA,https://i.scdn.co/image/ab67706c0000bebb8d82e2ee27cd5b4018e5f480,1,2022-07-06 10:39:47+00,5,https://p.scdn.co/mp3-preview/0162f5cddc2739b36cbaa4e02508fa23eddb1beb
43,Jalani Mimpi,MhaWRStfP_c,https://i.scdn.co/image/ab67706c0000bebb8d82e2ee27cd5b4018e5f480,1,2023-01-04 06:16:12.482242+00,5,https://p.scdn.co/mp3-preview/ca6c216b90803577335617a89b9c8cd720e1bc87
46,Dilema Besar,c76x9Qw1gt4,https://i.scdn.co/image/ab67616d0000b27391079d7ff840d5273aa2957d,1,2023-01-04 06:18:22.023332+00,15,https://p.scdn.co/mp3-preview/9603b2e58d36b9886a2500ce7928ebb3227a5dbc
50,Dara,0wj1iOg3WLs,https://i.scdn.co/image/ab67616d0000b27391079d7ff840d5273aa2957d,1,2023-01-04 06:19:42.189608+00,15,https://p.scdn.co/mp3-preview/452b319b6a408bfcd1fa14a78f58633962295f00
49,Menunggumu,A_OJzo1LUMI,https://i.scdn.co/image/ab67616d0000b27391079d7ff840d5273aa2957d,1,2023-01-04 06:19:30.676871+00,15,https://p.scdn.co/mp3-preview/858aaa0ebccb34b86f071c528f3f9c99661a064f
81,Karate,iGfofL3bJ-8,https://i.scdn.co/image/ab67616d00001e022d076543e015f5b54723a347,4,2023-01-04 10:32:09.033297+00,17,https://p.scdn.co/mp3-preview/b33341ef0a70eb3f0b6fd6a67c274a6ff0dd6247
72,You Could Be Mine,qnFU-DxwpRs,https://i.scdn.co/image/ab67616d0000b27392d21aef6c0d288cc4c05973,2,2023-01-04 08:45:54.320769+00,16,https://p.scdn.co/mp3-preview/e1dee66cdf9bfb164147cc4a8f8ef6f5e18bbe17
71,Estranged,dpmAY059TTY,https://i.scdn.co/image/ab67616d0000b27392d21aef6c0d288cc4c05973,2,2023-01-04 08:45:32.400604+00,16,https://p.scdn.co/mp3-preview/caf46246a2673a378e6111fc574d93a889e7520a
73,Wildcard,ux9vr4xfWj4,https://i.scdn.co/image/ab67616d0000b2730cb7d8858f8239f0a5c65775,4,2023-01-04 10:15:33.613053+00,17,https://p.scdn.co/mp3-preview/b39fb8ff36c9f1e65528f6ce813e2d71370a0d03
69,Yesterdays,NDOPlpH6NZM,https://i.scdn.co/image/ab67616d0000b27392d21aef6c0d288cc4c05973,2,2023-01-04 08:43:54.480691+00,16,https://p.scdn.co/mp3-preview/2f0716fd63636081c8c85170a8054f69fcef0e57
51,Birds,vqOnUB9gnDM,https://i.scdn.co/image/ab67616d00001e028ff7c3580d429c8212b9a3b6,3,2023-01-04 08:16:11.684354+00,9,https://p.scdn.co/mp3-preview/582c6e1a455c4a543908280a71a1b7dd4aaf2089
66,Nightrain,fTVCtiwPpQk,https://i.scdn.co/image/ab67616d00001e027e1774622a9c5f52b7dd1c33,2,2023-01-04 08:39:53.237053+00,6,https://p.scdn.co/mp3-preview/e2dfee246c580c5163694b09db57eea651ef4bee
53,Everglow,xn_1hFdE-5g,https://i.scdn.co/image/ab67616d00001e028ff7c3580d429c8212b9a3b6,3,2023-01-04 08:16:53.364954+00,9,https://p.scdn.co/mp3-preview/3a49b7563205be148aa0547f3b744f7d1c3535db
59,Speed of Sound,0k_1kvDh2UA,https://i.scdn.co/image/ab67616d0000b2734e0362c225863f6ae2432651,3,2023-01-04 08:20:31.219945+00,10,https://p.scdn.co/mp3-preview/2b96f724e306a6533b23383b43067eb782174cca
68,Civil War,-ucDiz3GYrg,https://i.scdn.co/image/ab67616d0000b27392d21aef6c0d288cc4c05973,2,2023-01-04 08:43:37.189408+00,16,https://p.scdn.co/mp3-preview/38eff16f563066325fcbf073eb4b3eb088122032
57,Charlie Brown,zTFBJgnNgU4,https://i.scdn.co/image/ab67616d0000b273de0cd11d7b31c3bd1fd5983d,3,2023-01-04 08:19:05.860969+00,13,https://p.scdn.co/mp3-preview/ca1b824382974c07d0b09b451d1595313377fd20
58,What if,tH-GPdkkNik,https://i.scdn.co/image/ab67616d0000b2734e0362c225863f6ae2432651,3,2023-01-04 08:19:54.192246+00,10,https://p.scdn.co/mp3-preview/8ced11da0a8badd8ddba877b7557f96ef27d6636
63,Trouble,kcASPx3-HuI,https://i.scdn.co/image/ab67616d00001e023d92b2ad5af9fbc8637425f0,3,2023-01-04 08:22:31.36051+00,11,https://p.scdn.co/mp3-preview/2ef01cec3f1f1d53c4017e06a5ef8eeb4975da50
54,Adventure of a Lifetime,QtXby3twMmI,https://i.scdn.co/image/ab67616d00001e028ff7c3580d429c8212b9a3b6,3,2023-01-04 08:17:31.867284+00,9,https://p.scdn.co/mp3-preview/ed5d624b7d819b6ad55f7267aeadb1d789d9cc1a
60,In My Place,gnIZ7RMuLpU,https://i.scdn.co/image/ab67616d00001e02de09e02aa7febf30b7c02d82,3,2023-01-04 08:21:03.3056+00,12,https://p.scdn.co/mp3-preview/fe7086f132f6fec6c458735d93b751ae2fada609
56,Hurts Like Heaven,C8KV0mzqTXY,https://i.scdn.co/image/ab67616d0000b273de0cd11d7b31c3bd1fd5983d,3,2023-01-04 08:18:46.558611+00,13,https://p.scdn.co/mp3-preview/f090061ccb4f06a16887659a80e53475e9b457bd
75,Dharma,YUMdd27gYbk,https://i.scdn.co/image/ab67616d0000b2734a0d386fe289e28a108acbf5,4,2023-01-04 10:17:48.045666+00,17,https://p.scdn.co/mp3-preview/d5d44a9ca749456b11563871502160feda313782
77,Game of Thrones,no2dG9OlXZo,https://i.scdn.co/image/ab67616d0000b273d4024fdf2c5056be8a08d09c,4,2023-01-04 10:22:36.682548+00,17,https://p.scdn.co/mp3-preview/a66e485374e3fb98af747fbc22286a2bebfc87cf
80,No Heroes,dYa6KLLrWoU,https://i.scdn.co/image/ab67616d0000b273c563aac704ab440c95696f75,4,2023-01-04 10:29:50.330658+00,17,https://p.scdn.co/mp3-preview/84044648cf28ea5fb0cbe3deb21038e1ae610e1a
87,Tetap Berdiri (2DSD),ACcCd8205cA,https://i.scdn.co/image/ab67616d00001e02af69d9e82cc973f608481610,1,2023-01-07 08:02:50.039871+00,1,https://p.scdn.co/mp3-preview/b101aba590102caa97e9ed3c383feb5530556066
26,Diatas Normal,63ajdN6bOVM,https://i.scdn.co/image/ab67616d00001e02af69d9e82cc973f608481610,1,2023-01-04 06:06:10.466162+00,1,https://p.scdn.co/mp3-preview/13a1750f983ecb853c63c05670e1b5fb14325cb0
82,Sahabat,gghD1JnLKoo,https://i.scdn.co/image/ab67616d0000b27324496b7707e9304c4ad76c5a,1,2023-01-04 10:49:37.873582+00,3,https://p.scdn.co/mp3-preview/f64e26fd13a77c87c852f5d6c2ac95e311354baf
4,Separuh Aku,b0ZBBjViV8Y,https://i.scdn.co/image/ab67616d0000b273aa994128eba603922ce924a0,1,2022-07-06 10:39:18+00,4,https://p.scdn.co/mp3-preview/2c38cc2b48dfb3884a298c5b81f238947328fed0
88,Kota Mati,xjn2V_mfMLk,https://i.scdn.co/image/ab67616d00001e02076747ead143aa3cd8c1d2f0,1,2023-01-07 08:06:05.827456+00,2,https://p.scdn.co/mp3-preview/701b8267681e0eb111bd77e49b27f8d263c4b878
89,Sally Sendiri,TlDmsHylk1U,https://i.scdn.co/image/ab67616d00001e02076747ead143aa3cd8c1d2f0,1,2023-01-07 08:06:46.660692+00,2,https://p.scdn.co/mp3-preview/3d037c4234b020755fbd2556a10e66ff960f4b31
90,Dunia Yang Terlupa,i_ZrWS8wMMI,https://i.scdn.co/image/ab67616d00001e02076747ead143aa3cd8c1d2f0,1,2023-01-07 08:08:16.038099+00,2,https://p.scdn.co/mp3-preview/350397675711f7a053509aacdbd09a71af48e2d6
29,Cobalah Mengerti,atGEIFsuLpA,https://i.scdn.co/image/ab67616d00001e02076747ead143aa3cd8c1d2f0,1,2023-01-04 06:08:14.492817+00,2,https://p.scdn.co/mp3-preview/b81b9dd84c475d208852c57fc6b17eed112ccaaf
23,Khayalan Tingkat Tinggi,9yQVWPlUGBE,https://i.scdn.co/image/ab67616d00001e02af69d9e82cc973f608481610,1,2023-01-04 06:04:57.95069+00,1,https://p.scdn.co/mp3-preview/88507b9553e52e7bc58a16d5cc9a3cead5fa4b0e
17,Semua Tentang KIta,hhn-nGSuenM,https://i.scdn.co/image/ab67616d0000b27324496b7707e9304c4ad76c5a,1,2023-01-04 06:01:26.698797+00,3,https://p.scdn.co/mp3-preview/eb7ef376211f1aa733844256bdbfb48faafe7b7b
83,Dan Hilang,SbMEWt2eRSw,https://i.scdn.co/image/ab67616d0000b27324496b7707e9304c4ad76c5a,1,2023-01-04 10:50:40.202921+00,3,https://p.scdn.co/mp3-preview/11a606cf4d83f47cfb5737439125a4363da0d035
85,Satu Hati,u9Okc2-rYW8,https://i.scdn.co/image/ab67616d0000b27324496b7707e9304c4ad76c5a,1,2023-01-07 08:00:20.860557+00,3,https://p.scdn.co/mp3-preview/b3e865367c8d3387584c1ececb4247b51faea0bd
19,Yang Terdalam,CNbmVEEW-mA,https://i.scdn.co/image/ab67616d0000b27324496b7707e9304c4ad76c5a,1,2023-01-04 06:02:32.693459+00,3,https://p.scdn.co/mp3-preview/c739baeaad64e47007cca92c02cb16b11451fd7d
84,Kita Tertawa,N9CuuHj2kM4,https://i.scdn.co/image/ab67616d0000b27324496b7707e9304c4ad76c5a,1,2023-01-04 10:51:24.294793+00,3,https://p.scdn.co/mp3-preview/c2ea7d036f704575a8f7f6dd967244a24fdcadf4
64,Welcome To The Jungle,o1tj2zJ2Wvg,https://i.scdn.co/image/ab67616d00001e027e1774622a9c5f52b7dd1c33,2,2023-01-04 08:39:04.354012+00,6,https://p.scdn.co/mp3-preview/ccf775d9c7b2fb9ba2b5f73c54fcb6590086b958
86,Tertinggalkan Waktu,O5YwqF27sDI,https://i.scdn.co/image/ab67616d0000b27324496b7707e9304c4ad76c5a,1,2023-01-07 08:01:27.887267+00,3,https://p.scdn.co/mp3-preview/e0521b5a120ec358c460d7f598b96d45ea082dcb
35,Hidup Untukmu Mati Tanpamu,hlxF0LefCtE,https://i.scdn.co/image/ab67616d0000b273aa994128eba603922ce924a0,1,2023-01-04 06:13:01.024813+00,4,https://p.scdn.co/mp3-preview/eb789ff8e2c0477540b824143375c7f94868d75d
36,Tak Lagi Sama,TgB9nhQkLYA,https://i.scdn.co/image/ab67616d0000b273aa994128eba603922ce924a0,1,2023-01-04 06:13:19.542969+00,4,https://p.scdn.co/mp3-preview/3b3ed0334dad1fa1729178adcba46424458b80b4
42,Kau Udara Bagiku,wYKsfZRD8Ac,https://i.scdn.co/image/ab67706c0000bebb8d82e2ee27cd5b4018e5f480,1,2023-01-04 06:15:54.922593+00,5,https://p.scdn.co/mp3-preview/ff4420adbde334a0ee269e13bef7c052786a3f5e
65,Its So Easy,FMbl1ntpIXQ,https://i.scdn.co/image/ab67616d00001e027e1774622a9c5f52b7dd1c33,2,2023-01-04 08:39:22.281767+00,6,https://p.scdn.co/mp3-preview/c667d1dc5a188c0d7ee264b99ca289e326c98923
10,Paradise City,Rbm6GXllBiw,https://i.scdn.co/image/ab67616d00001e027e1774622a9c5f52b7dd1c33,2,2022-07-06 10:41:59+00,6,https://p.scdn.co/mp3-preview/d10d5bfdfda3bd36a6a99c5cbc9d3561d82c60ba
7,November Rain,8SbUC-UaAxE,https://i.scdn.co/image/ab67616d0000b27368384dd85fd5e95831252f60,2,2022-07-06 10:40:45+00,7,https://p.scdn.co/mp3-preview/b7a92e09a950694e1c0e6fe644d68b6932bc47ee
52,Hymn for the Weekend,YykjpeuMNEk,https://i.scdn.co/image/ab67616d00001e028ff7c3580d429c8212b9a3b6,3,2023-01-04 08:16:36.135434+00,9,https://p.scdn.co/mp3-preview/b14e14b9e6c1dbe07461d078a88194363c64e1bf
55,Up & Up,BPNTC7uZYrI,https://i.scdn.co/image/ab67616d00001e028ff7c3580d429c8212b9a3b6,3,2023-01-04 08:17:50.992085+00,9,https://p.scdn.co/mp3-preview/4b77f10dde15e9414a29f167dca91df03bc60bc0
62,Shiver,u8XFFTWwSvY,https://i.scdn.co/image/ab67616d00001e023d92b2ad5af9fbc8637425f0,3,2023-01-04 08:22:12.648463+00,11,https://p.scdn.co/mp3-preview/f828e679b3d3e30b82d076f6d9a13476c3b16413
13,Yellow,yKNxeF4KMsY,https://i.scdn.co/image/ab67616d0000b27383580914326a689d622ab4f2,3,2022-07-06 14:50:23+00,11,https://p.scdn.co/mp3-preview/54db26ef5a3cf11fdc73ca66cfda7988b08eb52f
61,Clocks,d020hcWA_Wg,https://i.scdn.co/image/ab67616d00001e02de09e02aa7febf30b7c02d82,3,2023-01-04 08:21:30.320573+00,12,https://p.scdn.co/mp3-preview/5c1e3fabdc1c97878138c8a35d960c2bb5a99544
30,Tak Bisakah,n_rwZ3ETimI,https://i.scdn.co/image/ab67616d00001e02d945ace4a7fb61330e08a912,1,2023-01-04 06:10:15.29638+00,14,https://p.scdn.co/mp3-preview/4fe96363b924f72a49c6569b0d18d84ae6fc96ea
33,Langit Tak Mendengar,Fq7oDt3_r48,https://i.scdn.co/image/ab67616d00001e02d945ace4a7fb61330e08a912,1,2023-01-04 06:11:23.149361+00,14,https://p.scdn.co/mp3-preview/1a1e65cde3d474ad8a775f52f9279ae11aaa7b8f
47,Walau Habis Terang,Bw6xaaMQ458,https://i.scdn.co/image/ab67616d0000b27391079d7ff840d5273aa2957d,1,2023-01-04 06:18:42.685126+00,15,https://p.scdn.co/mp3-preview/c06868f82edc5f4e4cd4eaeac957840d88fc94f2
48,Tak Ada Yang Abadi,BEFkS7Grhkc,https://i.scdn.co/image/ab67616d0000b27391079d7ff840d5273aa2957d,1,2023-01-04 06:19:10.582377+00,15,https://p.scdn.co/mp3-preview/241101e46e68684e60691df92420a4bbe6ca6440
70,Knockin On Heaven Door,k04tX2fvh0o,https://i.scdn.co/image/ab67616d0000b27392d21aef6c0d288cc4c05973,2,2023-01-04 08:44:56.086198+00,16,https://p.scdn.co/mp3-preview/7506e439977ca605770150e1b4a2aadd5c886cac
74,Bazaar,KlJAiwwGHMg,https://i.scdn.co/image/ab67616d00001e023f959aa2b1b9a1f997bd71c4,4,2023-01-04 10:16:37.3665+00,17,https://p.scdn.co/mp3-preview/d1f5143cf88f42ae68a0ee5e093bcaa3969020b6
76,Mandala,ZgEY-EkNGN8,https://i.scdn.co/image/ab67616d00001e02b8d45b6f9cb82279fe0d7f30,4,2023-01-04 10:19:57.628427+00,17,https://p.scdn.co/mp3-preview/aef79489ce406532b64c6318febd7eecac23c694
67,One In A Million,ulvmdYMyT80,https://i.scdn.co/image/ab67706c0000da8483d2a5bf0a60bf11cd408a3b,2,2023-01-04 08:41:05.323589+00,8,https://p.scdn.co/mp3-preview/22fc62e0ce3b77d420de9b1089543094260463d7
9,Patience,ErvgV4P6Fzc,https://i.scdn.co/image/ab67706c0000da8483d2a5bf0a60bf11cd408a3b,2,2022-07-06 10:41:30+00,8,https://p.scdn.co/mp3-preview/8103cc39818fb7b70f1787e2ac23c73e893ed037
92,Kita,oOXba6xE41Q,https://i.scdn.co/image/ab67616d00001e0254270208627aa8061a8abe21,5,2023-02-20 10:38:11.048253+00,18,https://p.scdn.co/mp3-preview/ab31e798f9d1513828f044aefc25bbf83a7bf78b?cid=774b29d4f13844c495f206cafdad9c86
93,J.A.P,8Q5pEcQaILk,https://i.scdn.co/image/ab67616d00001e0254270208627aa8061a8abe21,5,2023-02-20 10:39:34.607859+00,18,https://p.scdn.co/mp3-preview/b555f73e286f377cc8bf6267c7ae5f94a7dccf50?cid=774b29d4f13844c495f206cafdad9c86
94,Anugerah Terindah Yang Pernah Kumiliki,wUiOtiJ09-o,https://i.scdn.co/image/ab67616d00001e0254270208627aa8061a8abe21,5,2023-02-20 10:40:15.101548+00,18,https://p.scdn.co/mp3-preview/7b1267ed07fc042e9af3bf321d2e7c92b93ec153?cid=774b29d4f13844c495f206cafdad9c86
95,Dan,dGcGbF4ex5o,https://i.scdn.co/image/ab67616d00001e0254270208627aa8061a8abe21,5,2023-02-20 10:40:58.762586+00,18,https://p.scdn.co/mp3-preview/dad30ecd983e12820616b1cd410de6d2f8bcb8c5?cid=774b29d4f13844c495f206cafdad9c86
96,Sahabat Sejati,QSCc16k3nUQ,https://i.scdn.co/image/ab67616d00001e02e8d4f0596d66ccbe5241918d,5,2023-02-20 10:46:57.314442+00,19,https://p.scdn.co/mp3-preview/ee39f6d508c5738b591c1440325c2622d7096b11?cid=774b29d4f13844c495f206cafdad9c86
97,Bila Kau Tak Disampingku,vPIQdOZ5guI,https://i.scdn.co/image/ab67616d00001e02e8d4f0596d66ccbe5241918d,5,2023-02-20 10:47:40.320755+00,19,https://p.scdn.co/mp3-preview/85e93ffacdbfd70976e1db0916298d27c2918068?cid=774b29d4f13844c495f206cafdad9c86
98,Sephia,I-49WVkNNL0,https://i.scdn.co/image/ab67616d00001e02e8d4f0596d66ccbe5241918d,5,2023-02-20 10:48:20.206268+00,19,https://p.scdn.co/mp3-preview/dc1bf8c18d3834cea0f09bb65272bd5fbece0bae?cid=774b29d4f13844c495f206cafdad9c86
99,Sebuah Kisah Klasik,WKsoUFblnfc,https://i.scdn.co/image/ab67616d00001e02e8d4f0596d66ccbe5241918d,5,2023-02-20 10:49:03.969172+00,19,https://p.scdn.co/mp3-preview/99f67b03438f6dca89cf7f8c48ca7e18ddadfa02?cid=774b29d4f13844c495f206cafdad9c86
100,Seberapa Pantas,OdDwIwoiZwU,https://i.scdn.co/image/ab67616d00001e0258961269cc5263913f9e0b40,5,2023-02-20 10:54:08.605168+00,20,https://p.scdn.co/mp3-preview/2e715f36c2cc11d962c7b8211d279564761ad909?cid=774b29d4f13844c495f206cafdad9c86
101,Saat Aku Lanjut Usia,yS8WD974jt0,https://i.scdn.co/image/ab67616d00001e0258961269cc5263913f9e0b40,5,2023-02-20 10:54:47.715677+00,20,https://p.scdn.co/mp3-preview/768d7b44fa8ce429a21c447e4b2f7fe3698cf6b8?cid=774b29d4f13844c495f206cafdad9c86
102,Pria Kesepian,oaMTzehhreg,https://i.scdn.co/image/ab67616d00001e0258961269cc5263913f9e0b40,5,2023-02-20 10:55:36.131731+00,20,https://p.scdn.co/mp3-preview/5d553348bc46b08ca8c3b8bfebd621c6475fbf77?cid=774b29d4f13844c495f206cafdad9c86
103,Pejantan Tangguh,qYmQQ9gRMxY,https://i.scdn.co/image/ab67616d00001e02f0a7efc94687cc049b821529,5,2023-02-20 10:58:03.524948+00,21,https://p.scdn.co/mp3-preview/063a2ad48d7a96e4c25084dd641b1231c75c68a2?cid=774b29d4f13844c495f206cafdad9c86
104,Itu Aku,a4a_mhXgGSg,https://i.scdn.co/image/ab67616d00001e02f0a7efc94687cc049b821529,5,2023-02-20 10:58:38.311197+00,21,https://p.scdn.co/mp3-preview/dc29c08a98de20607f61824d69316ea82f6ca80b?cid=774b29d4f13844c495f206cafdad9c86
105,Betapa,tFifKMTLERc,https://i.scdn.co/image/ab67616d00001e025974be9bbf90d8f21af5515f,5,2023-02-20 11:01:37.838248+00,22,https://p.scdn.co/mp3-preview/3a44703d33dfaed61431abe2eef981809e04becb?cid=774b29d4f13844c495f206cafdad9c86
106,Yang Terlewatkan,5TR3F-yL-jg,https://i.scdn.co/image/ab67616d00001e025974be9bbf90d8f21af5515f,5,2023-02-20 11:02:16.302892+00,22,https://p.scdn.co/mp3-preview/b5d47dab2002aecb6efd53360c362eafdc604ed1?cid=774b29d4f13844c495f206cafdad9c86
107,Pasti Ku Bisa,P2xymkKREOA,https://i.scdn.co/image/ab67616d00001e02505fb06705d4823830ce5055,5,2023-02-20 11:04:59.879437+00,23,https://p.scdn.co/mp3-preview/a62b7a9343f5309e811f4f347f4715ba7643661b?cid=774b29d4f13844c495f206cafdad9c86
108,Hari Bersamanya,32M1DDVwqeY,https://i.scdn.co/image/ab67616d00001e02505fb06705d4823830ce5055,5,2023-02-20 11:05:43.920503+00,23,https://p.scdn.co/mp3-preview/ad597e93ed6115e7388e7d07bb38dcce67039365?cid=774b29d4f13844c495f206cafdad9c86
110,Melompat Lebih Tinggi,ab9LL48USIU,https://i.scdn.co/image/ab67616d00001e0298b7cd420705531db32b3aeb,5,2023-02-20 11:12:02.672162+00,25,https://p.scdn.co/mp3-preview/14a1b58f84848ed2b52cf41b9fed4a5d5ad95f3d?cid=774b29d4f13844c495f206cafdad9c86
111,Berhenti Berharap,Fx6fhN0B8e8,https://i.scdn.co/image/ab67616d00001e0298b7cd420705531db32b3aeb,5,2023-02-20 11:12:43.162731+00,25,https://p.scdn.co/mp3-preview/3d3b486720b41b6e15cbc417b0828a722c4d4fc1?cid=774b29d4f13844c495f206cafdad9c86
109,Lapang Dada,YncQyAb1xBQ,https://i.scdn.co/image/ab67616d00001e02eb44a67b266f6987e21a4a9b,5,2023-02-20 11:08:39.242976+00,24,https://p.scdn.co/mp3-preview/74f18211c5aa85f34fe487a44aa3b6a1d5fda829?cid=774b29d4f13844c495f206cafdad9c86
112,Kangen (Ku Kan Datang),RYGgSRtYxd0,https://i.scdn.co/image/ab67616d00001e02d8fbd1079c6cfab4d4b70cea,6,2023-02-20 11:37:40.78041+00,26,https://p.scdn.co/mp3-preview/46b6a561cc5f971dfe7d241e2abd2d6f216a3022?cid=774b29d4f13844c495f206cafdad9c86
113,Mahameru,6_kQQ_7iB4A,https://i.scdn.co/image/ab67616d00001e02bfc7fa507f4bc822cabe7bde,6,2023-02-20 11:40:36.254609+00,27,https://p.scdn.co/mp3-preview/dd10ce345be7e0971659971b7a2c770a29cc9456?cid=774b29d4f13844c495f206cafdad9c86
114,Tak Kan Ada Cinta Yang Lain,_PSPhCCUdZE,https://i.scdn.co/image/ab67616d00001e02bfc7fa507f4bc822cabe7bde,6,2023-02-20 11:41:23.458903+00,27,https://p.scdn.co/mp3-preview/eab9a17884fee53a3ece353fe95e1cf36ece2e65?cid=774b29d4f13844c495f206cafdad9c86
115,Cukup Siti Nurbaya,4bSDEwOrHKE,https://i.scdn.co/image/dbb127abf2d9f53acf344c6461fb8ae23fdd1730,6,2023-02-20 11:43:46.171155+00,28,https://p.scdn.co/mp3-preview/5cbeca14cd4d46278f2474f33a3bac522d53c0fb?cid=774b29d4f13844c495f206cafdad9c86
116,Cinta kan Membawamu Kembali,X8-4lpJDEcM,https://i.scdn.co/image/dbb127abf2d9f53acf344c6461fb8ae23fdd1730,6,2023-02-20 11:44:44.131038+00,28,https://p.scdn.co/mp3-preview/c27569f899c07393c942b34606f059d3d7dc06a2?cid=774b29d4f13844c495f206cafdad9c86
117,Manusia Biasa,k20F9SLkY0A,https://i.scdn.co/image/dbb127abf2d9f53acf344c6461fb8ae23fdd1730,6,2023-02-20 11:45:29.080216+00,28,https://p.scdn.co/mp3-preview/cda505b90abb56e9a73f8d83640493080ee2cc95?cid=774b29d4f13844c495f206cafdad9c86
118,Kirana,5KExOQ5S8uc,https://i.scdn.co/image/86d5fb0ee073484e45ce0544af78be82b8943024,6,2023-02-20 11:47:35.107741+00,29,https://p.scdn.co/mp3-preview/27257d0ea7b56126329ab21dc4ff303528a18fd5?cid=774b29d4f13844c495f206cafdad9c86
119,Kamulah Satu-Satunya,mxoqgbC81zY,https://i.scdn.co/image/86d5fb0ee073484e45ce0544af78be82b8943024,6,2023-02-20 11:48:31.771342+00,29,https://p.scdn.co/mp3-preview/4859b10e14252ec6f5b233fa390c1be43b6b02f9?cid=774b29d4f13844c495f206cafdad9c86
120,Roman Picisan,JatwGCBZoI0,https://i.scdn.co/image/ab67616d00001e02893d2e279513cf125d385b06,6,2023-02-20 11:51:37.32986+00,30,https://p.scdn.co/mp3-preview/e9c7adf6912419e428b306f3b2094627802c7ba7?cid=774b29d4f13844c495f206cafdad9c86
121,Separuh Nafas,KDDq6d9ftOk,https://i.scdn.co/image/ab67616d00001e02893d2e279513cf125d385b06,6,2023-02-20 11:52:25.190981+00,30,https://p.scdn.co/mp3-preview/5c981dab4af0738e5c65c596c4816370b332f72b?cid=774b29d4f13844c495f206cafdad9c86
122,Angin,xHsGW0mYy6E,https://i.scdn.co/image/ab67616d00001e02893d2e279513cf125d385b06,6,2023-02-20 11:53:10.258168+00,30,https://p.scdn.co/mp3-preview/79c15898123123490ffc7a739f6f066d1e9f899b?cid=774b29d4f13844c495f206cafdad9c86
123,Bayang Semu,_57mXZfGPTg,https://i.scdn.co/image/ab67616d00001e027d3cd831a61fb7cea66bf174,7,2023-02-20 13:16:25.690063+00,31,https://p.scdn.co/mp3-preview/e5933d01a2567056550b368edc934aeecb5b0b0b?cid=774b29d4f13844c495f206cafdad9c86
124,Jika Itu Yang Terbaik,NGDl_FqccRc,https://i.scdn.co/image/ab67616d00001e027d3cd831a61fb7cea66bf174,7,2023-02-20 13:17:16.86239+00,31,https://p.scdn.co/mp3-preview/90cb040e8e6ecfa559a2af1ec0761525da289d6f?cid=774b29d4f13844c495f206cafdad9c86
125,Demi Waktu,8yZFMcTcuoo,https://i.scdn.co/image/ab67616d00001e020f1c818c3d95a460cef8410f,7,2023-02-20 13:20:22.611576+00,32,https://p.scdn.co/mp3-preview/58f4ccbd4c1940e3bb26a5d4e0cae37cf0c075b7?cid=774b29d4f13844c495f206cafdad9c86
126,Seperti Yang Dulu,ZRhVlI5x9W4,https://i.scdn.co/image/ab67616d00001e020f1c818c3d95a460cef8410f,7,2023-02-20 13:21:04.726836+00,32,https://p.scdn.co/mp3-preview/3d5cc52d5b94c3dc306901e561a6a97646998596?cid=774b29d4f13844c495f206cafdad9c86
127,Berikan Aku Cinta,o1_drcdbmvA,https://i.scdn.co/image/ab67616d00001e020f1c818c3d95a460cef8410f,7,2023-02-20 13:21:54.29353+00,32,https://p.scdn.co/mp3-preview/c10f58f929314b3fc6c505f0f62d32aae830b291?cid=774b29d4f13844c495f206cafdad9c86
128,Tercipta Untukku,nDSHtAeDtm0,https://i.scdn.co/image/ab67616d00001e020f1c818c3d95a460cef8410f,7,2023-02-20 13:22:32.185278+00,32,https://p.scdn.co/mp3-preview/f6971805641b8971aeced3df3080f3fe91b3ecc9?cid=774b29d4f13844c495f206cafdad9c86
129,Sejauh Mungkin,mVwSTnj2nWk,https://i.scdn.co/image/ab67616d00001e020f1c818c3d95a460cef8410f,7,2023-02-20 13:23:09.768452+00,32,https://p.scdn.co/mp3-preview/9ab18424c65c09576ad0aa03ee45f4a004e1bea0?cid=774b29d4f13844c495f206cafdad9c86
130,Melayang,I_yYswRyfEk,https://i.scdn.co/image/ab67616d00001e020f1c818c3d95a460cef8410f,7,2023-02-20 13:23:45.379499+00,32,https://p.scdn.co/mp3-preview/df3369c9c17c51ca1d40e0c6106aa2f638390998?cid=774b29d4f13844c495f206cafdad9c86
132,SurgaMu,RXDHuqo2MC0,https://i.scdn.co/image/ab67616d00001e02ef6821c358fd21c00921d919,7,2023-02-20 13:29:53.306617+00,33,ttps://p.scdn.co/mp3-preview/342076170bc9e6f5afcacf1eec257a9ebffc17f2?cid=774b29d4f13844c495f206cafdad9c86
133,Andai Ku Tahu,720d10zjzic,https://i.scdn.co/image/ab67616d00001e02ef6821c358fd21c00921d919,7,2023-02-20 13:30:39.916712+00,33,https://p.scdn.co/mp3-preview/3f19db2f86eb7f6bec2daffdbc07253ff0df7abd?cid=774b29d4f13844c495f206cafdad9c86
134,Para PencariMu,CdQN2T29oag,https://i.scdn.co/image/ab67616d00001e02ef6821c358fd21c00921d919,7,2023-02-20 13:31:44.383567+00,33,https://p.scdn.co/mp3-preview/c7db06364ccae15339b76e3118bbb1fe80978b2f?cid=774b29d4f13844c495f206cafdad9c86
136,Dengan NafasMu,4xLbjEPhwV0,https://i.scdn.co/image/ab67616d00001e02ef6821c358fd21c00921d919,7,2023-02-20 13:33:18.555496+00,33,https://p.scdn.co/mp3-preview/c9445437af421d65055bc37088510dfc2990f211?cid=774b29d4f13844c495f206cafdad9c86
137,Dia Maha Sempurna,T6Yiik8-VFk,https://i.scdn.co/image/ab67616d00001e02ef6821c358fd21c00921d919,7,2023-02-20 13:34:28.415678+00,33,https://p.scdn.co/mp3-preview/fdd999f5dd58349fbf85dbba4d45ad8b9196d70c?cid=774b29d4f13844c495f206cafdad9c86
138,Sandaran Hati,NmHWpdtRVn0,https://i.scdn.co/image/ab67616d0000b2739a2a476d6cd4500f26fc484f,8,2023-02-20 13:47:34.147697+00,34,https://p.scdn.co/mp3-preview/af83406f977fd03412aead8b4b4f1a23ae977409?cid=774b29d4f13844c495f206cafdad9c86
139,Ruang Rindu,9JS47BC0WXc,https://i.scdn.co/image/ab67616d0000b2739a2a476d6cd4500f26fc484f,8,2023-02-20 13:48:18.660958+00,34,https://p.scdn.co/mp3-preview/d56a0c0edfe0e40cfa79aee181cd72082a652fe3?cid=774b29d4f13844c495f206cafdad9c86
131,Bila Tiba,CLlbqSVQOU0,https://i.scdn.co/image/ab67616d00001e02ef6821c358fd21c00921d919,7,2023-02-20 13:29:05.832098+00,33,https://p.scdn.co/mp3-preview/3dce9e7a19a7a6cc4ade70b1fd175a4e93ddecca?cid=774b29d4f13844c495f206cafdad9c86
135,Sesungguhnya,KTrEsj20lWM,https://i.scdn.co/image/ab67616d00001e02ef6821c358fd21c00921d919,7,2023-02-20 13:32:28.748733+00,33,https://p.scdn.co/mp3-preview/7c9f9b0dc4f27c2ba029b02876931f33c1158cc7?cid=774b29d4f13844c495f206cafdad9c86
140,Sebelum Cahaya,rZgxjhxkOjA,https://i.scdn.co/image/ab67616d00001e02beb3148bd8f70f1f62771d0a,8,2023-02-20 13:49:59.232831+00,35,https://p.scdn.co/mp3-preview/c0e2e578adb854d8f615a24079c871bbe048b748?cid=774b29d4f13844c495f206cafdad9c86
141,Permintaan Hati,Kxo0LLisVA4,https://i.scdn.co/image/ab67616d00001e02beb3148bd8f70f1f62771d0a,8,2023-02-20 13:50:42.177351+00,35,https://p.scdn.co/mp3-preview/429e5da477b76adfd7ad93c8d4bd4b38b28bdfed?cid=774b29d4f13844c495f206cafdad9c86`;

export default async function handler(req, res) {
  const json = await csvToJson().fromString(csv);
  json.forEach((e) => {
    delete e.created_at;
  });
  json.forEach((e) => {
    e.id = Number(e.id);
    e.artist_id = Number(e.artist_id);
    e.album_id = Number(e.album_id);
  });

  let sortedJson = json.sort((a, b) => a.id - b.id);

  const jsonString = JSON.stringify(json, null, 2);

  console.log(sortedJson);
  // console.log(jsonString);
  res.status(200).send(JSON.stringify(sortedJson, null, 2));
}

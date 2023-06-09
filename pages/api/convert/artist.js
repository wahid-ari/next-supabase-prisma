// https://codingbeautydev.com/blog/javascript-convert-csv-to-json/
import csvToJson from 'csvtojson';

const csv = `id,created_at,name,cover_url,genre_id
1,2022-07-06 10:43:42+00,Noah,https://i.scdn.co/image/ab6761610000e5eba8fe25ec607f3cca02f5db6c,1
2,2022-07-06 10:43:59+00,Guns n Roses,https://i.scdn.co/image/ab67616d0000b2734e04404c40be7b80855656a8,2
3,2022-07-06 14:43:34+00,Coldplay,https://i.scdn.co/image/ab67616d00001e02b151437d4adc97ce6c828d4a,3
4,2023-01-04 10:08:02.813613+00,Kshmr,https://i.scdn.co/image/ab6761610000e5ebd1db941d6e307ab229651fae,4
5,2023-02-20 10:25:25.764268+00,Sheila On 7,https://i.scdn.co/image/ab67616d0000b27354270208627aa8061a8abe21,1
6,2023-02-20 11:17:49.766415+00,Dewa 19,https://i.scdn.co/image/ab6761610000e5eb96bfa9ff288138f3432e0fa4,2
7,2023-02-20 13:09:10.276707+00,Ungu,https://i.scdn.co/image/ab6761610000e5eb2d4637222eabdc240d5134d4,1
8,2023-02-20 13:45:36.678623+00,Letto,https://i.scdn.co/image/ab6761610000e5eba72d9867fae5d76011bb2204,1`;

export default async function handler(req, res) {
  const json = await csvToJson().fromString(csv);
  json.forEach((e) => {
    delete e.created_at;
  });
  json.forEach((e) => {
    e.id = Number(e.id);
    e.genre_id = Number(e.genre_id);
  });

  let sortedJson = json.sort((a, b) => a.id - b.id);

  const jsonString = JSON.stringify(json, null, 2);

  console.log(sortedJson);
  // console.log(jsonString);
  res.status(200).send(JSON.stringify(sortedJson, null, 2));
}

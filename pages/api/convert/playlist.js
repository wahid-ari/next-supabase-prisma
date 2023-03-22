// https://codingbeautydev.com/blog/javascript-convert-csv-to-json/
import csvToJson from 'csvtojson';

const csv = `id,name,created_at
1,Noah Top 10 ,2023-01-04 05:56:57.40715+00
2,Coldplay Top 10,2023-01-04 08:53:53.400617+00
3,Guns n Roses Top 5,2023-01-04 08:54:07.69395+00
4,Kshmr Top 5,2023-01-04 10:37:39.826861+00
5,Sheila On 7 Top 10,2023-02-20 11:54:55.672+00
6,Dewa 19 Top 5,2023-02-20 11:57:00.598596+00
7,Ungu Top 10,2023-02-20 13:36:41.421564+00`;

export default async function handler(req, res) {
  const json = await csvToJson().fromString(csv);
  json.forEach((e) => {
    delete e.created_at;
  });
  json.forEach((e) => {
    e.id = Number(e.id);
  });

  let sortedJson = json.sort((a, b) => a.id - b.id);

  const jsonString = JSON.stringify(json, null, 2);

  console.log(sortedJson);
  // console.log(jsonString);
  res.status(200).send(JSON.stringify(sortedJson, null, 2));
}

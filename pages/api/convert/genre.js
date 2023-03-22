// https://codingbeautydev.com/blog/javascript-convert-csv-to-json/
import csvToJson from 'csvtojson';

const csv = `id,name,created_at
2,Rock,2022-12-22 13:37:23.680641+00
3,Alternative,2022-12-22 13:37:39.65193+00
4,Electronic,2023-01-04 10:07:18.786904+00
1,Pop,2022-12-22 13:37:09.832956+00`;

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

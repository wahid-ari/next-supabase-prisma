// https://codingbeautydev.com/blog/javascript-convert-csv-to-json/
import csvToJson from 'csvtojson';

const csv = `id,user_id,name,created_at
1,2,User Top 3,2023-01-16 10:25:35.385349+00
2,2,User Top 5,2023-01-16 10:26:55.161524+00
3,2,User Top 10,2023-01-16 10:37:51.449224+00
4,3,John Top 5,2023-01-16 10:38:53.063469+00
5,3,John Top 10,2023-01-16 10:43:23.806415+00`;

export default async function handler(req, res) {
  const json = await csvToJson().fromString(csv);
  json.forEach((e) => {
    delete e.created_at;
  });
  json.forEach((e) => {
    e.id = Number(e.id);
    e.user_id = Number(e.user_id);
  });

  let sortedJson = json.sort((a, b) => a.id - b.id);

  const jsonString = JSON.stringify(json, null, 2);

  console.log(sortedJson);
  // console.log(jsonString);
  res.status(200).send(JSON.stringify(sortedJson, null, 2));
}

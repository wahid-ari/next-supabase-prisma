// https://codingbeautydev.com/blog/javascript-convert-csv-to-json/
import csvToJson from 'csvtojson';

const csv = `id,username,password,created_at,name,type
1,admin,$2a$08$HZZAZIDQo7pbnR.Tpt2dD.EQSUMZl6qfSnmBSydf2iCDAtjBB0at2,2023-01-09 12:19:29.686805+00,Admin,admin
2,user,$2a$08$3j9o.bmPHOJTEWmt9Zx97eHFrT616Lp4CFctto3q4ESe40pNhC8CG,2023-01-09 12:52:30.295757+00,User,user
3,john,$2a$08$UbX51rnF0sSECdBXNfRl4eTxK8kvQrHgU9amCrFt.TjDl5coeHYuW,2023-01-16 10:31:57.46758+00,John,user`;

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

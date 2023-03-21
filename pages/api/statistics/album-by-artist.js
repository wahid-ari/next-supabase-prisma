import { supabase } from '@libs/supabase';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const { data: albums } = await supabase.from('album').select(`*`).order('id');
      const { data: artists } = await supabase.from('artists').select(`*`).order('id');
      // Make an array of object structure
      let items = [];
      for (const artist of artists) {
        items.push({
          id: artist.id,
          label: artist.name,
          total: 0,
        });
      }
      // Count total album that have same artist
      let result = [];
      for (const item of items) {
        for (const album of albums) {
          if (album.artists_id == item.id) {
            let filtered = items.filter((i) => i.id == album.artists_id)[0];
            filtered.total += 1;
            result.push(filtered);
          }
        }
      }
      // Remove duplicate values from an array of objects in javascript
      // https://stackoverflow.com/questions/45439961/remove-duplicate-values-from-an-array-of-objects-in-javascript
      let data = result.reduce((unique, o) => {
        if (!unique.some((obj) => obj.id === o.id)) {
          unique.push(o);
        }
        return unique;
      }, []);
      let sortedData = data.sort((a, b) => b.total - a.total).slice(0, 10);
      res.status(200).json(sortedData);
      break;

    default:
      res.status(200).json('Method required');
      break;
  }
}
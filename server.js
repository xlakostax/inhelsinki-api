const axios = require('axios');
const cors = require('cors')
const express = require('express');
const path = require('path');

const app = express();
const port = (process.env.PORT || 5000);
require('dotenv').config();

app.use(cors());

const apiUrl = 'open-api.myhelsinki.fi';
// app.use(express.static(path.join(__dirname, '../client/build')));
// app.use(express.static('/client/build'));

const getData = (req, res) => {
  // console.log(req)
  const params = req.query;
  console.log(params);
  console.log(req.pathname);
  const load = async () => {
    let data = (await axios.get(`http://${apiUrl}${pathname}`, {params})).data;
    return data
  }
  load()
  .then(response => {
    // console.log("response: ", response)
    res.send(JSON.stringify(response))
  })
}

app.get('/v1/events/', (req, res) => {
  getData(req, res)
})

// app.get('/api/pins/', (req, res) => {
//   let params = searchParams(req);
//   axios.get('http://open-api.myhelsinki.fi/v1/events/' + params)
//       .then(response => {
//         //console.log(response.data.data)
//         let result = getPins(response.data.data);
//         //console.log(result)
//         res.send(JSON.stringify(result))
//
//       })
//       .catch(err => console.log('All fucked up in server! ' + err));
// })

// class Location {
//   constructor(lat, lon, address) {
//     this.lat = lat;
//     this.lon = lon;
//     this.address = address;
//   }
//
//   toString() {
//     return `${this.lat} ${this.lon} ${this.address}`
//   }
// }
//
//
// function getPins(arr) {
//   let locationSet = new Set();
//
//   return arr.map(el => new Location(el.location.lat, el.location.lon, el.location.address.street_address))
//     .filter(elem => {
//       if (!locationSet.has(elem.toString())) {
//         locationSet.add(elem.toString())
//         return true;
//       } else {
//         return false;
//       }
//     })
// }
//
// function getNeededInfo(arr) {
//   let result = [];
//         for (let i = 0; i < arr.length; i++) {
//           let temp = {};
//           temp.id = arr[i].id;
//           temp.name = arr[i].name;
//             if (arr[i].description.images.length == 0) {
//             temp.img = 'https://ss.metronews.ru/userfiles/materials/125/1258933/858x540.jpg';
//
//             } else {
//               temp.img = arr[i].description.images[0].url;
//             }
//
//           temp.description = arr[i].description;
//           temp.location = arr[i].location;
//           temp.dates = arr[i].event_dates.starting_day;
//           if (arr[i].info_url == 0 || arr[i].info_url == null) {
//           temp.url = ' ';
//
//           } else {
//             temp.url = arr[i].info_url;
//           }
//           result.push(temp);
//
//         }
//
//         return result;
// }

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../client/build'));
//   // res.sendFile('../client/build');
//
// });

// app.get('/id', function(req, res) {
//   res.send("<h2>Hi there!</h2>");
//   // res.sendFile('../client/build');
//
// });

app.listen(port, () => console.log(`Server is running on port ${port}`));

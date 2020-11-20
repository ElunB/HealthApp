// const express = require('express');
// const request = require('request');

// const app = express();

// // Compress all HTTP responses
// app.use(compression());

// // app.use((req, res, next) => {
// //   res.header('Access-Control-Allow-Origin', '*');
// //   next();
// // });

// // parse application/json
// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));


// app.get('/api', async function (request, response) {
//     console.log("fetches from server");
//     process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

//   const promise = await fetch("https://asos2.p.rapidapi.com/products/detail?id=3&sizeSchema=US&store=US&lang=en-US&currency=USD" , {
//       method: "GET",
//         headers: {
//             "x-rapidapi-key": "b185780084msh992016afbdb58b2p1bbd2bjsnda73a1ef68f8",
// 		"x-rapidapi-host": "asos2.p.rapidapi.com",
//         },
//     });
//         try {
//             //Hantera svar
//             if (promise.ok) {
//               const data = await promise.data();
//               return response.json(data);
//             } else {
//               if (promise.status === 503) {
//                 const data = await promise.json();
//                 return response.json(data);
//               }
//               return response.sendStatus(promise.status);
//             }
//           } catch (error) {
//             console.log(error);
//             return response.sendStatus(500);
//           }
//         });

const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// app.get('/api', (req, res) => {
//     console.log("hej");
//   request(
//     { url: 'https://asos2.p.rapidapi.com/products/detail?id=3&sizeSchema=US&store=US&lang=en-US&currency=USD',
//     method: "GET",
//     headers: { "x-rapidapi-key": "b185780084msh992016afbdb58b2p1bbd2bjsnda73a1ef68f8",
// 		"x-rapidapi-host": "asos2.p.rapidapi.com"}
// 	},
    
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: error.message });
//       }
//     console.log("ok");
//       return res.json(JSON.parse(body));
//     }
//   )
// });

app.get('/api', async function (request, response) {
    console.log("fetches from server");
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

  const promise = await fetch("https://asos2.p.rapidapi.com/products/detail?id=3&sizeSchema=US&store=US&lang=en-US&currency=USD" , {
      method: "GET",
        headers: {
            "x-rapidapi-key": "b185780084msh992016afbdb58b2p1bbd2bjsnda73a1ef68f8",
		"x-rapidapi-host": "asos2.p.rapidapi.com",
        },
    });
        try {
            //Hantera svar
            if (promise.ok) {
              const data = await promise.data();
              return response.json(data);
            } else {
              if (promise.status === 503) {
                const data = await promise.json();
                return response.json(data);
              }
              return response.sendStatus(promise.status);
            }
          } catch (error) {
            console.log(error);
            return response.sendStatus(500);
          }
        });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
console.log("Server running on http://localhost:8080/, tjolahopp!!");

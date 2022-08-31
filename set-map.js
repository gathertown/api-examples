const axios = require("axios");

const { SPACE_ID, API_KEY } = require("./config");
const MAP_ID = "test";

axios
  .post(
    `https://api.gather.town/api/v2/spaces/${encodeURIComponent(
      SPACE_ID
    )}/maps/${encodeURIComponent(MAP_ID)}`,
    {
      content: {
        // example map data -- but you can set much more than this
        backgroundImagePath: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/SWaZgxCQMTE6C1lq/pq1oi59fnOqkAYD3Td7u0B",
      },
    },
    {
      headers: {
        apiKey: API_KEY,
      },
    }
  )
  .then((response) => console.log("Success: " + response.status))
  .catch(console.error);

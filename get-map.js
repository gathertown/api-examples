const axios = require("axios");

const { SPACE_ID, API_KEY } = require("./config");
const MAP_ID = "test";

axios
  .get(
    `https://api.gather.town/api/v2/spaces/${encodeURIComponent(
      SPACE_ID
    )}/maps/${encodeURIComponent(MAP_ID)}?useV2Map=true`,
    {
      headers: {
        apiKey: API_KEY,
      },
    }
  )
  .then((response) => console.log(response.data))
  .catch(console.error);

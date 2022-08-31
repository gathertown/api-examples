const axios = require("axios");

const { SPACE_ID, API_KEY } = require("./config");

axios
  .post(
    "https://api.gather.town/api/v2/spaces",
    {
      sourceSpace: SPACE_ID,
      name: "my new space",
    },
    {
      headers: {
        apiKey: API_KEY,
      },
    }
  )
  .then((response) => console.log(response.data))
  .catch(console.error);

const axios = require("axios");

const { SPACE_ID, API_KEY } = require("./config");
const MAP_ID = "custom-entrance";

await axios.get("https://gather.town/api/setMap", {
    apiKey: API_KEY,
    spaceId: SPACE_ID,
    mapId: MAP_ID,
    mapContent: Object.assign(BASE_MAP, {
        objects: BASE_MAP.objects.concat(posters).concat(zoomZones),
        spaces: privateSpaces,
        collisions: new Buffer(collBytes).toString("base64"),
        // ^ base64 encoded array of dimensions[1] x dimensions[0] bytes (each either 0x00 or 0x01)
    }),
});

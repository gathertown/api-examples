const axios = require("axios");

const { SPACE_ID, API_KEY } = require("./config");
const MAP_ID = "poster-room-1";

const writeMap = async () => {
	let map = {
		backgroundImagePath:
			"https://firebasestorage.googleapis.com/v0/b/gather-town.appspot.com/o/manually-uploaded%2Fforest-v1.png?alt=media&token=23f570f6-e15d-40a3-b44c-d4359334bba3",
		spawns: [{ x: N / 2, y: N / 2 }],
		id: MAP_ID,
		dimensions: [N, N],
		objects: objects,
		collisions: new Buffer(collBytes).toString("base64"), // base64 encoded array of dimensions[1] x dimensions[0] bytes
		portals: [],
	};

	await axios.post("http://localhost:8080/api/setMap", {
		apiKey: API_KEY,
		spaceId: SPACE_ID,
		mapId: MAP_ID,
		mapContent: map,
	});
};

writeMap();

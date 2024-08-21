const express = require("express");
const { ExpressPeerServer } = require("peer");
const app = express();

const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, () => {
	console.log(`PeerJS server is running on port ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
	path: "/myapp",
	allow_discovery: true,
});

app.use("/peerjs", peerServer);

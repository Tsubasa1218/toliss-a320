Deno.serve(req => {
    if(req.headers.get("upgrade") !== "websocket") {
        return new Response(null, { status: 501 });
    }
    
    const { socket, response } = Deno.upgradeWebSocket(req);
    
    socket.addEventListener("open", () => {
        console.log("A client has connected");

        socket.send("ping");
    });
    
    socket.addEventListener("message", (event) => {
        console.log(event.data);
    });

    return response;
})
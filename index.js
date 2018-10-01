const
    app = require("express")()
    , port = process.env.PORT || 3301
;

app.set("port", port);

app.get("/test", (req, res, next) => {
    return res.status(200).send("test");
});

app.listen(port, console.log.bind(this, `listening on port ${port}`));

module.exports = app;

// json webtoken start
app.get("/api", (req, res) => {
  res.json({
    message: "test"
  });
});

// api route that is protected
/* app.post("/api/posts", verifyToken, (req, res) => {
        jwt.verify(req.token, "secretkey", (err, authData) => {
          if (err) {
            res.sendStatus(403);
          } else {
            res.json({
              message: "Post created...",
              authData
            });
          }
        });
      }); */

// Format of the token
// Authorization: Bearer <access_token>

// Verify token
function verifyToken(req, res, next) {
  // Get the auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Call next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

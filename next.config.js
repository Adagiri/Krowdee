module.exports = {
  async headers() {
    return [
      {
        source: "/app",
        headers: [
          {
            key: "authorization",
            value:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDdlOTk3OGFlZDQ1ZTRmYzVkZDkxMjQiLCJpYXQiOjE2MTkyNzIyOTksImV4cCI6MTYyMTg2NDI5OX0.GsXINQN7FvZa6Ot4khGmuBRy8nw_F0Xn-QQICLrHvYg",
          },
        ],
      },
    ];
  },
};

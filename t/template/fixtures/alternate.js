! function (definition) {
  if (typeof module == "object" && module.exports) definition(require, exports, module);
  else if (typeof define == "function" && typeof define.amd == "object") define(definition);
} (function (require, exports, module) {
  var watchers = [
    [
      {
        "login": "bigeasy",
        "url": "https://api.github.com/users/bigeasy",
        "gravatar_id": "dbd499ef24f9b96e2f9678f8ba93b672",
        "avatar_url": "https://secure.gravatar.com/avatar/dbd499ef24f9b96e2f9678f8ba93b672?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "id": 34673
      },
      {
        "login": "chadsmith",
        "url": "https://api.github.com/users/chadsmith",
        "gravatar_id": "29f6f8b3b91f03b453514f2482966ada",
        "avatar_url": "https://secure.gravatar.com/avatar/29f6f8b3b91f03b453514f2482966ada?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "id": 187174
      },
      {
        "login": "azampagl",
        "url": "https://api.github.com/users/azampagl",
        "gravatar_id": "1ed4e09451a8696ad7ffd503013aac2c",
        "avatar_url": "https://secure.gravatar.com/avatar/1ed4e09451a8696ad7ffd503013aac2c?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "id": 43206
      }
    ]
    ,
    [
      {
        "gravatar_id": "dbd499ef24f9b96e2f9678f8ba93b672",
        "avatar_url": "https://secure.gravatar.com/avatar/dbd499ef24f9b96e2f9678f8ba93b672?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "id": 34673,
        "login": "bigeasy",
        "url": "https://api.github.com/users/bigeasy"
      },
      {
        "gravatar_id": "29f6f8b3b91f03b453514f2482966ada",
        "avatar_url": "https://secure.gravatar.com/avatar/29f6f8b3b91f03b453514f2482966ada?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "id": 187174,
        "login": "_chadsmith",
        "url": "https://api.github.com/users/chadsmith"
      },
      {
        "gravatar_id": "1ed4e09451a8696ad7ffd503013aac2c",
        "avatar_url": "https://secure.gravatar.com/avatar/1ed4e09451a8696ad7ffd503013aac2c?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "id": 43206,
        "login": "azampagl",
        "url": "https://api.github.com/users/azampagl"
      }
    ]
  ];

  var modeler = require("stencil/modeler").createModeler(exports);
  modeler.dynamic("watchers", function (broker, callback) {
  });
});
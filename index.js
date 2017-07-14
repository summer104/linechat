var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: "1524922364",
  channelSecret: "901129ed5672a4679d4763a3a3441b46",
  channelAccessToken: "B2ViotRDKxbIZ1V54/C8cOvDey4fs/1kI69DjYe2+guE8IT+a0i1DvBL9NKs1q+Cdo4Pn1oxJVhn+1ztozOrsf30ApMrn54NAGM5/jK7U0hWmEj9kKczMh80arpRfUJgOl05HK1Eas+1JEVhHoZH3QdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
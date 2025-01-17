chrome.runtime.sendMessage({ todo: "showPageAction" });
var realContent = [];
var parArray;
var flag = 0;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "ceasarEncrypt") {
    pArray = document.getElementsByTagName("p");
    for (var i = 0; i < pArray.length; i++) {
      var text = document.getElementsByTagName("p")[i].innerText;
      if (realContent.length < pArray.length && flag === 0) {
        realContent.push(text);
      }
      var encryptText = ceaserencrypt(text, 5);
      document.getElementsByTagName("p")[i].innerText = encryptText;
    }
    flag = 1;
  }
  if (request.todo == "base64") {
    pArray = document.getElementsByTagName("p");
    for (var i = 0; i < pArray.length; i++) {
      var text = document.getElementsByTagName("p")[i].innerText;
      if (realContent.length < pArray.length && flag === 0) {
        realContent.push(text);
      }
      var encryptText = base64(text);
      document.getElementsByTagName("p")[i].innerText = encryptText;
    }
    flag = 1;
  }
  if (request.todo == "reset") {
    for (var i = 0; i < realContent.length; i++) {
      var text = realContent[i];
      document.getElementsByTagName("p")[i].innerText = text;
    }
  }
});

function ceaserencrypt(msg, key) {
  var encMsg = "";

  for (var i = 0; i < msg.length; i++) {
    var code = msg.charCodeAt(i);

    // Encrypt only letters in 'A' ... 'Z' interval
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = (code + key) % 26;
      code += 65;
    } else if (code >= 97 && code <= 97 + 26 - 1) {
      code -= 97;
      code = (code + key) % 26;
      code += 97;
    }

    encMsg += String.fromCharCode(code);
  }

  return encMsg;
}

function base64(msg) {
  return window.btoa(unescape(encodeURIComponent(msg)));
}

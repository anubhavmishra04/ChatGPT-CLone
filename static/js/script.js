async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
}

sendButton.addEventListener("click", async()=>{
  questionInput = document.getElementById("questionInput").value;
  document.getElementById("questionInput").value = "";
  document.getElementById("right2").style.display = "block"
  document.querySelector(".right1").style.display = "none"

  //question.innerHTML = questionInput;

  let result = await postData("/api", {"question": questionInput})

  //solution.innerHTML = result[0].answer 

  var para1 = document.createElement("div");
  para1.style.margin = "auto";
  para1.style.paddingTop = "28px";
  para1.style.paddingBottom = "28px";
  para1.style.display = "flex";
  para1.style.justifyContent = "start";
  para1.style.width = "40vw";
  para1.style.alignItems = "center";
  var img = document.createElement("IMG");
  img.setAttribute("src", "https://tse1.mm.bing.net/th?id=OIP.3IsXMskZyheEWqtE3Dr7JwHaGe&pid=Api&rs=1&c=1&qlt=95&w=125&h=109");
  img.setAttribute("width", "60px");
  img.setAttribute("height", "36px");
  img.setAttribute("alt", "chatgpt");
  img.style.paddingRight = "25px";
  para1.appendChild(img);
  var node = document.createTextNode(questionInput);
  para1.appendChild(node);
  var x= document.getElementById("msg");
  x.appendChild(para1);

  var para2 = document.createElement("div");
  para2.style.backgroundColor = "rgb(75, 85,99)";
  para2.style.paddingTop = "28px";
  para2.style.paddingBottom = "28px";
  para2.style.display = "flex";
  para2.style.justifyContent = "center";
  para2.style.width = "100%";
  para2.style.alignItems = "center";
  var para3 = document.createElement("div");
  para3.style.width = "40vw";
  para3.style.display = "flex";
  para3.style.justifyContent = "start"
  var img2 = document.createElement("IMG");
  img2.setAttribute("src", "https://chat.openai.com/favicon.ico");
  img2.setAttribute("width", "auto");
  img2.setAttribute("height", "36px");
  img2.setAttribute("alt", "user");
  img2.style.paddingRight = "25px";
  img2.style.height = "36px";
  para3.appendChild(img2);
  var nod = document.createTextNode(result[0].answer);
  para3.appendChild(nod);
  para2.appendChild(para3);
  var y = document.getElementById("msg");
  y.appendChild(para2);
  function updateScroll() {
    var element = document.getElementById("msg");
    element.scrollTop = element.scrollHeight;
  }
  updateScroll()
})

newchat.addEventListener("click", async()=>{
  location.reload();
})

sendButtons.addEventListener("click", async()=>{
  questionInput = document.getElementById("questionInputs").value;
  document.getElementById("questionInputs").value = "";

  //question.innerHTML = questionInput;

  let result = await postData("/apk", {"question": questionInput})

  //solution.innerHTML = result[0].answer 

  var para1 = document.createElement("div");
  para1.style.margin = "auto";
  para1.style.paddingTop = "28px";
  para1.style.paddingBottom = "28px";
  para1.style.display = "flex";
  para1.style.justifyContent = "start";
  para1.style.width = "40vw";
  para1.style.alignItems = "center";
  var img = document.createElement("IMG");
  img.setAttribute("src", "https://tse1.mm.bing.net/th?id=OIP.3IsXMskZyheEWqtE3Dr7JwHaGe&pid=Api&rs=1&c=1&qlt=95&w=125&h=109");
  img.setAttribute("width", "60px");
  img.setAttribute("height", "36px");
  img.setAttribute("alt", "chatgpt");
  img.style.paddingRight = "25px";
  para1.appendChild(img);
  var node = document.createTextNode(questionInput);
  para1.appendChild(node);
  var x= document.getElementById("msg");
  x.appendChild(para1);

  var para2 = document.createElement("div");
  para2.style.backgroundColor = "rgb(75, 85,99)";
  para2.style.paddingTop = "28px";
  para2.style.paddingBottom = "28px";
  para2.style.display = "flex";
  para2.style.justifyContent = "center";
  para2.style.width = "100%";
  para2.style.alignItems = "center";
  var para3 = document.createElement("div");
  para3.style.width = "40vw";
  para3.style.display = "flex";
  para3.style.justifyContent = "start"
  var img2 = document.createElement("IMG");
  img2.setAttribute("src", "https://chat.openai.com/favicon.ico");
  img2.setAttribute("width", "auto");
  img2.setAttribute("height", "36px");
  img2.setAttribute("alt", "user");
  img2.style.paddingRight = "25px";
  img2.style.height = "36px";
  para3.appendChild(img2);
  var nod = document.createTextNode(result[0].answer);
  para3.appendChild(nod);
  para2.appendChild(para3);
  var y = document.getElementById("msg");
  y.appendChild(para2);
  function updateScroll() {
    var element = document.getElementById("msg");
    element.scrollTop = element.scrollHeight;
  }
  updateScroll()

}) 

Example1.addEventListener("click", async()=>{
  questionInput = "Explain quantum computing in simple terms"
  document.getElementById("right2").style.display = "block"
  document.querySelector(".right1").style.display = "none"

  //question.innerHTML = questionInput;

  let result = await postData("/api", {"question": questionInput})

  //solution.innerHTML = result[0].answer 

  var para1 = document.createElement("div");
  para1.style.margin = "auto";
  para1.style.paddingTop = "28px";
  para1.style.paddingBottom = "28px";
  para1.style.display = "flex";
  para1.style.justifyContent = "start";
  para1.style.width = "40vw";
  para1.style.alignItems = "center";
  var img = document.createElement("IMG");
  img.setAttribute("src", "https://tse1.mm.bing.net/th?id=OIP.3IsXMskZyheEWqtE3Dr7JwHaGe&pid=Api&rs=1&c=1&qlt=95&w=125&h=109");
  img.setAttribute("width", "60px");
  img.setAttribute("height", "36px");
  img.setAttribute("alt", "chatgpt");
  img.style.paddingRight = "25px";
  para1.appendChild(img);
  var node = document.createTextNode(questionInput);
  para1.appendChild(node);
  var x= document.getElementById("msg");
  x.appendChild(para1);

  var para2 = document.createElement("div");
  para2.style.backgroundColor = "rgb(75, 85,99)";
  para2.style.paddingTop = "28px";
  para2.style.paddingBottom = "28px";
  para2.style.display = "flex";
  para2.style.justifyContent = "center";
  para2.style.width = "100%";
  para2.style.alignItems = "center";
  var para3 = document.createElement("div");
  para3.style.width = "40vw";
  para3.style.display = "flex";
  para3.style.justifyContent = "start"
  var img2 = document.createElement("IMG");
  img2.setAttribute("src", "https://chat.openai.com/favicon.ico");
  img2.setAttribute("width", "auto");
  img2.setAttribute("height", "36px");
  img2.setAttribute("alt", "user");
  img2.style.paddingRight = "25px";
  img2.style.height = "36px";
  para3.appendChild(img2);
  var nod = document.createTextNode(result[0].answer);
  para3.appendChild(nod);
  para2.appendChild(para3);
  var y = document.getElementById("msg");
  y.appendChild(para2);
  function updateScroll() {
    var element = document.getElementById("msg");
    element.scrollTop = element.scrollHeight;
  }
  updateScroll()
})

Example2.addEventListener("click", async()=>{
  questionInput = "Got any creative ideas for a 10 year old's birthday?"
  document.getElementById("right2").style.display = "block"
  document.querySelector(".right1").style.display = "none"

  //question.innerHTML = questionInput;

  let result = await postData("/api", {"question": questionInput})

  //solution.innerHTML = result[0].answer 

  var para1 = document.createElement("div");
  para1.style.margin = "auto";
  para1.style.paddingTop = "28px";
  para1.style.paddingBottom = "28px";
  para1.style.display = "flex";
  para1.style.justifyContent = "start";
  para1.style.width = "40vw";
  para1.style.alignItems = "center";
  var img = document.createElement("IMG");
  img.setAttribute("src", "https://tse1.mm.bing.net/th?id=OIP.3IsXMskZyheEWqtE3Dr7JwHaGe&pid=Api&rs=1&c=1&qlt=95&w=125&h=109");
  img.setAttribute("width", "60px");
  img.setAttribute("height", "36px");
  img.setAttribute("alt", "chatgpt");
  img.style.paddingRight = "25px";
  para1.appendChild(img);
  var node = document.createTextNode(questionInput);
  para1.appendChild(node);
  var x= document.getElementById("msg");
  x.appendChild(para1);

  var para2 = document.createElement("div");
  para2.style.backgroundColor = "rgb(75, 85,99)";
  para2.style.paddingTop = "28px";
  para2.style.paddingBottom = "28px";
  para2.style.display = "flex";
  para2.style.justifyContent = "center";
  para2.style.width = "100%";
  para2.style.alignItems = "center";
  var para3 = document.createElement("div");
  para3.style.width = "40vw";
  para3.style.display = "flex";
  para3.style.justifyContent = "start"
  var img2 = document.createElement("IMG");
  img2.setAttribute("src", "https://chat.openai.com/favicon.ico");
  img2.setAttribute("width", "auto");
  img2.setAttribute("height", "36px");
  img2.setAttribute("alt", "user");
  img2.style.paddingRight = "25px";
  img2.style.height = "36px";
  para3.appendChild(img2);
  var nod = document.createTextNode(result[0].answer);
  para3.appendChild(nod);
  para2.appendChild(para3);
  var y = document.getElementById("msg");
  y.appendChild(para2);
  function updateScroll() {
    var element = document.getElementById("msg");
    element.scrollTop = element.scrollHeight;
  }
  updateScroll()
})

Example3.addEventListener("click", async()=>{
  questionInput = "How do I make an HTTP request in Javascript?"
  document.getElementById("right2").style.display = "block"
  document.querySelector(".right1").style.display = "none"

  //question.innerHTML = questionInput;

  let result = await postData("/api", {"question": questionInput})

  //solution.innerHTML = result[0].answer 

  var para1 = document.createElement("div");
  para1.style.margin = "auto";
  para1.style.paddingTop = "28px";
  para1.style.paddingBottom = "28px";
  para1.style.display = "flex";
  para1.style.justifyContent = "start";
  para1.style.width = "40vw";
  para1.style.alignItems = "center";
  var img = document.createElement("IMG");
  img.setAttribute("src", "https://tse1.mm.bing.net/th?id=OIP.3IsXMskZyheEWqtE3Dr7JwHaGe&pid=Api&rs=1&c=1&qlt=95&w=125&h=109");
  img.setAttribute("width", "60px");
  img.setAttribute("height", "36px");
  img.setAttribute("alt", "chatgpt");
  img.style.paddingRight = "25px";
  para1.appendChild(img);
  var node = document.createTextNode(questionInput);
  para1.appendChild(node);
  var x= document.getElementById("msg");
  x.appendChild(para1);

  var para2 = document.createElement("div");
  para2.style.backgroundColor = "rgb(75, 85,99)";
  para2.style.paddingTop = "28px";
  para2.style.paddingBottom = "28px";
  para2.style.display = "flex";
  para2.style.justifyContent = "center";
  para2.style.width = "100%";
  para2.style.alignItems = "center";
  var para3 = document.createElement("div");
  para3.style.width = "40vw";
  para3.style.display = "flex";
  para3.style.justifyContent = "start"
  var img2 = document.createElement("IMG");
  img2.setAttribute("src", "https://chat.openai.com/favicon.ico");
  img2.setAttribute("width", "auto");
  img2.setAttribute("height", "36px");
  img2.setAttribute("alt", "user");
  img2.style.paddingRight = "25px";
  img2.style.height = "36px";
  para3.appendChild(img2);
  var nod = document.createTextNode(result[0].answer);
  para3.appendChild(nod);
  para2.appendChild(para3);
  var y = document.getElementById("msg");
  y.appendChild(para2);
  function updateScroll() {
    var element = document.getElementById("msg");
    element.scrollTop = element.scrollHeight;
  }
  updateScroll()
})

async function fun(questionInput) {
  document.getElementById("right2").style.display = "block"
  document.querySelector(".right1").style.display = "none"

  //question.innerHTML = questionInput;

  let result = await postData("/api", {"question": questionInput})

  //solution.innerHTML = result[0].answer 

  var para1 = document.createElement("div");
  para1.style.margin = "auto";
  para1.style.paddingTop = "28px";
  para1.style.paddingBottom = "28px";
  para1.style.display = "flex";
  para1.style.justifyContent = "start";
  para1.style.width = "40vw";
  para1.style.alignItems = "center";
  var img = document.createElement("IMG");
  img.setAttribute("src", "https://tse1.mm.bing.net/th?id=OIP.3IsXMskZyheEWqtE3Dr7JwHaGe&pid=Api&rs=1&c=1&qlt=95&w=125&h=109");
  img.setAttribute("width", "60px");
  img.setAttribute("height", "36px");
  img.setAttribute("alt", "chatgpt");
  img.style.paddingRight = "25px";
  para1.appendChild(img);
  var node = document.createTextNode(questionInput);
  para1.appendChild(node);
  var x= document.getElementById("msg");
  x.appendChild(para1);

  var para2 = document.createElement("div");
  para2.style.backgroundColor = "rgb(75, 85,99)";
  para2.style.paddingTop = "28px";
  para2.style.paddingBottom = "28px";
  para2.style.display = "flex";
  para2.style.justifyContent = "center";
  para2.style.width = "100%";
  para2.style.alignItems = "center";
  var para3 = document.createElement("div");
  para3.style.width = "40vw";
  para3.style.display = "flex";
  para3.style.justifyContent = "start"
  var img2 = document.createElement("IMG");
  img2.setAttribute("src", "https://chat.openai.com/favicon.ico");
  img2.setAttribute("width", "auto");
  img2.setAttribute("height", "36px");
  img2.setAttribute("alt", "user");
  img2.style.paddingRight = "25px";
  img2.style.height = "36px";
  para3.appendChild(img2);
  var nod = document.createTextNode(result[0].answer);
  para3.appendChild(nod);
  para2.appendChild(para3);
  var y = document.getElementById("msg");
  y.appendChild(para2);
  function updateScroll() {
    var element = document.getElementById("msg");
    element.scrollTop = element.scrollHeight;
  }
  updateScroll()
}
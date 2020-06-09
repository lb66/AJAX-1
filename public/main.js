
getCSS.onclick = () => {
  //1.创建XMLHttpRequest对象
  const request = new XMLHttpRequest();
  //2.调用对象的open方法
  request.open('GET', '/style.css');
  //3.监听对象onload和onerror事件,执行函数
  request.onload = () => {
    console.log(request.response)
    const style = document.createElement('style')//创建style标签
    style.innerHTML = request.response //填写style内容
    document.head.appendChild(style)//插到head里面
  };
  request.onerror = () => {
    console.log('失败')
  };
  //4.调用对象的send方法（发送请求）
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/2.js');//readState=1
  request.onreadystatechange = () => { //3.监听对象onreadystatechange事件，执行函数
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
      } else {
        alert('加载失败')
      }
    }
  };
  request.send();//readState=2
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/3.html');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
      } else {
        alert('加载失败')
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/4.xml');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/5.json');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response)//把字符串转换为对象
      myName.textContent = object.name
    }
  };
  request.send();
};

let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);//把字符串转换为对象
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n = n + 1;
    }
  };
  request.send();
};

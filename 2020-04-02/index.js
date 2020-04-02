// 先去获取数据
let ary = [];
function getData(){
  // 使用 ajax（是用来获取数据的一种技术） 去获取数据
  let xhr = new XMLHttpRequest();
  xhr.open('get','./product.json');
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      let data = JSON.parse(xhr.response);
      console.log(data);
      ary = data;
      render(data);
    }
  }
  xhr.send();
}
getData();

// 渲染数据
function render(data=[]) {
  let str = '';
  data.forEach(item=>{
    str += `<li class='li_box'>
              <div class="img_box">
                <img src="${item.img}" alt="">
              </div>
              <h2>${item.title}</h2>
              <div class="price_box">
                <span class="price">￥${item.price.toFixed(2)}</span>
                <span class="select_icon">多款可选</span>
              </div>
              <ul class="feature_box">
                <li>好使</li>
                <li>限时抢购</li>
              </ul>
              <div class="comment_box">
                <span>${item.hot}人评价</span>
                <span>99%好评</span>
              </div>
            </li>`
  })
  let n = data.length%5;
  if(n){
    for(let i = 0; i < 5-n;i++){
      str += '<li></li>'
    }
  } 
  let ul = document.querySelector('.phone_list_box');
  ul.innerHTML = str;
}

// 点击排序  点击的时候 把数据按照指定的参数进行排序 然后重新render;

let timeBtn = document.getElementsByClassName('sort_btn')[1];
timeBtn.flag = 1;
timeBtn.onclick = function(){
  
  // 把数据按照 时间进行排序  然后 再去执行render函数
  console.log(ary)
  // this.flag *= (-1);
  this.flag = this.flag * -1
  let temp = ary.sort((a,b)=>{
    return (a.time - b.time)*this.flag;
  })
  render(temp);
}
//点击排序 点击时候把数据按照销量排序，然后重新render；
let numBtn = document.getElementsByClassName('sort_btn')[2];
numBtn.flag = 1;
numBtn.onclick = function () {
    this.flag *= (-1)
    let temp = ary.sort((a, b) => {
        return (a.hot - b.hot) * this.flag;
    })
    render(temp);
}
//点击排序 点击时候把数据按照价格排序，然后重新render；
let priceBtn = document.getElementsByClassName('sort_btn')[3];
priceBtn.flag = 1;
priceBtn.onclick = function () {
    this.flag *= (-1)
    let temp = ary.sort((a, b) => {
        return (a.price - b.price) * this.flag;
    })
    render(temp);
}
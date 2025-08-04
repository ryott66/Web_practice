
const counts = {
  coffee: 0,
  tea: 0,
  milk: 0,
  coke: 0,
  beer: 0
};

const prices = {
  coffee: 480,
  tea: 280,
  milk: 180,
  coke: 190,
  beer: 580
};


function addcount(menu_type) {
  const idname = `${menu_type}-count`;
  const countnum = document.getElementById(idname);
  counts[menu_type] += 1;
  countnum.textContent = counts[menu_type];
}

function calcPrice() {
  let total_count = 0;
  let total_price = 0;

  for ( let key in counts) {
    total_count += counts[key];
    total_price += prices[key] * counts[key];
  }

  document.getElementById("count").textContent = total_count;
  document.getElementById("price").textContent = total_price;

}


function addEvent(menu_type) {
  const menu = document .getElementById(menu_type);
  menu.addEventListener("click", () =>{
    // カウント表示を増やす
    addcount(menu_type);
    // 商品数、合計金額の計算、表示
    calcPrice();
  });

}

for (const menu_type in counts) {
  addEvent(menu_type);
}




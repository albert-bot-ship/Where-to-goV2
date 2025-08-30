// 地點對應表
const placeMap = {
  "五權立體停車場": "https://maps.app.goo.gl/jsPuNCQdJV8wyrPb8",
  "逢甲常停的地方": "https://maps.app.goo.gl/fc1zstKVmqHa2k9P8",
  "大慶 30停車場": "https://maps.app.goo.gl/VL1FN7tTRX118fqm8",
  "大遠百停車場":"https://maps.app.goo.gl/4PWzGXKi4DA3868o7",
  "上班停車": "https://maps.app.goo.gl/UmGX9XsFhTDaNfx57",
  "下班停車": "https://maps.app.goo.gl/Mh1zR6YkECsAWPzY7",
  "文英宿舍": "https://maps.app.goo.gl/RhPCZtmqa8vcYj5N9",
  "旱溪夜市停車":"https://maps.app.goo.gl/mCbovzJzY62h9aRy7",
  "平祿壽司-松竹店":"https://maps.app.goo.gl/QUKnW17M1kXp211G6",
  "老婆上班的地方":"https://maps.app.goo.gl/81WdBkR1TA23PGRs5",
  "中油-五權":"https://maps.app.goo.gl/4ZYYLggppoeYTZt6A",
  "中油-青海":"https://maps.app.goo.gl/JLh6gGwyE5z1W44u7",
  "阿蘭碗粿":"https://maps.app.goo.gl/kEim8aHX6ZdYj4zR7",
  "豐原太平洋百貨":"https://maps.app.goo.gl/PgCybHoKBzEFeZzo6",
  "公司":"https://maps.app.goo.gl/zzFXP59ihaoESLgd6",
  "家":"https://maps.app.goo.gl/pdsiyFZep6NCo6bS6",
};

// 元件
const input = document.getElementById('location');
const suggestions = document.getElementById('suggestions');
const navigateBtn = document.getElementById('navigateBtn');

function navigateTo(location) {
  const url = placeMap[location] || `https://www.google.com/maps/search/?q=${encodeURIComponent(location)}`;
  window.open(url, '_blank');
}

// 搜尋建議
input.addEventListener('input', () => {
  const query = input.value.trim().toLowerCase();
  suggestions.innerHTML = '';
  if (query) {
    const matches = Object.keys(placeMap).filter(place => place.toLowerCase().includes(query));
    matches.forEach(match => {
      const li = document.createElement('li');
      li.textContent = match;
      li.onclick = () => {
        input.value = match;
        suggestions.style.display = 'none';
        navigateTo(match);
      };
      suggestions.appendChild(li);
    });
    suggestions.style.display = matches.length ? 'block' : 'none';
  } else {
    suggestions.style.display = 'none';
  }
});

// 點擊搜尋按鈕
navigateBtn.addEventListener('click', () => {
  const location = input.value.trim();
  if (location) {
    navigateTo(location);
  } else {
    alert('請輸入地點名稱或網址');
  }
});

// 點擊字卡直接導航
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('click', () => {
    const place = card.querySelector('p').textContent;
    navigateTo(place);
  });
});

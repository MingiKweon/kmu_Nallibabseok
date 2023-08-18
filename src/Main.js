const Main = () => {
  let now = new Date();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  let daynight = "오전 ";
  if (hours > 12) {
    daynight = "오후 ";
    hours = hours - 12;
  }
  return (
    <div>
      <h2>한울식당</h2>
      {daynight} {hours}시 {minutes}분
      <div className="menu">
        오징어무국
        <br />
        쌀밥/계란후라이
        <br />
        사각햄볶음
        <br />
        데리야끼맛김
      </div>
      <br />
      ₩3300
    </div>
  );
};

export default Main;

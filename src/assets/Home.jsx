import "./HomeStyle.css";

export default function Home() {
  return (
    <section className="home-container" id="home-container">
      <div className="right-section">
        <img src="13.jpg" alt="students" />
        <img src="11.jpg" alt="students" />
        <img src="12.jpg" alt="students" />
      </div>
      <div className="left-section">
        <h1>اشتغل على تنمية مهاراتك في مختلف المجالات لتحسين فرصك في سوق العمل!</h1>
        <h4>هنفهمك و نساعدك تلاقي طريقك</h4>
        <h6>بدئا من اكتوبر ,2023</h6>
        <h6>في جامعة القاهرة</h6>
        <a href="/">سجل في المبادرة !</a>
      </div>
    </section>
  );
}

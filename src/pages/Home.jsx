

import faithImage from "../assets/faith.jpeg";

function Home() {
  return (
    <section className="home-hero">
      <div className="home-intro">
        <h1>Welcome to my portfolio</h1>
        <p>
          Hello, I'm Faith Emmanuel! I'm a Computer Science student and an
          aspiring frontend developer passionate about technology and
          creativity. I'm learning to turn ideas into beautiful, functional
          websites using HTML, CSS, JavaScript, and React. I'm learning,
          building, and growing one project at a time!
        </p>
      </div>
      <img className="home-portrait" src={faithImage} alt="Faith Emmanuel" />
    </section>
  );
}

export default Home;
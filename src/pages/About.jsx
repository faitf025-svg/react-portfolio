function About() {
    return (
        <div className="about">
            <section className="about-intro">
                <h1>About Me</h1>
                <p>
                    I study Computer Science at Modibbo Adama University in Yola. I enjoy
                    learning about technology, web development, and creating useful websites.
                    I am currently developing my coding skills and gaining practical
                    experience through my SIWES training at Toko Academy.
                </p>
            </section>

            <section className="about-section">
                <h2>Experience</h2>
                <h3 className="about-role">SIWES Industrial Trainee</h3>
                <p className="about-meta">Toko Academy, Nigeria · May 2026–Present</p>
                <p>
                    Gaining practical experience in frontend development, digital tools,
                    content creation, and teamwork while connecting academic knowledge with
                    industry practice.
                </p>
            </section>

            <section className="about-section">
                <h2>Education</h2>
                <h3>BSc Computer Science</h3>
                <p className="about-meta">Modibbo Adama University, Yola</p>
                <p>Currently in progress.</p>
            </section>

            <section className="about-section">
                <h2>Skills &amp; Tools</h2>
                <ul className="skills-list">
                    <li>HTML &amp; CSS</li>
                    <li>JavaScript basics</li>
                    <li>React basics</li>
                    <li>GitHub</li>
                    <li>VS Code</li>
                    <li>Microsoft Office &amp; Google Workspace</li>
                    <li>Graphic design basics</li>
                </ul>
            </section>
        </div>
    );
}

export default About;
import React from 'react';
import Sidebar from '../sidebar';
import Footer from '../footer';

const Skill = () => {
  return (
    <div>
      <main>
        <div id="content">
          <article id="skill" className="card">
            <h2 id="skill">Skill</h2>
            <ul>
              <li>CSS, HTML, PHP, Javascript</li>
              <li>Python, Java, C++, Dart</li>
              <li>Bootstrap</li>
              <li>Codeigniter</li>
            </ul>
          </article>
        </div>
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
};
export default Skill;

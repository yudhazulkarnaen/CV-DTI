import React from 'react';
import Sidebar from '../sidebar';
import Footer from '../footer';

const Certificate = () => {
  return (
    <div>
      <main>
        <div id="content">
          <article id="certificate" className="card">
            <h2 id="certificate">Certificate</h2>
            <ul>
              <li>
                Belajar Fundamental Front-End Web Development at Dicoding
                Academy
              </li>
              <li>Belajar Machine Learning untuk Pemula at Dicoding Academy</li>
              <li>Belajar Dasar Visualisasi Data at Dicoding Academy</li>
              <li>Belajar Prinsip Pemrograman SOLID at Dicoding Academy</li>
              <li>Belajar Dasar Pemrograman Web at Dicoding Academy</li>
              <li>Memulai Pemrograman Dengan Dart at Dicoding Academy</li>
              <li>Memulai Pemrograman Dengan Python at Dicoding Academy</li>
            </ul>
          </article>
        </div>
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
};
export default Certificate;

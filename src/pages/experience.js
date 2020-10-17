import React from 'react';
import Sidebar from '../sidebar';
import Footer from '../footer';

const Experience = () => {
  return (
    <div>
      <main>
        <div id="content">
          <article id="experience" className="card">
            <h2 id="experience">Experience</h2>
            <ul>
              <li>
                Internship Sebagai Quality Assurace di PT.Finnet Indonesia
              </li>
              <li>Membuat Website untuk PT.Putra Jaya Darma</li>
              <li>Asisten Dosen Matematika Diskrit A di Telkom University</li>
              <li>Ketua LDK Al-Fath Fakultas Informatika 2019</li>
              <li>Ketua Divisi Logistik SHARE 2019</li>
              <li>
                Anggota Web Development UKM CCI E-Vote Pemira FEB FKB 2018
              </li>
              <li>Anggota UKM Divisi Web Development UKM CCI</li>
              <li>
                Anggota Divisi Logistik Grab It Fast 2018 Family of
                Raincity(Forcy)
              </li>
              <li>Anggota Divisi Logistik Nihon no Matsuri X</li>
              <li>Anggota Divisi Logistik SHARE 2018</li>
            </ul>
          </article>
        </div>
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
};
export default Experience;

/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Sidebar = () => {
  return (
    <aside>
      <article className="profile">
        <header>
          <h2>Identitas Diri</h2>
          <figure>
            <img src={require('./face.jpg')} />
            <figcaption>
              Seorang mahasiswa Universitas Telkom yang biasa dipanggil Yudha
              Pada tahun ini dia sedang menempuh pendidikan di Fakultas
              Informatika Jurusan S1 Informatika.
            </figcaption>
          </figure>
        </header>
        <section>
          <h3>Informasi Data Diri</h3>
          <table>
            <tr>
              <th>Nama</th>
              <td>Muhamad Zulkarnaen Yudha Bahari</td>
            </tr>
            <tr>
              <th>Tanggal Lahir</th>
              <td>8 Maret 2000</td>
            </tr>
            <tr>
              <th>Kota Asal</th>
              <td>Bogor</td>
            </tr>
            <tr>
              <th>Hobi</th>
              <td>Nonton Film</td>
            </tr>
            <tr>
              <th>No. Telepon</th>
              <td>081299413339</td>
            </tr>
          </table>
        </section>
      </article>
    </aside>
  );
};

export default Sidebar;

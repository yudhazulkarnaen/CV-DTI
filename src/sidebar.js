/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useContext } from 'react';

const Sidebar = () => {
  const [donasi, setDonasi] = useState(0);
  const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
  const ThemeContext = React.createContext(themes.light);

  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <>
        <button
          type="submit"
          style={{ background: theme.background, color: theme.foreground }}
          onClick={() => {
            setDonasi(donasi + 10000);
          }}
        >
          Tambah Donasi
        </button>
      </>
    );
  }

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
          <h3>Donasi (Penggunaan useState dan useContext)</h3>
          <p>
            Fitur ini digunakan untuk anda yang ingin berdonasi kepada
            masyarakat kurang mampu
          </p>
          <p>
            <b>{`Anda akan berdonasi Rp.${donasi}`}</b>
          </p>
          <center>
            {/* <button
              type="submit"
              onClick={() => {
                setDonasi(donasi + 10000);
              }}
            >
              Tambah Donasi
            </button> */}
            <ThemeContext.Provider value={themes.dark}>
              <ThemedButton />
            </ThemeContext.Provider>
          </center>
        </section>
      </article>
    </aside>
  );
};

export default Sidebar;

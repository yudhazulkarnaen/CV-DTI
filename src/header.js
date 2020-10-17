/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const listMenu = ['experience', 'skill', 'certificate'];
  return (
    <div>
      <div className="jumbotron">
        <h1>Curriculum Vitae</h1>
        <p>
          Muhamad Zulkarnaen Yudha Bahari | Front End Developer |
          yudhazulkarnaen@gmail.com.
        </p>
      </div>
      <nav>
        <ul>
          {listMenu.map((name) => {
            return (
              <Link to={`/${name}`} key={name}>
                <li>
                  <a>{name}</a>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Header;

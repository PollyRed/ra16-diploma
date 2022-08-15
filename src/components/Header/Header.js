import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeSearchField } from '../../actions/actionCreator';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    search: '',
    visible: false,
 });

  const onSearch = (e) => {
    e.preventDefault();
    if (form.search.trim()) {
        dispatch(changeSearchField(form.search));
        setForm((prev) => ({ ...prev, search: '' }));
        navigate('/catalog');
    }
    setForm((prev) => ({ ...prev, visible: !form.visible }));
  };

  const onChangeField = (e) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, search: value }));
  };

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/"> </a>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Главная</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catalog">Каталог</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">О магазине</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contacts">Контакты</a>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={onSearch} onKeyPress={onSearch}></div>
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form
                  data-id="search-form"
                  className={
                    form.visible === true
                        ? 'header-controls-search-form form-inline'
                        : 'header-controls-search-form form-inline invisible'
                  }
                  onSubmit={onSearch}
                >
                  <input
                    className="form-control"
                    placeholder="Поиск"
                    name="search"
                    onChange={onChangeField}
                    value={form.search}
                  />
              </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

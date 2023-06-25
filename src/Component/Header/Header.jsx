import React, { useEffect, useState } from 'react'
import './Header.css';
import logo from '../../assets/Images/logo.png';
import dot_icon from '../../assets/Images/side_bar_menu.png'
import { Icon } from '@iconify/react';
import Button1 from '../Button1/Button1';

const Header = () => {
  const [searchField, setSearchField] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [mobileMenuBar, setMobileMenuBar] = useState(false)
  const [sticky, setSticky] = useState('')

  useEffect(() => {
    const headerSticky = () => {
      if (window.scrollY >= 150) {
        setSticky('sticky')
      } else {
        setSticky('')
      }
    };
    window.addEventListener('scroll', headerSticky);
  }, []);

  const handleMobileMenuBar = () => {
    setMobileMenuBar(!mobileMenuBar)
  }

  const handleSideBar = () => {
    setSideBar(!sideBar)
  }

  const handleSearchfield = () => {
    setSearchField(!searchField)
  }
  return (
    <div>
      <header>
        <div className='header-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-12'>
                <div className='header-left'>
                  <a href="#">Call Me (+55) -66 99 88</a>
                  <span>/</span>
                  <a href="#">info.Glenic@gmail.com</a>
                </div>
              </div>
              <div className='col-lg-6 col-md-12'>
                <div className='header-right'>
                  <div className='social-icon-div'>
                    <span>
                      <a href="#">
                        <Icon height={20} icon="gg:facebook" />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <Icon height={20} icon="ri:instagram-line" />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <Icon height={20} icon="icon-park-outline:dribble" />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <Icon height={20} icon="ri:behance-fill" />
                      </a>
                    </span>
                  </div>
                  <div className='lets-talk-btn'>
                    <a href="#">
                      Let's Talk
                      <Icon height={20} icon="solar:arrow-right-outline" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`header-bottom ${sticky}`}>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-sm-4 col-5 align-self-center'>
                <div className='logo'>
                  <a href="">
                    <img src={logo} alt="medihelth" />
                  </a>
                </div>
              </div>
              <div className='col-lg-9 col-sm-8 col-7 align-self-center'>
                <div className='header-bottom-menu'>
                  <div>
                    <ul>
                      <li>
                        <a href="#">
                          Home
                        </a>
                        <ul>
                          <li>
                            <a href="#">Home 1</a>
                          </li>
                          <li>
                            <a href="#">Home 2</a>
                          </li>
                          <li>
                            <a href="#">Home 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Pages
                        </a>
                        <ul>
                          <li>
                            <a href="#">Pages 1</a>
                          </li>
                          <li>
                            <a href="#">Pages 2</a>
                          </li>
                          <li>
                            <a href="#">Pages 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Services
                        </a>
                        <ul>
                          <li>
                            <a href="#">Services 1</a>
                          </li>
                          <li>
                            <a href="#">Services 2</a>
                          </li>
                          <li>
                            <a href="#">Services 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Projects
                        </a>
                        <ul>
                          <li>
                            <a href="#">Projects 1</a>
                          </li>
                          <li>
                            <a href="#">Projects 2</a>
                          </li>
                          <li>
                            <a href="#">Projects 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Blog
                        </a>
                        <ul>
                          <li>
                            <a href="#">Blog 1</a>
                          </li>
                          <li>
                            <a href="#">Blog 2</a>
                          </li>
                          <li>
                            <a href="#">Blog 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='header-bottom-right'>
                  <div className='header-search'>
                    <div onClick={handleSearchfield} className='header-search-icon'>
                      {
                        !searchField ?
                          <Icon height={30} icon="ic:round-search" />
                          :
                          <Icon height={30} icon="system-uicons:cross" />
                      }
                    </div>
                    <div className={`header-search-dropdown ${searchField ? 'active' : ''}`}>
                      <div className='header-search-form-div'>
                        <form>
                          <input placeholder='Search...' type="text" />
                          <button type='submit'>
                            <Icon height={30} icon="ic:round-search" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className='header-language'>
                    <div className='header-language-option'>
                      <span>FR</span>
                      <span className='active'>EN</span>
                      <span><Icon height={22} icon="icon-park-outline:down" /></span>
                    </div>
                    <div className='language-dropdown'>
                      <ul>
                        <li>
                          EN
                        </li>
                        <li>
                          BD
                        </li>
                        <li>
                          FR
                        </li>
                        <li>
                          IN
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div onClick={handleSideBar} className='header-sidebar-icon'>
                    <img src={dot_icon} alt="" />
                  </div>
                </div>
                <div onClick={handleMobileMenuBar} className='mobile-menu-icon'>
                  <span>
                    <a href="#"><Icon height={26} icon="line-md:menu" /></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='mobile-menu'>
        <div className={`mobile-menu-overlay ${mobileMenuBar || sideBar ? 'active' : ''}`}></div>
        <div className={`mobile-menu-section ${mobileMenuBar ? 'active' : ''}`}>
          <div onClick={handleMobileMenuBar} className='mobile-cross-icon'>
            <Icon height={30} icon="system-uicons:cross" />
          </div>
          <div className='mobile-menu-logo' >
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="mobile-menu-content">
            <div className='header-bottom-mobile-menu'>
              <div>
                <ul>
                  <li>
                    <a href="#">
                      Home
                      <span><Icon height={22} icon="icon-park-outline:down" /></span>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Home 1</a>
                      </li>
                      <li>
                        <a href="#">Home 2</a>
                      </li>
                      <li>
                        <a href="#">Home 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Pages
                      <span><Icon height={22} icon="icon-park-outline:down" /></span>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Pages 1</a>
                      </li>
                      <li>
                        <a href="#">Pages 2</a>
                      </li>
                      <li>
                        <a href="#">Pages 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Services
                      <span><Icon height={22} icon="icon-park-outline:down" /></span>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Services 1</a>
                      </li>
                      <li>
                        <a href="#">Services 2</a>
                      </li>
                      <li>
                        <a href="#">Services 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Projects
                      <span><Icon height={22} icon="icon-park-outline:down" /></span>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Projects 1</a>
                      </li>
                      <li>
                        <a href="#">Projects 2</a>
                      </li>
                      <li>
                        <a href="#">Projects 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Blog
                      <span><Icon height={22} icon="icon-park-outline:down" /></span>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Blog 1</a>
                      </li>
                      <li>
                        <a href="#">Blog 2</a>
                      </li>
                      <li>
                        <a href="#">Blog 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-sidebar'>
        <div className={`sidebar-overlay ${sideBar || mobileMenuBar ? 'active' : ''}`}></div>
        <div className={`sidebar-section ${sideBar ? 'active' : ''}`}>
          <div onClick={handleSideBar} className='cross-icon'>
            <Icon height={30} icon="system-uicons:cross" />
          </div>
          <div className='logo-div'>
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className='sidebar-content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi, quia hic itaque consequatur quo eum. Quasi hic atque explicabo rem, soluta maxime dolorem unde corrupti tempore pariatur consequatur numquam, nam facilis, modi velit quidem nulla tenetur inventore omnis! Quos possimus nostrum sit a! Quod suscipit labore id obcaecati ut.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ab totam velit eius voluptate nihil sequi doloremque porro ipsam non.</p>
            <Button1 ButtonText={'Contact Us'} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
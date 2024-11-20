"use client";

import Link from "next/link";

export default function HeaderComponent() {
  return (
    <>
      <div id="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul id="top-buttons">
                <li><a href="#"><i className="fa fa-sign-in"></i> Login</a></li>
                <li><a href="#"><i className="fa fa-pencil-square-o"></i> Register</a></li>
                <li className="divider"></li>
                <li>
                  <div className="language-switcher">
                    <span><i className="fa fa-globe"></i> English</span>
                    <ul>
                      <li><a href="#">Deutsch</a></li>
                      <li><a href="#">Espa&ntilde;ol</a></li>
                      <li><a href="#">Fran&ccedil;ais</a></li>
                      <li><a href="#">Portugu&ecirc;s</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <form id="site-search">
                    <span><i className="fa fa-search"></i></span>
                    <input type="text" name="q" placeholder="Search" />
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="nav-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Link href="/" className="nav-logo"><img src="/images/logo.png" alt="One Ring Rentals" /></Link>

              <nav className="navbar">
                <button id="nav-mobile-btn"><i className="fa fa-bars"></i></button>

                <ul className="nav navbar-nav">
                  <li><a href="#">Find a Rental</a></li>
                  <li><a href="#">List your rental</a></li>
                  <li><Link  href="/regions">Regions</Link></li>
                  <li><Link href="/news">News</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>

              </nav>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}



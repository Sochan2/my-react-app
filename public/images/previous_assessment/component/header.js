import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

function HeaderComponent() {
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
              <a href="index.html" className="nav-logo"><img src="images/logo.png" alt="One Ring Rentals" /></a>
              <nav className="navbar">
                <button id="nav-mobile-btn"><i className="fa fa-bars"></i></button>
                <ul className="nav navbar-nav">
                  <li><a href="#">Find a Rental</a></li>
                  <li><a href="#">List your rental</a></li>
                  <li><a href="regions.html">Regions</a></li>
                  <li><a href="news.html">News</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);  // クライアントサイドでコンポーネントがマウントされたことを示す

    if (mounted) {
      const headerElement = document.getElementById("header");
      if (headerElement) {
        const root = createRoot(headerElement);
        root.render(<HeaderComponent />);  // HeaderComponent をレンダリング
      }
    }
  }, [mounted]);  // `mounted` ステートの変化に依存

  // サーバーサイドでは何もレンダリングしない
  return null;
}

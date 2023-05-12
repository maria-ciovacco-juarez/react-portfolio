import React from 'react';

function Header() {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">MCJ</a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            {/* <Navbar /> */}
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          205.383.6223
        </section>
        <section className="header-bottom__email">
          ciovaccomaria@gmail.
        </section>
      </section>
    </section>
  )
}

export default Header;
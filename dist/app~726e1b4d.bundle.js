(()=>{"use strict";var n,A={9952:(n,A,e)=>{e.d(A,{Z:()=>m});var o=e(7537),r=e.n(o),i=e(3645),t=e.n(i),a=e(1667),d=e.n(a),E=new URL(e(5353),e.b),s=new URL(e(3971),e.b),B=new URL(e(3363),e.b),l=t()(r()),p=d()(E),c=d()(s),C=d()(B);l.push([n.id,`@font-face {\n  font-family: 'opensans';\n  src: url(${p}) format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'opensans';\n  src: url(${c}) format('woff');\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'poppins';\n  src: url(${C}) format('woff');\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n`,"",{version:3,sources:["webpack://./src/styles/fonts.css"],names:[],mappings:"AAAA;EACE,uBAAuB;EACvB,2DAAwE;EACxE,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,2DAAqE;EACrE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,2DAA4D;EAC5D,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;AACpB",sourcesContent:["@font-face {\r\n  font-family: 'opensans';\r\n  src: url('../public/fonts/OpenSans-Regular-webfont.woff') format('woff');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'opensans';\r\n  src: url('../public/fonts/OpenSans-Bold-webfont.woff') format('woff');\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'poppins';\r\n  src: url('../public/fonts/Poppins-Bold.woff') format('woff');\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n"],sourceRoot:""}]);const m=l},8756:(n,A,e)=>{e.d(A,{Z:()=>l});var o=e(7537),r=e.n(o),i=e(3645),t=e.n(i),a=e(1667),d=e.n(a),E=new URL(e(1541),e.b),s=t()(r()),B=d()(E);s.push([n.id,`* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: 'opensans', sans-serif;\n  font-size: 12px;\n  color: #3f3f46;\n  background-color: #e8e1d9;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #bf1722;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n/* \n* \n* HEADER NAV\n* \n*/\n\n.container {\n  padding: 0 8rem;\n}\n\n#nav {\n  display: flex;\n  position: fixed;\n  z-index: 10;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: #ffc107;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo-brand {\n  padding: 1rem;\n}\n\n.nav-menu {\n  padding: 1rem;\n  font-size: 1rem;\n}\n\n.logo-brand-link {\n  display: flex;\n  align-items: center;\n}\n\n.logo-brand a {\n  text-decoration: none;\n  color: #3f3f46;\n}\n\n.logo-brand-link img {\n  height: 50px;\n  width: 100%;\n  margin-right: 10px;\n}\n\n.logo-brand-link span {\n  font-size: 2rem;\n  font-family: 'poppins', sans-serif;\n}\n\n.nav-list {\n  display: flex;\n  list-style: none;\n}\n\n.nav-item {\n  margin-left: 30px;\n}\n\n.nav-item a {\n  text-decoration: none;\n  color: #3f3f46;\n  font-weight: bold;\n  padding: 16px;\n}\n\n.nav-link:hover {\n  color: #000;\n}\n\n.hamburger {\n  display: none;\n}\n\n.hamburger a {\n  text-decoration: none;\n  color: #fff;\n  font-size: 1.5rem;\n  padding: 16px;\n  background-color: #f54748;\n}\n\n@media screen and (max-width: 576px) {\n  .container {\n    padding: 0 2rem;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .container {\n    padding: 0 4rem;\n  }\n\n  .hamburger {\n    display: block;\n  }\n\n  .nav-list {\n    flex-direction: column;\n  }\n\n  .nav-item {\n    padding: 30px 20px;\n    text-align: right;\n  }\n\n  #drawer {\n    position: fixed;\n    width: 100%;\n    top: 80px;\n    right: 0;\n    background-color: #ffc107;\n    transform: translate(1000px, 0);\n\n    transition: transform 0.3s ease-in-out;\n  }\n\n  #drawer.open {\n    transform: translate(0, 0);\n  }\n}\n\n/* \n*\n* HEADER HERO\n*\n */\n\n.hero-container {\n  background: linear-gradient(rgb(5, 71, 71, 0.5), rgba(3, 46, 46, 0.7)),\n    url(${B});\n  background-size: cover;\n  background-position: center;\n  margin: 8rem 8rem 2rem 8rem;\n  border-radius: 2rem;\n  background-color: #125c13;\n}\n\n.hero-body {\n  padding: 130px;\n  text-align: center;\n  color: #e8e1d9;\n}\n\n.hero-body h1 {\n  font-size: 2rem;\n}\n\n.hero-body p {\n  font-size: 1.25rem;\n}\n\n@media screen and (max-width: 768px) {\n  .hero-container {\n    margin: 6rem 4rem;\n  }\n\n  .hero-body h1 {\n    font-size: 1.5rem;\n  }\n\n  .hero-body p {\n    font-size: 1rem;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .hero-container {\n    margin: 6rem 1rem !important;\n    border-radius: 1rem;\n  }\n\n  .hero-body {\n    padding: 100px 20px;\n  }\n\n  .container {\n    padding: 0 1rem;\n  }\n}\n\n/* \n*\n* MAIN\n*\n */\n\nmain {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n/* \n*\n* MAIN HEADER\n*\n */\n\n.main-header {\n  padding-top: 50px;\n  margin-bottom: 50px;\n  font-size: 1.2rem;\n}\n\n.main-header h2:focus {\n  outline: 3px solid orange;\n}\n\n.underline {\n  min-height: 3px;\n  background-color: #f4a442;\n  width: 250px;\n}\n\n/* \n*\n* CARD \n*\n */\n\n.main-body {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 20px;\n}\n\n.card {\n  width: 20rem;\n  font-size: 0.9rem;\n  background-color: #fff;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);\n  border-radius: 0.5rem;\n  padding: 8px;\n  cursor: pointer;\n}\n\n.card a {\n  padding: 12px;\n}\n\n.card:focus {\n  outline: 3px solid orange;\n}\n\n.card-image {\n  /* position: relative; */\n}\n\n.rating {\n  background-color: #e8e1d9;\n  padding: 5px;\n  border-radius: 8px;\n  font-weight: bold;\n  color: #2d580e;\n}\n\n.rating:focus {\n  outline: 3px solid #bf1722;\n}\n\n.card-image img {\n  width: 100%;\n  height: 200px;\n  border-radius: 0.5rem;\n  object-fit: cover;\n}\n\n.card-body {\n  margin-top: 10px;\n}\n\n.card-body:focus {\n  outline: 3px solid orange;\n}\n\n.card-body h3 {\n  font-size: 1.3rem;\n}\n\n.card-title {\n  margin-bottom: 10px;\n  color: #125c13;\n}\n\n.card-title:focus {\n  outline: 3px solid orange;\n}\n\n.card-desc {\n  text-align: justify;\n}\n\n.card-desc:focus {\n  outline: 3px solid orange;\n}\n\n.card-footer {\n  color: #3e7c17;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin-bottom: 10px;\n  text-align: right;\n}\n\n.card-footer:focus {\n  outline: 3px solid orange;\n}\n\n.card-footer img {\n  height: 15px;\n  width: 15px;\n  margin-right: 5px;\n}\n\n/* \n*\n* DETAIL \n*\n */\n.detail-container {\n  font-size: 1rem;\n  background-color: #fff;\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.detail-resto {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: start;\n  margin: 20px 0;\n}\n\n.detail-resto-img img {\n  width: 100%;\n  height: calc(282px + 5vw);\n  border-radius: 0.5rem;\n  object-fit: cover;\n  overflow: hidden;\n}\n\n.detail-resto-content {\n  padding: 16px 32px;\n  flex: 4 1 40ch;\n}\n\n.detail-resto-tags {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.resto-rating {\n  background-color: #e8e1d9;\n  padding: 5px;\n  border-radius: 8px;\n  font-weight: bold;\n  color: #2d580e;\n  font-size: 1.2rem;\n}\n\n.resto-rating:focus {\n  outline: 3px solid #bf1722;\n}\n\n.resto-rating img {\n  width: 20px !important;\n  margin-right: 4px;\n}\n\n.resto-tag {\n  display: inline-block;\n  margin: 8px;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #fff;\n  background-color: #f54748;\n  padding: 0.1rem 0.7rem;\n  border-radius: 1rem;\n}\n\n.resto-desc {\n  margin: 20px 0;\n}\n\n.resto-desc:focus {\n  outline: 3px solid #bf1722;\n}\n\n.resto-location {\n  color: #3e7c17;\n  font-weight: bold;\n}\n\n.resto-location:focus {\n  outline: 3px solid #bf1722;\n}\n\n.resto-location img {\n  margin-right: 5px;\n}\n\n.resto-menu {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  gap: 1rem;\n  /* margin: 2rem 0; */\n}\n\n.resto-menu:focus {\n  outline: 3px solid #bf1722;\n}\n\n.food {\n  padding: 1rem;\n}\n\n.food h3 {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.food-item {\n  font-size: 1.2rem;\n  margin: 0 1.5rem;\n}\n\n.food-item p {\n  margin-bottom: 0.5rem;\n}\n\n.food-item span {\n  margin-right: 1rem;\n}\n\n.review-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  gap: 1rem;\n  margin: 2rem 0;\n}\n\n.review-title {\n  font-size: 1.5rem;\n}\n\n.review-item {\n  width: 320px;\n  background-color: #d8dee4;\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.review-name {\n  font-weight: bold;\n}\n\n.review-date {\n  font-size: 0.7rem;\n}\n\n.review-desc {\n  font-size: 0.9rem;\n  font-style: italic;\n  margin-top: 8px;\n}\n\n/* \n*\n* FOOTER\n*\n */\n\n.mapouter {\n  margin: auto;\n  text-align: right;\n  height: 447px;\n  width: 100%;\n}\n\nfooter {\n  background-color: #ffc107;\n  color: #3f3f46;\n  font-weight: bold;\n  text-align: center;\n  padding: 30px;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/* \n  LOADING INDICATOR\n*/\n\n#loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.loader {\n  margin: 0 0 2em;\n  height: 100px;\n  width: 20%;\n  text-align: center;\n  padding: 1em;\n  margin: 0 auto 1em;\n  display: inline-block;\n  vertical-align: top;\n}\n\nsvg path,\nsvg rect {\n  fill: #ff6700;\n}\n\n/* \n  BUTTON\n*/\n\n.btn {\n  background-color: rgba(137, 44, 220, 0.1);\n  border: 2px solid #8e0b0b;\n  padding: 6px 15px;\n  border-radius: 5px;\n  color: #8e0b0b;\n  font-weight: bold;\n  transition: 0.3s;\n  text-align: center;\n}\n\n.btn:hover {\n  color: #fff;\n  background-color: #f54748;\n}\n\n.btn-menu {\n  display: block;\n}\n\n.btn-cta {\n  font-size: 1rem;\n}\n\n.show-more {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 3rem;\n}\n`,"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: 'opensans', sans-serif;\n  font-size: 12px;\n  color: #3f3f46;\n  background-color: #e8e1d9;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #bf1722;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n/* \n* \n* HEADER NAV\n* \n*/\n\n.container {\n  padding: 0 8rem;\n}\n\n#nav {\n  display: flex;\n  position: fixed;\n  z-index: 10;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: #ffc107;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo-brand {\n  padding: 1rem;\n}\n\n.nav-menu {\n  padding: 1rem;\n  font-size: 1rem;\n}\n\n.logo-brand-link {\n  display: flex;\n  align-items: center;\n}\n\n.logo-brand a {\n  text-decoration: none;\n  color: #3f3f46;\n}\n\n.logo-brand-link img {\n  height: 50px;\n  width: 100%;\n  margin-right: 10px;\n}\n\n.logo-brand-link span {\n  font-size: 2rem;\n  font-family: 'poppins', sans-serif;\n}\n\n.nav-list {\n  display: flex;\n  list-style: none;\n}\n\n.nav-item {\n  margin-left: 30px;\n}\n\n.nav-item a {\n  text-decoration: none;\n  color: #3f3f46;\n  font-weight: bold;\n  padding: 16px;\n}\n\n.nav-link:hover {\n  color: #000;\n}\n\n.hamburger {\n  display: none;\n}\n\n.hamburger a {\n  text-decoration: none;\n  color: #fff;\n  font-size: 1.5rem;\n  padding: 16px;\n  background-color: #f54748;\n}\n\n@media screen and (max-width: 576px) {\n  .container {\n    padding: 0 2rem;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .container {\n    padding: 0 4rem;\n  }\n\n  .hamburger {\n    display: block;\n  }\n\n  .nav-list {\n    flex-direction: column;\n  }\n\n  .nav-item {\n    padding: 30px 20px;\n    text-align: right;\n  }\n\n  #drawer {\n    position: fixed;\n    width: 100%;\n    top: 80px;\n    right: 0;\n    background-color: #ffc107;\n    transform: translate(1000px, 0);\n\n    transition: transform 0.3s ease-in-out;\n  }\n\n  #drawer.open {\n    transform: translate(0, 0);\n  }\n}\n\n/* \n*\n* HEADER HERO\n*\n */\n\n.hero-container {\n  background: linear-gradient(rgb(5, 71, 71, 0.5), rgba(3, 46, 46, 0.7)),\n    url('../public/images/heros/hero-image_2.jpg');\n  background-size: cover;\n  background-position: center;\n  margin: 8rem 8rem 2rem 8rem;\n  border-radius: 2rem;\n  background-color: #125c13;\n}\n\n.hero-body {\n  padding: 130px;\n  text-align: center;\n  color: #e8e1d9;\n}\n\n.hero-body h1 {\n  font-size: 2rem;\n}\n\n.hero-body p {\n  font-size: 1.25rem;\n}\n\n@media screen and (max-width: 768px) {\n  .hero-container {\n    margin: 6rem 4rem;\n  }\n\n  .hero-body h1 {\n    font-size: 1.5rem;\n  }\n\n  .hero-body p {\n    font-size: 1rem;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .hero-container {\n    margin: 6rem 1rem !important;\n    border-radius: 1rem;\n  }\n\n  .hero-body {\n    padding: 100px 20px;\n  }\n\n  .container {\n    padding: 0 1rem;\n  }\n}\n\n/* \n*\n* MAIN\n*\n */\n\nmain {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n/* \n*\n* MAIN HEADER\n*\n */\n\n.main-header {\n  padding-top: 50px;\n  margin-bottom: 50px;\n  font-size: 1.2rem;\n}\n\n.main-header h2:focus {\n  outline: 3px solid orange;\n}\n\n.underline {\n  min-height: 3px;\n  background-color: #f4a442;\n  width: 250px;\n}\n\n/* \n*\n* CARD \n*\n */\n\n.main-body {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 20px;\n}\n\n.card {\n  width: 20rem;\n  font-size: 0.9rem;\n  background-color: #fff;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);\n  border-radius: 0.5rem;\n  padding: 8px;\n  cursor: pointer;\n}\n\n.card a {\n  padding: 12px;\n}\n\n.card:focus {\n  outline: 3px solid orange;\n}\n\n.card-image {\n  /* position: relative; */\n}\n\n.rating {\n  background-color: #e8e1d9;\n  padding: 5px;\n  border-radius: 8px;\n  font-weight: bold;\n  color: #2d580e;\n}\n\n.rating:focus {\n  outline: 3px solid #bf1722;\n}\n\n.card-image img {\n  width: 100%;\n  height: 200px;\n  border-radius: 0.5rem;\n  object-fit: cover;\n}\n\n.card-body {\n  margin-top: 10px;\n}\n\n.card-body:focus {\n  outline: 3px solid orange;\n}\n\n.card-body h3 {\n  font-size: 1.3rem;\n}\n\n.card-title {\n  margin-bottom: 10px;\n  color: #125c13;\n}\n\n.card-title:focus {\n  outline: 3px solid orange;\n}\n\n.card-desc {\n  text-align: justify;\n}\n\n.card-desc:focus {\n  outline: 3px solid orange;\n}\n\n.card-footer {\n  color: #3e7c17;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin-bottom: 10px;\n  text-align: right;\n}\n\n.card-footer:focus {\n  outline: 3px solid orange;\n}\n\n.card-footer img {\n  height: 15px;\n  width: 15px;\n  margin-right: 5px;\n}\n\n/* \n*\n* DETAIL \n*\n */\n.detail-container {\n  font-size: 1rem;\n  background-color: #fff;\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.detail-resto {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: start;\n  margin: 20px 0;\n}\n\n.detail-resto-img img {\n  width: 100%;\n  height: calc(282px + 5vw);\n  border-radius: 0.5rem;\n  object-fit: cover;\n  overflow: hidden;\n}\n\n.detail-resto-content {\n  padding: 16px 32px;\n  flex: 4 1 40ch;\n}\n\n.detail-resto-tags {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.resto-rating {\n  background-color: #e8e1d9;\n  padding: 5px;\n  border-radius: 8px;\n  font-weight: bold;\n  color: #2d580e;\n  font-size: 1.2rem;\n}\n\n.resto-rating:focus {\n  outline: 3px solid #bf1722;\n}\n\n.resto-rating img {\n  width: 20px !important;\n  margin-right: 4px;\n}\n\n.resto-tag {\n  display: inline-block;\n  margin: 8px;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #fff;\n  background-color: #f54748;\n  padding: 0.1rem 0.7rem;\n  border-radius: 1rem;\n}\n\n.resto-desc {\n  margin: 20px 0;\n}\n\n.resto-desc:focus {\n  outline: 3px solid #bf1722;\n}\n\n.resto-location {\n  color: #3e7c17;\n  font-weight: bold;\n}\n\n.resto-location:focus {\n  outline: 3px solid #bf1722;\n}\n\n.resto-location img {\n  margin-right: 5px;\n}\n\n.resto-menu {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  gap: 1rem;\n  /* margin: 2rem 0; */\n}\n\n.resto-menu:focus {\n  outline: 3px solid #bf1722;\n}\n\n.food {\n  padding: 1rem;\n}\n\n.food h3 {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.food-item {\n  font-size: 1.2rem;\n  margin: 0 1.5rem;\n}\n\n.food-item p {\n  margin-bottom: 0.5rem;\n}\n\n.food-item span {\n  margin-right: 1rem;\n}\n\n.review-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  gap: 1rem;\n  margin: 2rem 0;\n}\n\n.review-title {\n  font-size: 1.5rem;\n}\n\n.review-item {\n  width: 320px;\n  background-color: #d8dee4;\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.review-name {\n  font-weight: bold;\n}\n\n.review-date {\n  font-size: 0.7rem;\n}\n\n.review-desc {\n  font-size: 0.9rem;\n  font-style: italic;\n  margin-top: 8px;\n}\n\n/* \n*\n* FOOTER\n*\n */\n\n.mapouter {\n  margin: auto;\n  text-align: right;\n  height: 447px;\n  width: 100%;\n}\n\nfooter {\n  background-color: #ffc107;\n  color: #3f3f46;\n  font-weight: bold;\n  text-align: center;\n  padding: 30px;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/* \n  LOADING INDICATOR\n*/\n\n#loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.loader {\n  margin: 0 0 2em;\n  height: 100px;\n  width: 20%;\n  text-align: center;\n  padding: 1em;\n  margin: 0 auto 1em;\n  display: inline-block;\n  vertical-align: top;\n}\n\nsvg path,\nsvg rect {\n  fill: #ff6700;\n}\n\n/* \n  BUTTON\n*/\n\n.btn {\n  background-color: rgba(137, 44, 220, 0.1);\n  border: 2px solid #8e0b0b;\n  padding: 6px 15px;\n  border-radius: 5px;\n  color: #8e0b0b;\n  font-weight: bold;\n  transition: 0.3s;\n  text-align: center;\n}\n\n.btn:hover {\n  color: #fff;\n  background-color: #f54748;\n}\n\n.btn-menu {\n  display: block;\n}\n\n.btn-cta {\n  font-size: 1rem;\n}\n\n.show-more {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 3rem;\n}\n"],sourceRoot:""}]);const l=s},5948:(n,A,e)=>{e.d(A,{Z:()=>a});var o=e(7537),r=e.n(o),i=e(3645),t=e.n(i)()(r());t.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const a=t},8772:(n,A,e)=>{e.d(A,{Z:()=>B});var o=e(7537),r=e.n(o),i=e(3645),t=e.n(i),a=e(9952),d=e(8756),E=e(5948),s=t()(r());s.i(a.Z),s.i(d.Z),s.i(E.Z),s.push([n.id,"\n","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const B=s},4441:(n,A,e)=>{var o=e(3379),r=e.n(o),i=e(7795),t=e.n(i),a=e(569),d=e.n(a),E=e(3565),s=e.n(E),B=e(9216),l=e.n(B),p=e(4589),c=e.n(p),C=e(8772),m={};m.styleTagTransform=c(),m.setAttributes=s(),m.insert=d().bind(null,"head"),m.domAPI=t(),m.insertStyleElement=l(),r()(C.Z,m),C.Z&&C.Z.locals&&C.Z.locals}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,exports:{}};return A[n](i,i.exports,o),i.exports}o.m=A,n=[],o.O=(A,e,r,i)=>{if(!e){var t=1/0;for(s=0;s<n.length;s++){for(var[e,r,i]=n[s],a=!0,d=0;d<e.length;d++)(!1&i||t>=i)&&Object.keys(o.O).every((n=>o.O[n](e[d])))?e.splice(d--,1):(a=!1,i<t&&(t=i));if(a){n.splice(s--,1);var E=r();void 0!==E&&(A=E)}}return A}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[e,r,i]},o.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return o.d(A,{a:A}),A},o.d=(n,A)=>{for(var e in A)o.o(A,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;o.g.importScripts&&(n=o.g.location+"");var A=o.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var e=A.getElementsByTagName("script");if(e.length)for(var r=e.length-1;r>-1&&!n;)n=e[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=n})(),(()=>{o.b=document.baseURI||self.location.href;var n={121:0};o.O.j=A=>0===n[A];var A=(A,e)=>{var r,i,[t,a,d]=e,E=0;if(t.some((A=>0!==n[A]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(d)var s=d(o)}for(A&&A(e);E<t.length;E++)i=t[E],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return o.O(s)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),o.nc=void 0;var r=o.O(void 0,[666,619,278,193,337,268,924],(()=>o(5253)));r=o.O(r)})();
//# sourceMappingURL=app~726e1b4d.bundle.js.map
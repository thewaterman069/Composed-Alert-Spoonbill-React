import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import Steps12 from '../components/steps12'
import Footer81 from '../components/footer81'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Composed Alert Spoonbill</title>
        <meta property="og:title" content="Composed Alert Spoonbill" />
      </Helmet>
      <header className="home-container11">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img
            alt="Your Company Name"
            src="/logo_white_nobg-1500h.png"
            className="home-image1"
          />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links1">
              <Link to="/" className="home-link11 thq-link thq-body-small">
                Home
              </Link>
              <Link to="/about" className="home-link21 thq-link thq-body-small">
                Over ons
              </Link>
              <Link
                to="/gallery"
                className="home-link31 thq-link thq-body-small"
              >
                Galerij
              </Link>
              <Link
                to="/contact"
                className="home-link41 thq-link thq-body-small"
              >
                Contact
              </Link>
              <a
                href="https://shop.waterratjes.be.eu.org"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link51 thq-link thq-body-small"
              >
                Winkel
              </a>
              <Link
                to="/calendar"
                className="home-link52 thq-link thq-body-small"
              >
                Kalender
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="Your Company Name"
                  src="/logo_white_nobg-1500h.png"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links2">
                <a
                  href="https://www.teleporthq.io"
                  className="thq-link thq-body-small"
                >
                  Home
                </a>
                <a
                  href="https://www.teleporthq.io"
                  className="thq-link thq-body-small"
                >
                  Over ons
                </a>
                <a
                  href="https://www.teleporthq.io"
                  className="thq-link thq-body-small"
                >
                  Galerij
                </a>
                <a
                  href="https://www.teleporthq.io"
                  className="thq-link thq-body-small"
                >
                  Contact
                </a>
                <a
                  href="https://www.teleporthq.io"
                  className="thq-link thq-body-small"
                >
                  Winkel
                </a>
                <a
                  href="https://www.teleporthq.io"
                  className="thq-link thq-body-small"
                >
                  Kalender
                </a>
              </nav>
            </div>
            <div className="home-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-x-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="thq-icon-x-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </header>
      <div className="home-container12 thq-section-padding">
        <div className="home-max-width1 thq-section-max-width">
          <div className="home-container13">
            <h2 className="home-title thq-heading-2">
              Don&apos;t try to stop the waves, learn to kayak
            </h2>
            <h3 className="home-text10 thq-heading-3">
              Let&apos;s go paddling
            </h3>
          </div>
          <div className="home-container14">
            <div className="home-container15">
              <div className="home-container16">
                <Link to="/gallery" className="home-navlink1 thq-button-filled">
                  <span>Ontdek nu</span>
                </Link>
                <div id="hide" className="home-container17">
                  <button type="button" className="button">
                    <span>.</span>
                  </button>
                </div>
                <Link
                  to="/inschrijven"
                  className="home-navlink2 thq-button-filled"
                >
                  <span>van start</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <video
          src="/website_video.mp4"
          loop
          muted="true"
          poster="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxmb3Jlc3R8ZW58MHx8fHwxNzQ0OTk4Njc0fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          preload="auto"
          autoPlay="true"
          playsInline
          className="home-video"
        ></video>
        <Player
          src="https://lottie.host/828e6a8c-44cb-4596-b618-4095030edc3d/vSKyzpAwob.json"
          loop
          hover
          speed={1}
          autoplay
          background="transparent"
          className="home-lottie-node"
        ></Player>
      </div>
      <div className="home-container18 thq-section-padding">
        <div className="home-max-width2 thq-section-max-width">
          <div className="home-container19 thq-flex-row">
            <div className="home-column1">
              <span className="home-text14 thq-heading-2">Initiatie sup</span>
              <p className="home-text15 thq-body-small">
                We hebben een aantal supboards liggen, waarmee je eerst onder
                begeleiding het water mee op kan. Initiaties beginnen van april
                en eindigen eind oktober. Heb je ervaring genoeg? Dan kan je ook
                in je ééntje met de sup een leuke namiddag op de Spuikom
                beleven.
              </p>
              <p className="home-text16 thq-body-small">
                Iedereen die houdt van ongedwongen, gezellig samen sporten
                zonder drukdoenerij kan bij ons in de club terrecht. De leeftijd
                van de leden variëren. De enoge vereiste die gesteld wordt is
                dat deelnemers over een zwembrevet beschikken. Eigen materiaal
                is niet nodig, wij voorzien alles. We beschikken over een
                tiental sup&apos;s.
              </p>
              <div className="home-actions1">
                <Link to="/about" className="home-navlink3 thq-button-filled">
                  <span>Meer weten?</span>
                </Link>
              </div>
            </div>
            <img
              src="/external/img_9542-1400w-1400w.jpg"
              className="home-placeholder-image thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <Steps12
        heading={
          <Fragment>
            <span className="home-text18">
              <span>{/*locale-text_Oczsm-*/}</span>
              Laten we kennis maken...
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text19">
              <span>Beschikbaar</span>
              <br></br>
              <span>materiaal</span>
              <br></br>
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text24">
              <span>{/*locale-text_noPueZ*/}</span>
              Sportkampen
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text25">
              <span>{/*locale-text_qhglZi*/}</span>
              Eten en drinken
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text26">
              Uitstappen
              <span>{/*locale-text_T_jGlU*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="steps12root-class-name"
        step1Description={
          <Fragment>
            <span className="home-text27">
              <span>{/*locale-text_gwY3UH*/}</span>
              Eigen materiaal is geen vereiste bij ons. Wij stellen ons
              materiaal open voor onze leden.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text28">
              Op de sportkampen laten we je kennis maken met kajak, kano en sup.
              We leren jullie de kneepjes van watersporten.
              <span>{/*locale-text_0N7LnQ*/}</span>
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text29">
              <span>{/*locale-text_cAJIRb*/}</span>
              Binnen de cub is er een gezellige bar. Na een kajak-moment kunnen
              we hier gezellig bijpraten met elkaar of een kleine snack
              benutten.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text30">
              We treken regelmatig naar zee. Als je een iets rustigere plek
              zoekt kun je mee op verschillende toertochten.
              <span>{/*locale-text_r2Pc_v*/}</span>
            </span>
          </Fragment>
        }
      ></Steps12>
      <div className="thq-section-padding">
        <div className="home-max-width3 thq-section-max-width">
          <div className="home-container21">
            <div className="home-container22">
              <h2 className="home-text31 thq-heading-2">50+</h2>
              <span className="home-text32 thq-body-small">Leden</span>
              <span className="home-text33">
                We hebben meer dan 50 leden die zijn aangesloten bij onze club.
              </span>
            </div>
            <div className="home-container23">
              <h2 className="home-text34 thq-heading-2">40+</h2>
              <span className="home-text35 thq-body-small">
                Kajaks beschikbaar
              </span>
              <span className="home-text36">
                Er is voldoende materiaal beschikbaar inclusief kajak&apos;s en
                sup&apos;s.
              </span>
            </div>
            <div className="home-container24">
              <h2 className="home-text37 thq-heading-2">10+</h2>
              <span className="home-text38 thq-body-small">Begeleiders</span>
              <span className="home-text39">
                We hebben voldoende begeleders, die altijd klaar staan om je te
                helpen.
              </span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c047c0d8-e7b9-4662-a8b8-18ad561870d0/abba04bd-3765-4d53-93e2-60a8cb4ff46d?org_if_sml=1688086&amp;force_format=original"
          className="home-image2"
        />
      </div>
      <div className="home-container25 thq-section-padding">
        <div className="home-max-width4 thq-section-max-width">
          <div className="home-container26 thq-flex-row">
            <div className="home-column2">
              <span className="home-text40 thq-heading-2">
                Initiaties kajak
              </span>
              <p className="home-text41 thq-body-small">
                Wil je nog wat meer informatie, of sta je to popelen om eens in
                een kajak te springen, geen probleem! De initiatie kajak gaat
                door vanaf begin april tot eind oktober aan de Spuikom. Ook in
                de winter blijven we actief met het leren eskimoteren in het
                zwembad (van november tot maart). Dit telkens elke zaterdag van
                14u tot 16u. Je mag vrijblijvend eens komen proefvaren. Maak een
                afspraak via email en we zorgen ervoor dat iemand klaar zal
                staan om je wegwijs te maken in de club en op het water.
              </p>
              <p className="thq-body-small">
                Wil je op een ander tijdstip komen varen? Neem dan contact met
                ons op voor een afspraak.
              </p>
              <div className="home-actions2">
                <a
                  href="mailto:info@waterratjes.be.eu.org?subject=Afspraak kajak"
                  className="home-link thq-button-filled"
                >
                  <span>Mail ons</span>
                </a>
              </div>
            </div>
            <img alt="image" src="/int-138-500h.jpg" className="home-image3" />
            <img alt="image" src="/int-243-400h.jpg" className="home-image4" />
          </div>
        </div>
      </div>
      <div className="home-container27 thq-section-padding">
        <div className="home-max-width5 thq-section-max-width">
          <div className="home-container28 thq-flex-row">
            <img alt="image" src="/gspr1-500h.jpg" className="home-image5" />
            <img alt="image" src="/gspr2-400h.jpg" className="home-image6" />
            <div className="home-column3">
              <span className="home-text44 thq-heading-2">G-sport</span>
              <p className="thq-body-small">
                Ook mensen met beperkingen zijn bij ons welkom. Het watervlak is
                zeer vlot bereikbaar voor rolstoelgebruikers. De enigste
                vereiste is een zwembrevet van 25 meter. Wil je met familie,
                vrienden, collega&apos;s en leuke activiteit beleven, dn kun je
                ons steeds contacteren. Dit kan enkel in het weekend. Tijdens de
                schoolvakanties kan dit eventueel buiten het weekend.
              </p>
              <div className="home-actions3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-header30 thq-section-padding">
        <div className="home-container29"></div>
        <div className="home-max-width6 thq-section-max-width">
          <div className="home-container30">
            <div className="home-content">
              <h1 className="home-text46 thq-heading-1">Galerij</h1>
              <p className="home-text47 thq-body-large">
                Bekijk de nieuwste foto&apos;s in onze galerij!
              </p>
              <button type="button" className="home-button2 button">
                <Link to="/gallery" className="home-navlink4">
                  Bekijk foto&apos;s
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer81
        link1={
          <Fragment>
            <span className="home-text48">
              Home
              <span>{/*locale-text__2Rpi-*/}</span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text49">
              Over ons
              <span>{/*locale-text_6_uK0O*/}</span>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text50">
              Contact
              <span>{/*locale-text_7qH3lG*/}</span>
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text51">
              Inschrijven
              <span>{/*locale-text_tbC0MW*/}</span>
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text52">
              Winkel
              <span>{/*locale-text_4hy187*/}</span>
            </span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="home-text53">
              <span>{/*locale-text_vWV5rz*/}</span>
              Contact opnemen
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="home-text54">
              Inside-Outside Oostende
              <span>{/*locale-text_num-n6*/}</span>
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="home-text55">
              <span>{/*locale-text_AExUua*/}</span>
              Kajakroutes Vlaanderen
            </span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="home-text56">
              <span>{/*locale-text_WBL_EJ*/}</span>
              Kayaksport
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text57">
              <span>
                Website door
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text59">MG WebDev Ltd</span>
              <span className="home-text60">.</span>
              <span>{/*locale-text_a91TmO*/}</span>
            </span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="home-text61">
              <span>{/*locale-text_jFc7nF*/}</span>
              Webshop
            </span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="home-text62">
              Kalender
              <span>{/*locale-text_wlK7zB*/}</span>
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="home-text63">
              © 2025 Kajakclub de Waterratjes
              <span>{/*locale-text_5mEECY*/}</span>
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text64">
              Terms of Service
              <span>{/*locale-text_cAVD_8*/}</span>
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text65">
              Cookies Settings
              <span>{/*locale-text_dvjVrf*/}</span>
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text66">
              <span>{/*locale-text_xHDPxJ*/}</span>
              Privacy Policy
            </span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="home-text67">
              <span>{/*locale-text_fEO-Yl*/}</span>
              Menu
            </span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="home-text68">
              Snel naar...
              <span>{/*locale-text_d0QZqD*/}</span>
            </span>
          </Fragment>
        }
      ></Footer81>
    </div>
  )
}

export default Home

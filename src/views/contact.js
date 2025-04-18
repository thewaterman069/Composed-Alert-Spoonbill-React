import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Contact5 from '../components/contact5'
import Footer81 from '../components/footer81'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container1">
      <Helmet>
        <title>contact - Composed Alert Spoonbill</title>
        <meta
          property="og:title"
          content="contact - Composed Alert Spoonbill"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="contact-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">Over ons</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">Galerij</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">Contact</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact-text14">Winkel</span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="contact-text15">Kalender</span>
          </Fragment>
        }
        link52={
          <Fragment>
            <span className="contact-text16">Kalender</span>
          </Fragment>
        }
        rootClassName="navbar2root-class-name3"
      ></Navbar2>
      <div className="contact-header23 thq-section-padding">
        <div className="contact-max-width thq-section-max-width">
          <div className="contact-content">
            <div className="contact-container2">
              <h1 className="contact-text17 thq-heading-1">Contact</h1>
              <p className="contact-text18 thq-body-large">
                Vragen, opmerkingen of juist een compliment?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact5
        email={
          <Fragment>
            <span className="contact-text19">
              info@waterratjes.be.eu.org
              <span>{/*locale-text_y8Wboy*/}</span>
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text20">
              <span>{/*locale-text_gG2fFG*/}</span>
              +32 (0)459 54 29 78
            </span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text21">
              <span>{/*locale-text_skiivp*/}</span>
              Schietbaanstraat 100, 8400 Oostende
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text22">
              <span>
                Indien u contact met ons wenst op te nemen met ons in verband
                met vragen en/of klachten kunt u onderstaande info gebruiken of
                lunt u het contactformulier onderaan deze pagina invullen.
              </span>
              <br></br>
              <span>Complimenten zijn natuurlijk ook altijd welkom :-).</span>
              <br></br>
              <span>{/*locale-text_TakoF0*/}</span>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text27">
              <span>{/*locale-text_gnXF1R*/}</span>
              Altijd beschikbaar. We beantwoorden uw mail binnen 3-5 werkdagen.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact-text28">
              Bel ons, beschikbaar op werkdagen, telkens van 09u - 16u
              <span>{/*locale-text_kOq5ff*/}</span>
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="contact-text29">
              <span>{/*locale-text_AiB-1Z*/}</span>
              Heeft u een afspraak vastegelegd? Kom gerust naar ons
              hoofdkantoor.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text30">
              Contacteer ons
              <span>{/*locale-text_nCCy0d*/}</span>
            </span>
          </Fragment>
        }
      ></Contact5>
      <div className="contact-container3">
        <div className="contact-container4">
          <Script
            html={`<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contactformulier</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
    }

    .form-container {
      max-width: 500px;
      margin: 0 auto;
      padding: 30px;
      border-radius: 10px;
      border: 1px solid #ccc;
    }

    .form-container h2 {
      margin-bottom: 20px;
      text-align: center;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input[type="text"],
    input[type="email"],
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      resize: vertical;
    }

    button[type="submit"] {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
      font-size: 16px;
    }

    button[type="submit"]:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>

  <div class="form-container">
    <h2>Contacteer ons</h2>
    <form action="https://formspree.io/f/mrgnqlrb" method="POST">
      <label for="voornaam">Voornaam:</label>
      <input type="text" id="voornaam" name="voornaam" required>

      <label for="naam">Naam:</label>
      <input type="text" id="naam" name="naam" required>

      <label for="email">E-mailadres:</label>
      <input type="email" id="email" name="email" required>

      <label for="bericht">Bericht:</label>
      <textarea id="bericht" name="bericht" rows="6" required></textarea>

      <button type="submit">Verzenden</button>
    </form>
  </div>

</body>
</html>
`}
          ></Script>
        </div>
      </div>
      <Footer81
        link1={
          <Fragment>
            <span className="contact-text31">
              Home
              <span>{/*locale-text_uh4Kve*/}</span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text32">
              Over ons
              <span>{/*locale-text_uupVCZ*/}</span>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text33">
              <span>{/*locale-text_GQAsII*/}</span>
              Contact
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text34">
              <span>{/*locale-text_Ss0tJH*/}</span>
              Inschrijven
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact-text35">
              <span>{/*locale-text_p3Er4V*/}</span>
              Winkel
            </span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="contact-text36">
              <span>{/*locale-text_dXc_Hj*/}</span>
              Contact opnemen
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="contact-text37">
              Inside-Outside Oostende
              <span>{/*locale-text_kSml1K*/}</span>
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="contact-text38">
              Kajakroutes Vlaanderen
              <span>{/*locale-text_kBivJq*/}</span>
            </span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="contact-text39">
              Kayaksport
              <span>{/*locale-text_hSmtHW*/}</span>
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="contact-text40">
              <span>
                Website door
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="contact-text42">MG WebDev Ltd</span>
              <span className="contact-text43">.</span>
              <span>{/*locale-text_fZTDf7*/}</span>
            </span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="contact-text44">
              Webshop
              <span>{/*locale-text_RV9SCB*/}</span>
            </span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="contact-text45">
              <span>{/*locale-text_iMeOKr*/}</span>
              Kalender
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="contact-text46">
              © 2025 Kajakclub de Waterratjes
              <span>{/*locale-text_NKdL9J*/}</span>
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="contact-text47">
              <span>{/*locale-text_fTrCNy*/}</span>
              Terms of Service
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text48">
              <span>{/*locale-text_Mmvx9X*/}</span>
              Cookies Settings
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text49">
              Privacy Policy
              <span>{/*locale-text_NPRyps*/}</span>
            </span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="contact-text50">
              Menu
              <span>{/*locale-text_QjhMer*/}</span>
            </span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="contact-text51">
              Snel naar...
              <span>{/*locale-text_DFJbs_*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="footer81root-class-name4"
      ></Footer81>
    </div>
  )
}

export default Contact

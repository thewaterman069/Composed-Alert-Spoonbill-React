import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Footer81 from '../components/footer81'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container1">
      <Helmet>
        <title>Page - Composed Alert Spoonbill</title>
        <meta property="og:title" content="Page - Composed Alert Spoonbill" />
      </Helmet>
      <header className="page-container2"></header>
      <Navbar2
        link1={
          <Fragment>
            <span className="page-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="page-text11">Over ons</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="page-text12">Galerij</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="page-text13">Contact</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="page-text14">Winkel</span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="page-text15">Kalender</span>
          </Fragment>
        }
        link52={
          <Fragment>
            <span className="page-text16">Kalender</span>
          </Fragment>
        }
        rootClassName="navbar2root-class-name1"
      ></Navbar2>
      <div className="page-container3 thq-section-padding">
        <div className="page-max-width">
          <h1 className="page-text17 thq-heading-1">404</h1>
          <h2 className="page-text18 thq-heading-2">GEEN WATER GEVONDEN!</h2>
          <span className="page-text19 thq-body-small">
            De pagina die je zoekt was niet gevonden of bestaat niet meer.
          </span>
          <Link to="/" onclick="history.back()" className="page-navlink button">
            GA TERUG
          </Link>
        </div>
      </div>
      <Footer81
        link1={
          <Fragment>
            <span className="page-text20">
              Home
              <span>{/*locale-text_uh4Kve*/}</span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="page-text21">
              Over ons
              <span>{/*locale-text_uupVCZ*/}</span>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="page-text22">
              <span>{/*locale-text_GQAsII*/}</span>
              Contact
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="page-text23">
              <span>{/*locale-text_Ss0tJH*/}</span>
              Inschrijven
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="page-text24">
              <span>{/*locale-text_p3Er4V*/}</span>
              Winkel
            </span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="page-text25">
              <span>{/*locale-text_dXc_Hj*/}</span>
              Contact opnemen
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="page-text26">
              Inside-Outside Oostende
              <span>{/*locale-text_kSml1K*/}</span>
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="page-text27">
              Kajakroutes Vlaanderen
              <span>{/*locale-text_kBivJq*/}</span>
            </span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="page-text28">
              Kayaksport
              <span>{/*locale-text_hSmtHW*/}</span>
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="page-text29">
              <span>
                Website door
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="page-text31">MG WebDev Ltd</span>
              <span className="page-text32">.</span>
              <span>{/*locale-text__umCTb*/}</span>
            </span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="page-text33">
              Webshop
              <span>{/*locale-text_RV9SCB*/}</span>
            </span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="page-text34">
              <span>{/*locale-text_iMeOKr*/}</span>
              Kalender
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="page-text35">
              © 2025 Kajakclub de Waterratjes
              <span>{/*locale-text_NKdL9J*/}</span>
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="page-text36">
              <span>{/*locale-text_fTrCNy*/}</span>
              Terms of Service
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="page-text37">
              <span>{/*locale-text_Mmvx9X*/}</span>
              Cookies Settings
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="page-text38">
              Privacy Policy
              <span>{/*locale-text_NPRyps*/}</span>
            </span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="page-text39">
              Menu
              <span>{/*locale-text_QjhMer*/}</span>
            </span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="page-text40">
              Snel naar...
              <span>{/*locale-text_DFJbs_*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="footer81root-class-name1"
      ></Footer81>
    </div>
  )
}

export default Page

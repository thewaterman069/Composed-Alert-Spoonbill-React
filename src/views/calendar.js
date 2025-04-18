import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Contact14 from '../components/contact14'
import Footer81 from '../components/footer81'
import './calendar.css'

const Calendar = (props) => {
  return (
    <div className="calendar-container1">
      <Helmet>
        <title>calendar - Composed Alert Spoonbill</title>
        <meta
          property="og:title"
          content="calendar - Composed Alert Spoonbill"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="calendar-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="calendar-text11">Over ons</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="calendar-text12">Galerij</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="calendar-text13">Contact</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="calendar-text14">Winkel</span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="calendar-text15">Kalender</span>
          </Fragment>
        }
        link52={
          <Fragment>
            <span className="calendar-text16">Kalender</span>
          </Fragment>
        }
        rootClassName="navbar2root-class-name4"
      ></Navbar2>
      <div className="calendar-header23 thq-section-padding">
        <div className="calendar-max-width thq-section-max-width">
          <div className="calendar-content">
            <div className="calendar-container2">
              <h1 className="calendar-text17 thq-heading-1">
                Kalender &apos;25
              </h1>
              <p className="calendar-text18 thq-body-large">
                Ontdek hier onze activiteiten voor dit jaar
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact14
        link1={
          <Fragment>
            <span className="calendar-text19">
              +32 (0)495 54 29 78
              <span>{/*locale-text_TByUMG*/}</span>
            </span>
          </Fragment>
        }
        email1={
          <Fragment>
            <span className="calendar-text20">
              info@waterratjes.be.eu.org
              <span>{/*locale-text_Q8kvbo*/}</span>
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="calendar-text21">
              <span>Schietbaanstraat 100</span>
              <br></br>
              <span>8400 Oostende</span>
              <br></br>
              <span>{/*locale-text_TNeRDp*/}</span>
            </span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="calendar-text26">
              <span>{/*locale-text_FEjmcT*/}</span>
              inout-oostende.be
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="calendar-text27">
              E-mail
              <span>{/*locale-text_0t8ZR3*/}</span>
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="calendar-text28">
              Bel ons
              <span>{/*locale-text_B5sJvk*/}</span>
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="calendar-text29">
              Adres
              <span>{/*locale-text_4STwAE*/}</span>
            </span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="calendar-text30">
              <span>{/*locale-text_0O8iXd*/}</span>
              Inside-Outside Oostende
            </span>
          </Fragment>
        }
      ></Contact14>
      <div className="calendar-container3">
        <div className="calendar-container4">
          <Script
            html={` <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FBrussels&amp;showTitle=1&amp;title=Activiteiten%202025&amp;showNav=1&amp;showCalendars=1&amp;showDate=1&amp;showTabs=1&amp;mode=AGENDA&amp;src=d2F0ZXJyYXRqZXMubWd3ZWJkZXZAZ21haWwuY29t&amp;color=%239E69AF" style="border-width:0" width="1000" height="350" frameborder="0" scrolling="no"></iframe>`}
          ></Script>
        </div>
      </div>
      <Footer81
        link1={
          <Fragment>
            <span className="calendar-text31">
              Home
              <span>{/*locale-text_uh4Kve*/}</span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="calendar-text32">
              Over ons
              <span>{/*locale-text_uupVCZ*/}</span>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="calendar-text33">
              <span>{/*locale-text_GQAsII*/}</span>
              Contact
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="calendar-text34">
              <span>{/*locale-text_Ss0tJH*/}</span>
              Inschrijven
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="calendar-text35">
              <span>{/*locale-text_p3Er4V*/}</span>
              Winkel
            </span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="calendar-text36">
              <span>{/*locale-text_dXc_Hj*/}</span>
              Contact opnemen
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="calendar-text37">
              Inside-Outside Oostende
              <span>{/*locale-text_kSml1K*/}</span>
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="calendar-text38">
              Kajakroutes Vlaanderen
              <span>{/*locale-text_kBivJq*/}</span>
            </span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="calendar-text39">
              Kayaksport
              <span>{/*locale-text_hSmtHW*/}</span>
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="calendar-text40">
              <span>
                Website door
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="calendar-text42">MG WebDev Ltd</span>
              <span className="calendar-text43">.</span>
              <span>{/*locale-text_FvqdNZ*/}</span>
            </span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="calendar-text44">
              Webshop
              <span>{/*locale-text_RV9SCB*/}</span>
            </span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="calendar-text45">
              <span>{/*locale-text_iMeOKr*/}</span>
              Kalender
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="calendar-text46">
              © 2025 Kajakclub de Waterratjes
              <span>{/*locale-text_NKdL9J*/}</span>
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="calendar-text47">
              <span>{/*locale-text_fTrCNy*/}</span>
              Terms of Service
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="calendar-text48">
              <span>{/*locale-text_Mmvx9X*/}</span>
              Cookies Settings
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="calendar-text49">
              Privacy Policy
              <span>{/*locale-text_NPRyps*/}</span>
            </span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="calendar-text50">
              Menu
              <span>{/*locale-text_QjhMer*/}</span>
            </span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="calendar-text51">
              Snel naar...
              <span>{/*locale-text_DFJbs_*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="footer81root-class-name5"
      ></Footer81>
    </div>
  )
}

export default Calendar

import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Hero1 from '../components/hero1'
import Column from '../components/column'
import Footer81 from '../components/footer81'
import './inschrijven.css'

const Inschrijven = (props) => {
  return (
    <div className="inschrijven-container1">
      <Helmet>
        <title>Inschrijven - Composed Alert Spoonbill</title>
        <meta
          property="og:title"
          content="Inschrijven - Composed Alert Spoonbill"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="inschrijven-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="inschrijven-text11">Over ons</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="inschrijven-text12">Galerij</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="inschrijven-text13">Contact</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="inschrijven-text14">Winkel</span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="inschrijven-text15">Kalender</span>
          </Fragment>
        }
        link52={
          <Fragment>
            <span className="inschrijven-text16">Kalender</span>
          </Fragment>
        }
        rootClassName="navbar2root-class-name5"
      ></Navbar2>
      <Hero1
        action1={
          <Fragment>
            <span className="inschrijven-text17">
              <span>{/*locale-text_8zCyKT*/}</span>
              word lid!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="inschrijven-text18">
              Wordt lid van Kajakclub de Waterratjes door je in te schrijven op
              deze pagina.
              <span>{/*locale-text_xJe73Y*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="inschrijven-text19">
              lid worden van Kajakclub de Waterratjes
              <span>{/*locale-text_RRzkfh*/}</span>
            </span>
          </Fragment>
        }
      ></Hero1>
      <div className="inschrijven-container2 thq-section-padding">
        <div className="inschrijven-max-width thq-section-max-width">
          <div className="inschrijven-container3 thq-flex-row">
            <Column
              text={
                <Fragment>
                  <span className="inschrijven-text20">
                    <span>{/*locale-text_i8J9Z7*/}</span>
                    Hoe word ik lid?
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="inschrijven-text21">
                    <span>{/*locale-text_Xh9POB*/}</span>
                    Ledenbijdrage
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="inschrijven-text22">
                    <span>Lidkaart (per gezin): €215</span>
                    <br></br>
                    <span>Individueel lid (vanaf 16 jaar): €120</span>
                    <br></br>
                    <span>Individueel lid (-16 jaar): €95</span>
                    <br></br>
                    <span>Sympathisant: Neem contact op</span>
                    <br></br>
                    <span>{/*locale-text_0j3Pwy*/}</span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="inschrijven-text31">
                    Ligplaatsen
                    <span>{/*locale-text_9fkTLL*/}</span>
                  </span>
                </Fragment>
              }
              text4={
                <Fragment>
                  <span className="inschrijven-text32">
                    <span>Ligplaats surfplank of kajak: €60</span>
                    <br></br>
                    <span>Ligplaats kajak of sup: €60</span>
                    <br></br>
                    <span>{/*locale-text_FB_Y3D*/}</span>
                  </span>
                </Fragment>
              }
              text5={
                <Fragment>
                  <span className="inschrijven-text37">
                    <span>{/*locale-text_ssC4PC*/}</span>
                    Extra&apos;s
                  </span>
                </Fragment>
              }
              text6={
                <Fragment>
                  <span className="inschrijven-text38">
                    <span>
                      Supplement gebruik kajak of sup: €40 (per gezin, per jaar)
                    </span>
                    <br></br>
                    <span>Opbergkast €60</span>
                    <br></br>
                    <span>
                      Sleutel tot loods &amp; douches: €30 (=waarborg)
                    </span>
                    <br></br>
                    <span>{/*locale-text_-nY1JU*/}</span>
                  </span>
                </Fragment>
              }
            ></Column>
          </div>
        </div>
      </div>
      <Footer81
        link1={
          <Fragment>
            <span className="inschrijven-text45">
              Home
              <span>{/*locale-text_uh4Kve*/}</span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="inschrijven-text46">
              Over ons
              <span>{/*locale-text_uupVCZ*/}</span>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="inschrijven-text47">
              <span>{/*locale-text_GQAsII*/}</span>
              Contact
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="inschrijven-text48">
              <span>{/*locale-text_Ss0tJH*/}</span>
              Inschrijven
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="inschrijven-text49">
              <span>{/*locale-text_p3Er4V*/}</span>
              Winkel
            </span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="inschrijven-text50">
              <span>{/*locale-text_dXc_Hj*/}</span>
              Contact opnemen
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="inschrijven-text51">
              Inside-Outside Oostende
              <span>{/*locale-text_kSml1K*/}</span>
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="inschrijven-text52">
              Kajakroutes Vlaanderen
              <span>{/*locale-text_kBivJq*/}</span>
            </span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="inschrijven-text53">
              Kayaksport
              <span>{/*locale-text_hSmtHW*/}</span>
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="inschrijven-text54">
              <span>
                Website door
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="inschrijven-text56">MG WebDev Ltd</span>
              <span className="inschrijven-text57">.</span>
              <span>{/*locale-text_yi4C5a*/}</span>
            </span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="inschrijven-text58">
              Webshop
              <span>{/*locale-text_RV9SCB*/}</span>
            </span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="inschrijven-text59">
              <span>{/*locale-text_iMeOKr*/}</span>
              Kalender
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="inschrijven-text60">
              © 2025 Kajakclub de Waterratjes
              <span>{/*locale-text_NKdL9J*/}</span>
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="inschrijven-text61">
              <span>{/*locale-text_fTrCNy*/}</span>
              Terms of Service
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="inschrijven-text62">
              <span>{/*locale-text_Mmvx9X*/}</span>
              Cookies Settings
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="inschrijven-text63">
              Privacy Policy
              <span>{/*locale-text_NPRyps*/}</span>
            </span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="inschrijven-text64">
              Menu
              <span>{/*locale-text_QjhMer*/}</span>
            </span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="inschrijven-text65">
              Snel naar...
              <span>{/*locale-text_DFJbs_*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="footer81root-class-name7"
      ></Footer81>
    </div>
  )
}

export default Inschrijven

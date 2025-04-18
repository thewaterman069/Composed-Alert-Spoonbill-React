import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Hero73 from '../components/hero73'
import Footer81 from '../components/footer81'
import './gallery.css'

const Gallery = (props) => {
  return (
    <div className="gallery-container1">
      <Helmet>
        <title>gallery - Composed Alert Spoonbill</title>
        <meta
          property="og:title"
          content="gallery - Composed Alert Spoonbill"
        />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="gallery-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="gallery-text11">Over ons</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="gallery-text12">Galerij</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="gallery-text13">Contact</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="gallery-text14">Winkel</span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="gallery-text15">Kalender</span>
          </Fragment>
        }
        link52={
          <Fragment>
            <span className="gallery-text16">Kalender</span>
          </Fragment>
        }
        rootClassName="navbar2root-class-name2"
      ></Navbar2>
      <Hero73
        content1={
          <Fragment>
            <span className="gallery-text17">
              Bekijk de nieuwste media en foto&apos;s hier!
              <span>{/*locale-text_khgu1W*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="gallery-text18">
              Galerij
              <span>{/*locale-text_vwIp9t*/}</span>
            </span>
          </Fragment>
        }
      ></Hero73>
      <h2 className="gallery-title thq-heading-2">
        Galerij - Ontdek onze avonturen
      </h2>
      <div className="gallery-container2">
        <div className="gallery-container3">
          <Script
            html={`<script>if(!window.picflow){window.picflow=!0;var s=document.createElement("script");s.src="https://picflow.com/embed/main.js";s.type='module';s.defer=true;document.head.appendChild(s);}</script><picflow-gallery id="gal_HgkHq8lz8jvbdeOq" tenant="tnt_j2mWI8XDg1QwyfWt" lightbox="#000000E6"></picflow-gallery>`}
          ></Script>
        </div>
      </div>
      <Footer81
        link1={
          <Fragment>
            <span className="gallery-text19">
              Home
              <span>{/*locale-text_uh4Kve*/}</span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="gallery-text20">
              Over ons
              <span>{/*locale-text_uupVCZ*/}</span>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="gallery-text21">
              <span>{/*locale-text_GQAsII*/}</span>
              Contact
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="gallery-text22">
              <span>{/*locale-text_Ss0tJH*/}</span>
              Inschrijven
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="gallery-text23">
              <span>{/*locale-text_p3Er4V*/}</span>
              Winkel
            </span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="gallery-text24">
              <span>{/*locale-text_dXc_Hj*/}</span>
              Contact opnemen
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="gallery-text25">
              Inside-Outside Oostende
              <span>{/*locale-text_kSml1K*/}</span>
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="gallery-text26">
              Kajakroutes Vlaanderen
              <span>{/*locale-text_kBivJq*/}</span>
            </span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="gallery-text27">
              Kayaksport
              <span>{/*locale-text_hSmtHW*/}</span>
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="gallery-text28">
              <span>
                Website door
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="gallery-text30">MG WebDev Ltd</span>
              <span className="gallery-text31">.</span>
              <span>{/*locale-text_GpXtHW*/}</span>
            </span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="gallery-text32">
              Webshop
              <span>{/*locale-text_RV9SCB*/}</span>
            </span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="gallery-text33">
              <span>{/*locale-text_iMeOKr*/}</span>
              Kalender
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="gallery-text34">
              © 2025 Kajakclub de Waterratjes
              <span>{/*locale-text_NKdL9J*/}</span>
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="gallery-text35">
              <span>{/*locale-text_fTrCNy*/}</span>
              Terms of Service
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="gallery-text36">
              <span>{/*locale-text_Mmvx9X*/}</span>
              Cookies Settings
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="gallery-text37">
              Privacy Policy
              <span>{/*locale-text_NPRyps*/}</span>
            </span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="gallery-text38">
              Menu
              <span>{/*locale-text_QjhMer*/}</span>
            </span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="gallery-text39">
              Snel naar...
              <span>{/*locale-text_DFJbs_*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="footer81root-class-name3"
      ></Footer81>
    </div>
  )
}

export default Gallery

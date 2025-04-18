import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero7 from '../components/hero7'
import Hero6 from '../components/hero6'
import Hero5 from '../components/hero5'
import Navbar2 from '../components/navbar2'
import Footer81 from '../components/footer81'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>about - Composed Alert Spoonbill</title>
        <meta property="og:title" content="about - Composed Alert Spoonbill" />
      </Helmet>
      <Hero7
        content11={
          <Fragment>
            <span className="about-text10">
              Alle informatie over uw (toekomstige) sportclub!
              <span>{/*locale-text_tBNbDL*/}</span>
            </span>
          </Fragment>
        }
        heading11={
          <Fragment>
            <span className="about-text11">
              <span>{/*locale-text_7gkBnH*/}</span>
              Over ons
            </span>
          </Fragment>
        }
        rootClassName="hero7root-class-name"
      ></Hero7>
      <Hero6
        heading1={
          <Fragment>
            <span className="about-text12">
              <span>
                Kayak is not a sport,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>it&apos;s a lifestyle.</span>
              <span>{/*locale-text_y_s6Vu*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="hero6root-class-name"
      ></Hero6>
      <Hero5
        content1={
          <Fragment>
            <span className="about-text16">
              <span>{/*locale-text_IBPIJY*/}</span>
              Kajakclub de Waterratjes werd opgericht in 1992. Via enkele
              tussenstations: Bouwdewijnkanaal Dudzele, Polderwind Zuienkerke,
              St-Pietersplas Brugge, Watersport Oostende Spuikom.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text17">
              Wie zijn we?
              <span>{/*locale-text_4w7maf*/}</span>
            </span>
          </Fragment>
        }
        content11={
          <Fragment>
            <span className="about-text18">
              <span>
                De club staat open voor iedereen die houdt van gezonde
                ontspaning in en op het water. Er wordt gestart met initiatie op
                de Spuikom. Eens je de basiskneepjes onder de knie hebt kan er
                worden uitgewerkt naar zee of naar stromend water in de Ardennen
                en Frankrijk. De klemtoon ligt bij ons op het recreatief varen.
                Er is geen competitie of prestatiedruk mee gemoeid. Iedereen
                vaart op eigen tempo en volgens eigen mogelijkheden. 
              </span>
              <br></br>
              <span>
                Er worden regelmatig uitstappen gemaakt, aangpast op het niveau
                van de deelnemers. Tijdens de wintermaanden trainen we in het
                zwembad van Bredene. Je leert er hoe je moet eskimoteren en je
                wordt de basis reddingstechnieken aangeleerd. 
              </span>
              <br></br>
              <span>
                Bij uitstappen naar de Ardennen wordt er kennis gemaakt met
                &quot;wildwatertechnieken&quot;. We trekken ook regelmatig naar
                zee, waar we leren surfen in de branding. De hiervoor vereiste
                technieken worden ook stapsgewijs aangeleerd.
              </span>
              <br></br>
              <span>
                Moest je het iets rustiger aan willen kun je deelnemen aan de
                verschillende toertochten die op de Vlaamse waterlopen worden
                ingericht.
              </span>
              <br></br>
              <span>
                Zo zie je... er is voor elk wat wils. We hebben ook enkele
                kano&apos;s beschikbaar voor wie niet graag in een &quot;bootjeé
                zit.
              </span>
              <br></br>
              <span>{/*locale-text_qPQoby*/}</span>
            </span>
          </Fragment>
        }
        content12={
          <Fragment>
            <span className="about-text29">
              We kwamen in Januari 2024 op de Spuikom terrecht bij
              Inside-Outside Oostende. Hier vonden we onderdak voor al ons
              kajak- en sup materiaal en konden we onze activiteiten hernemen.
              <span>{/*locale-text_DmGGY8*/}</span>
            </span>
          </Fragment>
        }
        heading11={
          <Fragment>
            <span className="about-text30">
              Wat we doen:
              <span>{/*locale-text_s5SSfv*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="hero5root-class-name"
      ></Hero5>
      <Navbar2
        link1={
          <Fragment>
            <span className="about-text31">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text32">Over ons</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text33">Galerij</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text34">Contact</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text35">Winkel</span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="about-text36">Kalender</span>
          </Fragment>
        }
        link52={
          <Fragment>
            <span className="about-text37">Kalender</span>
          </Fragment>
        }
        rootClassName="navbar2root-class-name"
      ></Navbar2>
      <Footer81
        link1={
          <Fragment>
            <span className="about-text38">
              Home
              <span>{/*locale-text_uh4Kve*/}</span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text39">
              Over ons
              <span>{/*locale-text_uupVCZ*/}</span>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text40">
              <span>{/*locale-text_GQAsII*/}</span>
              Contact
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text41">
              <span>{/*locale-text_Ss0tJH*/}</span>
              Inschrijven
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text42">
              <span>{/*locale-text_p3Er4V*/}</span>
              Winkel
            </span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="about-text43">
              <span>{/*locale-text_dXc_Hj*/}</span>
              Contact opnemen
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="about-text44">
              Inside-Outside Oostende
              <span>{/*locale-text_kSml1K*/}</span>
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="about-text45">
              Kajakroutes Vlaanderen
              <span>{/*locale-text_kBivJq*/}</span>
            </span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="about-text46">
              Kayaksport
              <span>{/*locale-text_hSmtHW*/}</span>
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="about-text47">
              <span>
                Website door
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="about-text49">MG WebDev Ltd</span>
              <span className="about-text50">.</span>
              <span>{/*locale-text_ar5to9*/}</span>
            </span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="about-text51">
              Webshop
              <span>{/*locale-text_RV9SCB*/}</span>
            </span>
          </Fragment>
        }
        link51={
          <Fragment>
            <span className="about-text52">
              <span>{/*locale-text_iMeOKr*/}</span>
              Kalender
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="about-text53">
              © 2025 Kajakclub de Waterratjes
              <span>{/*locale-text_NKdL9J*/}</span>
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-text54">
              <span>{/*locale-text_fTrCNy*/}</span>
              Terms of Service
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-text55">
              <span>{/*locale-text_Mmvx9X*/}</span>
              Cookies Settings
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-text56">
              Privacy Policy
              <span>{/*locale-text_NPRyps*/}</span>
            </span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="about-text57">
              Menu
              <span>{/*locale-text_QjhMer*/}</span>
            </span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="about-text58">
              Snel naar...
              <span>{/*locale-text_DFJbs_*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="footer81root-class-name2"
      ></Footer81>
    </div>
  )
}

export default About

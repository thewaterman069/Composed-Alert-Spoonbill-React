import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero5.css'

const Hero5 = (props) => {
  return (
    <div
      className={`hero5-header19 thq-section-padding ${props.rootClassName} `}
    >
      <div className="hero5-content1">
        <h1 className="hero5-text10 thq-heading-1">
          {props.heading1 ?? (
            <Fragment>
              <span className="hero5-text15">
                Wie zijn we?
                <span>{/*locale-text_eO72OI*/}</span>
              </span>
            </Fragment>
          )}
        </h1>
        <p className="hero5-text11 thq-body-large">
          {props.content1 ?? (
            <Fragment>
              <span className="hero5-text18">
                Kajakclub de Waterratjes werd opgericht in 1992. Via enkele
                tussenstations: Bouwdewijnkanaal Dudzele, Polderwind Zuienkerke,
                St-Pietersplas Brugge, Watersport Oostende Spuikom.
                <span>{/*locale-text_RQpKJF*/}</span>
              </span>
            </Fragment>
          )}
        </p>
        <p className="hero5-text12 thq-body-large">
          {props.content12 ?? (
            <Fragment>
              <span className="hero5-text17">
                We kwamen in Januari 2024 op de Spuikom terrecht bij
                Inside-Outside Oostende. Hier vonden we onderdak voor al ons
                kajak- en sup materiaal en konden we onze activiteiten hernemen.
                <span>{/*locale-text_0UI6Qa*/}</span>
              </span>
            </Fragment>
          )}
        </p>
      </div>
      <div className="hero5-content2">
        <h1 className="hero5-text13 thq-heading-1">
          {props.heading11 ?? (
            <Fragment>
              <span className="hero5-text16">
                <span>{/*locale-text_1Oc6j7*/}</span>
                Wat we doen:
              </span>
            </Fragment>
          )}
        </h1>
        <p className="hero5-text14 thq-body-large">
          {props.content11 ?? (
            <Fragment>
              <span className="hero5-text19">
                <span>
                  De club staat open voor iedereen die houdt van gezonde
                  ontspaning in en op het water. Er wordt gestart met initiatie
                  op de Spuikom. Eens je de basiskneepjes onder de knie hebt kan
                  er worden uitgewerkt naar zee of naar stromend water in de
                  Ardennen en Frankrijk. De klemtoon ligt bij ons op het
                  recreatief varen. Er is geen competitie of prestatiedruk mee
                  gemoeid. Iedereen vaart op eigen tempo en volgens eigen
                  mogelijkheden. 
                </span>
                <br></br>
                <span>
                  Er worden regelmatig uitstappen gemaakt, aangpast op het
                  niveau van de deelnemers. Tijdens de wintermaanden trainen we
                  in het zwembad van Bredene. Je leert er hoe je moet
                  eskimoteren en je wordt de basis reddingstechnieken
                  aangeleerd. 
                </span>
                <br></br>
                <span>
                  Bij uitstappen naar de Ardennen wordt er kennis gemaakt met
                  &quot;wildwatertechnieken&quot;. We trekken ook regelmatig
                  naar zee, waar we leren surfen in de branding. De hiervoor
                  vereiste technieken worden ook stapsgewijs aangeleerd.
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
                  kano&apos;s beschikbaar voor wie niet graag in een
                  &quot;bootjeé zit.
                </span>
                <br></br>
                <span>{/*locale-text_Ytzh4d*/}</span>
              </span>
            </Fragment>
          )}
        </p>
      </div>
    </div>
  )
}

Hero5.defaultProps = {
  heading1: undefined,
  rootClassName: '',
  heading11: undefined,
  content12: undefined,
  content1: undefined,
  content11: undefined,
}

Hero5.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  heading11: PropTypes.element,
  content12: PropTypes.element,
  content1: PropTypes.element,
  content11: PropTypes.element,
}

export default Hero5

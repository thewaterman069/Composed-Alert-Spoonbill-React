import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className="component3-container thq-section-padding">
      <div className="component3-max-width thq-section-max-width">
        <div className="component3-content thq-flex-column">
          <ul className="component3-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2 className="component3-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="component3-text79">
                      <span>{/*locale-text_YlU9UM*/}</span>
                      Privacybeleid
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <p className="component3-content12 thq-body-small">
                      <span className="component3-text15">
                        Laatst bijgewerkt: 17 april 2025
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Welkom bij de website en het ledenplatform van
                        Waterratjes Kayak Club (“wij”, “ons” of “onze”). In dit
                        privacybeleid leggen we uit hoe wij jouw
                        persoonsgegevens verzamelen, gebruiken en beschermen
                        wanneer je gebruik maakt van onze diensten.
                      </span>
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="component3-text10">
                      1. Wie zijn wij?
                      <span>{/*locale-text_vbQYsu*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="component3-text69">
                      <span>{/*locale-text_tpQ739*/}</span>
                      Kajakclub de Waterratjes is een recreatieve
                      kajakvereniging gevestigd in België. Onze website en ons
                      online platform stellen leden in staat zich te
                      registreren, hun lidmaatschap te beheren en updates te
                      ontvangen over clubactiviteiten.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="component3-text72">
                      2. Welke gegevens verzamelen wij?
                      <span>{/*locale-text_ACa1yP*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <p className="component3-content32 thq-body-small">
                      <span>
                        Wij verzamelen de volgende persoonsgegevens van onze
                        leden en bezoekers:
                      </span>
                      <br></br>
                      <span>- Volledige naam</span>
                      <br></br>
                      <span>- E-mailadres</span>
                      <br></br>
                      <span>- Telefoonnummer</span>
                      <br></br>
                      <span>- Adres</span>
                      <br></br>
                      <span>- Betaalinformatie (via 3rd parties)</span>
                      <br></br>
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="component3-text20">
                      3. Waarvoor gebruiken wij jouw gegevens?
                      <span>{/*locale-text_jO-Q0P*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content4 ?? (
                  <Fragment>
                    <span className="component3-text67">
                      Wij gebruiken jouw gegevens voor de beheer en
                      administraties van je lidmaatschap, de verwerking van
                      betalingen via veilige derde partijen, communicatie over
                      belangrijke updates en clubactiviteiten, organisatie en
                      veiligheid van club-, kakjak- en supactiviteiten en voor
                      de analyse en verbetering van onze website en onze
                      diensten.
                      <span>{/*locale-text_ZeMe7W*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading5 ?? (
                  <Fragment>
                    <span className="component3-text14">
                      <span>{/*locale-text_Ez8kRX*/}</span>
                      4. Verplichte communicatie
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content5 ?? (
                  <Fragment>
                    <span className="component3-text77">
                      Als lid ontvang je e-mails met belangrijke informatie over
                      je lidmaatschap, evenementen en clubbeleid. Zolang je lid
                      bent is het afmelden voor deze communicatie niet mogelijk.
                      <span>{/*locale-text_PGPJ4d*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading6 ?? (
                  <Fragment>
                    <span className="component3-text11">
                      <span>{/*locale-text_b1DXfk*/}</span>
                      5. Cookies en tracking
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content6 ?? (
                  <Fragment>
                    <span className="component3-text71">
                      <span>{/*locale-text_qTx0qF*/}</span>
                      Onze website gebruikt cookies en Google Analytics om
                      inzicht te krijgen in hoe bezoekers onze site gebruiken.
                      Je kunt zelf bepalen of je deze cookies accepteert via je
                      browserinstellingen.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading61 ?? (
                  <Fragment>
                    <span className="component3-text70">
                      6. Delen van gegevens met derden
                      <span>{/*locale-text_ANth9H*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content61 ?? (
                  <Fragment>
                    <span className="component3-text19">
                      Wij maken gebruik van betrouwbare externe platforms voor
                      het beheren van ledenaccounts en het verwerken van
                      betalingen. Deze derden hanteren hun eigen privacybeleid.
                      Wij verkopen of delen je gegevens niet met andere partijen
                      voor commerciële doeleinden.
                      <span>{/*locale-text_zjDea5*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading62 ?? (
                  <Fragment>
                    <span className="component3-text80">
                      <span>{/*locale-text_oYIzOj*/}</span>
                      7. Wettelijke grondslagen (AVG)
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content62 ?? (
                  <Fragment>
                    <p className="component3-content619 thq-body-small">
                      <span>
                        Wij verwerken jouw persoonsgegevens op basis van de
                        volgende grondslagen onder de Algemene Verordening
                        Gegevensbescherming (AVG/GDPR):
                      </span>
                      <br></br>
                      <span>
                        - Uitvoering van overeenkomsten (lidmaatschappen)
                      </span>
                      <br></br>
                      <span>- Naleving van wettelijke verplichtingen</span>
                      <br></br>
                      <span>
                        - Gerechtvaardigde belangen (zoals administratie en
                        communicatie)
                      </span>
                      <br></br>
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading63 ?? (
                  <Fragment>
                    <span className="component3-text68">
                      8. Bewaartermijn
                      <span>{/*locale-text_WaPxZC*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content63 ?? (
                  <Fragment>
                    <p className="component3-content620 thq-body-small">
                      <span>
                        We bewaren uw persoonsgegevens niet langer dan nodig is
                        voor de doelen waarvoor ze verzameld zijn, tenzij er
                        wettelijke bewaarplichten gelden. Na beëndigen van het
                        lidmaatschap kunnen we bepaalde gegevens behouden voor
                        administratieve of wettelikke doeleinden.
                      </span>
                      <br></br>
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading64 ?? (
                  <Fragment>
                    <span className="component3-text12">
                      <span>{/*locale-text_MCpxiv*/}</span>
                      9. Jouw rechten
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content64 ?? (
                  <Fragment>
                    <p className="component3-content617 thq-body-small">
                      <span>Als gebruiker heb je het recht om:</span>
                      <br></br>
                      <span>- Inzage te krijgen in je gegevens</span>
                      <br></br>
                      <span>- Je gegevens te corrigeren of aan te vullen</span>
                      <br></br>
                      <span>
                        - Je gegevens te laten verwijderen (indien mogelijk)
                      </span>
                      <br></br>
                      <span>
                        - De verwerking van je gegevens te beperken of daat
                        bezwaar tegen te maken
                      </span>
                      <br></br>
                      <span>
                        - Een klacht in te dienen bij de
                        Gegevensbeschermingsautoriteit
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Voor verzoeken of vragen over je gegevens kun je ons
                        bereiken via
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="mailto:info@waterratjes.be.eu.org?subject="
                        className="component3-link1"
                      >
                        info@waterratjes.be.eu.org
                      </a>
                      <span>. </span>
                      <br></br>
                      <span>
                        Voor verzoeken of vragen gericht aan het bedrijg die
                        deze site onderhoud:
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="mailto:privacy@mgwebdev.eu?subject="
                        className="component3-link2"
                      >
                        privacy@mgwebdev.eu
                      </a>
                      <br></br>
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading65 ?? (
                  <Fragment>
                    <span className="component3-text78">
                      <span>{/*locale-text_xpxQFN*/}</span>
                      10. Beveiliging
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content65 ?? (
                  <Fragment>
                    <p className="component3-content621 thq-body-small">
                      <span>
                        We nemen passende technische en organisatorische
                        maatregelen om jouw gegevens te beschermen tegen
                        verlies, misbruik of onbevoegde toegang.
                      </span>
                      <br></br>
                      <span>OPGELET: geen enkele dienst is 100% veilig!</span>
                      <br></br>
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading66 ?? (
                  <Fragment>
                    <span className="component3-text13">
                      <span>{/*locale-text_6mAwQs*/}</span>
                      Wijzigingen en contact
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content66 ?? (
                  <Fragment>
                    <p className="component3-content618 thq-body-small">
                      <span>
                        We kunnen dit beleid op elk moment aanpassen? Bij
                        wijzigingen actualiseren we de datum bovenaan dit
                        document. Door onze diensten te blijven gebruiken, ga je
                        akkoord met deze herziene versie.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Heb je vragen of verzoeken over dit privacy beleid? Neem
                        dan contact op met de
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="component3-text43">
                        MG WebDev privacydienst op
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="mailto:privacy@mgwebdev.eu?subject="
                        className="component3-link3"
                      >
                        privacy@mgwebdev.eu
                      </a>
                      <br></br>
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Component3.defaultProps = {
  heading2: undefined,
  heading6: undefined,
  heading64: undefined,
  heading66: undefined,
  heading5: undefined,
  content1: undefined,
  content61: undefined,
  heading4: undefined,
  content64: undefined,
  content66: undefined,
  content3: undefined,
  content62: undefined,
  content63: undefined,
  content4: undefined,
  heading63: undefined,
  content2: undefined,
  heading61: undefined,
  content6: undefined,
  heading3: undefined,
  content65: undefined,
  content5: undefined,
  heading65: undefined,
  heading1: undefined,
  heading62: undefined,
}

Component3.propTypes = {
  heading2: PropTypes.element,
  heading6: PropTypes.element,
  heading64: PropTypes.element,
  heading66: PropTypes.element,
  heading5: PropTypes.element,
  content1: PropTypes.element,
  content61: PropTypes.element,
  heading4: PropTypes.element,
  content64: PropTypes.element,
  content66: PropTypes.element,
  content3: PropTypes.element,
  content62: PropTypes.element,
  content63: PropTypes.element,
  content4: PropTypes.element,
  heading63: PropTypes.element,
  content2: PropTypes.element,
  heading61: PropTypes.element,
  content6: PropTypes.element,
  heading3: PropTypes.element,
  content65: PropTypes.element,
  content5: PropTypes.element,
  heading65: PropTypes.element,
  heading1: PropTypes.element,
  heading62: PropTypes.element,
}

export default Component3

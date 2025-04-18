import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Component1 from './component1'
import './column.css'

const Column = (props) => {
  return (
    <div className="column-column">
      <span className="column-text10 thq-heading-2">
        {props.text ?? (
          <Fragment>
            <span className="column-text18">
              <span>{/*locale-text_hWKKsL*/}</span>
              Hoe word ik lid?
            </span>
          </Fragment>
        )}
      </span>
      <p className="column-text11 thq-body-small">
        {props.text1 ?? (
          <Fragment>
            <span className="column-text42">
              <span>{/*locale-text_xfxYW7*/}</span>
              Ledenbijdrage
            </span>
          </Fragment>
        )}
      </p>
      <span className="column-text12">
        {props.text2 ?? (
          <Fragment>
            <span className="column-text26">
              <span>Lidkaart (per gezin): €215</span>
              <br></br>
              <span>Individueel lid (vanaf 16 jaar): €120</span>
              <br></br>
              <span>Individueel lid (-16 jaar): €95</span>
              <br></br>
              <span>Sympathisant: Neem contact op</span>
              <br></br>
              <span>{/*locale-text_Lnsyjx*/}</span>
            </span>
          </Fragment>
        )}
      </span>
      <p className="column-text13 thq-body-small">
        {props.text3 ?? (
          <Fragment>
            <span className="column-text41">
              <span>{/*locale-text_WfJoOB*/}</span>
              Ligplaatsen
            </span>
          </Fragment>
        )}
      </p>
      <span className="column-text14">
        {props.text4 ?? (
          <Fragment>
            <span className="column-text36">
              <span>Ligplaats surfplank of kajak: €60</span>
              <br></br>
              <span>Ligplaats kajak of sup: €60</span>
              <br></br>
              <span>{/*locale-text_hZw-Bw*/}</span>
            </span>
          </Fragment>
        )}
      </span>
      <p className="column-text15 thq-body-small">
        {props.text5 ?? (
          <Fragment>
            <span className="column-text35">
              <span>{/*locale-text_vSLyYp*/}</span>
              Extra&apos;s
            </span>
          </Fragment>
        )}
      </p>
      <span className="column-text16">
        {props.text6 ?? (
          <Fragment>
            <span className="column-text19">
              <span>
                Supplement gebruik kajak of sup: €40 (per gezin, per jaar)
              </span>
              <br></br>
              <span>Opbergkast €60</span>
              <br></br>
              <span>Sleutel tot loods &amp; douches: €30 (=waarborg)</span>
              <br></br>
              <span>{/*locale-text_t9fmln*/}</span>
            </span>
          </Fragment>
        )}
      </span>
      <Component1
        button={
          <Fragment>
            <span className="column-text17">
              KLIK HIER OM U LID TE MAKEN
              <span>{/*locale-text_m1xgJs*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="component1root-class-name"
      ></Component1>
    </div>
  )
}

Column.defaultProps = {
  text: undefined,
  text6: undefined,
  text2: undefined,
  text5: undefined,
  text4: undefined,
  text3: undefined,
  text1: undefined,
}

Column.propTypes = {
  text: PropTypes.element,
  text6: PropTypes.element,
  text2: PropTypes.element,
  text5: PropTypes.element,
  text4: PropTypes.element,
  text3: PropTypes.element,
  text1: PropTypes.element,
}

export default Column

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";
import {Div} from "d-relax-components";//

const BASE_COLOR = '#3F3D56';

const PROPS_KEYS_POSITION = {
  ARROW_TOP: 'arrow-top',
  ARROW_BOTTOM: 'arrow-bottom',
  ARROW_LEFT: 'arrow-left',
  ARROW_RIGHT: 'arrow-right',
};

const PROPS_KEYS_DIRECTION = {
  ARROW_START: 'arrow-start',
  ARROW_CENTER: 'arrow-center',
  ARROW_END: 'arrow-end',
};

const X_ARROW_DIRECTION = {
  [PROPS_KEYS_DIRECTION.ARROW_START]: {left: '10%'},
  [PROPS_KEYS_DIRECTION.ARROW_CENTER]: {left: '50%'},
  [PROPS_KEYS_DIRECTION.ARROW_END]: {left: '90%'},
};

const Y_ARROW_DIRECTION = {
  [PROPS_KEYS_DIRECTION.ARROW_START]: {top: '10%'},
  [PROPS_KEYS_DIRECTION.ARROW_CENTER]: {top: '50%'},
  [PROPS_KEYS_DIRECTION.ARROW_END]: {top: '90%'},
};

const ARROW_POSITION = {
  [PROPS_KEYS_POSITION.ARROW_TOP]: {
    style: {
      bottom: '100%',
      'border-color': `transparent transparent ${BASE_COLOR} transparent`
    },
    direction: X_ARROW_DIRECTION
  },
  [PROPS_KEYS_POSITION.ARROW_BOTTOM]: {
    style: {
      top: '100%',
      'border-color': `${BASE_COLOR} transparent transparent transparent`
    },
    direction: X_ARROW_DIRECTION
  },
  [PROPS_KEYS_POSITION.ARROW_LEFT]: {
    style: {
      right: '100%',
      'border-color': `transparent ${BASE_COLOR} transparent transparent`
    },
    direction: Y_ARROW_DIRECTION
  },
  [PROPS_KEYS_POSITION.ARROW_RIGHT]: {
    style: {
      left: '100%',
      'border-color': `transparent transparent ${BASE_COLOR} transparent`
    },
    direction: Y_ARROW_DIRECTION
  },
};

const BaseTooltip = styled(Div)`
  ::after {
    content: " ";
    position: absolute;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    ${props => {
  const _props = _.pick(props, _.values({...PROPS_KEYS_POSITION, ...PROPS_KEYS_DIRECTION}));
  const active_keys = _.reduce(_props, (result, value, key) => value ? [...result, key] : result, []);
  const arrow = _.head(_.values(_.pick(ARROW_POSITION, active_keys)));
  if (arrow) {
    const direction = _.head(_.values(_.pick(arrow.direction, active_keys)));
    return {...arrow.style, ...direction}
  }
}}
`;

const Tooltip = props => <BaseTooltip absolute px-2 py-3 border border-solid border-dark-8 bg-dark-8 text-white rounded
                                      z-20 {...props}>
  {props.children}
</BaseTooltip>;

Tooltip.defaultProps = {
  [PROPS_KEYS_POSITION.ARROW_TOP]: false,
  [PROPS_KEYS_POSITION.ARROW_BOTTOM]: false,
  [PROPS_KEYS_POSITION.ARROW_LEFT]: false,
  [PROPS_KEYS_POSITION.ARROW_RIGHT]: false,
  [PROPS_KEYS_DIRECTION.ARROW_START]: false,
  [PROPS_KEYS_DIRECTION.ARROW_CENTER]: false,
  [PROPS_KEYS_DIRECTION.ARROW_END]: false,
};

Tooltip.propTypes = {
  [PROPS_KEYS_POSITION.ARROW_TOP]: PropTypes.bool,
  [PROPS_KEYS_POSITION.ARROW_BOTTOM]: PropTypes.bool,
  [PROPS_KEYS_POSITION.ARROW_LEFT]: PropTypes.bool,
  [PROPS_KEYS_POSITION.ARROW_RIGHT]: PropTypes.bool,
  [PROPS_KEYS_DIRECTION.ARROW_START]: PropTypes.bool,
  [PROPS_KEYS_DIRECTION.ARROW_CENTER]: PropTypes.bool,
  [PROPS_KEYS_DIRECTION.ARROW_END]: PropTypes.bool,
};

export default Tooltip
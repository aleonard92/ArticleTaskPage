import React, { useState } from "react";
import _map from "lodash/map";
import _isEmpty from "lodash/isEmpty";
import PropTypes from "prop-types";
import { Div } from "d-relax-components";
import OutsideClickHandler from "react-outside-click-handler";
import Tooltip from "../Message/Tooltip";
import styled from "styled-components";

const ContainerTooltip = styled(Tooltip)`
  -webkit-animation: fadein 0.8s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 0.8s; /* Firefox < 16 */
        -ms-animation: fadein 0.8s; /* Internet Explorer */
         -o-animation: fadein 0.8s; /* Opera < 12.1 */
            animation: fadein 0.8s;

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}          
`;

const Dropdown = ({
  children,
  options,
  optionsComponent,
  onChange,
  onOpen,
  selectedId,
  onToggleShow,
  styleContainer,
  ...props
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = v => {
    setShowOptions(v);
    onToggleShow && onToggleShow(v);
  };

  const toggleOptions = () => {
    handleShowOptions(!showOptions);
    onOpen && onOpen(!showOptions);
  };
  const onSelect = item => {
    handleShowOptions(false);
    onOpen && onOpen(false);
    onChange && onChange(item);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        handleShowOptions(false);
        onOpen && onOpen(false);
      }}
    >
      <Div cursor-pointer relative>
        <Div onClick={toggleOptions} flex items-center>{children}</Div>
        <Div>
          {showOptions && !_isEmpty(options) && (
            <ContainerTooltip
              w-auto
              arrow-top
              arrow-end
              bg-white
              shadow-navBar
              border-none
              right-0
              px-0
              py-1
              mt-2
              text-dark-1
              {...props}
            >
              {_map(options, item => (
                <Div
                  key={item.id}
                  border-solid
                  border-secondary
                  border-0
                  border-b={item.separator}
                  py-1={props.rounded}
                  hidden={item.hidden}
                  {...styleContainer}
                >
                  <Div
                    p-1
                    w-auto
                    whitespace-no-wrap
                    hover-bg-dark-7
                    bg-blue-5={item.lang === selectedId}
                    style={{ ...item.style }}
                    onClick={() => onSelect(item)}
                  >
                    {optionsComponent && optionsComponent(item)}
                  </Div>
                </Div>
              ))}
            </ContainerTooltip>
          )}
        </Div>
      </Div>
    </OutsideClickHandler>
  );
};

Dropdown.propTypes = {
  optionsComponent: PropTypes.func
};

Dropdown.defaultProps = {
  optionsComponent: item => (
    <Div px-2 py-1>
      {item.name}
    </Div>
  )
};

export default Dropdown;

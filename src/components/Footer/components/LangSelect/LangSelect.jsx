import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Img, Div } from "d-relax-components";
import DropdownWithIcon from "../DropdownWithIcon";
import {useTranslation} from 'react-i18next';
import esFlag from "../../../../assets/flags/es.svg";
import enFlag from "../../../../assets/flags/gb.svg";
import ruFlag from "../../../../assets/flags/ru.svg";
import ptFLag from "../../../../assets/flags/pt.png";

let languages = [
  { title: "EN", lang: "en" },
  { title: "ES", lang: "es" },
  { title: "PT", lang: "pt" },
  // { title: "RU", lang: "ru" }
];

try {
  const languagesConfig = JSON.parse(process.env.REACT_APP_LANGUAGES);
  if (languagesConfig && languagesConfig.length) languages = languagesConfig;
} catch (_) {
  /// ignoring
}

const LANG_KEY = process.env.LANG_KEY || "i18nextLng";
const LANG_KEY_PERSIST = "__edited_lang__";

const getLan = rememberLang => {
  const langSetting = rememberLang && localStorage.getItem(LANG_KEY_PERSIST);
  const lang = langSetting || localStorage.getItem(LANG_KEY);
  if (lang) return lang.split("-")[0];
};

const rememberLangLan = value => {
  localStorage.setItem(LANG_KEY_PERSIST, value);
};

const getInitValue = rememberLang => {
  const active = getLan(rememberLang);
  let initLang = languages[0];
  if (active) {
    const itemActive = languages.find(
      ({ lang }) => lang === active.toLowerCase()
    );
    if (itemActive) initLang = itemActive;
  }
  return initLang;
};

const LangSelect = ({ disabled, onChange, rememberLang }) => {
  const [value, setValue] = useState(getInitValue(rememberLang));
  const { t } = useTranslation("common");

  useEffect(() => {
    onChange(value && value.lang);
    rememberLang && rememberLangLan(value && value.lang);
  }, [onChange, value, rememberLang]);

  const getUrl = typeLang => {
    switch (typeLang) {
      case "es":
        return esFlag;
      case "en":
        return enFlag;
      case "pt":
        return ptFLag;
      default:
        return ruFlag;
    }
  };

  const capitalizeLetter = ([first, ...rest], lowerRest = false) =>
    first.toUpperCase() +
    (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

  return (
    <DropdownWithIcon
      // disabled={disabled}
      minimal={false}
      // className={"min-w-auto-child-button"}
      selectedId={value.lang}
      onChange={setValue}
      options={languages}
      pt-4
      mr-1      
      optionsComponent={item => (
        <Div flex items-center px-2 text-xs  font-roboto-medium>
          <Img
            bg-cover
            bg-center
            rounded-full
            h-7
            w-7
            style={{ backgroundImage: `url(${getUrl(item.lang)})` }}
          />
          <Div px-2>{capitalizeLetter(t(`${item.lang}`),true)}</Div>
          {item.lang === value.lang && <Div px-2></Div>}
          
        </Div>
      )}
    >
      <Img
        bg-cover
        bg-center
        rounded-full
        h-7
        w-7
        style={{ backgroundImage: `url(${getUrl(value.lang)})` }}
      />
    </DropdownWithIcon>
  );
};

export default memo(LangSelect);

LangSelect.defaultProps = {
  t: text => text,
  onChange: text => text
};
LangSelect.propTypes = {
  onChange: PropTypes.func,
  sortDefault: PropTypes.any,
  settings: PropTypes.array,
  t: PropTypes.func,
  rememberLang: PropTypes.bool,
  disabled: PropTypes.bool
};

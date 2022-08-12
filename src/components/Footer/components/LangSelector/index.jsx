import React, {memo} from "react";
import PropTypes from "prop-types";
import LangSelect from "../LangSelect/LangSelect";
import { useTranslation } from "react-i18next";
import { useDialogsContext } from "../../../ModalDialog/context/DialogsContext";

const LangSelector = () => {
  const { i18n, t } = useTranslation("common");
  const { openDialog, closeDialog } = useDialogsContext('dialog-loading');

  const onChange = v => {
    if (!(i18n.language||"").includes(v)) {
      openDialog({ title: t("updatedLang") });
      i18n.changeLanguage(v);
      setTimeout(() => {
        closeDialog();
        window.location.reload();
      }, 2000);
    }
  };
  return <LangSelect onChange={onChange} />;
};

export default memo(LangSelector);

LangSelector.defaultProps = {
  t: text => text,
  onChange: text => text
};
LangSelector.propTypes = {
  onChange: PropTypes.func,
  sortDefault: PropTypes.any,
  settings: PropTypes.array,
  t: PropTypes.func,
  rememberLang: PropTypes.bool,
  disabled: PropTypes.bool
};

import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerFull, faTint } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";
import "./IconWithValue.scss";

interface Props {
  value: string;
  icon: Icon;
}

export const IconWithValue: FunctionComponent<Props> = ({ value, icon }) => {
  return (
    <p className="icon-elem">
      <FontAwesomeIcon icon={getIconFromIconName(icon)} size="lg" />{" "}
      <span className="value-elem">{value}</span>
    </p>
  );
};

const getIconFromIconName = (icon: Icon) => {
  switch (icon) {
    case Icon.humidity:
      return faTint;
    case Icon.thermometer:
      return faThermometerFull;
    default:
      return faTint;
  }
};

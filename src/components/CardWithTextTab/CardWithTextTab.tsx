import React, { FunctionComponent } from "react";
import "./CardWithTextTab.scss";

interface Props {
  value: string;
}

export const CardWithTextTab: FunctionComponent<Props> = ({
  value,
  children,
}) => {
  return (
    <div className="py-4 mx-2">
      <div className="card-tab inline d-inline-block px-3 py-1 text-center">
        {value}
      </div>
      <div className="card-with-text-tab">{children}</div>
    </div>
  );
};

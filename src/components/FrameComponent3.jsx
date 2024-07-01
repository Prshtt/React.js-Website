import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent3 = ({
  className = "",
  prop,
  techArchitecture,
  weBreakMonolithicAppsInto,
  propWidth,
}) => {
  const architectureStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[319px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border text-left text-lg text-gray-gray-900 font-footer-footer-sm ${className}`}
      style={architectureStyle}
    >
      <div className="self-stretch rounded-4xs bg-base-white flex flex-col items-start justify-start pt-5 pb-6 pr-5 pl-[21px] gap-[15px] border-[1px] border-solid border-shade-primary-lite-bg">
        <div className="w-[299px] h-[159px] relative rounded-4xs bg-base-white box-border hidden border-[1px] border-solid border-shade-primary-lite-bg" />
        <div className="flex flex-row items-start justify-start gap-[9px]">
          <b className="relative inline-block text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] min-w-[24px] z-[1]">
            {prop}
          </b>
          <b className="relative z-[1]">{techArchitecture}</b>
        </div>
        <div className="w-[245px] h-[74px] relative text-sm leading-[20px] text-gray-gray-600 inline-block shrink-0 z-[1]">
          {weBreakMonolithicAppsInto}
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  techArchitecture: PropTypes.string,
  weBreakMonolithicAppsInto: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FrameComponent3;

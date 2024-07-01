import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  salesforce,
  salesforceIsACloudBasedPl,
  propBorder,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div
      className={`flex-[0.8684] rounded-lg bg-base-white box-border flex flex-col items-start justify-start pt-4 px-[23px] pb-[19px] gap-[20px] min-w-[285px] max-w-full text-left text-xl text-gray-100 font-footer-footer-sm border-[2px] border-solid border-gray-400 mq450:flex-1 ${className}`}
      style={groupDivStyle}
    >
      <div className="w-[380px] h-[340px] relative rounded-lg bg-base-white box-border hidden max-w-full border-[2px] border-solid border-gray-400" />
      <div className="w-[58px] h-[58px] relative">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-gray-50 box-border w-full h-full z-[1] border-[0px] border-solid border-gradient-primary-bg" />
        <img
          className="absolute top-[12px] left-[12px] w-[34px] h-[34px] object-contain z-[2]"
          alt=""
          src="/code-perspective-matte1@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[3px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
          <div className="relative leading-[28px] font-semibold inline-block min-w-[108px] z-[1] mq450:text-base mq450:leading-[22px]">
            {salesforce}
          </div>
          <div className="self-stretch h-[183px] relative text-sm leading-[136.52%] text-gray-gray-600 inline-block shrink-0 z-[1]">
            <p className="m-0">{salesforceIsACloudBasedPl}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  salesforce: PropTypes.string,
  salesforceIsACloudBasedPl: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
};

export default GroupComponent;

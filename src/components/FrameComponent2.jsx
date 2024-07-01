import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent2 = ({
  className = "",
  ourDesignAnd,
  developmentApproach,
  propAlignSelf,
  propWidth,
}) => {
  const headingWrapperStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[25px] box-border max-w-full text-center text-16xl text-gray-gray-900 font-footer-footer-sm ${className}`}
      style={headingWrapperStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[34px] max-w-full mq450:gap-[17px]">
        <div className="w-[385px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="h-[5px] w-[69px] relative [background:linear-gradient(225deg,_#f76680,_#57007b)] z-[1]" />
        </div>
        <div className="relative leading-[55px] z-[1] mq450:text-2xl mq450:leading-[33px] mq1050:text-9xl mq1050:leading-[44px]">
          <p className="m-0">{ourDesignAnd}</p>
          <p className="m-0">
            <b>{developmentApproach}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  ourDesignAnd: PropTypes.string,
  developmentApproach: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent2;

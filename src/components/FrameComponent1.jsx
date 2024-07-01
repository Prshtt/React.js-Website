import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  applicationDevelopment,
  applicationDevelopmentEnc,
  rectangle40,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] text-center text-9xl text-gray-gray-800 font-footer-footer-sm ${className}`}
    >
      <div className="h-[416px] flex-1 relative min-w-[418px] max-w-full mq750:min-w-full">
        <div className="absolute top-[0px] left-[0px] rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-lightblue-200 box-border w-full h-full border-[1px] border-solid border-steelblue-400">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.05)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-gray-gray-50 hidden" />
        </div>
        <div className="absolute top-[66px] left-[107.2px] rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-lightblue-200 w-[470.5px] flex flex-col items-end justify-end py-0 px-0 box-border gap-[60px] max-w-full z-[1]">
          <div className="w-[529px] flex flex-col items-start justify-start gap-[30px] max-w-[113%] shrink-0">
            <div className="w-[342px] relative leading-[136.02%] font-semibold inline-block max-w-full mq450:text-3xl mq450:leading-[30px]">
              {applicationDevelopment}
            </div>
            <div className="self-stretch h-[138px] relative text-sm leading-[162.02%] text-gray-gray-700 text-left inline-block">
              <p className="m-0">{applicationDevelopmentEnc}</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center text-left text-sm">
            <div className="flex flex-row items-center justify-center gap-[5px]">
              <div className="relative leading-[16px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[73px]">
                Read more
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                alt=""
                src="/arrowrightsline.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch flex-1 relative rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none max-w-full overflow-hidden max-h-full object-cover min-w-[418px] min-h-[416px] z-[1] ml-[-51px] mq750:min-w-full mq1050:ml-0"
        alt=""
        src={rectangle40}
      />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  applicationDevelopment: PropTypes.string,
  applicationDevelopmentEnc: PropTypes.string,
  rectangle40: PropTypes.string,
};

export default FrameComponent1;

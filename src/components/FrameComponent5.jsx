import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[41px] max-w-full text-center text-16xl text-gray-gray-900 font-footer-footer-sm mq750:gap-[20px] ${className}`}
    >
      <div className="w-[984px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[626px] flex flex-col items-end justify-start gap-[14px] max-w-full">
          <div className="w-[379px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="h-[5px] w-[69px] relative [background:linear-gradient(225deg,_#f76680,_#57007b)]" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
            <div className="w-[18px] h-[18px] relative rounded-[50%] [background:linear-gradient(225deg,_#f76680,_#57007b)]" />
            <div className="self-stretch flex flex-row items-start justify-end">
              <b
                className="relative leading-[55px] whitespace-pre-wrap mq450:text-2xl mq450:leading-[33px] mq1050:text-9xl mq1050:leading-[44px]"
                data-scroll-to="technologiesWeUse"
              >
                Technologies We Use
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full [row-gap:20px] text-9xl text-gray-gray-800">
        <img
          className="self-stretch flex-1 relative rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl max-w-full overflow-hidden max-h-full object-cover min-w-[418px] min-h-[416px] z-[1] mq750:min-w-full"
          alt=""
          src="/rectangle-35@2x.png"
        />
        <div className="h-[416px] flex-1 relative min-w-[418px] max-w-full ml-[-54px] mq750:min-w-full mq1050:ml-0">
          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-lightblue-300 box-border w-full h-full border-[1px] border-solid border-steelblue-300">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.05)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-gray-gray-50 hidden" />
          </div>
          <div className="absolute top-[66px] left-[88px] bg-lightblue-300 w-[529px] flex flex-col items-end justify-end gap-[60px] max-w-full z-[1]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
              <div className="relative leading-[136.02%] font-semibold mq450:text-3xl mq450:leading-[30px]">
                Machine Learning
              </div>
              <div className="self-stretch h-[138px] relative text-sm leading-[162.02%] text-gray-gray-700 text-left inline-block">
                <p className="m-0">
                  Machine learning is a branch of artificial intelligence that
                  enables systems to learn from data and improve their
                  performance over time without being explicitly programmed. It
                  involves algorithms and statistical models to analyze
                  patterns, make predictions, and automate decision-making
                  processes across various applications.
                </p>
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
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;

import PropTypes from "prop-types";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 px-1.5 box-border max-w-full text-center text-9xl text-gray-gray-800 font-footer-footer-sm ${className}`}
    >
      <div className="h-[416px] w-[643px] relative max-w-full">
        <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-lightcyan box-border w-full h-full border-[1px] border-solid border-darkslategray-200">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_30px_rgba(0,_0,_0,_0.05)] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-gray-gray-50 hidden" />
        </div>
        <div className="absolute top-[66px] left-[80px] bg-lightcyan w-[529px] flex flex-col items-end justify-end gap-[60px] max-w-full z-[1]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
            <div className="relative leading-[136.02%] font-semibold mq450:text-3xl mq450:leading-[30px]">
              Website Development
            </div>
            <div className="self-stretch h-[138px] relative text-sm leading-[162.02%] text-gray-gray-700 text-left inline-block">
              <p className="m-0">
                Website development involves creating and maintaining websites,
                encompassing tasks such as web design, content creation, coding,
                and server configuration. It focuses on creating user-friendly
                interfaces, ensuring functionality across devices, and
                optimizing performance for seamless user experiences on the
                internet.
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
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;

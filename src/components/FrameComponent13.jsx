import PropTypes from "prop-types";

const FrameComponent13 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[19px] box-border max-w-full text-left text-16xl text-gray-gray-900 font-footer-footer-sm ${className}`}
    >
      <div className="flex-1 bg-mediumpurple flex flex-row items-start justify-start pt-[103px] pb-[68px] pr-[116px] pl-[92px] box-border gap-[96px] max-w-full lg:flex-wrap lg:gap-[48px] lg:pl-[46px] lg:pr-[58px] lg:box-border mq750:gap-[24px] mq750:pt-[67px] mq750:pb-11 mq750:pr-[29px] mq750:pl-[23px] mq750:box-border">
        <div className="h-[631px] w-[1440px] relative bg-mediumpurple hidden max-w-full" />
        <div className="w-[535px] flex flex-col items-start justify-start gap-[91px] min-w-[535px] max-w-full lg:flex-1 mq450:gap-[23px] mq750:gap-[45px] mq1050:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="w-[474px] flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="w-[69px] h-[5px] relative [background:linear-gradient(225deg,_#f76680,_#57007b)] z-[1]" />
              <div className="self-stretch relative leading-[55px] z-[1] mq450:text-2xl mq450:leading-[33px] mq1050:text-9xl mq1050:leading-[44px]">
                <span>Leading companies trust us</span>
                <b> to develop software</b>
              </div>
            </div>
            <div className="self-stretch relative text-lg leading-[36px] z-[1] text-gray-gray-600">
              <span>{`We `}</span>
              <span className="text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                add development capacity
              </span>
              <span>
                {" "}
                to tech teams. Our value isn’t limited to building teams but is
                equally distributed across the project lifecycle. We are a
                custom software development company that guarantees the
                successful delivery of your project.
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[3px] text-base text-brand-primary-bg">
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <div className="relative leading-[25px] font-medium z-[1]">
                See more Informations
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <img
                  className="w-4 h-[16.7px] relative z-[1]"
                  alt=""
                  src="/client-button-icon.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[460px] flex-1 relative max-w-full overflow-hidden min-w-[391px] z-[1] mq750:min-w-full"
          alt=""
          src="/abouusvideo.svg"
        />
      </div>
    </div>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;

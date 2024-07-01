import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[33px] box-border relative max-w-full text-center text-6xl text-gray-300 font-footer-footer-sm ${className}`}
    >
      <div className="h-[18px] w-[18px] absolute !m-[0] bottom-[261px] left-[0px] rounded-[50%] [background:linear-gradient(225deg,_#f76680,_#57007b)]" />
      <div className="h-[72px] w-[72px] absolute !m-[0] top-[30px] right-[-41px] rounded-[50%] [background:linear-gradient(225deg,_#6562e3,_#5a118d)]" />
      <div className="w-[1245px] flex flex-col items-start justify-start gap-[1px] max-w-full">
        <div className="w-[1220px] h-[72px] relative max-w-full">
          <div className="absolute top-[22px] left-[1px] rounded-[50%] [background:linear-gradient(225deg,_#f76680,_#57007b)] w-[50px] h-[50px]" />
          <div className="absolute top-[0px] left-[0px] leading-[60px] font-semibold flex items-center justify-center w-[1220px] z-[1] mq450:text-xl mq450:leading-[48px]">{`Highly talented IT Design, Management & Support services.`}</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-xl">
          <div className="flex-1 flex flex-col items-end justify-start gap-[14px] max-w-full">
            <div className="w-[1185px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[809px] flex flex-row flex-wrap items-start justify-start gap-[67px] max-w-full mq450:gap-[17px] mq1050:gap-[33px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[44px] min-w-[471px] max-w-full mq750:flex-wrap mq750:gap-[22px] mq750:min-w-full">
                  <img
                    className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover min-w-[221px] min-h-[267px]"
                    alt=""
                    src="/rectangle-52@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover min-w-[221px] min-h-[267px]"
                    alt=""
                    src="/rectangle-53@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[91px] px-0 pb-0">
                  <div className="w-[18px] h-[18px] relative rounded-[50%] [background:linear-gradient(225deg,_#f76680,_#57007b)]" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[7px] max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start relative min-w-[792px] max-w-full mq1050:min-w-full">
                <div className="h-[30px] w-[30px] absolute !m-[0] bottom-[2px] left-[-16px] rounded-[50%] [background:linear-gradient(225deg,_#6562e3,_#5a118d)]" />
                <div className="h-[214px] flex-1 relative leading-[40px] flex items-center justify-center max-w-full z-[1] mq450:text-base mq450:leading-[32px]">
                  At XYZ Software Solutions, we specialize in delivering
                  innovative and customized software services tailored to meet
                  the unique needs of our clients. With a team of experienced
                  professionals and a commitment to excellence, we provide
                  end-to-end solutions that drive business growth and
                  efficiency. Our services range from software development and
                  integration to maintenance and support, ensuring seamless
                  operations for businesses of all sizes. Partner with us to
                  leverage cutting-edge technology and achieve your digital
                  transformation goals.
                </div>
              </div>
              <div className="h-[78px] flex flex-col items-start justify-start">
                <div className="w-[18px] h-[18px] relative rounded-[50%] [background:linear-gradient(225deg,_#645dde,_#5a108c)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;

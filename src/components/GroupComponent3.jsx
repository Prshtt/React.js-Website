import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`mr-[-1px] self-stretch bg-midnightblue flex flex-col items-start justify-start pt-[50px] px-0 pb-[45.9px] box-border gap-[28.8px] max-w-full text-left text-base text-base-white font-inspiration mq750:pt-8 mq750:pb-[30px] mq750:box-border ${className}`}
    >
      <div className="self-stretch h-[567px] relative bg-midnightblue hidden" />
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[139.2px] max-w-full mq450:gap-[35px] mq750:gap-[70px]">
        <div className="w-[1385.9px] flex flex-row items-start justify-start py-0 px-[65px] box-border max-w-full lg:pl-8 lg:pr-8 lg:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[35.9px] max-w-full mq750:gap-[18px]">
            <div className="w-[138.2px] flex flex-row items-start justify-start gap-[15.1px]">
              <div className="h-[25px] w-[25px] relative rounded-[50%] [background:linear-gradient(225deg,_#f76680,_#57007b)] z-[1]" />
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch relative z-[1]">Website Logo</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-lg text-gray-gray-600 font-footer-footer-sm">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                <div className="w-[372.3px] flex flex-col items-start justify-start gap-[74.7px] min-w-[372.3px] max-w-full mq450:gap-[37px] mq750:min-w-full mq1050:flex-1">
                  <div className="self-stretch relative leading-[30px] z-[1]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
                  <div className="flex flex-row items-start justify-start py-0 px-[35px]">
                    <div className="h-[32.6px] flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-[32.6px] w-[34px] relative min-h-[33px] z-[1] flex items-center justify-center">
                        <img
                          className="h-full w-full z-[1] object-contain absolute left-[0px] top-[4px] [transform:scale(1.859)]"
                          alt=""
                          src="/group-5.svg"
                        />
                      </div>
                      <div className="h-[32.6px] w-[34px] relative min-h-[33px] z-[1] flex items-center justify-center">
                        <img
                          className="h-full w-full z-[1] object-contain absolute left-[0px] top-[4px] [transform:scale(1.859)]"
                          alt=""
                          src="/group-11.svg"
                        />
                      </div>
                      <div className="h-[32.6px] w-[34px] relative min-h-[33px] z-[1] flex items-center justify-center">
                        <img
                          className="h-full w-full z-[1] object-contain absolute left-[0px] top-[4px] [transform:scale(1.859)]"
                          alt=""
                          src="/group-10.svg"
                        />
                      </div>
                      <div className="h-[32.6px] w-[34px] relative min-h-[33px] z-[1] flex items-center justify-center">
                        <img
                          className="h-full w-full z-[1] object-contain absolute left-[0px] top-[4px] [transform:scale(1.859)]"
                          alt=""
                          src="/group-9.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[526.3px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[526.3px] max-w-full text-gray-gray-700 mq750:min-w-full mq1050:flex-1">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                    <div className="w-[133.1px] flex flex-col items-start justify-start gap-[17.2px] min-w-[133.1px] mq750:flex-1">
                      <b className="relative inline-block min-w-[47px] z-[1]">
                        Links
                      </b>
                      <div className="self-stretch relative text-base leading-[236.3%] font-footer-footer-links text-gray-gray-600 z-[1]">
                        <p className="m-0">About Us</p>
                        <p className="m-0">Services</p>
                        <p className="m-0">{`Technology
How it works`}</p>
                        <p className="m-0">Careers</p>
                      </div>
                    </div>
                    <div className="w-[306.2px] flex flex-col items-start justify-start gap-[40.6px] min-w-[306.2px] mq450:gap-[20px] mq750:flex-1">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
                        <b className="relative inline-block min-w-[97px] z-[1]">
                          Contact us
                        </b>
                        <div className="self-stretch relative leading-[30px] text-gray-gray-600 z-[1]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</div>
                      </div>
                      <div className="relative leading-[30px] text-gray-gray-600 whitespace-nowrap z-[1]">
                        +1234567891010
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-gray-gray-400" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[57px] text-sm text-gray-gray-700 font-footer-footer-sm mq450:pl-5 mq450:box-border">
        <div className="relative leading-[10px] z-[1]">
          © 2023 Copyright by IK Developers. All rights reserved.
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;

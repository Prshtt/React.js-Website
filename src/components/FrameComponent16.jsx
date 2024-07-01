import PropTypes from "prop-types";

const FrameComponent16 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[42px] pr-[21px] pl-5 box-border max-w-full text-left text-13xl text-gray-200 font-roboto mq750:pb-[27px] mq750:box-border ${className}`}
    >
      <div className="w-[1221px] flex flex-col items-start justify-start gap-[53px] max-w-full mq750:gap-[26px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[83px] max-w-full mq450:gap-[21px] mq750:gap-[41px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[47px] min-w-[369px] max-w-full mq450:min-w-full mq750:gap-[23px]">
            <div
              className="relative leading-[40px] font-medium mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]"
              data-scroll-to="heading3"
            >
              Contact Us
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full text-base text-darkslategray-300">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <div className="relative leading-[20px] font-medium inline-block min-w-[54px]">
                  <span>Name</span>
                  <span className="text-red">*</span>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-silver">
                <div className="flex-1 rounded-3xs bg-gray-gray-50 box-border flex flex-row items-start justify-start pt-2 px-[21px] pb-[9px] max-w-full border-[1px] border-solid border-steelblue-100">
                  <div className="h-[39px] w-[568px] relative rounded-3xs bg-gray-gray-50 box-border hidden max-w-full border-[1px] border-solid border-steelblue-100" />
                  <div className="w-[98px] relative leading-[17px] flex items-center shrink-0 z-[1]">
                    Enter name
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[34px] mq750:flex-wrap mq750:gap-[17px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[175px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                      <div className="flex flex-row items-start justify-start py-0 px-px">
                        <div className="relative leading-[20px] font-medium inline-block min-w-[116px]">
                          <span>Phone number</span>
                          <span className="text-red">*</span>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-start gap-[24px] text-darkslategray-100">
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
                          <img
                            className="w-[42px] h-[26px] relative rounded-8xs object-cover"
                            alt=""
                            src="/india-1@2x.png"
                          />
                        </div>
                        <div className="flex-1 rounded-3xs bg-gray-gray-50 flex flex-row items-start justify-start pt-1.5 px-4 pb-[7px] whitespace-nowrap border-[1px] border-solid border-steelblue-200">
                          <div className="h-[37px] w-[205px] relative rounded-3xs bg-gray-gray-50 box-border hidden border-[1px] border-solid border-steelblue-200" />
                          <div className="relative inline-block min-w-[32px] z-[1]">{`+ 91 `}</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative leading-[20px] font-medium inline-block min-w-[68px]">
                        <span>Country</span>
                        <span className="text-red">*</span>
                      </div>
                      <div className="self-stretch h-[38px] flex flex-row items-start justify-start py-0 pr-0 pl-px box-border">
                        <div className="h-[39px] flex-1 relative rounded-3xs bg-gray-gray-50 box-border border-[1px] border-solid border-steelblue-200" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-px">
                    <div className="relative leading-[20px] font-medium inline-block min-w-[77px]">
                      <span>Message</span>
                      <span className="text-red">*</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[22px] min-w-[172px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                    <div className="relative leading-[20px] font-medium inline-block min-w-[51px]">
                      <span>Email</span>
                      <span className="text-red">*</span>
                    </div>
                    <div className="self-stretch h-[39px] relative rounded-3xs bg-gray-gray-50 box-border border-[1px] border-solid border-steelblue-200" />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[20px] font-medium inline-block min-w-[39px]">
                      <span>City</span>
                      <span className="text-red">*</span>
                    </div>
                    <div className="self-stretch h-[39px] relative rounded-3xs bg-gray-gray-50 box-border border-[1px] border-solid border-steelblue-200" />
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-gray-gray-50 box-border flex flex-row items-start justify-start pt-[13px] px-[21px] pb-[79px] max-w-full text-silver border-[1px] border-solid border-steelblue-200">
                <div className="h-[114px] w-[569px] relative rounded-3xs bg-gray-gray-50 box-border hidden max-w-full border-[1px] border-solid border-steelblue-200" />
                <div className="relative leading-[17px] z-[1]">
                  Write us a message
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[513px] flex-1 relative rounded-31xl max-w-full overflow-hidden object-contain min-w-[370px] mq450:min-w-full"
            alt=""
            src="/form-message-bg@2x.png"
          />
        </div>
        <div className="w-[554.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-sm text-gray-gray-50 font-footer-footer-sm">
          <div className="rounded-8xs [background:linear-gradient(225deg,_#6675f7,_#57007b)] flex flex-row items-start justify-start py-3.5 px-[38px]">
            <div className="relative leading-[14px] font-semibold inline-block min-w-[48px]">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent16.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent16;

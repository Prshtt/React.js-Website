import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";

const FrameComponent12 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[90px] pr-[21px] pl-5 box-border max-w-full text-center text-16xl text-gray-gray-900 font-footer-footer-sm mq750:pb-[38px] mq750:box-border mq1050:pb-[58px] mq1050:box-border ${className}`}
    >
      <div className="w-[1233px] flex flex-col items-end justify-start gap-[52px] max-w-full mq750:gap-[26px]">
        <FrameComponent2
          ourDesignAnd="Our design and"
          developmentApproach="development approach"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full text-left text-xl">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[25px] max-w-full">
            <div className="flex-1 rounded-11xl bg-gray-gray-50 box-border flex flex-row items-start justify-start pt-[47px] pb-20 pr-8 pl-[33px] gap-[25px] min-w-[393px] max-w-full z-[1] border-[1px] border-solid border-gray-400 mq750:flex-wrap mq750:min-w-full">
              <div className="h-[237px] w-[604px] relative rounded-11xl bg-gray-gray-50 box-border hidden max-w-full border-[1px] border-solid border-gray-400" />
              <div className="h-14 w-[59px] relative z-[3]">
                <img
                  className="absolute top-[10px] left-[12px] w-[34px] h-[35px] object-contain z-[2]"
                  alt=""
                  src="/rocket-perspective-matte@2x.png"
                />
                <div className="absolute top-[0px] left-[0px] rounded-3xs [background:linear-gradient(225deg,_#29272e,_#27272e)] w-full h-full" />
                <img
                  className="absolute top-[10px] left-[12px] w-[34px] h-[35px] object-contain hidden"
                  alt=""
                  src="/play-perspective-matte@2x.png"
                />
                <img
                  className="absolute top-[9px] left-[12px] w-[34px] h-[35px] object-contain z-[4]"
                  alt=""
                  src="/rocket-perspective-matte@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[294px] max-w-full">
                <div className="self-stretch relative leading-[136.52%] font-semibold z-[2] mq450:text-base mq450:leading-[22px]">
                  UX Driven Engineering
                </div>
                <div className="self-stretch relative text-sm leading-[162.02%] z-[2] text-gray-gray-700">
                  <span>{`Unlike other companies, we are a `}</span>
                  <span className="text-transparent !bg-clip-text [background:linear-gradient(225deg,_#29272e,_#27272e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    UX first
                  </span>
                  <span>
                    {" "}
                    development company. Projects are driven by designers and
                    they make sure design and experiences translate to code.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-11xl bg-gray-gray-50 box-border flex flex-row items-start justify-start pt-[47px] pb-20 pr-[33px] pl-[37px] gap-[20px] min-w-[393px] max-w-full z-[2] border-[1px] border-solid border-skyblue mq750:flex-wrap mq750:min-w-full">
              <div className="h-[237px] w-[604px] relative rounded-11xl bg-gray-gray-50 box-border hidden max-w-full border-[1px] border-solid border-skyblue" />
              <div className="h-14 w-[59px] relative rounded-3xs [background:linear-gradient(225deg,_#68dbf2_0.01%,_#509cf5)] z-[3]">
                <div className="absolute top-[0px] left-[0px] rounded-3xs [background:linear-gradient(225deg,_#68dbf2_0.01%,_#509cf5)] w-full h-full hidden" />
                <img
                  className="absolute top-[11px] left-[12px] w-[34px] h-[34px] object-contain z-[4]"
                  alt=""
                  src="/code-perspective-matte1@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[294px] max-w-full">
                <div className="self-stretch relative leading-[136.52%] font-semibold z-[3] mq450:text-base mq450:leading-[22px]">
                  Developing Shared Understanding
                </div>
                <div className="self-stretch relative text-sm leading-[162.02%] z-[3] text-gray-gray-700">
                  <span>{`Unlike other companies, we are a `}</span>
                  <span className="text-transparent !bg-clip-text [background:linear-gradient(225deg,_#68dbf2_0.01%,_#509cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    UX first
                  </span>
                  <span>
                    {" "}
                    development company. Projects are driven by designers and
                    they make sure design and experiences translate to code.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[25px] max-w-full">
            <div className="flex-1 rounded-11xl bg-gray-gray-50 box-border flex flex-row items-start justify-center pt-[45px] pb-[82px] pr-8 pl-[33px] gap-[25px] min-w-[393px] max-w-full z-[1] border-[1px] border-solid border-hotpink mq750:flex-wrap mq750:min-w-full">
              <div className="h-[237px] w-[604px] relative rounded-11xl bg-gray-gray-50 box-border hidden max-w-full border-[1px] border-solid border-hotpink" />
              <div className="h-14 w-[59px] relative rounded-3xs [background:linear-gradient(224.47deg,_#ff92ae_2.6%,_#ff3d9a)] z-[2]">
                <div className="absolute top-[0px] left-[0px] rounded-3xs [background:linear-gradient(224.47deg,_#ff92ae_2.6%,_#ff3d9a)] w-full h-full hidden" />
                <img
                  className="absolute top-[10px] left-[12px] w-[34px] h-[35px] object-contain hidden"
                  alt=""
                  src="/play-perspective-matte@2x.png"
                />
                <img
                  className="absolute top-[13px] left-[15px] w-[30px] h-[30px] object-contain z-[3]"
                  alt=""
                  src="/heart-rate-perspective-matte@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[294px] max-w-full">
                <div className="self-stretch relative leading-[136.52%] font-semibold z-[2] mq450:text-base mq450:leading-[22px]">
                  Proven Experience and Expertise
                </div>
                <div className="self-stretch relative text-sm leading-[162.02%] z-[2] text-gray-gray-700">
                  <span>{`Unlike other companies, we are a `}</span>
                  <span className="text-transparent !bg-clip-text [background:linear-gradient(224.47deg,_#ff92ae_2.6%,_#ff3d9a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    UX first
                  </span>
                  <span>
                    {" "}
                    development company. Projects are driven by designers and
                    they make sure design and experiences translate to code.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-11xl bg-gray-gray-50 box-border flex flex-row items-start justify-center pt-[45px] pb-[82px] pr-[33px] pl-9 gap-[21px] min-w-[393px] max-w-full z-[1] border-[1px] border-solid border-aquamarine mq750:flex-wrap mq750:min-w-full">
              <div className="h-[237px] w-[604px] relative rounded-11xl bg-gray-gray-50 box-border hidden max-w-full border-[1px] border-solid border-aquamarine" />
              <div className="h-14 w-[59px] relative rounded-3xs [background:linear-gradient(225deg,_#67e9f1,_#24e795)] z-[2]">
                <div className="absolute top-[0px] left-[0px] rounded-3xs [background:linear-gradient(225deg,_#67e9f1,_#24e795)] w-full h-full hidden" />
                <img
                  className="absolute top-[10px] left-[12px] w-[34px] h-[35px] object-contain hidden"
                  alt=""
                  src="/play-perspective-matte@2x.png"
                />
                <img
                  className="absolute top-[7px] left-[10px] w-10 h-10 object-contain z-[3]"
                  alt=""
                  src="/shield-perspective-matte@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[294px] max-w-full">
                <div className="self-stretch relative leading-[136.52%] font-semibold z-[2] mq450:text-base mq450:leading-[22px]">{`Security & Intellectual Property (IP)`}</div>
                <div className="self-stretch relative text-sm leading-[162.02%] z-[2] text-gray-gray-700">
                  <span>{`Unlike other companies, we are a `}</span>
                  <span className="text-transparent !bg-clip-text [background:linear-gradient(225deg,_#67e9f1,_#24e795)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    UX first
                  </span>
                  <span>
                    {" "}
                    development company. Projects are driven by designers and
                    they make sure design and experiences translate to code.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[25px] max-w-full">
            <div className="flex-1 rounded-11xl bg-gray-gray-50 box-border flex flex-row items-start justify-center pt-[43px] pb-[84px] pr-8 pl-[33px] gap-[25px] min-w-[393px] max-w-full z-[1] border-[1px] border-solid border-sandybrown mq750:flex-wrap mq750:min-w-full">
              <div className="h-[237px] w-[604px] relative rounded-11xl bg-gray-gray-50 box-border hidden max-w-full border-[1px] border-solid border-sandybrown" />
              <div className="h-14 w-[59px] relative rounded-3xs [background:linear-gradient(225deg,_#ffef5e,_#f7936f)] z-[2]">
                <div className="absolute top-[0px] left-[0px] rounded-3xs [background:linear-gradient(225deg,_#ffef5e,_#f7936f)] w-full h-full hidden" />
                <img
                  className="absolute top-[14px] left-[15px] w-[30px] h-[30px] object-contain z-[3]"
                  alt=""
                  src="/success-perspective-matte@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[294px] max-w-full">
                <div className="self-stretch relative leading-[136.52%] font-semibold z-[2] mq450:text-base mq450:leading-[22px]">
                  Code Reviews
                </div>
                <div className="self-stretch relative text-sm leading-[162.02%] z-[2] text-gray-gray-700">
                  <span>{`Unlike other companies, we are a `}</span>
                  <span className="text-transparent !bg-clip-text [background:linear-gradient(225deg,_#ffef5e,_#f7936f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    UX first
                  </span>
                  <span>
                    {" "}
                    development company. Projects are driven by designers and
                    they make sure design and experiences translate to code.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-11xl bg-gray-gray-50 box-border flex flex-row items-start justify-center pt-9 pb-[84px] pr-[33px] pl-[37px] gap-[20px] min-w-[393px] max-w-full z-[1] border-[1px] border-solid border-mediumvioletred mq750:flex-wrap mq750:min-w-full">
              <div className="h-[237px] w-[604px] relative rounded-11xl bg-gray-gray-50 box-border hidden max-w-full border-[1px] border-solid border-mediumvioletred" />
              <div className="h-14 w-[59px] relative rounded-3xs [background:linear-gradient(225deg,_#f76680,_#57007b)] z-[2]">
                <div className="absolute top-[0px] left-[0px] rounded-3xs [background:linear-gradient(225deg,_#f76680,_#57007b)] w-full h-full hidden" />
                <img
                  className="absolute top-[10px] left-[12px] w-[34px] h-[35px] object-contain hidden"
                  alt=""
                  src="/play-perspective-matte@2x.png"
                />
                <img
                  className="absolute top-[13px] left-[15px] w-[29px] h-[30px] object-contain z-[3]"
                  alt=""
                  src="/padlock-perspective-matte@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[294px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch relative leading-[136.52%] font-semibold z-[2] mq450:text-base mq450:leading-[22px]">{`Quality Assurance & Testing`}</div>
                  <div className="self-stretch relative text-sm leading-[162.02%] z-[2] text-gray-gray-700">
                    <span>{`Unlike other companies, we are a `}</span>
                    <span className="text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      UX first
                    </span>
                    <span>
                      {" "}
                      development company. Projects are driven by designers and
                      they make sure design and experiences translate to code.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;

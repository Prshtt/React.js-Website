import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start relative max-w-full text-left text-xl text-gray-100 font-footer-footer-sm ${className}`}
    >
      <div className="h-[72px] w-[72px] absolute !m-[0] bottom-[-27px] left-[117px] rounded-[50%] [background:linear-gradient(225deg,_#f76680,_#57007b)] z-[1]" />
      <div className="h-[50px] w-[50px] absolute !m-[0] right-[-14px] bottom-[-23px] rounded-[50%] [background:linear-gradient(225deg,_#f76680,_#57007b)] z-[1]" />
      <div className="w-[1440px] bg-plum flex flex-row items-start justify-start pt-[53px] px-0 pb-[49.4px] box-border max-w-full mq750:pt-[34px] mq750:pb-8 mq750:box-border">
        <div className="h-[655px] w-[1440px] relative bg-plum hidden max-w-full" />
        <div
          className="ml-[-270px] h-[552.6px] w-[1980px] flex flex-col items-center justify-start pt-0 px-5 pb-[63.6px] box-border gap-[44.3px] shrink-0 max-w-[138%] z-[2] lg:h-auto mq750:gap-[22px] mq750:pb-[41px] mq750:box-border"
          data-scroll-to="groupContainer"
        >
          <div className="w-[1440px] flex flex-row flex-wrap items-start justify-start gap-[20px] shrink-0 max-w-full">
            <div className="w-[110px] flex flex-row items-start justify-start pt-[97px] px-0 pb-[75px] box-border relative">
              <div className="ml-[-242px] w-[108px] relative leading-[28px] font-semibold inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[22px]">
                Fintech
              </div>
              <div className="h-full w-[380px] absolute !m-[0] top-[0px] bottom-[0px] left-[-270px]">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-base-white box-border w-full h-full border-[2px] border-solid border-gray-400" />
                <div className="absolute top-[19px] left-[25px] w-[58px] h-[58px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-gray-50 box-border w-full h-full z-[1] border-[0px] border-solid border-gradient-primary-bg" />
                  <img
                    className="absolute top-[12px] left-[12px] w-[34px] h-[34px] object-contain z-[2]"
                    alt=""
                    src="/code-perspective-matte1@2x.png"
                  />
                </div>
              </div>
              <div className="w-[315px] flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border shrink-0 ml-[-108px] text-sm text-gray-gray-600">
                <div className="self-stretch h-[129px] relative leading-[136.52%] inline-block shrink-0 z-[1]">
                  <p className="m-0">
                    Fintech combines technology with finance to innovate
                    services like mobile banking, digital wallets, and
                    blockchain. It aims to improve efficiency, accessibility,
                    and user experience, reshaping how financial services are
                    delivered and consumed
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start gap-[15px] min-w-[767px] max-w-full text-center text-16xl text-gray-gray-900 mq1050:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
                <b className="relative leading-[55px] z-[1] mq450:text-2xl mq450:leading-[33px] mq1050:text-9xl mq1050:leading-[44px]">
                  Services
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[20px] max-w-full text-left text-xl text-gray-100 mq1050:flex-wrap">
                <GroupComponent
                  salesforce="Salesforce"
                  salesforceIsACloudBasedPl="Salesforce is a cloud-based platform offering customer relationship management (CRM) services, enabling businesses to manage sales, customer service, marketing, and more. It provides tools for automation, analytics, and integration, helping companies streamline operations and enhance customer engagement."
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[79px] px-0 pb-0 box-border min-w-[285px] max-w-full text-gray-gray-600 mq450:pt-[51px] mq450:box-border">
                  <div className="self-stretch rounded-lg bg-base-white box-border flex flex-col items-start justify-start pt-4 px-[23px] pb-[18px] gap-[20px] max-w-full border-[2px] border-solid border-gradient-primary-bg">
                    <div className="w-[380px] h-[340px] relative rounded-lg bg-base-white box-border hidden max-w-full border-[2px] border-solid border-gradient-primary-bg" />
                    <div className="w-[58px] h-[58px] relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-gray-50 box-border w-full h-full z-[1] border-[0px] border-solid border-gradient-primary-bg" />
                      <img
                        className="absolute top-[13px] left-[13px] w-[31px] h-8 object-contain z-[2]"
                        alt=""
                        src="/dashboard-perspective-matte@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[3px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[11px]">
                        <div className="w-[108px] relative leading-[28px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block z-[1] mq450:text-base mq450:leading-[22px]">
                          Web Dev
                        </div>
                        <div className="self-stretch h-[183px] relative text-sm leading-[136.52%] inline-block shrink-0 z-[1]">
                          <p className="m-0">
                            Web development involves creating and maintaining
                            websites, encompassing aspects like web design, web
                            content development, client-side/server-side
                            scripting, and network security configuration. It
                            aims to build functional, user-friendly, and
                            visually appealing websites and web applications for
                            various purposes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <GroupComponent
                  salesforce="ERP"
                  salesforceIsACloudBasedPl="Enterprise Risk Management (ERM) involves identifying, assessing, and managing risks across an organization to minimize potential impacts on business objectives. It provides a structured approach to risk management, integrating strategies to mitigate financial, operational, strategic, and compliance risks."
                  propBorder="1px solid rgba(0, 0, 0, 0.5)"
                />
              </div>
            </div>
            <div className="w-[110px] flex flex-col items-start justify-start pt-[97px] pb-[22px] pr-5 pl-7 box-border relative gap-[10px]">
              <div className="relative leading-[28px] font-semibold inline-block min-w-[47px] z-[1] mq450:text-base mq450:leading-[22px]">
                CRM
              </div>
              <div className="w-[380px] h-full absolute !m-[0] top-[0px] right-[-270px] bottom-[0px]">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-base-white box-border w-full h-full border-[2px] border-solid border-gray-400" />
                <div className="absolute top-[19px] left-[25px] w-[58px] h-[58px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-gray-50 box-border w-full h-full z-[1] border-[0px] border-solid border-gradient-primary-bg" />
                  <img
                    className="absolute top-[8px] left-[8px] w-[42px] h-[42px] object-contain z-[2]"
                    alt=""
                    src="/mobile-app-perspective-matte@2x.png"
                  />
                </div>
              </div>
              <div className="w-[315px] h-[183px] relative text-sm leading-[136.52%] text-gray-gray-600 inline-block shrink-0 z-[1]">
                <p className="m-0">
                  Customer Relationship Management (CRM) systems help businesses
                  manage and analyze customer interactions and data throughout
                  the customer lifecycle. They aim to improve customer service,
                  enhance sales, and foster customer loyalty by streamlining
                  communication, tracking interactions, and automating
                  processes.
                </p>
                <p className="m-0 whitespace-pre-wrap">{`  `}</p>
              </div>
            </div>
          </div>
          <div className="w-[1440px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <img
              className="h-[19.3px] w-[102px] relative shrink-0"
              alt=""
              src="/group-102.svg"
            />
          </div>
        </div>
      </div>
      <div className="h-[72px] w-[72px] absolute !m-[0] top-[-39px] left-[477px] rounded-[50%] [background:linear-gradient(225deg,_#f76680,_#57007b)] z-[1]" />
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;

import PropTypes from "prop-types";

const FrameComponent14 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[93px] pr-16 pl-5 box-border relative max-w-full text-center text-16xl text-gray-gray-900 font-footer-footer-sm lg:pr-8 lg:box-border mq750:pb-[60px] mq750:box-border ${className}`}
    >
      <div className="w-[1064px] flex flex-col items-end justify-start gap-[24px] max-w-full">
        <div className="w-[1015px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="h-[5px] w-[69px] relative [background:linear-gradient(225deg,_#f76680,_#57007b)]" />
        </div>
        <div className="w-[1014px] flex flex-row items-start justify-center pt-0 px-5 pb-5 box-border max-w-full">
          <div className="relative leading-[55px] mq450:text-2xl mq450:leading-[33px] mq1050:text-9xl mq1050:leading-[44px]">
            <p className="m-0">Our</p>
            <p className="m-0">
              <b>Tech Stack</b>
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[49px] box-border max-w-full text-left text-lg">
          <div className="w-[766px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap mq750:justify-center">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[30px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[76px] shrink-0">
                Backend
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[30px] pl-[21px] mt-[-2px]">
                <div className="h-[3px] w-[25px] relative rounded-10xs [background:linear-gradient(225deg,_#f76680,_#57007b)] shrink-0 z-[1]" />
              </div>
            </div>
            <div className="relative leading-[30px] inline-block min-w-[77px]">
              Frontend
            </div>
            <div className="relative leading-[30px] inline-block min-w-[91px]">
              Databases
            </div>
            <div className="relative leading-[30px] inline-block min-w-[41px]">
              CMS
            </div>
            <div className="relative leading-[30px] inline-block min-w-[113px]">
              CloudTesting
            </div>
            <div className="relative leading-[30px] inline-block min-w-[68px]">
              DevOps
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-1.5 gap-[20px] mq1050:flex-wrap mq1050:justify-center">
          <img
            className="self-stretch w-[166px] relative max-h-full overflow-hidden shrink-0 min-h-[94px]"
            alt=""
            src="/nodejs.svg"
          />
          <img
            className="self-stretch w-[166px] relative max-h-full overflow-hidden shrink-0 object-contain min-h-[94px]"
            alt=""
            src="/php@2x.png"
          />
          <div className="h-[87px] w-40 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/kisspngmysqliphpdatabaselinuxcoding5ac4824a2e87e0-1@2x.png"
            />
          </div>
          <img
            className="self-stretch w-[166px] relative max-h-full overflow-hidden shrink-0 min-h-[94px]"
            alt=""
            src="/java.svg"
          />
          <img
            className="self-stretch w-[166px] relative max-h-full overflow-hidden shrink-0 min-h-[94px]"
            alt=""
            src="/netcore.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[735px] flex flex-row flex-wrap items-start justify-center gap-[12px] max-w-full">
            <img
              className="self-stretch w-[166px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[94px]"
              alt=""
              src="/python@2x.png"
            />
            <img
              className="self-stretch w-[166px] relative max-h-full overflow-hidden shrink-0 min-h-[94px]"
              alt=""
              src="/rubyonrails.svg"
            />
            <img
              className="self-stretch w-[166px] relative max-h-full overflow-hidden shrink-0 min-h-[94px]"
              alt=""
              src="/go.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[131px]">
              <img
                className="self-stretch h-[54px] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/mon-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[5px] w-[69px] absolute !m-[0] bottom-[5px] left-[688px] [background:linear-gradient(225deg,_#f76680,_#57007b)]" />
    </div>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent14;

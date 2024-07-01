import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[23px] pr-[11px] pl-0 box-border max-w-full text-left text-26xl text-gray-gray-900 font-footer-footer-sm ${className}`}
    >
      <div className="w-[1219px] flex flex-row items-center justify-center py-0 px-[37px] box-border [row-gap:20px] max-w-full mq1050:flex-wrap">
        <div className="w-[531px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[75px] min-w-[531px] max-w-full mq450:gap-[19px] mq750:gap-[37px] mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
            <div
              className="relative leading-[71px] inline-block max-w-full mq450:text-8xl mq450:leading-[43px] mq1050:text-17xl mq1050:leading-[57px]"
              data-scroll-to="h1PrimaryText"
            >
              <p className="m-0">
                <span>
                  <span className="font-light font-footer-footer-sm text-gray-gray-900">{`Great `}</span>
                  <b className="font-footer-footer-sm text-transparent !bg-clip-text [background:linear-gradient(180deg,_#de4396,_rgba(13,_28,_159,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Product
                  </b>
                </span>
                <span>
                  <span>
                    <span className="font-light"> is</span>
                  </span>
                </span>
              </p>
              <p className="m-0 text-34xl">
                <span>
                  <span className="font-extrabold">
                    <span>{`built by great `}</span>
                    <span className="text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f7666f,_#406aff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      teams
                    </span>
                  </span>
                </span>
              </p>
            </div>
            <div className="self-stretch h-[58px] relative text-lg leading-[36px] text-gray-gray-700 inline-block shrink-0">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </div>
          </div>
          <div className="shadow-[0px_4px_49px_rgba(0,_0,_0,_0.15)] rounded-8xs [background:linear-gradient(86.84deg,_#590c88,_#6567e8)] flex flex-row items-center justify-center py-[19px] px-[30px] whitespace-nowrap text-sm text-gray-gray-50">
            <div className="relative leading-[14px] font-semibold inline-block min-w-[115px]">
              Let’s get started!
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[399px] max-w-full mq750:min-w-full">
          <img
            className="self-stretch h-[546px] relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/herowrapper--imagecenter@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;

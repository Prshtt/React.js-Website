import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start gap-[6px] max-w-full ${className}`}
    >
      <div className="h-[60px] flex-1 relative min-w-[768px] max-w-full mq1050:min-w-full">
        <div className="absolute top-[0px] left-[0px] w-[1182px] h-8">
          <div className="absolute top-[30px] left-[0px] box-border w-[1184px] h-0.5 border-t-[2px] border-solid border-gradient-primary-bg" />
          <div className="absolute top-[0px] left-[180.1px] box-border w-0.5 h-8 z-[1] border-r-[2px] border-solid border-gradient-primary-bg" />
          <div className="absolute top-[0px] left-[550.1px] box-border w-0.5 h-8 z-[1] border-r-[2px] border-solid border-gradient-primary-bg" />
          <div className="absolute top-[0px] left-[940.1px] box-border w-0.5 h-8 z-[1] border-r-[2px] border-solid border-gradient-primary-bg" />
        </div>
        <div className="absolute top-[30px] left-[243px] w-[772px] h-[30px] flex flex-row items-start justify-between gap-[20px] max-w-full">
          <div className="h-8 w-0.5 relative box-border z-[1] border-r-[2px] border-solid border-gradient-primary-bg" />
          <div className="h-[30px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
            <div className="w-0.5 h-8 relative box-border z-[1] border-r-[2px] border-solid border-gradient-primary-bg" />
          </div>
          <div className="h-8 w-0.5 relative box-border z-[1] border-r-[2px] border-solid border-gradient-primary-bg" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
        <img
          className="w-[42px] h-[42px] relative object-cover"
          alt=""
          src="/trophy-perspective-matte@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;

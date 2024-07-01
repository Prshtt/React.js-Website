import PropTypes from "prop-types";

const GroupComponent1 = ({
  className = "",
  prop,
  assembleTheRightTeam,
  weHandleAllAspectsOfVetti,
}) => {
  return (
    <div
      className={`w-[299px] rounded-4xs bg-base-white box-border flex flex-col items-start justify-start pt-5 px-[21px] pb-6 gap-[15px] text-left text-lg text-gray-gray-900 font-footer-footer-sm border-[1px] border-solid border-shade-primary-lite-bg ${className}`}
    >
      <div className="w-[299px] h-[159px] relative rounded-4xs bg-base-white box-border hidden border-[1px] border-solid border-shade-primary-lite-bg" />
      <div className="flex flex-row items-start justify-start gap-[8px]">
        <b className="relative inline-block text-transparent !bg-clip-text [background:linear-gradient(225deg,_#f76680,_#57007b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] min-w-[21px] z-[1]">
          {prop}
        </b>
        <b className="relative z-[1]">{assembleTheRightTeam}</b>
      </div>
      <div className="w-[245px] h-[74px] relative text-sm leading-[20px] text-gray-gray-600 inline-block shrink-0 z-[1]">
        {weHandleAllAspectsOfVetti}
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  assembleTheRightTeam: PropTypes.string,
  weHandleAllAspectsOfVetti: PropTypes.string,
};

export default GroupComponent1;

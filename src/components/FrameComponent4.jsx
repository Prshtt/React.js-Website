import PropTypes from "prop-types";

const FrameComponent4 = ({
  className = "",
  group2,
  starPerspectiveMatte,
  starPerspectiveMatte1,
  starPerspectiveMatte2,
  starPerspectiveMatte3,
  starPerspectiveMatte4,
  romeenaDeSilva,
  janetCosmetics,
}) => {
  return (
    <div
      className={`h-[179.5px] w-[119.5px] flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0 box-border text-center text-sm text-gray-gray-500 font-footer-footer-sm ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[10px]">
        <div className="self-stretch flex-1 flex flex-row items-start justify-end py-0 pr-[19px] pl-5">
          <div className="h-20 w-20 relative flex items-center justify-center">
            <img
              className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.75)]"
              alt=""
              src={group2}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[5.5px]">
          <img
            className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
            alt=""
            src={starPerspectiveMatte}
          />
          <img
            className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
            alt=""
            src={starPerspectiveMatte1}
          />
          <img
            className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
            alt=""
            src={starPerspectiveMatte2}
          />
          <img
            className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
            alt=""
            src={starPerspectiveMatte3}
          />
          <img
            className="h-5 w-[19.5px] relative object-cover min-h-[20px]"
            alt=""
            src={starPerspectiveMatte4}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-8 pl-[33px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start py-0 px-[5px]">
              <div className="relative leading-[24px] font-semibold inline-block min-w-[43px]">
                {romeenaDeSilva}
              </div>
            </div>
            <div className="self-stretch relative text-2xs leading-[18px] text-gray-gray-300 inline-block min-w-[54px]">
              {janetCosmetics}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  group2: PropTypes.string,
  starPerspectiveMatte: PropTypes.string,
  starPerspectiveMatte1: PropTypes.string,
  starPerspectiveMatte2: PropTypes.string,
  starPerspectiveMatte3: PropTypes.string,
  starPerspectiveMatte4: PropTypes.string,
  romeenaDeSilva: PropTypes.string,
  janetCosmetics: PropTypes.string,
};

export default FrameComponent4;

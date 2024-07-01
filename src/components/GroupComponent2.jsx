import { useCallback } from "react";
import PropTypes from "prop-types";

const GroupComponent2 = ({ className = "" }) => {
  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='h1PrimaryText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutUsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTechnologyTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='technologiesWeUse']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHowItWorksClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='howDevelopmentThrough']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heading3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`mr-[-1px] mb-2.5 self-stretch shadow-[0px_4px_20px_2px_rgba(0,_0,_0,_0.25)] bg-base-white flex flex-row items-start justify-between pt-6 pb-[23px] pr-16 pl-[70px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-5xl text-black font-inspiration mq750:pl-[35px] mq750:pr-8 mq750:box-border ${className}`}
    >
      <div className="h-[89px] w-[1442px] relative shadow-[0px_4px_20px_2px_rgba(0,_0,_0,_0.25)] bg-base-white hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="w-[25px] h-[25px] relative rounded-[50%] [background:linear-gradient(225deg,_#f76680,_#57007b)] z-[1]" />
          </div>
          <div className="h-[15px] relative inline-block min-w-[92.1px] whitespace-nowrap z-[1] mq450:text-lgi">
            Website Logo
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[60.1px] max-w-full text-base text-gray-gray-700 font-footer-footer-sm mq450:gap-[15px] mq1050:hidden mq1050:gap-[30px]">
        <div className="flex flex-col items-start justify-start pt-[10.8px] px-0 pb-0">
          <div
            className="relative leading-[26.1px] font-medium inline-block min-w-[46px] cursor-pointer z-[1]"
            onClick={onHomeTextClick}
          >
            Home
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
          <div
            className="relative leading-[26.8px] font-medium inline-block min-w-[69.1px] whitespace-nowrap cursor-pointer z-[1]"
            onClick={onAboutUsTextClick}
          >
            About us
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
          <div
            className="relative leading-[26.8px] font-medium inline-block min-w-[67.1px] cursor-pointer z-[1]"
            onClick={onServicesTextClick}
          >
            Services
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
          <div
            className="relative leading-[26.8px] font-medium inline-block min-w-[90.1px] cursor-pointer z-[1]"
            onClick={onTechnologyTextClick}
          >
            Technology
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[10.8px] px-0 pb-0">
          <div
            className="relative leading-[26.8px] font-medium inline-block min-w-[101.1px] whitespace-nowrap cursor-pointer z-[1]"
            onClick={onHowItWorksClick}
          >
            How it Works
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[10.8px] px-0 pb-0">
          <div className="relative leading-[26.8px] font-medium inline-block min-w-[61px] z-[1]">
            Careers
          </div>
        </div>
        <div
          className="rounded-8xs [background:linear-gradient(225deg,_#6675f7,_#57007b)] flex flex-row items-start justify-start py-3.5 px-[25px] whitespace-nowrap cursor-pointer z-[1] text-sm text-gray-gray-50"
          onClick={onNavButtonContainerClick}
        >
          <div className="relative leading-[14px] font-semibold inline-block min-w-[74px]">
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;

import GroupComponent1 from "./GroupComponent1";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 px-[68px] box-border max-w-full lg:pl-[34px] lg:pr-[34px] lg:box-border ${className}`}
    >
      <div className="w-[1069px] flex flex-col items-start justify-start gap-[64px] max-w-full lg:gap-[32px] mq750:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1050:flex-wrap">
          <GroupComponent1
            prop="#2"
            assembleTheRightTeam="Sprint planning"
            weHandleAllAspectsOfVetti="Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding."
          />
          <FrameComponent3
            prop="#4"
            techArchitecture={`Standups & weekly demos`}
            weBreakMonolithicAppsInto="Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns."
            propWidth="309px"
          />
          <GroupComponent1
            prop="#6"
            assembleTheRightTeam="Iterative delivery"
            weHandleAllAspectsOfVetti="We divide the implementation process into several checkpoints rather than a single deadline."
          />
        </div>
        <FrameComponent2
          ourDesignAnd="Featured "
          developmentApproach="Resources"
          propAlignSelf="unset"
          propWidth="1040px"
        />
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;

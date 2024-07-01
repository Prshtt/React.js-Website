import PropTypes from "prop-types";

const BlogPost = ({ className = "", rectangle10 }) => {
  return (
    <div
      className={`self-stretch w-[254px] shrink-0 flex flex-col items-end justify-start gap-[20px] text-left text-base text-gray-gray-800 font-footer-footer-sm ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[20px]">
        <img
          className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={rectangle10}
        />
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 relative leading-[25px] font-medium">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-5 gap-[15px] text-brand-primary-bg">
        <div className="relative leading-[25px] font-medium inline-block min-w-[83px]">
          Read More
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/arrowrightline.svg"
        />
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  className: PropTypes.string,
  rectangle10: PropTypes.string,
};

export default BlogPost;

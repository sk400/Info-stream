import { Avatar, Heading, Icon, IconButton } from "./chakra-ui";
import { FiMoreVertical } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";

const NewsCard = ({ imageIds, propBoxSizing }) => {
  return (
    <div
      className="flex-1 flex flex-col  items-start justify-start gap-[22px] text-left  text-black font-inter  hover:opacity-[1] lg:flex-[unset] lg:self-stretch sm:gap-[12px] mq320:cursor-pointer mq420:gap-[12px] cursor-pointer shadow-md hover:shadow-lg rounded-sm transition-shadow duration-200 p-5"
      style={{ boxSizing: propBoxSizing }}
    >
      <img
        className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[337px] shrink-0 object-cover"
        alt=""
        src={imageIds}
      />
      <div className="self-stretch flex flex-row py-0 pr-[15px] pl-0 items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <div className="flex flex-row items-center justify-start gap-[16px] sm:gap-[10px]">
            <Avatar
              size="sm"
              name="Kent Dodds"
              src="https://bit.ly/kent-c-dodds"
            />
            <p className="m-0 relative font-medium md:text-xl sm:text-base">
              BBC
            </p>
          </div>
          <Icon>
            <RxDotFilled />
          </Icon>
          <p className="m-0 relative font-medium text-dimgray md:text-xl sm:text-base">
            12 hour ago
          </p>
        </div>
        <Icon>
          <FiMoreVertical />
        </Icon>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-15xl font-noto-serif sm:gap-[26px] mq420:gap-[26px]">
        <Heading as="h2" size="xl">
          Lorem Ipsum is simply dummy text of the printing.
        </Heading>

        <p className="m-0 self-stretch relative text-base font-poppins sm:font-light sm:font-poppins sm:text-base mq420:text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum...
        </p>
      </div>
    </div>
  );
};

export default NewsCard;

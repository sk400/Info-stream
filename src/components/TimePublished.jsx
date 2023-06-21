"use client";
import ReactTimeago from "react-timeago";

const TimePublished = ({ timeInUtc }) => {
  return <ReactTimeago date={timeInUtc} />;
};

export default TimePublished;

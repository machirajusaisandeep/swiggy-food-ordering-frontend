import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {
  text: string;
};

const TextWithLineBreaks = ({ text }: Props) => {
  if (text.includes("\n")) {
    const textWithBreaks = text.split("\n").map((text, index) => (
      <React.Fragment key={index}>
        {text}
        <Separator className="my-2 max-w-xl" />
      </React.Fragment>
    ));

    return <>{textWithBreaks}</>;
  }
  return <>{text}</>;
};

export default TextWithLineBreaks;

import { Grid } from "@chakra-ui/react";
import { FlaggableElement } from "./FlaggableElement";

export interface Message {
  text: string;
  is_assistant: boolean;
}

const getColor = (isAssistant: boolean) => (isAssistant ? "bg-slate-800" : "bg-sky-900");

export const Messages = ({ messages, post_id }: { messages: Message[]; post_id: string }) => {
  const items = messages.map(({ text, is_assistant }: Message, i: number) => {
    return (
      <FlaggableElement text={text} post_id={post_id} key={i + text}>
        <div key={i + text} className={`${getColor(is_assistant)} p-4 rounded-md text-white whitespace-pre-wrap`}>
          {text}
        </div>
      </FlaggableElement>
    );
  });
  // Maybe also show a legend of the colors?
  return <Grid gap={2}>{items}</Grid>;
};

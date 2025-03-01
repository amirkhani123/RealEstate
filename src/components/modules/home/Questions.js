"use client"
import { questions } from "@/constants/variables";
import QuestionsReandered from "./QuestionsReandered";
import { Fade } from "react-awesome-reveal";

function Questions() {
  return (
    <div className="my-3 ">
      <p className="w-full text-center font-normal text-2xl  text-primary">
        سوالات متداول
      </p>
      <div className="mt-3  p-1">
        <Fade  direction="up" cascade triggerOnce>
      {questions.map((item) => (
        <QuestionsReandered key={item.id} data={item} />
      ))}
      </Fade>
      </div>
    </div>
  );
}

export default Questions;

import Image from "next/image";
import Spiritual from "../assets/spiritualHealing.png";
import { SectionWrapper } from "./seciton-wrapper";

export const SpiritualHealing = () => {
  return (
    <SectionWrapper>
      <div className="w-full h-full flex flex-col md:flex-row px-6 gap-4 mb-24">
      <div className="w-full 2xl:w-4/5 mt-10 flex flex-col  gap-4">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#d47f22] w-full text-left">
          SPIRITUAL HEALING BY THE HELP OF 12 STEPS PROGRAM
        </h1>
        <p className="md:text-xl text-lg text-gray-500 mt-5 leading-normal">
          As our clients regain physical health & mental clarity, they begin to
          wonder what next. Why do I need to continue in a treatment program.
          You have to remember that addiction is an incurable condition and
          continues to progress even in one’s recovery. The reality of living
          can be overwhelming for any recovering addict/alcoholic. The disease
          continues to rear its ugly side even in recovery, through uneasy
          feelings of resentment, anger or fear.
          <br /><br />
          The patient may be overcome by a sense of low self-esteem, self-pity,
          helplessness, loneliness and despair through acts of intolerance,
          indifference and rebelliousness. ‘Spiritual Bankruptcy’ is what we
          refer to a state of existence where lack of belief rules. Wishful
          thinking and lack of constructive planning are loud markers in a
          relapse curve. Sobriety begins to lose its appeal and a sense of
          hopelessness and worthlessness reappear.
          <br /><br />
          At this point of the recovery program our 12-Step counselors step in
          to guide the client using a proven methodology that truly works. It
          is a program of spiritual principles, acceptable to all, irrespective
          of your age, caste, creed, religion, sex, social status… . Lost and
          confused. Pain and Discomfort. Shame and guilt. Agony and
          hopelessness. Disconnected and Depressed. Loss of trust, belief and
          faith in everyone and everything. Being a multi-faceted disease is
          what makes Alcoholism / Addiction truly a one of its kind condition.
          The Physiological, Mental, Emotional, Financial, Family &
          Relationships, Social aspects of the destruction are clearly visible,
          if not obvious, in an alcoholic. But Spirituality hides the most
          jagged edge of the disease.
        </p>
      </div>
      <div className="2xl:flex xl:hidden lg:hidden md:hidden sm:hidden justify-end hidden items-center mt-14 ">
        <Image
          src={Spiritual}
          alt="Spiritual Healing"
          width={450}
          height={450}
          className="rounded-lg w-[550px] h-[550px] "
        />
      </div>
    </div>
    </SectionWrapper>
    
  );
};

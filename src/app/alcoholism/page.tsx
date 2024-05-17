import { Navbar } from "@/components/navbar";
import { title } from "process";
import { Hash } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { GoBack } from "@/components/goBack";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="h-full flex justify-center  mt-5 ">
        <div className="md:w-[80%] w-[90%] bg-gray-50 flex  flex-wrap pl-5 pr-5">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#d47f22] w-full text-left ">
            What is Alcohol Addiction?
          </h1>
          <p className="text-lg text-gray-500 mt-5">
            Alcohol addiction or alcoholism is often considered to be a ‘bad
            habit’ but it is a serious mental health condition. Psychological,
            genetic, and environmental factors play crucial roles in the
            development of the disease. Alcohol problems arise from neurological
            changes which means that many of the behavioural patterns may not be
            in the patient’s control, like any other mental health disorders.
            Alcohol addiction is said to have occurred in an individual when
            they binge drink or consume heavy quantities of alcohol and have
            trouble staying sober for a long time. If a person suffers from the
            social, relationship, or workplace problems due to alcohol
            consumption, they must seek help through a rehabilitation centre for
            alcohol to recover from the illness. Alcoholism is a combination of
            cognitive, behavioural and physiological factors that are manifested
            due to an urge to consume alcohol, the magnitude of which only
            increases steadily. An alcoholic (or someone who consumes dangerous
            levels of alcohol) usually begins as a social drinker. However, if
            the intake remains unchecked, it takes them little time to go beyond
            the threshold and enter the arena of dysfunctional drinking.
            Alcoholism is a serious concern in India. In fact, according to a
            survey approximately 7% of the surveyed men suffered from alcohol
            dependence, and about 9.1% of men suffered from alcohol-use
            disorders in India. In such a dire situation, HOPE FOUNDATION
            Retreat emerges as a ray of hope. Being one of the best Alcohol
            treatment centres in India, our mission is to provide excellent
            services and holistic support to help you and your loved ones
            achieve victory over their addiction. Symptoms of Alcoholism :
            Alcohol problems are very difficult to recognise. As opposed to
            substance abuse problems that are clearly visible among people,
            recognising alcoholism is tough. One of the primary reasons for such
            problems is the wide availability of alcohol and how it is an
            accepted social drink in many cultures. Our skilled and experienced
            team has expertise in a wide range of techniques to address your
            alcohol problems. For us, you are our top priority. We believe that
            everyone is different and faces different life challenges.
            Therefore, our experts adopt a personalised healing approach to
            tailor the alcohol treatment process to suit the needs of each
            individual. Our highly trained staff ensure that your detoxification
            complies with the latest international scientific detoxification
            protocols. We assure you the full benefit of our rehabilitation
            centre by developing a collaborative and personal healing
            atmosphere. Our non-judgmental and highly compassionate addiction
            treatment environments provide you with the ideal setting to address
            your challenges and achieve full and sustainable recovery.
          </p>
          <div>
            <p className="md:text-2xl text-xl font-semibold text-blue-500 mt-5">
              THERE ARE THREE CRUCIAL PHASES OF ALCOHOL ADDICTION{" "}
            </p>
            <p className="flex text-xl md:text-2xl mt-5 text-[#d47f22]">
              {" "}
              <Hash /> The Early Phase{" "}
            </p>
            {earlyPhase.map((phases, index) => {
              return (
                <div key={index}>
                  <p className="text-lg font-bold mt-3 ">
                    {phases.title}
                  </p>
                  <p className="text-lg mt-3 text-gray-500">{phases.point}</p>
                </div>
              );
            })}
          </div>
          <div>
          <p className="flex text-xl md:text-2xl mt-5 text-[#d47f22]">
              {" "}
              <Hash /> The Middle Phase
            </p>
            {middlePhase.map((phases, index) => {
              return (
                <div key={index}>
                  <p className="text-lg font-bold mt-3 ">
                    {" "}
                    {phases.title}
                  </p>
                  <p className="text-lg mt-3 text-gray-500">{phases.point}</p>
                </div>
              );
            })}
          </div>
          <div>
          <p className="flex text-xl md:text-2xl mt-5 text-[#d47f22]">
              {" "}
              <Hash />
              The Chronic Phase
            </p>
            {chronicPhase.map((phases, index) => {
              return (
                <div key={index}>
                  <p className="text-lg font-bold mt-3 ">
                    {phases.title}
                  </p>
                  <p className="text-lg mt-3 text-gray-500">{phases.point}</p>
                </div>
              );
            })}
            <div>
              <p className="text-lg mt-2 text-gray-500">
                i) Avoidance- “I’ll talk about anything but the problem!”.
                <br />
                <br />
                ii) Absolute Denial- “No, not me!”.
                <br />
                <br />
                iii) Minimising- “It’s Not That Bad!”.
                <br />
                <br />
                iv) Rationalising- “I Have a Good Reason!”.
                <br />
                <br />
                v) Blaming- “It’s Not My Fault!”.
              </p>

              <p className="text-lg mt-5 text-gray-500">
                If you or your loved one is showing any such signs recurringly,
                it is time to look for treatment at the earliest. Although
                Alcohol abuse treatment centres are suitably equipped to help
                you get rid of your addiction, it is best to seek help before it
                is too late. We aim to offer you the safe space to get better,
                heal, reflect and reconnect. We help you walk towards a healthy
                life in a wholesome environment.
              </p>
            </div>
          </div>
          <MythComponent />
          <div>
            <h1 className="flex text-3xl mt-5 text-blue-500">
              Risks And Complications{" "}
            </h1>
            <div>
              <p className="text-lg mt-5 mb-5 text-gray-500">
                There are several other diseases associated with severe
                alcoholism. These health complications include the following:
              </p>
              <p className="text-lg leading-normal  text-gray-500">
               i) Development of ulcers.
               <br />
            
               ii) Diabetes.
               <br />
         
               iii) Bone loss. 
               <br />
               
               iv) Birth defects in cases of drinking during pregnancy.
               <br />
                
               v) Heart and liver disease. 
               <br />
             
               vi) Sexual health problems. 
  <br />
               vii) Increased susceptibility to cancer. 
              
                <br />
               viii) Suppresses immune functions.
   
                <br />
               ix) Vision complications.
              </p>
            </div>
            <p className="text-lg mt-5 mb-5 text-gray-500">
              Alcohol addiction is a treatable disease and is also avoidable.
              With early diagnosis and proper help, patients can recover, reduce
              the risk of the aforementioned complications and go on to live a
              healthy life. <br />
              <br /> At HOPE Foundation, we believe that the addiction and its
              treatment is different from one patient to another. You will have
              a team of a devoted counsellor, physician, and support workers at
              every step of your progress. Using their knowledge and expertise,
              the team will carefully design a detailed alcohol treatment plan
              to help you flourish. Your mental and physical wellbeing will be
              our responsibility, and each knot will be untied with utmost care,
              concern and compassion. We understand that addiction does not
              arise from a vacuum. Most of the alcohol dependence starts as an
              escape from extreme stress and anxiety. As mental health plays a
              significant role in contributing to alcohol addiction, we at Safe
              House rehab centre, challenge alcohol dependency directly at its
              roots. Our counsellors and therapists work throughout the
              programme with you to provide support for any mental health issue
              such as depression, anxiety, OCD, trauma etc. Find Alcohol
              Withdrawal Treatment Today ! Your alcohol addiction, even if small
              at this point, has the potential to damage your body and your life
              in due time. Alcohol addiction not only affects you physically and
              mentally but also has a detrimental impact on your relationships
              and your performance at work. Most importantly, it often leads to
              the gateway of other drug and substance abuses. So, seeking
              alcohol withdrawal treatment from professionals is imperative to
              live a healthy and fulfilling life. Reach out to DURGAPUR HOPE
              FOUNDATION today, and let us help you overcome your addiction with
              maximum ease
            </p>
          </div>
        <GoBack/>
        </div>
      </div>
    </>
  );
};

export default Page;

const earlyPhase = [
  {
    title: "High Tolerance :",
    point: ` One of the first warning signs of addiction is
        the development of tolerance. It usually begins when you start
        consuming a drink or two routinely. Continued intake of the same
        amount pushes you to a point when you reach out for a third, and
        then for a fourth one. The effect that you desire comes only with
        an increase in the dosage`,
  },
  {
    title: "Blackout :",
    point: `Excessive drinking can cause total or partial blackouts. Blackout 
    is a phase when you have no recollection of the events that occurred 
    during a specific period due to over-drinking. The influence of alcohol
     is so strong that the brain is unable to form memories, making it a form
      of amnesia.
    Having the Drink on Your Mind: As consumption of alcohol develops
     into a habit, it starts to dominate your thoughts. The preoccupation
      with alcohol becomes so strong that when you are not drinking, all
       you can think about are your plans for your next drinking session.`,
  },
  {
    title: "Avoid the talk :",
    point: ` You feel in total control and do not feel the urge to share or
     talk about you drink cravings. In this phase, you start to avoid talking
      about your capacity or how frequently you drink.`,
  },
];
const middlePhase = [
  {
    title: "Losing Control:",
    point: ` You begin losing control over the amount of alcohol intake 
    and place of consumption. Your craving surpasses the societal norms and 
    forces you to start drinking at inappropriate places such as parties and 
    weddings and at any time of the day or night.`,
  },
  {
    title: "Justifications:",
    point: ` You begin justifying your drinking habits to others. Especially 
    when your behaviour under the influence of alcohol causes embarrassment
     to your family, you cite various reasons such as stress and unhappiness 
     for reaching for the bottle. You often feel guilty, but you still don’t stop.`,
  },
  {
    title: " Temporary Abstinence :",
    point: ` You realise that your drinking is causing a problem, and you decide 
    to quit only to be defeated by your cravings. Even though you abstain, you
     are unable to sustain.`,
  },
  {
    title: "Shift in Pattern:",
    point: ` In this phase, you might even develop an “Addictive logic”. You feel 
    convinced that your behaviour is rational and find ways to justify your self-destructive 
    behaviour. There might be sifts in your drink preferences or the place or time of drinking.
     You may also project your problems as caused due to the consumption of a particular brand of alcohol.`,
  },
];
const chronicPhase = [
  {
    title: " Binge Drinking: :",
    point: ` You begin drinking continuously for days without engaging in any 
    other activity. After a binge episode, you experience feelings of guilt and 
    often promise yourself or your family not to touch the bottle again. But you
     forget this promise as soon as you see any chance of drinking.`,
  },
  {
    title: " Paranoia and Hallucinations :",
    point: ` In the chronic stage, you may also start showing signs of paranoia. 
    You begin to doubt the people around you continually. You develop deep distrust 
    and might feel people are after your wealth or your life. You might even start 
    to hear voices or see and feel things that do not exist.`,
  },
  {
    title: " Loss of Motor Skills:",
    point: ` Your hangovers are getting worse. Your body shakes and hands trembles when you’re 
    not drinking, and the only way to stabilise yourself is to reach out to another drink. 
    Drinking is not a choice anymore; it becomes a need to avoid pain and maintain stability.`,
  },

  {
    title: "Denial:",
    point: ` Denial is when you either entirely or partially disregard the existence
     of your problem. You begin to show the following signs of Denial to avoid addressing 
     the problem:`,
  },
];

const MythComponent = () => {
  return (
    <div>
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
        Myths and facts about Alcoholism{" "}
      </h1>
      <p className="text-lg mt-5 text-gray-500">
        There are several misconceptions about alcoholism that might lead to the
        development of serious conditions later. Let us discuss some of them in
        detail.
      </p>
      <div>
        <AccordionDemo />
      </div>
    </div>
  );
};
const Myth = [
  {
    myths: "It is okay to get drunk once in a while?",
    facts: `Binge drinking is one of the most serious risk factors
 that can lead to long term complications like liver and heart 
 diseases. It also increases the risk of cancer. If individuals
  have four or more drinks (women) and five or more drinks (men) 
  then there is a high chance of this habit developing into a risk
   factor for alcohol addiction.`,
  },
  {
    myths: "Moderate drinking is safe and does not carry any risks?",
    facts: ` Moderate drinking might be considered to be safe upto certain degrees
     but it does not mean that the habit is entirely risk-free. For certain categories 
     of individuals, this habit might lead to serious issues.
      These categories include:

    i)Pregnant women or those who are trying to get pregnant
    
   ii) People who are responsible for working with heavy machinery
    
    iii)Individuals with heart failure or pancreatic diseases
    
   iv) Patients of stroke 
    
   v) People with medications that are known to interact with alcohol
    
    vi)People who have a family history of alcohol addiction`,
  },
  {
    myths: "Wine or beer cause less damage than hard liquor",
    facts: `All types of alcohol ultimately have the same ingredient
         and are as much responsible for causing alcohol dependence as others. 
         Moreover, different types of drinks have different standard measurements 
         which mean that ultimately they have the same quantities of alcohol.`,
  },
  {
    myths:
      "Drinking is not a problem as long as the person does not feel the necessity to puke",
    facts: `The more drinks a person can consume at one go means that they are developing high alcohol 
  tolerance. Developing alcohol tolerance is a bad sign and is a very serious risk factor. This means 
  that without alcohol the person might not be able to do tasks that a sober person can in the same circumstance.`,
  },
  {
    myths:
      "Drinking is not a problem as long as the person does not feel the necessity to puke",
    facts: `The more drinks a person can consume at one go means that they are developing high alcohol 
tolerance. Developing alcohol tolerance is a bad sign and is a very serious risk factor. This means 
that without alcohol the person might not be able to do tasks that a sober person can in the same circumstance.`,
  },
  {
    myths: "Coffee can help sober up quickly after alcohol consumption",
    facts: `One of the wider known myths that coffee can help people sober up 
  or that it is the answer to how to get rid of alcohol from the body is false.
   Coffee contains a stimulant called caffeine which helps the individual stay
    awake and alert. It does not help with the processing of alcohol in the body. 
    The only right way to deal with a hangover is to let the body get the time to 
    break down the alcohol components.

  `,
  },
  {
    myths: "Alcohol helps to cheer people up ",
    facts: `A lesser-known fact about alcohol addiction is that alcohol does the opposite
     of cheering people up. Although it might help people develop pleasurable feelings
      during drinking, alcohol is actually a depressant. This means, its mode of action 
      is to slow down the activities in the brain. `,
  },
];

// Accordion

const AccordionDemo = () => {
  return (
    <Accordion type="single" collapsible className="w-full p-5">
      {Myth.map((myth, index) => (
        <AccordionItem key={index} value={`myth-${index}`}>
          <AccordionTrigger className="md:text-xl text-lg font-medium   mt-3 ">
            {myth.myths}
          </AccordionTrigger>
          <AccordionContent className="text-lg  text-gray-500">
            {myth.facts}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

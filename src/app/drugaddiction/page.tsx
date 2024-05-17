import { Navbar } from "@/components/navbar";
import { Hash } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { GoBack } from "@/components/goBack";
const Page = () => {
  return (
    <>
      <Navbar />
      <div className="h-full flex justify-center  mt-5 ">
      <div className="md:w-[80%] w-[90%] bg-gray-50 flex  flex-wrap pl-5 pr-5">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#d47f22] w-full text-left ">
            What is DRUG addiction ?
          </h1>
          <p className="text-lg text-gray-500 mt-5">
            Drug addiction or substance abuse is a state when the patient or the
            user loses the ability to control the intake of a substance or
            becomes dependent on the drug for regular functioning. <br />
            <br /> ​ Alcohol, marijuana, recreational drugs, and prescription
            drugs can cause addiction. People get introduced to drugs at parties
            or through people who consume prescription medicines for specific
            conditions. ​<br />
            <br />
            When a person is addicted to a certain drug, they continue using it
            despite the adverse effects it has on their bodies. In instances
            where they have no access to those drugs, they start exhibiting
            symptoms like paranoia, headache, stomach aches, fever, and
            irrational behaviour. <br />
            <br />​ Depending on the nature of the substance in use, the
            addiction varies. What begins recreationally becomes a fundamental
            part of life. With time, the amount of substance used to get high
            also increases as the body gets used to certain quantities; this is
            called developing a tolerance. <br />
            <br />​  <span className="text-xl text-[#d47f22] underline ">Decide To Make a Change : How to improve your mindset ?</span>{" "}
      <br />
            <br />​ Studies show that 80-90% of patients who quit substance
            abuse get back to using drugs within one year of last intoxication.
            This can be beaten by a combination of seeking treatment, exercise,
            working on mindset, and a healthy diet. While just one of these will
            not do the trick, the combination is proven in doing wonders in
            terms of progress. <br />
            <br />​ Also, it has been observed that people who do not have high
            self-control and succumb to substance abuse tend to exhibit a common
            trait known as ‘delayed discounting’. In this, users are willing to
            neglect the long term effects of substance abuse for the immediate
            endorphin high they can experience on an immediate basis. <br />
            <br />​ However, there is a certain time gap between the urge and
            the action (consuming drugs), and this time can be used to beat the
            urge with cognitive thinking and mindfulness.
          </p>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Who is most at risk of drug addiction?
            </h1>
            <p className="text-lg text-gray-500 mt-5">
              Drug addiction, and its symptoms, don’t discriminate. Men, women,
              young and old across the socioeconomic spectrum can fall prey to
              this condition. However, certain risk factors can increase the
              chances of drug addiction. <br />
              <br /> If you or a loved one has any of the risk factors listed
              below then you have to contact a drug addiction treatment center,
              immediately.
            </p>
            {drug.map((drugs, index) => {
              return (
                <div key={index}>
                  <p className="text-xl font-bold mt-3 ">
                    {drugs.title}
                  </p>
                  <p className="text-lg mt-3 text-gray-500">{drugs.point}</p>
                </div>
              );
            })}
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Signs and symptoms of drug addiction
            </h1>
            <p className="text-lg text-gray-500 mt-5">
              The common symptoms of drug addiction include:
            </p>
            <p className="text-lg text-gray-500 mt-5">
              i) Feeling that you need to consume the drug every day or several
              times a day.
              <br />
              <br />
              ii) When the urge to consume comes, it blocks out all other
              thoughts that could be related to personal, professional life.
              <br />
              <br />
              iii) Having to consume increased dosages to get the same high.
              <br />
              <br />
              iv) Consuming drugs for longer periods than the original plan.
              <br />
              <br />
              iv) Alwaysensuring that you don’t run out of supply. <br />
              <br />
              v) Consorting to the Beg-Borrow-Steal triage to score drugs.
              <br />
              <br />
              vi) Avoiding your social and professional circles before the drug
              habit.
              <br />
              <br />
              vii) Postponing or delaying work duties
              <br />
              <br />
              viii) Indulging in risky acts like driving under the influence.
              <br />
              <br />
              ix) Experience agitation and anxiety when not using the drug.
              <br />
              <br />
              x) Feeling sick whenever you stop consuming the said drug.
            </p>
          </div>
          <div>
            <p className="text-2xl mt-5 text-[#d47f22]  flex">
              {" "}
              <Hash /> Few physical symptoms of drug addiction include:
            </p>
            <p className="text-lg text-gray-500 mt-5">
              i) Dryness in the mouth.
              <br />
              <br />
              ii) Red eyes.
              <br />
              <br />
              iii) Elevated blood pressure and arrhythmia.
              <br />
              <br />
              iv) Delayed response rate.
              <br />
              <br />
              v) Increased food cravings after drug consumption.
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Identifying your triggers
            </h1>
            <p className="text-lg text-gray-500 mt-5">
              Combating drug addiction is tricky as any normal scenario could
              act as a trigger and resurface the urge to consume drugs.
              Identifying the trigger and chalking a detailed plan to work
              around the urge to consume is essential. <br />
              <br /> While few triggers are very straight forward, there are a
              few triggers that can lead to a relapse. However, it is essential
              that a patient speaks to a certified counsellor at a drug
              addiction treatment centre to understand their triggers and plan a
              way around them when the situation presents itself. Most triggers
              ride on the patient’s nostalgia and are stimulated by mental,
              environmental, and emotional factors.
            </p>
            <p className="text-lg text-gray-500 mt-5 font-semibold underline    ">
              The most common triggers for drug use are:
            </p>
            {triggers.map((trig, index) => {
              return (
                <div key={index}>
                  <p className="text-lg font-bold mt-5 ">{trig.title}</p>
                  <div dangerouslySetInnerHTML={{ __html: trig.point }} className="text-lg mt-3 text-gray-500" />
                </div>
              );
            })}
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Dealing with drug cravings{" "}
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              Cravings are normal when you are trying to overcome a drug
              addiction problem. However, dealing with those cravings and not
              slipping back to substance use is of paramount importance. There
              are multiple ways of dealing with drug cravings. It is recommended
              to consult your physician and draft a plan that is tailor-made for
              you to prevent relapse.
            </p>
            <p className="text-lg mt-3 text-gray-500 font-bold underline">
              Here are a few methods one can try to beat the urge:
            </p>
            {drugCravings.map((craving, index) => {
              return (
                <div key={index}>
                  <p className="text-lg font-bold mt-5 ">{craving.title}</p>
                  <div dangerouslySetInnerHTML={{ __html: craving.point }} className="text-lg mt-3 text-gray-500" />
                  
                </div>
              );
            })}
            <div>
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
                Types of Drug addiction{" "}
              </h1>
              <p className="text-lg text-gray-500 mt-5">
                Depending on the nature of the substance used, the nature of the
                addiction is defined, and a specified drug detoxification
                process is recommended.
              </p>
               <p className="text-lg mt-3 text-gray-500 font-bold underline">The most common forms of drug addiction are:</p>
               {drugAddiction.map((addiction, index) => {
              return (
                <div key={index}>
                  <p className="text-lg font-bold mt-5 ">{addiction.title}</p>
                  <div dangerouslySetInnerHTML={{ __html: addiction.point }} className="text-lg mt-3 text-gray-500" />
                </div>
              );
            })}
            <p className="text-3xl text-blue-500 mt-5">Frequently Asked Questions</p>
           < AccordionDemo/>
            </div>
          </div>
          <GoBack/>
        </div>
      </div>
    </>
  );
};
export default Page;

const drug = [
  {
    title: "Genetics:",
    point: ` Studies have found that there is some kind of genetic component
         that leads to drug addiction. It’s found that individuals with at least one 
         close relative, with an addiction problem, are at high risk of developing an
          addiction problem themselves. A drug and alcohol addiction treatment will help
           you resolve your addiction problems in a safe and controlled manner.`,
  },
  {
    title: "Environment:",
    point: `This refers to the community that surrounds you, which can include your family 
    and loved ones. If the people who raised you or are living with you are involved with 
    substance abuse, then it’s highly likely that you may have an increased risk of falling 
    into the same pattern. Treatment and rehabilitation of drug addicts can help with rapid
     recovery and minimize the trigger patterns caused by the external environment.`,
  },
  {
    title: "Comorbidity:",
    point: `People who suffer from severe mental health disorders like bipolar disorder
         and clinical depression can succumb to substance abuse and drug addiction. Mental health
          problems can cause patients to spiral and self medicate; this may worsen their condition 
          and make them dependent on the medicine. This is where the medical professionals at drug 
          addiction and treatment centers will help patients recover from addiction.`,
  },
];

const triggers = [
  {
    title: "Being angry, hungry, lonely, or tired:",
    point: `If you are in the early stages of being clean, ensure that there are no 
        scenarios where you are extremely hungry, lonely, tired, or angry. For a patient to
         overcome this, they will have to stick to a strict sleep schedule, workout regime,
          and plan their work schedules. Being a part of a social support group can help immensely. <br/> <br/>
          Stress is also a factor that contributes in the same way. The stress that one goes through 
          after losing a job, or a loved one, or a house can be strong enough to put a patient to relapse. 
          Understanding the cause of the drug and working your way around it is the only way out. In severe 
          cases of drug and alcohol abuse, getting out of it may be impossible without 
          seeking drug addiction rehab treatment.`,
  },
  {
    title: "Emotions like anger, heartbreak, and sadness: ",
    point: `These emotions often trigger the recovering patient to relapse. Unlike the above trigger, 
     it is impossible for a patient to stop feeling these emotions. Hence, it is imperative that they
      find a way to work their way around them with alternative solutions that can help them divert the 
      brain’s focus from the urge to get high as a solution.`,
  },
  {
    title: "Social settings where the substance is freely available: ",
    point: ` Patients recovering from drug abuse are advised not to date anyone for at least a year
         as new relationships require frequent public meetings at places like Pubs and Bars where it becomes 
         difficult for the person who is recovering to control the urge. Adding to that, if a relationship breaks, 
         the emotional trauma could be powerful enough to relapse.`,
  },
  {
    title: "Overconfidence and complacency:",
    point: ` This is the most dangerous of all. Oftentimes, in the journey of being clean,
         when things start coming back to order and things look normal, patients become overconfident 
         and intentionally start putting themselves in risky situations stating that they are in control
          of themselves. However, it is imperative to understand and acknowledge the fact that you have 
          come a long way, and to keep it that way, avoiding trigger elements is of paramount importance. `,
  },
  {
    title: "Medications: ",
    point: ` Certain medications for physical pains and mental conditions can trigger relapse in recovering 
        patients. If you are recovering, it is imperative to keep your doctor informed about this, thus enabling 
        him/her to prescribe alternative medications that do not act as a trigger.`,
  },
  {
    title: "Nostalgia: ",
    point: ` Glorifying the good old days of drug abuse can be a powerful trigger. Active efforts 
        should be made to recognize the earlier phase as a deteriorating condition and not euphoria.`,
  },
];

const drugCravings = [
  {
    title: "Making a list:",
    point: ` When the urge hits, it becomes difficult for the recovering patient to see past 
        the urge and the need for an immediate high. In times like this, it is essential to remind
        yourself why you chose to quit drugs and reaffirm your mind on the negatives and positives 
        of relapsing again. <br/> <br/>
        Take the time to prepare a list of strong and honest motivating factors you could tell
         yourself when you would experience an urge. This will help you ride past the urge way 
         and avoid a relapse.`,
  },
  {
    title: "Take self-care seriously:",
    point: ` Self-care in the form of meditation, yoga, a healthy diet, and regular 
        exercise can help you in drug detoxification. These healthy routines will not only help
         you overcome an urge with relative ease but also help you make progress in the recommended 
         drug rehabilitation programs.`,
  },
  {
    title: "Join a support group: ",
    point: ` Being part of a drug and alcohol treatment support group who are all undergoing treatment 
        can be of immense support. Listening to the experiences of others and why they are struggling to 
        remain free from drug addiction can help you understand the negative effects of drug addiction and
         think past the immediate urge to get high when the urge hits.`,
  },
  {
    title: "Being self-aware:",
    point: `  As a recovering user, you are aware of your triggers, and you should ensure that 
        you protect yourself from being present in the trigger zones that could cause you to relapse.
         Avoid being alone, going to pubs, or rave parties or similar settings that could make it difficult
          for you to control your urges.`,
  },
];

const drugAddiction =[
    {
        title:"Alcohol:",
        point:`Addiction to alcohol is real. More than often, people relate their ability to consume 
        more alcohol as an ability and not a drug problem. If you are a man and are drinking more than
         four drinks a day or more than 14 drinks in a week, then, you are a heavy drinker. <br/> <br/>
         If you are a woman and you drink more than three drinks a day and more than 12 drinks a week, then,
          it could lead to severe liver failure, cholesterol, and other alcohol poisoning related problems.`,
    },
    {
        title:"OTC Drugs:",
        point:`Over the counter drugs or prescription drugs are just as harmful as illegal drugs like cocaine, meth, and acid.
         These prescription drugs give you the high but are also difficult to snap out from.
        OTC drugs addiction starts when you start consuming drugs that are originally prescribed for someone else, 
        are consuming more quantities than prescribed to get the kick, or are taking the drug for recreational purposes. <br/> <br/>
        Drug addiction to prescription drugs can cause anxiety, depression, and mental stress. The most common form of OTC drug addiction 
        is drinking large volumes of cough syrup that contains codeine (commonly known as lean) to get a feeling of a high.`,
    },
    {
        title:"Opioid drug addiction:",
        point:`Addiction to Heroin, Crystal meth, LSD, Ecstasy, and MDMA fall under the bracket of opioid drug addiction. 
        As an addict, it becomes difficult to get easy access to these drugs, and when the effect of the high wears off, 
        you feel feverish, tired, agitated, anxious, and angry till you experience the next high. Recovering from opioid 
        addictions are painful and long as they are highly physiologically addictive.`,
    },
    {
        title:"Marijuana:",
        point:`Marijuana is often called a gateway drug for most people. People get introduced to this drug in social 
        gatherings or parties. Though the use of medical marijuana is legal in a few countries, it is illegal in most places. 
        Heavy consumption can leave you burned out and cause neural effects like memory loss and loss of appetite.`,
    },
    {
        title:"Nicotine in cigarettes:",
        point:`Nicotine is one of the most addictive drugs on the planet. It gives you a temporary rush for a short duration 
        that makes you want more and continue consuming until you feel satiated. The tolerance levels in a human body for 
        nicotine is high; hence, one would end up smoking more cigarettes to attain the high. It is also the main cause of
         cancer and a host of other diseases. `,
    },
]

// Accordion

const AccordionDemo = () => {
    return (
      <Accordion type="single" collapsible className="w-full p-5">
          <AccordionItem value="item-1" >
            <AccordionTrigger className="text-xl font-semibold mt-3 ">
            How effective is drug addiction treatment?
            </AccordionTrigger>
            <AccordionContent className="text-lg  text-gray-500">
            Drug addiction treatment focuses on stopping drug abuse and helping
                 addicts recover and adopt a productive role in their family, workplace and society.
            </AccordionContent>
          </AccordionItem>
      
      </Accordion>
    );
  };
  
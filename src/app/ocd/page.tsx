import { Navbar } from "@/components/navbar";
import { title } from "process";
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
        <div className="w-[70%] bg-gray-50 flex  flex-wrap pl-5 pr-5">
          <div>
            <h1 className="text-3xl md:text-4xl text-[#d47f22] mt-3">
              What is Obsessive-Compulsive Disorder?
            </h1>
            <p className="text-lg text-gray-500 mt-5">
              Obsessive-Compulsive Disorder is a mental illness that is
              characterized by intrusive thoughts that are repetitive and can
              cause the patient to do the same actions, repeatedly. These
              actions are performed in an attempt to stop the thoughts or the
              anxiety/ discomfort generated by the thoughts.
              <br />
              <br />
              Obsessions can be powerful. Sometimes, it can be manifest as
              washing hands multiple times in short intervals or trying to power
              off electrical appliances by clicking the switch a particular
              number of times, or continually checking if the doors are locked.
              This obsessive behavior can pose a threat to the quality of life
              of the individual.
              <br />
              <br />
              People suffering from Obsessive-Compulsive Disorders feel
              compelled to do specific tasks. These are called compulsions.
              These acts of compulsions offer temporary relief to the anxiety
              that the patient is feeling, at the moment.
              <br />
              <br />
              Some of the best treatments for OCD include psychotherapy, guided
              therapy, and counseling sessions that allow patients suffering
              from OCD to learn how to manage the condition and learn to reduce
              the occurrence and severity of such compulsive episodes.
              <br />
              <br />
              There are multiple treatment options for Obsessive-Compulsive
              Disorder, and the percentage of people who have received an OCD
              cure after undergoing treatment is high.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              What are obsessions?
            </h1>
            <p className="text-lg text-gray-500 mt-5">
              Obsessions vary for every patient; for some, it could be
              disturbing thoughts about natural calamities. For others, it could
              present itself in the form of insecurities in relationships, or it
              could be counting and recounting the number of switches in the
              room, or bottles in the fridge, or the number of stairs.
              Obsessions cause anxiety in patients, thereby forcing them to
              perform certain activities as a measure of relief.
            </p>
            <p className="text-xl text-gray-500 mt-3 font-semibold underline w-full ">
              There are several kinds of obsessions, some of the common ones
              are:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>
                Being aware and trying to control the number of inhalations and
                exhalations in a minute
              </li>
              <li>
                Being aware and trying to control the number of times one blinks
                in a minute
              </li>
              <li>Doubting partners for adultery without any valid reasons</li>
              <li>
                Washing hands whenever there is contact with a doorknob, handle,
                or any other object
              </li>
              <li>
                Extreme fear that loved ones will be a victim of a natural
                calamity, virus attack, or illness
              </li>
              <li>Fear of leaving house, car, or office unprotected</li>
              <li>Intense ideas which include suicide and murder</li>
              <li>
                Imagining scenarios where the patient is a victim of genocide or
                is participating in creating one
              </li>
              <li>An obsession with perfection or symmetry</li>
              <li>
                Being extremely clean and hatred for anyone who does not meet
                the hygiene standards
              </li>
              <li>
                Obsessions can hamper a person’s ability to maintain personal or
                professional relations
              </li>
            </ul>
            <p className="text-lg text-gray-500 mt-5  ">
              Obsessions can hamper a person’s ability to maintain personal or
              professional relations. These obsessive thoughts can cause severe
              mental distress and acting on these thoughts seem to relieve them
              temporarily. However, they take up an inordinate amount of time
              and interfere with their everyday life.{" "}
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              What are compulsions?
            </h1>
            <p className="text-lg text-gray-500 mt-5">
              These are physical and mental actions that the person suffering
              from OCD feels inclined to do in a certain way to justify the
              obsession.
            </p>
            <p className="text-xl text-gray-500 mt-3 font-semibold underline w-full ">
              The most common forms of compulsive actions are:
            </p>
            {compulsions.map((compulsion, index) => {
              return (
                <div key={index}>
                  <p className="text-xl font-bold mt-3  text-gray-500">
                    {compulsion.title}
                  </p>
                  <p className="text-lg mt-2 text-gray-500">
                    {compulsion.point}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">Types of OCD</h1>
            <p className="text-lg text-gray-500 mt-5">
              The two major types of OCD are covert and overt kind.{" "}
            </p>
            <p className="text-xl font-bold mt-3  text-gray-500">Overt OCD: </p>
            <p className="text-lg  mt-3  text-gray-500">
              People suffering from overt OCD often act on their obsessive
              thoughts in forms that are physical and visible to others. Overt
              actions include excessively washing hands, trying to attain
              perfect symmetry, being spotlessly clean, arranging things in a
              certain way.
              <br />
              This type is straightforward and can prompt others to seek help
              for them..
            </p>

            <p className="text-xl font-bold mt-3  text-gray-500">Covert OCD:</p>
            <p className="text-lg  text-gray-500">
              Covert compulsions also termed as cognitive compulsions are those
              that compel the patient to perform certain mental actions to
              relieve the anxiety caused by the obsessions. Covert OCD does not
              present any physical symptoms and thus could lead the patient to
              believe that the occurrences of these instances are only
              stimulated due to the surroundings and situation and not due to an
              underlying condition.
              <br />
              Covert compulsions sometimes mask a condition called Pure O
              compulsive disorder. In this, the patients believe that these
              obsessions and compulsions only manifest in their minds and that
              their impact does not reflect in the real world or affect their
              personal lives in any way.
              <br />
              On the contrary, studies on Pure O OCD show that patients
              suffering from this condition present both mental and physical
              symptoms. This condition can be very dangerous if left untreated.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              OCD signs and symptoms
            </h1>
            <p className="text-lg mt-3  text-gray-500">
              The commonly Observed Obsessive-Compulsive disorder symptoms are:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>The urge to get everything done right or perfectionism</li>
              <li>
                Keeping the house clean and spending an inordinate amount of
                time repeating the process
              </li>
              <li>Constantly washing hands with soap to remain germ-free</li>
              <li>
                Trying to achieve perfect symmetry when arranging things around
                you in daily life and getting flustered when that said symmetry
                becomes difficult to achieve/maintain
              </li>
              <li>
                Counting: In this, patients generally find themselves counting
                the number of tiles in the house or the number of stairs in the
                fleet or the number of bulbs in the house. In cases, when they
                lose count, they tend to start over again.
              </li>
              <li>
                Hoarding: Hoarding is a symptom of OCD. In this, the patient is
                driven by the urge to stock up essential and non-essential items
                for future use. This is driven by a thought that everything
                would get exhausted and he/she would not be left with any.
              </li>
              <li>
                Being over-protective: Patients tend to exhibit protective
                behavior with themselves and with their close ones. They tend to
                keep any household item that could become a potential threat
                locked in a drawer.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              How can OCD affect my life?
            </h1>
            <p className="text-lg mt-3  text-gray-500">
              OCD is treatable, and when left untreated can cause devastating
              damage to the person suffering from the condition. Studies show
              that in all of the affected cases, more than 50% are severe, and
              the percentage of mild cases is as low as 25%.
              <br />
              <br />
              The effects of OCD can be traumatic from a physical and
              psychological standpoint. Obsessive-Compulsive Disorder can hamper
              a person’s ability to maintain a personal relationship, a steady
              career, education, ability to start a family, access to one’s own
              children, interpersonal relationships, mental stress, and fear of
              intimacy, and more.
              <br />
              <br />
              The obsessive-compulsive disorder causes excessive strain on the
              eyes, blood, brain, and skin. In a few cases, when the patients
              are able to hide their condition with their loved ones, the
              suppression often exhibits in the form of marital disputes,
              divorce, and irrational thoughts that the partner is not loyal.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">What causes OCD?</h1>
            <p className="text-lg mt-3 text-gray-500">
              Researchers around the world have spent countless hours trying to
              understand the root cause of this situation and are yet to
              ascertain the cause. However, medical doctors and researchers have
              narrowed down a list of possible factors that could cause this.
              These include neurobiological factors, pregnancy, stress, genetic
              factors or environmental catalysts that can occur at any point of
              time in a person’s life as an effect of certain events.
              <br />
              <br />
              Certain auto-immune conditions are also linked to OCD among
              infants. OCD can be the body’s response to a PANDAS (Paediatric
              Autoimmune Neuropsychiatric Disorders Associated with
              Streptococcal) Infection.
              <br />
              <br />
              Chemical imbalance is also a possible cause of OCD. The brain
              produces a neurochemical called Serotonin that helps in sending
              electrical impulses from the brain to other parts of the body,
              stimulate anxiety, and help sleep. Most medications recommended
              for OCD have heightened levels of serotonin present in them. Thus,
              a possible chemical imbalance in the patient may increase risk of
              OCD.
              <br />
              <br />
              Genetic factors also play a major role. Studies in a few cases
              show that it is four times likely that a person suffering from
              this condition has a family member with the same condition.
              <br />
              <br />
              Stress at work or stress from strict parenting can contribute to
              this condition. There are no conclusive studies that show that
              stress causes OCD; however, it can trigger the onset of an
              existing dormant condition.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">OCD Diagnosis:</h1>
            <p className="text-lg mt-3 text-gray-500">
              An OCD diagnosis should only be made by a trained medical
              professional who is an OCD psychiatrist or therapist. This
              condition is sensitive, and self-diagnosing the condition can be
              dangerous.
              <br />
              There is great research available on the internet that one could
              use to understand the condition and learn more, but
              self-diagnosing can do a lot more harm than good.
            </p>
            <p className="text-xl text-gray-500 mt-5 font-semibold underline w-full ">
              Pointers that help medical practitioners diagnose OCD are:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>
                The patient is aware of certain mental/physical activities they
                feel compelled to do
              </li>
              <li>
                If said activities are time-consuming and hinder in the person’s
                daily productivity
              </li>
              <li>If a person is washing their hands too much</li>
              <li>
                If a person is always keeping their things clean and in a
                systematic order
              </li>
              <li>
                If a person consciously counts the number of lights in a room or
                the number of books on a shelf, etc.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              {" "}
              Living with OCD: How to help yourself
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              The first step to living with OCD is acknowledging the condition
              and working towards it.{" "}
            </p>
            {livingWithOCD.map((ocd, index) => {
              return (
                <div key={index}>
                  <p className="text-xl font-bold mt-3  text-gray-500">
                    {ocd.title}
                  </p>
                  <p className="text-lg mt-2 text-gray-500">{ocd.point}</p>
                </div>
              );
            })}
            <p className="text-xl font-bold mt-3  text-gray-500">
              How can family help?
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Family support can go a long way in helping the patient manage the
              symptoms of OCD. Family members can normalize certain compulsive
              actions, and this helps in curbing avoidance behaviour. For
              example, if a patient is washing hands, wash hands along with
              them. If they are counting the number of stairs, count along with
              them and if they are cleaning the house, give them a hand.
              <br /> <br />
              This reassurance helps them stay connected with the family and
              seek guidance and advice if they experience something grave or
              unusual to their normal compulsions. It also helps family members
              have more empathy for the compulsive behaviors and understand that
              their loved one is not doing these actions out of spite or malice.
              <br /> <br />
              The most important thing that family members can do is convince
              their loved one to seek treatment. OCD is very much manageable and
              through a combination of therapy, medication, and support, the
              patient can live a very normal and functional life.{" "}
            </p>
          </div>
          <div>
            <p className="font-semibold text-xl text-[#d47f22] mt-5 ">
              If you’re looking out for treatment for OCD visit our HOPE
              FOUNDATION. Reach out to us on our 24/7 helpline at +91 9064287773
              or mail us on durgapurhopefoundation@gmail.com for any queries or
              support.
            </p>
           <GoBack/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;

const compulsions = [
  {
    title: "Hoarding:",
    point:
      "Patients suffering from OCD may often feel that a threat to their way of life is imminent and that they should be prepared to survive for prolonged durations without access to essentials. With this obsessive thought, they tend to hoard things to prepare for such doomsday scenarios.",
  },
  {
    title: "Excessive washing:",
    point:
      "The example of excessively washing hands to remain ‘germ-free’ is an act of compulsion. This action, however, is driven by the anxiety of catching any bacterial or viral infection.",
  },
  {
    title: "Excessive fear of sharp objects:",
    point:
      "Keeping sharp objects like knives and forks locked in a drawer as it might hurt the patient or their loved ones in any way. This act is to relieve an underlying thought and a heightened sense of responsibility that makes them obsessed about protecting their loved ones.",
  },
  {
    title: "Prayer:",
    point:
      "In a few cases, patients suffering from this condition believe that specific thoughts or feelings in their head are neutralized by performing a series of mental rituals. The rituals often include attempts such as offerings to the god, reciting a certain set of words, and similar superstitious activities.",
  },
];
const livingWithOCD = [
  {
    title: "Identify your triggers:",
    point: `Certain stimulants or situations trigger obsessive thoughts in patients and identifying these stimulants and controlling these obsessive thoughts is necessary to progress. `,
  },
  {
    title: "Challenge your obsessions:",
    point: `Obsessive thoughts are intrusive, and they can spark fear in the patient’s mind. The next time you feel these thoughts, accept that the fear is present but do not give in to these impulses. Try to challenge them with rational thoughts and positive self-talk.  `,
  },
  {
    title: "Learn coping strategies:",
    point: `Stress and OCD go hand in hand. There are a variety of coping mechanisms one can try to manage the condition. They include aerobic exercises, travel, meditation, yoga, deep breathing exercises, indulging in physical activities, and seeking medical treatments. `,
  },
  {
    title: "Make lifestyle changes:",
    point: `Making minor lifestyle changes can help manage the condition to a great extent. The inclusion of healthy fruits and vegetables, along with a weekly regime of exercise goes a long way. Taking comfort in discussing the problem with a friend or a family member helps relieve the stress and can help in a speedy recovery. `,
  },
];
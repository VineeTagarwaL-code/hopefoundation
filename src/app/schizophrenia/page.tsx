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
              What is Schizophrenia?
            </h1>
            <p className="text-lg text-gray-500 mt-5">
              Schizophrenia is a very serious and chronic mental illness that
              affects close to 1% of the world population. Patients with
              schizophrenia often experience episodes leading to distortions of
              reality which ultimately leads to delusions and hallucinations. In
              this guide, we will learn about the common misconceptions,
              diagnosis, and treatment procedures for Schizophrenia.
              Schizophrenia can be seen in men and women of any age group and
              usually requires lifelong care and treatment.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Symptoms of Schizophrenia
            </h1>
            <p className="text-lg text-gray-500 mt-5">
              In most cases, schizophrenia mental disorder starts during the
              early 20s and late teenage years in both men and women. The early
              symptoms of schizophrenia are often hard to diagnose or may get
              overlooked because of the common adolescent behaviours
            </p>
            <p className="text-xl text-gray-500 mt-5 font-semibold underline w-full ">
              The most common symptoms of schizophrenia that can be seen early
              in life include:
            </p>
            <p className="text-xl  text-gray-500 mt-3 ">
              i. Isolating oneself from friends and family
              <br />
              <br />
              ii. Having trouble focusing or concentrating and getting easily
              distracted
              <br />
              <br />
              iii. Developing the habit of changing friends or social groups
              frequently
              <br />
              <br />
              iv. Change in sleep pattern or difficulty sleeping
              <br />
              <br />
              v. Being easily agitated or irritated
              <br />
              <br />
              vi. Poor academic performance and having trouble with school work
              <br />
              <br />
              vii. Facing difficulty with personal relationships
            </p>
            <p className="text-lg text-gray-500 mt-5">
              The issues mentioned above can be confused with common adolescent
              problems which makes it difficult for the patient or their
              caregivers to identify the symptoms of schizophrenia mental
              disorder. There are various types of symptoms of schizophrenia.
              Let us look into them one by one:
            </p>
          </div>
          <div>
            <p className="text-3xl text-blue-500 mt-5">Positive Symptoms</p>
            <p className="text-lg text-gray-500 mt-5">
              There are certain symptoms of schizophrenia disease that can
              pinpoint to the primary healthcare provider the actual presence of
              the disorder. These symptoms are called ‘positive’ symptoms of
              schizophrenia as they are strikingly different from common teenage
              behaviours.{" "}
            </p>
            <p className="text-xl text-gray-500 mt-5 font-semibold underline w-full ">
              The positive symptoms of schizophrenia include:
            </p>
            {positiveSymptoms.map((symptom, index) => {
              return (
                <div key={index}>
                  <p className="text-lg text-gray-500 font-semibold mt-5 ">
                    {symptom.title}
                  </p>
                  <div className="text-lg mt-3 text-gray-500" />
                  <p>{symptom.point}</p>
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">Negative Symptoms</h1>
            <p className="text-lg text-gray-500 mt-5">
              These symptoms are the ones that can be seen to interrupt the
              patient’s typical emotional behaviour and abilities.
            </p>
            <p className="text-xl text-gray-500 mt-5 font-semibold underline w-full ">
              These consist of:
            </p>
            {negativeSymptoms.map((symptom, index) => {
              return (
                <div key={index}>
                  <p className="text-lg text-gray-500 font-semibold mt-5 ">
                    {symptom.title}
                  </p>
                  <div className="text-lg mt-3 text-gray-500" />
                  <p>{symptom.point}</p>
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Cognitive Symptoms of Schizophrenia
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              Among the most widely known schizophrenia facts, there has been
              evidence that the disorder affects thinking and cognitive
              abilities.
            </p>
            <p className="text-xl text-gray-500 mt-5 font-semibold underline w-full ">
              These symptoms are often very hard to detect:
            </p>
            {cognitiveSymptoms.map((symptom, index) => {
              return (
                <div key={index}>
                  <p className="text-lg text-gray-500 font-semibold mt-5 ">
                    {symptom.title}
                  </p>
                  <div className="text-lg mt-3 text-gray-500" />
                  <p>{symptom.point}</p>
                </div>
              );
            })}
            <p className="text-lg mt-3 text-gray-500">
              The possible signs of schizophrenia are quite difficult to detect
              which leads to late diagnosis and possible complications later in
              life.
            </p>
          </div>
          <div>
            <p className="text-3xl text-blue-500 mt-5">
              Causes of Schizophrenia
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Before we talk about the possible schizophrenia treatments, let us
              learn in detail what causes schizophrenia. The exact cause of
              schizophrenia is still unknown but experts believe that
              schizophrenia causes might emerge because of the following
              factors:
            </p>
            <p className="text-lg font-semibold mt-5 text-[#d47f22]  pr-3 ">
              Biological factors:{" "}
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Recent studies have proven that one of the schizophrenia causes
              might be abnormal brain formations and structures. Chemical
              deformities in the brain might be one of the main schizophrenia
              causes. Research is still ongoing about what causes schizophrenia
              biologically but up until now, scientists assume that the
              following areas of the brain might be affected for the disorder to
              develop in an individual:
            </p>
            {biologicalfactors.map((factors, index) => {
              return (
                <div key={index}>
                  <p className="text-lg  text-gray-500 font-semibold mt-5 ">
                    {factors.title}
                  </p>
                  <div className="text-lg mt-3 text-gray-500" />
                  <p>{factors.point}</p>
                </div>
              );
            })}
            <p className="text-lg font-semibold mt-5  text-[#d47f22]   pr-3 ">
              Genetic factors: Is schizophrenia hereditary?{" "}
            </p>
            <p className="text-lg mt-3 text-gray-500">
              People with a family history of schizophrenia mental disorder are
              at a higher risk of developing the disease. It has also been seen
              that identical twins have higher chances of developing the disease
              than fraternal twins.{" "}
            </p>
            <p className="text-lg font-semibold mt-5  text-[#d47f22]   pr-3 ">
              Environmental factors:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>
                Exposure to toxins or harmful chemicals during infancy or in the
                fetal stage
              </li>
              <li>Having inflammatory disorders or autoimmune diseases</li>
              <li>Being exposed to mind-altering drugs</li>
              <li>
                Having to work under high-stress levels for a long period of
                time
              </li>
            </ul>
            <p className="text-lg mt-3 text-gray-500">
              Scientists believe that the main causes of paranoid schizophrenia
              can be related to the chemicals that influence emotion and
              behaviour in the brain.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Types of Schizophrenia
            </h1>
            {schizophreniaTypes.map((types, index) => {
              return (
                <div key={index}>
                  <p className="text-lg  text-gray-500 font-semibold mt-5 ">
                    {types.title}
                  </p>
                  <div
                    dangerouslySetInnerHTML={{ __html: types.point }}
                    className="text-lg mt-3 text-gray-500"
                  />
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Schizophrenia Diagnosis and Treatment{" "}
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              There is no single health exam or a brain scan that can suffice
              for the diagnosis of schizophrenia. Since the doctors are still
              unaware of the exact cause of schizophrenia, to determine how to
              treat schizophrenia, multiple psychometric tests and exams need to
              be done before confirming the diagnosis.
            </p>
            <p className="text-xl text-gray-500 mt-5 font-semibold underline w-full ">
              These health exams comprise of the following:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>
                During the initial appointment checkup, the doctor needs to know
                the entire medical history of the patient and their family,
                followed by their normal mental health, mood patterns, and
                substance abuse problems.
              </li>
              <li>
                For the next step, the doctor may prescribe several blood tests,
                physical exam and imaging tests like Computed Tomography (CT)
                scan and Magnetic Resonance Imaging (MRI).
              </li>
              <li>
                Even psychometric assessments are essential to establish the
                diagnosis.
              </li>
              <li>
                For the final step and confirmed diagnosis, the patient should
                have experienced symptoms of ‘positive’ schizophrenia in a
                one-month period. These symptoms are hallucinations, delusions,
                and disorganized speech.
              </li>
            </ul>
            <p className="text-lg mt-3 text-gray-500">
              The symptoms of schizophrenia often overlap with other mental
              health conditions like bipolar disorder or schizoaffective
              disorder. Again, other medical conditions that can also show the
              same type of symptoms. This is why doctors need to perform an
              exhaustive number of tests to rule out other issues.{" "}
            </p>
            <p className="text-xl text-gray-500 mt-5 font-semibold underline w-full ">
              {" "}
              Some of the health disorders that have similar symptoms to
              schizophrenia are:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>Delirium</li>
              <li>Brain tumour</li>
              <li>Endocrine and inflammatory diseases</li>
              <li>Dementia</li>
              <li>Substance and alcohol abuse-related disorders</li>
            </ul>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">How is it Treated?</h1>
            <p className="text-lg mt-3 text-gray-500">
              There is no standard way to treat Schizophrenia, but early
              diagnosis and schizophrenia treatment can help get the symptoms
              under control, before it escalates and develops into serious
              complications. <br />
              <br />
              When you receive proper treatment from the best hospital for
              schizophrenia treatment, you have high chances of leading a
              productive life The treatments can relieve many symptoms. The most
              effective treatments provided by the best schizophrenia treatment
              centers in India include the following:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>Medicines like antipsychotic drugs.</li>
              <li>
                Therapy like group therapy or cognitive behavioural therapy.
              </li>
              <li>Self-help resources.</li>
              <li>Dementia</li>
              <li>Psychological counseling methods.</li>
            </ul>
            <p className="text-lg mt-3 text-gray-500">
              Following an effective treatment plan that is set by the best
              schizophrenia doctors in India will help reduce your episodes and
              prevent your symptoms from getting worse. The treatments will
              ensure long term results and prevent any relapses. <br />
              <br />
              Let us now talk about how to treat schizophrenia after a confirmed
              diagnosis of the schizophrenia mental disorder. There is no cure
              for schizophrenia but the symptoms can be managed using treatment
              modalities perfected by years of research. When it comes to
              schizophrenia treatment in India, Cadabam’s offers the most
              advanced care that can help patients ease the symptoms to a great
              extent and improve their quality of life. Here are the various
              kinds of treatment options for those suffering from Schizophrenia:
            </p>
            {treatment.map((treat, index) => {
              return (
                <div key={index}>
                  <p className="text-lg  text-gray-500 font-semibold mt-5 ">
                    {treat.title}
                  </p>
                  <div
                    dangerouslySetInnerHTML={{ __html: treat.point }}
                    className="text-lg mt-3 text-gray-500"
                  />
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Myths and Facts About Schizophrenia
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              There are many misconceptions about schizophrenia leading to
              questions like are schizophrenics dangerous? and can schizophrenia
              cause violence? Several myths about schizophrenia give rise to
              schizophrenia stereotypes that make it tough for the patients to
              cope with the already difficult disease.
              <br />
              Busting such myths, here are some interesting facts about
              schizophrenia.
            </p>
            <AccordionDemo />
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Risks and Complications of Schizophrenia
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              Though the cause of schizophrenia is still unknown, researchers
              have found certain factors that have proven to increase the risk
              of schizophrenia in patients. These risk factors include the
              following conditions:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>Birth complications at the fetal stage or during delivery</li>
              <li>
                Infection of the central nervous system during infancy or early
                childhood
              </li>
              <li>
                Childhood trauma like having to witness the death of a family
                member
              </li>
              <li>
                Social stresses like economic troubles or family separations
              </li>
            </ul>
            <p className="text-lg mt-3 text-gray-500">
              Even though these risk factors can increase the chances of an
              individual being diagnosed with schizophrenia, many patients are
              often seen who have not been exposed to these aspects of their
              life. Schizophrenic disorders are a severe mental illness that can
              lead to several complications throughout life. The mental disorder
              needs lifelong treatment and should not be left untreated. The
              most common complications that might arise are:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>Attempts of self-injury and suicide</li>
              <li>Development of phobias</li>
              <li>Social anxiety in day-to-day tasks</li>
              <li>Depression and feelings of hopelessness</li>
              <li>Troubles with personal relationships and family</li>
            </ul>
            <p className="text-lg mt-3 text-gray-500">
              Schizophrenia makes it difficult for people to attend school or
              work, giving rise to financial problems too.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Living With Schizophrenia
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              Schizophrenic patients need to develop emotional and social coping
              mechanisms over time to deal with the symptoms. As discussed
              below, schizophrenic patients suffer from delusions which makes it
              tough for the doctors and the caregivers to convince them that
              they have a mental health disorder. <br />
              Initially, patients need to be monitored by family and close
              friends until they develop coping mechanisms to learn how to
              effectively control and regulate their emotions. Through regular
              psychotherapeutic interventions, counselling and peer support, the
              patients with schizophrenia can live a normal life devoid of
              frequent episodes or symptoms.
            </p>
            <p className="text-xl text-gray-500 mt-5 font-semibold underline w-full ">
              Steps patients can take to lead a better life with schizophrenia:
            </p>
            {livingWithSchizophrenia.map((schizophrenia, index) => {
              return (
                <div key={index}>
                  <p className="text-lg  text-gray-500 font-semibold mt-5 ">
                    {schizophrenia.title}
                  </p>
                  <p className="text-lg mt-3 text-gray-500">
                    {" "}
                    {schizophrenia.point}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">Prognosis</h1>
            <p className="text-lg mt-3 text-gray-500">
              There is no surefire way to prevent schizophrenia as the
              researchers have still not been able to figure out the actual
              causes that lead to the development of this disease. This means
              that the patients can only find out about their chronic disease
              after a confirmed diagnosis by a trained psychiatric health
              professional. <br />
              <br />
              By following the doctor’s recommendations and attending regular
              psychotherapy sessions and support groups, you can be relatively
              symptom-free and lead a functional and meaningful life. Patients
              need to constantly educate themselves about the disease and
              cultivate ways to cope with the condition in consultation with
              their psychiatrist, family, and support groups.{" "}
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Getting Help For Schizophrenia
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              It can be really stressful to deal with Schizophrenia or have a
              loved one dealing with the illness. Seeking help and support is
              essential to help patients lead functional lives. If you are
              staging an intervention for a loved one with Schizophrenia, ensure
              you follow these guidelines.{" "}
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>
                Make sure the person is comfortable and does not feel
                threatened.
              </li>
              <li>
                Close family members or a partner should lead the conversation.
              </li>
              <li>
                Do not include anyone who may be mistrusted by the individual.
              </li>
              <li>
                Calmly take them through the options available such as a
                residential treatment facility or schizophrenia treatment
                centre.
              </li>
              <li>
                Reassure them that seeking help will help them lead a fuller and
                happier life.
              </li>
              <li>Make sure they feel supported and not isolated.</li>
              <li>
                Use positive language and ensure that they feel loved and
                appreciated.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Rehab For Schizophrenia: What happens at Rehab?
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              Rehab For Schizophrenia: What happens at Rehab? Schizophrenia
              recovery is possible with treatment that can help manage symptoms,
              live and work independently, and build satisfying relationships.
              Apart from medication, psychosocial treatment is also very
              important. For such treatment to work well, the trust factor
              between a patient and the mental health care profession is crucial
              as the patient needs to be hopeful about the recovery. Inpatient
              rehab facilities are apt for such treatments, as it is a stable
              and relaxing environment where all the medication and possible
              therapies are provided under one roof. It helps the mental health
              professional or the doctor to constantly monitor the patient’s
              condition. <br />
              <br />
              At
              <span className="font-semibold text-[#d47f22] ">
                {" "}
                HOPE FOUNDATION{" "}
              </span>{" "}
              professionals curate a comprehensive and innovative residential
              treatment program designed to address Schizophrenia. Each
              treatment program is personalized as per the individual needs and
              expectations. This encourages the patients to have a contributing
              engagement in their recovery process.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Schizophrenia FAQ: All you need to know
            </h1>
            <AccordionFaq />
            </div>
          <p className="font-semibold text-xl text-[#d47f22] mt-5 ">Reach out to us on our 24/7 helpline at +91 9064287773 or mail us on durgapurhopefoundation@gmail.com for any queries or support for schizophrenia and its treatment plans.</p>
        <GoBack/>
        </div>
      </div>
    </>
  );
};
export default Page;

const positiveSymptoms = [
  {
    title: "Hallucinations",
    point: `Experiences of hallucinations refer to a lapse of reality. 
    Schizophrenic patients often seem to have experiences that appear
     real but are actually figments of their imagination. They mostly tend to see, 
     hear, and smell things that people around them do not experience. To the patients, 
     these experiences are very real which makes it difficult for the doctor to convince them that they are not.`,
  },

  {
    title: "Delusions",
    point: `A delusion is said to have occurred when the patients seem 
    to believe in something despite the presence of facts and evidence to the contrary.`,
  },
  {
    title: "Thought disorders",
    point: `One of the ‘positive’ symptoms of schizophrenia mental disorder 
    is when the patient experiences thought disorders – they process information and thoughts in an abnormal pattern.`,
  },
  {
    title: "Movement disorders",
    point: `These symptoms include agitated body movement, constant twitching, and unstable body postures.`,
  },
];

const negativeSymptoms = [
  {
    title: "Disorganized thinking or speech",
    point: `The main symptom that is seen in this case is disorganized speech. The patients suffering from this tend to speak gibberish with disconnected sentences or switching topics frequently. They tend to use made-up words or phrases.`,
  },
  {
    title: "Impulse control issues",
    point: `The person suffering might also have trouble controlling their impulses leading to rash decisions.`,
  },
  {
    title: "Negative symptoms",
    point: `Negative symptoms are also characterized by odd emotional responses to situations. Patients often seem to suffer from a lack of emotion or expressions even in stimulating conditions. The affected individuals often seem to have lost interest or excitement for life.`,
  },
  {
    title: "Social withdrawal",
    point: `People with schizophrenia tend to go into social isolation.`,
  },
  {
    title: "Difficulty in completing tasks",
    point: `The patients seem to have difficulty in following through with plans and completing normal everyday activities.`,
  },
];
const cognitiveSymptoms = [
  {
    title:
      "Poor decision-making skills and the lack of ability to understand and process information",
    point: `Poor decision-making skills and the lack of ability to understand and process information.`,
  },
  {
    title:
      "Lack of insights or the patient being unaware of their health situation",
    point: `Lack of insights or the patient being unaware of their health situation.`,
  },
  {
    title: "Disorganized thinking and the loss of focus or concentration",
    point: `Disorganized thinking and the loss of focus or concentration.`,
  },
];

const biologicalfactors = [
  {
    title: "Medial temporal lobe",
    point: `This portion of the brain is responsible to help in memory functions. Damages or changes in this area might mean difficulties in the working memory of the patient.`,
  },
  {
    title: "Superior temporal lobe",
    point: `This is the area of the brain to which if alterations are caused, the individual may have trouble with processing auditory information.`,
  },
  {
    title: "Pre-frontal lobe",
    point: `This part of the brain is very critical for the normal functioning of the human nervous system. Any chemical changes to this part of the brain might cause difficulties in the individual’s decision-making skills and inhibition control.`,
  },
];

const schizophreniaTypes = [
  {
    title: "Paranoid schizophrenia",
    point: `Since 2013, this subtype of schizophrenia has been labelled under one of the ‘positive’ symptoms and not a separate type.`,
  },
  {
    title: "Hebephrenic schizophrenia or Disorganised schizophrenia",
    point: `These schizophrenic disorders do not show symptoms of hallucinations or delusions but often exhibit disorganized speech patterns or behaviour.`,
  },
  {
    title: "Residual schizophrenia",
    point: `These schizophrenic disorders referred to patients who were diagnosed with schizophrenia early in life but did not show any symptoms later.`,
  },
  {
    title: "Undifferentiated schizophrenia",
    point: `The type of schizophrenia disease in which the patient shows more than one type of predominant symptom.`,
  },
  {
    title: "Catatonic schizophrenia",
    point: `This schizophrenia subtype was diagnosed in people who showed signs of autism or those who developed a stupor-like effect.`,
  },
  {
    title: "Childhood Schizophrenia",
    point: `Schizophrenia diagnosis is common in children and is mostly seen during their teens or early 20s. Most of the important recognizable symptoms occur before the person reaches 13 years of age. This condition of the early onset of the disease is known as childhood schizophrenia. The symptoms that can be seen in the cases of childhood schizophrenia include the following:`,
  },
  {
    title: "Symptoms of Childhood Schizophrenia",
    point: `1. The child is unusually fearful or anxious and can be considered to be paranoid <br/> <br/>
    2. When the child claims to hear voices or see things that are unnatural, hence pointing as early signs of hallucinations <br/> <br/>
    3. They face the loss of interest in self-care and do not pay attention to themselves <br/> <br/>
    4. Sudden deterioration in academic performance <br/> <br/>
    5. Abrupt mood swings  <br/> <br/>
    6. Changes in sleep patterns or being unable to sleep at all <br/> <br/>
    7. Unwarranted changes in behaviour patterns`,
  },
];

const treatment = [
  {
    title: "Medications:",
    point: `There is no cure for schizophrenia but with the help of antipsychotic medications, the patients can deal with the symptoms better. These medications help stop hallucinations, delusions and ward off the symptoms of psychosis. If and when psychosis occurs, the doctors might prescribe immediate hospitalization. The common medications prescribed by doctors are described below.
<br/> <br/>
  The first generation of antipsychotic medications is essentially a class of drugs that were launched in the 1950s. These are also called typical antipsychotics as they are prescribed for a lot of other mental health problems similar to schizophrenia. 
  <br/> <br/>
  This group of antipsychotics tends to have similar side effects like problems with movement, also known as extrapyramidal symptoms, issues of drowsiness or change in sleep patterns, and dry mouth due to dehydration. 
  <br/> <br/>
  Group of researchers developed a newer group of antipsychotics in recent times that are often called as the second generation of antipsychotics or atypical antipsychotics. 
  <br/> <br/>
  The side effects of these drugs do not cause the movement problems of the first generation medicines or typical antipsychotic drugs. However, they have their own set of side effects too. They are more likely to cause weight gain and other problems with metabolism, among other side effects.`,
  },
  {
    title: "Schizophrenia Rehabilitation:",
    point: `Schizophrenia treatments often include certain social measures that can help the patient improve their social and communication skills. Along with social training, Schizophrenia rehabilitation centres include individual counselling, group counselling to help the patient cope with the symptoms of schizophrenia.`,
  },
  {
    title: "Vocational rehabilitation:",
    point: `Often conducted with the help of social workers or NGOs, vocational rehabilitation aims to help patients develop skills that can help them maintain a regular job easily.`,
  },
  {
    title: "Alternative treatments for schizophrenia:",
    point: `In the path towards discovering a cure for schizophrenia, there are certain treatments that doctors are prescribing recently. These include food supplements besides the usual medicines. Such supplements consist of vitamin treatment, fish oil supplements, glycine-enriched foods, and diet management. Cadabam’s is one of the best schizophrenia treatment centres in India where the expert medical team believes in using holistic approaches to treat a patient and help them deal with their daily life smoothly. By addressing all aspects of an individual’s health, physical and mental, it becomes much easier to manage and regulate mood. <br/> <br/>
    Family therapy and education: <br/> 
    This schizophrenia treatment plays an important role in helping a schizophrenic patient. Since, they suffer from a condition where they are unable to be independent and take care of themselves, having a supportive network of friends and family is crucial. Hence, family members should learn and understand schizophrenia, its causes, effects, and symptoms, so that they can help their loved one. <br/> <br/>
    Social skill training: <br/> 
    Is provided by schizophrenia treatment centers in India, and it benefits the patient because it teaches them the value of interpersonal relationships. The treatment teaches the patient to recognize and identify social cues, and how they should respond to them, appropriately. `,
  },
];

const Myth = [
  {
    myths: "Schizophrenia patients seem to have multiple personalities",
    facts: `One of the most common myths about schizophrenia is about schizophrenia causing multiple personalities. Most people believe that patients suffering from schizophrenia might have split personalities, meaning they act as two separate people. Schizophrenia multiple personalities is a myth as the patient does not have two personalities but they have lost touch with reality or have false ideas about the same. There is a condition known as Multiple Personality Disorder but it is totally unrelated to schizophrenia.`,
  },
  {
    myths: "Schizophrenics are dangerous",
    facts: `One of the most important schizophrenia facts is that people suffering from this mental disorder are not violent or dangerous. It is true that most of the patients can behave unpredictably at times but if they are getting treated properly at the hospital and taking medications on time as prescribed by the doctor, then there are very fewer chances of the patient being violent to others. If the patient commits any act of violence, then in general, the behaviour may stem from problems of substance abuse which is very common among patients suffering from schizophrenia.`,
  },
  {
    myths:
      "If the parents have schizophrenia then the child would definitely inherit the disease",
    facts: `Most often, the question doctors get asked is schizophrenia hereditary? As per experts, genetic factors do play a role in causing schizophrenia but if only one parent has schizophrenia, then the chances of the child getting the disease are only 10%. Notably, if more than one relative of the patient in question has schizophrenia then the risk of inheriting the disease increases.`,
  },
  {
    myths: "Schizophrenics need to be isolated",
    facts: `These types of common myths about schizophrenia comes from unfair schizophrenia stereotypes that the people at large believe in. With the importance of mental health increasing in the society, the patients with schizophrenia do not have to commit themselves to a mental asylum or lead a life of isolation. Presently, patients who are suffering from this chronic mental disorder are advised to live with family or in community homes that support the needs of such patients.`,
  },
  {
    myths: "People with schizophrenia cannot recover from the disease",
    facts: `Schizophrenia can be hard to treat but with the availability of medicines in the modern world and the changing mindset of people about medication, counseling, and psychotherapy, improvements are being seen. Presently, 50% of the population suffering from schizophrenia can go on to live full, productive lives with the help of lifelong treatment and medications.`,
  },
];
const livingWithSchizophrenia = [
  {
    title: "Join a peer support group:",
    point: `This gives the patient to share their experiences and be a part of a non-judgemental environment
     to discuss courses of growth and improvement.`,
  },
  {
    title: "Ask for feedback from friends and family:",
    point: `With feedback from close ones and the counselor about the improvement in social skills, 
    the patient might be able to develop their cognitive abilities over time and reduce occurrences of the symptoms of schizophrenia.`,
  },
  {
    title: "Take part in social skills training activities:",
    point: `Currently, as mental health is gaining more prominence and patients can take part in social skills 
    training activities organized by NGOs for improvement.`,
  },
  {
    title: "Consider living in community housing facilities:",
    point: `If you’re suffering from a particularly crippling episode with the possibility
     of inflicting self-harm, check yourself into a rehab facility or residential treatment facility for Schizophrenia immediately.`,
  },
];

// Accordion myths

const AccordionDemo = () => {
  return (
    <Accordion type="single" collapsible className="w-full p-5">
      {Myth.map((myth, index) => (
        <AccordionItem key={index} value={`myth-${index}`}>
          <AccordionTrigger className="text-xl text-gray-500 font-semibold mt-3 ">
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
//faqs
const AccordionFaq = () => {
  return (
    <Accordion type="single" collapsible className="w-full p-5">
      {faq.map((faqs, index) => (
        <AccordionItem key={index} value={`faqs-${index}`}>
          <AccordionTrigger className="text-xl text-gray-500 font-semibold mt-3 ">
            {faqs.myths}
          </AccordionTrigger>
          <AccordionContent className="text-lg  text-gray-500">
            {faqs.facts}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

//FAQS
const faq = [
  {
    myths: "Is there a cure/treatment for schizophrenia?",
    facts: `There’s a misconception that there’s no treatment for mental illness like schizophrenia. It cannot be cured completely but it’s symptoms are treatable and manageable with medications, self-help and counselling therapies.
    There are also various schizophrenia rehabilitation centres which provide residential facilities to treat the condition. Schizophrenics can keep their symptoms at bay through treatment and can live a meaning and functional life in society.  
   ​`,
  },
  {
    myths: "How is schizophrenia diagnosed and treated?",
    facts: `The diagnosis of schizophrenia consists of a series of physical exams, brain scans like MRI or CT scans, and psychiatric sessions. Few symptoms of schizophrenia are overlapping with other mental health conditions, hence there will be a period of observation before a conclusive diagnosis. Medication, psychosocial therapies like social skills training, or individual therapy, and a healthy diet can help treat the condition of schizophrenia.
    Cadabams is India’s best schizophrenia help centre which offers the best clinical care and services to diagnose and treat all kinds of schizoaffective disorders and related conditions.`,
  },
  {
    myths: "How can I tell if someone has schizophrenia?",
    facts: `Schizophrenia is a mental disorder which disrupts the thought process, emotions and behaviour of a person. Symptoms like delusions, hallucinations, disorganized speech, agitation, lack of drive or initiative, social withdrawal, apathy, emotional unresponsiveness or lack of emotional expression – are a clear indication that someone might have schizophrenia and needs medical attention`,
  },
  {
    myths: "What are the risk factors for schizophrenia?",
    facts: `The risk factors for schizophrenia include brain development, brain structure and chemistry of the individual as well as genetics and environment.`,
  },
{
   myths: "What are the subtypes of schizophrenia?",
    
  facts:` Schizophrenia has the following subtypes.
    
    Paranoid schizophrenia – It is characterized by feelings of grandiosity, suspicion for others, persecution or a combination of them.
    
    Disorganized schizophrenia – People with disorganized schizophrenia tend to have incoherent thoughts, which may not be delusional.
    
    Catatonic schizophrenia – This is marked by isolation, withdrawal and psychomotor disturbances.
    
    Residual schizophrenia – The patient may lose motivation or interest in life although delusions and hallucinations may not be present.
    
    Schizoaffective disorder – symptoms of major mood disorder and schizophrenia may be present along with depression.`,
  },
  {
    myths: "At what age do the symptoms of schizophrenia appear?",
    facts: `Both men and women can be affected equally by schizophrenia. Usually, the symptoms of schizophrenia show up when they are between 16 and 30 years of age. The disorder rarely occurs in children.`,
  },
  {
    myths:
      "What is the prognosis? Has a person with schizophrenia ever had a normal life?",
    facts: `Schizophrenia is a lifelong journey of treatment and self-help. However, adherence to the treatment protocol can help Schizophrenics become more self reliant. Support from caregivers and family members is essential to help those suffering from Schizophrenia manage their symptoms and lead anormal life.`,
  },
];


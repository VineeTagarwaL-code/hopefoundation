import { GoBack } from "@/components/goBack";
import { Navbar } from "@/components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Page = () => {
  return (
    <>
      <Navbar />
      <div className="h-full flex justify-center w-full  mt-5 ">
        <div className="md:w-[80%] w-[90%] bg-gray-50 flex  flex-wrap pl-5 pr-5">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#d47f22] w-full text-left ">
            Depression: An Overview
          </h1>
          <p className="text-lg text-gray-500 mt-5">
            Depression is the most common mental disorder. As per WHO reports,
            it is the leading cause of disability worldwide and is a major
            contributor to the overall global burden of disease. Even though one
            understands depression as mood fluctuations and short-lived
            emotional responses to challenges in everyday life, it is imperative
            to treat depression if it persists for a long time, as it becomes a
            root cause for many other medical conditions if not treated on time.
          </p>
          <p className="text-lg text-gray-500 mt-5 font-semibold underline w-full ">
            Conditions that can get worse due to depression include:
          </p>
          <p className="text-lg  text-gray-500 mt-3 ">
            i) Arthritis
            <br />
            <br />
            ii) Asthma
            <br />
            <br />
            iii) Cardiovascular disease
            <br />
            <br />
            iv) Cancer
            <br />
            <br />
            v) Diabetes
            <br />
            <br />
            vi) Obesity
            <br />
            <br />
            vii) Weight loss
            <br />
            <br />
            viii) Physical pain
            <br />
            <br />
            ix) Panic attacks
          </p>
          <p className="text-lg text-gray-500 mt-5">
            Depending on the severity of symptoms, depression can be categorized
            as mild, moderate or severe. Often depression is a disorder that can
            last for several weeks, months or years. People with depression
            suffer from anxiety symptoms, loss of appetite, disturbed sleep, low
            self-esteem, poor concentration.
          </p>
          <p className="text-lg text-gray-500 mt-5 font-semibold underline w-full ">
            There are different types of depression.{" "}
          </p>
          {types.map((drugs, index) => {
            return (
              <div key={index}>
                <p className="text-lg font-bold mt-5 ">{drugs.title}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: drugs.point }}
                  className="text-lg mt-3 text-gray-500"
                />
              </div>
            );
          })}
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Symptoms of Depression
            </h1>

            <p className="text-lg text-gray-500 mt-5">
              It is very common and obvious for a person to go through periods
              of deep sadness and grief. These feelings often fade away after a
              few days or weeks. Profound sadness and depression that lasts more
              than two weeks affect their ability to function normally.{" "}
            </p>
            <p className="text-lg text-gray-500 mt-5 font-semibold underline w-full ">
              Some of the common signs and symptoms of depression are:
            </p>
            <p className="text-lg text-gray-500 mt-5">
              i. Deep feelings of sadness.
              <br />
              <br />
              ii. Dark moods.
              <br />
              <br />
              iii. Feelings of worthlessness or hopelessness.
              <br />
              <br />
              iv. Appetite changes.
              <br />
              <br />
              v. Lack of energy.
              <br />
              <br />
              vi. Lack of interest in things one used to enjoy.
              <br />
              <br />
              vii. Withdrawing from friends.
              <br />
              <br />
              viii. Preoccupation with death or thoughts of self-harm.
              <br />
              <br />
              ix. Excessive use of substances and alcohol.
              <br />
              <br />
              x. Drinking excessively.
              <br />
              <br />
              xi. Engaging in high-risk activities.
              <br />
              <br />
              xii. Difficulty staying focused on a task and performing daily
              tasks.
              <br />
              <br />
              xiii. Slow responses during conversations.
              <br />
              <br />
              xiv. Abnormal sleep patterns, such as insomnia (not sleeping
              through the night), restless sleep, etc.
              <br />
              <br />
              xv. Feeling worthless or guilty.
              <br />
              <br />
              xvi. Hallucinations, delusions, or paranoia.
              <br />
              <br />
              xvii. Reduced sexual desire or lack of sexual performance.
              <br />
              <br />
            </p>
            <p className="text-lg text-gray-500 ">
              Children may experience symptoms related to their mood, emotional
              and physical well-being, behaviour, cognitive abilities, or sleep
              patterns
            </p>
            <p className="text-lg text-gray-500 mt-5 font-semibold">
              Several factors can increase the chances of depression. Here are
              some of the main causes of depression:-
            </p>
            <p className="text-lg mt-3 text-gray-500">
              {" "}
              <span className="text-lg font-bold mt-5 text-black   pr-3 ">
                Abuse:{" "}
              </span>{" "}
              Any past experiences of physical, sexual, or emotional abuse
            </p>
            <div>
              <p className="text-lg mt-3 text-gray-500">
                <span className="text-lg font-bold mt-5 text-black  pr-3">
                  Medications:
                </span>
                Certain drugs such as antiviral drugs, and corticosteroids
              </p>
              <p className="text-lg mt-3 text-gray-500">
                <span className="text-lg font-bold mt-5 text-black  pr-3">
                  Conflicts:
                </span>
                Any past experiences of personal conflicts or disputes with
                closed ones
              </p>
              <p className="text-lg mt-3 text-gray-500">
                <span className="text-lg font-bold mt-5 text-black   pr-3">
                  Death:
                </span>
                Grief arising from the death of a close one
              </p>
              <p className="text-lg mt-3 text-gray-500">
                <span className="text-lg font-bold mt-5 text-black  pr-3">
                  Events:
                </span>
                Major life events such as loss of a job, divorce, or retirement
              </p>
              <p className="text-lg mt-3 text-gray-500">
                <span className="text-lg font-bold mt-5 text-black  pr-3">
                  Genetic factors:
                </span>
                A family history of depression
              </p>
              <p className="text-lg mt-3 text-gray-500">
                <span className="text-lg font-bold mt-5 text-black   pr-3">
                  Brain structure:
                </span>
                The lesser active the frontal lobe of the brain, the higher is
                the risk of developing a depressive disorder.
              </p>
              <p className="text-lg mt-3 text-gray-500">
                <span className="text-lg font-bold mt-5 text-black pr-3">
                  Medical conditions:
                </span>
                Serious chronic medical illnesses such as chronic illness,
                insomnia, chronic pain, or attention-deficit hyperactivity
                disorder (ADHD).
              </p>
              <p className="text-lg mt-3 text-gray-500">
                <span className="text-lg font-bold mt-5 text-black  pr-3">
                  Addiction:
                </span>
                Drug or alcohol addiction and abuse
              </p>
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
                Diagnosis
              </h1>
              <p className="text-2xl text-[#d47f22] my-4">
                How to diagnose depression?
              </p>
              <p className="text-lg text-gray-500 ">
                There’s no single test that can be used for depression
                diagnosis, but your doctor can check your symptoms and order a
                psychological evaluation. Usually, they will enquire about your
                sleeping patterns, moods, appetite, activity levels and general
                thoughts. All these analyses will help the doctor to tailor a
                suitable treatment plan. As depression can lead to other health
                problems, physical examination and blood tests may also be
                performed.
              </p>
              <p className="text-lg text-gray-500 mt-5 font-semibold underline w-full ">
                {" "}
                Your therapist or doctor will determine the clinical condition
                of depression based on –{" "}
              </p>
              <p className="text-lg mt-3 text-gray-500">
                <span className="text-lg font-bold mt-5 text-black pr-3">
                  Physical exam –
                </span>{" "}
                She/he will ask questions about your health as depression is
                often linked to an underlying physical health problem.
              </p>

              <p className="text-lg mt-3 text-gray-500">
                <span className="text-lg font-bold mt-5 text-black pr-3">
                  Lab tests –
                </span>{" "}
                Your doctor might ask for lab tests like a blood test to know
                the complete blood count; or a thyroid test to make sure it’s
                functioning properly.
              </p>

              <p className="text-lg mt-3 text-gray-500">
                <span className="text-lg font-bold mt-5 text-black pr-3">
                  Psychiatric evaluation –
                </span>{" "}
                Your symptoms, thoughts, feelings and behaviour patterns are
                crucial to determine your condition. With the help of a
                questionnaire, your doctor will analyse your underlying
                psychiatric condition.
              </p>

              <p className="text-lg mt-3 text-gray-500">
                <span className="text-lg font-bold mt-5 text-black pr-3">
                  DSM-5 –
                </span>{" "}
                Your mental health professional may use the criteria for
                depression as listed in the Diagnostic and Statistical Manual of
                Mental Disorders (DSM-5), published by the American Psychiatric
                Association.
              </p>
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
                Depression Treatment
              </h1>
              <p className="text-lg mt-3 text-gray-500">
                Mild to severe, all types of depressions are treatable. If
                depression is keeping you or your loved ones away from living a
                content life then do not hesitate to seek medical help. From
                medications to therapies to lifestyle changes, there are many
                different treatment options available. Apart from therapies, or
                treatments, sometimes antidepressants, anti-anxiety and
                anti-psychotic medications are prescribed as well to treat
                depression and its symptoms. <br />
                <br /> Different people show different types of symptoms and can
                have different types of clinical depressions. The treatment
                plans also vary from person to person. Before choosing your
                doctor or opting for a treatment or therapy, it is strongly
                recommended to learn as much as you can about your depression.{" "}
                <br />
                <br />
                The severity of a symptom is an important criterion. The more
                severe the depression, the more intensive the treatment you are
                likely to need. It takes time to find the right kind of
                treatment.
              </p>
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
                Talk Therapies
              </h1>
              {therapies.map((therapy, index) => {
                return (
                  <div key={index}>
                    <p className="text-lg font-bold mt-5 ">{therapy.title}</p>
                    <p className="text-lg mt-3 text-gray-500">
                      {therapy.point}
                    </p>
                  </div>
                );
              })}

              <div>
                <p className="text-xl underline mt-3">
                  Mindfulness-based cognitive therapy (MBCT):
                </p>
                <p className="text-lg text-gray-500  mt-3">
                  MBCT is specifically designed for people suffering from
                  recurring depression. Mindfulness-based cognitive therapy
                  combines elements of CBT and mindfulness techniques (breathing
                  exercises and meditation) to help break negative thought
                  patterns.
                </p>
              </div>
              <div>
                <p className="text-xl underline mt-3">
                  Severe Depression Treatments:
                </p>
                {severeDepression.map((severe, index) => {
                  return (
                    <div key={index}>
                      <p className="text-lg font-bold mt-3 ">{severe.title}</p>
                      <p className="text-lg mt-1 text-gray-500">
                        {severe.point}
                      </p>
                    </div>
                  );
                })}
                <p className="text-xl underline mt-3">Alternative Therapies:</p>
                <p className="text-lg mt-3 text-gray-500">
                  i) Acupuncture <br />
                  <br />
                  ii) Group Therapy
                  <br />
                  <br />
                  iii) Art/Music Therapy
                  <br />
                  <br />
                  iv) Meditation
                </p>
              </div>
              <div>
                <p className="text-xl underline mt-3">
                  Medications for Depression:
                </p>
                <p className="text-lg text-gray-500 mt-3">
                  Antidepressants such as Selective serotonin reuptake
                  inhibitors (SSRIs), Atypical antidepressants, Tricyclic
                  antidepressants, Monoamine oxidase inhibitors (MAOIs).
                </p>

                <p className="text-xl underline mt-3">Psychotherapy:</p>
                <p className="text-lg text-gray-500 mt-3">
                  Includes talk therapy, interpersonal therapy, and cognitive
                  behavioral therapy. It helps in adjusting to present crises,
                  identifying negative thought patterns, developing positive
                  interactions, solving problems, and setting realistic life
                  goals.
                </p>

                <p className="text-xl underline mt-3">Hospitalization:</p>
                <p className="text-lg text-gray-500 mt-3">
                  For severe cases, hospitalization may be required to prevent
                  self-harm or harm to others. Residential care facilities offer
                  supportive environments for recovery.
                </p>

                <p className="text-xl underline mt-3">
                  Natural Depression Treatment Options:
                </p>
                <div>
                  <p className="text-xl  mt-3">i) Supplements:</p>
                  <p className="text-lg text-gray-500 mt-3">
                    Such as St. John’s wort, S-adenosyl-L-methionine (SAMe),
                    5-hydroxytryptophan (5-HTP), Omega-3 fatty acids can help in
                    creating positive effects on the brain and help in reducing
                    depression symptoms.
                  </p>

                  <p className="text-xl  mt-3">ii) Essential oils:</p>
                  <p className="text-lg text-gray-500 mt-3">
                    Such as wild ginger and bergamot can help in reducing stress
                    and reducing the effects of depression.
                  </p>

                  <p className="text-xl mt-3">iii) Vitamin supplements:</p>
                  <p className="text-lg text-gray-500 mt-3">
                    Such as Vitamin B and Vitamin D can also be effective in
                    reducing the effects of depression symptoms.
                  </p>
                </div>
                <p className="text-xl text-gray-500 mt-5 font-semibold underline w-full ">
                  Other non herbal supplements that might help with depression
                  treatment include:
                </p>
                <div>
                  <p className="text-xl mt-3">S-adenosylmethionine (SAMe):</p>
                  <p className="text-lg text-gray-500 mt-3">
                    This is a synthetic form of a natural chemical in the body.
                    Along with depression, it is used to treat other medical
                    conditions such as osteoarthritis (a joint disease that
                    causes joint pain and stiffness), fibromyalgia (widespread
                    pain and stiffness), liver disease and migraine headaches.
                  </p>

                  <p className="text-xl mt-3">5-hydroxytryptophan:</p>
                  <p className="text-lg text-gray-500 mt-3">
                    It is an amino acid that your body naturally produces. This
                    helps to boost serotonin, the neurotransmitter in the brain
                    that affects a person’s mood. The potential anti-depressive
                    effects of 5-HTP are stronger when combined with other
                    substances or antidepressant medication.
                  </p>
                </div>
                <div>
                  <p className="text-xl mt-3 font-semibold">
                    Key Steps to Help Your Recovery:
                  </p>
                  <p className="text-lg text-gray-500 mt-3">
                    There are some key steps you can take to lift your mood and
                    help your recovery from depression. When you are in
                    treatment or have completed your treatment, there are a few
                    key steps you can take to help yourself:
                  </p>
                  <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
                    <li>
                      Do take your medicines and antidepressants as prescribed.
                    </li>
                    <li>
                      Talk to your therapists regularly about your health
                      update, or in case if you have any concerns about the
                      medicines you are taking.
                    </li>
                    <li>
                      Eat healthily and exercise regularly to have good blood
                      circulation in the body, as it aids significantly in your
                      recovery process.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Rehabilitation for Depression
            </h1>
            <p className="text-lg text-gray-500 mt-3">
              An effective depression treatment works on patients who are
              diagnosed with clinical depression or manic depressive psychosis.
              Depression does not affect an individual at a standard age, it is
              episodic and can affect a person in their early twenties or late
              forties, male or female, this disease can affect anyone. When you
              get help from a reputed depression help center, you can prevent
              disastrous consequences like suicide. Many people silently suffer
              from depression, even though there are various helpful channels
              like a depression treatment center, which will provide you with
              the treatment you need. <br />
              <br />
              Medical professionals at the best treatment centers for depression
              offer plans that suggest lifestyle changes, medication, or
              therapy. The treatment plan you choose will help you get on the
              right path to feeling like yourself again. If you or any of your
              loved ones are depressed or at risk of some kind of self-harm,
              then you may have to get them admitted at a rehab center, as soon
              as possible. As mentioned before, look for the symptoms and if
              more than one match then you have to contact a depression
              treatment center. Early diagnosis and depression treatment can
              prevent the disease from getting worse. <br />
              <br />
              There is no generic depression treatment that works for everyone.
              Each patient will have a different treatment style, it will depend
              on the severity of their condition. Some people will need just
              medicines, while others will need a combination of medicines and
              cognitive behavioral therapy. <br />
              <br />
              In the case of depression which is compounded with alcoholism and
              drug abuse and where outpatient therapy has failed to produce the
              desired effects, a depression rehabilitation centre is the best
              place for recovery. Rehabilitation for depression is a therapeutic
              approach that helps a patient beyond mere symptom recovery. It
              helps the person not only overcome the condition but also to
              develop their full potential by giving them the right tools and
              coping strategies to deal with their issues. Rehabilitation for
              depression offers different programs and therapies that can
              address both your mental illness and addiction.
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Depression FAQ: All you need to know
            </h1>
            <AccordionDemo />
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              What is Postpartum Depression (PPD)?
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              Postpartum depression occurs in women soon after giving birth. It
              is a very common condition found in women, which include symptoms
              like sadness and hopelessness after their pregnancy term. If the
              condition doesn’t fade after two weeks, then do seek medical help.
              Counselling and antidepressants can help treat the condition.
            </p>
            <p className="text-2xl  text-[#d47f22] mt-3">
              What about depression later in life?
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Late-life depression, often known as LLD, is a type of depression
              that usually occurs after the age of 60 years. It is also known as
              Late-onset depression (LOD). As this is common in the elderly,
              there is a risk of conditions like stroke, hypertension, atrial
              fibrillation, diabetes, cancer, dementia, and chronic pain to
              further increase the risk of depression.
            </p>
            <p className="text-2xl  text-[#d47f22] mt-3">
              Why is depression more prevalent in women than in men?
            </p>
            <p className="text-lg mt-3 text-gray-500">
              The prevalence of major depression is higher in women than in men.
              Several risk factors are said to account for gender differences in
              rates of depression. Most common causes are hormonal differences
              between men and women. Hormones like estrogen and progesterone
              tend to affect the neurotransmitter, neuroendocrine, and circadian
              systems which ultimately triggers mood disorders.
            </p>
          </div>
          <GoBack />
        </div>
      </div>
    </>
  );
};
export default Page;

//Types of Depression

const types = [
  {
    title: "Recurrent depressive disorder",
    point: `Recurrent depressive disorder causes the person to
     experience depressed mood, loss of interest in day-to-day activities,
      and a low energy level leading to diminished activity for at least 2 weeks.`,
  },
  {
    title: "Bipolar Affective Disorder",
    point: `The bipolar affective disorder typically consists of both depressive 
    and manic episodes separated by periods of normal mood. People with this type of 
    depression have mood swings from extreme highs to extreme lows. It is also known 
    as Manic Depression.`,
  },
  {
    title: "Psychotic Depression",
    point: `People with psychotic depression have ‘psychotic’ symptoms,
     like delusions, hallucinations, and paranoia.`,
  },
  {
    title: "Peripartum (Postpartum) Depression",
    point: `Peripartum (Postpartum) Depression occurs in 
    women after childbirth. It can last for weeks or months.`,
  },
  {
    title: "Premenstrual Dysphoric Disorder (PMDD)",
    point: `Peripartum (Postpartum) Depression occurs in women after childbirth. 
    It can last for weeks or months. Women with Premenstrual Dysphoric Disorder (PMDD) 
    suffer from depression at the starting phase of their menstrual cycle.
    <br/> <br/> Apart from depression, they have symptoms like mood swings, 
    irritability, anxiety, trouble concentrating, fatigue, loss of appetite, or sleep.`,
  },
  {
    title: "Situational Depression",
    point: `Situational Depression
    also known as adjustment disorder, this type of depression arises from
     the difficulty in managing a stressful event in life, leading to a temporary
      depressive episode.`,
  },
];

const therapies = [
  {
    title: "Cognitive behavioural therapy (CBT)",
    point: `CBT aims to help understand the thoughts and behavior, and how they affect you.
     It is a type of talk therapy where your therapist helps you identify false or negative 
     thoughts and replaces those with meaningful and realistic ones.`,
  },
  {
    title: "Interpersonal Therapy (IPT)",
    point: `IPT focuses on you and your relationships with other people. It helps you 
    ffectively communicate with others and address problems that contribute to depression.`,
  },
  {
    title: "Psychodynamic Psychotherapy",
    point: `This therapy encourages you to express whatever is going through your mind,
     helping you become aware of hidden meanings or patterns in your behavior or speech that 
     trigger your problems.`,
  },
  {
    title: "Counselling",
    point: `Helps you evaluate the problems you are experiencing so that you can find new ways of dealing with them.`,
  },
];

const severeDepression = [
  {
    title: "Electroconvulsive Therapy (ECT)",
    point: `Involves passing a carefully controlled electric current through
     the brain to relieve severe depressive and psychotic symptoms.`,
  },
  {
    title: "Repetitive Transcranial/Magnetic Stimulation (RTMS)",
    point: `A noninvasive procedure that alters brain activity by
    passing magnetic pulses to a targeted part of your brain.`,
  },
  {
    title: "Deep Brain Stimulation",
    point: `Used in rare cases where the patient does not respond to other treatments.`,
  },
  {
    title: "Transcranial Direct Current Stimulation (TDCS)",
    point: `Delivers a constant low-strength current through electrodes on the head to stimulate 
    brain activity and improve depression symptoms.`,
  },
  {
    title: "Transcranial Magnetic Stimulation (TMS)",
    point: `Uses magnetic impulses to stimulate nerve cells in the brain.`,
  },
];

//Depression Faq
const Faq = [
  {
    Question: "Does depression affect children?",
    Answer: `Yes, depression can affect children due to the same factors 
    that impact adults. While children may experience occasional feelings 
    of sadness or 'the blues,' depression is characterized by persistent changes 
    in behavior that significantly disrupt their daily lives. Recognizing the signs 
    of depression early and seeking help from a depression treatment center is crucial for
     children to develop coping strategies and skills to manage their depression.`,
  },
  {
    Question:
      "Can depression be treated by other alternative therapies instead of traditional treatments?",
    Answer: `Traditional treatments have been widely recognized as effective methodologies for 
    treating depression. Alternative therapies may include techniques such as chiropractic care,
     acupuncture, aromatherapy, herbal remedies, massages, hypnosis, etc. Some depression centers in 
     India may offer these techniques alongside traditional treatments. However, it's advisable to discuss 
     any alternative therapies with a certified mental healthcare professional or consult a trusted rehabilitation 
     center for depression.`,
  },
  {
    Question: "When people are diagnosed with depression, how do they react?",
    Answer: `Reactions to a depression diagnosis can vary. Some individuals may find
     it relieving to receive a definitive diagnosis, while others may feel shocked 
     or ashamed. These reactions are normal. After diagnosis, individuals may feel 
     concerned about the treatment's course and its impact on their family and professional 
     life. These concerns might manifest as anger, exacerbating the condition. Understanding 
     that depression is a common problem and treatable is crucial. If you suspect someone you 
     know is suffering from depression, encourage them to seek professional treatment. Cadabams
      is one of the best depression rehabilitation centers in India, boasting 27+ years of experience
       in treating depression and other mental health issues.`,
  },
];

//Accordion
const AccordionDemo = () => {
  return (
    <Accordion type="single" collapsible className="w-full p-5">
      {Faq.map((faqs, index) => (
        <AccordionItem key={index} value={`myth-${index}`}>
          <AccordionTrigger className="text-lg font-semibold mt-3 ">
            {faqs.Question}
          </AccordionTrigger>
          <AccordionContent className="text-lg  text-gray-500">
            {faqs.Answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

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
        <div className="w-[70%] bg-gray-50 flex  flex-wrap pl-5 pr-5">
          <div>
            <h1 className="text-3xl md:text-4xl text-[#d47f22] mt-3">
              What is Dementia?
            </h1>
            <p className="text-lg text-gray-500 mt-5">
              Dementia constitutes a group of symptoms showing an overall
              cognitive decline characterized by issues and impairment of
              memory, language, judgment, and behavior and is of a chronic or
              progressive nature. Dementia is caused by damage to the brain as a
              consequence of loss of neurons or neuronal connections. The most
              common cause of dementia is the destruction of cells in the brain.
              Even though age is considered to be a strong factor of
              contribution to dementia, dementia problems are not restricted to
              senile dementia and can also be offset in younger age groups.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Symptoms of Dementia
            </h1>
            <p className="text-lg text-gray-500 mt-5">
              The symptoms of dementia become pronounced as the stages progress.
              <br /> <br />
              At early stages, dementia causes the emergence of symptoms such
              as:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 mb-4 ml-6">
              <li>An inability to accept changes to routine</li>
              <li>Changes in short term memory</li>
              <li>An inefficiency at multitasking</li>
            </ul>
            <p className="text-lg text-gray-500">
              At later stages, dementia causes symptoms such as:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6 mb-4">
              <li>Increased difficulty in communication</li>
              <li>Lack of personal hygiene</li>
            </ul>
            <p className="text-lg text-gray-500">
              At this stage, it becomes imperative for dementia caregivers to be
              present to take care of the patient’s needs. At an advanced stage
              of dementia, complete dependency on the caregiver is to be
              expected. At this stage finding someone to care for someone with
              dementia becomes essential. It is ideal to go for long term care
              at a proper dementia care centre or an assisted living facility.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              What causes dementia?
            </h1>
            <p className="text-lg mt-5 text-gray-500">
              Neurodegeneration is the term used to signify the improper
              functioning of neurons. As a result of this, the neuron to neuron
              communication ceases to work efficiently thus affecting the
              processing of information in the brain resulting in dysfunction
              thereby leading to a possibility of Dementia.
              <br />
              Alzheimer’s disease, Parkinson’s disease, Vascular dementia,
              reactions to medications, chronic alcoholism as well as tumours in
              the brain can all lead to neurodegeneration and thereby cause
              dementia.
              <br />
              Frontotemporal dementia can be caused by damage in the frontal and
              temporal lobes of the brain.
              <br />
              Structural abnormalities in the brain as a result of genetic
              mutations can cause developmental problems and dementia.
              <br />
              The intake of toxins, such as lead, can lead to dementia.
              <br />
              Diseases affecting metabolisms such as vitamin B12 deficiency as
              well as disorders due to dysfunction of the thyroid, kidney, and
              liver can all end up causing dementia.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">Types of Dementia</h1>
            <p className="text-lg mt-5 text-gray-500">
              Now that we know what causes dementia, let us talk about dementia
              and its types. As mentioned above, dementia is basically a symptom
              particular to the disease, and types of dementia vary according to
              the disease-causing it.
            </p>
            <p className="text-xl text-gray-500 mt-5 font-semibold underline w-full ">
              The dementia types include:
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Alzheimer’s disease:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              It is the most common cause of dementia and is caused by the
              aggregation of proteins called plaques and tangles causing the
              brain cells to waste away.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Lewy body dementia:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              It is caused by the formation of balloon-like clumps in the brain
              of people suffering from Alzheimer’s disease and Parkinson’s
              disease. Lewy body dementia treatment comprises blood tests, brain
              scans along with several prescriptions of medications and therapy
              recommendations.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Vascular dementia:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Another common type of Dementia is caused by damage to the
              vasculature that supplies blood to the brain. This type of
              Dementia can occur due to a brain stroke as well.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Frontotemporal dementia:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              It is a group of dementias that are characterised by damage to the
              frontal and temporal areas of the brain. Frontotemporal dementia
              causes damage mostly in terms of speaking ability, personality,
              and behavior. Occupational therapy is a great way for
              frontotemporal dementia treatment as it aims to help the patient
              get back on their feet by assisting them with understanding how to
              do their daily tasks properly.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">Stages of Dementia </h1>
            <p className="text-lg mt-3 text-gray-500">
              Dementia is a progressive disease, meaning it has the potential to
              get worse over time. Patients with dementia problems tend to show
              different types of symptoms as it increases in severity. Here are
              the stages in which Dementia patients experience cognitive
              decline:
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Mild Cognitive Impairment:
            </p>
            <p>
              {" "}
              A very common stage among the elderly population, mild cognitive
              impairment is a disorder where they tend to experience
              forgetfulness, short term memory loss and might also have trouble
              remembering things at all. Most patients with MCI do not progress
              towards dementia or any other mental impairment at all.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Mild Dementia Stage
            </p>
            <p className="text-lg mt-3 text-gray-500">
              One of the very early phases of dementia, during this stage, the
              patients are able to function independently. The signs and
              symptoms at this stage of dementia are:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>Extreme cases of short-term memory loss</li>
              <li>Forgetfulness and frequently misplacing things</li>
              <li>
                Struggling to express emotions even though the patient might
                have been an extrovert
              </li>
              <li>
                Trouble managing emotions, displaying signs of irritability,
                anger, and depression
              </li>
              <li>
                Inability to take part in complex tasks like problem-solving and
                decision making
              </li>
            </ul>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Mild Cognitive Impairment:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              At this stage, the affected patient might require assistance.
              Normally, family members are best suited for this task but there
              are also many dementia caregivers who are trained for taking care
              of dementia patients. At this stage, patients need care because
              the disease may now start to interfere with their daily tasks and
              activities. The symptoms and issues faced by the patients at this
              stage of the disease include:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>Poor judgment about matters</li>
              <li>
                Increasing confusion, frustration leading to increasing
                irritability
              </li>
              <li>Very significant personality changes</li>
              <li>Inability to help themselves dress or take a bath</li>
              <li>Severe memory loss</li>
            </ul>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Severe Dementia Stage:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              During the final stage of dementia, during this time, severe
              mental and physical problems of the patient start to be seen.
              These symptoms include:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>
                The inability to maintain any bodily functions like walking,
                talking properly, swallowing food, or controlling the urinary
                bladder
              </li>
              <li>
                Losing the ability to communicate with others, even close family
                members
              </li>
              <li>Complete dependence on caregivers</li>
              <li>Increased risk of infections</li>
            </ul>
            <p className="text-lg mt-3 text-gray-500">
              Understanding these stages of dementia can help caregivers to
              better understand what the patient is going through. But, it
              should be noted that patients progress through these stages at
              their own rate. Timely intervention as per dementia treatment
              guidelines can help slow down the progression of the disease.{" "}
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              How Is Dementia Diagnosed?
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              A proper diagnosis of dementia is required to differentiate it
              from other mental health disorders that may exhibit similar
              symptoms. Secondly, as discussed above, there are various phases
              of the disease. Hence, to carry out proper dementia treatment, the
              right diagnosis is required.
              <br />
              Listed below are all the ways in which dementia is diagnosed:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>Dementia screening</li>
              <li>Review of physical symptoms</li>
              <li>Review of medications</li>
              <li>Blood tests</li>
              <li>Imaging scans</li>
              <li>Psychological screening</li>
            </ul>
            <p className="text-lg mt-3 text-gray-500">
              Sometimes, Dementia symptoms may also be caused due to two or more
              other diseases. Such a condition is known as Mixed Dementia. This
              disease is diagnosed when the doctors believe that more than two
              diseases are causing the symptoms. These diseases might include
              Alzheimer’s disease or vascular dementia.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              How Is Dementia Treated?
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              Dementia treatment includes treatment of diseases that relate to
              memory loss, language, problem-solving, and thinking skills- also
              known as cognitive thinking skills- that have an impact on the
              overall ability to function. Dementia is not something that
              happens suddenly, it is gradual and destroys memory and brain
              cells. It begins mildly and gets severe over time. If there is no
              early diagnosis or dementia treatment, the disease can make life
              difficult and make it challenging for the patient to perform
              everyday tasks. Doctors who offer dementia care understand the
              differences between normal aging due to senility and how it can
              decrease any cognitive abilities and dementia. There is no cure
              for dementia, but dementia treatment India offers plans that can
              improve the brain and memory.
              <br />
              <br />
              Along with medication and treatment, doctors at the best dementia
              care center will suggest that you have a healthy meal plan, along
              with herbal remedies and dietary supplements. The supplements
              should include B9, vitamin B12, and Vitamin E. These are
              prevention treatments that can delay the onset of dementia.
              <br />
              <br />
              While it is unfortunate to be affected by a disease that affects
              you physically and mentally, dementia can affect the families of
              the patient as well. Hence, dementia treatments from the best
              dementia care centers in India will help you deal with the illness
              before it gets worse
              <br />
              <br />
              There are two types of primary dementia treatments that are used
              to help manage symptoms of dementia. They include medication
              oriented treatment approaches and non-drug therapies, here we
              explore the efficacy of both in managing Dementia.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Medications:{" "}
            </p>
            <p className="text-lg mt-3 text-gray-500">
              The most common type of dementia is due to Alzheimer’s diseases,
              here is the medication that is used to treat the symptoms of
              Alzheimer’s disease:
            </p>
            <p className="text-lg text-gray-500  mt-3 ">
              Cholinesterase inhibitors:{" "}
            </p>
            <p className="text-lg mt-3 text-gray-500">
              One of the drugs used in senile dementia treatmentia is a chemical
              called acetylcholine. This chemical is designed to help the
              patient form memories and improve their judgment capabilities. It
              may also delay the worsening symptoms of Alzheimer’s disease (AD)
              and subsequently dementia.
            </p>
            <p className="text-lg mt-3 text-gray-500">
              In most cases, these drugs can also be prescribed together. There
              can also be side effects of taking this drug. Patients and their
              caregivers should research about the side effects before going
              ahead with their medications. These medications can only be
              prescribed by a licensed medical professional.{" "}
            </p>

            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Non-Drug Therapy:{" "}
            </p>
            <p className="text-lg mt-3 text-gray-500">
              {" "}
              In the case of frontotemporal dementia treatment, occupational
              therapy is the best way to manage the symptoms. This type of
              therapy takes the help of trained dementia caregivers to help the
              patient get back on their feet by assisting them with
              understanding how to do their daily tasks like bathing, dressing
              or eating properly.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Mixed Approach:{" "}
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Mixed Approach: Lewy body dementia treatment comprises blood
              tests, brain scans along with prescriptions of medications as well
              as therapy recommendations.{" "}
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              How to prevent dementia?{" "}
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              There are certain lifestyle changes and even therapies that may
              help the patient reduce symptoms of dementia and alleviate some of
              the manageable complications of Dementia. Some of these include:
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Changing the environment around the patient:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              A cluttered environment that is full of noise and overstimulation
              may make the patient lose focus.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Modifying common daily tasks:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              A therapist or a healthcare provider can also be of help to assist
              the patient in breaking down everyday tasks like showering and
              dressing and eating.s.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Occupational therapy:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              There are specialized health care providers who help patients with
              dementia problems perform simple tasks that they may encounter at
              home, work, and in everyday life. It helps restore a sense of
              dignity in the patient.
            </p>
          </div>
          <div>
            <h1>Myths and Facts of Dementia</h1>
            <p className="text-lg mt-3 text-gray-500">
              There are several misconceptions and doubts about dementia in the
              elderly. Let us bust some myths and discuss some important facts
              about the disease.{" "}
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Myths and Facts of Dementia
            </h1>
            <AccordionDemo />
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Risks Factors for Dementia
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              There are certain risk factors of the disease that can increase
              the chances of the patient to actually develop the disease later
              in life. Here are the risk factors that you should be aware of.{" "}
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Unhealthy diet and lack of exercise:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              According to researchers, lack of exercise over a long period of
              time can increase the risk of dementia. There is no specific diet
              that has been known to reduce the risk of dementia in patients but
              it has been seen that the people who do not follow a balanced diet
              run a higher risk of developing the disease later in life.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Heavy alcohol use:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Drinking large amounts of alcohol or binge drinking has been
              correlated with a higher risk of dementia.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Cardiovascular risk factors:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Certain diseases such as high blood pressure (hypertension), high
              cholesterol, atherosclerosis (build-up of fats in the artery
              walls), and obesity have been linked with high dementia risk.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Depression and anxiety issues:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Late-life depression might indicate the development of dementia
              and memory loss, although the relationship between dementia and
              depression is still not well-understood.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">Diabetes:</p>
            <p className="text-lg mt-3 text-gray-500">
              Poorly controlled diabetes may increase the risk of developing
              dementia later in life.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Long term smoking habits:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Smoking over a long period of time might increase the risk of
              developing dementia and other vascular diseases later in life.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Sleep apnea:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              People who have a habit of snoring and experience frequent
              episodes where they stop breathing while asleep may have
              reversible memory loss in old age.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Vitamin and nutritional deficiencies:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Low levels of vitamin D, vitamin B-6, vitamin B-12, and folate may
              increase the risk of developing dementia.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Complications associated with Dementia
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              Dementia can lead to several physical and mental health
              complications in the elderly. Such complications include:
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Poor nutrition:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Many patients with dementia eventually reduce or stop eating
              because they face excessive trouble with chewing and swallowing
              food items. This, in turn, affects their nutrient intake, leading
              to poor nutrition-related problems.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">Pneumonia:</p>
            <p className="text-lg mt-3 text-gray-500">
              The difficulty in swallowing food leads to diseases and
              complications further. It increases the risk of choking or
              aspirating food into the lungs, which can block breathing and
              eventually cause pneumonia.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Inability to perform self-care tasks:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              With the progress of the disease, it can interfere with taking
              bath, dressing, brushing hair or teeth, using the toilet
              independently, and taking medications accurately.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Personal safety challenges:
            </p>
            <p className="text-lg mt-3 text-gray-500">
              Driving, cooking, walking home or going to nearby stores are some
              of the daily tasks that people have to generally do alone. With
              dementia, the people affected cannot take care of these situations
              alone, leading to personal safety challenges
            </p>{" "}
            <p className="text-xl text-gray-500 font-bold mt-3 ">Death:</p>
            <p className="text-lg mt-3 text-gray-500">
              The later stages of dementia that occur in very old people can
              lead to coma or death, mostly due to the development of infection.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Living With Dementia
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              For the elderly, becoming a burden on their families can act as a
              mental pressure, often leading to further depression. Living with
              dementia is not easy and hence, caregivers should have a proper
              understanding of taking care of dementia patients and how they can
              enhance their quality of life.
              <br />
              Caring for someone with dementia requires patience and strength.
              Dementia caregivers should make it a priority to engage the
              patient in exercises, activities like singing, cooking, or
              painting and maintaining a calendar to jot down upcoming events
              and other important dates
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">Dementia and Ageing</h1>
            <p className="text-lg mt-3 text-gray-500">
              The human body goes through several changes at old age. It is
              absolutely normal for the elderly to forget a few things when they
              reach a certain age. The brain starts to slow down and many
              activities that the person would otherwise be able to do
              diligently might start to feel challenging.
              <br />
              Memory loss is also very normal. But there is a huge difference
              between forgetting things once in a while and forgetfulness that
              lasts and is a serious concern. The difference between
              understanding normal forgetfulness with age and dementia lies in
              noticing the potential red flags:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>
                When the person starts to forget who someone is, especially
                close family
              </li>
              <li>
                When they start to forget how to do common tasks like dressing
                up, taking a bath, or walking back home
              </li>
              <li>
                When they seem to lack the capability to understand information
                that has been provided to them in detail
              </li>
            </ul>
            <p className="text-lg mt-3 text-gray-500">
              Patients or their caregivers should immediately seek help if these
              symptoms start to show. One of the most obvious signs is the
              inability to find their way in familiar settings.{" "}
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">Dementia Prognosis</h1>
            <p className="text-lg mt-3 text-gray-500">
              Patients suffering from dementia often require the support of a
              caregiver throughout life to go about their daily routine.
              Patients who are diagnosed with dementia before attaining the age
              of 70 years, can go on to live for a decade or longer.
              <br />
              Recent studies have shown that women tend to live longer than men
              among those affected by this mental disorder. With proper care,
              support and assistance from caregivers, patients can alleviate
              their symptoms and live a fulfilling life.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Getting Help For Dementia
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              It can be really stressful to deal with Dementia or have a loved
              one dealing with the illness. Seeking help and support is
              essential to help patients lead functional lives. If you or an
              elderly loved one in the family suffers from Dementia, it’s
              important to seek early treatment and rehabilitation. Since
              Dementia is a progressive disorder, the earlier it is diagnosed
              and treated the better are the chances of managing it
              successfully.{" "}
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              Dementia FAQ: All you need to know
            </h1>
            <AccordionFaq />
          </div>
          <div>
            <h1 className="text-3xl text-blue-500 mt-5">
              What can you do once you develop dementia?
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              There isn’t any cure for dementia, but you can take a few steps to
              manage the condition and slow down its progression. The possible
              course of action once you develop dementia includes receiving
              medical help from a dementia care centre, making lifestyle changes
              and community support. Developing a positive attitude and support
              from family and friends is important as well. Once Dementia is
              progressed beyond a certain point, the patient will have to be
              taken care of and will require help with day to day activities.
              Hence shifting the patient to an assisted living facility for
              dementia will help them lead a comfortable life even with advanced
              stage dementia.
              <br />
              Is there any disease or medical condition that increase the risk
              of developing dementia?
              <br />
              According to some studies and research, the risk of dementia is
              increased by depression, Parkinson’s disease, high blood pressure,
              stroke, Down’s syndrome, mild cognitive impairment, type 2
              diabetes, etc.{" "}
            </p>
            <p className="text-lg mt-3 font-bold text-gray-500">
Every individual is different and hence they show different signs of dementia. Some early signs of dementia include:</p>
<ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
  <li>Memory loss.</li>
  <li>An abrupt change in behavior and mood.</li>
  <li>Difficulty in reading and recognizing color or contrast.</li>
  <li>Losing interest in hobbies.</li>
  <li>Sleeping more than usual.</li>
</ul> 

<p className="font-semibold text-xl text-[#d47f22] mt-5 ">Call us on our mental health helpline +91 9064287773 for further details .</p>
          </div>
          <GoBack/>
        </div>
      </div>
    </>
  );
};
export default Page;

const Myth = [
  {
    myths: "Alzheimer’s disease and dementia are the same!",
    facts: `Dementia is an umbrella term that describes a set of symptoms that might occur for a lot of neurological diseases. According to researchers, there are at least 400 different types of diseases that can damage the nerve cells of the brain, most common among them being Alzheimer’s disease and hence, this one is the most heard about.`,
  },
  {
    myths: "Only the elderly people are likely to develop dementia",
    facts: `One of the most widely prevalent myths surrounding dementia, it is not just the senile who have the likelihood of developing dementia, while of course, it is the most common in the older demographic. People in their 40s can also show symptoms of the diseases in the early stages leading to the early onset of dementia, but this only occurs when they have family members with dementia.`,
  },
  {
    myths: "People who are affected with dementia don’t feel emotions",
    facts: ` Dementia patients might understand more than they can express. The trouble with the disease is that the patients have difficulty communicating their emotions. One of the most important dementia caregiver tips is that they should directly speak with the patient and wait for them to gather their thoughts and respond to it. This might take time but in this way, they can improve their communication skills and ask for what they want.`,
  },
  {
    myths: "Dementia is a natural part of aging and it happens to everybody",
    facts: `Ageing related memory loss and forgetfulness has nothing to do with dementia. Dementia occurs when there is an actual degradation or destruction of cells in the brain. While the elderly might be forgetful of a few things, dementia patients might forget their own family members or may have trouble doing common tasks that they have done their entire life.`,
  },
  {
    myths: "The risks of dementia cannot be reduced",
    facts: ` Again, dementia symptoms are seen when there is an actual deterioration in the brain cells. For damage of this magnitude to happen, the patient might, of course, have engaged in unhealthy habits like binge drinking for a prolonged period making dementia prevention a reality. So, dementia prevention is possible. By not smoking or drinking alcohol, taking part in exercise and physical activities and eating a balanced diet, people can ensure that they do not become a victim of dementia at a later stage in life.  `,
  },
  {
    myths: " Dementia is a death sentence",
    facts: ` It is true that there is still no cure for dementia. But this does not mean that the affected individual cannot live a fulfilling life with the condition. Early diagnosis makes the situation easy for both the patient and caregiver. indulging in exercise, therapy, and medications, sessions at the dementia treatment center the patient can reduce the symptoms and can learn to live functional and more independent lives.`,
  },
];

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

const Faq = [
  {
    Question: "How can I reduce my risk of dementia?",
    Answer: `No longer is Dementia bound by age as today even young folks run the risk of suffering from dementia. To reduce your risk of dementia, you must adhere to the following steps:

   i) Be more physically active as regular exercises & aerobic activities can positively affect your heart, blood circulation, weight, and mental well-being
    
   ii) Eat a balanced diet rich in protein. Minimize your intake of sugar, less saturated fat, and drink more fluids.
    
    iii) Say NO to smoking and cut down your alcohol intake`,
  },
  {
    Question: "Does dementia only affect older people?",
    Answer: `No, it doesn’t. People who suffer from dementia before the age of 65 are often referred to as young-onset dementia, and getting an accurate diagnosis often proves difficult.`,
  },
  {
    Question:
      "What is the difference between Alzheimer’s disease and dementia?",
    Answer: `Dementia and Alzheimer’s disease are often considered similar to each other, but that’s not the case. Dementia is a group of symptoms that arise due to a decline in memory, reasoning, and other thinking abilities. There’re different types of dementia & is caused due to damage to brain cells.
    Alzheimer’s, on the contrary, is a degenerative brain disease & is caused by complex brain changes following cell damage causing impairment in memory, and cognitive function. It triggers dementia symptoms and worsens over time.`,
  },
  {
    Question: "Is dementia a natural part of ageing?",
    Answer: `Most individuals tend to start forgetting things as they get older. With age, they start getting distracted easily and often struggle with multi-tasking. However, when it is extremely frequent and the individual faces problems with everyday function, then it is a sign of dementia. It is better to get tested early if you suspect dementia systems as early treatment can help slow down the progression of the disease. `,
  },
  {
    Question: "Is dementia disease hereditary?",
    Answer: `No, dementia isn’t hereditary. With that being said, out of all variants of dementia, only one form of Alzheimer’s named as Familial Alzheimer’s Disease [FAD] is known to be hereditary. `,
  },
];
const AccordionFaq = () => {
  return (
    <Accordion type="single" collapsible className="w-full p-5">
      {Faq.map((faqs, index) => (
        <AccordionItem key={index} value={`faqs-${index}`}>
          <AccordionTrigger className="text-xl text-gray-500 font-semibold w-full mt-3 ">
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

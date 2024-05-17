import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="2xl:text-xl text-lg font-bold text-gray-500 p-5 " >
      <AccordionItem value="item-1">
        <AccordionTrigger>i) Behavioural Change Strategies :</AccordionTrigger>
        <AccordionContent className="text-gray-500 text-base">
          It’s common to see the ill effects of drugs/alcohol on the mind.
          Behavioral disorders such as violent outbursts, isolation, repetitive
          talk, hyperactivity/laziness, compulsive/impulsive behavior are common
          amongst the addict/alcoholic. These changes have a way of sticking
          around and becoming a part of one’s personality. We believe in a
          “Tough Love” approach to try and reverse these behavioral disturbances
          before they can turn into permanent personality disorders. A well
          structured day-plan, individual and group responsibilities, sports and
          nature activities slowly but surely mould the right form of discipline
          in every individual.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>ii) Denial Patterns Assesment :</AccordionTrigger>
        <AccordionContent className="text-gray-500 text-base">
          When the guilt & shame associated with an addiction lifestyle makes
          you uneasy, the associated defense mechanisms of the mind drive it
          towards a defensive stance rather than making an attempt at
          correction. This mechanism is called DENIAL (some have an abbreviated
          form of Don’t Even kNow I Am Lying). Maybe you are just trying to
          cover up for your lack of hygiene or your poor academic scores or your
          financial losses. Maybe it’s a parenting issue or a relationship gone
          sour or a drunken brawl you got into. Whatever the reasons, the end
          result is living in denial of reality. Our counselors help you to
          personalize these denials so you may see for yourself how patterns
          like Minimizing, Rationalizing, Blaming, Comparing, Complying,
          Manipulating and Fear
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>iii) Motivational Therapy :</AccordionTrigger>
        <AccordionContent className="text-gray-500 text-base">
          If you want the time to make a decision on an addiction/alcoholism
          treatment program, please don’t do it from the confines of your home
          and your cluttered, foggy thinking. It could prove fatal! Having said
          that we encourage our clients to continually re-asses their motivation
          into seeking recovery during their stay here. Our counselors seek to
          develop, kindle and sustain that flame of being desirous of recovery
          through regular exercises of engagement, focus, planning and action.
          Building trust, respecting boundaries, introducing our tailor – made
          Plan of Action to every individual are just the beginning. When you as
          a patient are told to give an as-is narration of your life-story, we
          are there to help you embrace the accompanying negative emotions of
          guilt and shame, to turn them into a positive strength. We call this
          an exercise of facing the enemy within.
        </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>iv) Emotional Reconnect :</AccordionTrigger>
          <AccordionContent className="text-gray-500 text-base">
            Years of alcohol and/or substance abuse leaves one feeling
            disconnected with not only the world around but also with one-self.
            The very nature of this apathy or emotional numbness means that one
            acts in ways seen by those around as being defiant, rebellious,
            cruel, egotistic, ill-mannered and the like. Our therapeutic
            ‘Thoughts & Feelings’ and ‘Surrender’ sessions mean that you learn
            to isolate your unhealthy personality traits; we call them Defects
            of Character; and learn to work on them through application of the
            spiritual principles contained in the 12-Step program. What may
            initially seem like a tightrope manoevure, slowly becomes a walk
            along the path of mental assertiveness. This practice heals what one
            can and learn to rely on others for what one cannot. Sometimes the
            extent of damage may mean medication as a substitute for
            irreversible changes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>v) Prayer & Meditation :</AccordionTrigger>
          <AccordionContent className="text-gray-500 text-base">
            A lot of addicts and alcoholics in recovery seek the calmness of
            mind associated with normalcy. They start believing that mere
            abstinence from drugs/alcohol would leave them feeling comforted and
            relaxed. This is far from the truth. If we could survey the mind to
            map and isolate the disturbing thoughts then we wouldn’t be far from
            Utopian living. There is no better remedy to this discomfort than
            the tried and tested therapy of prayer and meditation. There are
            many forms of prayer and meditation techniques but the purpose is
            the same. To move away from the self centred form of living and
            developing faith. Here the goal is to inculcate and nurture the
            habit of converting the self-talk into a form of prayer that
            resonates with recovery goals of the patient. We do not believe in
            any form of indoctrination along religious lines.
          </AccordionContent>
        </AccordionItem>
      
      <AccordionItem value="item-6">
        <AccordionTrigger>vi)Therapeutic Assignments :</AccordionTrigger>
        <AccordionContent className="text-gray-500 text-base">
          Have you or your loved one as an addict/alcoholic ever been able to
          carry out any meaningful, productive, enriching and gratifying
          activity for a sustained amount of time? Take a good look around your
          house. Look at your pets. Look around the neighbourhood. And finally
          take a good hard look at yourself / your loved one in the mirror.
          You’ll know what we mean. Are Bored, Lazy, Casual, Lacks Concern,
          Indifferent the adjectives used to describe you? There is no quick fix
          easy method to this problem. We believe in enforcing a strict
          discipline regimen when it comes to being responsible. It’s your lucky
          day! Because this responsibility means freedom, freedom from guilt,
          freedom from fear, freedom from monotony. Yes! Repetition doesn’t mean
          automation, it means accountability. So pick up that broom and moop
          and let’s get dusting.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

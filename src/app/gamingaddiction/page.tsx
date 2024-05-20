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
      <div className="md:w-[80%] w-[90%] bg-gray-50 flex  flex-wrap pl-5 pr-5">
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#d47f22] w-full text-left ">
              Gaming Addiction Explained
            </h1>
            <p className="text-lg text-gray-500 mt-5">
              Gaming addiction – also known as gaming disorder, video game
              addiction (VGA) and computer game addiction – is one of the most
              recent forms of addiction to have emerged, and significant debate
              still exists about the extent to which it should be considered a
              condition in its own right. However, regardless of its precise
              medical status, gaming addiction has caused incalculable pain to
              countless people in recent decades, and a growing number of people
              are now being treated for it in the INDIA and the wider world.
              <br />
              <br />
              Diagnoses of gaming addiction identify the compulsive playing of
              video games to the extent to which such behaviour causes physical
              and/or mental harm, or other detrimental effects, to the gamer.
              Some individuals are unable to stop playing video games for
              extremely long periods, with potentially serious ramifications for
              their health – indeed, a number of fatalities have been associated
              with such extremely long periods of gaming; others may find
              themselves able to stop after a while, and indeed to punctuate
              their gaming with periods of work and/or academic activity, but
              nevertheless cannot get rid of their obsession with gaming and
              allow it to dominate their lives, possibly at the cost of
              previously treasured relationships, activities and ambitions.
              <br />
              <br />
              Although, as noted, there is no medical unanimity regarding
              whether or not gaming addiction should be considered a distinct
              disorder, the neurochemical basis of behavioural addiction is
              increasingly well understood: changes in brain chemistry, in
              particular in the brain’s reward centres drive a compulsion to
              continue to play video games regardless of any negative impact
              that doing so may have.A broad range of health conditions,
              including some other serious mental health disorders, have been
              linked to gaming addiction.Meanwhile, a substantial body of
              anecdotal evidence now exists demonstrating the catastrophic
              impact gaming addiction can have upon a sufferer’s relationships,
              social life, world view, life prospects and general well-being.
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Gaming addiction classified as disorder by WHO
            </h1>
            <p className="text-lg mt-3 text-gray-500">
              Despite the aforementioned lack of agreement within the global
              medical community about the specific status of gaming addiction,
              in 2018 the World Health Organisation (WHO) classified “gaming
              disorder” under “Disorders Due to Addictive Behaviours” in its
              diagnostic manual International Classification of Diseases.
              <br />
              The WHO definition identifies “a pattern of persistent or
              recurrent gaming behaviour… which may be online (i.e., over the
              internet) or offline, manifested by:
            </p>
            <ul className="list-decimal text-lg text-gray-500 mt-3 ml-6">
              <li>
                Impaired control over gaming (e.g., onset, frequency, intensity,
                duration, termination, context)
              </li>
              <li>
                Increasing priority given to gaming to the extent that gaming
                takes precedence over other life interests and daily activities
              </li>
              <li>
                Continuation or escalation of gaming despite the occurrence of
                negative consequences
              </li>
            </ul>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Types of Gaming Addiction
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              As the aforementioned WHO definition indicates, the type of gaming
              to which an individual might become addicted can involve either
              online or offline play; indeed, theoretically, any game or
              combination of games might prove addictive, and as is the case
              with any form of addiction each individual case is unique (though
              with some obvious commonalities). In practice, however, most video
              game addicts find their obsession focused upon online gaming
              (though it is important to note that this does not mean that
              offline gaming does not also form part of any given case of
              addiction).
              <br />
              <br />
              Some video games include elements of gambling (whether with
              real-world or in-game currency) and thus playing them compulsively
              may, in reality, be an indication of gambling, rather than gaming,
              addiction. Similarly, certain adult-themed games feature
              pornographic content, the compulsive viewing of which may form
              part of a pornography addiction rather than a gaming addiction
              specifically, while in others still, it may be certain
              social-media-related elements which drive compulsive engagement,
              possibly betraying a social media addiction (currently an area of
              significant study).
              <br />
              <br />
              The lines between such compulsions and gaming addiction per se may
              not be clear, and in any given case it may well be that multiple
              addictions are in play, or that these compulsions are symptomatic
              of a broader and more complex disorder. Treatment for anyone
              suffering from such a combination of compulsions would be of
              necessity more bespoke, but would likely contain elements of the
              treatment now typically provided to gaming addicts.
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Stages of a Gaming Addiction
            </h1>
            <p className="text-lg text-gray-500 mt-5 ">
              Once again, because there is no unanimity within the medical
              profession about how to categorise gaming addiction, no generally
              agreed list exists of the stages through which the condition
              develops. Furthermore, because each case is unique and may involve
              an entirely different game or games from another, any such list
              should only be considered as a rough guide to how the condition
              may manifest. Nevertheless, some key stages might be as follows:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>
                Initial exposure: An individual’s early experiences with video
                gaming, during which enjoyment of and perhaps a fascination with
                such games may develop very quickly.
              </li>
              <li>
                Deeper interest: Gaming begins to take up a position of greater
                significance in the individual’s life, perhaps requiring growing
                investment in hardware, software, and time. Other activities may
                begin to take on a diminished significance in consequence.
              </li>
              <li>
                Growing obsession: Gaming begins to take up a central role in
                the individual’s life, with their thoughts becoming increasingly
                solely directed towards gaming and other activities and, now,
                relationships becoming increasingly neglected as the great
                majority of the individual’s free time is now taken up with
                gaming.
              </li>
              <li>
                Full-blown addiction: Gaming becomes the individual’s dominant
                or even sole interest. All their free time is taken up with
                gaming, and all their energies are focused upon it, possibly at
                the cost of work or academic progress. Dietary and sleeping
                patterns are likely to be hugely affected by constant gaming,
                and the gamer may find themselves entirely dislocated from
                friends, family, and the real world.
              </li>
            </ul>
            <p className="text-lg text-gray-500 mt-3 ">
              It is important to note that, despite many media scare stories,
              video gaming will not inevitably become an addiction in every
              case; gaming can be a harmless – indeed, healthy – part of a
              person’s life, an enjoyable way to relax and even a way to make
              friends and socialise virtually.
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Causes and Risk Factors of Gaming Addiction{" "}
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              As with addiction generally, there is no universal “recipe” for
              gaming addiction: medical authorities agree that addiction can
              result from both genetic and environmental factors, and even
              displaying a combination of many well-known risk factors for
              addiction does not automatically mean that a given individual will
              become addicted.
              <br />
              However, as our understanding of the condition grows, certain risk
              factors, in particular, have been highlighted as contributing to
              higher rates of video game addiction. These include:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>Low self-esteem</li>
              <li>Feeling of having been neglected</li>
              <li>Using computer games to manage moods</li>
              <li>Anxiety/neuroticism</li>
              <li>Having an aggressive personality</li>
              <li>Depression</li>
              <li>A pessimistic outlook on life</li>
              <li>Loneliness</li>
              <li>Having been subjected to authoritarian parenting</li>
              <li>Social anxiety</li>
              <li>A lack of empathy</li>
              <li>Isolation</li>
              <li>
                Gender (many more men than women appear to be affected, though
                this certainly does not mean that women cannot suffer from the
                condition)
              </li>
            </ul>
            <p className="text-lg text-gray-500 mt-3 ">
              It is important to note that as the computer gaming industry has
              grown, and both hardware and software have become vastly more
              sophisticated, so too has gaming companies’ understanding of the
              elements of a game that drive repetitive behaviour of the kind
              likely to lead to addiction. Many game developers – especially
              those producing games which demand or, at the very least, are made
              significantly easier by financial expenditure (including
              micro-transactions) – have invested a great deal of effort into
              maximising their software’s ability to keep players coming back
              for more, and the psychology behind such mechanisms can be
              fiendishly impressive (and often indiscernible by the player).
              <br />
              While no mainstream developer would be willing to admit publicly
              that they aim to make addicts out of their players – just as the
              gambling industry proclaims that its aim is to offer “fun” to
              gamblers – the proof of the pudding is most definitely in the
              eating, and there is little doubt that one of the primary causes
              of gaming addiction is this increased sophistication of
              developers’ ability to drive repeated – if not constant –
              engagement.
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              How Gaming Affects the Brain
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              As with any behavioural addiction, gaming addiction is a disorder
              of the brain’s reward system. High levels of an addictive stimulus
              – in this case, video gaming – experienced over time initiate the
              production of increasingly large quantities of dopamine in the
              brain, which stimulates receptors (especially in the parts of the
              brain known as the amygdala and the ventral tegmental area) which
              in turn drive the impulse to repeat the behaviour in question.
              <br />
              Up to a point, the more frequently this is repeated, the more
              easily dopamine production is stimulated; after a while, however,
              the brain develops a tolerance to high levels of dopamine, and
              thus the individual in question feels compulsion to engage in the
              addictive behaviour – in other words, to play video games – more
              and more often in order to feel the same level of satisfaction and
              pleasure which was initially experienced.
              <br />
              Moreover, once this tolerance has developed, stopping the
              addictive behaviour will result in unpleasant sensations (and even
              withdrawal symptoms) – driving cravings – until enough time has
              passed that the brain chemistry has normalised and the addiction
              has been quashed – though cravings to resume the addictive
              behaviour may recur for months or even years after the last
              instance of engaging in it.
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Signs & Symptoms of Gaming Addiction
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              Many addictions drive the addict to secretive and solitary
              behaviour, and potentially into isolation, and gaming addiction is
              especially damaging in this regard due to the typically solitary
              nature of most gaming. As a result, many of the symptoms of gaming
              addiction may be invisible or remain concealed for quite some
              time, as the addict withdraws from social circles and even
              important relationships. Nevertheless, there are a number of signs
              which can indicate the development of an addiction to external
              observers.
            </p>
            <p className="text-xl text-gray-500 font-bold mt-3 ">
              Emotional symptoms
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>
                Initial exposure: An individual’s early experiences with video
                gaming, during which enjoyment of and perhaps a fascination with
                such games may develop very quickly.
              </li>
              <li>
                Deeper interest: Gaming begins to take up a position of greater
                significance in the individual’s life, perhaps requiring growing
                investment in hardware, software, and time. Other activities may
                begin to take on a diminished significance in consequence.
              </li>
              <li>
                Growing obsession: Gaming begins to take up a central role in
                the individual’s life, with their thoughts becoming increasingly
                solely directed towards gaming and other activities and, now,
                relationships becoming increasingly neglected as the great
                majority of the individual’s free time is now taken up with
                gaming.
              </li>
              <li>
                Full-blown addiction: Gaming becomes the individual’s dominant
                or even sole interest. All their free time is taken up with
                gaming, and all their energies are focused upon it, possibly at
                the cost of work or academic progress. Dietary and sleeping
                patterns are likely to be hugely affected by constant gaming,
                and the gamer may find themselves entirely dislocated from
                friends, family, and the real world.
              </li>
            </ul>
            <p className="text-lg text-gray-500 font-bold mt-3 ">
              Physical symptoms of video game addiction
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>
                Restlessness: The addict may find it impossible to remain still
                and calm for any length of time while not gaming; fidgeting,
                pacing, constantly getting up and down, and being unable to
                participate in any task for more than a few minutes may all
                indicate frustration at not being able to game.
              </li>
              <li>
                Irritability: An addict may be quick to lose their temper and/or
                to snap at others if they are kept away from gaming for a
                protracted period – or if they are in a bad mood from a recent
                unsuccessful gaming bout.
              </li>
              <li>
                Preoccupation with thoughts of previous or next gaming activity:
                Gaming may entirely capture the addict’s thought processes,
                leaving them unable to think about anything else and possibly
                visibly distracted from important activities.
              </li>
              <li>
                Lying about the amount of time spent playing: Many gaming
                addicts feel shame at the amount of time they spend feeding
                their addictions, and/or recognize that in many people’s eyes
                they are engaging in an unhealthy activity, and so deceive
                others about how long they actually spend gaming.
              </li>
              <li>
                Isolation from others to spend more time gaming: As noted above,
                withdrawing from social circles and previously enjoyed
                activities is a very common sign that something is wrong.
              </li>
            </ul>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">

              Gaming Addiction and Depression
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              Depression and similar disorders have been identified as both a
              potential cause of and the potential consequence of, gaming
              addiction. Depression can leave an individual feeling apathetic
              and hopeless about the future, thus reducing the apparent
              importance of any long-term work or academic aspirations and
              increasing the appeal of effectively inconsequential but
              immediately gratifying activities such as computer gaming.
              <br />
              Moreover, depression can make interpersonal communication and
              relationships difficult or impossible, whereas interacting with a
              computer game – or even with real but effectively anonymous
              individuals online – can feel immeasurably easier and less
              daunting. These feelings can increase the apparent value to an
              individual of computer gaming, even over very long periods, and
              thus drive the kind of compulsive behaviour which leads to
              addiction.On the other hand, the impact of addiction on an
              individual’s life prospects and self-esteem is well understood and
              has been recognised as a significant factor in the development of
              depression in many people.
              <br />
              The often solitary and effectively meaningless nature of computer
              gaming makes it even more dangerous in this regard, and various
              vicious cycles can develop as an affected individual’s self-worth
              can become ever more diminished by loneliness, fatigue, obesity,
              poor hygiene, an inability to communicate successfully with
              others, lessened employment or career prospects, guilt and shame,
              and even a poor performance within a game or game
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">

              Gaming Addiction and Substance Abuse
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              It is by no means uncommon for an individual to suffer from more
              than one addiction – or even more than one type of addiction – at
              once, and many behavioural addictions are often found to co-occur
              with substance abuse disorders. This condition of co-occurrence –
              sometimes called dual diagnosis or dual disorder – typically
              requires specialised treatment of a more complex kind than that
              provided to individuals suffering from only one addiction.
              <br />
              Partly because video game addiction is a comparatively new
              phenomenon, and partly because of the aforementioned lack of
              unanimity regarding its diagnostic status, the extent to which
              those suffering from gaming addiction may be especially
              susceptible to substance abuse disorders has not yet been
              particularly well established.
              <br />
              Some research suggests that many gamers – even those identifying
              as problem gamers – may actually be less likely to develop
              substance abuse disorders as their brain’s reward centres are
              already being stimulated in a similar way to how they would be
              under the influence of drugs. On the other hand, it is clear that
              in certain cases gaming addiction has developed subsequent to the
              establishment of addiction to drink and/or drugs, and similarly
              that in other cases, it has pre-existed.
              <br />
              Some of the common consequences of gaming addiction – including
              isolation, depression and diminished self-worth – are strong risk
              factors for substance abuse disorders. The lethargy and
              sedimentary lifestyle which is often associated with heavy
              cannabis use (and some opiate use) may also be conducive to the
              development of gaming addiction as affected individuals may opt
              for the playing of video games over other more energy-intensive
              activities.
              <br />
              On the other hand, some gamers may turn to drugs – especially
              stimulants such as cocaine – to give them what they believe will
              be a performance-enhancing edge, and/or help them stay awake for
              longer periods during protracted gaming bouts.
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Short-Term Impacts of Gaming Addiction
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              Compared with some other addictions – especially substance abuse
              disorders – the short-term impact of gaming addiction can be
              comparatively negligible (though that is not to say non-existent).
              Many of the more serious risks and consequences can take some time
              to develop.
              <br />
              Perhaps the greatest risk in the short term is associated with
              games which require real money to be spent (above and beyond any
              initial purchase price). Games featuring microtransactions –
              especially certain mobile games – can quickly result in bills
              totalling hundreds, thousands, or even tens of thousands of pounds
              if the gamer is unable to control their spending, and a growing
              number of people have been left financially ruined by the
              dependency upon such cash hungry-games.
              <br />
              It is comparatively rare for serious health disorders to develop
              in the short term as a result of a gaming addiction but in certain
              cases, if affected individuals move very rapidly into extreme
              addiction, a lack of sleep and/or correct hydration and nutrition
              can have catastrophic consequences even after only a very short
              time of the addiction progressing. Similarly, if serious addiction
              develops this rapidly, job loss or expulsion from academic
              institutions as a result of non-attendance may take place
              similarly quickly
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Long-Term Impacts of Gaming Addiction
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              Over the long term, gaming addiction can be very destructive in
              numerous ways. Withdrawal from social life and neglect of
              important relationships can cause permanent ruptures with loved
              ones and friends, leading to lifelong regret (as well as,
              potentially, permanent obligations as a result of divorce). The
              collapse of employment or academic situations can, obviously, also
              have permanent ramifications for life prospects, as can financial
              collapse as mentioned above.
              <br />
              Psychologically, as well as any damage caused by the loss of
              important relationships, isolation can cause profound loneliness,
              depression and a loss of self-worth (perhaps manifesting in issues
              such as poor hygiene mentioned earlier). Interacting with others
              may become increasingly difficult, leading to a vicious circle of
              increasingly entrenched solitude. The essential meaningless of
              gaming can lead to existential angst and the consolidation of a
              sense of purposelessness which, again, can contribute to
              depression and even suicidal ideation. Although no firm evidence
              exists to prove the connection, there have also been links
              proposed between compulsive video gaming and acts of violence,
              including murders.
              <br />A lack of exercise and a typically poor diet contributes to
              obesity in many gaming addicts, with consequences for health
              including cardiovascular and respiratory problems, diabetes, and a
              range of other conditions related to poor fitness. Prolonged
              periods without sleep can cause permanent neurological damage as
              well as various mental health disorders including psychosis, and
              can even result in death. As mentioned above, carpal tunnel
              syndrome and repetitive strain injury, along with various other
              musculoskeletal and neural problems, can result from the
              repetitive motions associated with gaming.
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Treatment for Gaming Addiction
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              Although video game addiction is only immersed comparatively
              recently (and despite the lack of diagnostic clarity discussed
              previously), there are now numerous facilities throughout the UK
              treating the condition, with an increasingly high level of
              expertise. While treatment methods and models may vary
              significantly from one facility or organisation to the next,
              treatment tends to be grounded in therapy in a similar way to that
              provided for other behavioural addictions and substance abuse
              disorders.
              <br />
              Cognitive behavioural therapy (CBT) is at the core of many
              offerings, but other models such as motivational therapy (MT),
              motivational interviewing, art therapy, fitness therapy and many
              others are all available, often in combination with each other;
              the precise composition of a treatment plan would typically be
              determined after an assessment of each individual by the relevant
              facility staff.
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Self-assessment tests for gaming addiction and their efficacy
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              Various tests are now available online purporting to allow for
              self-diagnosis of gaming addiction. The calibre and reliability of
              such tests vary hugely, while some may be of deeply dubious origin
              (for example, existing to capture data for nefarious purposes). If
              you are concerned that you or someone close to you may be
              suffering from an addiction to gaming, it is always recommended
              that you discuss this with your GP or an addiction specialist, who
              will be able to conduct or recommend a reliable and confidential
              assessment. Self-assessment online is not regulated and may not
              provide any useful data, regardless of the legitimacy of the
              assessment provider itself.
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Drugs for video game addiction
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              There is no “magic bullet” pharmaceutical cure for video game
              addiction: as mentioned above, treatment consists of a wide
              variety of approaches almost universally founded upon
              psychotherapy. While research is ongoing into pharmaceutical
              approaches, any such cure will still be years off, if it is ever
              developed at all. However, some of the side-effects of gaming
              addiction – especially physical health conditions which may have
              developed – can be treated with medication. Always consult your GP
              before taking any such medication.
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Prevention for Gaming Addiction
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              As with any addiction, behavioural or otherwise, the only way
              anyone can be absolutely certain of not developing a gaming
              addiction is never to play video games at all. However, such
              complete abstinence in those who have not developed an addiction
              may be overcautious: as mentioned earlier, as part of a balanced
              life gaming can be a harmless recreation providing a great deal of
              enjoyment and a good (and cost-effective) way of relaxing. Indeed,
              some studies show that some games enjoyed in moderation can
              actually be beneficial in terms of their impact upon
              problem-solving
              <br />
              skills, coordination and even general knowledge.For those who
              would like to participate in video gaming, but wish to take some
              steps to prevent the possibility of addiction developing, some
              safeguards can be put in place:
            </p>
            <ul className="list-disc text-lg text-gray-500 mt-3 ml-6">
              <li>
                Limit the length of any given gaming session (for example, be
                firm about not playing for any longer than two hours at a time).
              </li>
              <li>
                Do not play every day, nor more than, say, two days in
                succession.
              </li>
              <li>
                Do not play after a given time every night (that time will
                depend on your individual circumstances, but try to leave at
                least one hour between finishing gaming and going to bed).
              </li>
              <li>
                Do not take your gaming equipment on any holiday you may take;
                if you game on your phone or other mobile devices which need to
                accompany you on holiday, don’t give in to the temptation to
                start gaming whilst away.
              </li>
              <li>
                Be receptive to any concerns voiced by anyone close to you about
                the amount of time you spend gaming, and always prioritize
                important relationships over gaming.
              </li>
              <li>
                If you notice any of the signs and symptoms mentioned above,
                and/or have tried to stop gaming or even cut down on the amount
                of time you spend gaming and have failed, contact an addiction
                specialist immediately.
              </li>
            </ul>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
Ready to Get Help?</h1>
            <p className="text-lg text-gray-500 mt-3 ">
              It is a truism that no addict can be helped until and unless
              they’re prepared to acknowledge their addiction and to ask for
              assistance in overcoming it. If you have been struggling with a
              gaming addiction, help is out there if you are ready to request
              it. Addiction can cause great shame and guilt – but don’t let
              these emotions get in the way of your path back to happiness and
              fulfilment. As with any addiction, your gaming addiction need not
              be a terminal condition if you are prepared to take back control
              of yourself and your future
            </p>
          </div>
          <div>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-blue-500 w-full text-left mt-5">
              Take Control of Your Life – get Started on the Road to Recovery
            </h1>
            <p className="text-lg text-gray-500 mt-3 ">
              Anyone who has laboured with addiction knows the damage it can do
              to one’s self-esteem and sense of self-control. Draw a line under
              that damage today and begin the process of healing, and taking
              back control of your own life; do not let gaming addiction
              determine the course of your future, regardless of the impact it
              has had on your past. Help is out there: reach out for it today.
            </p>
          </div>
         
         <GoBack/>
        </div>
      </div>
    </>
  );
};
export default Page;

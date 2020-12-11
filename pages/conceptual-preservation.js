import {
  Heading,
  GlobalLayout,
  Title,
  Link,
} from "../utils.js";


export default () => (
  <GlobalLayout>
    <Title text="Conceptual Preservation" />
    <p>
      In the <Link href="/conceptual-engineering">last post</Link>, I mentioned how we ought to learn from philosophers who
      have already explored these notions of Conceptual Engineering. Here we
      will do exactly that by focusing on the work by philosopher Matthew
      Lindauer{" "}
      <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/rati.12280">
        Conceptual Engineering as Concept Preservation
      </a>
      . Despite the title Lindauer is not arguing that conceptual engineering is
      merely concept preservation, but rather that concept preservation is an
      important aspect of Conceptual Engineering. In fact, Lindauer's paper
      focuses on concept preservation because as he sees it, it may be the
      easiest, or clearest case of conceptual engineering.{" "}
    </p>
    <p>
      Lindauer brings up concept preservation as a way to combat some
      constraints that some philosophers have placed on Conceptual Engineering.
      Most notably, Herman Cappelen has claimed that we don't really know how
      concepts change over time (Inscrutability), nor can we control how they
      change over time (Lack of Control). Lindauer wants to suggest that
      Inscrutability and Lack of Control are much less of a concern when it
      comes to concept preservation than to re-engineering and de novo
      engineering efforts. For this article, we won't dive into his argument
      here, but keeping this as background is important as we think about
      conceptual preservation as applied to our programming practice.
    </p>
    <Heading size="2" text="Why Preserve?" />
    <p>
      Conceptual Engineering involves taking a normative stance, asking what our
      concepts ought to be, rather than what they are. Frequently we find
      concepts that are deficient in some regard and we aim to fix them, or to
      use the term of the art to ameliorate them. But what if our concepts are
      good? What if we have found a concept that we think is beneficial to keep?
      Are we done with our conceptual engineering work? Not by any means. Over
      time semantic drift is inevitable if our words and concepts aren't
      protected and preserved.
    </p>
    <p>
      As programmers we tend to think that our responsibility is to write clear,
      clean code. If we do this, others will be able to understand our ideas and
      the codebase will be properly maintainable. Yet, this never seems to
      happen in practice. As others begin to contribute to our codebase our
      concepts become lost. No longer do our interfaces mean what they once
      meant. No longer do our concepts drive changes in the codebase. Instead
      people approach our codebase with entirely different preconceived notions
      and ascribe a new meaning to our concepts. This meaning can start to catch
      on and now we have two different groups with to different conceptions of
      the same term. These competing conceptions reak havoc on our codebase.
    </p>
    <p>
      We must work hard to preserve that concepts that matter. We must get them
      in others heads, we must teach others to act correctly in light of these
      concepts. A failure to preserve concepts can lead to undesirable effects.
      Think about how Alan Kay feels about the new understanding of Object
      Oriented Programming. Think about the way in which Agile has changed from
      something intended to help programmers, to something intended to
      micro-manage them. As programmers we must expand our notion of what is our
      responsibility. We must work hard to preserve our good concepts and change
      our bad ones.
    </p>
    <Heading size="2" text="Easy Fixes That Don't Work" />
    <p>
      There are two solutions that might come to mind on ensuring concept
      preservation that I want to argue are dead-ends. First is the idea of
      self-documenting code, code that by it very nature ought to make our
      concepts clear. The second is actual documentation, whether that be in the
      form of docstrings, long-form docs, architecture decision records, or any
      other format. Neither of these initiatives are enough to secure our
      concepts. To make this result a bit less surprising, consider the
      conceptual drift of English words. Does a dictionary prevent drift from
      occurring?
    </p>
    <p>
      Let's tackle these in turn and show why they are insufficient. First,
      self-documenting code can definitely be a good goal. Writing clear
      variable and function names is fantastic and can certainly aid in
      comprehension. But no matter how clear our code is, it does not capture
      our concept completely. Our code underdetermines our concept. No matter
      what structure we give to our code, there will be multiple concepts of the
      code that are compatible with it. This is especially true at all the
      points of our code we have intentionally made extensible. Extensible code
      neccesarily allows our concepts to be open to drift overtime, this can be
      very good.
    </p>
    <p>
      What about documentation proper? Of course our code underdetermines our
      concepts. That is why we document it, describe background, talk about edge
      cases, discuss possible future extensions. It could be argued that our
      concepts are still undetermined, by the documentation, but rather than do
      that let's take a different tact. Preserving a concept isn't merely to
      write it down, it is ensuring that people who utilize this concept have in
      mind the same concept as what you intended. Further than that, it is that
      their actions are consistent with that conception.{" "}
    </p>
    <p>
      Imagine a codebase that follows the MVC pattern. Let's assume that the
      codebase is heavily documented and has canonical definitions of Model,
      View, and Controller. There are two ways in which the concepts here can
      drift. First a team member may have misunderstood some concepts (say some
      distinction between View and Controller). When teaching these concepts to
      a junior engineer, they explain them incorrectly. This incorrect
      understanding spreads and makes its way to the whole team. In this group,
      our conception has changed despite our existing documentation. In fact, at
      some point, someone might even go and update the documentation with this
      new &quot;correct&quot; understanding.{" "}
    </p>
    <p>
      But concept preservation can fail even if no one has a different
      conception. Imagine the same codebase above, but this time all team
      members have internalized the same conception. If you asked them to
      explain MVC they'd give you the same explanations. But there is a team
      member who constantly makes a mistake of putting the wrong code in the
      wrong place. This isn't because of some bad conception, just a simple
      mistake. Over time others begin to follow this example as they create new
      code. This way of organizing code becomes habit. Here our internalized
      concept hasn't changed, and yet our practice reveals an inconsistency. We
      have in our actions allowed conceptual drift to occur.
    </p>
    <Heading size="2" text="Practices for Preserving" />
    <p>
      To be clear, writing clean code and good documentaiton are good practices
      to help with concept preservation. They just aren't sufficient. Nor will
      they be as effective as they could be, if we don't consciously think about
      them as serving that purpose. The same applies to other practices. Code
      review is a fantastic place to help prevent conceptual drift. But many
      times it becomes about style over substance. Pair programming is great way
      to detect conceptual drift, it allows you to go beyond the code artifact
      and actually investigate peoples statements of their beliefs.
    </p>
    <p>
      I'd imagine right now you can think of a number of practices that can be
      used here. Diagrams, presentations, glossaries, in general any
      presentation or explanation of our concepts can help us with preservation.
      But I want to stress that none of these things exhaust our concepts. Our
      concepts are{" "}
      <a href="/incommunicability">in-extricably bound up in human-beings</a>{" "}
      themselves. To be in possesion of a concept is not merely to be able to
      repeat it. It is to be able to act in certain ways, it is to be able to
      apply the concept in a number of different contexts. It is to be able to
      understand how the concept bares to counterfactual situations.
    </p>
    <p>
      In other words, ensuring that others know facts about our concept is not
      enough to preserve it. This is a mistake software architects often make.
      An architect may give a presentation on the desired system architecture,
      they may write extensive documentation, ensure each team member can
      explain the architecture, and yet find that after the work has begun the
      system is entirely different from planned. Why is this? First it may be
      that despite a persons ability to articulate the infrastructure they do
      not have that deeper knowledge of how to make it reality. But it may also
      be that the architaect has no done their job of convincing others.
    </p>
    <Heading size="2" text="Persuade or Don't" />
    <p>
      Perserving our concepts requires persuasion. Merely building a big
      codebase of &quot;best practices&quot; or creating standard boilerplate
      for new projects does not actually get these concepts into other heads and
      help them live them out in their actions. Other engineers may disagree
      (and perhaps rightly so) with your conceptions. These engineers may
      intentionally cause these concepts to drift, twisting them until they fit
      the shape they were looking for. This is the inevitable outcome of forced
      concepts.
    </p>
    <p>
      If we want to practice conceptual preservation, we must ask ourselves if
      our concepts are worth preserving. We must ask ourselves if others deem
      them to be so. We cannot preserve our concepts by fiat. No amount of power
      can keep a concept in place. So, if conceptual preservation is important
      to good codebases, we may want to reconsider our practices. Are architects
      a good solution to ensure quality? Is the blessed infrastracture team who
      imposses concepts a good idea? Perhaps not.
    </p>
  </GlobalLayout>
);

import React from "react";

const Description = () => {
  return (
    <div className="description">
      <h2> What 's Pomodoro technique?</h2>
      <p>
        The Pomodoro Technique is a time management method developed by
        Francesco Cirillo in the late 1980 s.The technique uses a timer to break
        down work into intervals, traditionally 25 minutes in length, separated
        by short breaks.Each interval is known as a pomodoro, from the Italian
        word for 'tomato', after the tomato - shaped kitchen timer that Cirillo
        used as a university student.{" "}
      </p>{" "}
      <p>
        {" "}
        The technique has been widely popularized by dozens of apps and websites
        providing timers and instructions.Closely related to concepts such as
        timeboxing and iterative and incremental development used in software
        design, the method has been adopted in pair programming contexts.{" "}
      </p>{" "}
      <h3> There are six steps in the original technique: </h3>
      <ol>
        <li> Decide on the task to be done. </li>{" "}
        <li> Set the pomodoro timer(traditionally to 25 minutes). </li>{" "}
        <li> Work on the task. </li>{" "}
        <li>
          End work when the timer rings and put a checkmark on a piece of paper.{" "}
        </li>{" "}
        <li>
          If you have fewer than four checkmarks, take a short break (3– 5
          minutes) and then return to step 2 otherwise continue to step 6.{" "}
        </li>{" "}
        <li>
          After four pomodoros, take a longer break (15–30 minutes), reset your
          checkmark count to zero, then go to step 1.
        </li>{" "}
      </ol>{" "}
      <p>
        A goal of the technique is to reduce the impact of internal and external
        interruptions on focus and flow.A pomodoro is indivisible; when
        interrupted during a pomodoro, either the other activity must be
        recorded and postponed(using the inform– negotiate– schedule– call back
        strategy) or the pomodoro must be abandoned.After task completion in a
        pomodoro, any time remaining could be devoted to activities such as:
      </p>{" "}
      <ul>
        <li> Review and edit the work just completed. </li>{" "}
        <li>
          Review the activities from a learning point of view: What did I learn
          ? What could I do better or differently ?
        </li>{" "}
        <li>
          Review the list of upcoming tasks for the next planned Pomodoro time
          blocks, and start reflecting on or updating those tasks.{" "}
        </li>{" "}
      </ul>{" "}
      <p>
        Cirillo suggests: Specific cases should be handled with common sense: If
        you finish a task while the Pomodoro is still ticking, the following
        rule applies: If a Pomodoro begins, it has to ring.It’ s a good idea to
        take advantage of the opportunity for overlearning, using the remaining
        portion of the Pomodoro to review or repeat what you’ ve done, make
        small improvements, and note what you’ ve learned until the Pomodoro
        rings.{" "}
      </p>{" "}
      <p>
        The stages of planning, tracking, recording, processing and visualizing
        are fundamental to the technique.In the planning phase, tasks are
        prioritized by recording them in a "To Do Today" list. This enables
        users to estimate the effort tasks require. As pomodoros are completed,
        they are recorded, adding to a sense of accomplishment and providing raw
        data for subsequent self - observation and improvement.Tools The creator
        and his proponents encourage a low - tech approach, using a mechanical
        timer, paper, and pencil.The physical act of winding the timer confirms
        the user 's determination to start the task; ticking externalises desire
        to complete the task; ringing announces a break.Flow and focus become
        associated with these physical stimuli.
      </p>
      <p>
        Source:{" "}
        <a
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
        </a>
      </p>
    </div>
  );
};

export default Description;

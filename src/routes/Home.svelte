<script>
  import { currentUser } from "../stores";
  import { push } from "svelte-spa-router";

  let name = "to Omflow :)";
  if ($currentUser) {
    name = $currentUser.name;
  }
</script>

<style>
  .is-info {
    background-color: #077d84;
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
      0px -1px 0px rgba(0, 0, 0, 0.7);
    border-radius: 4px;
  }
  .vps {
    background-color: hsl(0, 0%, 86%);
    font-size: 22px;
  }
  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
</style>

<section class="section m-6 p-6">
  <h2 class="title is-4">Caroline,</h2>

  <p>
    I tried to make it work.<br />
    My hopes were high.<br />
    But to put it short: I quit Omflow.
  </p>
  <p>
    This is a very difficult message for me to write and I didn’t want to make
    this personal. But unfortunately the thing is, it seems as if it's all about
    you... First, I was not sure about the validity of this assessment, but
    after digging a bit deeper and hearing many things from inside and outside
    Omflow, I am sure, my feelings were correct. The image of you as a person
    that manifested itself is truly devastating... And I wonder, if you just
    don't want to see the signs?
  </p>
  <p>
    I am not sure if you realize how difficult it actually is to work with/for
    you. How your role switching between coldblooded business woman and try hard
    loving spiritual Yogi is very confusing and one big part of the problem. It
    has become pretty obvious that a new website will not solve the underlying
    problems of Omflow. All arrows point towards you as the main problem of
    Omflow. And the reason people quit...
    <br />
    I hate to write this, but I hope it serves as a wakeup call for you to
    understand that nobody wants to harm you, everybody is/was trying to help,
    but you'd rather shut it down, if it 'threatens' your vision...
  </p>

  <p>
    Nonetheless, to fulfill my part of the agreement I will build the site to
    your specifications as stated in the Google Document on Tab “v3.0
    Requirements”. Due date is 14.01.2021. I will not accept changes in the
    scope or the date of delivery. After that I consider our cooperation as
    finished.
  </p>

  <p>
    I am very aware that working with me can also be difficult. But it’s not
    comparable with the pressure you (perhaps unknowingly) are able to create –
    on all levels. A pressure I am not willing to work under any longer.
  </p>

  <p>
    I really hope you will find a way to experience the love and real
    connections that you talk about all the time… It heals.
  </p>
  Good luck.

  <!-- <section class="hero is-info mb-6">
    <div class="hero-body">
      <div class="container"> -->
  <!-- <h1 class="title is-1">24-Hour Live Personalized Online Yoga</h1> -->
  <!-- <h2 class="subtitle mt-1">
          On Omflow, every mindful yoga experience is unique, personal and never
          the same.<br />Always taught in real-time, 24-hours a day, with
          teachers worldwide.
        </h2> -->
  <!-- </div>
    </div>
  </section> -->

  <!-- <div class="columns">
    <div class="column">
      <div class="card p-5 vps">Available 24-Hours A Day</div>
    </div>
    <div class="column">
      <div class="card p-5 vps">Never Recorded, Always In Real-Time</div>
    </div>
    <div class="column">
      <div class="card p-5 vps">With An Omflow Certified Yoga Teacher</div>
    </div>
  </div> -->

  <!-- <button
    on:click={() => push('/classes')}
    class="button is-large is-info mt-6">Signup!</button> -->
</section>

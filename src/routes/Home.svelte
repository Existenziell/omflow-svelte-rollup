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
</style>

<section class="section m-6 p-6">
  <section class="hero is-info mb-6">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">24-Hour Live Personalized Online Yoga</h1>
        <h2 class="subtitle mt-1">
          On Omflow, every mindful yoga experience is unique, personal and never
          the same.<br />Always taught in real-time, 24-hours a day, with
          teachers worldwide.
        </h2>
      </div>
    </div>
  </section>

  <div class="columns">
    <div class="column">
      <div class="card p-5 vps">Available 24-Hours A Day</div>
    </div>
    <div class="column">
      <div class="card p-5 vps">Never Recorded, Always In Real-Time</div>
    </div>
    <div class="column">
      <div class="card p-5 vps">With An Omflow Certified Yoga Teacher</div>
    </div>
  </div>

  <button
    on:click={() => push('/classes')}
    class="button is-large is-info mt-6">Signup!</button>
</section>

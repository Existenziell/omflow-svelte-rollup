<script>
  import { currentUser } from "../../stores";
  import LayoutPublic from "./_LayoutPublic.svelte";
  import LayoutTeacher from "./_LayoutTeacher.svelte";
  import LayoutAdmin from "./_LayoutAdmin.svelte";
</script>

<section class="section">
  <h1 class="title is-3">Dashboard</h1>
  {#if $currentUser && $currentUser.role === 'admin'}
    <LayoutAdmin />
  {:else if $currentUser && $currentUser.role === 'teacher'}
    <LayoutTeacher />
  {:else}
    <LayoutPublic />
  {/if}
</section>

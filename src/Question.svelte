<script>
  import marked from "marked";
  import Option from "./Option.svelte";

  export let type;
  export let next;
  export let question;
  export let options;
  export let screens;

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
</script>

<style>

</style>

<div class="ui clearing container center aligned segment">
  {@html marked(question)}
  <div class="ui horizontal list">
    {#each shuffle(options) as option}
      <Option {...option} {screens} {next} />
    {/each}
  </div>
</div>

<script>
  import { current } from "./state.js";
  import marked from "marked";
  import { fly, fade } from "svelte/transition";

  export let type;
  export let text;
  export let submit;
  export let submit_text;
</script>

<style>
  .large_text {
    font-size: 1.5rem;
  }
</style>

<div in:fly={{ y: 100, duration: 500 }} class="ui clearing container segment">
  <div class="large_text">
    {@html marked(text)}
    <a class="ui big teal button" href={submit} target="_blank">
      {submit_text}
    </a>
  </div>
</div>

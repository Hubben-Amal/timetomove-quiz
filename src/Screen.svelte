<script>
  import { current, q_result } from "./state.js";
  //import screens from "./screens.js";
  import marked from "marked";
  import { fly, fade } from "svelte/transition";

  export let type;
  export let text;
  export let next;
  export let next_text;
  export let screens;

  function nextQuestion() {
    current.set(screens[next]);
    q_result.set(-1);
  }
</script>

<style>
  .large_text {
    font-size: 1.5rem;
  }
</style>

<div
  in:fly={{ y: 100, duration: 500 }}
  class="ui clearing container segment large_text">
  <div class="large_text">
    {@html marked(text)}
    <button class="ui big right floated teal button" on:click={nextQuestion}>
      {next_text}
    </button>
  </div>
</div>

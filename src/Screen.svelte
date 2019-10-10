<script>
  import { current } from "./state.js";
  //import screens from "./screens.js";
  import marked from "marked";

  export let type;
  export let text;
  export let next;
  export let next_text;
  export let screens;

  function nextQuestion() {
    current.set(screens[next]);
  }
</script>

<style>

</style>

<div class="ui clearing container segment">
  {@html marked(text)}
  <button class="ui big right floated teal button" on:click={nextQuestion}>
    {next_text}
  </button>
</div>

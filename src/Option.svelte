<script>
  import { current, max_score, score, q_result } from "./state.js";
  //import screens from "./screens.js";

  export let text;
  export let next;
  export let screens;
  export let result;

  function gotoNext() {
    current.set(screens[next]);
    if (result) {
      score.update(n => n + 1);
    }
    q_result.set(result);
    max_score.update(n => n + 1);
  }
</script>

<div class="item" on:click={gotoNext}>
  <button class="ui basic big blue button">{text}</button>
</div>

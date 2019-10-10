<script>
  import { current } from "./state.js";
  //import screens from "./screens.js";

  export let text;
  export let next;
  export let screens;
  export let result;

  function gotoNext() {
    current.set(screens[next]);
  }
</script>

<div class="item" on:click={gotoNext}>
  <button class="ui basic big blue button">{text}</button>
</div>

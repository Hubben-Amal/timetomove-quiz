<script>
  import { score, max_score, q_result } from "./state.js";
  import { elasticOut } from "svelte/easing";

  let max_score_val = 0;
  let score_val = 0;
  let result_val = -1;

  const unsubscribe_max_score = max_score.subscribe(value => {
    max_score_val = value;
  });

  const unsubscribe_score = score.subscribe(value => {
    score_val = value;
  });

  const unsubscribe_result = q_result.subscribe(value => {
    result_val = value;
  });

  function pop(node, { duration = 1000 }) {
    return {
      duration,
      css: t => {
        const eased = elasticOut(t);
        return `transform: scale(${eased});`;
      }
    };
  }
</script>

<div class="ui center aligned basic segment">
  {#if result_val == -1}
    <label in:pop />
  {:else if result_val}
    <label in:pop class="ui massive green label">correct</label>
  {:else}
    <label in:pop class="ui massive red label">incorrect</label>
  {/if}
  <br />
  <div class="ui huge statistic">
    <div class="label">Score</div>
    <div class="value">{score_val}/{max_score_val}</div>
  </div>
</div>

<script>
  import Question from "./Question.svelte";
  import Screen from "./Screen.svelte";
  import { current } from "./state.js";
  import YAML from "yaml";

  let current_value;
  let loading = true;
  let screens;

  async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.text();
    return data;
  }

  fetchAsync("./screens.yml").then(file => {
    screens = YAML.parse(file);
    current.set(screens["start"]);
    loading = false;
  });

  const unsubscribe_current = current.subscribe(value => {
    current_value = value;
  });
</script>

<style>
  #root {
    height: 100vh;
    width: 100%;
  }
</style>

<svelt:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
  <!--
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.css" />
  <link
    href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap"
    rel="stylesheet" />-->
</svelt:head>

<div id="root" class="ui grid middle aligned">
  <div class="row">
    <div class="column">
      <div class="ui container">
        {#if loading}
          loading
        {:else if current_value['type'] === 'screen'}
          <Screen {...current_value} {screens} />
        {:else if current_value['type'] === 'question'}
          <Question {...current_value} {screens} />
        {:else}
          <p>not implemented</p>
        {/if}
      </div>
    </div>
  </div>
</div>

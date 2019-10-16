<script>
  import Question from "./Question.svelte";
  import Screen from "./Screen.svelte";
  import End from "./End.svelte";
  import Score from "./Score.svelte";
  import { current } from "./state.js";
  import YAML from "yaml";
  import { fly } from "svelte/transition";

  let current_value;
  let loading = true;
  let screens;
  let max_score = 0;

  async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.text();
    return data;
  }

  fetchAsync("./screens.yml").then(file => {
    screens = YAML.parse(file);
    current.set(screens["start"]);
    max_score = screens["options"].score;
    loading = false;
  });

  const unsubscribe_current = current.subscribe(value => {
    current_value = value;
  });
</script>

<style>
  #root {
    min-height: 100vh;
    width: 100%;
    background-image: url("https://timetomove.eurodesk.eu/wp-content/uploads/2019/08/bg-01.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    margin-top: 0rem;
    margin-bottom: 0rem;
    margin-left: 0rem;
    margin-right: 0rem;
  }
</style>

<svelt:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
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
        {:else if current_value['type'] === 'end'}
          <End {...current_value} />
        {:else}
          <p>not implemented</p>
        {/if}
      </div>
    </div>
  </div>
  <div class="row">
    <div class="column">
      <div class="ui container">
        <Score />
      </div>
    </div>
  </div>
</div>

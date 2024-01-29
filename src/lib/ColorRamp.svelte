<script>
  import Color from "colorjs.io"
  import { generateOklchRamp } from "../utils/generateOklchRamp"
  import Swatch from "./Swatch.svelte"

  export let rampStepNameMultiplier = 100

  let centralBrandColor = "#0078cc"
  let rampName = "blue"

  $: oklchCentralBrandColor = new Color(centralBrandColor).to("oklch")
  $: rampColors = generateOklchRamp(centralBrandColor)
</script>

<div>
  <section>
    <p>Central Color</p>
    <p>{oklchCentralBrandColor.display()}</p>
    <input type="color" bind:value={centralBrandColor} />
  </section>
  <section>
    <p>Ramp Family Name</p>
    <input type="text" bind:value={rampName} />
  </section>
  <div>
    <div class="ramps">
      {#each rampColors as color, i}
        <Swatch color={color} name={`${(i + 1) * rampStepNameMultiplier}`} />
      {/each}
    </div>
  </div>
</div>

<style>
  .ramps {
    display: flex;
    gap: 1rem;
  }

  .ramp-color {
    height: 10rem;
    width: 5rem;
  }
</style>

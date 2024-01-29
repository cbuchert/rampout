<script lang="ts">
  import ColorRamp from "./lib/ColorRamp.svelte"

  let rampStepNameMultiplier = 100
</script>

<main>
  <h1>Rampout</h1>
  <p>Inside-Out OKLCH Color Ramps for UIs</p>
  <div>
    <div>
      <section>
        <p>Color Numbering</p>
        <div>
          <button type="button" on:click={() => rampStepNameMultiplier = 10}>10x</button>
          <button type="button" on:click={() => rampStepNameMultiplier = 100}>100x</button>
        </div>
      </section>
    </div>
    <ColorRamp rampStepNameMultiplier={rampStepNameMultiplier} />
  </div>
</main>

<style>

</style>

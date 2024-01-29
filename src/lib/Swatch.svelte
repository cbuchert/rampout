<script>
  export let color = "#ffffff"
  export let name = ""

  let contrastRatio = "1"
  let contrastRating = "AA"
</script>

<div class="swatch">
  <div class="swatch--color" style={`background-color: ${color}`}>
    <span class="swatch--color--contrast-ratio">{contrastRatio}</span>
    <span class="swatch--color--contrast-rating">{contrastRating}</span>
  </div>
  <div class="swatch--footer">
    <span class="swatch--footer--name">{name}</span>
    <span class="swatch--footer--hex">{color}</span>
  </div>
</div>

<style>
  :root {
    --size-multiplier: 5;
    --shadow-color: 0deg 0% 73%;
    --shadow-elevation-high: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.23),
    1.1px 2.2px 2.8px -0.4px hsl(var(--shadow-color) / 0.23),
    2px 3.9px 4.9px -0.7px hsl(var(--shadow-color) / 0.23),
    3.2px 6.4px 8px -1.1px hsl(var(--shadow-color) / 0.23),
    5.1px 10.1px 12.7px -1.4px hsl(var(--shadow-color) / 0.23),
    7.9px 15.7px 19.8px -1.8px hsl(var(--shadow-color) / 0.23),
    11.9px 23.8px 29.9px -2.1px hsl(var(--shadow-color) / 0.23),
    17.5px 35px 44px -2.5px hsl(var(--shadow-color) / 0.23);
  }

  .swatch {
    width: calc(1.618rem * var(--size-multiplier));
    display: flex;
    flex-direction: column;
    border-radius: .25rem;
    overflow: hidden;
    box-shadow: var(--shadow-elevation-high);
  }

  .swatch--color {
    height: calc(1rem * var(--size-multiplier));
    display: flex;
    gap: .5rem;
    padding-left: 1rem;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
  }

  .swatch--color--contrast-ratio {
    font-size: 1rem;
    color: #ffffff;
  }

  .swatch--color--contrast-rating {
    font-size: .75rem;
    color: #ffffff;
  }

  .swatch--footer {
    display: flex;
    padding-left: 1rem;
    gap: .5rem;
    flex-direction: column;
    justify-content: center;
    height: calc(1rem * var(--size-multiplier));
    background-color: #ffffff;
  }

  .swatch--footer--name {
    font-size: 1rem;
  }

  .swatch--footer--hex {
    font-family: 'Courier New', Courier, monospace;
    color: #6a7784;
    text-transform: uppercase;
    font-size: .75rem;
  }
</style>

<script>
  export let width = 500;
  export let height = 500;

  import { ForceGraph } from '../utils/forceGraph';
  import * as miserables from '../miserables.json';
  import { onMount } from 'svelte';

  onMount(() => {
    const chart = ForceGraph(miserables.default, {
      nodeId: (d) => d.id,
      nodeGroup: (d) => d.group,
      nodeTitle: (d) => `${d.id}\n${d.group}`,
      linkStrokeWidth: (l) => Math.sqrt(l.value),
      width,
      height,
    });
    const div = document.querySelector('#network');
    div.appendChild(chart);
  });
</script>

<section>
  <div id="network" class="" />
</section>

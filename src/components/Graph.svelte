<script>
  import { ForceGraph } from '../utils/forceGraph';
  import * as miserables from '../miserables.json';
  import { onMount } from 'svelte';

  export let width = 500;
  export let height = 500;
  export let nodes;
  export let links;

  onMount(() => {
    const chart = ForceGraph(
      { nodes, links },
      {
        nodeId: (d) => d,
        // nodeGroup: (d) => d.group,
        nodeTitle: (d) => `${d}`,
        linkStrokeWidth: (l) => Math.sqrt(l.value),
        activeNode: 'Napoleon',
        width,
        height,
      }
    );

    const div = document.querySelector('#network');
    div.appendChild(chart);
  });
</script>

<section>
  <div
    id="network"
    class=" border border-gray-100 rounded-md"
    style="width: {width}px; height: {height}px"
  />
</section>

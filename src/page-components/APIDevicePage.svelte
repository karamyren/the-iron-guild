<script>
    import { onMount } from "svelte";
    import { deviceAll } from "../lib/datamodel.js";
    import DeviceAll from "../api-components/DeviceAll.svelte";

    let deviceList;
    $: deviceList = $deviceAll;
</script>

<h2>Devices</h2>

<DeviceAll refreshTimer={10000} />

<!-- Display the messages -->
{#each deviceList as device, i}
    <ul>
        Identifier: {device.identifier} <br />
        Panel: {device.panel}
    </ul>
    <hr />
{/each}

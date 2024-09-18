<script lang="ts">
    import { cn } from '$lib/utils/cn';

    export let items;
    export let classes: string = '';
</script>

<ul>
    {#each items as item}
        <li class={cn('', classes)}>
            {item}
        </li>
    {/each}
</ul>
<script lang="ts">
    import { cn } from '$lib/utils/cn';

    export let classes: string = '';
</script>

<p class={cn('', classes)}>
    <slot />
</p>
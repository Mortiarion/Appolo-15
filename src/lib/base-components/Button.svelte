<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let type: 'submit' | 'button' = 'button';
	export let classes = '';
	export let disabled = false;
</script>

<button {type} {disabled} on:click class={cn('', classes)}>
	<slot />
</button>

<style lang="postcss">
	button:disabled {
		background-color: #d6d6d6;
		cursor: not-allowed;
	}
</style>

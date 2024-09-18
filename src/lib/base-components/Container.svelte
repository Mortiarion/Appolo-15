<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let classes = '';
</script>

<div
	class={cn(
		'mx-auto bs:max-w-screen-bs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl',
		classes
	)}
>
	<slot />
</div>

<script lang="ts">
	import Tell_Icon from '$lib/component/icons/Tell_Icon.svelte';
	import Telegram_Icon from '$lib/component/icons/Telegram_Icon.svelte';
	import Viber_Icon from '$lib/component/icons/Viber_Icon.svelte';
	import Instagram_Icon from '$lib/component/icons/Instagram_Icon.svelte';
	import TikTok_Icon from '$lib/component/icons/TikTok__Icon.svelte';
	import { cn } from '$lib/utils/cn';
	export let classes = '';
</script>

<ul class={cn('', classes)}>
	<li>
		<a href="/">
			<Tell_Icon />
		</a>
	</li>
	<li>
		<a href="/">
			<Telegram_Icon />
		</a>
	</li>
	<li>
		<a href="/">
			<Viber_Icon />
		</a>
	</li>
	<li>
		<a href="/">
			<Instagram_Icon />
		</a>
	</li>
	<li>
		<a href="/">
			<TikTok_Icon />
		</a>
	</li>
</ul>

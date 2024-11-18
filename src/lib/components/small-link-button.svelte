<script>
	let { text = 'Placehoder', href = '/', image = '', target = '_self' } = $props();
</script>

<a {href} {target} class="flex w-max items-center gap-2 rounded-xl border border-solid border-gruvbox-bg1 bg-gruvbox-bg0 px-3 py-1 text-sm font-medium hover:border-gruvbox-bg2">
	{#if image}
		<img src={image} alt={text} class="w-[15px]" />
	{/if}
	{text}
</a>

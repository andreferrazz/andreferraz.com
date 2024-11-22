<script>
	let { text = 'Placehoder', href = '/', image = '', target = '_self' } = $props();
</script>

<a {href} {target} class="flex w-max items-center gap-3 rounded-xl border border-solid border-gruvbox-bg1 bg-gruvbox-bg0-hard1 px-5 py-2 text-sm font-normal hover:border-gruvbox-bg2">
	{#if image}
		<img src={image} alt={text} class="w-[20px]" />
	{/if}
	{text}
</a>

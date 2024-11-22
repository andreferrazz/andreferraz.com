<script>
	let { text, href } = $props();
</script>

<a {href} class="mx-1 rounded-xl border-solid border-gruvbox-bg1 px-2 py-2 text-sm font-normal active:border active:bg-gruvbox-bg0-hard1 sm:px-4">
	{text}
</a>

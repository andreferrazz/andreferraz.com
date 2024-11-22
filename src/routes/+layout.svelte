<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-gruvbox-bg0 text-gruvbox-fg0 min-h-screen font-display">
	<div class="border-gruvbox-bg1 bg-gruvbox-bg0 fixed h-[50px] w-full border-b border-solid">
		<div class="container mx-auto flex h-[50px] max-w-4xl items-center justify-between px-4">
			<a href="/" class="flex items-center gap-2">
				<img src="code.svg" alt="GUI Terminal" class="w-[30px]" />
				<div class="hidden text-xl font-medium sm:block">André Ferraz</div>
			</a>

			<div>
				<a class="border-gruvbox-bg1 active:bg-gruvbox-bg0-hard1 mx-1 rounded-xl border-solid px-2 py-2 text-sm font-normal active:border sm:px-4" href="/fonts">Articles</a>
				<a class="border-gruvbox-bg1 active:bg-gruvbox-bg0-hard1 mx-1 rounded-xl border-solid px-2 py-2 text-sm font-normal active:border sm:px-4" href="/projects">Projects</a>
				<a class="border-gruvbox-bg1 active:bg-gruvbox-bg0-hard1 mx-1 rounded-xl border-solid px-2 py-2 text-sm font-normal active:border sm:px-4" href="/about">About Me</a>
			</div>
		</div>
	</div>

	<div class="container mx-auto max-w-4xl px-4">
		{@render children()}
	</div>
</div>

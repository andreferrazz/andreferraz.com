<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-gruvbox-bg0 font-display text-gruvbox-fg0">
	<div class="fixed h-[50px] w-full border-b border-solid border-gruvbox-bg1 bg-gruvbox-bg0">
		<div class="container mx-auto flex h-[50px] max-w-4xl items-center justify-between px-4">
			<a href="/" class="flex items-center gap-2">
				<img src="code.svg" alt="GUI Terminal" class="w-[30px]" />
				<div class="hidden text-xl font-semibold sm:block">André Ferraz</div>
			</a>

			<div>
				<a class="mx-1 px-2 sm:px-4 py-2 text-sm font-semibold rounded-xl border-solid border-gruvbox-bg1 active:border active:bg-gruvbox-bg0-hard1" href="/blog">Articles</a>
				<a class="mx-1 px-2 sm:px-4 py-2 text-sm font-semibold rounded-xl border-solid border-gruvbox-bg1 active:border active:bg-gruvbox-bg0-hard1" href="/projects">Projects</a>
				<a class="mx-1 px-2 sm:px-4 py-2 text-sm font-semibold rounded-xl border-solid border-gruvbox-bg1 active:border active:bg-gruvbox-bg0-hard1" href="/about">About Me</a>
			</div>
		</div>
	</div>

	<div class="container mx-auto max-w-4xl px-4">
		{@render children()}
	</div>
</div>

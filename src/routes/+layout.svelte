<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="fixed h-[50px] w-full border-b border-solid border-slate-300">
	<div class="container mx-auto flex h-[50px] max-w-4xl items-center justify-between px-4">
		<a href="/" class="flex items-center gap-1">
			<img src="gui-terminal.svg" alt="GUI Terminal" class="w-[30px]" />
			<div class="hidden font-bold sm:block">André Ferraz</div>
		</a>

		<div>
			<a class="mx-1 px-3 py-1 text-sm font-bold" href="/blog">Articles</a>
			<a class="mx-1 px-3 py-1 text-sm font-bold" href="/projects">Projects</a>
			<a class="mx-1 px-3 py-1 text-sm font-bold" href="/about">About Me</a>
		</div>
	</div>
</div>

<div class="container mx-auto max-w-4xl px-4">
	{@render children()}
</div>

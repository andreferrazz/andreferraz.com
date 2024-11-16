<script lang="ts">
	import LinkButton from '$lib/components/link-button.svelte';

	let articles = [
		{ title: 'Understanding the GraphQL Type System', link: '/article1', date: '2024-10-01', textDate: 'October 2024' },
		{ title: 'How to Use WebSockets in a Redux Application	', link: '/article2', date: '2024-08-01', textDate: 'August 2024' },
		{ title: 'Testing API Calls With React Testing Library and Jest', link: '/article3', date: '2024-07-01', textDate: 'July 2024' }
	];
</script>

<section class="flex h-full flex-col-reverse items-start gap-8 pb-[80px] pt-[100px] sm:flex-row sm:items-center sm:pb-[120px] sm:pt-[200px]">
	<div class="sm:w-2/3">
		<h1 class="text-4xl font-bold sm:text-5xl">Hey, I'm André</h1>
		<p class="mt-8 sm:text-lg">I'm a software engineer passionate about building scalable solutions and simplifying complex systems. Here, you can explore my technical insights, learn more about my journey, and check out projects and stories that shaped my career.</p>
	</div>
	<div class="w-[200px] sm:w-1/3">
		<img src="ram.png" alt="RAM Ram" />
	</div>
</section>

<section class="pb-[80px]">
	<div class="mb-6 flex justify-between">
		<h2 class="text-2xl font-bold sm:text-3xl">Articles</h2>
		<LinkButton text="All Articles" href="/blog" />
	</div>
	<div>
		{#each articles as article}
			<a href={article.link} class="group flex items-center justify-between border-b border-solid border-custom-grey py-2 last:border-none">
				<div class="text-base font-medium text-accent decoration-accent decoration-2 group-hover:underline sm:text-lg">{article.title}</div>
				<time datetime={article.date} class="hidden sm:block text-sm font-light text-[#575757]">{article.textDate}</time>
			</a>
		{/each}
	</div>
</section>

<section class="pb-[80px]">
	<div class="mb-6 flex justify-between">
		<h2 class="text-2xl font-bold sm:text-3xl">Projects</h2>
		<LinkButton text="All Projects" href="/projects" />
	</div>
</section>

<section class="py-[50px]">
	<div class="mb-4 flex items-center justify-center gap-2">
		<img src="code.svg" alt="GUI Terminal" class="w-[30px]" />
		<div class="text-xl font-semibold">André Ferraz</div>
	</div>
	<div class="flex justify-center gap-4">
		<LinkButton text="LinkedIn" href="https://www.linkedin.com/in/andre-rodrigues-ferraz" image="/linkedin-alt.svg" target="_blank" />
		<LinkButton text="GitHub" href="https://github.com/andreferrazz" image="/github.svg" target="_blank" />
		<LinkButton text="Email" href="mailto:oandreferraz@gmail.com" image="/email-alt.svg" target="_blank" />
	</div>
</section>

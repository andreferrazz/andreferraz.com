<script lang="ts">
	import LinkButton from '$lib/components/link-button.svelte';
	import SmallLinkButton from '$lib/components/small-link-button.svelte';
	import SectionTitle from '$lib/components/section-title.svelte';

	let articles: any[] = [
		// { title: 'Understanding the GraphQL Type System', link: '/article1', date: '2024-10-01', textDate: 'October 2024' },
		// { title: 'How to Use WebSockets in a Redux Application', link: '/article2', date: '2024-08-01', textDate: 'August 2024' },
		// { title: 'Testing API Calls With React Testing Library and Jest', link: '/article3', date: '2024-07-01', textDate: 'July 2024' }
	];

	let projects: any[] = [
		// { title: 'Keyboard Accordion', description: 'Play the accordion with your keyboard!', year: 2024, article: '/', demo: '/', live: '/' },
		// { title: 'TakeNote', description: 'A free, open source notes app for the web.', year: 2024, article: '/', demo: '/', live: '/' },
		// { title: 'Chip8', description: 'A retro game emulator for three platforms.', year: 2024, article: '/', demo: '/', live: '/' },
		// { title: 'Sokoban', description: 'A web-based Sokoban implementation.', year: 2024, article: '/', demo: '/', live: '/' },
		// { title: 'New Moon', description: 'The optimized dark theme for web development.', year: 2024, article: '/', demo: '/', live: '/' },
		// { title: 'Snek', description: 'A terminal-based Snake implementation.', year: 2024, article: '/', demo: '/', live: '/' }
	];
</script>

<section class="flex h-full flex-col-reverse items-start gap-8 pb-[80px] pt-[100px] sm:flex-row sm:items-center sm:pb-[120px] sm:pt-[200px]">
	<div class="sm:w-3/5">
		<h1 class="text-4xl font-medium sm:text-5xl">Hey, I'm André</h1>
		<p class="mt-8 text-sm font-normal leading-loose text-gruvbox-fg4">I'm a software engineer passionate about building scalable solutions and simplifying complex systems. Here, you can explore my technical insights, learn more about my journey, and check out projects and stories that shaped my career.</p>
	</div>
	<div class="w-[200px] sm:w-2/5">
		<svg class="fill-accent" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<mask id="mask" style="mask-type: alpha">
				<path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
			</mask>
			<g mask="url(#mask)">
				<path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
				<image href="profile.png" />
			</g>
		</svg>
	</div>
</section>

<section class="pb-[80px]">
	<div class="mb-6 flex justify-between">
		<SectionTitle text="Articles" />
		<LinkButton text="All Articles" href="/blog" />
	</div>
	<div>
		{#if articles?.length > 0}
			{#each articles as article}
				<a href={article.link} class="group flex items-center justify-between border-b border-solid border-gruvbox-bg1 py-2 last:border-none">
					<div class="text-base font-medium text-accent decoration-accent decoration-2 group-hover:underline sm:text-lg">{article.title}</div>
					<time datetime={article.date} class="hidden text-sm font-light text-gruvbox-fg4 sm:block">{article.textDate}</time>
				</a>
			{/each}
		{:else}
			empty
		{/if}
	</div>
</section>

<section class="pb-[80px]">
	<div class="mb-6 flex justify-between">
		<SectionTitle text="Projects" />
		<LinkButton text="All Projects" href="/projects" />
	</div>
	<div class="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-4">
		{#if projects?.length > 0}
			{#each projects as project}
				<div class="rounded-xl border border-solid border-gruvbox-bg1 bg-gruvbox-bg0-hard1 p-4 md:p-6">
					<div class="mb-2 text-sm text-accent">{project.year}</div>
					<div class="mb-2 font-medium">{project.title}</div>
					<div class="mb-4 text-gruvbox-fg4">{project.description}</div>
					<div class="flex gap-4">
						<SmallLinkButton text="Article" href={project.article} />
						<SmallLinkButton text="Demo" href={project.demo} />
					</div>
				</div>
			{/each}
		{:else}
			empty
		{/if}
	</div>
</section>

<section class="py-[50px]">
	<div class="mb-8 flex items-center justify-center gap-2">
		<img src="code.svg" alt="GUI Terminal" class="w-[30px]" />
		<div class="text-xl font-medium">André Ferraz</div>
	</div>
	<div class="flex justify-center gap-4">
		<LinkButton text="LinkedIn" href="https://www.linkedin.com/in/andre-rodrigues-ferraz" image="/linkedin-alt.svg" target="_blank" />
		<LinkButton text="GitHub" href="https://github.com/andreferrazz" image="/github.svg" target="_blank" />
		<LinkButton text="Email" href="mailto:oandreferraz@gmail.com" image="/email-alt.svg" target="_blank" />
	</div>
</section>

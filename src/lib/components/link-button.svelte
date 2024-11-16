<script>
    let { 
        text = 'Placehoder', 
        href = '/', 
        image = '',
        target = '_self'
    } = $props()   ;
</script>

<a {href} {target} class="flex gap-3 w-max items-center rounded-xl border border-solid border-grey-1 hover:border-grey-2 bg-slate-100 px-5 py-2 text-sm font-medium">
    {#if image}
        <img src={image} alt={text} class="w-[20px]">
    {/if}
    {text}
</a>
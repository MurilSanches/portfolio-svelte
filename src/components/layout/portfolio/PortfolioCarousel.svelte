<script lang="js">
	import { Splide, SplideTrack, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	let { images } = $props();
</script>

<Splide
	options={{ rewind: true }}
	class="splide--dynamic"
	aria-labelledby="dynamic-slides-projects"
	hasTrack={false}
>
	<div>
		<SplideTrack style="min-height: 10rem">
			{#each images as image, index}
				<SplideSlide>
					<img src={image} alt={index.toString()} />
				</SplideSlide>
			{/each}
		</SplideTrack>
	</div>
</Splide>

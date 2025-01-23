<script>
	export let error = { status: 500, message: 'Unexpected error.' };

	let bgImage = '/bg_error.jpg';
</script>

<div class="min-h-[95vh] md:min-h-[92vh]"></div>
<section
	class="error-page absolute top-0 flex min-h-screen w-full flex-col items-center justify-center p-4 text-center"
	style={`background-image: url(${bgImage})`}
>
	<h1 class="mb-4 text-6xl font-bold text-gray-dark">{error.status} - Something went wrong!</h1>
	<a
		href="/"
		class="mt-6 inline-block rounded bg-blue-light px-4 py-2 font-medium text-white shadow transition-colors hover:bg-blue-600"
		aria-label="Go back to the homepage"
	>
		Try again
	</a>
</section>

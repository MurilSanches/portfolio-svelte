<script>
	export let error;
</script>

<h1>Oops, an error occurred on the About page!</h1>
<p>Status: {error?.status || 500}</p>
<p>{error?.message || 'Unexpected error.'}</p>

<a href="/">Try again</a>

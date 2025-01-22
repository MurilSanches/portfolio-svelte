<script>
	let { isMenuOpen, closeMenu } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="menu-overlay fixed inset-0 z-[90] bg-[#000] opacity-20 transition-all duration-300"
	class:opacity-0={!isMenuOpen}
	class:invisible={!isMenuOpen}
	class:opacity-100={isMenuOpen}
	class:visible={isMenuOpen}
	onclick={closeMenu}
></div>

<style>
	.menu-overlay {
		transition:
			opacity 0.3s ease,
			visibility 0.3s ease;
	}
</style>

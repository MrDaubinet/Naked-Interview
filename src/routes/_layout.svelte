<script>
	// import Navigation from "../components/Navigation.svelte"
	// import MobileMenue from "../components/MobileMenu.svelte"
	// import Footer from "../components/Footer.svelte"

	import { stores } from '@sapper/app';
	const { preloading, page, session } = stores();

	let show_mobile_menu = false

	let showMobileMenu = () => show_mobile_menu = true
	let hideMobileMenu = () => show_mobile_menu = false
</script>

<div class="relative z-0 h-screen bg-gray-800">
	<!-- Page content -->
	<div class="relative overflow-hidden bg-gray-50">
		<!-- Section 1 -->
		<div class="relative pt-6 lg:pb-10 md:pt-10">
			<!-- Navigation -->
			<!-- <Navigation 
				{showMobileMenu}
			/>
			{#if show_mobile_menu}
				<MobileMenue 
					{hideMobileMenu}
				/>
			{/if} -->
			
		</div>

		<!-- route content -->
		<slot></slot>

		<!-- Footer -->
		<!-- {#if $page.path != "/" || $page.path != "/contact"}
			<Footer />
		{/if} -->
	</div>
</div>
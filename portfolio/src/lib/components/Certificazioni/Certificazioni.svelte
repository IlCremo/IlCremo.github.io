<script>
	import { datiCertificazioni } from '$lib/data';
	import Certificazione from './Certificazione.svelte';
</script>

<section id="certificazioni">
	<div class="custom-shape-divider-top shape-flip">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill-primary"></path>
		</svg>
	</div>
	<div
		class="container-lg container-1000"
		data-ova="animation: fade-bottom; offset:100px; delay:100ms"
	>
		<h1 class="text-center text-title text-col-dark">Certificazioni</h1>

		<div class="d-flex flex-wrap mt-5">
			{#each datiCertificazioni as certificazione, i}
				<div
					class="col-lg-6 col-12"
					data-ova="animation:{i % 2 == 0 ? 'fade-left' : 'fade-right'}; offset:100px; delay:{i *
						50 +
						200}ms"
				>
					<Certificazione {certificazione} />
				</div>
			{/each}
		</div>

		<div class="d-flex justify-content-center mt-5">
			<a href="#contatti" class="btn btn-col-dark my-5 px-4 py-3 fs-5"
				>Vuoi contattarmi? <i class="bi bi-chevron-down"></i></a
			>
		</div>
	</div>
</section>

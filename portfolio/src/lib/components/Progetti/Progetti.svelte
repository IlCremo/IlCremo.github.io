<script>
	import { datiProgetti } from '$lib/data';
	import Progetto from './Progetto.svelte';

	const progettiPerPagina = 3;
	let progettiVisibili = datiProgetti.slice(0, progettiPerPagina);

	const mostraAltriProgetti = () => {
		const sliceStartIndex = progettiVisibili.length;
		const sliceEndIndex = Math.min(sliceStartIndex + progettiPerPagina, datiProgetti.length);
		progettiVisibili.push(...datiProgetti.slice(sliceStartIndex, sliceEndIndex));
		progettiVisibili = progettiVisibili;
	};
</script>

<section id="progetti" class="bg-col-primary">
	<div class="custom-shape-divider-top">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill-white"></path>
		</svg>
	</div>
	<div
		class="container-lg container-1000"
		data-ova="animation:fade-bottom; offset:50px; delay:100ms"
	>
		<div>
			<h1 class="text-title text-col-dark text-center mb-4">Progetti</h1>
			<p class="text-description text-justify lh-sm text-black">
				Di seguito sono elencati i progetti principali a cui ho lavorato, che riflettono le mie
				esperienze e competenze principali. <br />Tuttavia, nel tempo libero, mi diletto a creare
				piccoli progetti per esplorare nuovi linguaggi, tecnologie e concetti. Questi progetti
				personali mi permettono di mettermi alla prova e ampliare le mie competenze in modo pratico.
			</p>
		</div>

		<div class="projects-container my-5">
			{#each progettiVisibili as progetto, i}
				<div class="col d-flex">
					<Progetto {progetto} />
				</div>
			{/each}
		</div>

		{#if datiProgetti.length > progettiVisibili.length}
			<div class="d-flex align-items-center justify-content-center">
				<button class="btn btn-col-secondary px-4 py-2 fs-6" on:click={mostraAltriProgetti}
					>Mostra altri <i class="bi bi-plus fs-5"></i></button
				>
			</div>
		{/if}

		<div class="d-flex justify-content-center mt-5">
			<a href="#certificazioni" class="btn btn-col-dark my-5 px-4 py-3 fs-5"
				>Guarda le mie certificazioni <i class="bi bi-chevron-down"></i></a
			>
		</div>
	</div>
</section>

<style>
	.projects-container {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
</style>

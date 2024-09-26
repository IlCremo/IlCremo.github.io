<script>
	import { datiCompetenzeTecniche, datiSoftSkills } from '$lib/data';
	import Competenza from './Competenza.svelte';
</script>

<section id="competenze">
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
		data-ova="animation:fade-bottom; offset:100px; delay:100ms"
		class="container-lg container-1000"
	>
		<div class="mb-5">
			<h1 class="text-title text-center mb-4 text-col-dark">Competenze</h1>
			<p class="text-description text-justify lh-sm">
				Nel corso degli anni ho acquisito competenze in diversi linguaggi di programmazione e ho
				imparato a utilizzare diversi strumenti software. <br /><br />Ecco una panoramica delle mie
				competenze:
			</p>
		</div>

		<div class="row">
			<div class="col order-lg-0 order-1">
				<div>
					<h1 class="text-subtitle text-col-dark mb-4">Tecniche</h1>
					{#each datiCompetenzeTecniche as competenza}
						<Competenza {competenza} />
					{/each}
				</div>
				<div>
					<h1 class="text-subtitle text-col-dark mb-4">Soft Skills</h1>
					{#each datiSoftSkills as competenza}
						<Competenza {competenza} />
					{/each}
				</div>
			</div>
			<div class="col-lg-4 order-lg-1 order-0 mb-lg-0 mb-4 sticky-top">
				<div class="accordion accordion" id="accordion-legenda">
					<div class="accordion-item">
						<h2 class="accordion-header">
							<button
								class="accordion-button fw-bold fs-5 bg-col-primary"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
							>
								Legenda
							</button>
						</h2>
						<div id="collapseOne" class="accordion-collapse collapse show">
							<div class="accordion-body bg-body-secondary">
								<div class="d-flex flex-column gap-2 fw-bold">
									<div class="rounded-1 bg-danger-subtle px-3 py-2 box-shadow">Conoscenze Base</div>
									<div class="rounded-1 bg-warning-subtle px-3 py-2 box-shadow">
										Conoscenze Intermedie
									</div>
									<div class="rounded-1 bg-success-subtle px-3 py-2 box-shadow">
										Conoscenze Avanzate
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="d-flex justify-content-center mt-5">
			<a href="#progetti" class="btn btn-col-dark my-5 px-4 py-3 fs-5"
				>Esplora i miei progetti <i class="bi bi-chevron-down"></i></a
			>
		</div>
	</div>
</section>

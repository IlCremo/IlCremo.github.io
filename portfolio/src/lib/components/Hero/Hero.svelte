<script>
	import image from '$lib/assets/image.png';
	import curriculum from '$lib/assets/Curriculm.pdf';
</script>

<section id="hero" class="bg-col-dark d-flex align-items-center justify-content-center">
	<div class="container-lg">
		<div class="row">
			<div
				class="order-1 order-lg-0 col-lg-7 col-12 mt-lg-2 mt-1 d-flex flex-column text-lg-start text-center"
			>
				<div class="mt-lg-0 mt-5">
					<div data-ova="animation: fade-left; offset: 50px; delay:0" class="OVA-animation">
						<p class="fw-light display-3 mb-0">Andrea Cremonesi</p>
					</div>
					<div data-ova="animation: fade-left; offset: 100px; delay:250ms">
						<p class="fw-semibold display-5">Ingegnere Informatico</p>
					</div>

					<div data-ova="animation: fade-bottom; offset:50px; delay:500ms">
						<p class="fw-light h5" style="opacity:0.9">
							Fin da piccolo, l'informatica è stata la mia passione. Mi piace affrontare nuove
							sfide, imparare continuamente e sono sempre pronto a mettermi in gioco per crescere
							professionalmente.
						</p>
					</div>
				</div>
				<div
					data-ova="animation: fade-bottom; offset:50px; delay:750ms"
					class="mt-5 d-flex flex-wrap gap-4 justify-content-lg-start justify-content-center"
				>
					<a href="#chi-sono" class="btn btn-white text-col-dark fw-medium"
						>Scopri di più su di me</a
					>
					<a href={curriculum} download="Curriculum" class="btn btn-outline-white fw-medium"
						>Scarica il mio CV <i class="bi bi-download ms-2"></i></a
					>
				</div>
			</div>
			<div
				data-ova="animation:fade-right; duration: 1000ms; offset: 100px;"
				class="order-0 order-lg-1 col-lg-5 col-12 d-flex flex-column align-items-center"
			>
				<div class="image-container">
					<img
						src={image}
						alt="Immagine profilo"
						class="portrait"
						data-ova="animation:fade-right; duration: 1000ms; delay:200ms; offset: 100px;"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
	}

	.btn {
		padding: 1.5dvh 10dvw;
		font-size: large;
	}

	.image-container {
		border-radius: 50% 5px 50% 5px;
		background-color: white;
		overflow: hidden;
	}

	.portrait {
		width: min(400px, 80vw);
		padding: 0 20px;

		filter: brightness(1.25) drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.7));
	}

	@media (min-width: 992px) {
		.btn {
			padding: 0.6rem 0.9rem;
			font-size: medium;
		}
	}
</style>

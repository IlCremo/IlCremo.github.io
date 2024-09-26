<script>
	import { onMount } from 'svelte';

	onMount(() => {
		document.querySelectorAll('.navbar-nav a').forEach((link) => {
			link.addEventListener('click', function () {
				const offcanvasElement = document?.querySelector('.offcanvas');
				const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement); // Get the offcanvas instance
				offcanvas?.hide(); // Hide the offcanvas
			});
		});
	});
</script>

<nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-col-dark py-2 px-4">
	<div class="container-lg py-1">
		<a class="navbar-brand fw-bolder fs-3" href="#hero">AC</a>
		<button
			class="btn btn-hamburger"
			type="button"
			data-bs-toggle="offcanvas"
			data-bs-target="#offcanvasNavbar"
			aria-controls="offcanvasNavbar"
			aria-label="Toggle navigation"
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
		<div
			class="offcanvas offcanvas-top h-100 bg-col-dark"
			tabindex="-1"
			id="offcanvasNavbar"
			aria-labelledby="offcanvasNavbarLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">Naviga</h5>
				<button
					type="button"
					class="btn ms-auto border-0"
					data-bs-dismiss="offcanvas"
					aria-label="Close"><i class="bi bi-x display-1 text-white"></i></button
				>
			</div>
			<div class="offcanvas-body d-flex flex-lg-row flex-column">
				<ul class="navbar-nav pe-3 mx-0 mx-lg-auto gap-lg-3 gap-0">
					<li class="nav-item">
						<a class="nav-link" href="#chi-sono">Chi sono</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#competenze">Competenze</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#progetti">Progetti</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#certificazioni">Certificazioni</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#contatti">Contatti</a>
					</li>
				</ul>
				<div class="nav-contatti d-flex align-items-center mb-0 gap-4 h5 mt-3 mt-lg-0">
					<a href="mailto:andreacremonesi42@gmail.com"><i class="bi bi-envelope-fill"></i></a>
					<a
						href="https://www.linkedin.com/in/andrea-cremonesi-9042a6329"
						target="_blank"
						rel="external noreferr"><i class="bi bi-linkedin"></i></a
					>
				</div>
			</div>
		</div>
	</div>
</nav>

<style>
	a {
		color: white !important;
		font-weight: 350;
	}

	.btn-hamburger {
		display: flex;
		gap: 5px;
		flex-direction: column;
	}

	.btn-hamburger > span {
		width: 32px;
		height: 4px;
		background-color: white;
	}

	.nav-item {
		font-size: x-large;
	}

	.nav-contatti i {
		font-size: xx-large;
	}

	@media (min-width: 992px) {
		.btn-hamburger {
			display: none;
		}

		.nav-item {
			font-size: medium;
		}

		.nav-contatti i {
			font-size: larger;
		}
	}
</style>

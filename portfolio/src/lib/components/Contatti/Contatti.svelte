<script>
	import { PUBLIC_FORM_KEY } from '$env/static/public';
</script>

<section id="contatti" class="bg-col-dark">
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
	<div class="container-lg container-1000">
		<div class="row">
			<div class="col-lg-6 col p-4">
				<h1 class="text-title">Contatti</h1>
				<p class="fw-light">
					Per contattarmi, compila il form seguente oppure invia una mail all’indirizzo sottostante.
				</p>
				<a href="mailto:andreacremonesi42@gmail.com" class="text-white text-decoration-underline"
					><i class="bi bi-envelope-fill"></i> andreacremonesi42@gmail.com</a
				>
			</div>
			<div class="col-lg-6 col p-4">
				<form action="https://api.web3forms.com/submit" method="POST">
					<input type="hidden" name="access_key" value={PUBLIC_FORM_KEY} />
					<div class="mb-3">
						<label for="name" class="form-label">Nome*</label>
						<input
							type="text"
							id="name"
							name="name"
							class="form-control"
							placeholder="Nome Completo"
							required
						/>
					</div>
					<div class="mb-3">
						<label for="email" class="form-label">Email*</label>
						<input
							type="email"
							id="email"
							name="email"
							class="form-control"
							placeholder="Il Tuo Indirizzo Email"
							required
						/>
					</div>

					<!-- Honeypot Spam Protection -->
					<input type="checkbox" name="botcheck" class="hidden" style="display: none;" />

					<div class="mb-3">
						<label for="messaggio" class="form-label">Messaggio*</label>
						<textarea name="messaggio" id="messaggio" class="form-control" rows="5"></textarea>
					</div>

					<div>
						<button type="submit" class="form-control btn btn-col-secondary py-3">Invia</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
	}

	.form-control {
		padding: 0.5rem 0.8rem;
		border-radius: 0;
	}
</style>

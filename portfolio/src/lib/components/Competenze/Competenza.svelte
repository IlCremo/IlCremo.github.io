<script>
	export let competenza;

	const classes = ['bg-danger-subtle', 'bg-warning-subtle', 'bg-success-subtle'];

	const sortByLivello = (a, b) => {
		if (a.livello === b.livello) return sortByNome(a, b);

		return a.livello - b.livello;
	};

	const sortByNome = (a, b) => {
		return a.nome.localeCompare(b.nome);
	};
</script>

<div class="mb-5 ms-2">
	{#if competenza?.nome}
		<h3 class="fs-5 text-col-dark mb-3 fs-4 fw-bold">{competenza.nome}</h3>
	{/if}
	<div class="pill-list">
		{#each competenza.lista.sort(sortByLivello) as competenzaSpecifica, i}
			<div data-ova="animation: fade-bottom; duration:750ms; offset:50px; delay: {i * 50 + 200}ms">
				<div
					class="bg-col-primary pill rounded-1 box-shadow {competenzaSpecifica.livello != null
						? classes[competenzaSpecifica.livello]
						: ''}"
				>
					<span class="text-description text-col-dark fw-bold">{competenzaSpecifica.nome} </span>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.pill-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}

	.pill {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.3rem 1rem;

		transition:
			filter 150ms ease-in-out,
			transform 150ms linear;

		cursor: default;
	}

	.pill:hover {
		filter: brightness(90%);
		transform: translateY(-2px);
	}
</style>

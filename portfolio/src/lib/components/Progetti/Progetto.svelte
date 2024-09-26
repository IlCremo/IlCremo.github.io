<script>
	export let progetto;
</script>

<div class="col p-4 bg-white rounded-1 box-shadow d-flex flex-column">
	<h3 class="project-title mb-4">{progetto.nome}</h3>
	<p class="flex-grow-1">
		{progetto.descrizione}
	</p>
	<span class="mb-2"><b>Tecnologie utilizzate:</b></span>
	<div class="d-flex flex-wrap column-gap-2 row-gap-1">
		{#each progetto.tecnologie as tecnologia}
			<div class="bg-col-primary rounded-1 px-2 fw-bold">
				<span>{tecnologia}</span>
			</div>
		{/each}
	</div>
	<div class="d-flex flex-column mt-4 gap-2">
		{#if progetto.sito}
			<a href={progetto.sito} target="_blank" class="btn btn-col-dark"
				><i class="bi bi-globe"></i> Visita il sito</a
			>
		{/if}
		{#if progetto.github}
			<a href={progetto.github} target="_blank" class="btn btn-col-dark"
				><i class="bi bi-github"></i> Repository di Github</a
			>
		{/if}
	</div>
</div>

<style>
	.project-title {
		font-size: 2rem;
		font-weight: bold;
	}
</style>

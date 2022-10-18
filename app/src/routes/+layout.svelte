<script>
  const data = {
    apps: [
      { dataID: "app-1", label: "App 1" },
      { dataID: "app-2", label: "App 2" },
    ],
  };
</script>

<div class="app">
  <header class="app__header">
    <h1><a href="/">Configurator</a></h1>
  </header>
  <nav class="app__nav">
    <ul class="app__nav__apps">
      {#each data.apps as app}
        <li>
          <a href="/app/{app.dataID}" class="app__nav__link">{app.label}</a>
        </li>
      {:else}
        loading
      {/each}
    </ul>
  </nav>
  <main class="app__content">
    <slot />
  </main>
</div>

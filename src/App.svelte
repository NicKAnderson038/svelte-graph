<script>
  import Router from 'svelte-spa-router'
  // Import the list of routes
  import routes from './routes'
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <div>
    <a href="#/">Home</a> |
    <a href="#/graph">Graph</a> |
    <a href="#/does/not/exist">Not found</a>
  </div>
  <Router {routes} />
</main>

import Home from './routes/Home.svelte'
import Graph from './routes/Graph.svelte'
import NotFound from './routes/NotFound.svelte'

export default {
    '/': Home,
    '/graph': Graph,
    // Catch-all, must be last
    '*': NotFound,
}
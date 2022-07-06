import { Component, h } from '@stencil/core';


@Component({
    tag: 'grid-areas',
    styleUrl: 'grid-areas.css'
})
export class GridAreas {
    render() {
        return (
          <div class="container">
            <header>Header</header>
            <main>Main</main>
            <nav>Navigation</nav>
            <footer>Footer</footer>
            <aside>Sidebar</aside>
          </div>
        );
    }
}

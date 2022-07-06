import { Component, getAssetPath, h } from '@stencil/core';


@Component({
    tag: 'testimonials-grid',
    styleUrl: 'testimonials-grid.css',
    assetsDirs: ['assets/images']

})
export class TestimonialsGrid {
    render() {
        return (
            <div class="testimonials">
              <div class="card card--bg-purple">
                <header class="card__header">
                  <img src={getAssetPath(`./assets/images/image-daniel.jpg`)} class="card__img" alt="" />
                  <div>
                    <h3>Daniel Clifford</h3>
                    <p>Verified Graduate</p>
                  </div>
                </header>
                <p class="card__lead">
                  I received a job offer mid-course, and th subjects I learned were current, if not more so, in the company I joined.
                  I honestly feel i got every penny's worth
                </p>
                <p class="card__quote">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sunt illo. Temporibus velit dolorem fuga eius explicabo perspiciatis, asperiores sit.
                </p>
              </div>


              <div class="card card--bg-gray-blue">
                <header class="card__header">
                  <img src={getAssetPath(`./assets/images/image-jonathan.jpg`)} class="card__img" alt="" />
                  <div>
                    <h3>Jonathan Clifford</h3>
                    <p>Verified Graduate</p>
                  </div>
                </header>
                <p class="card__lead">
                  I received a job offer mid-course, and th subjects I learned were current, if not more so, in the company I joined.
                  I honestly feel i got every penny's worth
                </p>
                <p class="card__quote">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sunt illo. Temporibus velit dolorem fuga eius explicabo perspiciatis, asperiores sit.
                </p>
              </div>

              <div class="card card--bg-purple">
                <header class="card__header">
                  <img src={getAssetPath(`./assets/images/image-jeanette.jpg`)} class="card__img" alt="" />
                  <div>
                    <h3>Jeanette Clifford</h3>
                    <p>Verified Graduate</p>
                  </div>
                </header>
                <p class="card__lead">
                  I received a job offer mid-course, and th subjects I learned were current, if not more so, in the company I joined.
                  I honestly feel i got every penny's worth
                </p>
                <p class="card__quote">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sunt illo. Temporibus velit dolorem fuga eius explicabo perspiciatis, asperiores sit.
                </p>
              </div>


              <div class="card card--bg-black-blue">
                <header class="card__header">
                  <img src={getAssetPath(`./assets/images/image-kira.jpg`)} class="card__img" alt="" />
                  <div>
                    <h3>Kira Clifford</h3>
                    <p>Verified Graduate</p>
                  </div>
                </header>
                <p class="card__lead">
                  I received a job offer mid-course, and th subjects I learned were current, if not more so, in the company I joined.
                  I honestly feel i got every penny's worth
                </p>
                <p class="card__quote">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sunt illo. Temporibus velit dolorem fuga eius explicabo perspiciatis, asperiores sit.
                </p>
              </div>


              <div class="card card--bg-gray-blue">
                <header class="card__header">
                  <img src={getAssetPath(`./assets/images/image-patrick.jpg`)} class="card__img" alt="" />
                  <div>
                    <h3>Patrick Clifford</h3>
                    <p>Verified Graduate</p>
                  </div>
                </header>
                <p class="card__lead">
                  I received a job offer mid-course, and th subjects I learned were current, if not more so, in the company I joined.
                  I honestly feel i got every penny's worth
                </p>
                <p class="card__quote">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sunt illo. Temporibus velit dolorem fuga eius explicabo perspiciatis, asperiores sit.
                </p>
              </div>

              <footer>
                <h3>
                  Project from
                  <a href="google.com"> Frontend</a>
                </h3>
              </footer>
            </div>


        );
    }
}

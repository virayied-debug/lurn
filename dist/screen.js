/** A shared, intentionally empty page frame. Screen content can be added later. */
export function screen(title) {
  return `<section class="screen" aria-labelledby="screen-title">
    <h1 id="screen-title" class="page-title">${title}</h1>
    <div class="screen-space" aria-hidden="true"></div>
  </section>`;
}

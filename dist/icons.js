// Consistent outline icons for the three existing destinations.
const paths = {
  courses: '<path d="M12 6.5c-2.3-1.7-5.1-2-8-1.4v13.2c3-.6 5.7-.3 8 1.4 2.3-1.7 5-2 8-1.4V5.1c-2.9-.6-5.7-.3-8 1.4Z"/><path d="M12 6.5v13.2"/>',
  revise: '<path d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5Z"/><path d="M6 11v5.2c3.7 3.1 8.3 3.1 12 0V11M21.5 9v6"/>',
  profile: '<circle cx="12" cy="7.8" r="3.8"/><path d="M4.4 20a7.6 7.6 0 0 1 15.2 0v.7H4.4V20Z"/>',
};
export function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] ?? ''}</svg>`;
}

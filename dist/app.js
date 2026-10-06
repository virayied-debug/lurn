import { courses, bindCourses } from './screens/courses.js';
import { revise, bindRevise } from './screens/revise.js';
import { profile } from './screens/profile.js';
import { icon } from './components/icons.js';

const routes = {
  cours: { label: 'Cours', icon: 'courses', render: courses },
  reviser: { label: 'Réviser', icon: 'revise', render: revise },
  profil: { label: 'Profil', icon: 'profile', render: profile },
};
const content = document.querySelector('#content');
const navigation = document.querySelector('#navigation');
let initialized = false;

function render() {
  const [requested, slug] = location.hash.slice(1).split('/');
  let key = requested;
  if (!Object.hasOwn(routes, key)) {
    key = 'cours';
    history.replaceState(null, '', '#cours');
  }
  const route = routes[key];
  content.innerHTML = key === 'cours' ? courses(slug) : route.render();
  document.querySelector('.app-shell').classList.toggle('showing-subject', key === 'cours' && Boolean(content.querySelector('.subject-detail')));
  navigation.innerHTML = Object.entries(routes).map(([id, item]) =>
    `<a class="nav-item" href="#${id}" ${id === key ? 'aria-current="page"' : ''}><span class="nav-icon">${icon(item.icon)}</span><span>${item.label}</span></a>`
  ).join('');
  document.title = key === 'cours' && slug ? `${content.querySelector('.detail-title h1')?.textContent ?? route.label} · Lurn` : `${route.label} · Lurn`;
  if (initialized) content.focus({ preventScroll: true });
  window.scrollTo(0, 0);
  initialized = true;
}
window.addEventListener('hashchange', render);
bindCourses(content);
bindRevise(content);
render();

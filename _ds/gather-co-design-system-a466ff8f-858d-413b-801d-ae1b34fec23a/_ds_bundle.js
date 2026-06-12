/* @ds-bundle: {"format":3,"namespace":"GatherCoDesignSystem_a466ff","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"FeatureBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuoteForm","sourcePath":"components/forms/QuoteForm.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"bfc47014e566","components/content/ServiceCard.jsx":"54b80fba26d0","components/content/StatBlock.jsx":"684c0f66bcb9","components/content/TestimonialCard.jsx":"00f130d4092f","components/core/Badge.jsx":"e3d1042aea54","components/core/Button.jsx":"a7dc11ac14a7","components/forms/Input.jsx":"5a705ce932fc","components/forms/QuoteForm.jsx":"a0d6bee3a2a3","components/layout/Footer.jsx":"53327e3b4f4e","prototypes/home/home.js":"28499c3eedf5","ui_kits/website/ContentSections.jsx":"dd00ab149d9f","ui_kits/website/HeroSection.jsx":"bbd03df556a2","ui_kits/website/SiteHeader.jsx":"676479175c20"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GatherCoDesignSystem_a466ff = window.GatherCoDesignSystem_a466ff || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Gather & Co — Accordion (FAQ)
   Warm dividers, serif questions, chevron rotates open. Single or multi open. */

const CSS = `
.gc-accordion { font-family: var(--font-body); border-top: var(--border-hair) solid var(--divider-warm); }
.gc-acc-item { border-bottom: var(--border-hair) solid var(--divider-warm); }
.gc-acc-trigger {
  width: 100%; display: flex; align-items: center; justify-content: space-between; gap: var(--space-4);
  background: none; border: none; cursor: pointer; text-align: left;
  padding: var(--space-5) var(--space-2); font-family: var(--font-display);
  font-weight: var(--fw-semibold); font-size: var(--text-lg); color: var(--text-strong);
  transition: color var(--dur-base) var(--ease-out);
}
.gc-acc-trigger:hover { color: var(--brand-primary); }
.gc-acc-trigger:focus-visible { outline: none; box-shadow: var(--shadow-focus); border-radius: var(--radius-sm); }
.gc-acc-chevron { flex: none; width: 24px; height: 24px; color: var(--brand-secondary-hover); transition: transform var(--dur-base) var(--ease-out); }
.gc-acc-item[data-open="true"] .gc-acc-chevron { transform: rotate(180deg); }
.gc-acc-panel { overflow: hidden; transition: height var(--dur-base) var(--ease-out); }
.gc-acc-panel-inner { padding: 0 var(--space-2) var(--space-5); font-size: var(--text-base); line-height: var(--lh-relaxed); color: var(--text-body); max-width: var(--measure); }
`;
if (typeof document !== 'undefined' && !document.getElementById('gc-accordion-styles')) {
  const s = document.createElement('style');
  s.id = 'gc-accordion-styles';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function AccordionItem({
  q,
  a,
  open,
  onToggle
}) {
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState(0);
  React.useEffect(() => {
    if (ref.current) setHeight(open ? ref.current.scrollHeight : 0);
  }, [open, a]);
  return /*#__PURE__*/React.createElement("div", {
    className: "gc-acc-item",
    "data-open": open
  }, /*#__PURE__*/React.createElement("button", {
    className: "gc-acc-trigger",
    "aria-expanded": open,
    onClick: onToggle,
    type: "button"
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("svg", {
    className: "gc-acc-chevron",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.25",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "gc-acc-panel",
    style: {
      height
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gc-acc-panel-inner",
    ref: ref
  }, a)));
}
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = '',
  ...rest
}) {
  const [openSet, setOpenSet] = React.useState(() => new Set(defaultOpen));
  const toggle = i => {
    setOpenSet(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['gc-accordion', className].filter(Boolean).join(' ')
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(AccordionItem, {
    key: i,
    q: it.q,
    a: it.a,
    open: openSet.has(i),
    onToggle: () => toggle(i)
  })));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Gather & Co — Service Card
   Image (or warm placeholder) + title + description + link.
   Soft-rounded, gentle shadow, image zooms on hover, title shifts to brand. */

const CSS = `
.gc-service {
  display: flex; flex-direction: column; overflow: hidden;
  background: var(--surface-card); border-radius: var(--radius-card);
  border: var(--border-hair) solid var(--border-soft); box-shadow: var(--shadow-sm);
  font-family: var(--font-body); text-decoration: none; color: inherit;
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
a.gc-service:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.gc-service__media { position: relative; aspect-ratio: 4 / 3; overflow: hidden; background: var(--teal-100); }
.gc-service__media img { width: 100%; height: 100%; object-fit: cover; transition: transform var(--dur-slow) var(--ease-out); }
a.gc-service:hover .gc-service__media img { transform: scale(1.04); }
.gc-service__ph { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.gc-service__ph svg { width: 40px; height: 40px; opacity: 0.55; }
.gc-service__body { padding: var(--space-5); display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
.gc-service__title { font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--text-lg); color: var(--text-strong); margin: 0; transition: color var(--dur-base) var(--ease-out); }
a.gc-service:hover .gc-service__title { color: var(--brand-primary); }
.gc-service__desc { font-size: var(--text-sm); line-height: var(--lh-relaxed); color: var(--text-muted); margin: 0; flex: 1; }
.gc-service__link { display: inline-flex; align-items: center; gap: 0.4em; font-weight: var(--fw-bold); font-size: var(--text-sm); color: var(--brand-secondary-hover); margin-top: 0.4rem; }
.gc-service__link svg { width: 1em; height: 1em; transition: transform var(--dur-base) var(--ease-out); }
a.gc-service:hover .gc-service__link svg { transform: translateX(3px); }
`;
if (typeof document !== 'undefined' && !document.getElementById('gc-service-styles')) {
  const s = document.createElement('style');
  s.id = 'gc-service-styles';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const tones = {
  teal: 'var(--teal-100)',
  sage: 'var(--sage-100)',
  clay: 'var(--clay-100)',
  sand: 'var(--sand-200)',
  brass: 'var(--brass-100)'
};
const toneFg = {
  teal: 'var(--teal-600)',
  sage: 'var(--sage-700)',
  clay: 'var(--clay-600)',
  sand: 'var(--taupe-500)',
  brass: 'var(--brass-600)'
};
function ServiceCard({
  title,
  description,
  image,
  alt = '',
  href,
  linkLabel = 'Learn More',
  icon,
  tone = 'teal',
  className = '',
  ...rest
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['gc-service', className].filter(Boolean).join(' '),
    href: href
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "gc-service__media",
    style: {
      background: tones[tone] || tones.teal
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt || title
  }) : /*#__PURE__*/React.createElement("span", {
    className: "gc-service__ph",
    style: {
      color: toneFg[tone] || toneFg.teal
    }
  }, icon || /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 15-5-5L5 21"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "gc-service__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "gc-service__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "gc-service__desc"
  }, description), href && /*#__PURE__*/React.createElement("span", {
    className: "gc-service__link"
  }, linkLabel, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.25",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Gather & Co — Stat / Feature Block
   A number or icon + label + supporting line. Used in trust strips and
   feature rows. Two modes: `stat` (big figure) and `feature` (icon + text). */

const CSS = `
.gc-stat { display: flex; flex-direction: column; gap: 0.25rem; font-family: var(--font-body); }
.gc-stat--center { align-items: center; text-align: center; }
.gc-stat__figure { font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--text-3xl); line-height: 1; color: var(--brand-primary); letter-spacing: var(--ls-tight); }
.gc-stat__figure .gc-stat__unit { color: var(--brand-secondary); }
.gc-stat__label { font-size: var(--text-base); font-weight: var(--fw-bold); color: var(--text-strong); }
.gc-stat__sub { font-size: var(--text-sm); color: var(--text-muted); line-height: var(--lh-normal); }

.gc-feature { display: flex; gap: var(--space-4); font-family: var(--font-body); }
.gc-feature__icon { flex: none; width: 52px; height: 52px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; background: var(--sage-100); color: var(--sage-800); }
.gc-feature__icon svg { width: 26px; height: 26px; }
.gc-feature--teal .gc-feature__icon { background: var(--teal-100); color: var(--teal-600); }
.gc-feature--clay .gc-feature__icon { background: var(--clay-100); color: var(--clay-600); }
.gc-feature--brass .gc-feature__icon { background: var(--brass-100); color: var(--brass-700); }
.gc-feature__body { display: flex; flex-direction: column; gap: 0.25rem; }
.gc-feature__title { font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--text-lg); color: var(--text-strong); margin: 0; }
.gc-feature__desc { font-size: var(--text-sm); line-height: var(--lh-relaxed); color: var(--text-muted); margin: 0; }
`;
if (typeof document !== 'undefined' && !document.getElementById('gc-stat-styles')) {
  const s = document.createElement('style');
  s.id = 'gc-stat-styles';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function StatBlock({
  figure,
  unit,
  label,
  sub,
  align = 'start',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['gc-stat', align === 'center' ? 'gc-stat--center' : '', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "gc-stat__figure"
  }, figure, unit && /*#__PURE__*/React.createElement("span", {
    className: "gc-stat__unit"
  }, unit)), label && /*#__PURE__*/React.createElement("span", {
    className: "gc-stat__label"
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    className: "gc-stat__sub"
  }, sub));
}
function FeatureBlock({
  icon,
  title,
  description,
  tone = 'sage',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['gc-feature', 'gc-feature--' + tone, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "gc-feature__icon"
  }, icon || /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "gc-feature__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "gc-feature__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "gc-feature__desc"
  }, description)));
}
Object.assign(__ds_scope, { StatBlock, FeatureBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Gather & Co — Testimonial / Review Card
   Brass ★ rating, warm quote, author with optional avatar + role. */

const CSS = `
.gc-review {
  display: flex; flex-direction: column; gap: var(--space-4);
  background: var(--surface-card); border-radius: var(--radius-card);
  border: var(--border-hair) solid var(--border-soft); box-shadow: var(--shadow-sm);
  padding: var(--space-6); font-family: var(--font-body); height: 100%;
}
.gc-review__stars { display: inline-flex; gap: 2px; font-size: var(--text-md); line-height: 1; color: var(--star-filled); letter-spacing: 1px; }
.gc-review__stars .gc-star-e { color: var(--star-empty); }
.gc-review__quote { font-family: var(--font-display); font-weight: var(--fw-regular); font-size: var(--text-md); line-height: var(--lh-normal); color: var(--text-strong); margin: 0; flex: 1; }
.gc-review__quote::before { content: "\\201C"; }
.gc-review__quote::after { content: "\\201D"; }
.gc-review__author { display: flex; align-items: center; gap: var(--space-3); }
.gc-review__avatar { width: 44px; height: 44px; border-radius: var(--radius-pill); object-fit: cover; flex: none; background: var(--sage-200); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: var(--fw-semibold); color: var(--sage-800); font-size: var(--text-md); }
.gc-review__meta { display: flex; flex-direction: column; gap: 1px; }
.gc-review__name { font-weight: var(--fw-bold); font-size: var(--text-sm); color: var(--text-strong); }
.gc-review__role { font-size: var(--text-xs); color: var(--text-muted); }
`;
if (typeof document !== 'undefined' && !document.getElementById('gc-review-styles')) {
  const s = document.createElement('style');
  s.id = 'gc-review-styles';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Stars({
  rating
}) {
  const full = Math.round(rating);
  return /*#__PURE__*/React.createElement("span", {
    className: "gc-review__stars",
    "aria-label": rating + ' out of 5 stars'
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: i < full ? '' : 'gc-star-e'
  }, i < full ? '★' : '☆')));
}
function TestimonialCard({
  quote,
  name,
  role,
  rating = 5,
  avatar,
  className = '',
  ...rest
}) {
  const initials = (name || '').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: ['gc-review', className].filter(Boolean).join(' '),
    style: {
      margin: 0
    }
  }, rest), /*#__PURE__*/React.createElement(Stars, {
    rating: rating
  }), /*#__PURE__*/React.createElement("blockquote", {
    className: "gc-review__quote"
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    className: "gc-review__author"
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    className: "gc-review__avatar",
    src: avatar,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", {
    className: "gc-review__avatar"
  }, initials), /*#__PURE__*/React.createElement("span", {
    className: "gc-review__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gc-review__name"
  }, name), role && /*#__PURE__*/React.createElement("span", {
    className: "gc-review__role"
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Gather & Co — Badge / Tag
   Small warm labels for service categories, status, "Since 1998", etc. */

const CSS = `
.gc-badge {
  display: inline-flex; align-items: center; gap: 0.4em;
  font-family: var(--font-body); font-weight: var(--fw-bold);
  font-size: var(--text-xs); line-height: 1; letter-spacing: var(--ls-wide);
  padding: 0.5em 0.85em; border-radius: var(--radius-pill);
  background: var(--sage-100); color: var(--sage-800);
  border: var(--border-hair) solid transparent;
}
.gc-badge--teal { background: var(--teal-100); color: var(--teal-700); }
.gc-badge--clay { background: var(--clay-100); color: var(--clay-700); }
.gc-badge--brass { background: var(--brass-100); color: var(--brass-700); }
.gc-badge--sand { background: var(--sand-200); color: var(--taupe-700); }
.gc-badge--outline { background: transparent; border-color: var(--border-strong); color: var(--text-muted); }
.gc-badge--solid-teal { background: var(--teal-700); color: var(--cream-50); }
.gc-badge > svg { width: 1.05em; height: 1.05em; }
`;
if (typeof document !== 'undefined' && !document.getElementById('gc-badge-styles')) {
  const s = document.createElement('style');
  s.id = 'gc-badge-styles';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  tone = 'sage',
  children,
  className = '',
  ...rest
}) {
  const toneClass = {
    sage: '',
    teal: 'gc-badge--teal',
    clay: 'gc-badge--clay',
    brass: 'gc-badge--brass',
    sand: 'gc-badge--sand',
    outline: 'gc-badge--outline',
    'solid-teal': 'gc-badge--solid-teal'
  }[tone] || '';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['gc-badge', toneClass, className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Gather & Co — Button
   Brand CTAs: sage (primary action), teal (secondary brand), outline, ghost. */

const CSS = `
.gc-btn {
  --_bg: var(--brand-secondary);
  --_bg-hover: var(--brand-secondary-hover);
  --_bg-press: var(--brand-secondary-press);
  --_fg: var(--pure-white);
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5em;
  font-family: var(--font-body); font-weight: var(--fw-bold);
  font-size: var(--text-base); line-height: 1;
  padding: 0.85em 1.6em; border-radius: var(--radius-pill);
  background: var(--_bg); color: var(--_fg);
  border: var(--border-thin) solid transparent;
  cursor: pointer; text-decoration: none; white-space: nowrap;
  transition: background var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out);
  box-shadow: var(--shadow-sm);
}
.gc-btn:hover { background: var(--_bg-hover); transform: translateY(-1px); box-shadow: var(--shadow-md); color: var(--_fg); }
.gc-btn:active { background: var(--_bg-press); transform: translateY(0); box-shadow: var(--shadow-xs); }
.gc-btn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }

.gc-btn--teal { --_bg: var(--brand-primary); --_bg-hover: var(--brand-primary-hover); --_bg-press: var(--brand-primary-press); --_fg: var(--cream-50); }
.gc-btn--clay { --_bg: var(--clay-500); --_bg-hover: var(--clay-600); --_bg-press: var(--clay-700); --_fg: var(--pure-white); }

.gc-btn--outline {
  background: transparent; color: var(--brand-primary);
  border-color: var(--border-strong); box-shadow: none;
}
.gc-btn--outline:hover { background: var(--teal-50); border-color: var(--brand-primary); color: var(--brand-primary); box-shadow: none; transform: translateY(-1px); }
.gc-btn--outline:active { background: var(--teal-100); }

.gc-btn--ghost { background: transparent; color: var(--brand-primary); box-shadow: none; padding-left: 0.6em; padding-right: 0.6em; }
.gc-btn--ghost:hover { background: var(--teal-50); box-shadow: none; }

.gc-btn--sm { font-size: var(--text-sm); padding: 0.6em 1.15em; }
.gc-btn--lg { font-size: var(--text-md); padding: 1em 2em; }

.gc-btn--block { display: flex; width: 100%; }
.gc-btn:disabled, .gc-btn[aria-disabled="true"] { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
.gc-btn > svg { width: 1.15em; height: 1.15em; }
`;
if (typeof document !== 'undefined' && !document.getElementById('gc-btn-styles')) {
  const s = document.createElement('style');
  s.id = 'gc-btn-styles';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  variant = 'sage',
  size = 'md',
  block = false,
  as,
  href,
  children,
  className = '',
  ...rest
}) {
  const variantClass = {
    sage: '',
    teal: 'gc-btn--teal',
    clay: 'gc-btn--clay',
    outline: 'gc-btn--outline',
    ghost: 'gc-btn--ghost'
  }[variant] || '';
  const sizeClass = {
    sm: 'gc-btn--sm',
    md: '',
    lg: 'gc-btn--lg'
  }[size] || '';
  const cls = ['gc-btn', variantClass, sizeClass, block ? 'gc-btn--block' : '', className].filter(Boolean).join(' ');
  const Tag = as || (href ? 'a' : 'button');
  const tagProps = Tag === 'a' ? {
    href
  } : {
    type: rest.type || 'button'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, tagProps, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Gather & Co — Input / Field
   Warm inset wells with sage focus ring. Pairs label + input + optional icon. */

const CSS = `
.gc-field { display: flex; flex-direction: column; gap: 0.4rem; font-family: var(--font-body); }
.gc-field__label { font-size: var(--text-sm); font-weight: var(--fw-bold); color: var(--text-strong); }
.gc-field__label .gc-req { color: var(--clay-600); margin-left: 2px; }
.gc-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
.gc-field__wrap { position: relative; display: flex; align-items: center; }
.gc-field__icon { position: absolute; left: 0.85rem; display: flex; color: var(--text-subtle); pointer-events: none; }
.gc-field__icon > svg { width: 1.1rem; height: 1.1rem; }
.gc-input, .gc-textarea, .gc-select {
  width: 100%; font-family: var(--font-body); font-size: var(--text-base);
  color: var(--text-strong); background: var(--surface-sunken);
  border: var(--border-thin) solid var(--border-default);
  border-radius: var(--radius-md); padding: 0.8rem 1rem;
  box-shadow: var(--shadow-inset);
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.gc-input.has-icon { padding-left: 2.6rem; }
.gc-textarea { min-height: 110px; resize: vertical; line-height: var(--lh-relaxed); }
.gc-input::placeholder, .gc-textarea::placeholder { color: var(--text-subtle); }
.gc-input:hover, .gc-textarea:hover, .gc-select:hover { border-color: var(--border-strong); }
.gc-input:focus, .gc-textarea:focus, .gc-select:focus {
  outline: none; background: var(--surface-card);
  border-color: var(--brand-secondary); box-shadow: var(--shadow-focus);
}
.gc-select { appearance: none; cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%236B6557' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='3 6 8 11 13 6'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 1rem center; padding-right: 2.6rem;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('gc-input-styles')) {
  const s = document.createElement('style');
  s.id = 'gc-input-styles';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  required = false,
  icon,
  as = 'input',
  id,
  className = '',
  children,
  ...rest
}) {
  const fieldId = id || (label ? 'gc-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  let control;
  if (as === 'textarea') {
    control = /*#__PURE__*/React.createElement("textarea", _extends({
      id: fieldId,
      className: "gc-textarea"
    }, rest));
  } else if (as === 'select') {
    control = /*#__PURE__*/React.createElement("select", _extends({
      id: fieldId,
      className: "gc-select"
    }, rest), children);
  } else {
    control = /*#__PURE__*/React.createElement("input", _extends({
      id: fieldId,
      className: ['gc-input', icon ? 'has-icon' : ''].filter(Boolean).join(' ')
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: ['gc-field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "gc-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "gc-req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "gc-field__wrap"
  }, icon && as !== 'select' && as !== 'textarea' && /*#__PURE__*/React.createElement("span", {
    className: "gc-field__icon"
  }, icon), control), hint && /*#__PURE__*/React.createElement("span", {
    className: "gc-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuoteForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Gather & Co — Quote Request Form
   The brand's signature lead-capture card: teal header + warm-white body.
   Floats over hero imagery with a soft shadow. */

const CSS = `
.gc-quote {
  width: 100%; max-width: 420px; border-radius: var(--radius-xl); overflow: hidden;
  background: var(--surface-card); box-shadow: var(--shadow-xl); font-family: var(--font-body);
}
.gc-quote__head { background: var(--brand-primary); padding: var(--space-6) var(--space-6) var(--space-5); text-align: center; }
.gc-quote__title { font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--text-2xl); color: var(--cream-50); margin: 0; line-height: var(--lh-snug); }
.gc-quote__sub { font-size: var(--text-base); color: var(--text-on-dark-muted); margin: 0.5rem 0 0; }
.gc-quote__body { padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-4); }
.gc-quote__row { display: flex; gap: var(--space-3); }
.gc-quote__row > * { flex: 1; }
.gc-quote__foot { font-size: var(--text-xs); color: var(--text-muted); text-align: center; margin: 0; }
.gc-quote__foot a { color: var(--brand-primary); font-weight: var(--fw-bold); }
`;
if (typeof document !== 'undefined' && !document.getElementById('gc-quote-styles')) {
  const s = document.createElement('style');
  s.id = 'gc-quote-styles';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const MailIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22 7-10 6L2 7"
}));
const PhoneIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
}));
const PinIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
function QuoteForm({
  title = 'Get Free Quote!',
  subtitle = 'On Baths, Kitchens, Pergolas & More...',
  onSubmit,
  className = '',
  ...rest
}) {
  const handle = e => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };
  return /*#__PURE__*/React.createElement("form", _extends({
    className: ['gc-quote', className].filter(Boolean).join(' '),
    onSubmit: handle
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "gc-quote__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "gc-quote__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "gc-quote__sub"
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "gc-quote__body"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Full Name",
    required: true,
    placeholder: "Full Name",
    name: "name"
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Email",
    required: true,
    type: "email",
    placeholder: "Email",
    name: "email",
    icon: MailIcon
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Phone Number",
    required: true,
    type: "tel",
    placeholder: "Phone Number",
    name: "phone",
    icon: PhoneIcon
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Address",
    placeholder: "Address",
    name: "address",
    icon: PinIcon
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "sage",
    size: "lg",
    block: true,
    type: "submit"
  }, "GET A FREE QUOTE!"), /*#__PURE__*/React.createElement("p", {
    className: "gc-quote__foot"
  }, "Prefer to talk? Call ", /*#__PURE__*/React.createElement("a", {
    href: "tel:2542847718"
  }, "254-284-7718"))));
}
Object.assign(__ds_scope, { QuoteForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuoteForm.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Gather & Co — Footer
   Deep teal panel: brand + contact + socials, link columns, CTA strip, legal bar. */

const CSS = `
.gc-footer { background: var(--surface-inverse); color: var(--text-on-dark); font-family: var(--font-body); }
.gc-footer__cta { background: var(--surface-inverse-deep); padding: var(--space-7) var(--gutter); }
.gc-footer__cta-inner { max-width: var(--content-max); margin: 0 auto; display: flex; flex-wrap: wrap; gap: var(--space-5); align-items: center; justify-content: space-between; }
.gc-footer__cta-text { font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--text-2xl); color: var(--cream-50); margin: 0; max-width: 18ch; line-height: var(--lh-snug); }
.gc-footer__main { max-width: var(--content-max); margin: 0 auto; padding: var(--space-8) var(--gutter) var(--space-6); display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: var(--space-7); }
.gc-footer__brand img { height: 96px; width: auto; margin-bottom: var(--space-4); }
.gc-footer__tagline { font-size: var(--text-sm); line-height: var(--lh-relaxed); color: var(--text-on-dark-muted); max-width: 32ch; margin: 0 0 var(--space-4); }
.gc-footer__col h4 { font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--text-md); color: var(--cream-50); margin: 0 0 var(--space-4); }
.gc-footer__col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--space-3); }
.gc-footer__col a { color: var(--text-on-dark-muted); font-size: var(--text-sm); text-decoration: none; transition: color var(--dur-base) var(--ease-out); }
.gc-footer__col a:hover { color: var(--sage-300); }
.gc-footer__contact { display: flex; flex-direction: column; gap: var(--space-3); font-size: var(--text-sm); }
.gc-footer__contact a, .gc-footer__contact span { display: inline-flex; align-items: flex-start; gap: 0.55em; color: var(--cream-50); font-weight: var(--fw-semibold); text-decoration: none; }
.gc-footer__contact span { color: var(--text-on-dark-muted); font-weight: var(--fw-regular); }
.gc-footer__contact svg { width: 18px; height: 18px; color: var(--sage-400); flex: none; margin-top: 2px; }
.gc-footer__socials { display: flex; gap: var(--space-3); margin-top: var(--space-5); }
.gc-footer__socials a { width: 40px; height: 40px; border-radius: var(--radius-pill); border: var(--border-hair) solid var(--border-on-dark); display: grid; place-items: center; color: var(--cream-50); transition: background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out); }
.gc-footer__socials a:hover { background: var(--sage-500); border-color: var(--sage-500); color: #fff; }
.gc-footer__socials svg { width: 18px; height: 18px; }
.gc-footer__bar { border-top: var(--border-hair) solid var(--border-on-dark); }
.gc-footer__bar-inner { max-width: var(--content-max); margin: 0 auto; padding: var(--space-5) var(--gutter); display: flex; flex-wrap: wrap; gap: var(--space-4); align-items: center; justify-content: space-between; font-size: var(--text-xs); color: var(--text-on-dark-muted); }
.gc-footer__bar a { color: var(--text-on-dark-muted); text-decoration: none; }
.gc-footer__bar a:hover { color: var(--sage-300); }
@media (max-width: 820px) { .gc-footer__main { grid-template-columns: 1fr 1fr; } }
@media (max-width: 520px) { .gc-footer__main { grid-template-columns: 1fr; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('gc-footer-styles')) {
  const s = document.createElement('style');
  s.id = 'gc-footer-styles';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Pin = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Phone = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
}));
const Mail = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22 7-10 6L2 7"
}));
const SOCIAL_ICONS = {
  facebook: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  })),
  twitter: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
  })),
  youtube: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
  }))
};
function Footer({
  logo = '/assets/logo-on-teal.png',
  tagline = '',
  ctaText = '',
  ctaButton,
  columns,
  phone = '254-284-7718',
  email = '',
  address = 'Greater Waco, Texas',
  socials = [],
  copyright,
  legalLinks = [],
  className = '',
  ...rest
}) {
  const cols = columns || [{
    title: 'Services',
    links: ['Bathrooms', 'Kitchens', 'Pergolas', 'Patio Covers', 'Sunrooms', 'Aging in Place']
  }, {
    title: 'Company',
    links: ['About Us', 'Our Work', 'Reviews', 'Contact']
  }];
  const copy = copyright || '© ' + new Date().getFullYear() + ' Gather & Co Kitchen & Bath';
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: ['gc-footer', className].filter(Boolean).join(' ')
  }, rest), ctaText && /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__cta-inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "gc-footer__cta-text"
  }, ctaText), ctaButton)), /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Gather & Co Kitchen & Bath"
  }), tagline && /*#__PURE__*/React.createElement("p", {
    className: "gc-footer__tagline"
  }, tagline), /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__contact"
  }, phone && /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + phone.replace(/[^0-9]/g, '')
  }, Phone, phone), email && /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email
  }, Mail, email), address && /*#__PURE__*/React.createElement("span", null, Pin, address)), socials.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__socials"
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.type,
    href: s.href || '#',
    "aria-label": s.type
  }, SOCIAL_ICONS[s.type] || null)))), cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__col",
    key: i
  }, /*#__PURE__*/React.createElement("h4", null, c.title), /*#__PURE__*/React.createElement("ul", null, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__bar-inner"
  }, /*#__PURE__*/React.createElement("span", null, copy), legalLinks.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: '1.25rem'
    }
  }, legalLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#"
  }, l))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// prototypes/home/home.js
try { (() => {
/* Gather & Co — New Home Page · behavior + icon injection */
(function () {
  // ---- Lucide-style inline icons (stroke 1.75, currentColor) ----
  const S = (inner, w) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w || 1.75}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
  const ICONS = {
    phone: S('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>'),
    mail: S('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    user: S('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    pin: S('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
    menu: S('<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>', 2),
    check: S('<polyline points="20 6 9 17 4 12"/>', 2.2),
    checkbig: S('<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>'),
    arrow: S('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>', 2.2),
    chevron: S('<polyline points="6 9 12 15 18 9"/>', 2.2),
    // services
    bath: S('<path d="M4 12V5a2 2 0 0 1 2-2 2 2 0 0 1 2 2"/><line x1="4" y1="12" x2="20" y2="12"/><path d="M2 12h20v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><line x1="6" y1="22" x2="6" y2="20"/><line x1="18" y1="22" x2="18" y2="20"/>'),
    shower: S('<path d="M4 4 2.5 5.5"/><path d="M9 5a3 3 0 0 0-3 3v10"/><path d="M9 5h2a8 8 0 0 1 8 8v0"/><circle cx="9" cy="20" r=".5"/><circle cx="13" cy="20" r=".5"/><circle cx="17" cy="20" r=".5"/><circle cx="11" cy="22" r=".5"/><circle cx="15" cy="22" r=".5"/>'),
    droplet: S('<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>'),
    swap: S('<path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>'),
    kitchen: S('<path d="M8 2v8M5 2v3a3 3 0 0 0 3 3"/><path d="M16 2c-1.5 0-2.5 1.8-2.5 4s1 4 2.5 4"/><path d="M8 10v12M16 10v12"/>'),
    patio: S('<path d="M3 9 12 3l9 6"/><path d="M5 9v12M19 9v12M5 13h14M5 17h14"/>'),
    sun: S('<path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/>'),
    trees: S('<path d="M12 22v-7"/><path d="M9 9a3 3 0 0 1 6 0"/><path d="M7 15a4 4 0 0 1 10 0"/><path d="M5 9h14"/>'),
    // why-choose
    ruler: S('<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2"/>'),
    hammer: S('<path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/>'),
    clock: S('<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>'),
    search: S('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>'),
    heart: S('<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>'),
    dollar: S('<line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'),
    facebook: S('<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'),
    twitter: S('<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>'),
    youtube: S('<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>')
  };
  document.querySelectorAll('[data-ic]').forEach(el => {
    const k = el.getAttribute('data-ic');
    if (ICONS[k]) el.innerHTML = ICONS[k];
  });

  // ---- sticky header shadow ----
  const hdr = document.querySelector('.hdr');
  const onScroll = () => {
    if (hdr) hdr.classList.toggle('is-stuck', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, {
    passive: true
  });

  // ---- mobile nav ----
  const burger = document.querySelector('.hdr__burger');
  const mobile = document.querySelector('.hdr__mobile');
  if (burger && mobile) {
    burger.addEventListener('click', () => mobile.classList.toggle('open'));
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
  }

  // ---- smooth anchor scroll (account for sticky header) ----
  function scrollToSel(sel) {
    const el = document.querySelector(sel);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({
      top: Math.max(0, y),
      behavior: 'smooth'
    });
  }
  document.querySelectorAll('[data-scroll]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      scrollToSel(el.getAttribute('data-scroll'));
    });
  });

  // ---- accordion ----
  document.querySelectorAll('.faq__item').forEach(item => {
    const q = item.querySelector('.faq__q');
    const panel = item.querySelector('.faq__panel');
    const inner = item.querySelector('.faq__panel-in');
    const setH = () => {
      panel.style.height = item.classList.contains('open') ? inner.scrollHeight + 'px' : '0px';
    };
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq__item.open').forEach(o => {
        if (o !== item) {
          o.classList.remove('open');
          o.querySelector('.faq__panel').style.height = '0px';
          o.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.toggle('open', !isOpen);
      q.setAttribute('aria-expanded', String(!isOpen));
      setH();
    });
    window.addEventListener('resize', () => {
      if (item.classList.contains('open')) setH();
    });
  });
  // open first FAQ by default
  const firstFaq = document.querySelector('.faq__item');
  if (firstFaq) {
    firstFaq.classList.add('open');
    firstFaq.querySelector('.faq__q').setAttribute('aria-expanded', 'true');
    const inn = firstFaq.querySelector('.faq__panel-in');
    firstFaq.querySelector('.faq__panel').style.height = inn.scrollHeight + 'px';
  }

  // ---- quote form submit ----
  const form = document.querySelector('#quote-form');
  const card = document.querySelector('.qcard');
  const toast = document.querySelector('.toast');
  let toastTimer;
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (card) card.classList.add('sent');
      if (toast) {
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
      }
    });
  }

  // ---- reveal on scroll (scroll-based for reliability across environments) ----
  const revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  function checkReveal() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    for (let i = revealEls.length - 1; i >= 0; i--) {
      const el = revealEls[i];
      if (el.getBoundingClientRect().top < vh * 0.92) {
        el.classList.add('is-in');
        revealEls.splice(i, 1);
      }
    }
  }
  checkReveal();
  window.addEventListener('scroll', checkReveal, {
    passive: true
  });
  window.addEventListener('resize', checkReveal);
  window.addEventListener('load', checkReveal);
  // safety: ensure nothing stays hidden if scroll events never arrive
  setTimeout(checkReveal, 600);

  // ---- footer year ----
  const yr = document.querySelector('#year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/home/home.js", error: String((e && e.message) || e) }); }

// ui_kits/website/ContentSections.jsx
try { (() => {
/* Gather & Co — Website UI Kit · Content Sections
   Services grid, trust strip, reviews, FAQ, and a contact band. */

(function () {
  const {
    ServiceCard,
    StatBlock,
    FeatureBlock,
    TestimonialCard,
    Accordion,
    QuoteForm,
    Button
  } = window.GatherCoDesignSystem_a466ff;
  const css = `
  .kit-sec { max-width: 1240px; margin: 0 auto; padding: var(--space-9) var(--gutter); }
  .kit-sec--sand { background: var(--cream-50); }
  .kit-sec__head { max-width: 640px; margin-bottom: var(--space-7); }
  .kit-sec__head--center { margin-left: auto; margin-right: auto; text-align: center; }
  .kit-sec__title { font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: clamp(2rem, 3.6vw, 2.875rem); line-height: 1.12; letter-spacing: -0.02em; color: var(--text-strong); margin: 0 0 var(--space-3); }
  .kit-sec__lede { font-size: var(--text-md); line-height: var(--lh-relaxed); color: var(--text-muted); margin: 0; }
  .kit-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-5); }
  @media (max-width: 900px) { .kit-services-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .kit-services-grid { grid-template-columns: 1fr; } }

  .kit-trust { background: var(--teal-700); }
  .kit-trust__inner { max-width: 1240px; margin: 0 auto; padding: var(--space-7) var(--gutter); display: flex; flex-wrap: wrap; gap: var(--space-7); justify-content: space-around; }
  .kit-trust .gc-stat__figure { color: var(--sage-300); }
  .kit-trust .gc-stat__figure .gc-stat__unit { color: var(--brass-400); }
  .kit-trust .gc-stat__label { color: var(--cream-50); }
  .kit-trust .gc-stat__sub { color: var(--text-on-dark-muted); }

  .kit-reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-5); }
  @media (max-width: 900px) { .kit-reviews-grid { grid-template-columns: 1fr; } }

  .kit-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-5); }
  .kit-step { position: relative; background: var(--surface-card); border: 1px solid var(--border-soft); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-3); overflow: hidden; transition: transform .25s var(--ease-out), box-shadow .25s var(--ease-out); }
  .kit-step:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
  .kit-step__num { position: absolute; top: 6px; right: 20px; font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: 88px; line-height: 1; color: var(--sand-200); pointer-events: none; user-select: none; }
  .kit-step__icon { position: relative; width: 60px; height: 60px; border-radius: var(--radius-md); display: grid; place-items: center; }
  .kit-step__icon svg { width: 30px; height: 30px; }
  .kit-step[data-tone="sage"] .kit-step__icon { background: var(--sage-100); color: var(--sage-800); }
  .kit-step[data-tone="teal"] .kit-step__icon { background: var(--teal-100); color: var(--teal-700); }
  .kit-step[data-tone="clay"] .kit-step__icon { background: var(--clay-100); color: var(--clay-600); }
  .kit-step__title { position: relative; font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--text-xl); color: var(--text-strong); margin: var(--space-2) 0 0; line-height: var(--lh-snug); }
  .kit-step__desc { position: relative; font-size: var(--text-sm); line-height: var(--lh-relaxed); color: var(--text-muted); margin: 0; }
  .kit-steps__cta { text-align: center; margin-top: var(--space-7); }
  @media (max-width: 900px) { .kit-steps { grid-template-columns: 1fr; } }

  .kit-why { display: grid; grid-template-columns: 1.1fr 1fr; gap: var(--space-8); align-items: center; }
  .kit-why__feats { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); }
  @media (max-width: 860px) { .kit-why { grid-template-columns: 1fr; } .kit-why__feats { grid-template-columns: 1fr; } }
  .kit-why__photo { border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg); aspect-ratio: 3/4; background-image: url('../../assets/why-blueprints.jpg'); background-size: cover; background-position: center; }

  .kit-faq { display: grid; grid-template-columns: 1fr 1.4fr; gap: var(--space-8); align-items: start; }
  @media (max-width: 860px) { .kit-faq { grid-template-columns: 1fr; } }

  .kit-contact { position: relative; background: var(--teal-800); overflow: hidden; }
  .kit-contact::before { content: ""; position: absolute; inset: 0; background: url('../../assets/hero-pergola.jpg') center 30%/cover no-repeat; opacity: .16; }
  .kit-contact::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(16,46,59,.82) 0%, rgba(16,46,59,.94) 78%); }
  .kit-contact__inner { position: relative; z-index: 1; max-width: 1240px; margin: 0 auto; padding: var(--space-9) var(--gutter); display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px,4vw,64px); align-items: stretch; }
  .kit-contact__photo { border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-xl); background: url('../../assets/cta-family.jpg') center/cover no-repeat; min-height: 360px; }
  .kit-contact__right { display: flex; flex-direction: column; gap: var(--space-5); justify-content: center; }
  .kit-contact__title { font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: clamp(2rem, 4vw, 3rem); line-height: 1.1; letter-spacing: -0.02em; margin: 0; color: var(--cream-50); }
  .kit-contact__lede { font-size: var(--text-md); line-height: var(--lh-relaxed); color: var(--text-on-dark-muted); margin: 0; }
  @media (max-width: 860px) { .kit-contact__inner { grid-template-columns: 1fr; } .kit-contact__photo { min-height: 0; aspect-ratio: 3/2; order: -1; } }
  `;
  (function injectSectionsCSS() {
    let s = document.getElementById('kit-sections-styles');
    if (!s) {
      s = document.createElement('style');
      s.id = 'kit-sections-styles';
      document.head.appendChild(s);
    }
    s.textContent = css;
  })();

  // --- icons ---
  const ic = p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p);
  const Bath = ic(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M4 12V5a2 2 0 0 1 2-2 2 2 0 0 1 2 2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "12",
    x2: "20",
    y2: "12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12h20v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "22",
    x2: "6",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "22",
    x2: "18",
    y2: "20"
  })));
  const Kitchen = ic(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M8 2v8M5 2v3a3 3 0 0 0 3 3M16 2c-1.5 0-2.5 1.8-2.5 4s1 4 2.5 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10v12M16 10v12"
  })));
  const Tree = ic(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22v-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9a3 3 0 0 1 6 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 15a4 4 0 0 1 10 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9h14"
  })));
  const Sun = ic(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M3 21h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 21V8l7-5 7 5v13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21v-6h6v6"
  })));
  const Patio = ic(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-6 9 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 9v12M20 9v12M4 13h16M4 17h16"
  })));
  const Access = ic(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "4",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 13v-2a7 7 0 0 0-14 0v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v6l4 6M12 14l-4 6"
  })));
  const Shower = ic(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M4 4 2.5 5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 5a3 3 0 0 0-3 3v10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 5h2a8 8 0 0 1 8 8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "20",
    r: ".5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "13",
    cy: "20",
    r: ".5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "20",
    r: ".5"
  })));
  const Droplet = ic(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
  })));
  const Swap = ic(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "m16 3 4 4-4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 7H4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8 21-4-4 4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 17h16"
  })));
  const SERVICES = [{
    title: 'Bathroom Remodeling',
    tone: 'teal',
    icon: Bath,
    image: '../../assets/service-bathroom.jpg',
    desc: "We handle complete renovations, from updating outdated fixtures to creating modern, stylish bathrooms that fit your lifestyle. Our team works closely with you to design a space that meets both your functional needs and aesthetic preferences."
  }, {
    title: 'Showers',
    tone: 'clay',
    icon: Shower,
    image: '../../assets/service-showers.jpg',
    desc: "Whether you're looking for a custom walk-in shower, a luxurious tiled enclosure, or enhanced accessibility features, we offer a variety of options to suit your needs and style. Our designs are built to last, providing comfort and durability."
  }, {
    title: 'Baths',
    tone: 'teal',
    icon: Droplet,
    image: '../../assets/service-baths.jpg',
    desc: "Enjoy a relaxing soak with our new bathtub installations, including freestanding tubs, clawfoot tubs, and custom solutions. We also specialize in creating more accessible bathing options for enhanced safety and comfort."
  }, {
    title: 'Bath Conversions',
    tone: 'brass',
    icon: Swap,
    image: '../../assets/service-conversions.jpg',
    desc: "Want to convert your bathtub into a spacious, easy-access shower or vice versa? Our bath conversion services are designed to give you the best of both worlds \u2014 combining functionality with style. Whether you're downsizing or upgrading, we ensure your new bath layout meets your specific needs."
  }, {
    title: 'Kitchen Remodeling',
    tone: 'sage',
    icon: Kitchen,
    image: '../../assets/service-kitchen.jpg',
    desc: "From concept to completion, we provide full kitchen renovations that include custom cabinetry, modern countertops, new flooring, and high-quality appliances. Our kitchen remodels are designed to improve your space, making it more functional and visually appealing, all while increasing the overall value of your home."
  }, {
    title: 'Patio Covers',
    tone: 'sage',
    icon: Patio,
    image: '../../assets/service-patio.jpg',
    desc: "Protect and enhance your outdoor space with Gather & Co's custom patio covers. Designed for durability and style, our patio covers provide shade and weather protection, making your outdoor area more comfortable year-round."
  }, {
    title: 'Sunrooms',
    tone: 'clay',
    icon: Sun,
    image: '../../assets/service-sunrooms.jpg',
    desc: "Expand your living space with Gather & Co's custom sunrooms. Designed to bring the outdoors in, our sunrooms provide a bright, comfortable area to enjoy year-round, free from bugs and weather elements."
  }, {
    title: 'Outdoor Spaces',
    tone: 'teal',
    icon: Tree,
    image: '../../assets/service-outdoor.jpg',
    desc: "Transform your backyard with Gather & Co's custom outdoor spaces. Whether it's a pergola, patio cover, or sunroom, we design and build functional, stylish areas that enhance your home's exterior and outdoor living experience."
  }];
  const REVIEWS = [{
    rating: 5,
    name: 'Emily T.',
    quote: "The team completely transformed our kitchen! From the initial consultation to the final reveal, everything was smooth and professional. The attention to detail was incredible, and the quality of work exceeded our expectations. Highly recommend to anyone looking for a home remodel!"
  }, {
    rating: 5,
    name: 'John & Sarah M.',
    quote: "We couldn't be happier with our bathroom renovation. The design team really listened to our needs and came up with a solution that fit our space perfectly. The work was completed on time, and the craftsmanship is top-notch. We feel like we have a brand new home!"
  }, {
    rating: 5,
    name: 'Mark R.',
    quote: "From the moment we started working together, we felt completely supported throughout our project. The crew was friendly, efficient, and respectful of our home. Our outdoor space looks amazing now! We've already received compliments from our neighbors!"
  }];
  const FAQS = [{
    q: 'What is the process of cabinet refacing?',
    a: 'Cabinet refacing is the process of cabinet resurfacing. This involves removing the existing cabinet doors, drawer fronts, and hardware. The cabinet boxes are then sanded and a new finish is applied. New doors and drawer fronts are then installed, and new hardware is added.'
  }, {
    q: 'What does the process of a bath installation look like?',
    a: 'Contact us at 254-284-7718 to learn more.'
  }, {
    q: 'What is a shower base and why do I need it?',
    a: 'Contact us at 254-284-7718 to learn more.'
  }, {
    q: 'What features do your walk-in bathtubs come with?',
    a: 'Contact us at 254-284-7718 to learn more.'
  }, {
    q: 'Which is better, a tiled shower or an acrylic shower?',
    a: 'Contact us at 254-284-7718 to learn more.'
  }];
  function ServicesSection() {
    return /*#__PURE__*/React.createElement("section", {
      className: "kit-sec",
      id: "services"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-sec__head kit-sec__head--center"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "kit-sec__title"
    }, "Greater Waco's Choice For Home Improvement")), /*#__PURE__*/React.createElement("div", {
      className: "kit-services-grid"
    }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
      key: s.title,
      tone: s.tone,
      icon: s.icon,
      image: s.image,
      title: s.title,
      description: s.desc,
      href: "#",
      linkLabel: "Learn More"
    }))));
  }
  function TrustStrip() {
    return /*#__PURE__*/React.createElement("div", {
      className: "kit-trust"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-trust__inner"
    }, /*#__PURE__*/React.createElement(StatBlock, {
      figure: "25",
      unit: "+",
      label: "Years of Craft",
      sub: "Family-owned since 1998",
      align: "center"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      figure: "1,200",
      unit: "+",
      label: "Homes Transformed",
      sub: "Across Greater Waco",
      align: "center"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      figure: "5.0",
      unit: "\u2605",
      label: "Average Review",
      sub: "From 240+ neighbors",
      align: "center"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      figure: "100",
      unit: "%",
      label: "Workmanship Warranty",
      sub: "Backed in writing",
      align: "center"
    })));
  }
  function WhySection() {
    return /*#__PURE__*/React.createElement("section", {
      className: "kit-sec kit-sec--sand",
      id: "about"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-why"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "kit-sec__title"
    }, "We're Committed To Delivering Excellence"), /*#__PURE__*/React.createElement("div", {
      className: "kit-why__feats",
      style: {
        marginTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(FeatureBlock, {
      tone: "sage",
      title: "Personalized Design",
      description: "We work closely with you, crafting customized solutions that reflect your unique style and needs."
    }), /*#__PURE__*/React.createElement(FeatureBlock, {
      tone: "teal",
      title: "Quality Craftsmanship",
      description: "Our skilled team ensures each project is completed with careful detail and high-quality materials."
    }), /*#__PURE__*/React.createElement(FeatureBlock, {
      tone: "clay",
      title: "Timely Completion",
      description: "We respect your time and aim for on-schedule project completion without compromising quality"
    }), /*#__PURE__*/React.createElement(FeatureBlock, {
      tone: "brass",
      title: "Attention To Detail",
      description: "Every project is meticulously planned and executed, ensuring no detail is overlooked."
    }), /*#__PURE__*/React.createElement(FeatureBlock, {
      tone: "sage",
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We guarantee exceptional results that enhance your home and lifestyle."
    }))), /*#__PURE__*/React.createElement("div", {
      className: "kit-why__photo",
      role: "img",
      "aria-label": "A finished project by Gather & Co"
    })));
  }
  function ProcessSection({
    onQuote
  }) {
    const Clipboard = ic(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "4",
      width: "14",
      height: "17",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 13 2 2 4-4"
    })));
    const Ruler = ic(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2"
    })));
    const Hammer = ic(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.64 15 22 10.64"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"
    })));
    const STEPS = [{
      n: '1',
      tone: 'sage',
      icon: Clipboard,
      title: 'Step 1: Consultation',
      desc: 'We start with a free in-home consultation to discuss your goals and create a custom design that fits your needs and budget.'
    }, {
      n: '2',
      tone: 'teal',
      icon: Ruler,
      title: 'Step 2: Planning & Customization',
      desc: 'We finalize the design, plan the timeline, and select materials, ensuring every detail is tailored to your preferences.'
    }, {
      n: '3',
      tone: 'clay',
      icon: Hammer,
      title: 'Step 3: Execution & Completion',
      desc: 'Our skilled team executes the remodel, ensuring top-quality results and a smooth process, with a final walkthrough to guarantee your satisfaction.'
    }];
    return /*#__PURE__*/React.createElement("section", {
      className: "kit-sec",
      id: "process"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-sec__head kit-sec__head--center"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "kit-sec__title"
    }, "Working With Us Is As Easy As 1, 2, 3\u2026")), /*#__PURE__*/React.createElement("div", {
      className: "kit-steps"
    }, STEPS.map(s => /*#__PURE__*/React.createElement("article", {
      className: "kit-step",
      key: s.n,
      "data-tone": s.tone
    }, /*#__PURE__*/React.createElement("span", {
      className: "kit-step__num"
    }, s.n), /*#__PURE__*/React.createElement("span", {
      className: "kit-step__icon"
    }, s.icon), /*#__PURE__*/React.createElement("h3", {
      className: "kit-step__title"
    }, s.title), /*#__PURE__*/React.createElement("p", {
      className: "kit-step__desc"
    }, s.desc)))), /*#__PURE__*/React.createElement("div", {
      className: "kit-steps__cta"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "sage",
      size: "lg",
      onClick: onQuote
    }, "Get Free Quote")));
  }
  function FaqSection() {
    return /*#__PURE__*/React.createElement("section", {
      className: "kit-sec kit-sec--sand",
      id: "faq"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-faq"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "kit-sec__title"
    }, "Frequently Asked Questions")), /*#__PURE__*/React.createElement(Accordion, {
      defaultOpen: [0],
      items: FAQS
    })));
  }
  function ContactSection({
    formRef,
    onSubmit
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "kit-contact",
      id: "contact"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-contact__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-contact__photo",
      role: "img",
      "aria-label": "A happy family enjoying time together outdoors"
    }), /*#__PURE__*/React.createElement("div", {
      className: "kit-contact__right",
      ref: formRef
    }, /*#__PURE__*/React.createElement("h2", {
      className: "kit-contact__title"
    }, "Ready To Transform Your Home With Gather & Co?"), /*#__PURE__*/React.createElement(QuoteForm, {
      onSubmit: onSubmit
    }))));
  }
  Object.assign(window, {
    ServicesSection,
    TrustStrip,
    WhySection,
    ProcessSection,
    FaqSection,
    ContactSection
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContentSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroSection.jsx
try { (() => {
/* Gather & Co — Website UI Kit · Hero
   Primary: a draggable BEFORE / AFTER kitchen-remodel comparison carrying the
   headline "Transforming Houses Into Homes" (Homes highlighted in sage).
   Secondary: the Get Free Quote box, in its own band directly below. */

(function () {
  const {
    QuoteForm
  } = window.GatherCoDesignSystem_a466ff;

  // Laurel-sprig underline echoing the logo's olive branches (sage).
  const LAUREL = '<svg viewBox="0 0 220 50" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M 110 33 Q 156 43 210 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><g transform="translate(119.3 34.6) rotate(-30.9)"><path d="M0 0 C 6.8 -7.0, 13.5 -2.5, 13.5 0 C 13.5 2.5, 6.8 7.0, 0 0 Z"/></g><g transform="translate(131.2 35.4) rotate(30.6)"><path d="M0 0 C 6.3 -6.5, 12.6 -2.3, 12.6 0 C 12.6 2.3, 6.3 6.5, 0 0 Z"/></g><g transform="translate(143.3 34.8) rotate(-43.6)"><path d="M0 0 C 5.8 -6.0, 11.6 -2.1, 11.6 0 C 11.6 2.1, 5.8 6.0, 0 0 Z"/></g><g transform="translate(155.7 33.0) rotate(18.6)"><path d="M0 0 C 5.3 -5.5, 10.7 -1.9, 10.7 0 C 10.7 1.9, 5.3 5.5, 0 0 Z"/></g><g transform="translate(168.4 29.8) rotate(-54.8)"><path d="M0 0 C 4.8 -5.0, 9.7 -1.8, 9.7 0 C 9.7 1.8, 4.8 5.0, 0 0 Z"/></g><g transform="translate(181.3 25.3) rotate(8.3)"><path d="M0 0 C 4.4 -4.5, 8.8 -1.6, 8.8 0 C 8.8 1.6, 4.4 4.5, 0 0 Z"/></g><g transform="translate(194.4 19.4) rotate(-64.1)"><path d="M0 0 C 3.9 -4.1, 7.8 -1.4, 7.8 0 C 7.8 1.4, 3.9 4.1, 0 0 Z"/></g><g transform="translate(207.8 12.3) rotate(-0.1)"><path d="M0 0 C 3.4 -3.6, 6.9 -1.2, 6.9 0 C 6.9 1.2, 3.4 3.6, 0 0 Z"/></g><g transform="translate(220 0) scale(-1 1)"><path d="M 110 33 Q 156 43 210 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><g transform="translate(119.3 34.6) rotate(-30.9)"><path d="M0 0 C 6.8 -7.0, 13.5 -2.5, 13.5 0 C 13.5 2.5, 6.8 7.0, 0 0 Z"/></g><g transform="translate(131.2 35.4) rotate(30.6)"><path d="M0 0 C 6.3 -6.5, 12.6 -2.3, 12.6 0 C 12.6 2.3, 6.3 6.5, 0 0 Z"/></g><g transform="translate(143.3 34.8) rotate(-43.6)"><path d="M0 0 C 5.8 -6.0, 11.6 -2.1, 11.6 0 C 11.6 2.1, 5.8 6.0, 0 0 Z"/></g><g transform="translate(155.7 33.0) rotate(18.6)"><path d="M0 0 C 5.3 -5.5, 10.7 -1.9, 10.7 0 C 10.7 1.9, 5.3 5.5, 0 0 Z"/></g><g transform="translate(168.4 29.8) rotate(-54.8)"><path d="M0 0 C 4.8 -5.0, 9.7 -1.8, 9.7 0 C 9.7 1.8, 4.8 5.0, 0 0 Z"/></g><g transform="translate(181.3 25.3) rotate(8.3)"><path d="M0 0 C 4.4 -4.5, 8.8 -1.6, 8.8 0 C 8.8 1.6, 4.4 4.5, 0 0 Z"/></g><g transform="translate(194.4 19.4) rotate(-64.1)"><path d="M0 0 C 3.9 -4.1, 7.8 -1.4, 7.8 0 C 7.8 1.4, 3.9 4.1, 0 0 Z"/></g><g transform="translate(207.8 12.3) rotate(-0.1)"><path d="M0 0 C 3.4 -3.6, 6.9 -1.2, 6.9 0 C 6.9 1.2, 3.4 3.6, 0 0 Z"/></g></g><circle cx="110" cy="33" r="2.6"/></svg>';
  const css = `
  .kit-hero { position: relative; overflow: hidden; background: var(--teal-800); }
  .kit-hero__bg { position: absolute; inset: 0; background: url('../../assets/hero-pergola.jpg') center 30%/cover no-repeat; opacity: .16; }
  .kit-hero__scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(16,46,59,.82) 0%, rgba(16,46,59,.94) 78%); }
  .kit-hero__in { position: relative; max-width: 1180px; margin: 0 auto; padding: clamp(46px,6.5vw,84px) var(--gutter) clamp(40px,6vw,72px); }
  .kit-hero__head { text-align: center; margin: 0 auto clamp(28px,3.6vw,46px); }
  .kit-hero__title { font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: clamp(2.7rem,6vw,4.6rem); line-height: 1.03; letter-spacing: -0.025em; margin: 0; color: var(--cream-50); text-wrap: balance; }
  .kit-hero__title .hl { position: relative; display: inline-block; }
  .kit-hero__title .hl .kit-laurel { position: absolute; left: 50%; bottom: -0.46em; width: 124%; transform: translateX(-50%); color: var(--sage-400); line-height: 0; pointer-events: none; }
  .kit-hero__title .hl .kit-laurel svg { width: 100%; height: auto; display: block; }
  .kit-hero__sub { font-family: var(--font-display); font-weight: var(--fw-regular); font-size: clamp(var(--text-md),2vw,var(--text-lg)); color: var(--text-on-dark-muted); margin: var(--space-5) auto 0; max-width: 40ch; line-height: var(--lh-normal); }

  /* before / after */
  .kit-ba { position: relative; width: 100%; max-width: 1040px; margin: 0 auto; aspect-ratio: 16 / 9; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-xl); border: 1px solid var(--border-on-dark); user-select: none; touch-action: none; cursor: ew-resize; }
  .kit-ba__layer { position: absolute; inset: 0; display: grid; place-items: center; }
  .kit-ba__after { background: url('../../assets/kitchen-after.webp') center/cover no-repeat; }
  .kit-ba__before { background: url('../../assets/kitchen-before.webp') center/cover no-repeat; }
  .kit-ba__icon { width: 16%; min-width: 58px; max-width: 116px; }
  .kit-ba__after .kit-ba__icon { color: var(--teal-600); opacity: .5; }
  .kit-ba__before .kit-ba__icon { color: var(--cream-50); opacity: .5; }
  .kit-ba__tag { position: absolute; top: 16px; font-family: var(--font-body); font-weight: var(--fw-bold); font-size: var(--text-xs); letter-spacing: .06em; text-transform: uppercase; padding: 6px 13px; border-radius: var(--radius-pill); }
  .kit-ba__tag--before { left: 16px; background: rgba(28,42,48,.72); color: var(--cream-50); }
  .kit-ba__tag--after { right: 16px; background: var(--sage-600); color: #fff; }
  .kit-ba__divider { position: absolute; top: 0; bottom: 0; width: 3px; background: var(--cream-50); transform: translateX(-1.5px); box-shadow: 0 0 0 1px rgba(28,42,48,.12); }
  .kit-ba__handle { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 50px; height: 50px; border-radius: 50%; background: var(--cream-50); border: none; box-shadow: var(--shadow-md); display: grid; place-items: center; color: var(--teal-700); cursor: ew-resize; }
  .kit-ba__handle svg { width: 24px; height: 24px; }
  .kit-ba__hint { text-align: center; font-family: var(--font-body); font-size: var(--text-xs); letter-spacing: .04em; color: var(--text-on-dark-muted); margin: var(--space-4) 0 0; display: inline-flex; align-items: center; gap: .5em; }
  .kit-ba__hint svg { width: 15px; height: 15px; }
  .kit-ba__hintwrap { text-align: center; }

  /* quote band (second): social proof (left) + quote box (right) */
  .kit-qband { position: relative; background: var(--sand-100); border-top: 1px solid var(--border-soft); }
  .kit-qband__in { max-width: 1140px; margin: 0 auto; padding: clamp(44px,6vw,88px) var(--gutter); display: grid; grid-template-columns: 1fr minmax(360px,410px); gap: clamp(30px,4vw,60px); align-items: center; }
  .kit-qband__form { display: flex; justify-content: center; }
  .kit-qband__form .gc-quote { margin: 0; width: 100%; max-width: 410px; }

  .kit-proof { display: flex; flex-direction: column; gap: var(--space-4); }
  .kit-proof__agg { display: flex; align-items: center; gap: .55em; flex-wrap: wrap; margin-bottom: var(--space-1); }
  .kit-proof__agg .stars { color: var(--star-filled); font-size: var(--text-lg); letter-spacing: 2px; }
  .kit-proof__agg .score { font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--text-lg); color: var(--text-strong); }
  .kit-proof__agg .src { font-size: var(--text-sm); color: var(--text-muted); display: inline-flex; align-items: center; gap: .4em; }
  .kit-rc { display: flex; gap: var(--space-4); background: var(--surface-card); border: 1px solid var(--border-soft); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: var(--space-5); }
  .kit-rc:nth-child(3) { margin-left: clamp(0px, 5%, 34px); }
  .kit-rc:nth-child(4) { margin-right: clamp(0px, 5%, 34px); }
  .kit-rc__av { width: 46px; height: 46px; border-radius: 50%; flex: none; background: var(--sage-200); color: var(--sage-800); display: grid; place-items: center; font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--text-base); overflow: hidden; }
  .kit-rc__av img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .kit-rc__body { display: flex; flex-direction: column; gap: .35rem; min-width: 0; }
  .kit-rc__stars { color: var(--star-filled); font-size: var(--text-sm); letter-spacing: 1px; }
  .kit-rc__text { font-size: var(--text-sm); line-height: var(--lh-relaxed); color: var(--text-body); margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .kit-rc.open .kit-rc__text { -webkit-line-clamp: unset; }
  .kit-rc__more { align-self: flex-start; background: none; border: none; padding: 0; color: var(--sage-700); font-weight: var(--fw-bold); font-size: var(--text-sm); cursor: pointer; font-family: var(--font-body); }
  .kit-rc__foot { display: flex; align-items: center; gap: .5em; font-size: var(--text-xs); color: var(--text-muted); }
  .kit-rc__foot b { color: var(--text-strong); font-weight: var(--fw-bold); }
  .kit-rc__foot .dot { width: 3px; height: 3px; border-radius: 50%; background: var(--border-strong); }

  @media (max-width: 860px) {
    .kit-qband__in { grid-template-columns: 1fr; }
    .kit-rc:nth-child(3), .kit-rc:nth-child(4) { margin-left: 0; margin-right: 0; }
  }
  @media (max-width: 720px) { .kit-ba { aspect-ratio: 3 / 2; } }
  `;
  (function injectHeroCSS() {
    let s = document.getElementById('kit-hero-styles');
    if (!s) {
      s = document.createElement('style');
      s.id = 'kit-hero-styles';
      document.head.appendChild(s);
    }
    s.textContent = css;
  })();
  const KitchenIcon = /*#__PURE__*/React.createElement("svg", {
    className: "kit-ba__icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 2v8M5 2v3a3 3 0 0 0 3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2c-1.5 0-2.5 1.8-2.5 4s1 4 2.5 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10v12M16 10v12"
  }));
  function BeforeAfter() {
    const [pos, setPos] = React.useState(50);
    const ref = React.useRef(null);
    const dragging = React.useRef(false);
    const moveTo = React.useCallback(clientX => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      let p = (clientX - r.left) / r.width * 100;
      p = Math.max(4, Math.min(96, p));
      setPos(p);
    }, []);
    React.useEffect(() => {
      const onMove = e => {
        if (!dragging.current) return;
        moveTo(e.clientX != null ? e.clientX : e.touches && e.touches[0].clientX);
      };
      const onUp = () => {
        dragging.current = false;
      };
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      return () => {
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
      };
    }, [moveTo]);
    const onDown = e => {
      dragging.current = true;
      moveTo(e.clientX);
    };
    const onKey = e => {
      if (e.key === 'ArrowLeft') setPos(p => Math.max(4, p - 4));
      if (e.key === 'ArrowRight') setPos(p => Math.min(96, p + 4));
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "kit-ba__hintwrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-ba",
      ref: ref,
      onPointerDown: onDown
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-ba__layer kit-ba__after"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kit-ba__tag kit-ba__tag--after"
    }, "After")), /*#__PURE__*/React.createElement("div", {
      className: "kit-ba__layer kit-ba__before",
      style: {
        clipPath: 'inset(0 ' + (100 - pos) + '% 0 0)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "kit-ba__tag kit-ba__tag--before"
    }, "Before")), /*#__PURE__*/React.createElement("div", {
      className: "kit-ba__divider",
      style: {
        left: pos + '%'
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "kit-ba__handle",
      "aria-label": "Drag to compare before and after",
      onKeyDown: onKey
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "9 6 4 12 9 18"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "15 6 20 12 15 18"
    }))))), /*#__PURE__*/React.createElement("p", {
      className: "kit-ba__hint"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "9 6 4 12 9 18"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "15 6 20 12 15 18"
    })), "Drag to compare"));
  }
  const GoogleG = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "15",
    height: "15",
    "aria-hidden": "true",
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.3 9.14 5.38 12 5.38z"
  }));
  const REVIEWS_MINI = [{
    initials: 'ET',
    avatar: '../../assets/avatar-emily.jpg',
    name: 'Emily T.',
    time: '2 weeks ago',
    text: "The team completely transformed our kitchen! From the initial consultation to the final reveal, everything was smooth and professional. The attention to detail was incredible, and the quality of work exceeded our expectations. Highly recommend to anyone looking for a home remodel!"
  }, {
    initials: 'JS',
    avatar: '../../assets/avatar-johnsarah.jpg',
    name: 'John & Sarah M.',
    time: '1 month ago',
    text: "We couldn't be happier with our bathroom renovation. The design team really listened to our needs and came up with a solution that fit our space perfectly. The work was completed on time, and the craftsmanship is top-notch. We feel like we have a brand new home!"
  }, {
    initials: 'MR',
    avatar: '../../assets/avatar-mark.jpg',
    name: 'Mark R.',
    time: '3 weeks ago',
    text: "From the moment we started working together, we felt completely supported throughout our project. The crew was friendly, efficient, and respectful of our home. Our outdoor space looks amazing now! We've already received compliments from our neighbors!"
  }];
  function ReviewMiniCard({
    r
  }) {
    const [open, setOpen] = React.useState(false);
    return /*#__PURE__*/React.createElement("figure", {
      className: 'kit-rc' + (open ? ' open' : ''),
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "kit-rc__av"
    }, r.avatar ? /*#__PURE__*/React.createElement("img", {
      src: r.avatar,
      alt: r.name
    }) : r.initials), /*#__PURE__*/React.createElement("div", {
      className: "kit-rc__body"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kit-rc__stars"
    }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", {
      className: "kit-rc__text"
    }, r.text), !open && /*#__PURE__*/React.createElement("button", {
      className: "kit-rc__more",
      onClick: () => setOpen(true)
    }, "\u2026more"), /*#__PURE__*/React.createElement("div", {
      className: "kit-rc__foot"
    }, /*#__PURE__*/React.createElement("span", null, "by ", /*#__PURE__*/React.createElement("b", null, r.name)), /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }), /*#__PURE__*/React.createElement(GoogleG, null), /*#__PURE__*/React.createElement("span", null, r.time))));
  }
  function HeroSection({
    formRef,
    onSubmit
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      className: "kit-hero"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-hero__bg"
    }), /*#__PURE__*/React.createElement("div", {
      className: "kit-hero__scrim"
    }), /*#__PURE__*/React.createElement("div", {
      className: "kit-hero__in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-hero__head"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "kit-hero__title"
    }, "Transforming Houses Into ", /*#__PURE__*/React.createElement("span", {
      className: "hl"
    }, "Homes", /*#__PURE__*/React.createElement("span", {
      className: "kit-laurel",
      dangerouslySetInnerHTML: {
        __html: LAUREL
      }
    }))), /*#__PURE__*/React.createElement("p", {
      className: "kit-hero__sub"
    }, "Gather & Co: The Premier Home Remodeling Team In Greater Waco")), /*#__PURE__*/React.createElement(BeforeAfter, null))), /*#__PURE__*/React.createElement("section", {
      className: "kit-qband",
      id: "reviews",
      ref: formRef
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-qband__in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-proof"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-proof__agg"
    }, /*#__PURE__*/React.createElement("span", {
      className: "stars"
    }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", {
      className: "score"
    }, "5.0"), /*#__PURE__*/React.createElement("span", {
      className: "src"
    }, /*#__PURE__*/React.createElement(GoogleG, null), " Google reviews")), REVIEWS_MINI.map(r => /*#__PURE__*/React.createElement(ReviewMiniCard, {
      key: r.name,
      r: r
    }))), /*#__PURE__*/React.createElement("div", {
      className: "kit-qband__form"
    }, /*#__PURE__*/React.createElement(QuoteForm, {
      onSubmit: onSubmit
    })))));
  }
  window.HeroSection = HeroSection;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
/* Gather & Co — Website UI Kit · Site Header
   Two-row teal header: logo + utility links + phone pill + Free Quote CTA,
   with the main service navigation below. Mirrors the live site. */

(function () {
  const {
    Button
  } = window.GatherCoDesignSystem_a466ff;
  const NAV = ['Bathrooms', 'Kitchens', 'Pergola', 'Patio Covers', 'Sunroom', 'Outdoor Spaces', 'Aging in Place', 'About Us'];
  const css = `
  .kit-header { position: sticky; top: 0; z-index: 100; background: var(--teal-700); color: var(--cream-50); box-shadow: var(--shadow-md); }
  .kit-header__inner { max-width: 1240px; margin: 0 auto; padding: 14px var(--gutter); display: flex; align-items: center; gap: var(--space-6); }
  .kit-header__logo { height: 74px; width: auto; flex: none; }
  .kit-header__right { flex: 1; display: flex; flex-direction: column; gap: 10px; }
  .kit-util { display: flex; align-items: center; gap: var(--space-5); justify-content: flex-end; }
  .kit-util a { color: var(--text-on-dark-muted); font-size: var(--text-sm); font-weight: var(--fw-semibold); text-decoration: none; transition: color .2s var(--ease-out); }
  .kit-util a:hover { color: var(--sage-300); }
  .kit-phone { display: inline-flex; align-items: center; gap: 0.5em; background: var(--ink-900); color: var(--cream-50); font-weight: var(--fw-bold); font-size: var(--text-sm); padding: 0.7em 1.3em; border-radius: var(--radius-pill); text-decoration: none; transition: transform .15s var(--ease-out); }
  .kit-phone:hover { transform: translateY(-1px); color: var(--cream-50); }
  .kit-phone svg { width: 16px; height: 16px; }
  .kit-nav { display: flex; align-items: center; gap: var(--space-5); justify-content: flex-end; flex-wrap: wrap; }
  .kit-nav button { background: none; border: none; cursor: pointer; font-family: var(--font-body); color: var(--cream-50); font-size: var(--text-sm); font-weight: var(--fw-bold); padding: 4px 0; position: relative; transition: color .2s var(--ease-out); }
  .kit-nav button::after { content: ""; position: absolute; left: 0; right: 0; bottom: -3px; height: 2px; background: var(--sage-400); transform: scaleX(0); transform-origin: left; transition: transform .2s var(--ease-out); border-radius: 2px; }
  .kit-nav button:hover { color: var(--sage-300); }
  .kit-nav button:hover::after, .kit-nav button[data-active="true"]::after { transform: scaleX(1); }
  .kit-nav button[data-active="true"] { color: #fff; }
  .kit-burger { display: none; background: none; border: 1.5px solid var(--border-on-dark); border-radius: var(--radius-sm); color: var(--cream-50); cursor: pointer; padding: 8px; }
  .kit-burger svg { width: 22px; height: 22px; display: block; }
  @media (max-width: 1080px) {
    .kit-header__inner { gap: var(--space-4); }
    .kit-util { display: none; }
    .kit-nav { display: none; }
    .kit-burger { display: inline-flex; margin-left: auto; }
    .kit-header__logo { height: 60px; }
  }
  .kit-mobilemenu { background: var(--teal-800); border-top: 1px solid var(--border-on-dark); padding: var(--space-4) var(--gutter); display: flex; flex-direction: column; gap: 4px; }
  .kit-mobilemenu button { background: none; border: none; text-align: left; color: var(--cream-50); font-family: var(--font-body); font-weight: var(--fw-bold); font-size: var(--text-base); padding: 12px 6px; border-radius: var(--radius-sm); cursor: pointer; }
  .kit-mobilemenu button:hover { background: rgba(255,255,255,0.06); color: var(--sage-300); }
  `;
  if (!document.getElementById('kit-header-styles')) {
    const s = document.createElement('style');
    s.id = 'kit-header-styles';
    s.textContent = css;
    document.head.appendChild(s);
  }
  const Phone = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
  }));
  function SiteHeader({
    active,
    onNavigate,
    onQuote
  }) {
    const [open, setOpen] = React.useState(false);
    const go = item => {
      onNavigate && onNavigate(item);
      setOpen(false);
    };
    return /*#__PURE__*/React.createElement("header", {
      className: "kit-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-header__inner"
    }, /*#__PURE__*/React.createElement("img", {
      className: "kit-header__logo",
      src: "../../assets/logo-on-teal.png",
      alt: "Gather & Co Kitchen & Bath",
      style: {
        cursor: 'pointer'
      },
      onClick: () => go('Home')
    }), /*#__PURE__*/React.createElement("div", {
      className: "kit-header__right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-util"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#reviews",
      onClick: e => {
        e.preventDefault();
        go('Reviews');
      }
    }, "Reviews"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault()
    }, "Newsletter"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('Contact');
      }
    }, "Contact Us"), /*#__PURE__*/React.createElement("a", {
      className: "kit-phone",
      href: "tel:2542847718"
    }, Phone, "254-284-7718"), /*#__PURE__*/React.createElement(Button, {
      variant: "sage",
      size: "sm",
      onClick: onQuote
    }, "Free Quote")), /*#__PURE__*/React.createElement("nav", {
      className: "kit-nav"
    }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
      key: n,
      "data-active": active === n,
      onClick: () => go(n)
    }, n)))), /*#__PURE__*/React.createElement("button", {
      className: "kit-burger",
      "aria-label": "Menu",
      onClick: () => setOpen(o => !o)
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18"
    })))), open && /*#__PURE__*/React.createElement("div", {
      className: "kit-mobilemenu"
    }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: () => go(n)
    }, n)), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        onQuote && onQuote();
        setOpen(false);
      },
      style: {
        color: 'var(--sage-300)'
      }
    }, "Get Free Quote \u2192")));
  }
  window.SiteHeader = SiteHeader;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.FeatureBlock = __ds_scope.FeatureBlock;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuoteForm = __ds_scope.QuoteForm;

__ds_ns.Footer = __ds_scope.Footer;

})();

import Link from "next/link";
import Image from "next/image";

const Mark = () => <span className="mark" aria-hidden="true" />;

const NavLink = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
  <a className={`nav__link${className ? " " + className : ""}`} href={href}>
    {children}
  </a>
);

const MenuCard = ({
  src,
  alt,
  title,
  desc,
  href,
}: {
  src: string;
  alt: string;
  title: string;
  desc: string;
  href: string;
}) => (
  <a className="menu-card" href={href}>
    <div className="panel">
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 300px" />
    </div>
    <span className="t-card">{title}</span>
    <span className="t-small">{desc}</span>
  </a>
);

const PrimaryButton = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
  <a className={`btn btn--primary${className ? " " + className : ""}`} href={href}>
    {children}
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  </a>
);

const SecondaryButton = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a className="btn btn--secondary" href={href}>
    {children}
  </a>
);

const SectionHead = ({ h2, lead }: { h2: React.ReactNode; lead?: string }) => (
  <div className="section-head">
    <h2>{h2}</h2>
    {lead && <p className="t-lead">{lead}</p>}
  </div>
);

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#top">Skip to content</a>
      <header className="nav">
        <div className="wrap nav__bar">
          <Link className="nav__logo" href="#top">
            <Mark /> Prompt Shelf
          </Link>
          <nav className="nav__links" aria-label="Main">
            <div className="nav__item">
              <NavLink href="#save">Save</NavLink>
              <div className="nav__menu">
                <div className="wrap">
                  <MenuCard
                    src="/assets/photos/img/m11317510-1200.webp"
                    alt="Saved prompts in collections"
                    title="Collections"
                    desc="Group prompts into sets you reuse."
                    href="#save"
                  />
                  <MenuCard
                    src="/assets/photos/img/m113462760-1200.webp"
                    alt="Favourited prompts with stars"
                    title="Favourites"
                    desc="Star the prompts you return to most."
                    href="#favourites"
                  />
                  <MenuCard
                    src="/assets/photos/img/m130857602-1200.webp"
                    alt="Public and private prompt filter"
                    title="Public and private"
                    desc="Filter who can see each prompt."
                    href="#filter"
                  />
                </div>
              </div>
            </div>
            <NavLink href="#save">Create</NavLink>
            <NavLink href="#save">Library</NavLink>
            <NavLink href="#save">Plans</NavLink>
            <NavLink href="#save">Help</NavLink>
          </nav>
          <div className="nav__actions">
            <NavLink href="#save" className="nav__second">Log in</NavLink>
            <PrimaryButton href="#save">Create prompt</PrimaryButton>
          </div>
          <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO — collage */}
      <section className="hero hero--collage" data-enter aria-labelledby="hero-h">
        <div className="wrap">
          <div className="hero-text">
            <div className="hero-copy">
              <h1 id="hero-h">Your prompts, saved and ready to reuse</h1>
              <p className="t-lead">
                Prompt Shelf is the prompt library where you save, collect and reuse your best AI
                prompts — public, private, in collections, with favourites and filters.
              </p>
              <div className="btn-row">
                <PrimaryButton href="#save">Create prompt</PrimaryButton>
                <SecondaryButton href="#save">Browse library</SecondaryButton>
              </div>
              <p className="hero__proof">Thousands of prompts saved across collections.</p>
            </div>
            <div className="hero-visual">
              <div className="d-win" aria-hidden="true">
                <div className="d-win__bar">
                  <span className="d-win__crumb">
                    Prompt Shelf <span className="d-win__crumb">/</span> <b>Saved</b>
                  </span>
                  <span className="ui-spacer"></span>
                  <div className="ui-win__search" aria-hidden="true">
                    <svg className="ui-icon" viewBox="0 0 16 16">
                      <circle cx="7" cy="7" r="4.5" />
                      <path d="m10.5 10.5 3 3" />
                    </svg>
                    <span className="ui-win__ph">Search</span>
                    <span className="ui-kbd">/</span>
                  </div>
                </div>
                <div className="d-win__body">
                  <div className="d-side">
                    <span className="is-on"><i></i> All</span>
                    <span><i></i> Collections</span>
                    <span><i></i> Favourites</span>
                    <span><i></i> Public</span>
                    <span><i></i> Private</span>
                    <span className="d-side__label">Views</span>
                    <span className="ui-win__hash"># Writing</span>
                    <span className="ui-win__hash"># Code</span>
                    <span className="ui-win__hash"># Analysis</span>
                  </div>
                  <div className="d-main">
                    <div className="d-main__head">
                      <h4>Saved prompts</h4>
                      <span className="d-btn">New prompt</span>
                    </div>
                    <div className="d-tabs">
                      <span className="is-on">All 412</span>
                      <span>Collections 28</span>
                      <span>Favourites 64</span>
                    </div>
                    <div className="d-rows">
                      <div className="d-row">
                        <div>
                          <b>Blog post opener</b>
                          <br />
                          <small>Writing · 4 variables</small>
                        </div>
                        <span className="num">24 uses</span>
                        <span className="d-chip d-chip--public">Public</span>
                      </div>
                      <div className="d-row">
                        <div>
                          <b>Code review summary</b>
                          <br />
                          <small>Code · 2 variables</small>
                        </div>
                        <span className="num">12</span>
                        <span className="d-chip d-chip--private">Private</span>
                      </div>
                      <div className="d-row">
                        <div>
                          <b>Data analysis brief</b>
                          <br />
                          <small>Analysis · 6 variables</small>
                        </div>
                        <span className="num">48</span>
                        <span className="d-chip d-chip--draft">Draft</span>
                      </div>
                      <div className="d-row">
                        <div>
                          <b>Email to customer</b>
                          <br />
                          <small>Writing · 3 variables</small>
                        </div>
                        <span className="num">6</span>
                        <span className="d-chip d-chip--public">Public</span>
                      </div>
                      <div className="d-row">
                        <div>
                          <b>Meeting notes to tasks</b>
                          <br />
                          <small>Writing · 1 variable</small>
                        </div>
                        <span className="num">31</span>
                        <span className="d-chip d-chip--private">Private</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-card" aria-hidden="true" data-ly-steps="700">
                <div className="d-card__row">
                  <h5>Open prompt</h5>
                  <span className="d-chip d-chip--data" data-step data-step-at="4">
                    Blog post opener
                  </span>
                </div>
                <div className="d-note__line" data-step>
                  <i>✓</i>
                  <span><b>412 prompts</b> saved across 28 collections</span>
                </div>
                <div className="d-note__line" data-step>
                  <i>✓</i>
                  <span>Favourited 64 times this week</span>
                </div>
                <div className="d-note__line" data-step>
                  <i>✓</i>
                  <span>Public prompts reused 1,240 times</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP FRAME — saved prompts list beside the open editor */}
      <section className="section" id="app-frame" aria-labelledby="app-frame-h">
        <div className="wrap">
          <div className="group">
            <SectionHead
              h2={
                <>
                  Your library, one window
                  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
                    <path className="m-arrow__stem" d="M1 6h8" />
                    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
                  </svg>
                </>
              }
              lead="The saved-prompt list beside the open editor — copy, edit variables, insert in one click."
            />
            <div className="app" role="img" aria-label="Saved prompts list beside the open prompt editor">
              <div className="app__pane" id="list-pane">
                <div className="ui-panel ui-win" data-ui="window" data-open="Open" data-work="Editing" data-done="Inserted">
                  <div className="ui-win__bar">
                    <span className="ui-dots" aria-hidden="true">
                      <i></i><i></i><i></i>
                    </span>
                    <span className="ui-win__crumb">
                      Library <span className="d-win__crumb">/</span> <b>All prompts</b>
                    </span>
                    <span className="ui-spacer"></span>
                    <div className="ui-win__search" aria-hidden="true">
                      <svg className="ui-icon" viewBox="0 0 16 16">
                        <circle cx="7" cy="7" r="4.5" />
                        <path d="m10.5 10.5 3 3" />
                      </svg>
                      <span className="ui-win__ph">Search</span>
                      <span className="ui-kbd">/</span>
                    </div>
                  </div>
                  <div className="ui-win__body">
                    <nav className="ui-win__side" aria-hidden="true">
                      <span className="ui-win__nav is-on">
                        <svg className="ui-icon" viewBox="0 0 16 16">
                          <path d="M2.5 9h3l1 1.5h3l1-1.5h3" />
                          <path d="M2.5 9 4 3.5h8L13.5 9v3.5h-11z" />
                        </svg>
                        All<em>412</em>
                      </span>
                      <span className="ui-win__nav">
                        <svg className="ui-icon" viewBox="0 0 16 16">
                          <circle cx="8" cy="6" r="2.5" />
                          <path d="M3.5 13.5c.6-2.3 2.4-3.5 4.5-3.5s3.9 1.2 4.5 3.5" />
                        </svg>
                        Collections<em>28</em>
                      </span>
                      <span className="ui-win__nav">
                        <svg className="ui-icon" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="5.5" />
                          <path d="M8 5v3l2 1.5" />
                        </svg>
                        Favourites<em>64</em>
                      </span>
                      <span className="ui-win__nav">
                        <svg className="ui-icon" viewBox="0 0 16 16">
                          <path d="m3.5 8.4 2.8 2.8 6.2-6.4" />
                        </svg>
                        Public
                      </span>
                      <span className="ui-win__label">Privacy</span>
                      <span className="ui-win__nav">
                        <span className="ui-win__hash">#</span> Private
                      </span>
                      <span className="ui-win__nav">
                        <span className="ui-win__hash">#</span> Public
                      </span>
                    </nav>
                    <div className="ui-win__main">
                      <div className="ui-win__cols" aria-hidden="true">
                        <span>Prompt</span>
                        <span>Type</span>
                        <span>Privacy</span>
                        <span>Uses</span>
                      </div>
                      <ul className="ui-win__rows">
                        <li className="ui-win__row" data-row>
                          <span className="ui-avatar" data-tone="1">BP</span>
                          <span className="ui-win__who">Blog post opener</span>
                          <span className="ui-win__sub">Writing · 4 variables</span>
                          <span className="ui-win__st" data-st="Open">
                            Open
                          </span>
                          <span className="ui-win__age">24 uses</span>
                        </li>
                        <li className="ui-win__row" data-row>
                          <span className="ui-avatar" data-tone="3">CR</span>
                          <span className="ui-win__who">Code review summary</span>
                          <span className="ui-win__sub">Code · 2 variables</span>
                          <span className="ui-win__st" data-st="Open">
                            Open
                          </span>
                          <span className="ui-win__age">12 uses</span>
                        </li>
                        <li className="ui-win__row" data-row>
                          <span className="ui-avatar" data-tone="4">DA</span>
                          <span className="ui-win__who">Data analysis brief</span>
                          <span className="ui-win__sub">Analysis · 6 variables</span>
                          <span className="ui-win__st" data-st="Draft">
                            Draft
                          </span>
                          <span className="ui-win__age">48 uses</span>
                        </li>
                        <li className="ui-win__row" data-row>
                          <span className="ui-avatar" data-tone="2">ET</span>
                          <span className="ui-win__who">Email to customer</span>
                          <span className="ui-win__sub">Writing · 3 variables</span>
                          <span className="ui-win__st" data-st="Needs you">
                            Needs you
                          </span>
                          <span className="ui-win__age">6 uses</span>
                        </li>
                        <li className="ui-win__row" data-row>
                          <span className="ui-avatar" data-tone="5">MN</span>
                          <span className="ui-win__who">Meeting notes to tasks</span>
                          <span className="ui-win__sub">Writing · 1 variable</span>
                          <span className="ui-win__st" data-st="Inserted">
                            Inserted
                          </span>
                          <span className="ui-win__age">31 uses</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app__pane app__pane--open" data-ui-loop>
                <div className="ui-panel ui-win" data-ui="window" data-open="Editing" data-work="Ready" data-done="Inserted">
                  <div className="ui-win__bar">
                    <span className="ui-dots" aria-hidden="true">
                      <i></i><i></i><i></i>
                    </span>
                    <span className="ui-win__crumb">
                      Editor <span className="d-win__crumb">/</span> <b>Blog post opener</b>
                    </span>
                    <span className="ui-spacer"></span>
                  </div>
                  <div className="ui-win__body">
                    <div className="ui-win__main">
                      <div className="ui-win__cols" aria-hidden="true">
                        <span>Variable</span>
                        <span>Value</span>
                        <span>Preview</span>
                      </div>
                      <ul className="ui-win__rows">
                        <li className="ui-win__row" data-row>
                          <span className="ui-win__who">Tone</span>
                          <span className="ui-win__sub">Professional</span>
                          <span className="ui-win__st" data-st="Set">
                            Set
                          </span>
                          <span className="ui-win__age"></span>
                        </li>
                        <li className="ui-win__row" data-row>
                          <span className="ui-win__who">Audience</span>
                          <span className="ui-win__sub">Marketing leads</span>
                          <span className="ui-win__st" data-st="Set">
                            Set
                          </span>
                          <span className="ui-win__age"></span>
                        </li>
                        <li className="ui-win__row" data-row>
                          <span className="ui-win__who">Length</span>
                          <span className="ui-win__sub">300 words</span>
                          <span className="ui-win__st" data-st="Set">
                            Set
                          </span>
                          <span className="ui-win__age"></span>
                        </li>
                      </ul>
                      <div className="d-note__line">
                        <i>✓</i>
                        <span>Prompt ready — <b>insert</b> into your chat.</span>
                      </div>
                      <div className="btn-row" style={{ marginTop: "var(--s-4)" }}>
                        <PrimaryButton href="#save">Insert prompt</PrimaryButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — g2, 2 screens */}
      <section className="section g2 h-2" id="features" aria-labelledby="features-h">
        <div className="wrap">
          <div className="group">
            <SectionHead
              h2={
                <>
                  Save, collect, filter
                  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
                    <path className="m-arrow__stem" d="M1 6h8" />
                    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
                  </svg>
                </>
              }
              lead="Every prompt you write lands in the library, ready to reuse."
            />
            <div className="grid">
              <article className="card card--row card--open">
                <h3>Save prompts</h3>
                <p>Paste any prompt you write and it lands in your library, tagged and searchable.</p>
                <div className="panel">
                  <Image
                    src="/assets/photos/img/m138226685-1200.webp"
                    alt="Prompt save form with tags"
                    fill
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                </div>
              </article>
              <article className="card card--row card--open">
                <h3>Build collections</h3>
                <p>Group prompts into sets you reuse — writing, code, analysis, your own categories.</p>
                <div className="panel">
                  <Image
                    src="/assets/photos/img/m138226686-1200.webp"
                    alt="Collections list with prompt counts"
                    fill
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                </div>
              </article>
            </div>
            <div className="grid">
              <article className="card card--row card--open">
                <h3>Star favourites</h3>
                <p>Mark the prompts you return to most so they stay at the top of your library.</p>
                <div className="panel">
                  <Image
                    src="/assets/photos/img/m138547195-1200.webp"
                    alt="Favourited prompts with star badges"
                    fill
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                </div>
              </article>
              <article className="card card--row card--open">
                <h3>Public and private</h3>
                <p>Filter who can see each prompt — keep work private or share it publicly.</p>
                <div className="panel">
                  <Image
                    src="/assets/photos/img/m147143894-1200.webp"
                    alt="Public and private toggle on a prompt card"
                    fill
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE moment */}
      <section className="marquee-row" id="marquee" aria-labelledby="marquee-h" data-moment="marquee-row">
        <div className="wrap">
          <div className="section-head">
            <h2 id="marquee-h">Prompts in use across the library</h2>
          </div>
          <div data-marquee>
            <div className="marquee__track">
              <span className="marquee__item">Blog post opener · 24 uses</span>
              <span className="marquee__item">Code review summary · 12 uses</span>
              <span className="marquee__item">Data analysis brief · 48 uses</span>
              <span className="marquee__item">Email to customer · 6 uses</span>
              <span className="marquee__item">Meeting notes to tasks · 31 uses</span>
              <span className="marquee__item">Blog post opener · 24 uses</span>
              <span className="marquee__item">Code review summary · 12 uses</span>
              <span className="marquee__item">Data analysis brief · 48 uses</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" aria-labelledby="faq-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="faq-h">Questions about Prompt Shelf</h2>
          </div>
          <div className="faq">
            <div className="faq__item">
              <h3>Can I share prompts publicly?</h3>
              <p>Yes. Every prompt can be public or private, and you control who sees it.</p>
            </div>
            <div className="faq__item">
              <h3>Do collections sync across devices?</h3>
              <p>Your library saves to your account and opens anywhere you sign in.</p>
            </div>
            <div className="faq__item">
              <h3>Can I use variables in prompts?</h3>
              <p>Set tone, audience and length once, then reuse the same prompt with new values.</p>
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer className="footer closing" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta">
            <div className="section-head">
              <h2 id="close-h">Create your first prompt</h2>
              <p>Save it, collect it, reuse it — your library starts now.</p>
            </div>
            <PrimaryButton href="#save" className="btn--xl btn--wide">
              Create prompt
            </PrimaryButton>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-6">
                <Link className="nav__logo" href="#top">
                  <Mark /> Prompt Shelf
                </Link>
                <p className="footer__lede">The prompt library where you save, collect and reuse your best AI prompts.</p>
              </div>
              <div className="span-3 start-7 footer__col">
                <h4>Product</h4>
                <ul>
                  <li><Link href="#save">Create prompt</Link></li>
                  <li><Link href="#save">Collections</Link></li>
                  <li><Link href="#save">Favourites</Link></li>
                </ul>
              </div>
              <div className="footer__col">
                <h4>Company</h4>
                <ul>
                  <li><Link href="#save">About</Link></li>
                  <li><Link href="#save">Help centre</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer__legal">
              <span>© 2026 Prompt Shelf &nbsp; <a href="privacy.html">Privacy</a> &nbsp; <a href="terms.html">Terms</a></span>
              <a className="credits" href="credits.html">Photographs via kit library stand-ins</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

import { useMemo, useState } from 'react'

const tabs = ['Home', 'Shop', 'Scan', 'Rewards', 'Profile']

const products = [
  {
    id: 1,
    name: 'Cloud Dew Serum',
    brand: 'Botanica Labs',
    member: 'Maya',
    cert: 'Leaping Bunny Certified',
    price: 34,
    lowestPrice: 31,
    bestValue: 34,
    lastUpdated: '2 hours ago',
    stock: 'Low stock',
    status: 'Restock soon',
    usage: '12 days left',
    badge: 'Cruelty free',
    color: 'peach',
    image: '✨',
    summary: 'Barrier-supporting serum with niacinamide, oat, and squalane.',
    ingredients: ['Niacinamide', 'Oat Beta Glucan', 'Squalane', 'Panthenol'],
    retail: [
      { store: 'Glow Market', price: 34, note: 'Free shipping' },
      { store: 'Kind Beauty', price: 36, note: 'Bundle bonus' },
      { store: 'Earthly', price: 31, note: 'Best value' },
    ],
  },
  {
    id: 2,
    name: 'Rose Renewal Cream',
    brand: 'Moss & Moon',
    member: 'Chris',
    cert: 'Vegan + Cruelty Free',
    price: 42,
    lowestPrice: 38,
    bestValue: 42,
    lastUpdated: 'Today',
    stock: 'Running low',
    status: 'Due in 4 days',
    usage: '5 days left',
    badge: 'Top-rated',
    color: 'rose',
    image: '🌹',
    summary: 'Hydrating moisturizer for dry skin with ceramides and rose water.',
    ingredients: ['Ceramides', 'Rose Water', 'Glycerin', 'Hyaluronic Acid'],
    retail: [
      { store: 'Nourish Co.', price: 42, note: 'Gift with purchase' },
      { store: 'Bloom & Bean', price: 39, note: 'Member price' },
      { store: 'Kind Beauty', price: 38, note: 'Lowest price' },
    ],
  },
  {
    id: 3,
    name: 'Sunlit Mineral SPF 50',
    brand: 'Dune & Dew',
    member: 'Ava',
    cert: 'Reef Safe',
    price: 29,
    lowestPrice: 26,
    bestValue: 29,
    lastUpdated: 'Yesterday',
    stock: 'On track',
    status: 'Restock in 2 weeks',
    usage: '16 days left',
    badge: 'New favorite',
    color: 'gold',
    image: '☀️',
    summary: 'Lightweight mineral sunscreen with broad-spectrum protection and no white cast.',
    ingredients: ['Titanium Dioxide', 'Zinc Oxide', 'Coconut Alkanes', 'Vitamin E'],
    retail: [
      { store: 'Dune Table', price: 29, note: 'Free sample' },
      { store: 'Botanique', price: 31, note: 'Early access' },
      { store: 'Earthly', price: 26, note: 'Lowest price' },
    ],
  },
]

const reminders = [
  { label: 'Mascara refill', member: 'Maya', due: 'Tomorrow' },
  { label: 'Face mist', member: 'Chris', due: 'Wed' },
  { label: 'Lip balm', member: 'Ava', due: 'Fri' },
]

const offers = [
  { title: 'Wildflower Trio', type: 'Partner deal', value: 'Save 15%' },
  { title: 'Garden perk', type: 'Reward unlock', value: '+180 points' },
  { title: 'Early access', type: 'Brand drop', value: 'New serum' },
]

const rewards = {
  points: 1280,
  goal: 1500,
  gardenProgress: 68,
  bunnyMood: 'Content',
}

function App() {
  const [activeTab, setActiveTab] = useState('Home')
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const activeProducts = useMemo(
    () => products.filter((product) => product.stock !== 'On track'),
    [],
  )

  return (
    <div className="app-shell">
      <div className="phone-frame">
        <header className="topbar">
          <div>
            <p className="eyebrow">Good afternoon</p>
            <h1>Leaping Bunny</h1>
          </div>
          <div className="icon-group">
            <button aria-label="Search">⌕</button>
            <button aria-label="Notifications">🔔</button>
          </div>
        </header>

        <main className="content">
          <section className="hero card">
            <div className="hero-copy">
              <span className="hero-tag">Household essentials</span>
              <h2>4 routines need attention</h2>
              <p>Keep your home’s conscious beauty picks stocked with smart reminders and verified matches.</p>
            </div>
            <div className="hero-cta">
              <button className="primary-btn">Scan product</button>
            </div>
          </section>

          <section className="low-stock">
            <div className="section-head">
              <h3>Running low</h3>
              <button className="link-btn">View all</button>
            </div>
            <div className="product-list">
              {activeProducts.map((product) => (
                <article
                  key={product.id}
                  className="mini-card"
                  onClick={() => setSelectedProduct(product)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedProduct(product)
                    }
                  }}
                >
                  <div className={`product-mark ${product.color}`}>{product.image}</div>
                  <div className="product-copy">
                    <div className="title-row">
                      <strong>{product.name}</strong>
                      <span>{product.usage}</span>
                    </div>
                    <p>{product.member}</p>
                    <div className="chip-row">
                      <span className="chip subtle">{product.cert}</span>
                      <span className="chip accent">{product.stock}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="reminders card soft">
            <div className="section-head compact">
              <h3>Upcoming reminders</h3>
              <button className="link-btn">Manage</button>
            </div>
            <div className="reminder-list">
              {reminders.map((item) => (
                <div key={item.label} className="reminder-item">
                  <div className="dot" />
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.member}</p>
                  </div>
                  <span>{item.due}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="offers-row">
            {offers.map((offer) => (
              <div key={offer.title} className="offer-card card">
                <p>{offer.type}</p>
                <strong>{offer.title}</strong>
                <span>{offer.value}</span>
              </div>
            ))}
          </section>

          <section className="garden card">
            <div className="garden-header">
              <div>
                <p className="eyebrow">Reward garden</p>
                <h3>Blooming with care</h3>
              </div>
              <div className="bunny-badge">🐰</div>
            </div>
            <div className="garden-progress">
              <div className="progress-bar">
                <span style={{ width: `${rewards.gardenProgress}%` }} />
              </div>
              <div className="progress-meta">
                <strong>{rewards.gardenProgress}%</strong>
                <span>{rewards.bunnyMood}</span>
              </div>
            </div>
            <div className="garden-visual" aria-label="Virtual garden">
              <div className="plant plant-a" />
              <div className="plant plant-b" />
              <div className="plant plant-c" />
            </div>
          </section>
        </main>

        <aside className="detail-panel card">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Product detail</p>
              <h3>{selectedProduct.name}</h3>
            </div>
            <div className="panel-icon">{selectedProduct.image}</div>
          </div>

          <div className="meta-badges">
            <span className="chip accent">{selectedProduct.badge}</span>
            <span className="chip subtle">{selectedProduct.cert}</span>
          </div>

          <p className="product-summary">{selectedProduct.summary}</p>

          <div className="pricing-box">
            <div>
              <span>Lowest price</span>
              <strong>${selectedProduct.lowestPrice}</strong>
            </div>
            <div>
              <span>Best overall value</span>
              <strong>${selectedProduct.bestValue}</strong>
            </div>
            <div>
              <span>Updated</span>
              <strong>{selectedProduct.lastUpdated}</strong>
            </div>
          </div>

          <div className="ingredients-block">
            <h4>Ingredient highlights</h4>
            <div className="ingredient-tags">
              {selectedProduct.ingredients.map((ingredient) => (
                <span key={ingredient}>{ingredient}</span>
              ))}
            </div>
          </div>

          <div className="retail-list">
            {selectedProduct.retail.map((retailer) => (
              <div key={retailer.store} className="retailer-row">
                <div>
                  <strong>{retailer.store}</strong>
                  <small>{retailer.note}</small>
                </div>
                <span>${retailer.price}</span>
              </div>
            ))}
          </div>

          <button className="primary-btn block">Set replenishment reminder</button>
        </aside>

        <div className="reward-strip card">
          <div>
            <p>Rewards</p>
            <strong>{rewards.points} pts</strong>
          </div>
          <div className="goal-pill">{rewards.goal - rewards.points} to goal</div>
        </div>

        <nav className="bottom-nav" aria-label="Main navigation">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={tab === activeTab ? 'nav-item active' : 'nav-item'}
              onClick={() => setActiveTab(tab)}
            >
              <span>{tab === 'Home' ? '⌂' : tab === 'Shop' ? '🛍️' : tab === 'Scan' ? '◉' : tab === 'Rewards' ? '🏆' : '👤'}</span>
              <small>{tab}</small>
            </button>
          ))}
        </nav>

        <button className="floating-assistant" aria-label="AI concierge">
          ✨ Ask Bunny
        </button>
      </div>
    </div>
  )
}

export default App

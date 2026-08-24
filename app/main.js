import './styles.css';

const state = {
  profile: { age: 29, income: 72000, residency: 'India' },
  policy: 'age',
  connected: false,
  proof: null,
  activity: []
};

const policies = {
  age: { title: 'Age eligibility', rule: 'Prove you meet an age threshold without revealing your birth date.', field: 'age', label: 'Minimum age', value: 18 },
  income: { title: 'Income threshold', rule: 'Prove income is above a threshold without disclosing the exact amount.', field: 'income', label: 'Minimum annual income', value: 50000 },
  residency: { title: 'Residency', rule: 'Prove residency in an allowed region without publishing your address.', field: 'residency', label: 'Allowed region', value: 'India' }
};

function render() {
  const p = policies[state.policy];
  const proof = state.proof;
  document.querySelector('#app').innerHTML = `
    <div class="noise"></div>
    <header class="topbar">
      <a class="brand" href="#top" aria-label="Veil home"><span class="mark">V</span><span>VEIL</span></a>
      <nav aria-label="Primary"><a href="#workspace">Workspace</a><a href="#how">How it works</a><a href="#security">Privacy</a></nav>
      <button class="wallet ${state.connected ? 'connected' : ''}" id="walletBtn">${state.connected ? 'Lace connected' : 'Connect Lace'}</button>
    </header>

    <main id="top">
      <section class="hero">
        <div class="eyebrow"><span class="pulse"></span> BUILT FOR MIDNIGHT · PRIVACY-FIRST</div>
        <h1>Prove the claim.<br><em>Keep the data.</em></h1>
        <p class="hero-copy">Veil turns sensitive eligibility data into a minimal, verifiable proof. The verifier gets an answer — not your private profile.</p>
        <div class="hero-actions"><a class="primary" href="#workspace">Create a proof <span>→</span></a><a class="secondary" href="#how">See the model</a></div>
        <div class="proof-strip"><div><b>01</b><span>Private input</span></div><i>→</i><div><b>02</b><span>ZK computation</span></div><i>→</i><div><b>03</b><span>Minimal disclosure</span></div></div>
      </section>

      <section class="workspace" id="workspace">
        <div class="section-head"><div><span class="kicker">PRIVATE WORKSPACE</span><h2>Build a proof policy</h2></div><span class="status-dot">${state.connected ? 'Wallet ready' : 'Preview mode'}</span></div>
        <div class="workspace-grid">
          <aside class="policy-panel">
            <div class="panel-label">Choose what to prove</div>
            ${Object.entries(policies).map(([key, item]) => `<button class="policy ${state.policy === key ? 'active' : ''}" data-policy="${key}"><span class="policy-icon">${key === 'age' ? '◌' : key === 'income' ? '≈' : '⌖'}</span><span><b>${item.title}</b><small>${item.rule}</small></span><span class="chevron">›</span></button>`).join('')}
            <div class="privacy-note"><span>◈</span><div><b>Private by design</b><small>Your profile stays local. Only the proof outcome is designed for disclosure.</small></div></div>
          </aside>
          <section class="builder-panel">
            <div class="builder-top"><div><span class="panel-label">01 · POLICY</span><h3>${p.title}</h3><p>${p.rule}</p></div><span class="step">1 / 3</span></div>
            <div class="field"><label for="threshold">${p.label}</label><div class="input-wrap"><input id="threshold" value="${p.value}" ${state.policy === 'residency' ? '' : 'inputmode="numeric"'} /><span>${state.policy === 'income' ? 'USD / year' : state.policy === 'age' ? 'years' : ''}</span></div></div>
            <div class="private-profile"><div><span class="tiny-label">YOUR PRIVATE VALUE</span><strong>${state.policy === 'age' ? state.profile.age + ' years' : state.policy === 'income' ? '$' + state.profile.income.toLocaleString() : state.profile.residency}</strong></div><span class="lock">PRIVATE</span></div>
            <button class="generate" id="generateBtn">${proof ? 'Generate a new proof' : 'Generate privacy proof'} <span>↗</span></button>
            ${proof ? `<div class="result"><div class="result-icon">✓</div><div><span class="tiny-label">VERIFIED CLAIM</span><strong>${proof.claim}</strong><small>Commitment ${proof.commitment}</small></div><span class="verified">VERIFIED</span></div>` : ''}
          </section>
        </div>
      </section>

      <section class="metrics" id="security"><div><span>WHAT LEAVES YOUR DEVICE</span><strong>Minimal</strong><small>Claim + cryptographic commitment</small></div><div><span>WHAT STAYS PRIVATE</span><strong>Profile</strong><small>Raw eligibility attributes</small></div><div><span>VERIFICATION MODEL</span><strong>Zero-knowledge</strong><small>Correctness without disclosure</small></div></section>

      <section class="how" id="how"><div class="section-head"><div><span class="kicker">THE MODEL</span><h2>Privacy without losing utility.</h2></div></div><div class="steps"><article><span>01</span><h3>Keep sensitive state private</h3><p>Profile attributes are treated as private inputs rather than public ledger records.</p></article><article><span>02</span><h3>Prove the policy</h3><p>A Compact circuit evaluates the policy and produces a proof of correctness.</p></article><article><span>03</span><h3>Disclose only the result</h3><p>Verifiers can validate the claim without receiving the underlying profile.</p></article></div></section>

      <section class="activity"><div class="section-head"><div><span class="kicker">AUDIT TRAIL</span><h2>Proof activity</h2></div><span class="muted">Local session</span></div><div class="activity-list">${state.activity.length ? state.activity.map(a => `<div class="activity-row"><span class="activity-check">✓</span><div><b>${a.claim}</b><small>${a.time}</small></div><code>${a.commitment}</code></div>`).join('') : '<div class="empty">No proofs yet. Your first proof will appear here without exposing the underlying profile.</div>'}</div></section>

      <footer><div class="brand"><span class="mark">V</span><span>VEIL</span></div><p>Privacy, with proof.</p><span>Midnight-native product concept · 2026</span></footer>
    </main>
  `;
  bind();
}

function bind() {
  document.querySelectorAll('[data-policy]').forEach(btn => btn.onclick = () => { state.policy = btn.dataset.policy; state.proof = null; render(); });
  document.querySelector('#walletBtn').onclick = () => { state.connected = !state.connected; render(); };
  document.querySelector('#generateBtn').onclick = () => {
    const p = policies[state.policy];
    const claim = state.policy === 'age' ? `Age ≥ ${p.value}` : state.policy === 'income' ? `Income ≥ $${Number(p.value).toLocaleString()}` : `Residency = ${p.value}`;
    const commitment = '0x' + crypto.getRandomValues(new Uint8Array(6)).reduce((s, x) => s + x.toString(16).padStart(2,'0'), '');
    state.proof = { claim, commitment };
    state.activity.unshift({ claim, commitment, time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) });
    render();
  };
}

render();

import './styles.css';

const state = {
  profile: { age: 29, income: 72000, residency: 'India' },
  policy: 'age',
  proof: null,
  request: null,
  activity: []
};

const policies = {
  age: { title: 'Age eligibility', rule: 'Prove you meet an age threshold without revealing your birth date.', label: 'Minimum age', value: 18 },
  income: { title: 'Income threshold', rule: 'Prove income is above a threshold without disclosing the exact amount.', label: 'Minimum annual income', value: 50000 },
  residency: { title: 'Residency', rule: 'Prove residency in an allowed region without publishing your address.', label: 'Allowed region', value: 'India' }
};

function commitment() {
  return '0x' + crypto.getRandomValues(new Uint8Array(6)).reduce((s, x) => s + x.toString(16).padStart(2, '0'), '');
}

function claimFor(policy = state.policy) {
  const p = policies[policy];
  return policy === 'age' ? `Age ≥ ${p.value}` : policy === 'income' ? `Income ≥ $${Number(p.value).toLocaleString()}` : `Residency = ${p.value}`;
}

function render() {
  const p = policies[state.policy];
  const proof = state.proof;
  const request = state.request;
  document.querySelector('#app').innerHTML = `
    <div class="noise"></div>
    <header class="topbar">
      <a class="brand" href="#top" aria-label="Veil home"><span class="mark">V</span><span>VEIL</span></a>
      <nav aria-label="Primary"><a href="#workspace">Prover</a><a href="#verifier">Verifier</a><a href="#how">How it works</a><a href="#security">Privacy</a></nav>
      <span class="wallet pending">Midnight integration pending</span>
    </header>

    <main id="top">
      <section class="hero">
        <div class="eyebrow"><span class="pulse"></span> MIDNIGHT-NATIVE · PRIVACY-FIRST</div>
        <h1>Prove the claim.<br><em>Keep the data.</em></h1>
        <p class="hero-copy">Veil is a reusable privacy-credential workflow: a verifier asks for one precise claim, while the user's underlying profile stays private.</p>
        <div class="hero-actions"><a class="primary" href="#workspace">Create a proof <span>→</span></a><a class="secondary" href="#verifier">Open verifier</a></div>
        <div class="proof-strip"><div><b>01</b><span>Private credential</span></div><i>→</i><div><b>02</b><span>ZK proof</span></div><i>→</i><div><b>03</b><span>Minimal disclosure</span></div></div>
      </section>

      <section class="workspace" id="workspace">
        <div class="section-head"><div><span class="kicker">PRIVATE WORKSPACE</span><h2>Build a proof</h2></div><span class="status-dot">Local privacy mode</span></div>
        <div class="workspace-grid">
          <aside class="policy-panel">
            <div class="panel-label">Choose what to prove</div>
            ${Object.entries(policies).map(([key, item]) => `<button class="policy ${state.policy === key ? 'active' : ''}" data-policy="${key}"><span class="policy-icon">${key === 'age' ? '◌' : key === 'income' ? '≈' : '⌖'}</span><span><b>${item.title}</b><small>${item.rule}</small></span><span class="chevron">›</span></button>`).join('')}
            <div class="privacy-note"><span>◈</span><div><b>Private by design</b><small>Your profile is treated as private input. Raw attributes are never intended for on-chain storage.</small></div></div>
          </aside>
          <section class="builder-panel">
            <div class="builder-top"><div><span class="panel-label">01 · POLICY</span><h3>${p.title}</h3><p>${p.rule}</p></div><span class="step">1 / 3</span></div>
            <div class="field"><label for="threshold">${p.label}</label><div class="input-wrap"><input id="threshold" value="${p.value}" ${state.policy === 'residency' ? '' : 'inputmode="numeric"'} /><span>${state.policy === 'income' ? 'USD / year' : state.policy === 'age' ? 'years' : ''}</span></div></div>
            <div class="private-profile"><div><span class="tiny-label">YOUR PRIVATE VALUE</span><strong>${state.policy === 'age' ? state.profile.age + ' years' : state.policy === 'income' ? '$' + state.profile.income.toLocaleString() : state.profile.residency}</strong></div><span class="lock">PRIVATE</span></div>
            <button class="generate" id="generateBtn">Prepare proof request <span>↗</span></button>
            ${proof ? `<div class="result"><div class="result-icon">◌</div><div><span class="tiny-label">LOCAL PROOF PREVIEW</span><strong>${proof.claim}</strong><small>Commitment preview ${proof.commitment}</small></div><span class="verified">NOT ON-CHAIN</span></div>` : ''}
          </section>
        </div>
      </section>

      <section class="workspace verifier-section" id="verifier">
        <div class="section-head"><div><span class="kicker">VERIFIER WORKSPACE</span><h2>Ask for the claim, not the profile.</h2></div><span class="status-dot">Request builder</span></div>
        <div class="workspace-grid verifier-grid">
          <section class="builder-panel verifier-builder">
            <div class="builder-top"><div><span class="panel-label">REQUEST</span><h3>Income eligibility</h3><p>Create a precise request. The verifier should receive only the minimum result required for its decision.</p></div><span class="step">2 / 3</span></div>
            <div class="request-card"><span class="tiny-label">REQUESTED CLAIM</span><strong>Income ≥ $50,000 / year</strong><small>Underlying income remains private.</small></div>
            <button class="generate" id="requestBtn">Create verification request <span>↗</span></button>
            ${request ? `<div class="result"><div class="result-icon">✓</div><div><span class="tiny-label">REQUEST CREATED</span><strong>${request.id}</strong><small>Waiting for a real Midnight proof integration.</small></div><span class="verified">PENDING</span></div>` : ''}
          </section>
          <aside class="policy-panel verifier-side"><div class="panel-label">Verifier receives</div><div class="minimal-list"><div><b>Claim</b><small>Whether the requested predicate is satisfied</small></div><div><b>Proof reference</b><small>Scoped cryptographic reference after integration</small></div><div><b>Validity</b><small>Valid, expired, revoked or unknown</small></div></div><div class="privacy-note"><span>✓</span><div><b>Never request the raw value</b><small>The verifier does not need the user's exact income, DOB or address.</small></div></div></aside>
        </div>
      </section>

      <section class="metrics" id="security"><div><span>WHAT LEAVES YOUR DEVICE</span><strong>Minimum</strong><small>Only the permitted proof outcome after real integration</small></div><div><span>WHAT STAYS PRIVATE</span><strong>Profile</strong><small>Raw eligibility attributes and sensitive inputs</small></div><div><span>VERIFICATION MODEL</span><strong>ZK + Midnight</strong><small>Publicly verifiable result without unnecessary disclosure</small></div></section>

      <section class="how" id="how"><div class="section-head"><div><span class="kicker">THE MODEL</span><h2>Privacy without losing utility.</h2></div></div><div class="steps"><article><span>01</span><h3>Keep sensitive state private</h3><p>Credentials and sensitive attributes are treated as private inputs rather than public ledger records.</p></article><article><span>02</span><h3>Prove the policy</h3><p>The intended Compact circuit evaluates a precise policy and produces a zero-knowledge proof.</p></article><article><span>03</span><h3>Verify the minimum</h3><p>The verifier receives the permitted claim and validity state, not the underlying profile.</p></article></div></section>

      <section class="activity"><div class="section-head"><div><span class="kicker">AUDIT TRAIL</span><h2>Session activity</h2></div><span class="muted">Local session</span></div><div class="activity-list">${state.activity.length ? state.activity.map(a => `<div class="activity-row"><span class="activity-check">✓</span><div><b>${a.label}</b><small>${a.time}</small></div><code>${a.reference}</code></div>`).join('') : '<div class="empty">No activity yet. Real proof and transaction events will appear here after Midnight integration is connected.</div>'}</div></section>

      <footer><div class="brand"><span class="mark">V</span><span>VEIL</span></div><p>Privacy, with proof.</p><span>Midnight-native product · 2026</span></footer>
    </main>
  `;
  bind();
}

function bind() {
  document.querySelectorAll('[data-policy]').forEach(btn => btn.onclick = () => { state.policy = btn.dataset.policy; state.proof = null; render(); });
  document.querySelector('#generateBtn').onclick = () => {
    const claim = claimFor();
    const ref = commitment();
    state.proof = { claim, commitment: ref };
    state.activity.unshift({ label: `Prepared ${claim} proof preview`, reference: ref, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    render();
  };
  document.querySelector('#requestBtn').onclick = () => {
    const id = 'REQ-' + crypto.getRandomValues(new Uint8Array(4)).reduce((s, x) => s + x.toString(16).padStart(2, '0'), '').toUpperCase();
    state.request = { id };
    state.activity.unshift({ label: 'Created verifier request: income ≥ $50,000', reference: id, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    render();
  };
}

render();

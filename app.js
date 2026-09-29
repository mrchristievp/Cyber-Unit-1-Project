const artifacts = [
  {
    id: 1,
    type: 'message',
    typeLabel: 'Email',
    title: 'Payroll Verification Email',
    time: '2:34 PM',
    summary: 'A teacher receives an urgent payroll message that appears to come from the principal.',
    content: `
      <div class="evidence-box">
        <div class="from-line"><strong>From:</strong> Principal Morgan &lt;morgan@viewp0intschool.org&gt;<br>
        <strong>To:</strong> Sarah Chen &lt;schen@viewpointacademy.org&gt;<br>
        <strong>Time:</strong> 2:34 PM<br>
        <strong>Subject:</strong> ACTION REQUIRED — Payroll Verification</div>
        <div class="message-body">Sarah,

We are correcting an issue with employee payroll information before today's processing deadline.

Please verify your information before 3:00 PM or your next payment may be delayed.

<span class="fake-button">Verify Payroll Information</span>

Thank you for handling this promptly.
Dr. Morgan

Link destination: https://viewpoint-payroll.secure-account-check.com</div>
      </div>`
  },
  {
    id: 2,
    type: 'message',
    typeLabel: 'Text Message',
    title: '“School IT” Text',
    time: '2:39 PM',
    summary: 'An unknown number sends instructions about a possible authentication code.',
    content: `
      <div class="phone-box">
        <div><strong>Unknown Number</strong><br><small>2:39 PM</small></div>
        <div class="bubble">SCHOOL IT: Systems are currently syncing due to today's payroll maintenance.</div>
        <div class="bubble">You may receive a six-digit authentication code. If contacted by support, provide the code so we can complete verification.</div>
        <div class="bubble">Reply YES when received.</div>
      </div>`
  },
  {
    id: 3,
    type: 'account',
    typeLabel: 'Authentication',
    title: 'Repeated Sign-In Prompts',
    time: '2:43–2:44 PM',
    summary: 'Several sign-in approval prompts appear on Sarah Chen’s phone.',
    content: `
      <div class="alert-box">
        <strong>Approve sign-in?</strong><br><br>
        Account: schen@viewpointacademy.org<br>
        Location: Phoenix, AZ<br>
        Device: Windows PC<br>
        Time: 2:43 PM<br><br>
        <strong>Result:</strong> Request denied
      </div>
      <br>
      <div class="alert-box">
        <strong>Approve sign-in?</strong><br><br>
        Same account • Same device • Same location<br>
        Time: 2:44 PM<br><br>
        <strong>Result:</strong> Request denied
      </div>`
  },
  {
    id: 4,
    type: 'account',
    typeLabel: 'Login Log',
    title: 'Authentication Log',
    time: '8:04 AM–2:47 PM',
    summary: 'The technology team exports recent authentication activity for Sarah Chen’s account.',
    content: `
      <table class="log-table">
        <thead><tr><th>Time</th><th>Account</th><th>Result</th><th>Device</th><th>Location</th></tr></thead>
        <tbody>
          <tr><td>8:04 AM</td><td>schen</td><td>Success</td><td>MacBook</td><td>Calabasas, CA</td></tr>
          <tr><td>10:47 AM</td><td>schen</td><td>Success</td><td>MacBook</td><td>Calabasas, CA</td></tr>
          <tr><td>2:41 PM</td><td>schen</td><td>Failed</td><td>Windows</td><td>Phoenix, AZ</td></tr>
          <tr><td>2:42 PM</td><td>schen</td><td>Failed</td><td>Windows</td><td>Phoenix, AZ</td></tr>
          <tr><td>2:43 PM</td><td>schen</td><td>MFA denied</td><td>Windows</td><td>Phoenix, AZ</td></tr>
          <tr><td>2:44 PM</td><td>schen</td><td>MFA denied</td><td>Windows</td><td>Phoenix, AZ</td></tr>
          <tr><td>2:47 PM</td><td>schen</td><td><strong>Success</strong></td><td>Windows</td><td>Phoenix, AZ</td></tr>
        </tbody>
      </table>`
  },
  {
    id: 5,
    type: 'statement',
    typeLabel: 'Witness Statement',
    title: 'Statement from Sarah Chen',
    time: '3:12 PM',
    summary: 'The teacher describes what she remembers doing after receiving the payroll email.',
    content: `
      <div class="statement">“I clicked the payroll link because the email looked like something Dr. Morgan would send. I entered my school email and password. The page seemed to freeze, so I closed it. A few minutes later I started getting sign-in requests. I denied the first two. I don't remember whether I hit approve on one while trying to clear the notifications.”</div>`
  },
  {
    id: 6,
    type: 'network',
    typeLabel: 'Wi-Fi Evidence',
    title: 'Morning Coffee Shop Networks',
    time: '7:18 AM',
    summary: 'Sarah remembers connecting to public Wi-Fi before school and seeing several similar network names.',
    content: `
      <div class="statement">“Before school I stopped at Bean House and checked my school email. I connected to <strong>BeanHouse_Guest</strong>. There were actually two or three similar names, but I just picked one with a strong signal.”</div>
      <br>
      <div class="network-list">
        <div class="network"><span>▰▰▰ BeanHouse_Guest</span><span>Open</span></div>
        <div class="network"><span>▰▰▱ BeanHouse Guest</span><span>Open</span></div>
        <div class="network"><span>▰▰▰ Free_BeanHouse_WiFi</span><span>Open</span></div>
        <div class="network"><span>▰▱▱ xfinitywifi</span><span>Open</span></div>
      </div>`
  },
  {
    id: 7,
    type: 'message',
    typeLabel: 'Email',
    title: 'Message Sent From Sarah’s Account',
    time: '2:56 PM',
    summary: 'Another employee receives an unexpected message from Sarah Chen’s legitimate school account.',
    content: `
      <div class="evidence-box">
        <div class="from-line"><strong>From:</strong> Sarah Chen &lt;schen@viewpointacademy.org&gt;<br>
        <strong>To:</strong> Faculty Distribution List<br>
        <strong>Time:</strong> 2:56 PM<br>
        <strong>Subject:</strong> Faculty Schedule Update</div>
        <div class="message-body">Can you open this quickly? Administration needs everyone to verify the revised schedule before dismissal.

<span class="fake-button">View Schedule</span></div>
      </div>`
  },
  {
    id: 8,
    type: 'statement',
    typeLabel: 'Student Report',
    title: 'Club Treasurer Report',
    time: '3:01 PM',
    summary: 'A student reports receiving a school-login request through a message from Sarah’s account.',
    content: `
      <div class="statement">“I received a message from Ms. Chen's school account asking me to check an updated club purchasing form. The link asked me to log in. I didn't because I thought it was weird that she was contacting me about the club.”</div>`
  },
  {
    id: 9,
    type: 'message',
    typeLabel: 'Voicemail + Email',
    title: 'Parent Emergency Request',
    time: '3:08 PM',
    summary: 'The front office receives an urgent request that appears to come from a student’s parent.',
    content: `
      <div class="statement"><strong>Voicemail transcript:</strong><br>“Hi, this is Daniel Kim's mom. I'm sorry, there's been an emergency and I'm at the hospital. I need Daniel's pickup information sent to my Gmail because I can't get into the parent portal. Please do this as soon as possible.”</div>
      <br>
      <div class="evidence-box">
        <div class="from-line"><strong>Follow-up email from:</strong> jennykim.family@gmail.com<br>
        <strong>Official family email on file:</strong> jkim74@gmail.com</div>
        <div class="message-body">Please send Daniel's updated schedule and transportation information here. I cannot access the parent portal right now.</div>
      </div>`
  },
  {
    id: 10,
    type: 'ai',
    typeLabel: 'Automated Analysis',
    title: 'Security Assistant Output',
    time: '3:15 PM',
    summary: 'An automated incident tool reviews the case and produces a high-confidence conclusion.',
    content: `
      <div class="ai-box">
        <strong>AUTOMATED INCIDENT ASSISTANT</strong><br>
        <span class="confidence">CONFIDENCE: 91%</span><br><br>
        LIKELY INCIDENT:<br>
        • Coordinated phishing campaign<br>
        • Employee credentials stolen<br>
        • Evil twin wireless attack used to capture login credentials<br>
        • AI-generated voice clone used to target front-office staff<br><br>
        RECOMMENDED ACTION:<br>
        Disable all employee accounts and shut down campus Wi-Fi immediately.
      </div>`
  }
];

const timeline = [
  ['7:18 AM', 'Sarah Chen connects to public Wi-Fi at Bean House before school.'],
  ['8:04 AM', 'Normal school account login from Sarah’s MacBook.'],
  ['10:47 AM', 'Another normal login from Sarah’s MacBook.'],
  ['2:34 PM', 'Urgent payroll email arrives.'],
  ['2:39 PM', '“School IT” text message arrives.'],
  ['2:41–2:47 PM', 'Failed logins, MFA prompts, then a successful Windows login from Phoenix.'],
  ['2:56 PM', 'Sarah’s account sends a faculty schedule message.'],
  ['3:01 PM', 'Student club treasurer reports an unusual login link.'],
  ['3:08 PM', 'Front office receives an urgent parent voicemail and follow-up email.'],
  ['3:15 PM', 'Automated security assistant produces its analysis.']
];

const navButtons = document.querySelectorAll('.nav-btn');
const panels = document.querySelectorAll('.section-panel');
const artifactGrid = document.getElementById('artifactGrid');
const timelineList = document.getElementById('timelineList');
const dialog = document.getElementById('artifactDialog');
const dialogTitle = document.getElementById('dialogTitle');
const dialogLabel = document.getElementById('dialogLabel');
const dialogMeta = document.getElementById('dialogMeta');
const dialogContent = document.getElementById('dialogContent');
const markReviewed = document.getElementById('markReviewed');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');

let activeArtifactId = null;
let reviewed = new Set(JSON.parse(localStorage.getItem('u1-reviewed') || '[]'));

function showPanel(id) {
  panels.forEach(p => p.classList.toggle('active-panel', p.id === id));
  navButtons.forEach(b => b.classList.toggle('active', b.dataset.target === id));
  document.getElementById(id).focus({preventScroll:true});
  window.scrollTo({top: 0, behavior: 'smooth'});
}

navButtons.forEach(btn => btn.addEventListener('click', () => showPanel(btn.dataset.target)));
document.querySelectorAll('[data-go]').forEach(btn => btn.addEventListener('click', () => showPanel(btn.dataset.go)));

function renderArtifacts(filter = 'all') {
  artifactGrid.innerHTML = '';
  artifacts.filter(a => filter === 'all' || a.type === filter).forEach(a => {
    const card = document.createElement('button');
    card.className = 'artifact-card' + (reviewed.has(a.id) ? ' reviewed' : '');
    card.dataset.id = a.id;
    card.innerHTML = `
      <span class="artifact-num">ARTIFACT ${String(a.id).padStart(2,'0')}</span>
      <h3>${a.title}</h3>
      <p>${a.summary}</p>
      <span class="artifact-type">${a.typeLabel}</span>`;
    card.addEventListener('click', () => openArtifact(a.id));
    artifactGrid.appendChild(card);
  });
  updateProgress();
}

function openArtifact(id) {
  const a = artifacts.find(x => x.id === id);
  activeArtifactId = id;
  dialogLabel.textContent = `ARTIFACT ${String(a.id).padStart(2,'0')} • ${a.typeLabel}`;
  dialogTitle.textContent = a.title;
  dialogMeta.textContent = `Recorded time: ${a.time}`;
  dialogContent.innerHTML = a.content;
  markReviewed.textContent = reviewed.has(id) ? 'Reviewed ✓' : 'Mark as reviewed';
  dialog.showModal();
}

markReviewed.addEventListener('click', () => {
  if (activeArtifactId == null) return;
  reviewed.add(activeArtifactId);
  localStorage.setItem('u1-reviewed', JSON.stringify([...reviewed]));
  markReviewed.textContent = 'Reviewed ✓';
  renderArtifacts(document.querySelector('.filter-btn.active').dataset.filter);
});

function updateProgress() {
  const n = reviewed.size;
  progressText.textContent = `${n} / ${artifacts.length} reviewed`;
  progressBar.style.width = `${(n / artifacts.length) * 100}%`;
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderArtifacts(btn.dataset.filter);
  });
});

timeline.forEach(([time, event]) => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `<span class="timeline-time">${time}</span><p>${event}</p>`;
  timelineList.appendChild(item);
});

renderArtifacts();

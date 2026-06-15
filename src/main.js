import './styles.css';

const quickAnswers = [
  {
    id: 'comprendre',
    icon: '1',
    title: 'Comprendre la maladie cœliaque',
    color: 'green',
    answer: `
      <p>La maladie cœliaque est une maladie auto-immune déclenchée par le gluten chez des personnes prédisposées.</p>
      <p>Le gluten est présent principalement dans :</p>
      <ul>
        <li>le blé ;</li>
        <li>l'orge ;</li>
        <li>le seigle.</li>
      </ul>
      <p>Le traitement repose sur un régime strict sans gluten.</p>
    `,
  },
  {
    id: 'manger',
    icon: '2',
    title: 'Que manger et que faut-il éviter ?',
    color: 'orange',
    answer: `
      <div class="answer-grid">
        <div>
          <h4>Autorisés</h4>
          <ul>
            <li>fruits et légumes ;</li>
            <li>viande, poisson, œufs ;</li>
            <li>riz ;</li>
            <li>maïs ;</li>
            <li>pommes de terre ;</li>
            <li>produits certifiés sans gluten.</li>
          </ul>
        </div>
        <div>
          <h4>À éviter</h4>
          <ul>
            <li>pain classique ;</li>
            <li>pâtes classiques ;</li>
            <li>semoule ;</li>
            <li>aliments contenant du blé, de l'orge ou du seigle.</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    id: 'vivre',
    icon: '3',
    title: 'Conseils pour mieux vivre avec la maladie cœliaque',
    color: 'blue',
    answer: `
      <ul class="check-list">
        <li>Lire les étiquettes alimentaires.</li>
        <li>Vérifier les ingrédients avant achat.</li>
        <li>Éviter la contamination croisée en cuisine.</li>
        <li>Préparer ses repas à l'avance.</li>
        <li>Maintenir un suivi nutritionnel.</li>
      </ul>
    `,
  },
  {
    id: 'ia',
    icon: '4',
    title: "L'intelligence artificielle peut-elle remplacer une diététicienne ?",
    color: 'purple',
    answer: `
      <p>L'intelligence artificielle peut fournir rapidement des informations générales et proposer des idées de repas.</p>
      <p>Cependant, elle ne remplace pas :</p>
      <ul>
        <li>l'évaluation nutritionnelle ;</li>
        <li>la personnalisation ;</li>
        <li>l'accompagnement humain.</li>
      </ul>
      <p>Elle peut être utilisée comme outil complémentaire.</p>
    `,
  },
];

const clinicalForms = [
  ['Forme classique', 'Diarrhée chronique, amaigrissement, malabsorption importante et carences visibles.'],
  ['Forme non classique', 'Fatigue, anémie inexpliquée, ostéoporose précoce ou symptômes peu spécifiques.'],
  ['Forme silencieuse', 'Aucun symptôme visible, mais anticorps positifs et lésions intestinales présentes.'],
  ['Forme potentielle', 'Anticorps positifs avec intestin encore normal, nécessitant une surveillance médicale.'],
  ['Forme réfractaire', 'Rare, persistante malgré un régime strict sans gluten, avec suivi spécialisé nécessaire.'],
];

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#accueil" aria-label="CœliaCare accueil">
      <span class="brand-mark">C</span>
      <span>CœliaCare</span>
    </a>
    <nav>
      <a href="#maladie">Maladie</a>
      <a href="#alimentation">Alimentation</a>
      <a href="#assistant">Assistant</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="accueil">
      <img
        class="hero-image"
        src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1600&q=82"
        alt="Table avec fruits, légumes et aliments naturels adaptés à une alimentation équilibrée"
      />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">Assistant d'information sur la maladie cœliaque</p>
        <h1>CœliaCare</h1>
        <p>
          Un site pédagogique pour comprendre la maladie cœliaque, reconnaître ses manifestations,
          organiser un régime sans gluten et utiliser l'IA comme soutien informatif.
        </p>
        <a class="primary-link" href="#assistant">Ouvrir l'assistant</a>
        <div class="hero-metrics" aria-label="Résumé du site">
          <span><strong>01</strong> Comprendre</span>
          <span><strong>02</strong> S'alimenter</span>
          <span><strong>03</strong> Questionner</span>
        </div>
      </div>
    </section>

    <section class="intro-band">
      <div class="intro-copy">
        <h2>Votre point de départ fiable</h2>
        <p>
          Je suis CœliaCare, un assistant informatif conçu pour fournir des informations générales
          sur la maladie cœliaque et le régime sans gluten. Je ne remplace pas une consultation
          avec un professionnel de santé.
        </p>
      </div>
      <div class="stat-strip" aria-label="Points essentiels">
        <span>Maladie auto-immune</span>
        <span>Gluten déclencheur</span>
        <span>Régime à vie</span>
      </div>
    </section>

    <section class="content-section" id="maladie">
      <div class="section-heading">
        <p class="eyebrow">Base scientifique et clinique</p>
        <h2>Panorama clinique de la maladie cœliaque</h2>
      </div>

      <div class="info-layout">
        <article class="prose">
          <h3>Définition</h3>
          <p>
            La maladie cœliaque est une maladie auto-immune chronique déclenchée par l'ingestion
            de gluten chez des personnes génétiquement prédisposées. Le gluten est une protéine
            présente dans le blé, l'orge et le seigle.
          </p>
          <p>
            Chez les personnes atteintes, le système immunitaire réagit de façon anormale et
            provoque une inflammation de la muqueuse de l'intestin grêle. Les villosités intestinales,
            qui servent à absorber les nutriments, peuvent s'aplatir progressivement.
          </p>
          <p>
            La conséquence principale est une malabsorption : l'organisme absorbe moins bien le fer,
            le calcium, les vitamines et d'autres nutriments essentiels.
          </p>
        </article>

        <aside class="process-panel">
          <h3>Mécanisme</h3>
          <ol>
            <li>Le gluten est ingéré.</li>
            <li>Le système immunitaire réagit de façon excessive.</li>
            <li>L'intestin grêle est attaqué.</li>
            <li>Les villosités s'aplatissent.</li>
            <li>Les carences peuvent apparaître.</li>
          </ol>
        </aside>
      </div>

      <div class="symptom-grid">
        <article>
          <h3>Symptômes digestifs</h3>
          <ul>
            <li>diarrhées chroniques ou alternance diarrhée/constipation ;</li>
            <li>ballonnements et douleurs abdominales ;</li>
            <li>nausées ;</li>
            <li>selles grasses ou malodorantes.</li>
          </ul>
        </article>
        <article>
          <h3>Symptômes généraux</h3>
          <ul>
            <li>fatigue importante ;</li>
            <li>anémie, souvent par manque de fer ;</li>
            <li>perte de poids ;</li>
            <li>carences en vitamines B12, D ou folates ;</li>
            <li>retard de croissance chez l'enfant.</li>
          </ul>
        </article>
        <article>
          <h3>Autres manifestations</h3>
          <ul>
            <li>douleurs osseuses ou ostéoporose ;</li>
            <li>fourmillements ou troubles neurologiques ;</li>
            <li>aphtes répétés ;</li>
            <li>troubles de la fertilité dans certains cas.</li>
          </ul>
        </article>
      </div>

      <div class="forms-list">
        ${clinicalForms
          .map(
            ([name, text]) => `
              <article>
                <h3>${name}</h3>
                <p>${text}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="split-section">
      <div>
        <p class="eyebrow">Parcours diagnostique</p>
        <h2>Confirmer avant de modifier l'alimentation</h2>
        <p>
          Le diagnostic repose généralement sur une prise de sang, notamment les anticorps
          anti-transglutaminase IgA, et parfois sur une biopsie de l'intestin grêle.
        </p>
        <p class="warning">
          Il ne faut pas commencer un régime sans gluten avant les tests, car cela peut fausser
          les résultats et retarder le diagnostic.
        </p>
      </div>
      <div>
        <p class="eyebrow">Prise en charge</p>
        <h2>Construire un régime sans gluten durable</h2>
        <p>
          Il n'existe pas de médicament curatif. Le traitement efficace est un régime sans gluten
          strict et durable, accompagné idéalement par un professionnel de santé.
        </p>
        <p>
          Un bon suivi aide à corriger les carences, favoriser la réparation de l'intestin et
          prévenir les complications comme l'ostéoporose ou certaines carences sévères.
        </p>
      </div>
    </section>

    <section class="content-section compact" id="alimentation">
      <div class="section-heading">
        <p class="eyebrow">Repères pratiques</p>
        <h2>Guide interactif pour mieux décider au quotidien</h2>
      </div>
      <div class="quick-layout">
        <div class="question-buttons">
          ${quickAnswers
            .map(
              (item, index) => `
                <button class="question-button ${item.color} ${index === 0 ? 'active' : ''}" data-answer="${item.id}">
                  <span>${item.icon}</span>
                  ${item.title}
                </button>
              `,
            )
            .join('')}
        </div>
        <article class="answer-panel" id="answer-panel">
          <h3>${quickAnswers[0].title}</h3>
          <div>${quickAnswers[0].answer}</div>
        </article>
      </div>
    </section>

    <section class="chat-section" id="assistant">
      <div class="chat-copy">
        <p class="eyebrow">Assistant conversationnel spécialisé</p>
        <h2>Poser une question ciblée à CœliaCare</h2>
        <p>
          Posez une question sur la maladie cœliaque, le gluten, les symptômes, le diagnostic,
          l'alimentation ou la contamination croisée.
        </p>
      </div>
      <div class="chat-shell">
        <div class="messages" id="messages" aria-live="polite">
          <div class="message bot">
            Bonjour. Je réponds aux questions générales sur la maladie cœliaque et le régime sans gluten.
          </div>
        </div>
        <form class="chat-form" id="chat-form">
          <input
            id="chat-input"
            name="message"
            type="text"
            autocomplete="off"
            placeholder="Exemple : Quels aliments éviter en cas de maladie cœliaque ?"
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  </main>

  <footer>
    <p>
      CœliaCare est un support pédagogique. En cas de symptômes ou de doute, consultez un médecin,
      un gastro-entérologue ou une diététicienne.
    </p>
    <div class="source-links" aria-label="Sources médicales">
      <a href="https://www.ameli.fr/assure/sante/themes/intolerance-gluten-maladie-coeliaque/definition-causes-facteurs-favorisants" target="_blank" rel="noreferrer">Ameli - définition</a>
      <a href="https://www.ameli.fr/assure/sante/themes/intolerance-gluten-maladie-coeliaque/regime-alimentaire" target="_blank" rel="noreferrer">Ameli - régime sans gluten</a>
      <a href="https://celiac.org/about-celiac-disease/treatment-and-follow-up/" target="_blank" rel="noreferrer">Celiac Disease Foundation</a>
    </div>
  </footer>
`;

const answerPanel = document.querySelector('#answer-panel');
document.querySelectorAll('.question-button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = quickAnswers.find((answer) => answer.id === button.dataset.answer);
    document.querySelectorAll('.question-button').forEach((node) => node.classList.remove('active'));
    button.classList.add('active');
    answerPanel.innerHTML = `<h3>${item.title}</h3><div>${item.answer}</div>`;
  });
});

const messages = document.querySelector('#messages');
const form = document.querySelector('#chat-form');
const input = document.querySelector('#chat-input');

function addMessage(text, type) {
  const bubble = document.createElement('div');
  bubble.className = `message ${type}`;
  bubble.textContent = text;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const question = input.value.trim();
  if (!question) return;

  addMessage(question, 'user');
  input.value = '';
  const waiting = document.createElement('div');
  waiting.className = 'message bot loading';
  waiting.textContent = 'Réponse en cours...';
  messages.appendChild(waiting);

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: question }),
    });
    const data = await response.json();
    waiting.remove();
    addMessage(data.reply || data.error || 'Impossible de répondre pour le moment.', 'bot');
  } catch {
    waiting.remove();
    addMessage('Le serveur du chatbot ne répond pas pour le moment.', 'bot');
  }
});

const animatedNodes = document.querySelectorAll(
  '.intro-band, .section-heading, .prose, .process-panel, .symptom-grid article, .forms-list article, .split-section > div, .question-button, .answer-panel, .chat-copy, .chat-shell',
);

animatedNodes.forEach((node, index) => {
  node.classList.add('reveal');
  node.style.setProperty('--reveal-delay', `${Math.min(index * 35, 260)}ms`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

animatedNodes.forEach((node) => observer.observe(node));

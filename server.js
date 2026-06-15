import 'dotenv/config';
import express from 'express';
import Groq from 'groq-sdk';
import { createServer as createViteServer } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = process.env.PORT || 5173;
const isProduction = process.env.NODE_ENV === 'production';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json({ limit: '1mb' }));

const client = process.env.GROQ_API_KEY
  ? new Groq({ apiKey: process.env.GROQ_API_KEY })
  : null;

const allowedTopic =
  /(c[œoe]lia|coelia|celiac|gluten|sans gluten|malabsorption|intestin|villos|transglutaminase|endomysium|biopsie|r[ée]gime|orge|seigle|bl[ée]|farine|pain|p[aâ]tes|semoule|diarrh|ballonnement|an[ée]mie|carence|ost[ée]oporose|contamination crois[ée]e|di[ée]t[ée]ticien|nutrition)/i;

const systemInstructions = `
Tu es CœliaCare, un assistant informatif en français sur la maladie cœliaque et le régime sans gluten.
Réponds uniquement aux questions liées à la maladie cœliaque, au gluten, au diagnostic, aux symptômes, au suivi nutritionnel, aux aliments autorisés ou à éviter, et à la prévention de la contamination croisée.
Si la question est hors sujet, réponds brièvement que tu ne peux traiter que les questions concernant la maladie cœliaque.
Ne pose jamais de diagnostic personnalisé, ne prescris pas de traitement, ne remplace pas un médecin ni une diététicienne.
Invite à consulter un professionnel de santé en cas de symptômes, de résultat d'analyse, de grossesse, d'enfant malade, de perte de poids, de sang dans les selles, de douleur intense, ou de doute médical.
Le style doit être clair, rassurant, pédagogique, avec des listes courtes.
`;

app.post('/api/chat', async (req, res) => {
  const message = String(req.body?.message || '').trim();

  if (!message) {
    return res.status(400).json({ error: 'Message vide.' });
  }

  if (!allowedTopic.test(message)) {
    return res.json({
      reply:
        "Je suis CœliaCare et je réponds seulement aux questions concernant la maladie cœliaque, le gluten et le régime sans gluten.",
    });
  }

  if (!client) {
    return res.status(503).json({
      error:
        "La clé API n'est pas configurée. Ajoutez GROQ_API_KEY dans un fichier .env puis relancez le serveur.",
    });
  }

  try {
    const completion = await client.chat.completions.create({
      model: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemInstructions },
        { role: 'user', content: message },
      ],
      temperature: 0.3,
      max_completion_tokens: 700,
    });

    res.json({
      reply:
        completion.choices?.[0]?.message?.content ||
        "Je n'ai pas pu générer une réponse claire. Reformulez votre question sur la maladie cœliaque.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Erreur pendant la génération de la réponse. Vérifiez la clé API Groq et le modèle configuré.",
    });
  }
});

if (isProduction) {
  const distPath = path.join(__dirname, 'dist');
  app.use(express.static(distPath));
  app.use((_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}

app.listen(port, () => {
  console.log(`CœliaCare est disponible sur http://localhost:${port}`);
});

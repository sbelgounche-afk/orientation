        // =========================================================================
        // ORIENT'MAROC - SYSTÈME D'ORIENTATION INTELLIGENT (Refactorisé & Optimisé)
        // =========================================================================

        // --- 7. NOTIFICATIONS (TOASTS) ---
        // Cette fonction crée une petite boîte de notification (un "toast") qui 
        // apparaît en bas de l'écran pendant quelques secondes pour donner un message à l'utilisateur.
        const showToast = (message, type = 'success') => {
            // On cherche s'il y a déjà une zone prévue pour afficher ces notifications sur la page.
            let container = document.querySelector('.toast-container');
            
            // Si la zone n'existe pas encore, on la crée et on l'ajoute au document HTML (la page web).
            if(!container) {
                container = document.createElement('div');
                container.className = 'toast-container';
                document.body.appendChild(container); // Ajout physique à la page
            }
            
            // On crée le message lui-même (la petite boîte qui va s'afficher).
            const toast = document.createElement('div');
            // On lui donne une classe CSS pour son style (couleur verte si succès, rouge si erreur).
            toast.className = `toast ${type}`;
            toast.innerHTML = `<span>${message}</span>`;
            
            // On glisse ce nouveau message dans la zone des notifications.
            container.appendChild(toast);
            
            // On programme la disparition du message :
            // Au bout de 3 secondes (3000 ms), le message devient transparent (il s'estompe).
            setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(20px)'; }, 3000);
            // Au bout de 3.5 secondes (3500 ms), on le supprime totalement de la page pour ne pas encombrer la mémoire.
            setTimeout(() => { toast.remove(); }, 3500);
        };

        // --- 8. APPLICATION CORE (COEUR DE L'APPLICATION) ---
        // "app" est comme le cerveau de l'application. C'est un grand "objet" qui contient 
        // toutes les données en cours d'utilisation et les actions possibles du site.
        const app = {
            jobs: [],         // La liste où on va ranger tous les métiers disponibles (formatés).
            user: null,       // Va contenir les infos de l'étudiant (nom, niveau scolaire, etc).
            quizScores: {},   // Les scores obtenus par l'étudiant lorsqu'il passe un test.
            questions: [],    // La liste des questions du quiz de personnalité.
            currentQ: 0,      // Le numéro de la question à laquelle l'utilisateur est rendu.
            scores: {},       // Analyse des résultats (Profil RIASEC, etc).

            // === GESTION DU THÈME (MODE CLAIR / MODE SOMBRE) ===
            // Cette fonction inverse l'apparence visuelle du site et la sauvegarde.
            toggleTheme: function() {
                // On passe de "vrai" à "faux" (ou inversement) pour savoir si le mode sombre est actif.
                this.isDarkMode = !this.isDarkMode;
                const newTheme = this.isDarkMode ? 'dark' : 'light';
                
                // On force la page web entière (documentElement) à appliquer le thème choisi.
                document.documentElement.setAttribute('data-theme', newTheme);
                
                // On sauvegarde ce choix dans la mémoire du navigateur pour les autres pages
                try {
                    localStorage.setItem('orienta_theme', newTheme);
                } catch(e) {}
            },

            // === NAVIGATION MOBILE ===
            // Action déclenchée quand on clique sur le menu "hamburger" (les 3 traits) sur un téléphone.
            toggleMenu: function() {
                // On récupère le menu latéral caché (mobileNav) et le filtre noir de fond (mobileOverlay).
                const nav = document.getElementById('mobileNav');
                const overlay = document.getElementById('mobileOverlay');
                
                // Si le menu est déjà ouvert (il contient la classe "open"), on le ferme.
                if(nav.classList.contains('open')) {
                    nav.classList.remove('open');
                    overlay.classList.remove('open');
                } else {
                    // Sinon, c'est qu'il est fermé, donc on l'ouvre en lui ajoutant la classe "open".
                    nav.classList.add('open');
                    overlay.classList.add('open');
                }
            },

            // === INITIALIZATION (DÉMARRAGE DU SITE) ===
            // C'est la première chose que fait l'application quand la page web finit de charger.
            init: function() {
                // On synchronise l'état interne avec le mode potentiellement choisi précédemment
                try {
                    const savedTheme = localStorage.getItem('orienta_theme');
                    this.isDarkMode = (savedTheme === 'dark');
                } catch(e) {}

                this.processData();    // 1. On organise les données des métiers (venant du fichier data.js).
                this.loadUser();       // 2. On vérifie si l'étudiant s'était déjà inscrit avant.
                this.renderFilters();  // 3. On prépare la liste déroulante des catégories pour la recherche.
                
                // Si l'étudiant est connu (son prénom existe), on l'envoie sur le Dashboard (le tableau de bord).
                // S'il est inconnu, on l'envoie sur la page d'Oboarding (page de bienvenue/inscription).
                if(this.user && this.user.name) this.navigate('dashboard');
                else this.navigate('onboarding');
                
                // On s'assure que si l'utilisateur envoie le formulaire de contact, 
                // c'est notre fonction 'handleFormSubmit' qui gère la tâche et non un rechargement de page basique.
                const form = document.getElementById("fs-form");
                if(form) {
                    form.addEventListener("submit", this.handleFormSubmit);
                }
            },

            // === PRÉPARATION DES DONNÉES (PROCESS DATA) ===
            // Transforme notre "dictionnaire" brutal de métiers complexes (dans data.js) 
            // en une vraie liste exploitable et propre pour l'application.
            processData: function() {
                let idCounter = 1; // Un compteur pour donner un numéro d'identité unique (ID) à chaque métier.
                this.jobs = [];    // On vide la liste des métiers pour repartir de zéro.
                
                // Pour chaque catégorie et sa liste de métiers dans les RAW_DATA...
                for (const [category, jobList] of Object.entries(RAW_DATA)) {
                    jobList.forEach(jobTitle => {
                        // On trouve quels mots-clés ("tags") correspondent à ce métier.
                        const tags = TAG_MAP[category] || ["general"];
                        // On trouve sa description personnalisée ou on génère une phrase par défaut.
                        const description = CUSTOM_DESC[jobTitle] || `Professionnel dans le secteur ${category}. Ce métier nécessite des compétences variées.`;
                        
                        // On ajoute le métier (tout beau tout propre) dans la boîte "this.jobs".
                        this.jobs.push({ id: idCounter++, title: jobTitle, category: category, description: description, tags: tags });
                    });
                }
                
                // Enfin, on affiche sur la page web le nombre total de métiers trouvés et de secteurs.
                const totalJobsEl = document.getElementById('totalJobsCount');
                const totalCatsEl = document.getElementById('totalCatsCount');
                if(totalJobsEl) totalJobsEl.textContent = this.jobs.length;
                if(totalCatsEl) totalCatsEl.textContent = Object.keys(RAW_DATA).length;
            },

            // === GESTION DE L'ENVOI DU FORMULAIRE DE CONTACT (FORMSPREE AJAX) ===
            // Quand l'utilisateur clique sur "Envoyer ma demande"...
            handleFormSubmit: async function(event) {
                event.preventDefault(); // On empêche la page web de recharger tout de suite.
                const form = event.target;
                const data = new FormData(form); // On "aspire" toutes les réponses entrées par l'utilisateur.
                
                const btn = document.getElementById("submit-btn"); // On cible le bouton d'envoi.
                const originalBtnText = btn.textContent;           // On garde en mémoire le vieux texte ("Envoyer").

                // On montre visuellement à l'utilisateur que le site "réfléchit" (en cours d'envoi).
                btn.textContent = "Envoi en cours...";
                btn.disabled = true; // On bloque le bouton pour éviter de cliquer 10 fois par accident.

                // On contacte silencieusement le service en ligne Formspree pour lui donner les données.
                fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: { 'Accept': 'application/json' }
                }).then(response => {
                    // Si le message a bien été ditribué par les tuyaux internet :
                    if (response.ok) {
                        showToast("✅ Message envoyé avec succès !", "success");
                        form.reset();                     // On vide les cases du formulaire avec 'reset'.
                        window.app.navigate('dashboard'); // On ramène l'utilisateur à l'accueil.
                    } else {
                        // S'il y a un souci spécifique de validation par Formspree (exemple: mauvais email).
                        response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                showToast(data["errors"].map(error => error["message"]).join(", "), "error");
                            } else {
                                showToast("❌ Oups ! Il y a eu un problème.", "error");
                            }
                        })
                    }
                }).catch(error => {
                    // S'il n'y a pas d'internet et qu'on ne peut pas joindre le serveur.
                    showToast("❌ Erreur de connexion.", "error");
                }).finally(() => {
                    // Dans tous les cas (réussite ou échec), on remet le bouton à son état normal.
                    btn.textContent = originalBtnText;
                    btn.disabled = false;
                });
            },

            // === CRÉATION DES QUESTIONS DU TEST DE PERSONNALITÉ (HOLLAND) ===
            // Retourne une liste de questions que l'on voudra poser à l'élève.
            getHollandQuestions: function() {
                return [
                    { text: "Aimes-tu travailler avec des outils et des machines ?", type: "R" },
                    { text: "Aimes-tu résoudre des problèmes mathématiques complexes ?", type: "I" },
                    { text: "Aimes-tu dessiner, écrire ou créer des choses artistiques ?", type: "A" },
                    { text: "Aimes-tu aider et enseigner les autres ?", type: "S" },
                    { text: "Aimes-tu vendre des produits ou persuader les gens ?", type: "E" },
                    { text: "Aimes-tu organiser des données et suivre des procédures ?", type: "C" },
                    { text: "Préfères-tu travailler à l'extérieur ?", type: "concret" },
                    { text: "Est-ce que tu aimes travailler seul sans supervision ?", type: "autonomie" },
                    { text: "Est-ce que tu aimes diriger une équipe ?", type: "encadrement" },
                    { text: "Est-ce que tu préfères les tâches manuelles ?", type: "manuel" }
                ];
            },

            // === SYSTÈME DE COMPARAISON DE FILIÈRES ===
            // Un mini-outil à l'intérieur de "app" pour comparer deux branches / deux choix scolaires.
            comparator: {
                // Les données brutes contenant les critères (difficulté brute sur 5, Maths sur 5, durée d'études...).
                data: {
                    "sc_maths": { label: "Sciences Maths", difficulty:5, math: 5, load: 5, duration: "5 à 7 ans", jobs: ["Ingénieur", "Architecte", "Chercheur", "Data Scientist"], market: "Très porteur", profile: "Logique développée, excellence en maths." },
                    "sc_exp": { label: "Sciences Expérimentales", difficulty: 3, math: 3, load: 4, duration: "6 à 8 ans", jobs: ["Médecin", "Pharmacien", "Biologiste"], market: "Santé stable", profile: "Intérêt pour les sciences de la vie." },
                    "eco": { label: "Économie & Gestion", difficulty: 3, math: 4, load: 3, duration: "4 à 5 ans", jobs: ["Comptable", "Commercial", "Banquier"], market: "Large besoin", profile: "Aisance avec les chiffres." },
                    "lettres": { label: "Lettres & Philosophie", difficulty: 3, math: 1, load: 3, duration: "4 à 5 ans", jobs: ["Professeur", "Journaliste", "Avocat"], market: "Enseignement, droit", profile: "Excellente expression écrite." },
                    "univ": { label: "Université (Littéraire/Humaines)", difficulty: 2, math: 1, load: 2, duration: "4 ans +", jobs: ["Enseignant", "Chercheur"], market: "Secteur public", profile: "Autonomie, recherche." },
                    "ecoles": { label: "Écoles Supérieures", difficulty: 5, math: 5, load: 5, duration: "5 ans", jobs: ["Ingénieur d'État", "Chef de projet"], market: "Rémunération élevée", profile: "Bon niveau général, ambition." },
                    "ofppt": { label: "OFPPT (Formation Pro)", difficulty: 2, math: 2, load: 4, duration: "2 à 3 ans", jobs: ["Technicien", "Ouvrier qualifié"], market: "Besoins forts", profile: "Goût pour la pratique." }
                },
                
                // Action déclenchée quand l'utilisateur clique sur le bouton "Comparer".
                runComparison: function () {
                    // On vérifie ce que l'utilisateur a choisi dans les deux menus déroulants.
                    const s1 = document.getElementById('streamSelect1').value;
                    const s2 = document.getElementById('streamSelect2').value;
                    const container = document.getElementById('compareResults');
                    
                    container.innerHTML = ''; // On efface l'ancienne comparaison s'il y en avait une.
                    
                    // On empêche la comparaison s'il a oublié de faire des choix.
                    if (!s1 || !s2) { showToast("Veuillez sélectionner au moins deux options.", "error"); return; }
                    
                    // Pour chaque sélection faite par l'utilisateur (s1 et s2)...
                    const selections = [s1, s2].filter(Boolean);
                    selections.forEach(key => {
                        const data = this.data[key];
                        if (!data) return;
                        
                        // Condition bonus : si la filière regardée correspond EXACTEMENT à la filière actuelle de l'élève.
                        const isMatch = window.app.user && window.app.user.stream === key;
                        // On crée un petit badge "✓ Pour toi" qui flottera sur la carte si c'est un match.
                        const matchBadge = isMatch ? `<div style="position:absolute; top:10px; right:10px; background:var(--accent); color:var(--accent-text); padding:4px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold;">✓ Pour toi</div>` : '';
                        
                        // On "dessine" la boîte (carte) qui contient les visuels et jauges de progression.
                        const html = `
                            <div class="card" style="position:relative; border-top: 4px solid ${isMatch ? 'var(--accent)' : 'var(--primary)'};">
                                ${matchBadge}
                                <h3 style="color:var(--primary); margin-bottom:15px;">${data.label}</h3>
                                <ul style="margin-bottom:15px; padding-left:20px; color:var(--text-muted);">
                                    <li><strong>Durée :</strong> ${data.duration}</li>
                                    <li><strong>Débouchés :</strong> ${data.market}</li>
                                </ul>
                                <div style="margin-bottom:10px;">
                                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:5px;"><span>Difficulté</span><span>${data.difficulty}/5</span></div>
                                    <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${data.difficulty * 20}%"></div></div>
                                </div>
                                <div>
                                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:5px;"><span>Maths</span><span>${data.math}/5</span></div>
                                    <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${data.math * 20}%"></div></div>
                                </div>
                            </div>
                        `;
                        // On injecte ce dessin (HTML) dans la page web.
                        container.innerHTML += html;
                    });
                }
            },

            // === SYSTÈME DE ROUTING (CHANGER DE PAGE) ===
            // Comme le site est un "Single Page Application", ne on charge pas de nouvelles pages.
            // On cache les "sections" dont on a pas besoin, et on montre celle demandée (ex: "dashboard").
            navigate: function (pageId) {
                const header = document.querySelector('header');
                
                // Si l'utilisateur est sur l'écran d'accueil/inscription, on cache la barre de menu d'en-tête.
                if (pageId === 'onboarding') {
                    header.classList.add('hidden');
                } else {
                    // Sur toutes les autres pages, le menu doit exister et s'afficher.
                    header.classList.remove('hidden');
                }

                // 1. On donne l'ordre de cacher absolument toutes les sections de la page Web.
                document.querySelectorAll('section').forEach(el => el.classList.remove('active'));
                
                // 2. On cible la section précise qu'on veut montrer (via son pageId, ex "jobs" ou "quiz").
                const page = document.getElementById(pageId);
                if (page) {
                    page.classList.add('active'); // On rend visible cette section spécifique.
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // On remonte doucement tout en haut de l'écran.
                    
                    // Si on vient de s'afficher sur le Tableau de bord (Dashboard), on demande à charger les recommandations métiées.
                    if (pageId === 'dashboard' && this.user) this.renderDashboard();
                    
                    // Si on visite l'annuaire de métiers, on veut s'assurer que tout soit visible sans filtres pré-remplis.
                    if (pageId === 'jobs') this.filterJobs('all');
                }
            },

            // === GESTION FORMULAIRE ONBOARDING ===
            // Lors de l'inscription à la page 1 : on vérifie si l'étudiant est au lycée.
            // Si oui, on affiche une nouvelle question pour qu'il choisisse sa série du BAC (Filière).
            toggleStream: function () {
                const lvl = document.getElementById('level').value; // Lycée ou Collège ?
                const grp = document.getElementById('streamGroup'); // La boîte contenant le choix des filières
                // '1BAC' = Première, '2BAC' = Terminale. Si c'est l'un des deux, on l'affiche 'block', sinon on cache ('none').
                grp.style.display = (lvl === '1BAC' || lvl === '2BAC') ? 'block' : 'none';
            },

            // === SAUVEGARDE DU PROFIL ===
            // Déclenché quand l'élève clique sur "Commencer mon aventure".
            saveProfile: function (e) {
                e.preventDefault(); // Stop au rechargement de page
                const name = document.getElementById('name').value;
                let level = document.getElementById('level').value;
                const stream = document.getElementById('stream').value || '';
                
                // Si l'élève a oublié de mettre son nom, on bloque l'action et on met un message.
                if (!name || !level) { showToast("Veuillez remplir tous les champs !", "error"); return; }
                
                try {
                    // On cache les infos dans le "localStorage" de son navigateur internet pour qu'il ne soit pas
                    // obligé de les re-taper demain quand il rouvrira le site.
                    localStorage.setItem('user_profile', JSON.stringify({ name, level, stream }));
                    this.user = { name, level, stream }; // Les données mémorisées dans le "cerveau" app.
                    
                    document.getElementById('uName').textContent = name; // On met à jour "Salut, [Prénom] !" sur le Dashboard.
                    showToast(`Bienvenue ${name} !`); // Message vert.
                    this.navigate('dashboard'); // On le propulse sur le Dashboard.
                } catch (error) {
                    showToast("Erreur sauvegarde.", "error"); // Problème technique du navigateur (mémoire pleine).
                }
            },

            // === RESTITUTION DU PROFIL ===
            // Si l'élève revient demain, le site s'en souvient et va "piocher" ses réponses de la veille en mémoire.
            loadUser: function () {
                try {
                    const stored = localStorage.getItem('user_profile');
                    this.user = stored ? JSON.parse(stored) : null;
                } catch (e) { this.user = null; } // Échec, l'élève restera "inconnu" comme un nouveau visiteur.
            },

            // === DÉCONNEXION ===
            // Si l'utilisateur a cliqué sur le bouton "Quitter" pour nettoyer ses données sur l'ordinateur.
            logout: function () {
                localStorage.removeItem('user_profile'); // Destruction de la mémoire du navigateur.
                this.user = null;                        // Le site oublie qui il est.
                
                // On vide le texte qu'il avait mis dans le formulaire de connexion.
                document.getElementById('name').value = '';
                document.getElementById('level').value = '';
                document.getElementById('stream').value = '';
                
                this.navigate('onboarding');             // On le renvoie à la case de départ (inscription).
                showToast("Vous avez été déconnecté.");
            },

            // === AFFICHAGE DU TABLEAU DE BORD (Suggestions de métiers) ===
            renderDashboard: function () {
                let suggestions = [];

                // 1. On regarde la filière de l'utilisateur (exemple: BAC SC_MATHS).
                // "Si c'est rempli, donne-moi tous les métiers qui matchent avec cette filière."
                if (this.user && this.user.stream && STREAM_MAP[this.user.stream]) {
                    const allowedCats = STREAM_MAP[this.user.stream]; // Liste des grandes catégories matchant
                    suggestions = this.jobs.filter(j => allowedCats.includes(j.category));
                }

                // 2. Si jamais il ne trouve aucune suggestion ou que l'élève est au collège (et n'a pas de filière).
                if (suggestions.length === 0) {
                    suggestions = [...this.jobs]; // La liste de recommandation comportera tous les métiers existants sans discriminer.
                }

                // 3. Petite fonction de "mélange de cartes" mathématique (shuffle).
                // Pour que les suggestions soient surprenantes et nouvelles chaque jour (car sinon ça montre toujours "Achat, Administrateur" par ordre alphabétique).
                suggestions.sort(() => 0.5 - Math.random());

                // On sélectionne seulement les 3 premiers résultats après le mélange et on dessine leurs boîtes HTML.
                const container = document.getElementById('featuredJobs');
                if (container) container.innerHTML = suggestions.slice(0, 3).map(j => this.createJobCard(j)).join('');
            },

            // === OPTIONS DU FILTRE DE RECHERCHE ===
            // Prépare le menu déroulant sur la page de l'annuaire "Métiers" où l'on trouve toutes les catégories.
            renderFilters: function () {
                const select = document.getElementById('categoryFilter');
                if (!select) return;
                
                select.innerHTML = '<option value="all">Toutes les catégories</option>';
                // On récupère toutes les catégories de data.js, on les trie alphabétiquement (A-Z) et on les ajoute au petit menu.
                Object.keys(RAW_DATA).sort().forEach(c => {
                    const opt = document.createElement('option');
                    opt.value = c;
                    opt.textContent = c;
                    select.appendChild(opt);
                });
            },

            // === FILTRAGE ACTIF (Moteur de recherche des métiers) ===
            filterJobs: function (category) {
                const container = document.getElementById('jobsList');
                if (!container) return;
                
                // On récupère ce que la personne a tapé dans la barre de recherche (en mettant tout en minuscules pour ne pas déranger avec les Majuscules).
                const searchValue = document.getElementById('jobSearch') ? document.getElementById('jobSearch').value.toLowerCase() : "";
                let filtered = this.jobs; // Par défaut, on filtre sur notre base de données entière.
                
                if (category !== 'all') filtered = filtered.filter(j => j.category === category); // Étape 1 : Si on clique sur une catégorie précise.
                
                // Étape 2 : Si du texte a été tapé, on garde seulement les métiers dont le titre ou la catégorie ressemble à la recherche tapée !
                if (searchValue.length > 0) filtered = filtered.filter(j => j.title.toLowerCase().includes(searchValue) || j.category.toLowerCase().includes(searchValue));
                
                // On dessine le rendu sur l'écran
                container.innerHTML = filtered.map(j => this.createJobCard(j)).join('');
                
                // On met à jour le petit chiffre affichant "X métiers trouvés".
                const countSpan = document.getElementById('currentCount');
                if (countSpan) countSpan.textContent = filtered.length;
            },

            // === CRÉATION DU VISUEL D'UN MÉTIER ===
            // C'est juste le bloc dessin (le carré blanc du métier avec la catégorie).
            // Le clic est branché sur `showJob()` !
            createJobCard: function (job) {
                return `
                    <div class="job-card" onclick="window.app.showJob(${job.id})">
                        <div class="job-header">
                            <div class="job-title">${job.title}</div>
                            <span class="job-category">${job.category}</span>
                        </div>
                        <div class="job-body">
                            ${job.description.substring(0, 80)}... 
                        </div>
                    </div>
                `; // 'substring(0, 80)' sert à couper la phrase à 80 lettres maxi et rajouter ...
            },

            // === VUE DÉTAILLÉE D'UN MÉTIER ("MODAL" OU FENÊTRE FLOTTANTE) ===
            // Quand l'élève clique sur une "job-card", ça ouvre une grande page qui détaille tout.
            showJob: function (id) {
                // On essaie de retrouver le métier spécifique avec ce numéro ID.
                const job = this.jobs.find(j => j.id === id);
                if (!job) return;

                // On regarde dans "data.js" s'il y a un chemin scolaire spécial prévu (PATHS_DATA). Sinon on lui donne le chemin par défaut.
                const pathData = PATHS_DATA[job.title] || PATHS_DATA.default;
                const userLevel = this.user ? this.user.level : null;

                // Construction visuelle d'une frise chronologique ("TIMELINE") pour savoir par quelles années scolaires passer.
                let timelineHTML = `<div class="timeline">`;
                pathData.main.forEach((step) => {
                    let isCurrent = false;
                    
                    // Si le niveau scolaire actuel de l'étudiant ressemble à l'étape du cursus affiché, 
                    // on colorera fortement ce point en jaune ou vert pour indiquer : "Tu es ICI actuellement !"
                    if (userLevel && LEVEL_MAP[userLevel]) {
                        if (LEVEL_MAP[userLevel][0].includes(step.year) || step.year.includes(LEVEL_MAP[userLevel][0])) isCurrent = true;
                    }
                    const activeClass = isCurrent ? 'is-current' : '';
                    
                    // On fabrique l'étape d'un parcours, par exemple "Baccalauréat -> Cursus prépa".
                    timelineHTML += `
                        <div class="timeline-item ${activeClass}">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <span style="font-weight:bold; color:var(--primary); display:block;">${step.year}</span>
                                <span style="display:block; margin-bottom:5px;">${step.target}</span>
                                <p style="font-size:0.9rem; color:var(--text-muted);">${step.desc}</p>
                            </div>
                        </div>
                    `;
                });
                timelineHTML += `</div>`; // Fin de la frise

                // Des parcours bis / Plan B s'il échoue.
                let altsHTML = '';
                if (pathData.alternatives && pathData.alternatives.length > 0) {
                    altsHTML = `<div style="margin-top:20px; background:rgba(255, 193, 7, 0.1); padding:15px; border-radius:var(--radius-sm); border-left:4px solid var(--accent);">
                        <h5 style="color:#E65100; margin-bottom:10px;">🛡️ Alternatives</h5>`;
                    pathData.alternatives.forEach(alt => {
                        altsHTML += `<div style="margin-bottom:10px;"><strong>${alt.condition}</strong><br/><span style="font-size:0.9rem;">${Array.isArray(alt.path) ? alt.path.join(' / ') : alt.path}</span></div>`;
                    });
                    altsHTML += `</div>`;
                }

                // On ouvre la fenêtre modale (Pop-up sur l'écran).
                const modalBody = document.getElementById('modalBody');
                if (modalBody) {
                    modalBody.innerHTML = `
                        <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:20px;">
                            <div>
                                <h2 style="color:var(--primary); line-height:1.2;">${job.title}</h2>
                                <span style="background:var(--secondary); color:white; padding:4px 10px; border-radius:4px; font-size:0.75rem; text-transform:uppercase;">${job.category}</span>
                            </div>
                        </div>
                        <p style="margin-bottom:20px; line-height:1.6;">${job.description}</p>
                        
                        <div style="margin-bottom:20px;">
                            <strong>Compétences clés :</strong>
                            <div style="display:flex; gap:5px; flex-wrap:wrap; margin-top:5px;">
                                ${job.tags.map(t => `<span style="background:var(--bg-input); padding:4px 10px; border-radius:12px; font-size:0.8rem; color:var(--text-muted);">${t}</span>`).join('')}
                            </div>
                        </div>

                        <details style="background:var(--bg-input); border-radius:var(--radius-sm); overflow:hidden;">
                            <summary style="padding:15px; cursor:pointer; font-weight:600; color:var(--primary);">Voir le parcours scolaire 🎓</summary>
                            <div style="padding:15px; border-top:1px solid var(--border-color);">
                                ${timelineHTML}
                                ${altsHTML}
                            </div>
                        </details>
                    `;
                }
                document.getElementById('jobModal').classList.add('open');
            },

            // Pour fermer la grande popup détaillée.
            closeModal: function () {
                document.getElementById('jobModal').classList.remove('open');
            },

            // === TEST : DÉBUT DU QUIZ (LANCEMENT) ===
            startQuiz: function () {
                // On récupère tout l'inventaire des questions (la liste 1 à 10 par exemple).
                this.questions = this.getHollandQuestions();
                
                // On met tous les compteurs de points à un score 0.
                this.scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0, concret: 0, abstrait: 0, autonomie: 0, encadrement: 0, manuel: 0 };
                this.currentQ = 0; // "Je suis actuellement sur la question numéro X"
                
                // On emmène l'utilisateur visuellement à la page Quiz et on y affiche sa propre question numéro 0.
                this.navigate('quiz');
                this.renderQuestion();
            },

            // === TEST : MISE EN PAGE DE LA QUESTION ACTUELLE ===
            renderQuestion: function () {
                // S'il n'y a plus de questions où qu'on a dépassé le chiffre maximum, on s'arrête de lire.
                if (!this.questions || this.currentQ >= this.questions.length) return;
                
                // La "question en cours de lecture" est extraite.
                const q = this.questions[this.currentQ];
                
                // Petit calcul mathématique du pourcentage d'avancement (pour la jauge verte), ex : 1/10 = 10%.
                const progress = Math.round(((this.currentQ) / this.questions.length) * 100);
                
                // On gère l'affichage du texte et de la grosse jauge de chargement.
                document.getElementById('qText').textContent = `${this.currentQ + 1}. ${q.text}`;
                document.getElementById('quizProgress').style.width = progress + '%';
                document.getElementById('quizProgressText').textContent = `${progress}%`;

                // On construit deux gros boutons Oui et Non en dessous.
                // Note : le paramètre True = l'utilisateur a répondu Oui.
                document.getElementById('qOptions').innerHTML = `
                    <button class="option-btn" onclick="window.app.answerQuiz(true)">✓ Oui, tout à fait</button>
                    <button class="option-btn" onclick="window.app.answerQuiz(false)">✗ Non, pas du tout</button>
                `;
            },

            // === TEST : RÉPONDRE A LA QUESTION ===
            answerQuiz: function (answer) {
                if (!this.questions || this.currentQ >= this.questions.length) return;
                const q = this.questions[this.currentQ];
                
                // Si la personne a dit "Oui" (c'est true), on augmente le pot de points pour ce type (ex: +1 point en Art, ou +1 en Santé).
                if (answer) { if(this.scores[q.type] !== undefined) this.scores[q.type]++; }
                
                // On passe mathématiquement à la question suivante (ex: on passe du N°0 au N°1).
                this.currentQ++;
                
                // Est-ce fini ? Si la prochaine question a un numéro inférieur à la limite totale, on pose cette question. 
                // Sinon, c'est totalement terminé, on révèle les résultats !
                if (this.currentQ < this.questions.length) { 
                    this.renderQuestion(); 
                } else { 
                    this.showQuizResults(); 
                }
            },

            // === TEST : AFFICHER LES RÉSULTATS MÉTaphysiques DU QUIZ ===
            showQuizResults: function () {
                // On sépare la partie RIASEC (modèle des 6 lettres de Holland).
                const riasecScores = { R: this.scores.R, I: this.scores.I, A: this.scores.A, S: this.scores.S, E: this.scores.E, C: this.scores.C };
                
                // Petit code avancé : On va ordonner nos variables de Holland, voir celles pour qui j'ai le plus gros chiffre, 
                // j'isole le "Top 3", et je garde leur première lettre ("ASE" par exemple ou "ICE").
                const riasecCode = Object.entries(riasecScores).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([letter]) => letter).join("");
                
                // Traitement d'un point bonus : plus Autonome que supervisé ? Plus Concret ou Abstrait ?
                const profiles = { 
                    cognitif: this.scores.concret > this.scores.abstrait ? "Concret" : "Abstrait", 
                    autonomie: this.scores.autonomie > this.scores.encadrement ? "Autonome" : "Encadré" 
                };

                // On affiche ça sur la page aux yeux de l'étudiant.
                document.getElementById('resProfile').textContent = `Code RIASEC : ${riasecCode}`;
                document.getElementById('resStream').textContent = this.user?.stream || "À déterminer";
                document.getElementById('resTags').innerHTML = `
                    <span style="background:var(--bg-body); padding:6px 12px; border-radius:20px; border:1px solid var(--secondary); color:var(--primary); font-weight:600;">${profiles.cognitif}</span>
                    <span style="background:var(--bg-body); padding:6px 12px; border-radius:20px; border:1px solid var(--secondary); color:var(--primary); font-weight:600;">${profiles.autonomie}</span>
                `;

                // 2ème étape, quels métiers lui proposer en fonction de sa série de Bac ?
                let candidateJobs = this.jobs;
                if (this.user?.stream && STREAM_MAP[this.user.stream]) {
                    const allowedCats = STREAM_MAP[this.user.stream];
                    // Si son orientation scolaire matchait notre plan, on lui sort la liste compatible.
                    candidateJobs = this.jobs.filter(j => allowedCats.includes(j.category));
                }
                
                // On affiche les 8 super classements (la crème de la crème des métiers pour ce jeune).
                const matches = candidateJobs.slice(0, 8);
                document.getElementById('resJobs').innerHTML = matches.map(j => this.createJobCard(j)).join('');
                
                this.navigate('results'); // Enclenche le changement visuel de page pour monter "Résultats".
            }
        };

        // On assigne ce cerveau "app" à la fenêtre principale (window) pour pouvoir s'y servir partout dans l'HTML.
        window.app = app;
        
        // Un "vigile de porte" qui attend : dès que le site (la page Web) est terminée de charger sans beuge ('DOMContentLoaded')...
        // ... Il appelle 'window.app.init()' pour déclencher le tout début.
        document.addEventListener('DOMContentLoaded', () => { window.app.init(); });

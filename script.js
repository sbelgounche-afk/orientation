// --- 1. DONNÉES BRUTES (RAW DATA) ---
        const RAW_DATA = {
            "Achat": ["Acheteur", "Acheteur industriel", "Acheteur informatique", "Agent de soin", "Assistant achat", "Assistant chef de produit tourisme", "Conducteur de travaux agencement", "Directeur achat", "Ingénieur achat", "Ingénieur d'études", "Peintre aéronautique", "Photographe assistant", "Professeur fitness", "Responsable achats", "Responsable approvisionnement", "Responsable crédit", "Technicien d'achats", "Téléopérateur"],
            "Administratif": ["Adjoint des cadres hospitaliers", "Agent administratif", "Agent distribution courrier", "Agent services généraux", "Assistant administratif", "Assistant de direction", "Assistant polyvalent", "Assistant technique", "Chargé de mission handicap", "Collaborateur administrateur judiciaire", "Dactylo", "Directeur administratif financier", "Directeur associé", "Directeur des services techniques", "Directeur général", "Employé administratif", "Gestionnaire administratif", "Greffier", "Responsable administratif", "Responsable des services généraux", "Rédacteur des débats", "Secrétaire général", "Standardiste", "Traducteur"],
            "Agricole": ["Agent d'élevage", "Agent viticole", "Agriculteur", "Apiculteur", "Bûcheron", "Chauffeur agricole", "Conseiller foncier", "Cueilleur", "Eleveur", "Horticulteur", "Ingénieur agricole", "Ingénieur agronome", "Magasinier agricole", "Maraîcher", "Mécanicien agricole", "Ouvrier agricole", "Palefrenier", "Pépiniériste", "Vendangeur"],
            "Alimentation": ["Boucher", "Boulanger", "Caviste", "Charcutier", "Charcutier-traiteur", "Chef boucher", "Chocolatier", "Cuisinier traiteur", "Désosseur", "Fromager", "Glacier", "Pizzaiolo", "Pâtissier chocolatier", "Responsable qualité agroalimentaire"],
            "Aménagement": ["Géographe", "Urbaniste"],
            "Architecture": ["Architecte", "Architecte d'intérieur", "Assistant architecte", "BIM Manager", "Cartographe", "Collaborateur d'architecte", "Décorateur", "Paysagiste"],
            "Artisanat": ["Bijoutier", "Carreleur", "Charpentier", "Charpentier couvreur", "Chaudronnier", "Cordonnier", "Couturier", "Ebéniste", "Ferronnier", "Fleuriste", "Forgeron", "Gemmologue", "Graveur", "Horloger", "Imprimeur", "Maroquinier", "Maréchal ferrant", "Menuisier", "Menuisier poseur aluminium", "Menuisier-agenceur", "Métallier serrurier", "Ouvrier boulanger", "Poseur cuisine", "Poseur menuiserie PVC", "Pâtissier tourier", "Pêcheur", "Relieur", "Serrurier", "Styliste", "Tailleur", "Tailleur de pierre", "Tapissier", "Technicien chaudronnier"],
            "Assurance": ["Actuaire", "Collaborateur agence assurances", "Comptable assurance", "Conseiller commercial assurance", "Conseiller mutualiste", "Courtier", "Courtier en assurances", "Expert en assurances", "Expert en sinistres", "Gestionnaire contrats", "Gestionnaire d'assurances", "Gestionnaire frais de santé", "Gestionnaire middle office", "Souscripteur", "Tarificateur assurance"],
            "Banque": ["Analyste crédit", "Chargé de clientèle", "Chargé de conformité", "Conseiller accueil banque", "Conseiller clientèle", "Dabiste", "Directeur d'agence", "Gestionnaire back office", "Guichetier", "Responsable recouvrement"],
            "Btp": ["Aide-maçon", "Assistant travaux", "Bancheur", "Bardeur", "Calorifugeur", "Canalisateur", "Chargé d'affaires btp", "Chauffagiste", "Chauffeur tp", "Chef d'équipe TP", "Chef d'équipe vrd", "Chef de chantier", "Coffreur", "Coffreur bancheur", "Coffreur boiseur", "Conducteur de grue mobile", "Conducteur de nacelle", "Conducteur de pelle", "Conducteur de travaux", "Conducteur engins", "Contremaitre", "Coordinateur technique", "Cordiste", "Courtier travaux", "Couvreur", "Couvreur zingueur", "Cuisiniste", "Câbleur", "Dessinateur projeteur électricité", "Dessinateur-projeteur bâtiment", "Deviseur", "Diagnostiqueur immobilier", "Directeur travaux", "Désamianteur", "Echafaudeur", "Economiste de la construction", "Electricien", "Electricien du bâtiment", "Etancheur", "Façadier", "Ferrailleur", "Finisseur", "Foreur", "Formateur CACES", "Frigoriste", "Grutier", "Grutier mobile", "Géomètre topographe", "Ingénieur BTP", "Ingénieur construction", "Ingénieur efficacité énergétique", "Ingénieur géotechnicien", "Ingénieur structures", "Ingénieur travaux", "Ingénieur études de prix", "Manoeuvre", "Maçon", "Menuisier aluminium", "Menuisier poseur", "Miroitier", "Métreur", "Ouvrier qualifié", "Ouvrier vrd", "Peintre en bâtiment", "Pilote OPC", "Plaquiste", "Plaquiste enduiseur", "Plombier", "Plâtrier", "Polisseur", "Pontier", "Projeteur béton armé", "Ramoneur", "Responsable maintenance travaux neufs", "Responsable travaux", "Sableur", "Solier moquettiste", "Technicien acoustique", "Technicien bâtiment", "Technicien génie civil", "Technicien géomètre"],
            "Chimie": ["Aromaticien", "Biochimiste", "Ingénieur chimiste", "Ingénieur formulation", "Ingénieur génie chimique", "Laborantin", "Responsable de laboratoire", "Responsable laboratoire chimie", "Responsable scientifique", "Technicien biochimiste", "Technicien chimiste", "Technicien de laboratoire", "Technicien de laboratoire biologie", "Technicien génie chimique"],
            "Commerce": ["Agent commercial", "Assistant administratif commercial", "Assistant commercial", "Assistant export", "Buraliste", "Business developer", "Chargé d'affaires", "Chargé de développement commercial", "Chef de projet CRM", "Chef de projet e-commerce", "Chef de secteur commerce", "Chef de zone export", "Chef des ventes", "Client mystère", "Commercial", "Commercial B to C", "Commercial CHR", "Commercial GMS", "Commercial automobile", "Commercial b to b", "Commercial export", "Commercial sédentaire", "Commerçant", "Conseiller commercial", "Contract manager", "Directeur business unit", "Directeur commercial", "Directeur commercial export", "Directeur de comptes", "Directeur des opérations", "Directeur des ventes", "Directeur du développement", "Directeur régional", "Délégué commercial", "Délégué vétérinaire", "Employé de pharmacie", "Ingénieur avant-vente", "Ingénieur commercial", "Ingénieur d'affaires", "Ingénieur technico-commercial", "Opticien", "Poissonnier", "Promoteur des ventes", "Responsable commercial France", "Responsable commercial export", "Responsable commercial sport", "Responsable commercial sédentaire", "Responsable commercial transport", "Responsable d'affaires", "Responsable développement commercial", "Responsable e-commerce", "Responsable grands comptes", "Skiman", "Technico-commercial", "Téléconseiller", "VRP"],
            "Communication": ["Assistant chef de projet", "Assistant de communication", "Attaché de presse", "Chargé de communication", "Chargé de communication événementielle", "Chargé de relations publiques", "Chef de projet communication", "Chef de publicité", "Conseiller en image", "Directeur de la communication", "Documentaliste ged", "Graphiste", "Infographiste", "Recruteur de donateurs", "Responsable communication", "Responsable partenariats", "Responsable éditorial"],
            "Comptabilité": ["Agent de facturation", "Agent de recouvrement", "Assistant administratif et comptable", "Assistant comptable", "Assistant facturation", "Auditeur", "Chargé de recouvrement", "Chef de mission comptable", "Collaborateur comptable", "Commissaire aux comptes", "Comptable", "Comptable Fournisseur", "Comptable auxiliaire", "Comptable client", "Comptable clients recouvrement", "Comptable copropriété", "Comptable gestion locative", "Comptable général", "Comptable paie", "Comptable trésorerie", "Directeur comptable", "Expert-comptable", "Responsable administratif comptable", "Responsable audit", "Responsable comptabilité analytique", "Responsable comptabilité clients", "Responsable comptabilité fournisseurs", "Responsable comptable", "Responsable facturation", "Responsable trésorerie", "Secrétaire comptable", "Technicien comptable", "Trésorier"],
            "Culture": ["Accessoiriste", "Animateur cirque", "Animateur sportif", "Archiviste", "Archiviste documentaliste", "Auteur", "Bibliothécaire", "Caméraman", "Chanteur", "Chef de projet évènementiel", "Chorégraphe", "Compositeur", "Comédien", "DJ", "Danseur", "Dessinateur", "Documentaliste", "Figurant", "Game designer", "Illustrateur", "Ingénieur du son", "Interprète", "Libraire", "Linguiste", "Machiniste", "Mannequin", "Metteur en scène", "Modéliste", "Monteur de stands", "Musicien", "Médiateur culturel", "Photographe", "Professeur de danse", "Professeur de zumba", "Professeur guitare", "Responsable événementiel", "Réalisateur", "Régisseur", "Régisseur lumière", "Sculpteur", "Tatoueur", "Technicien audiovisuel", "Technicien du spectacle", "Technicien son"],
            "Digital": ["Chargé de communication digitale", "Chef de projet digital", "Chef de projet internet", "Community manager", "Designer 3d", "Développeur iPhone", "Développeur mobile", "Développeur web", "Graphiste 2d", "Graphiste 3d", "Graphiste web", "Responsable digital", "Rédacteur web", "Référenceur web", "Webmaster"],
            "Droit": ["Assistant juridique", "Avocat", "Clerc de notaire", "Directeur juridique", "Huissier", "Juriste", "Juriste assurance", "Juriste construction", "Juriste contentieux", "Juriste d'entreprise", "Juriste droit de la concurrence", "Juriste droit des affaires", "Juriste en droit public", "Juriste en droit social", "Juriste immobilier", "Juriste international", "Juriste propriété intellectuelle", "Notaire", "Rédacteur juridique"],
            "Economie": ["Statisticien", "Économiste"],
            "Edition": ["Conducteur offset", "Iconographe"],
            "Emploi public": ["ASVP", "Administratif de la fonction publique", "Agent d'entretien en collectivité", "Agent de service", "Agent de tri courrier", "Agent de voirie", "Animateur du patrimoine", "Chargé de recherche", "Facteur", "Ingénieur VRD", "Militaire", "Policier", "Postier", "Rédacteur territorial", "Surveillant de baignade", "Technicien de recherche", "Technicien environnement"],
            "Enseignement": ["Animateur BAFA", "Assistant pédagogique", "Auxiliaire de vie scolaire", "Chef de projet formation", "Chef de service éducatif", "Coach sportif", "Conseiller d'orientation", "Conseiller pédagogique", "Directeur de centre de formation", "Educateur technique", "Enseignant", "Enseignant chercheur", "Formateur", "Formateur FLE", "Formateur bâtiment", "Formateur en bureautique", "Formateur gestion du stress", "Formateur insertion", "Formateur vacataire", "Ingénieur pédagogique", "Maître-nageur sauveteur", "Moniteur", "Moniteur auto-école", "Professeur allemand", "Professeur d'anglais", "Professeur de SVT", "Professeur de français", "Professeur des écoles", "Professeur histoire géographie", "Professeur mathématiques", "Professeur musique", "Professeur philosophie", "Professeur physique", "Professeur économie", "Responsable pédagogique", "Surveillant examens", "Éducateur sportif"],
            "Environnement": ["Agent d'entretien des espaces verts", "Agent de tri", "Animateur sécurité environnement", "Assistant développement durable", "Biologiste", "Botaniste", "Chargé de mission RSE", "Coordinateur qhse", "Ecologue", "Elagueur", "Garde forestier", "Géologue", "Hydrogéologue", "Ingénieur environnement", "Ingénieur photovoltaique", "Ingénieur thermicien", "Installateur thermique", "Jardinier", "Jardinier paysagiste", "Monteur en climatisation", "Météorologue", "Naturaliste", "Océanographe", "Ouvrier paysagiste", "Releveur de compteur", "Responsable HSE", "Responsable QSE", "Responsable développement durable", "Ripeur", "Technicien HVAC", "Technicien de maintenance génie climatique", "Technicien en froid et climatisation", "Technicien en électricité", "Technicien forestier", "Technicien gaz", "Technicien génie climatique"],
            "Finance": ["Analyste financier", "Asset manager", "Auditeur financier", "Chargé de reporting", "Chef de mission audit", "Conseiller Fiscal", "Conseiller financier", "Consolideur", "Contrôleur financier", "Credit manager", "Directeur financier", "Fiscaliste", "Gestionnaire financier", "Ingénieur financier", "Opérateur de marché", "Responsable administratif financier", "Responsable financier", "Trader"],
            "Gestion": ["Assistant de gestion", "Assistant de gestion PME/PMI", "Business analyst", "Chargé de contentieux", "Consultant gestion", "Contrôleur de gestion", "Delivery manager", "Directeur technique", "Gestionnaire de patrimoine", "Risk manager"],
            "Grande distribution": ["Animateur commercial", "Animateur réseau", "Attaché commercial GMS", "Chef de caisse", "Chef de rayon", "Chef de secteur", "Chef de secteur GMS", "Chef rayon bazar", "Chef rayon boucherie", "Chef rayon boulangerie pâtisserie", "Chef rayon charcuterie traiteur", "Chef rayon poissonnerie", "Conseiller de vente", "Directeur de magasin", "Employé libre-service", "Employé point chaud", "Merchandiseur", "Responsable adjoint magasin", "Responsable commercial GMS", "Responsable drive", "Responsable produits frais", "Responsable rayon", "Responsable rayon poissonnerie"],
            "Hôtellerie": ["Chef de réception", "Directeur hôtel", "Femme de chambre", "Gouvernant", "Majordome", "Réceptionniste", "Valet de chambre", "Veilleur de nuit"],
            "Immobilier": ["Administrateur de biens", "Agent commercial immobilier", "Agent immobilier", "Assistant gestion locative", "Chasseur immobilier", "Commercial immobilier", "Conseiller commercial immobilier", "Directeur de copropriété", "Développeur foncier", "Gestionnaire de copropriété", "Gestionnaire immobilier", "Gestionnaire locatif", "Home stager", "Mandataire immobilier", "Négociateur immobilier", "Négociateur location", "Promoteur", "Prospecteur foncier", "Responsable commercial immobilier", "Responsable contentieux locatif", "Responsable développement foncier", "Responsable immobilier", "Technicien diagnostic immobilier"],
            "Industrie": ["Affûteur", "Agent de conditionnement", "Agent de fabrication", "Agent de finition", "Agent de production", "Agent technique", "Agent technique polyvalent", "Ajusteur", "Ajusteur aéronautique", "Ajusteur mouliste", "Assembleur monteur", "Assistant qualité", "Auditeur qualité", "Bobinier", "Calculateur", "Cariste", "Carrossier", "Chargé de mission qualité", "Chef d'atelier", "Chef d'équipe maintenance", "Chef de projet industriel", "Chef de projet production", "Conditionneur", "Conducteur de four", "Conducteur de ligne", "Conducteur de ligne industrie pharmaceutique", "Conducteur de machine", "Dessinateur industriel", "Dessinateur projeteur cao", "Dessinateur-projeteur", "Directeur R&D", "Directeur de production", "Directeur de site", "Directeur industriel", "Directeur qualité", "Directeur usine", "Drapeur", "Décolleteur", "Ebarbeur", "Electricien industriel", "Electrotechnicien", "Erodeur", "Fraiseur", "Ingénieur calcul de structures", "Ingénieur de production", "Ingénieur de projet", "Ingénieur industrialisation", "Ingénieur maintenance", "Ingénieur métallurgiste", "Ingénieur métrologue", "Ingénieur planning", "Ingénieur pétrolier", "Ingénieur qse", "Ingénieur qualité", "Ingénieur soudage", "Inspecteur qualité", "Metteur au point", "Monteur de meubles", "Monteur-câbleur", "Mouleur", "Mécanicien de maintenance", "Métallier", "Métrologue", "Opérateur de production", "Opérateur salle blanche", "Ordonnanceur", "Outilleur", "Outilleur mouliste", "Ouvrier abattoir", "Ouvrier de production", "Oxycoupeur", "Peintre automobile", "Peintre industriel", "Planificateur", "Plasturgiste", "Plieur cn", "Programmeur CFAO", "Qualiticien", "Rectifieur", "Responsable atelier", "Responsable bureau d'études", "Responsable contrôle qualité", "Responsable de maintenance", "Responsable de production", "Responsable de site", "Responsable fonderie", "Responsable méthodes", "Responsable planification", "Responsable qualité", "Responsable uap", "Régleur", "Soudeur", "Soudeur aluminium", "Stratifieur", "Superviseur de maintenance", "Technicien assurance qualité", "Technicien automaticien", "Technicien bureau d'études", "Technicien controle qualité", "Technicien d'études", "Technicien de fabrication", "Technicien de maintenance", "Technicien de maintenance industrielle", "Technicien de maintenance itinérant", "Technicien essai", "Technicien fonderie", "Technicien industrialisation", "Technicien instrumentation", "Technicien qualité", "Technicien électronicien", "Technicien électrotechnique", "Tourneur", "Usineur"],
            "Informatique": ["Administrateur Linux", "Administrateur SAP", "Administrateur Sharepoint", "Administrateur Windows", "Administrateur base de données", "Administrateur systèmes", "Administrateur unix", "Analyste d'exploitation", "Analyste developpeur", "Analyste-programmeur", "Architecte Java", "Architecte SI", "Architecte informatique", "Architecte logiciel", "Architecte réseau", "Architecte technique", "Chef de projet .NET", "Chef de projet AMOA", "Chef de projet Java", "Chef de projet MOA", "Chef de projet MOE", "Chef de projet décisionnel", "Chef de projet erp", "Chef de projet fonctionnel", "Chef de projet informatique", "Chef de projet infrastructure", "Chef de projet mobile", "Chef de projet technique", "Chef de projet web", "Concepteur designer", "Consultant AMOA", "Consultant SAP", "Consultant SEO", "Consultant SIRH", "Consultant Sécurité", "Consultant fonctionnel", "Consultant informatique", "Coordinateur informatique", "Data Scientist", "Developpeur full stack", "Directeur informatique", "Développeur .NET", "Développeur Android", "Développeur C", "Développeur C++", "Développeur Flash", "Développeur Java", "Développeur PHP", "Développeur Python", "Développeur SQL", "Développeur VBA", "Développeur back end", "Développeur front end", "Développeur informatique", "Développeur logiciel", "Electronicien", "Expert sécurité", "Formateur informatique", "Géomaticien", "IT manager", "Informaticien", "Ingenieur devops", "Ingénieur Unix", "Ingénieur commercial informatique", "Ingénieur décisionnel", "Ingénieur développeur", "Ingénieur informatique", "Ingénieur logiciel", "Ingénieur poste de travail", "Ingénieur support", "Ingénieur système", "Ingénieur sécurité", "Ingénieur traitement du signal", "Intégrateur web", "Motion designer", "Programmeur informatique", "Pupitreur", "Scrum master", "Technicien de maintenance informatique", "Technicien de support", "Technicien exploitation informatique", "Technicien helpdesk", "Technicien support informatique", "Webdesigner"],
            "Ingénierie": ["Acousticien", "Automaticien", "Chargé d'affaires cvc", "Chaudronnier naval", "Dessinateur cvc", "Hydraulicien", "Ingénieur Génie des procédés", "Ingénieur R&D", "Ingénieur acoustique", "Ingénieur automaticien", "Ingénieur automobile", "Ingénieur aéronautique", "Ingénieur calcul", "Ingénieur contrôle commande", "Ingénieur de recherche", "Ingénieur eau", "Ingénieur en optique", "Ingénieur génie civil", "Ingénieur laser", "Ingénieur mathématiques appliquées", "Ingénieur matériaux", "Ingénieur micro électronique", "Ingénieur modélisation", "Ingénieur mécanique des fluides", "Ingénieur mécatronique", "Ingénieur méthodes", "Ingénieur nucléaire", "Ingénieur procédés", "Ingénieur robotique", "Ingénieur simulation numérique", "Ingénieur sûreté", "Ingénieur électricité", "Ingénieur électronique", "Metteur au point climatisation", "Projeteur vrd", "Roboticien", "Technicien aéronautique", "Technicien courant faible", "Technicien cvc", "Technicien domotique"],
            "Logistique": ["Affréteur", "Agent de logistique", "Agent de quai", "Agent de transit", "Analyste logistique", "Approvisionneur", "Assistant approvisionnement", "Assistant d'exploitation", "Assistant import export", "Assistant logistique", "Chef de dépôt", "Chef de projet logistique", "Conducteur routier", "Conducteur routier pl", "Conducteur routier spl", "Consultant supply chain", "Coordinateur logistique", "Coursier", "Directeur logistique", "Directeur supply chain", "Dispatcheur", "Gestionnaire de parc automobile", "Gestionnaire de stocks", "Ingénieur logistique", "Inventoriste", "Logisticien", "Magasinier", "Manutentionnaire", "Opérateur logistique", "Pilote de flux", "Préparateur de commande", "Responsable de quai", "Responsable exploitation", "Responsable export", "Responsable expéditions", "Responsable logistique", "Responsable magasinier", "Responsable transit", "Réceptionnaire", "Technicien logistique", "gestionnaire de flux"],
            "Marketing": ["Analyste de données", "Assistant chef de produit marketing", "Assistant chef de projet marketing", "Assistant marketing", "Bid manager", "Brand manager", "Category manager", "Chargé d'études marketing", "Chargé d'études statistiques", "Chargé de marketing", "Chef de produit", "Chef de projet marketing", "Chef de projet web marketing", "Concepteur rédacteur", "Coordinateur Marketing", "Designer", "Directeur artistique", "Directeur de clientèle", "Directeur marketing", "Distributeur", "Enquêteur sondage", "Enquêteur terrain", "Panéliste", "Responsable marketing", "Responsable marketing opérationnel", "Responsable trade marketing", "Responsable web marketing", "Traffic manager"],
            "Mécanique": ["Aide mécanicien", "Ascensoriste", "Chef atelier automobile", "Chef mécanicien", "Contrôleur technique automobile", "Dessinateur mécanique", "Dépanneur remorqueur", "Electricien automobile", "Electromécanicien", "Ingenieur conception mecanique", "Ingénieur en génie mécanique", "Ingénieur mécanique", "Monteur mécanique", "Mécanicien automobile", "Mécanicien monteur", "Mécanicien moto", "Mécanicien motoculture", "Mécanicien outilleur", "Mécanicien poids lourds", "Projeteur mécanique", "Préparateur automobile", "Responsable carrosserie", "Technicien automobile", "Technicien d'atelier"],
            "Médias": ["Cadreur monteur", "Chef de rubrique", "Graphiste PAO", "Graphiste designer", "Graphiste multimédias", "Infographiste multimédias", "Journaliste", "Maquettiste", "Massicotier", "Monteur vidéo", "Relecteur-correcteur", "Reporter", "Rédacteur en chef", "Rédacteur pigiste", "Rédacteur scientifique", "Secrétaire de rédaction", "Sérigraphe"],
            "Petite enfance": ["ATSEM", "Agent service crèche", "Aide-éducateur", "Animateur centre loisirs", "Animateur enfants", "Animateur périscolaire", "Assistante maternelle", "Auxiliaire crèche", "Auxiliaire petite enfance", "Directeur de centre de loisirs", "Directeur de crèche", "Infirmier crèche", "Puériculteur"],
            "Physique": ["Animateur tennis", "Physicien"],
            "Propreté": ["Agent de nettoyage", "Agent de propreté", "Agent maintenance bâtiment", "Employé de nettoyage", "Laveur de vitres", "Ouvrier d'entretien"],
            "Ressources humaines": ["Assistant recrutement", "Assistant ressources humaines", "Chargé de mission RH", "Chargé de recrutement", "Chargé de ressources humaines", "Chef de projet Ressources Humaines", "Chef de projet SIRH", "Chef du personnel", "Chief happiness officer", "Collaborateur social", "Conseiller formation", "Consultant en recrutement", "Consultant en ressources humaines", "Consultant management", "Contrôleur de gestion sociale", "Directeur des ressources humaines", "Ergonome", "Gestionnaire RH", "Gestionnaire de paie", "Gestionnaire du personnel", "Knowledge manager", "Lean manager", "Project management officer", "Responsable Administration Du Personnel", "Responsable des ressources humaines", "Responsable formation", "Responsable paie", "Responsable relations sociales", "Team leader"],
            "Restauration": ["Agent de restauration", "Aide-cuisinier", "Barman", "Chef cuisinier", "Chef de partie", "Chef de rang", "Chef de secteur CHR", "Chef gérant", "Chef pâtissier", "Commis de cuisine", "Commis de salle", "Crêpier", "Cuisinier", "Cuisinier de collectivité", "Directeur de restaurant", "Employé polyvalent de restauration", "Grillardin", "Livreur de pizzas", "Manager en restauration", "Maître d'hôtel", "Oenologue", "Plongeur", "Pâtissier", "Responsable de cuisine", "Responsable de salle", "Responsable en restauration", "Second de cuisine", "Serveur", "Serveur barman", "Serveur extra", "Sommelier"],
            "Santé": ["ASH - Agent de services hospitaliers", "Agent de service maison de retraite", "Agent de stérilisation", "Aide-soignant", "Ambulancier", "Anesthésiste", "Assistant dentaire", "Assistant médical", "Assistant vétérinaire", "Attaché de recherche clinique", "Audioprothésiste", "Auxiliaire ambulancier", "Auxiliaire de puériculture", "Biostatisticien", "Brancardier", "Cadre de santé", "Cadre infirmier", "Cadre supérieur de santé", "Cardiologue", "Chef de bloc", "Chef de service", "Chirurgien", "Chirurgien orthopédiste", "Dentiste", "Dermatologue", "Directeur d'EHPAD", "Directeur d'établissement de santé", "Directeur des soins", "Directeur médico-social", "Diététicien", "Endocrinologue", "Ergothérapeute", "Gastro-entérologue", "Gynécologue", "Infirmier", "Infirmier anesthésiste", "Infirmier auxiliaire", "Infirmier bloc opératoire", "Infirmier coordinateur", "Infirmier dialyse", "Infirmier du secteur psychiatrique", "Infirmier ehpad", "Infirmier médecine du travail", "Infirmier urgences", "Infirmière en entreprise", "Infirmière libérale", "Kinésithérapeute", "Manipulateur en radiologie", "Masseur kinésithérapeute", "Médecin coordinateur", "Médecin du travail", "Médecin généraliste", "Médecin gériatre", "Médecin urgentiste", "Neurochirurgien", "Neurologue", "Neuropsychologue", "Nutritionniste", "Néphrologue", "Oncologue", "Ophtalmologue", "Optométriste", "Orthophoniste", "Ostéopathe", "Pharmacien", "Pharmacien affaires réglementaires", "Pharmacien biologiste", "Pharmacien hospitalier", "Pharmacien qualité", "Pneumologue", "Podologue", "Professeur de yoga", "Préparateur en pharmacie", "Psychiatre", "Psychologue", "Psychologue clinicien", "Psychologue du travail", "Psychomotricien", "Pédiatre", "Radiologue", "Sage-femme", "Secrétaire dentaire", "Sophrologue", "Technicien biomédical", "Urologue", "Visiteur médical", "Vétérinaire"],
            "Secrétariat": ["Assistant secrétaire", "Secrétaire", "Secrétaire administratif", "Secrétaire bilingue", "Secrétaire commercial", "Secrétaire de direction", "Secrétaire médicale", "Télésecrétaire"],
            "Sécurité": ["Agent cynophile sécurité", "Agent de surveillance", "Agent de sécurité", "Agent de sécurité incendie", "Animateur sécurité", "Convoyeur de fonds", "Détective", "Garde du corps", "Gardien", "Gardien de la paix", "Gendarme", "Opérateur télésurveillance", "Pilote de drones", "Responsable sécurité", "Sapeur-Pompier", "Secouriste"],
            "Service clientèle": ["Agent d'accueil", "Assistant personnel", "Etalagiste", "Hotliner", "Père Noël", "Rédacteur technique", "Technicien SAV", "Technicien électroménager", "Toiletteur"],
            "Services à la personne": ["Aide ménagère à domicile", "Aide à domicile", "Baby sitter", "Chef d'équipe propreté", "Coach professionnel", "Coiffeur", "Concierge", "Déménageur", "Employé familial", "Employé pressing", "Esthéticien", "Femme de ménage", "Garde d'animaux", "Gardien d'immeuble", "Maquilleur", "Repasseur", "Thanatopracteur"],
            "Social": ["Aide médico-psychologique", "Animateur maison retraite", "Assistant de service social", "Auxiliaire de vie sociale - AVS", "Conseiller en insertion professionnelle", "Conseiller en économie sociale et familiale", "Conseiller social", "Coordinateur social", "Directeur ESAT", "Directeur adjoint ESAT", "Educateur", "Intervenant action sociale", "Moniteur d'atelier", "Moniteur éducateur", "Éducateur spécialisé"],
            "Télécommunications": ["Administrateur réseau", "Ingénieur radio", "Ingénieur réseau", "Ingénieur télécom", "Piqueteur", "Technicien fibre optique", "Technicien réseau", "ingénieur hyperfréquences"],
            "Tourisme": ["Accompagnateur montagne", "Accompagnateur tourisme équestre", "Agent de comptoir", "Agent de développement touristique", "Agent de réservation", "Agent de voyage", "Animateur tourisme", "Animateur village vacances", "Billettiste", "Conseiller voyages", "Directeur centre de vacances", "Forfaitiste", "Guide touristique", "Moniteur de ski", "Responsable animation", "Spa manager"],
            "Transport": ["Agent aéroportuaire", "Agent d'escale", "Agent d'exploitation transport et logistique", "Agent de piste", "Agent de trafic aérien", "Agent sûreté aéroportuaire", "Architecte naval", "Bagagiste", "Chauffeur VTC", "Chauffeur d'autocar", "Chauffeur de bus", "Chauffeur de direction", "Chauffeur de taxi", "Chauffeur livreur", "Chauffeur privé", "Chauffeur routier", "Chef de quart", "Contrôleur aérien", "Convoyeur de véhicules", "Directeur transport", "Docker", "Déclarant en douane", "Formateur conduite", "Hôtesse de l'air", "Ingénieur aérodynamique", "Ingénieur signalisation ferroviaire", "Magasinier aéronautique", "Monteur de pneus", "Mécanicien aéronautique", "Pilote d'avion", "Pilote d'hélicoptère", "Responsable transport"],
            "Vente": ["Assistant administration des ventes", "Caissier", "Chef des ventes régional", "Concepteur vendeur", "Conseiller beauté", "Coordinateur des ventes", "Directeur de filiale", "Délégué pharmaceutique", "Formateur vente", "Gestionnaire administration des ventes", "Manager des ventes", "Product owner", "Prévisionniste des ventes", "Responsable administration des ventes", "Responsable boutique", "Responsable commercial automobile", "Responsable de caisse", "Responsable de magasin", "Responsable de secteur", "Responsable parapharmacie", "Responsable télévente", "Télé prospecteur", "Télévendeur", "Vendeur", "Vendeur animalerie", "Vendeur automobile", "Vendeur jeux video", "Vendeur moto", "Vendeur multimédia"]
        };

        // --- 2. MAP DES FILIÈRES (Pour recommandations intelligentes) ---
        const STREAM_MAP = {
            "SC_Maths": ["Ingénierie", "Informatique", "Physique", "Chimie", "Architecture", "Industrie", "Economie", "Mathématiques"],
            "SC_Exp": ["Santé", "Environnement", "Agricole", "Biologie", "Chimie"],
            "STEG": ["Btp", "Mécanique", "Electricité", "Industrie", "Chimie", "Ingénierie"],
            "EG": ["Commerce", "Vente", "Banque", "Finance", "Comptabilité", "Gestion", "Marketing", "Digital", "Administration"],
            "SH": ["Enseignement", "Social", "Ressources humaines", "Sécurité", "Administration", "Services à la personne", "Emploi public"],
            "LP": ["Enseignement", "Droit", "Culture", "Médias", "Communication", "Hôtellerie", "Tourisme", "Artisanat"]
        };

        // --- 3. TAGS & TAGS MAP ---
        const TAG_MAP = {
            "Santé": ["bio", "social", "soin"],
            "Btp": ["manuel", "technique", "logique"],
            "Informatique": ["tech", "logique", "code"],
            "Industrie": ["technique", "manuel", "usine"],
            "Mécanique": ["technique", "manuel", "logique"],
            "Ingénierie": ["science", "logique", "maths"],
            "Commerce": ["vente", "contact", "eco"],
            "Vente": ["vente", "contact", "commerce"],
            "Banque": ["finance", "eco", "maths"],
            "Finance": ["finance", "eco", "maths"],
            "Comptabilité": ["admin", "maths", "eco"],
            "Gestion": ["admin", "eco", "management"],
            "Assurance": ["finance", "commerce", "droit"],
            "Droit": ["lettre", "droit", "justice"],
            "Architecture": ["arts", "logique", "design"],
            "Artisanat": ["manuel", "arts", "creation"],
            "Culture": ["arts", "creation", "lettre"],
            "Enseignement": ["social", "lettre", "science"],
            "Social": ["social", "soin", "humain"],
            "Ressources humaines": ["social", "admin", "droit"],
            "Transport": ["manuel", "logistique", "conducteur"],
            "Logistique": ["manuel", "organisation", "logistique"],
            "Hôtellerie": ["contact", "service", "social"],
            "Restauration": ["manuel", "service", "creation"],
            "Environnement": ["bio", "nature", "science"],
            "Agricole": ["bio", "nature", "manuel"],
            "Sécurité": ["manuel", "social", "ordre"],
            "Marketing": ["creation", "commerce", "eco"],
            "Communication": ["creation", "media", "lettre"],
            "Médias": ["creation", "media", "lettre"],
            "Digital": ["tech", "creation", "code"],
            "Immobilier": ["commerce", "logique", "patrimoine"],
            "Administration": ["admin", "secretariat", "org"],
            "Secrétariat": ["admin", "secretariat", "org"],
            "Services à la personne": ["social", "manuel", "service"],
            "Propreté": ["manuel", "service", "hygiene"],
            "Achat": ["commerce", "organisation", "négociation"],
            "Grande distribution": ["commerce", "service", "stock"],
            "Tourisme": ["contact", "service", "culture"],
            "Alimentation": ["manuel", "creation", "hygiene"],
            "Chimie": ["science", "labo", "bio"],
            "Physique": ["science", "maths", "recherche"],
            "Economie": ["eco", "maths", "analyse"],
            "Aménagement": ["urbanisme", "nature", "design"],
            "Emploi public": ["admin", "social", "service"],
            "Petite enfance": ["social", "soin", "education"]
        };

        // --- 4. DESCRIPTIONS SPÉCIFIQUES ---
        const CUSTOM_DESC = {
            "Médecin": "Médecin généraliste ou spécialiste qui diagnostique et traite les maladies.",
            "Infirmier": "Personnel soignant qui réalise les soins médicaux et assure le confort des patients.",
            "Avocat": "Juriste qui conseille et défend ses clients devant les tribunaux.",
            "Architecte": "Professionnel qui conçoit la structure et l'esthétique des bâtiments.",
            "Développeur web": "Ingénieur logiciel qui crée des sites internet et des applications web.",
            "Ingénieur": "Professionnel hautement qualifié qui conçoit des solutions techniques.",
            "Comptable": "Spécialiste de la gestion financière qui enregistre les flux et assure la fiscalité.",
            "Maçon": "Ouvrier du BTP spécialisé dans la construction de murs et structures.",
            "Plombier": "Technicien qui installe et répare les réseaux d'eau.",
            "Électricien": "Technicien qui réalise l'installation des circuits électriques.",
            "Professeur": "Enseignant qui transmet des connaissances dans un établissement scolaire.",
            "Policier": "Agent de l'État chargé de maintenir l'ordre public.",
            "Pilote d'avion": "Professionnel chargé de piloter un aéronef.",
            "Chef de projet": "Responsable qui coordonne les ressources d'un projet pour atteindre les objectifs.",
            "Journaliste": "Professionnel de l'information qui rédige des articles sur l'actualité."
        };

        // --- 5. MAPPING DES NIVEAUX (Pour le badge "Tu es ici") ---
        const LEVEL_MAP = {
            "3AC": ["3ème Année Collège"],
            "TC": ["Tronc Commun"],
            "1BAC": ["1ère Bac"],
            "2BAC": ["2ème Bac"],
        };

        // --- 6. DONNÉES PARCOURS TIMELINE (EXPERT) ---
        const PATHS_DATA = {
            "Médecin": {
                main: [
                    { year: "3ème Année Collège", target: "Tronc Commun Scientifique", desc: "Obtenir le brevet et viser une moyenne > 12." },
                    { year: "Tronc Commun", target: "1ère Bac Sciences Expérimentales ou science mathématiques", desc: "Spécialité SVT (Sciences de la Vie et de la Terre)." },
                    { year: "1ère Bac", target: "2ème Bac Sciences SVT ou Sciences Mathématiques A", desc: "Une bonne maitrise de SVT  (seuil: >12/20)." },
                    { year: "Baccalauréat", target: "FMP (1ère Année Commune)", desc: "S'inscrire au FMP. 1 année universitaire commune (SVT/BCP)." },
                    { year: "FMP", target: "CNA (Concours National d'Accès)", desc: "Réussir le CNA pour accéder à la filière Médecine/Dentaire/Pharma." },
                    { year: "1er Cycle (2 ans)", target: "Externat ou Internat", desc: "Formation sciences fondamentales et à l’enseignement préclinique, avec des cours comme anatomie, physiologie, biochimie et des immersions d’introduction au système de santé." },
                    { year: "2ème Cycle (3 ans)", target: "Début travaux pratiques", desc: "combinent enseignements théoriques avancés et stages cliniques externes à mi-temps, pour apprendre les compétences médicales et travailler en milieu hospitalier." },
                    { year: "3ème cycle (1 ans)", target: "Thèse de Médecine", desc: "consacrée à des stages cliniques à plein temps, pendant lesquels tu effectues des rotations dans différents services hospitaliers et prépares ta thèse de doctorat en médecine." },
                ],
                alternatives: [
                    { condition: "Si échec au CNA (Concours)", path: ["Option: Re-essayer le Concours d’accès aux Facultés de Médecine et de Pharmacie (FMP) l'année suivante.", "Option: Etudier le médecine à l'étranger.", "Option:Se réorienter vers Pharmacie ou Dentaire si rang suffisant ."] },
                    
                ]
            },
            "Ingénieur": {
                main: [
                    { year: "3ème Année Collège", target: "Tronc Commun Scientifique", desc: "Obtenir le brevet ." },
                    { year: "Tronc Commun", target: "1ère Bac Sciences Maths", desc: "Optionnel: Sciences Maths A (Bio) ou B (PC)." },
                    { year: "1ère Bac", target: "2ème Bac Sciences Maths", desc: "Se concentrer sur les exercices difficiles (Arithmétique, Analyse)." },
                    { year: "Baccalauréat", target: "CPGE (Classes Préparatoires)", desc: "Intégrer une CPGE (MPSI, PTSI, TSI) dans un lycée ou prépa intégrée." },
                    { year: "CPGE (2 ans)", target: "CNC (Concours National Commun)", desc: "Concours très sélectif vers les Grandes Écoles d'Ingénieurs (ENSA, ENSEM, ENIM...)." },
                    { year: "École d'Ingénieurie", target: "Cycle Ingénieur (3 ans)", desc: "Diplôme d'Ingénieur d'État. Formation haute et technique." }
                ],
                alternatives: [
                    { condition: "Si échec au BAC", path: ["Option: Redoubler la 2ème année Bac.","Option: Passer bac libre", "Option: Se réorienter vers OFPPT (TS Mécanique/Électricité)."] },
                    { condition: "Si échec au CNC", path: ["Option: EST (École Supérieure de Technologie).", "Diplôme: Ingénieur d'État après 3 ans (plus accessible).", "Option: Admission parallèle (Cycle Ingénieur) en 1ère année.","Option: Redoubler la 2ème année prépa."] }
                ]
            },
            "Avocat": {
                main: [
                    { year: "3ème Année Collège", target: "Recommender: Tronc commun lettre. Possible avec Tronc Commun Scientifique", desc: "Réussire le brevet." },
                    { year: "Tronc Commun", target: "1ère Bac Sciences Exp / LSH", desc: "Avoir l'esprit d'analyse et d'argumentation." },
                    { year: "1ère Bac", target: "2ème Bac", desc: "Terminer le Bac avec mention (Bien ou Très Bien conseillé)." },
                    { year: "Baccalauréat", target: "Faculté de Droit", desc: "Inscription en Licence de Droit Privé ou Public." },
                    { year: "Licence (3 ans)", target: "Master (2 ans)", desc: "Spécialisation en Droit des Affaires, Fiscalité ou Justice." },
                    { year: "Master", target: "IEA (Institut d'Études Judiciaires)", desc: "Stage de 18 mois obligatoire à l'Institut des Études Judiciaires (Rabat/Marrakech)." },
                    { year: "Serment", target: "Avocat au Barreau", desc: "Prestation de serment et début de carrière." }
                ],
                alternatives: [
                    { condition: "Si échec à la Faculté ou Concours", path: ["Option: Préparer le concours de l'ENA (Administration Publique).", "Option: Juriste en entreprise avec un Master Droit Privé."] }
                ]
            },
            "Développeur web": {
                main: [
                    { year: "3ème Année Collège", target: "Tronc Commun Scientifique", desc: "Intérêt pour l'algorithmique." },
                    { year: "Tronc Commun", target: "1ère Bac Sciences Maths", desc: "Bon niveau en Maths indispensable." },
                    { year: "1ère Bac", target: "2ème Bac Sciences Maths", desc: "Débuter l'auto-formation (HTML, CSS, JS) dès le lycée." },
                    { year: "Baccalauréat", target: "École d'Ingénieur ou Faculté", desc: "Cursus : ENSA (Filière Info), ENIAS, INPT ou Faculté des Sciences." },
                    { year: "Diplôme", target: "Premier emploi Junior", desc: "Développeur Full-stack ou Mobile." }
                ],
                alternatives: [
                    { condition: "Si pas le BAC Scientifique", path: ["Option: OFPPT (TS Développement Web et Communication Numérique).", "Option: BTS Informatique (ISET)." ] }
                ]
            },
            "default": {
                main: [
                    { year: "3ème Année Collège", target: "Tronc Commun", desc: "Obtenir le brevet." },
                    { year: "Tronc Commun", target: "1ère Bac", desc: "Choisir la filière adaptée." },
                    { year: "Baccalauréat", target: "École ou Université", desc: "Voir les détails dans la section 'Comment y arriver ?'." }
                ],
                alternatives: [
                    { condition: "Si échec scolaire", path: ["Option: OFPPT (Formation professionnelle).", "Option: BTS / ISET (Bac+2)."] }
                ]
            }
        };

        // --- 7. APPLICATION CORE ---
        const app = {
            jobs: [],
            user: null,
            quizScores: {},

            // === 7.1 COMPARATEUR DE FILIÈRES ===
            comparator: {
                data: {
                    "sc_maths": {
                        label: "Sciences Maths",
                        difficulty: 5, math: 5, load: 5,
                        duration: "5 à 7 ans (Supérieur)",
                        jobs: ["Ingénieur", "Architecte", "Chercheur", "Data Scientist", "Professeur Universitaire"],
                        market: "Secteurs très porteurs (Informatique, Énergie, Aérospatial)",
                        profile: "Logique très développée, excellence en maths, rigueur scientifique, bosseur.",
                        Commentaire: "Recommandé pour les élèves aimant les défis intellectuels et la résolution de problèmes complexes."
                    },
                    "sc_exp": {
                        label: "Sciences Expérimentales",
                        difficulty: 3, math: 3, load: 4,
                        duration: "6 à 8 ans (Santé) ou 5 ans (Supérieur)",
                        jobs: ["Médecin", "Pharmacien", "Vétérinaire", "Biologiste", "Ingénieur Environnement"],
                        market: "Secteur Santé (stable) et Environnement en croissance",
                        profile: "Intérêt pour la vie, les sciences naturelles, l'observation et la logique."
                    },
                    "eco": {
                        label: "Économie & Gestion",
                        difficulty: 3, math: 4, load: 3,
                        duration: "4 à 5 ans (École/Univ)",
                        jobs: ["Comptable", "Auditeur", "Commercial", "Banquier", "Gestionnaire"],
                        market: "Très large besoins en gestion, finance et commerce.",
                        profile: "Aisance avec les chiffres, goût pour l'organisation, l'entreprise et les relations humaines."
                    },
                    "lettres": {
                        label: "Lettres & Philosophie",
                        difficulty: 3, math: 1, load: 3,
                        duration: "4 à 5 ans (Faculté/Prépa)",
                        jobs: ["Professeur", "Journaliste", "Avocat", "Écrivain", "Ressources Humaines"],
                        market: "Métiers de l'enseignement, du droit et de la communication.",
                        profile: "Excellente expression écrite/orale, curiosité intellectuelle, esprit critique."
                    },
                    "univ": {
                        label: "Université (Filières Littéraires/Humaines)",
                        difficulty: 2, math: 1, load: 2,
                        duration: "4 ans (Licence) et plus",
                        jobs: ["Enseignant", "Chercheur en SHS", "Fonctionnaire", "Journaliste"],
                        market: "Secteur public fort, mais accès aux concours difficile.",
                        profile: "Autonomie, capacité de recherche, intérêt pour la théorie."
                    },
                    "ecoles": {
                        label: "Écoles Supérieures (Ingénierie/Commerce)",
                        difficulty: 5, math: 5, load: 5,
                        duration: "5 ans (Cycle ingénieur/commercial)",
                        jobs: ["Ingénieur d'État", "Chef de projet", "Directeur d'agence", "Consultant"],
                        market: "Haut niveau de rémunération et opportunités à l'international.",
                        profile: "Bon niveau général, capacité de travail intense, ambition."
                    },
                    "OFPPT": {
                        label: "OFPPT (Formation Professionnelle)",
                        difficulty: 2, math: 2, load: 4,
                        duration: "2 ans (Technicien) à 3 ans (Spécialisé)",
                        jobs: ["Technicien", "Technicien Spécialisé", "Ouvrier qualifié", "Artisan"],
                        market: "Besoins très forts des entreprises marocaines, insertion professionnelle rapide.",
                        profile: "Goût pour la pratique manuelle ou technique, envie d'entrer vite dans la vie active."
                    }
                },

                runComparison: function() {
                    const s1 = document.getElementById('streamSelect1').value;
                    const s2 = document.getElementById('streamSelect2').value;
                    const container = document.getElementById('compareResults');
                    container.innerHTML = ''; 
                    if (!s1 || !s2) { alert("Veuillez sélectionner au moins deux options à comparer."); return; }

                    const selections = [s1, s2].filter(Boolean); 
                    selections.forEach(key => {
                        const data = this.data[key];
                        if(!data) return;
                        let isMatch = false;
                        // Utilisation de l'objet 'app' global via la variable globale ou closure
                        if (window.app.user && window.app.user.stream) {
                            if (window.app.user.stream === "SC_Maths" && key === "sc_maths") isMatch = true;
                            if (window.app.user.stream === "SC_Exp" && key === "sc_exp") isMatch = true;
                            if (window.app.user.stream === "EG" && key === "eco") isMatch = true;
                            if (window.app.user.stream === "LP" && (key === "lettres" || key === "univ")) isMatch = true;
                            if (window.app.user.stream === "SH" && key === "univ") isMatch = true;
                            if (window.app.user.stream === "STEG" && key === "ecoles") isMatch = true;
                        }
                        const matchBadge = isMatch ? `<div class="badge-reco">Recommandé pour toi</div>` : '';
                        const matchClass = isMatch ? 'match' : '';
                        const html = `
                            <div class="comp-card ${matchClass}">${matchBadge}
                                <div class="comp-title">${data.label}</div>
                                <ul class="comp-list"><li><strong>Durée :</strong> ${data.duration}</li></ul>
                                <div class="comp-stat-row"><div class="comp-stat-label"><span>Difficulté</span><span>${data.difficulty}/5</span></div><div class="progress-bg"><div class="progress-fill" style="width:${data.difficulty*20}%"></div></div></div>
                                <div class="comp-stat-row"><div class="comp-stat-label"><span>Maths</span><span>${data.math}/5</span></div><div class="progress-bg"><div class="progress-fill" style="width:${data.math*20}%"></div></div></div>
                                <div class="comp-stat-row"><div class="comp-stat-label"><span>Charge de travail</span><span>${data.load}/5</span></div><div class="progress-bg"><div class="progress-fill" style="width:${data.load*20}%"></div></div></div>
                                <p style="font-size:0.9rem; margin-top:10px;"><strong>Débouchés :</strong> ${data.market}</p>
                                <p style="font-size:0.9rem; color:#666;"><strong>Profil :</strong> ${data.profile}</p>
                            </div>
                        `;
                        container.innerHTML += html;
                    });
                }
            },

            // === 7.2 PARCOURS TIMELINE (Comment y arriver ?) ===
            pathFinder: {
                getPathsForJob: function(jobTitle) {
                    if (PATHS_DATA[jobTitle]) return PATHS_DATA[jobTitle];
                    return PATHS_DATA["default"];
                },

                renderHTML: function(job) {
                    const pathData = this.getPathsForJob(job.title);
                    const user = window.app.user ? window.app.user : null; 
                    const userLevel = user ? user.level : null;
                    let timelineHTML = `<div class="timeline">`;
                    
                    pathData.main.forEach((step, index) => {
                        let isCurrent = false;
                        // LOGIQUE DU BADGE "TU ES ICI"
                        if (userLevel && LEVEL_MAP[userLevel]) {
                            if (LEVEL_MAP[userLevel].some(levelText => step.year.includes(levelText))) {
                                isCurrent = true;
                            }
                        }
                        
                        const activeClass = isCurrent ? 'is-current' : '';
                        const currentLabel = isCurrent ? `<span class="level-badge active">Tu es ici</span>` : '';

                        timelineHTML += `
                            <div class="timeline-item ${activeClass}">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <span class="timeline-year">${step.year} ${currentLabel}</span>
                                    <span class="timeline-title">🎯 Cible : ${step.target}</span>
                                    <p style="margin-top:5px; font-size:0.9rem; color:#666;">${step.desc}</p>
                                </div>
                            </div>
                        `;
                    });
                    timelineHTML += `</div>`;

                    let altsHTML = ``;
                    if (pathData.alternatives) {
                        altsHTML = `<div class="alternatives-box">
                            <h4 style="color:#1565c0; margin-bottom:15px; display:flex; align-items:center; gap:8px;">
                                <span>🛡️</span> Alternatives (Plan B / C)
                            </h4>`;
                        pathData.alternatives.forEach(alt => {
                            altsHTML += `
                                <div class="alt-item">
                                    <span class="alt-condition">👉 ${alt.condition}</span>
                                    <div class="alt-desc">${Array.isArray(alt.path) ? alt.path.join('<br/>') : alt.path}</div>
                                </div>
                            `;
                        });
                        altsHTML += `</div>`;
                    }

                    return `
                        <div class="parcours-container" id="parcoursDetail">
                            <div class="parcours-header">
                                <span>🛣️</span> Ton chemin vers : ${job.title}
                            </div>
                            
                            ${timelineHTML}
                            ${altsHTML}
                            ${!user ? '<p style="text-align:center; font-size:0.8rem; color:#888; margin-top:10px;"><i>(Connecte-toi pour voir ta position actuelle sur ce chemin)</i></p>' : ''}
                        </div>
                    `;
                }
            },

            init: function() {
                this.generateJobs();
                this.loadUser();
                this.renderFilters();
                
                if(this.user) {
                    document.getElementById('navLinks').style.display = 'block';
                    this.navigate('dashboard');
                } else {
                    this.navigate('onboarding');
                }
                
                document.getElementById('totalJobsCount').textContent = this.jobs.length;
                document.getElementById('totalCatsCount').textContent = Object.keys(RAW_DATA).length;
            },

            generateJobs: function() {
                let id = 1;
                for (const [cat, titles] of Object.entries(RAW_DATA)) {
                    const tags = TAG_MAP[cat] || ["autre"];
                    titles.forEach(title => {
                        let desc = CUSTOM_DESC[title]; 
                        if (!desc) {
                            const prefix = title.split(' ')[0].toLowerCase();
                            const context = cat.toLowerCase();
                            if (prefix.startsWith("ingénieur")) desc = `L'Ingénieur en ${cat} conçoit des solutions techniques complexes dans le secteur ${cat}.`;
                            else if (prefix.startsWith("technicien")) desc = `Le ${title} intervient en support technique et opérationnel dans le secteur ${cat}.`;
                            else if (prefix.startsWith("assistant") || prefix.startsWith("adjoint")) desc = `L'${title} apporte une assistance administrative et opérationnelle aux cadres dans le domaine ${cat}.`;
                            else if (prefix.startsWith("responsable")) desc = `Le ${title} anime et coordonne une équipe dans le secteur ${cat}.`;
                            else if (prefix.startsWith("chef")) desc = `Le ${title} dirige une équipe opérationnelle dans le secteur ${cat}.`;
                            else if (prefix.startsWith("commercial") || title.includes("vendeur")) desc = `Le ${title} développe le chiffre d'affaires et prospecte les clients dans le secteur ${cat}.`;
                            else if (title.includes("directeur")) desc = `Le ${title} définit la stratégie globale et pilote les équipes du secteur ${cat}.`;
                            else desc = `Le ${title} exerce ses fonctions dans le secteur ${cat}.`;
                        }
                        this.jobs.push({ id: id++, title: title, category: cat, description: desc, tags: tags });
                    });
                }
            },

            // --- NAVIGATION & ROUTING ---
            navigate: function(pageId) {
                document.querySelectorAll('section').forEach(el => el.classList.remove('active'));
                document.getElementById(pageId).classList.add('active');
                window.scrollTo(0,0);
                if(pageId === 'dashboard') this.renderDashboard();
                if(pageId === 'jobs') this.filterJobs('all');
            },

            // --- USER PROFILE ---
            toggleStream: function() {
                const lvl = document.getElementById('level').value;
                const grp = document.getElementById('streamGroup');
                if(lvl === '1BAC' || lvl === '2BAC') grp.style.display = 'block';
                else grp.style.display = 'none';
            },

            saveProfile: function(e) {
                e.preventDefault();
                this.user = {
                    name: document.getElementById('name').value,
                    level: document.getElementById('level').value,
                    stream: document.getElementById('stream').value || ''
                };
                localStorage.setItem('om_user', JSON.stringify(this.user));
                document.getElementById('navLinks').style.display = 'block';
                this.navigate('dashboard');
            },

            loadUser: function() {
                const stored = localStorage.getItem('om_user');
                if(stored) {
                    this.user = JSON.parse(stored);
                    document.getElementById('uName').textContent = this.user.name;
                }
            },

            logout: function() {
                localStorage.removeItem('om_user');
                this.user = null;
                document.getElementById('navLinks').style.display = 'none';
                document.getElementById('name').value = '';
                this.navigate('onboarding');
            },

            // --- RENDERING ---
            renderDashboard: function() {
                document.getElementById('uName').textContent = this.user.name;
                const random = this.jobs.sort(() => 0.5 - Math.random()).slice(0,3);
                document.getElementById('featuredJobs').innerHTML = random.map(j => this.createJobCard(j)).join('');
            },

            renderFilters: function() {
                const select = document.getElementById('categoryFilter');
                const cats = Object.keys(RAW_DATA).sort();
                cats.forEach(c => {
                    const opt = document.createElement('option');
                    opt.value = c;
                    opt.textContent = c;
                    select.appendChild(opt);
                });
            },

            filterJobs: function(category) {
                const container = document.getElementById('jobsList');
                let filtered = this.jobs;
                if(category !== 'all') {
                    filtered = this.jobs.filter(j => j.category === category);
                }
                container.innerHTML = filtered.map(j => this.createJobCard(j)).join('');
                document.getElementById('currentCount').textContent = filtered.length;
            },

            createJobCard: function(job) {
                return `
                    <div class="job-card" onclick="window.app.showJob(${job.id})">
                        <div class="job-header">
                            <div class="job-title">${job.title}</div>
                            <span class="job-category">${job.category}</span>
                        </div>
                        <div class="job-body">
                            ${job.description.substring(0, 80)}...
                        </div>
                        <div class="job-footer">Cliquer pour voir le détail</div>
                    </div>
                `;
            },

            // --- GÉNÉRATEUR DE PARCOURS PÉDAGOGIQUE MAROCAIN (Générique) ---
            getMoroccanPath: function(job) {
                const cat = job.category;
                const title = job.title;
                let pathHTML = "";
                if(title.includes("Ingénieur") || cat.includes("Ingénierie")) {
                    pathHTML = `<ul><li><strong>1re Année :</strong> Tronc Commun ou 1ère Bac Scientifique.</li><li><strong>Classes Préparatoires (CPGE) :</strong> MPSI, PCSI, PTSI (2 ans).</li><li><strong>Concours :</strong> Concours National Commun (CNC) vers les Écoles d'Ingénieurs (ENSA, ENSET, ENSEM...).</li><li><strong>Alternatives :</strong> Prépas intégrées ou Admission sur titre en 1ère année après Bac.</li></ul>`;
                }
                else if(cat === "Santé" || title.includes("Médecin") || title.includes("Dentiste") || title.includes("Pharmacien")) {
                    pathHTML = `<ul><li><strong>Bac :</strong> Scientifique (Sc Maths ou Sc Exp).</li><li><strong>1ère Année Santé (PASS/Médecine) :</strong> 1 an universitaire tronc commun.</li><li><strong>Concours/Examen :</strong> Réussir le concours d'entrée en Faculté de Médecine, Pharmacie ou Dentaire.</li><li><strong>Durée :</strong> De 6 à 8 ans d'études supérieures.</li></ul>`;
                }
                else if(["Btp", "Mécanique", "Industrie", "Electricité", "Maintenance"].some(c => cat.includes(c)) || title.includes("Technicien")) {
                    pathHTML = `<ul><li><strong>Parcours Court :</strong> BTS / DUT (ISET) en spécialité correspondante.</li><li><strong>OFPPT :</strong> Formation en Technicien Spécialisé (TS) ou Technicien dans les centres spécialisés.</li><li><strong>Bac Pro :</strong> Poursuite possible vers des formations techniques supérieures.</li><li><strong>Stage :</strong> Une grande partie de la formation est basée sur l'alternance ou le stage.</li></ul>`;
                }
                else if(["Commerce", "Vente", "Finance", "Banque", "Marketing", "Gestion"].some(c => cat.includes(c))) {
                    pathHTML = `<ul><li><strong>Bac :</strong> Économie & Gestion ou Scientifique.</li><li><strong>Grandes Écoles :</strong> École de Commerce (ENCG) après prépa ou Admission sur Concours (ENSEM, ISCAE).</li><li><strong>Université :</strong> Faculté de Droit ou Sciences Économiques (FSJES).</li><li><strong>BTS :</strong> Options Commerce, Communication ou Comptabilité.</li></ul>`;
                }
                else if(cat === "Droit" || cat === "Administratif" || cat === "Comptabilité") {
                    pathHTML = `<ul><li><strong>Faculté :</strong> Faculté de Droit (Licence en Droit Privé ou Public).</li><li><strong>Crédits :</strong> Niveau Licence (L1-L2-L3).</li><li><strong>Mastère :</strong> Spécialisation (Mastère en Fiscalité, Droit des Affaires...).</li><li><strong>Préparation :</strong> Prépa ENA ou IGA pour l'administration publique.</li></ul>`;
                }
                 else if(cat === "Hôtellerie" || cat === "Tourisme") {
                    pathHTML = `<ul><li><strong>École Spécialisée :</strong> ISIT (Institut Supérieur International du Tourisme) ou Écoles hôtelières agréées.</li><li><strong>Bac :</strong> Tout type de Bac avec une appétence pour le service.</li><li><strong>Durée :</strong> Cycle Bachelor (3 ans) ou Cycle Master.</li><li><strong>Stages :</strong> Obligatoires durant toute la formation.</li></ul>`;
                }
                else if(cat === "Enseignement") {
                    pathHTML = `<ul><li><strong>Faculté :</strong> Licence et Master dans la matière enseignée.</li><li><strong>CRMEF :</strong> Centre Régional des Métiers de l'Éducation et de la Formation pour le Diplôme Professeur (Cycle 1 an).</li><li><strong>ENFG :</strong> Pour le professorat en premier cycle collégial.</li></ul>`;
                }
                else {
                    pathHTML = `<ul><li><strong>Bac :</strong> Choix d'un Bac compatible avec le secteur.</li><li><strong>Formation Spécialisée :</strong> Voir les écoles privées ou OFPPET adaptées à "${job.category}".</li><li><strong>Recherche :</strong> Consulter les fiches métiers de l'Anapec ou l'Université la plus proche.</li></ul>`;
                }
                return `<div class="path-content visible"><h4 style="color:var(--accent-path); margin-bottom:10px;">Parcours générique :</h4>${pathHTML}</div>`;
            },

            showJob: function(id) {
                const job = this.jobs.find(j => j.id === id);
                if(!job) return;
                const pathGeneric = this.getMoroccanPath(job);
                
                document.getElementById('modalBody').innerHTML = `
                    <h2 style="color:var(--primary);">${job.title}</h2>
                    <span style="background:var(--secondary); color:white; padding:2px 8px; border-radius:4px; font-size:0.8rem;">${job.category}</span>
                    <p style="margin-top:15px; font-size:1.05rem; line-height:1.6;">${job.description}</p>
                    
                    <div style="margin-top:20px;">
                        <strong>Compétences clés :</strong>
                        <div style="display:flex; gap:5px; flex-wrap:wrap; margin-top:5px;">
                            ${job.tags.map(t => `<span style="border:1px solid #ddd; padding:2px 8px; border-radius:12px; font-size:0.8rem;">${t}</span>`).join('')}
                        </div>
                    </div>

                    <button class="btn btn-path" onclick="
                        const el = document.getElementById('parcoursDetail'); 
                        if(el.style.display === 'none' || el.style.display === '') el.style.display = 'block'; 
                        else el.style.display = 'none';
                    ">
                        🛣️ Comment y arriver ? (Parcours Année par Année)
                    </button>
                    
                    ${this.pathFinder.renderHTML(job)}
                    ${pathGeneric}
                `;
                document.getElementById('jobModal').style.display = 'flex';
            },

            closeModal: function() {
                document.getElementById('jobModal').style.display = 'none';
            },

            // ===============================
            // TEST PSYCHOLOGIE + ORIENTATION
            // Basé sur Holland (RIASEC) + styles cognitifs
            // ===============================
            
            startQuiz: function() {
                // Utiliser les questions Holland optimisées
                this.questions = app.allQuestions; // Récupère les RIASEC + Cognitif + Maroc
                this.scores = {
                    R: 0, I: 0, A: 0, S: 0, E: 0, C: 0,
                    abstrait: 0, concret: 0,
                    autonomie: 0, encadrement: 0,
                    stabilite: 0, mobilite: 0, rapidite: 0
                };
                
                this.currentQ = 0;
                this.navigate('quiz');
                this.renderQuestion();
            },

            renderQuestion: function() {
                const q = this.questions[this.currentQ];
                const progress = ((this.currentQ) / this.questions.length) * 100;
                
                document.getElementById('qText').textContent = 
                    `${this.currentQ + 1}/${this.questions.length}. ${q.text}`;
                document.getElementById('quizProgress').style.width = progress + '%';
                
                document.getElementById('qOptions').innerHTML = `
                    <button class="option-btn" onclick="window.app.answerQuiz(true)">✓ Oui</button>
                    <button class="option-btn" onclick="window.app.answerQuiz(false)">✗ Non</button>
                `;
            },

            answerQuiz: function(answer) {
                const q = this.questions[this.currentQ];
                if (answer) {
                    this.scores[q.type]++;
                }
                this.currentQ++;
                if (this.currentQ < this.questions.length) {
                    this.renderQuestion();
                } else {
                    this.showResults();
                }
            },

            showResults: function() {
                this.navigate('results');
                
                // Code RIASEC
                const riasec = ["R", "I", "A", "S", "E", "C"]
                    .sort((a, b) => this.scores[b] - this.scores[a])
                    .slice(0, 3)
                    .join("");
                
                // Profils psychologiques
                const profiles = {
                    cognitif: this.scores.abstrait > this.scores.concret ? "Abstrait" : "Concret",
                    autonomie: this.scores.autonomie > this.scores.encadrement ? "Autonome" : "Encadré",
                    interaction: this.scores.social > this.scores.solitaire ? "Social" : "Solitaire"
                };
                
                // Contexte Maroc
                const context = {
                    prioriteStabilite: this.scores.stabilite > 0,
                    peutFaireEtudesLongues: this.scores.etudes_longues > 0,
                    mobiliteInternationale: this.scores.mobilite > 0,
                    influenceFamiliale: this.scores.influence_familiale > 0
                };
                
                // Affichage des résultats
                document.getElementById('resProfile').textContent = 
                    `Profil : ${this.user.level} ${this.user.stream ? " - " + this.user.stream : ""}`;
                
                document.getElementById('resStream').textContent = `Code RIASEC : ${riasec}`;
                
                document.getElementById('resTags').innerHTML = `
                    <span style="background:var(--accent); color:#333; padding:8px 12px; border-radius:15px; font-weight:bold; margin:5px;">
                        🧠 ${profiles.cognitif}
                    </span>
                    <span style="background:var(--accent); color:#333; padding:8px 12px; border-radius:15px; font-weight:bold; margin:5px;">
                        🎯 ${profiles.autonomie}
                    </span>
                    <span style="background:var(--accent); color:#333; padding:8px 12px; border-radius:15px; font-weight:bold; margin:5px;">
                        🤝 ${profiles.interaction}
                    </span>
                    ${context.prioriteStabilite ? '<span class="tag">Stabilité prioritaire</span>' : ''}
                    ${context.mobiliteInternationale ? '<span class="tag">Mobilité internationale</span>' : ''}
                `;
                
                // Recommandations basées sur RIASEC
                let candidateJobs = this.jobs;
                if (this.user.stream && STREAM_MAP[this.user.stream]) {
                    const allowedCats = STREAM_MAP[this.user.stream];
                    candidateJobs = this.jobs.filter(j => allowedCats.includes(j.category));
                }
                
                const matches = candidateJobs.slice(0, 8);
                document.getElementById('resJobs').innerHTML = matches.map(j => this.createJobCard(j)).join('');
                
                // Message explicatif
                const infoMsg = document.createElement('div');
                infoMsg.style.cssText = 'background:#f0f8ff; padding:15px; border-radius:8px; margin:15px 0; color:#333;';
                infoMsg.innerHTML = `
                    <strong>📋 Résultat du test Holland (RIASEC) :</strong><br/>
                    <strong>Code :</strong> ${riasec}<br/>
                    <strong>Style cognitif :</strong> ${profiles.cognitif}<br/>
                    <strong>Besoin de cadre :</strong> ${profiles.autonomie}<br/>
                    <p style="font-size:0.9em; color:#666; margin-top:10px;">
                        <em>➡️ Ce résultat indique des ENVIRONNEMENTS adaptés, pas un métier imposé.</em>
                    </p>
                `;
                
                const container = document.getElementById('resJobs');
                if (container) {
                    container.parentNode.insertBefore(infoMsg, container);
                }
            }
        };

        // Attach app to window for global access
        window.app = app;

        // Start App
        document.addEventListener('DOMContentLoaded', () => window.app.init());
        // =========================================================================
//    MODULE ORIENTATION INTELLIGENTE MAROC (AJOUTÉ - NE PAS MODIFIER)
// =========================================================================

/**
 * Ce module complète l'application existante sans casser les fonctions actuelles.
 * Il ajoute une logique de filtrage strict et une génération de parcours adaptés.
 */

// --- 1. RÈGLES MÉTIER STRICTES (BLACKLIST & WHITELIST) ---
const SMART_RESTRICTIONS = {
    // Définit les métiers strictement interdits pour certaines filières
    "EG": ["Médecin", "Chirurgien", "Dentiste", "Pharmacien", "Vétérinaire", "Architecte", "Ingénieur", "Chimiste", "Physicien"],
    "SH": ["Médecin", "Chirurgien", "Dentiste", "Pharmacien", "Vétérinaire", "Architecte", "Ingénieur", "Data Scientist", "Actuaire", "Expert-comptable"],
    "LP": ["Ingénieur", "Médecin", "Chirurgien", "Dentiste", "Pharmacien", "Vétérinaire", "Architecte", "Data Scientist", "Actuaire", "Expert-comptable", "Biologiste"],
    // SC_Exp peut accéder à certaines ingénieries (Agronomie, Eau) mais pas toutes.
    "SC_Exp": ["Ingénieur (Informatique)", "Ingénieur (Génie Civil)", "Ingénieur (Aéronautique)", "Actuaire", "Expert-comptable"]
};

// --- 2. LOGIQUE D'ADAPTATION AU NIVEAU SCOLAIRE ---
const LEVEL_ADAPTER = {
    "3AC": {
        // Pour le collège : simplifier les titres pour la découverte
        process: (jobs) => {
            const simplified = new Set();
            jobs.forEach(j => {
                let title = j.title;
                if(title.includes("Ingénieur")) simplified.add("Ingénieur (Génie, Info, BTP...)");
                else if(title.includes("Médecin") || title.includes("Chirurgien")) simplified.add("Médecin / Chirurgien");
                else if(title.includes("Professeur")) simplified.add("Professeur / Enseignant");
                else if(title.includes("Infirmier")) simplified.add("Infirmier(e)");
                else if(title.includes("Comptable") || title.includes("Commissaire")) simplified.add("Comptable / Gestionnaire");
                else if(title.includes("Avocat") || title.includes("Juriste")) simplified.add("Avocat / Juriste");
                else if(title.includes("Journaliste") || title.includes("Communication")) simplified.add("Journaliste / Communication");
                else simplified.add(title);
            });
            
            // Reconvertir Set en objets pour l'affichage
            return Array.from(simplified).map(t => ({
                id: 0, 
                title: t, 
                category: "Découverte",
                description: "Métier à découvrir au lycée. Préparez votre orientation en travaillant bien.",
                tags: ["decouverte"]
            }));
        }
    },
    "default": {
        process: (jobs) => jobs // Pas de changement pour 1ère/Term
    }
};

// --- 3. GÉNÉRATEUR DE PARCOURS MAROCAIN DÉTAILLÉ ---
// Génère un chemin réaliste (FMP, CPGE, ENCG, OFPPT, etc.)
function generateDetailedPath(job, stream) {
    const title = job.title.toLowerCase();
    const cat = job.category.toLowerCase();
    
    let steps = [];

    // A. Fil Santé
    if (cat === "santé" || title.includes("médecin") || title.includes("chirurgien") || title.includes("dentiste")) {
        if (stream === "SC_Exp" || stream === "SC_Maths") {
            steps = [
                { label: "Baccalauréat", desc: "Obtenir le Bac Scientifique (SM ou SE) avec une bonne moyenne." },
                { label: "FMP (1ère Année)", desc: "1ère année commune aux études de santé (Médecine, Dentaire, Pharma)." },
                { label: "Concours CNA", desc: "Réussir le Concours National d'Accès pour être classé." },
                { label: "Cliniques & Thèse", desc: "Cycles externat/internat en hospitalisation + Soutenance de thèse (Durée : 7 ans)." }
            ];
        }
    }
    // B. Filière Ingénieur (SM)
    else if (cat === "ingénierie" || title.includes("ingénieur")) {
        if (stream === "SC_Maths") {
            steps = [
                { label: "Baccalauréat", desc: "Bac Sciences Maths." },
                { label: "CPGE (2 ans)", desc: "Classes Préparatoires (MPSI, PTSI, TSI)." },
                { label: "Concours CNC", desc: "Concours National Commun." },
                { label: "Grande École", desc: "ENSA, ENSEM, ENIM, ENA (pour architectes)... Cycle Ingénieur (3 ans)." }
            ];
        } else if (stream === "STEG") {
            steps = [
                { label: "Baccalauréat", desc: "Bac Technologique." },
                { label: "EST / IGA", desc: "École Supérieure de Technologie ou Institut Général d'Architecture / Agronomie (selon spécialité)." }
            ];
        }
    }
    // C. Filière Droit / Justice
    else if (cat === "droit" || title.includes("avocat") || title.includes("juriste")) {
        steps = [
            { label: "Baccalauréat", desc: "Toute filière possible, mais Lettres ou Eco conseillées." },
            { label: "Faculté de Droit", desc: "Licence de Droit (3 ans)." },
            { label: "Master / CRFPA", desc: "Master Juriste ou Préparation au Certificat d'Aptitude à la Profession d'Avocat." }
        ];
    }
    // D. Filière Commerce / Eco (EG)
    else if (["banque", "commerce", "finance", "vente", "marketing", "gestion"].some(c => cat.includes(c))) {
        steps = [
            { label: "Baccalauréat", desc: "Bac Économie & Gestion." },
            { label: "ENCG / ISCAE / FSEGS", desc: "Écoles de Commerce ou Faculté des Sciences Éco/Gestion." },
            { label: "Master / Spécialisation", desc: "Audit, Finance de Marché, Marketing Digital, Commerce International." }
        ];
    }
    // E. Enseignement / Lettres (LP / SH)
    else if (cat === "enseignement" || title.includes("professeur")) {
        steps = [
            { label: "Baccalauréat", desc: "Bac adapté à la matière enseignée." },
            { label: "Faculté / Master", desc: "Licence + Master dans la spécialité (Histoire, Français, Arabe, Anglais...)." },
            { label: "CRMEF", desc: "Centre Régional des Métiers de l'Éducation et de la Formation (1 an de stage pratique)." }
        ];
    }
    
    // Fallback générique réaliste
    if (steps.length === 0) {
        steps = [
            { label: "Baccalauréat", desc: "Obtenir le Bac dans une filière compatible." },
            { label: "Formation Supérieure", desc: "OFPPT (TS), EST (Licence Pro), ou Faculté (Licence/Master)." },
            { label: "Marché du Travail", desc: "Intégration en entreprise avec stages." }
        ];
    }

    return steps;
}

// --- 4. EXTENSION DE L'APPLICATION (LOGIQUE PRINCIPALE) ---

/**
 * Fonction à appeler pour afficher les suggestions améliorées.
 * Remplace ou améliore la logique de l'ancien 'showResults'.
 */
app.getSmartSuggestions = function() {
    // Récupération des infos utilisateur
    const stream = this.user ? this.user.stream : null;
    const level = this.user ? this.user.level : null;
    
    let candidates = [...this.jobs]; // Copie de tous les métiers

    // 1. FILTRAGE STRICT PAR FILIÈRE (Whitelist + Blacklist)
    if (stream) {
        // a. Filtrage par Catégorie (Via le STREAM_MAP existant)
        if (STREAM_MAP[stream]) {
            // On ne garde que les métiers appartenant aux catégories autorisées de la filière
            const allowedCategories = STREAM_MAP[stream];
            candidates = candidates.filter(j => allowedCategories.includes(j.category));
        }

        // b. Application de la Blacklist (Règles métier impossibles)
        if (SMART_RESTRICTIONS[stream]) {
            const forbiddenTitles = SMART_RESTRICTIONS[stream];
            candidates = candidates.filter(j => {
                // Vérifie si le titre contient un mot interdit
                return !forbiddenTitles.some(forbidden => j.title.includes(forbidden));
            });
        }
    }

    // 2. ADAPTATION AU NIVEAU SCOLAIRE
    let finalJobs = candidates;
    let messageInfo = "";

    if (level === "3AC") {
        // Collège : Vue Découverte (titres génériques)
        finalJobs = LEVEL_ADAPTER["3AC"].process(candidates);
        messageInfo = "Au collège, l'objectif est de découvrir les grandes familles de métiers. Choisissez bien votre Tronc Commun.";
    } else if (level === "TC") {
        // Tronc Commun : Avertissement sur l'importance du choix
        messageInfo = "En Tronc Commun, profitez pour consolider vos bases. Votre choix de filière en 1ère Bac déterminera l'accès à ces métiers.";
    } else {
        // Lycée : Vue détaillée (Métiers réels)
        // On garde les candidats tels quels
    }

    // 3. GESTION DU CAS "AUCUN RÉSULTAT" & RÉORIENTATION
    if (finalJobs.length === 0) {
        return {
            jobs: [],
            error: true,
            message: `Aucun métier de la base ne correspond strictement à votre profil actuel (${stream || 'Filière indéfinie'} + ${level}).<br/>
                      <strong>Conseil de réorientation :</strong> Au Maroc, vous pouvez envisager le passage par l'OFPPT (Technicien Spécialisé) pour acquérir une qualification professionnelle rapide et accessible, ou une mise à niveau pédagogique si vous visez les filières longues.`
        };
    }

    return {
        jobs: finalJobs,
        error: false,
        message: messageInfo
    };
};

/**
 * Surcharge de la fonction showJob pour inclure le "Parcours Marocain" amélioré
 */
app.showJob = function(id) {
    const job = this.jobs.find(j => j.id === id);
    if(!job) return;

    // Utilisation de la fonction generateDetailedPath créée ci-dessus
    const detailedPathSteps = generateDetailedPath(job, this.user ? this.user.stream : null);
    
    // Génération du HTML du parcours
    let pathHTML = `<ul style="margin-top:10px; padding-left:20px; color:#555;">`;
    detailedPathSteps.forEach((step, index) => {
        pathHTML += `
            <li style="margin-bottom:8px; border-left:2px solid var(--secondary); padding-left:10px;">
                <strong style="color:var(--primary);">${step.label}</strong> : ${step.desc}
            </li>`;
    });
    pathHTML += `</ul>`;

    // Injecter dans le modal en utilisant la structure HTML existante (simplifiée ici pour l'exemple)
    // Note: On garde la logique originale du modal mais on ajoute la partie Parcours
    const oldModalContent = this.getMoroccanPath(job); // On récupère l'ancien chemin générique si besoin, ou on l'écrase.
    
    const newParcoursSection = `
        <div style="background:#f0f8f0; padding:15px; border-radius:8px; margin-top:20px;">
            <h4 style="color:var(--primary); margin:0 0 10px 0; display:flex; align-items:center; gap:8px;">
                🎓 Parcours d'études recommandé (Maroc)
            </h4>
            ${pathHTML}
            <div style="font-size:0.8em; color:#888; margin-top:5px; font-style:italic;">
                *Ce parcours est une estimation basée sur les voies d'accès les plus courantes (CPGE, Faculté, Écoles).
            </div>
        </div>
    `;

    // Affichage standard (simulé ici car on ne peut pas réécrire tout le DOM)
    // Dans la pratique, vous feriez : document.getElementById('modalBody').innerHTML = ... (voir code existant)
    
    // Pour que ce code soit fonctionnel sans tout réécrire, on va ouvrir le modal existant et injecter notre bloc après un court délai
    // (Astuce de développeur pour étendre sans casser)
    
    // 1. Récupérer l'ancien showJob (si on ne voulait pas l'écraser) mais ici l'utilisateur a demandé d'améliorer les suggestions.
    // On suppose que le code HTML du modal existe déjà.
    
    // Injection directe du bloc dans le modal si ouvert
    if(document.getElementById('jobModal').style.display === 'flex') {
         const existingParcours = document.getElementById('parcoursDetail');
         if(existingParcours) existingParcours.remove(); // Nettoyage ancienne version
         
         const container = document.getElementById('modalBody');
         const div = document.createElement('div');
         div.id = "parcoursDetail";
         div.innerHTML = newParcoursSection;
         container.appendChild(div);
    }
};

const RIASEC_QUESTIONS = [
    { text: "Tu aimes manipuler des outils et travailler avec tes mains.", type: "R", category: "RIASEC" },
    { text: "Tu cherches toujours à comprendre comment fonctionnent les choses.", type: "I", category: "RIASEC" },
    { text: "Tu aimes créer sans être limité par des règles strictes.", type: "A", category: "RIASEC" },
    { text: "Aider les autres te motive plus que toute autre chose.", type: "S", category: "RIASEC" },
    { text: "Tu aimes prendre les décisions importantes et diriger.", type: "E", category: "RIASEC" },
    { text: "L'organisation et la structure te rassure.", type: "C", category: "RIASEC" },
];

const COGNITIVE_QUESTIONS = [
    { text: "Tu apprends mieux en faisant concrètement.", type: "concret", category: "COGNITIVE" },
    { text: "Tu préfères d'abord la théorie, puis la pratique.", type: "abstrait", category: "COGNITIVE" },
];

const MOROCCO_QUESTIONS = [
    { text: "Un emploi stable et bien rémunéré est ta priorité absolue.", type: "stabilite", category: "CONTEXT" },
    { text: "Tu envisages d'étudier ou travailler hors du Maroc.", type: "mobilite", category: "CONTEXT" },
    { text: "Tu dois entrer rapidement dans la vie active (max 2-3 ans).", type: "rapidite", category: "CONTEXT" },
];

// Fusionner tous les questionnaires
app.allQuestions = [
    ...RIASEC_QUESTIONS,
    ...COGNITIVE_QUESTIONS,
    ...MOROCCO_QUESTIONS
];

// ===============================
// SYSTÈME HOLLAND RIASEC COMPLET
// ===============================

// Questions optimisées Holland + Cognitif + Contexte Maroc
const HOLLAND_QUESTIONS = [
    // === RIASEC Core (6 questions) ===
    { 
        text: "Tu aimes travailler avec tes mains et manipuler des outils/machines.", 
        type: "R", 
        category: "RIASEC" 
    },
    { 
        text: "Tu cherches constamment à comprendre comment fonctionnent les choses.", 
        type: "I", 
        category: "RIASEC" 
    },
    { 
        text: "Tu aimes créer, exprimer tes idées librement sans règles strictes.", 
        type: "A", 
        category: "RIASEC" 
    },
    { 
        text: "Aider les autres et résoudre leurs problèmes te procure de la satisfaction.", 
        type: "S", 
        category: "RIASEC" 
    },
    { 
        text: "Tu aimes prendre les décisions importantes et diriger des projets/personnes.", 
        type: "E", 
        category: "RIASEC" 
    },
    { 
        text: "Tu préfères un cadre clair avec des règles, de l'ordre et de l'organisation.", 
        type: "C", 
        category: "RIASEC" 
    },

    // === Styles Cognitifs (4 questions) ===
    { 
        text: "Tu apprends mieux en faisant concrètement plutôt qu'en écoutant la théorie.", 
        type: "concret", 
        category: "COGNITIVE" 
    },
    { 
        text: "Tu préfères d'abord comprendre la théorie complète, puis passer à la pratique.", 
        type: "abstrait", 
        category: "COGNITIVE" 
    },
    { 
        text: "Tu aimes travailler de manière indépendante sans supervision constante.", 
        type: "autonomie", 
        category: "COGNITIVE" 
    },
    { 
        text: "Tu préfères un cadre clair avec des consignes précises et un suivi.", 
        type: "encadrement", 
        category: "COGNITIVE" 
    },

    // === Contexte Marocain (4 questions) ===
    { 
        text: "La stabilité de l'emploi et un bon salaire sont ta priorité absolue.", 
        type: "stabilite", 
        category: "CONTEXT" 
    },
    { 
        text: "Tu es prêt(e) à poursuivre des études longues (7-8 ans pour Médecin/Ingénieur).", 
        type: "etudes_longues", 
        category: "CONTEXT" 
    },
    { 
        text: "Tu envisages sérieusement d'étudier ou travailler hors du Maroc.", 
        type: "mobilite", 
        category: "CONTEXT" 
    },
    { 
        text: "Tes parents/famille influencent beaucoup tes choix d'orientation.", 
        type: "influence_familiale", 
        category: "CONTEXT" 
    },

    // === Interaction Sociale (2 questions) ===
    { 
        text: "Tu préfères travailler en équipe avec beaucoup d'interactions humaines.", 
        type: "social", 
        category: "INTERACTION" 
    },
    { 
        text: "Tu préfères te concentrer sur une tâche sans trop d'interactions sociales.", 
        type: "solitaire", 
        category: "INTERACTION" 
    }
];

// ===============================
// MAPPING HOLLAND → MÉTIERS MAROC
// ===============================

const HOLLAND_TO_JOBS = {
    // Réaliste (R) - Manipulation, technique, mains
    "R": {
        jobs: [
            "Électricien", "Plombier", "Mécanicien Auto", "Chauffeur Routier",
            "Menuisier", "Maçon", "Installateur Réseau Telecom", "Technicien HVAC",
            "Réparateur de Machines", "Chauffeur Taxi/VTC", "Agriculteur"
        ],
        streams: ["STEG", "OFPPT", "TC"],
        paths: ["OFPPT (2 ans)", "Formation CAP", "École Technique"]
    },
    
    // Investigateur (I) - Analytique, recherche, compréhension
    "I": {
        jobs: [
            "Ingénieur Informatique", "Data Scientist", "Chercheur", "Physicien",
            "Chimiste", "Biologiste", "Ingénieur Civil", "Astronome", "Consultant IT",
            "Développeur Web/Mobile", "Analyste Système", "Ingénieur Électrique"
        ],
        streams: ["SC_Maths", "SC_Exp", "STEG"],
        paths: ["École d'Ingénierie", "Université (Master)", "CPGE"]
    },
    
    // Artistique (A) - Création, expression, originalité
    "A": {
        jobs: [
            "Designer Graphique", "Architecte", "Musicien", "Écrivain",
            "Cinéaste/Réalisateur", "Photographe", "Illustrateur", "Sculpteur",
            "Cuisinier Chef", "Styliste Mode", "Peintre", "Artiste Numérique"
        ],
        streams: ["SH", "LP", "EG"],
        paths: ["École des Beaux-Arts", "École de Design", "Université (Licence Créative)"]
    },
    
    // Social (S) - Aide, service, écoute
    "S": {
        jobs: [
            "Médecin", "Infirmier", "Psychologue", "Travailleur Social",
            "Professeur", "Formateur", "Conseiller Orientation", "Kinésithérapeute",
            "Pharmacien", "Dentiste", "Sage-femme", "Orthophoniste", "Animateur Social"
        ],
        streams: ["SC_Exp", "SH", "LP"],
        paths: ["Faculté Médecine", "Université (Master)", "Institut Spécialisé"]
    },
    
    // Entrepreneur (E) - Leadership, décision, risque
    "E": {
        jobs: [
            "Chef d'Entreprise", "Manager", "Directeur Commercial", "Entrepreneur",
            "Consultant Business", "Responsable Projet", "Directeur Marketing",
            "Banquier", "Agent Immobilier", "Courtier", "Propriétaire Hôtel",
            "Consultant RH", "Trader/Investisseur"
        ],
        streams: ["EG", "SC_Maths", "TC"],
        paths: ["École de Commerce (ENCG)", "Master MBA", "Formation entrepreneuriat"]
    },
    
    // Conventionnel (C) - Organisation, structure, ordre
    "C": {
        jobs: [
            "Comptable", "Expert-Comptable", "Auditeur", "Secrétaire Exécutive",
            "Administrateur Système", "Douanier", "Fiscaliste", "Notaire",
            "Greffier", "Agent Administratif", "Gestionnaire Paie", "Archiviste",
            "Cartographe", "Statisticien"
        ],
        streams: ["EG", "STEG", "TC"],
        paths: ["Université (Licence Gestion)", "École de Commerce", "Formation OFPPT"]
    }
};

// ===============================
// AMÉLIORATION SYSTÈME DE QUIZ
// ===============================

const originalStartQuiz = window.app.startQuiz;

window.app.startQuiz = function() {
    this.quizType = "holland"; // Identifier le type de quiz
    this.questions = HOLLAND_QUESTIONS;
    this.scores = {
        // RIASEC
        R: 0, I: 0, A: 0, S: 0, E: 0, C: 0,
        // Cognitif
        abstrait: 0, concret: 0,
        autonomie: 0, encadrement: 0,
        // Contexte Maroc
        stabilite: 0, etudes_longues: 0, mobilite: 0, influence_familiale: 0,
        // Interaction
        social: 0, solitaire: 0
    };
    this.currentQ = 0;
    this.navigate('quiz');
    this.renderQuestion();
};

window.app.renderQuestion = function() {
    if (!this.questions) return;
    
    const q = this.questions[this.currentQ];
    const progress = ((this.currentQ) / this.questions.length) * 100;
    
    document.getElementById('qText').textContent = 
        `${this.currentQ + 1}/${this.questions.length}. ${q.text}`;
    document.getElementById('quizProgress').style.width = progress + '%';
    
    document.getElementById('qOptions').innerHTML = `
        <button class="option-btn" onclick="window.app.answerQuiz(true)" style="background: #4CAF50; color: white;">
            ✓ Oui, c'est moi
        </button>
        <button class="option-btn" onclick="window.app.answerQuiz(false)" style="background: #f44336; color: white;">
            ✗ Non, pas vraiment
        </button>
    `;
};

window.app.answerQuiz = function(answer) {
    if (!this.questions) return;
    
    const q = this.questions[this.currentQ];
    if (answer) {
        this.scores[q.type]++;
    }
    
    this.currentQ++;
    if (this.currentQ < this.questions.length) {
        this.renderQuestion();
    } else {
        this.showHollandResults();
    }
};

// ===============================
// RÉSULTATS HOLLAND OPTIMISÉS
// ===============================

window.app.showHollandResults = function() {
    // Calcul du code RIASEC (top 3)
    const riasecScores = {
        R: this.scores.R, I: this.scores.I, A: this.scores.A,
        S: this.scores.S, E: this.scores.E, C: this.scores.C
    };
    
    const riasecCode = Object.entries(riasecScores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([letter]) => letter)
        .join("");
    
    // Profils psychologiques
    const profiles = {
        cognitif: this.scores.concret > this.scores.abstrait ? "Concret" : "Abstrait",
        autonomie: this.scores.autonomie > this.scores.encadrement ? "Autonome" : "Encadré",
        interaction: this.scores.social > this.scores.solitaire ? "Social" : "Solitaire"
    };
    
    // Contexte Maroc
    const context = {
        prioriteStabilite: this.scores.stabilite > 0,
        peutFaireEtudesLongues: this.scores.etudes_longues > 0,
        mobiliteInternationale: this.scores.mobilite > 0,
        influenceFamiliale: this.scores.influence_familiale > 0
    };
    
    // Stocker les résultats
    this.hollandProfile = {
        code: riasecCode,
        scores: riasecScores,
        profiles,
        context
    };
    
    // Générer les suggestions améliorées
    this.generateHollandSuggestions(riasecCode);
    
    // Afficher les résultats
    this.displayHollandResults(riasecCode, profiles, context);
    this.navigate('results');
};

window.app.generateHollandSuggestions = function(riasecCode) {
    let suggestedJobs = [];
    
    // Pour chaque lettre du code RIASEC
    for (let letter of riasecCode) {
        const jobList = HOLLAND_TO_JOBS[letter]?.jobs || [];
        suggestedJobs = [...suggestedJobs, ...jobList];
    }
    
    // Filtrer par filière scolaire si applicable
    const userStream = this.profile?.stream;
    if (userStream) {
        suggestedJobs = suggestedJobs.filter(jobName => {
            // Chercher le métier dans la base de données
            const job = this.jobs.find(j => j.name === jobName);
            return job && this.isJobAccessibleForStream(job, userStream);
        });
    }
    
    // Éliminer les doublons
    suggestedJobs = [...new Set(suggestedJobs)];
    
    // Limiter à 8 suggestions
    this.suggestedJobs = suggestedJobs.slice(0, 8);
};

window.app.displayHollandResults = function(riasecCode, profiles, context) {
    // Afficher le code RIASEC
    document.getElementById('resProfile').textContent = 
        `${riasecCode} (${this.getHollandDescription(riasecCode)})`;
    
    // Afficher les tags de profil
    const tagsHTML = `
        <span class="tag">${profiles.cognitif}</span>
        <span class="tag">${profiles.autonomie}</span>
        <span class="tag">${profiles.interaction}</span>
        ${context.prioriteStabilite ? '<span class="tag">Stabilité prioritaire</span>' : ''}
        ${context.mobiliteInternationale ? '<span class="tag">Mobilité internationale</span>' : ''}
    `;
    document.getElementById('resTags').innerHTML = tagsHTML;
    
    // Afficher le flux scolaire
    document.getElementById('resStream').textContent = 
        this.profile?.stream ? this.getStreamName(this.profile.stream) : "À déterminer";
    
    // Afficher les métiers recommandés
    const jobsHTML = this.suggestedJobs
        .map(jobName => {
            const job = this.jobs.find(j => j.name === jobName);
            if (!job) return '';
            return `
                <div class="job-card" onclick="window.app.showJobDetail('${job.id}')">
                    <h4>${job.name}</h4>
                    <p class="job-desc">${job.description?.substring(0, 80)}...</p>
                    <small>📚 ${job.education || "Bac+"}</small>
                </div>
            `;
        })
        .join('');
    
    document.getElementById('resJobs').innerHTML = jobsHTML || 
        '<p style="grid-column: 1/-1; text-align: center; color: #666;">Aucun métier ne correspond à votre profil actuel.</p>';
};

// Fonction utilitaire: Description du code RIASEC
window.app.getHollandDescription = function(code) {
    const map = {
        "RI": "Scientifique & Analytique",
        "IA": "Créatif & Innovant",
        "SA": "Artistique & Social",
        "SE": "Leader & Humanitaire",
        "EC": "Entrepreneur & Organisé",
        "CR": "Structuré & Technique",
        "RI": "Ingénieur",
        "RS": "Technicien Social",
        "AS": "Créateur Social",
        "AE": "Entrepreneur Créatif",
        "ES": "Manager Social",
        "EC": "Chef d'Entreprise"
    };
    return map[code] || "Profil Unique";
};

// Fonction utilitaire: Nom du flux scolaire
window.app.getStreamName = function(stream) {
    const names = {
        "SC_Maths": "Sciences Mathématiques",
        "SC_Exp": "Sciences Expérimentales",
        "STEG": "Sciences Techniques (STEG)",
        "EG": "Économie & Gestion",
        "SH": "Sciences Humaines",
        "LP": "Lettres & Philosophie",
        "TC": "Tronc Commun"
    };
    return names[stream] || stream;
};

// Améliorer la vérification d'accessibilité métier/filière
window.app.isJobAccessibleForStream = function(job, stream) {
    // Récupérer les restrictions pour ce métier
    const restrictions = this.SMART_RESTRICTIONS?.[job.id];
    if (!restrictions) return true; // Pas de restriction = accessible
    
    // Vérifier si la filière est interdite
    if (restrictions.forbiddenStreams?.includes(stream)) {
        return false;
    }
    
    return true;
};
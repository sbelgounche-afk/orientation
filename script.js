       // --- 1. DONNÉES BRUTES (RAW DATA) ---
        const RAW_DATA = {
            "Achat": ["Acheteur", "Acheteur industriel", "Acheteur informatique", "Agent de soin", "Assistant achat", "Assistant chef de produit tourisme", "Conducteur de travaux agencement", "Directeur achat", "Ingénieur achat", "Ingénieur d'études", "Peintre aéronautique", "Photographe assistant", "Professeur fitness", "Responsable achats", "Responsable approvisionnement", "Responsable crédit", "Technicien d´achats", "Téléopérateur"],
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

        // --- 2. MAP DES FILIÈRES ---
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

        // --- 5. DONNÉES PARCOURS TIMELINE (Nouveau) ---
        const PATHS_DATA = {
            "Ingénieur": {
                main: [
                    { year: "3ème Année Collège", target: "Tronc Commun Scientifique", desc: "Obtenir le brevet et viser une moyenne > 12." },
                    { year: "Tronc Commun", target: "1ère Bac Sciences Maths", desc: "Bonnes notes en Maths et Physique." },
                    { year: "1ère Bac", target: "2ème Bac Sciences Maths", desc: "Se concentrer sur les exercices difficiles." },
                    { year: "Baccalauréat", target: "CPGE (Classes Préparatoires)", desc: "Intégrer une CPGE (MPSI/PCSI) ou Prépa Intégrée." },
                    { year: "CPGE (2 ans)", target: "Concours National Commun (CNC)", desc: "Travailler dur pendant les 2 années." },
                    { year: "École d'Ingénieur", target: "Diplôme d'Ingénieur d'État", desc: "3 ans de spécialisation." }
                ],
                alternatives: [
                    { condition: "Si échec au BAC", path: ["Option: Se réorienter vers Bac Professionnel ou BTS (ISET).", "Ou: Redoubler avec sérieux."] },
                    { condition: "Si échec au Concours (CNC)", path: ["Option: Faculté des Sciences (Licence).", "Chemin alternatif: Mastère spécialisé ou Admission sur Titre."] },
                    { condition: "Si profil technique", path: ["Option: 1ère Bac Science de l'Ingénieur -> Ecoles d'Ingénieurs (Admission parallèle)."] }
                ]
            },
            "Médecin": {
                main: [
                    { year: "3ème Année Collège", target: "Tronc Commun Scientifique", desc: "Fondations solides en SVT." },
                    { year: "Tronc Commun", target: "1ère Bac Sciences Expérimentales", desc: "Spécialité SVT ou PC." },
                    { year: "1ère Bac", target: "2ème Bac Sciences Expérimentales", desc: "Très bonnes notes requises (>14/20 conseillé)." },
                    { year: "Baccalauréat", target: "1ère Année Médecine", desc: "Passer le concours d'entrée." },
                    { year: "Concours / Résultat", target: "1ère Cycle (3 ans)", desc: "Exercer comme externe ou internat." },
                    { year: "1ère Cycle", target: "2ème Cycle (3 ans)", desc: "Soutenance de thèse pour devenir Docteur en Médecine." }
                ],
                alternatives: [
                    { condition: "Si échec au concours Médecine", path: ["Option: Médecine Dentaire, Pharmacie ou Sage-Femme.", "Option: OFS (Offices de formation) pour infirmier/aide-soignant."] },
                    { condition: "Si profil trop juste au BAC", path: ["Option: 1ère Année SNV (Licence Biologie) à la fac.", "Passerelle possible en 2ème année si réussite."] }
                ]
            },
            "Avocat": {
                main: [
                    { year: "3ème Année Collège", target: "Tronc Commun Scientifique", desc: "Important de garder une bonne moyenne." },
                    { year: "Tronc Commun", target: "1ère Bac Sciences Exp / SH", desc: "Avoir l'esprit d'analyse." },
                    { year: "1ère Bac", target: "2ème Bac", desc: "Terminer le Bac avec mention." },
                    { year: "Baccalauréat", target: "Faculté de Droit", desc: "Inscription en Licence de Droit (L1)." },
                    { year: "Licence (3 ans)", target: "Master (2 ans)", desc: "Spécialisation en Droit des Affaires ou Justice." },
                    { year: "Master", target: "Stage École d'Avocature (IEA)", desc: "1 an de stage obligatoire à l'École d'Avocature." },
                    { year: "Serment", target: "Avocat au Barreau", desc: "Prêter serment et commencer la carrière." }
                ],
                alternatives: [
                    { condition: "Si échec à la Faculté", path: ["Option: Préparation au concours de l'ENA (Administration).", "Option: Juriste en entreprise avec un master en Droit privé."] }
                ]
            },
            "Développeur web": {
                main: [
                    { year: "3ème Année Collège", target: "Tronc Commun Scientifique", desc: "Intérêt pour l'algorithmique." },
                    { year: "Tronc Commun", target: "1ère Bac Sciences Maths", desc: "Très bon niveau en Maths." },
                    { year: "1ère Bac", target: "2ème Bac Sciences Maths", desc: "Apprendre l'auto-formation (HTML/JS/PHP) au lycée." },
                    { year: "Baccalauréat", target: "École d'Ingénieur (Ex: ENSA) ou Faculté", desc: "Filière Informatique ou Génie Civil ( parfois )." },
                    { year: "Diplôme", target: "Premier emploi Junior", desc: "Développeur front-end ou back-end." }
                ],
                alternatives: [
                    { condition: "Si pas le BAC Scientifique", path: ["Option: OFPPT (TS Développement Web).", "Option: BTS Informatique (ISET).", "Avantage: Formation courte et très pratique."] }
                ]
            },
            "default": {
                main: [
                    { year: "3ème Année Collège", target: "Tronc Commun", desc: "Obtenir le brevet." },
                    { year: "Tronc Commun", target: "1ère Bac", desc: "Choisir la filière adaptée." },
                    { year: "Baccalauréat", target: "École ou Université", desc: "Voir détails dans la description." }
                ],
                alternatives: [
                    { condition: "Si échec scolaire", path: ["Option: OFPPT (Formation professionnelle).", "Option: BTS / ISET (Bac+2)."] }
                ]
            }
        };

        // --- 6. APPLICATION CORE ---
        const app = {
            jobs: [],
            user: null,
            quizScores: {},

            // === 6.1 COMPARATEUR DE FILIÈRES ===
            comparator: {
                data: {
                    "sc_maths": {
                        label: "Sciences Maths",
                        difficulty: 5, math: 5, load: 5,
                        duration: "5 à 7 ans (Supérieur)",
                        jobs: ["Ingénieur", "Architecte", "Chercheur", "Data Scientist", "Professeur Universitaire"],
                        market: "Secteurs très porteurs (Informatique, Énergie, Aérospatial)",
                        profile: "Logique très développée, excellence en maths, rigueur scientifique."
                    },
                    "sc_exp": {
                        label: "Sciences Expérimentales",
                        difficulty: 4, math: 4, load: 4,
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
                    "ofppt": {
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
                        if (app.user && app.user.stream) {
                            if (app.user.stream === "SC_Maths" && key === "sc_maths") isMatch = true;
                            if (app.user.stream === "SC_Exp" && key === "sc_exp") isMatch = true;
                            if (app.user.stream === "EG" && key === "eco") isMatch = true;
                            if (app.user.stream === "LP" && (key === "lettres" || key === "univ")) isMatch = true;
                            if (app.user.stream === "SH" && key === "univ") isMatch = true;
                            if (app.user.stream === "STEG" && key === "ecoles") isMatch = true;
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

            // === 6.2 PARCOURS TIMELINE (Comment y arriver ?) ===
            pathFinder: {
                getPathsForJob: function(jobTitle) {
                    return PATHS_DATA[jobTitle] || PATHS_DATA["default"];
                },

                renderHTML: function(job) {
                    const pathData = this.getPathsForJob(job.title);
                    const userLevel = app.user ? app.user.level : null; 

                    let timelineHTML = `<div class="timeline">`;
                    let currentUserStepFound = false;

                    pathData.main.forEach((step, index) => {
                        let isCurrent = false;
                        if (userLevel) {
                            if (step.year.includes(userLevel)) isCurrent = true;
                            if (userLevel === 'TC' && index === 1) isCurrent = true;
                            if (userLevel === '3AC' && index === 0) isCurrent = true;
                        }
                        if (isCurrent) currentUserStepFound = true;
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
                        altsHTML = `<div class="alternatives-box"><h4 style="color:#1565c0; margin-bottom:15px; display:flex; align-items:center; gap:8px;"><span>🛡️</span> Alternatives (Plan B / C)</h4>`;
                        pathData.alternatives.forEach(alt => {
                            altsHTML += `<div class="alt-item"><span class="alt-condition">👉 ${alt.condition}</span><div class="alt-desc">${Array.isArray(alt.path) ? alt.path.join('<br/>') : alt.path}</div></div>`;
                        });
                        altsHTML += `</div>`;
                    }

                    return `
                        <div class="parcours-container" id="parcoursDetail">
                            <div class="parcours-header"><span>🛣️</span> Ton chemin vers : ${job.title}</div>
                            ${timelineHTML}
                            ${altsHTML}
                            ${!userLevel ? '<p style="text-align:center; font-size:0.8rem; color:#888; margin-top:10px;"><i>(Connecte-toi pour voir ta position actuelle sur ce chemin)</i></p>' : ''}
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
                const random = this.jobs.sort(() => 0.5 - Math.random()).slice(0, 3);
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
                    <div class="job-card" onclick="app.showJob(${job.id})">
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
                    pathHTML = `<ul><li><strong>1re Année :</strong> Tronc Commun ou 1ère Bac Scientifique.</li><li><strong>Classes Préparatoires (CPGE) :</strong> MPSI, PCSI, PTSI (2 ans).</li><li><strong>Concours :</strong> Concours National Commun (CNC) vers les Écoles d'Ingénieurs.</li><li><strong>Alternatives :</strong> Prépas intégrées ou Admission sur titre.</li></ul>`;
                }
                else if(cat === "Santé" || title.includes("Médecin") || title.includes("Dentiste") || title.includes("Pharmacien")) {
                    pathHTML = `<ul><li><strong>Bac :</strong> Scientifique.</li><li><strong>1ère Année Santé :</strong> 1 an universitaire tronc commun.</li><li><strong>Concours :</strong> Réussir le concours d'entrée en Faculté de Médecine.</li><li><strong>Durée :</strong> De 6 à 8 ans.</li></ul>`;
                }
                else if(["Btp", "Mécanique", "Industrie"].some(c => cat.includes(c)) || title.includes("Technicien")) {
                    pathHTML = `<ul><li><strong>Parcours Court :</strong> BTS / DUT (ISET).</li><li><strong>OFPPT :</strong> Formation en Technicien Spécialisé.</li><li><strong>Bac Pro :</strong> Poursuite possible vers des formations techniques supérieures.</li></ul>`;
                }
                else if(["Commerce", "Finance", "Banque", "Marketing", "Gestion"].some(c => cat.includes(c))) {
                    pathHTML = `<ul><li><strong>Bac :</strong> Économie & Gestion.</li><li><strong>Grandes Écoles :</strong> École de Commerce (ENCG) après prépa.</li><li><strong>Université :</strong> Faculté de Droit ou Sciences Économiques.</li></ul>`;
                }
                else { pathHTML = `<ul><li><strong>Bac :</strong> Choix d'un Bac compatible.</li><li><strong>Formation :</strong> Voir les écoles privées ou OFPPET adaptées.</li></ul>`; }
                return `<div class="path-content visible"><h4 style="color:var(--accent-path); margin-bottom:10px;">Parcours générique :</h4>${pathHTML}</div>`;
            },

            // --- AFFICHAGE DU JOB (MODAL) ---
            showJob: function(id) {
                const job = this.jobs.find(j => j.id === id);
                if(!job) return;
                const pathGeneric = this.getMoroccanPath(job); // Le générique (ancien)
                
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

                    <button class="btn btn-path" onclick="document.getElementById('parcoursDetail').classList.toggle('hidden')">
                        🛣️ Comment y arriver ? (Parcours Année par Année)
                    </button>
                    
                    ${app.pathFinder.renderHTML(job)}

                    ${pathGeneric}
                `;
                document.getElementById('jobModal').style.display = 'flex';
            },

            closeModal: function() {
                document.getElementById('jobModal').style.display = 'none';
            },

            // --- QUIZ SYSTEM ---
            startQuiz: function() {
                this.quizScores = { "bio":0, "logique":0, "science":0, "social":0, "lettre":0, "manuel":0, "vente":0, "tech":0, "admin":0 };
                this.currentQ = 0;
                this.questions = [
                    { t: "Quelle matière préfères-tu ?", o: { "Maths / Physique": ["logique","science"], "Sciences Naturelles": ["bio"], "Histoire / Français": ["lettre"], "EPS / Arts": ["manuel"] } },
                    { t: "Quel environnement te plaît ?", o: { "Hôpital / École": ["bio","social"], "Bureau / Labo": ["logique","admin"], "Usine / Chantier": ["manuel","tech"], "Magasin / Vente": ["vente"] } },
                    { t: "Quel est ton style ?", o: { "Rigoureux et précis": ["logique","admin"], "Créatif et artistique": ["lettre","manuel"], "En contact avec les gens": ["social","vente"], "Pratique et manuel": ["manuel","tech"] } }
                ];
                this.navigate('quiz');
                this.renderQuestion();
            },

            renderQuestion: function() {
                const q = this.questions[this.currentQ];
                document.getElementById('qText').textContent = `${this.currentQ+1}/${this.questions.length}. ${q.t}`;
                const p = ((this.currentQ)/this.questions.length)*100;
                document.getElementById('quizProgress').style.width = p+'%';
                document.getElementById('qOptions').innerHTML = Object.keys(q.o).map(k => `<button class="option-btn" onclick="app.answerQuiz('${k}')">${k}</button>`).join('');
            },

            answerQuiz: function(key) {
                const scores = this.questions[this.currentQ].o[key];
                scores.forEach(s => this.quizScores[s] = (this.quizScores[s]||0) + 1);
                this.currentQ++;
                if(this.currentQ < this.questions.length) this.renderQuestion();
                else this.showResults();
            },

            showResults: function() {
                this.navigate('results');
                const sortedScores = Object.entries(this.quizScores).sort((a,b) => b[1] - a[1]).slice(0,3);
                document.getElementById('resProfile').textContent = this.user.level + (this.user.stream ? " - "+this.user.stream : "");
                document.getElementById('resStream').textContent = this.user.stream || "Tronc Commun";
                document.getElementById('resTags').innerHTML = sortedScores.map(x => `<span style="background:var(--accent); color:#333; padding:5px 10px; border-radius:15px; font-weight:bold;">${x[0]} (${x[1]})</span>`).join('');
                
                let candidateJobs = this.jobs;
                if (this.user.stream && STREAM_MAP[this.user.stream]) {
                    const allowedCats = STREAM_MAP[this.user.stream];
                    candidateJobs = this.jobs.filter(j => allowedCats.includes(j.category));
                }
                const topTags = sortedScores.map(x => x[0]);
                const matches = candidateJobs.filter(j => j.tags.some(t => topTags.includes(t))).slice(0, 8);
                if(matches.length < 3) matches.push(...candidateJobs.slice(0, 8 - matches.length));
                document.getElementById('resJobs').innerHTML = matches.map(j => this.createJobCard(j)).join('');
            }
        };

        // Start App
        document.addEventListener('DOMContentLoaded', () => app.init());
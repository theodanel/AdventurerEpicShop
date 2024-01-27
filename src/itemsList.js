const itemsList = [
    {
      id: 1,
      category: 'potions',
      name: 'Potion de Force Colossale',
      description: 'Augmente la force de l\'utilisateur de 30 points pendant 15 minutes.',
      price: 100
    },

    {
      id: 2,
      category: 'potions',
      name: 'Élixir de Sagesse Infinie',
      description: 'Augmente la sagesse de l\'utilisateur de 20 points pendant 20 minutes.',
      price: 150
    },

    {
      id: 3,
      category: 'potions',
      name: 'Potion d\'Agilité Féline',
      description: 'Augmente l\'agilité de l\'utilisateur de 25 points pendant 10 minutes.',
      price: 120
    },

    {
      id: 4,
      category: 'potions',
      name: 'Potion de Régénération Véloce',
      description: 'Régénère 50 points de santé toutes les 5 secondes pendant 1 minute.',
      price: 180
    },

    {
      id: 5,
      category: 'potions',
      name: 'Élixir de Vitesse Céleste',
      description: 'Augmente la vitesse de déplacement de l\'utilisateur de 50% pendant 30 minutes.',
      price: 200
    },

    {
      id: 6,
      category: 'potions',
      name: 'Potion d\'Invisibilité Éthérée',
      description: 'Rend l\'utilisateur invisible pendant 10 minutes.',
      price: 250
    },

    {
      id: 7,
      category: 'potions',
      name: 'Potion de Guérison Totale',
      description: 'Régénère complètement les points de santé de l\'utilisateur.',
      price: 300
    },

    {
      id: 8,
      category: 'potions',
      name: 'Élixir de Protection Élémentaire',
      description: 'Augmente la résistance de l\'utilisateur à tous les éléments de 50% pendant 20 minutes.',
      price: 280
    },

    {
      id: 9,
      category: 'potions',
      name: 'Potion de Vision Clairvoyante',
      description: 'Permet à l\'utilisateur de voir à travers les illusions et les enchantements pendant 15 minutes.',
      price: 220
    },

    {
      id: 10,
      category: 'potions',
      name: 'Philtre d\'Amour Éternel',
      description: 'Envoûte le cœur de la personne aimée pour l\'éternité.',
      price: 500
    },

    {
      id: 11,
      category: 'armes',
      name: 'Épée de l\'Aube Éternelle',
      description: 'Cette épée légendaire brille d\'une lumière éclatante qui repousse les ténèbres. Forgée dans le cœur d\'une étoile, elle est réputée pour sa puissance inégalée et sa capacité à purifier le mal.',
      effects: 'Augmente les dégâts de l\'utilisateur de 60 points.',
      price: 800
    },

    {
      id: 12,
      category: 'armes',
      name: 'Arc du Chasseur Stellaire',
      description: 'Cet arc élégant est orné de gemmes stellaires qui brillent dans l\'obscurité de la nuit. Il permet à son utilisateur de tirer des flèches chargées d\'énergie stellaire, capables de percer n\'importe quelle défense.',
      effects: 'Augmente les dégâts de l\'utilisateur de 50 points et augmente la précision de 20%.',
      price: 700
    },

    {
      id: 13,
      category: 'armes',
      name: 'Marteau du Titan Colossal',
      description: 'Ce marteau massif est capable de briser les montagnes et d\'écraser les ennemis avec une force titanesque. Forgé dans les flammes du volcan sacré, il est redouté par tous ceux qui osent se mettre en travers de son chemin.',
      effects: 'Augmente les dégâts de l\'utilisateur de 70 points.',
      price: 900
    },

    {
      id: 14,
      category: 'armes',
      name: 'Dague de l\'Ombre Furtive',
      description: 'Cette dague élégante est enveloppée d\'une aura sombre qui dissimule son porteur dans les ombres. Parfaite pour les attaques furtives et les assassinats silencieux, elle est l\'arme de prédilection des maîtres de l\'ombre.',
      effects: 'Augmente les dégâts de l\'utilisateur de 40 points et augmente la vitesse d\'attaque de 30%.',
      price: 600
    },

    {
      id: 15,
      category: 'armes',
      name: 'Faux de la Moisson Maudite',
      description: 'Cette faux sinistre est imprégnée du pouvoir des âmes défuntes, capable de faucher les vies avec une précision mortelle. Elle est souvent utilisée par les sorciers noirs pour invoquer les esprits de l\'au-delà.',
      effects: 'Augmente les dégâts de l\'utilisateur de 55 points et inflige des dégâts supplémentaires aux ennemis morts-vivants.',
      price: 750
    },

    {
      id: 16,
      category: 'armes',
      name: 'Lance de la Tempête Électrique',
      description: 'Cette lance légendaire est chargée d\'énergie électrique, capable de déchaîner des tempêtes dévastatrices sur ses ennemis. Elle est souvent utilisée par les guerriers des cieux pour contrôler les éléments.',
      effects: 'Augmente les dégâts de l\'utilisateur de 65 points et inflige des dégâts supplémentaires aux ennemis volants.',
      price: 850
    },

    {
      id: 17,
      category: 'armes',
      name: 'Bouclier de la Forteresse Impénétrable',
      description: 'Ce bouclier massif est taillé dans un alliage d\'acier et d\'adamantium, le rendant pratiquement indestructible. Il offre une protection inégalée contre les attaques ennemies, permettant à son porteur de résister aux assauts les plus violents.',
      effects: 'Augmente la défense de l\'utilisateur de 80 points.',
      price: 1000
    },

    {
      id: 18,
      category: 'armes',
      name: 'Fusil à Éclairs du Temps Perdu',
      description: 'Ce fusil magique est alimenté par l\'énergie du temps lui-même, capable de tirer des éclairs temporels qui ralentissent ou figent les ennemis dans le temps. Il est l\'arme de prédilection des chasseurs de primes à la poursuite des fugitifs les plus rapides.',
      effects: 'Augmente les dégâts de l\'utilisateur de 60 points et inflige une réduction de vitesse de déplacement aux ennemis touchés.',
      price: 900
    },

    {
      id: 19,
      category: 'armes',
      name: 'Bâton de la Sagesse Éternelle',
      description: 'Ce bâton magique est orné de runes anciennes qui renferment la sagesse des anciens. Il confère à son utilisateur une connaissance profonde et une compréhension des mystères du cosmos.',
      effects: 'Augmente les dégâts magiques de l\'utilisateur de 50 points et confère une immunité aux effets de contrôle mental.',
      price: 850
    },
    
    {
      id: 20,
      category: 'armes',
      name: 'Lame de l\'Éclipse Noire',
      description: 'La Lame de l\'Éclipse Noire est une arme ancestrale forgée par les anciens artisans des ténèbres...',
      effects: 'Augmente les dégâts de l\'utilisateur de 150 points et inflige une malédiction d\'affaiblissement à l\'ennemi touché. De plus, elle confère à son porteur une résistance accrue aux attaques des créatures des ténèbres.',
      price: 2500
    },

    {
      id: 21,
      category: 'armures',
      name: 'Armure du Paladon Sacré',
      description: 'Augmente la défense de l\'utilisateur de 60 points.',
      price: 500
    },

    {
      id: 22,
      category: 'armures',
      name: 'Armure de l\'Assassin Furtif',
      description: 'Augmente la défense de l\'utilisateur de 40 points et augmente l\'agilité de 20 points.',
      price: 450
    },

    {
      id: 23,
      category: 'armures',
      name: 'Plastron du Dragon Flamboyant',
      description: 'Ce plastron en écailles de dragon est enchanté pour résister au feu et aux flammes. Il offre une protection exceptionnelle contre les attaques de feu et de chaleur extrême.',
      price: 600
    },

    {
      id: 24,
      category: 'armures',
      name: 'Armure de la Lune Argentée',
      description: 'Cette armure légère est tissée à partir des rayons de la lune argentée, lui conférant une résistance magique et une agilité accrue pendant la nuit.',
      price: 550
    },

    {
      id: 25,
      category: 'armures',
      name: 'Cotte de Mailles de la Forêt Éternelle',
      description: 'Cette cotte de mailles est fabriquée à partir des lianes et des feuilles de la forêt éternelle, lui permettant de se fondre dans son environnement et de confondre les ennemis.',
      price: 580
    },

    {
      id: 26,
      category: 'armures',
      name: 'Armure du Gladiateur Invincible',
      description: 'Cette armure lourde est portée par les plus grands guerriers de l\'arène, offrant une protection totale contre les attaques physiques et les coups mortels...',
      price: 700
    },

    {
      id: 27,
      category: 'armures',
      name: 'Heaume de la Vision Clairvoyante',
      description: 'Ce heaume enchanté confère à son porteur la capacité de voir à travers les illusions et les enchantements, lui permettant d\'éviter les pièges et de détecter les ennemis cachés...',
      price: 450
    },

    {
      id: 28,
      category: 'armures',
      name: 'Gantelets de la Fureur Divine',
      description: 'Ces gantelets forgés dans les flammes du dieu de la guerre confèrent à leur porteur une force surhumaine et une capacité à infliger des dégâts supplémentaires lors des attaques au corps à corps...',
      price: 520
    },

    {
      id: 29,
      category: 'armures',
      name: 'Bottes de la Rapidité Féline',
      description: 'Ces bottes légères augmentent la vitesse de déplacement de leur porteur et lui permettent de se déplacer silencieusement...',
      price: 380
    },

    {
      id: 30,
      category: 'armures',
      name: 'Cape de l\'Invisibilité Perpétuelle',
      description: 'Cette cape magique rend son porteur invisible aux yeux de ses ennemis, lui permettant de se faufiler derrière les lignes ennemies et de mener des attaques surprises...',
      price: 650
    },

    {
        id: 31,
        category: 'montures',
        name: 'Gryphus Céleste',
        description: 'Permet à l\'utilisateur de voler dans les airs pendant 1 heure.',
        price: 800
      },

      {
        id: 32,
        category: 'montures',
        name: 'Cheval des Royaumes Libres',
        description: 'Augmente la vitesse de déplacement de l\'utilisateur de 60%.',
        price: 650
      },

      {
        id: 33,
        category: 'montures',
        name: 'Dragon de l\'Aube Radieuse',
        description: 'Ce dragon majestueux est capable de cracher des flammes et de voler à une vitesse fulgurante...',
        price: 1200
      },

      {
        id: 34,
        category: 'montures',
        name: 'Griffon des Tempêtes',
        description: 'Ce griffon redoutable est maître des cieux, capable de voler à des altitudes impressionnantes...',
        price: 1000
      },

      {
        id: 35,
        category: 'montures',
        name: 'Licorne de la Lune Argentée',
        description: 'Cette licorne légendaire est dotée de pouvoirs magiques, capable de guérir les blessures de ses alliés...',
        price: 1500
      },

      {
        id: 36,
        category: 'montures',
        name: 'Gryphon Royal',
        description: 'Le Gryphon Royal est une monture majestueuse avec la tête et les ailes d\'un aigle royal...',
        price: 1200
      },

      {
        id: 37,
        category: 'montures',
        name: 'Licorne Céleste',
        description: 'La Licorne Céleste est une créature divine dotée d\'une corne lumineuse qui guérit les blessures...',
        price: 1500
      },

      {
        id: 38,
        category: 'montures',
        name: 'Tigre des Tempêtes',
        description: 'Le Tigre des Tempêtes est une monture agile et féroce qui parcourt les terres avec une vitesse éclair...',
        price: 1400
      },

      {
        id: 39,
        category: 'montures',
        name: 'Griffon de l\'Aube',
        description: 'Le Griffon de l\'Aube est un compagnon fidèle qui protège son cavalier avec une loyauté sans faille...',
        price: 1300
      },

      {
        id: 40,
        category: 'montures',
        name: 'Pégase Céleste',
        description: 'Le Pégase Céleste est une créature céleste dotée d\'ailes blanches resplendissantes et d\'une allure gracieuse...',
        price: 2000
      }
    ];

    export default itemsList;

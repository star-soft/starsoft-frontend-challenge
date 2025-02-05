import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Backpack",
      description:
        "Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas.",
      image: "https://softstar.s3.amazonaws.com/items/backpack.png",
      price: 182,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 2,
      name: "Boots of Ppeed",
      description:
        "Botas feitas de couro fino e tecido élfico, imbuidas com encantamentos mágicos que conferem velocidade sobrenatural a quem as usa, permitindo movimentos ágeis e fugas rápidas.",
      image: "https://softstar.s3.amazonaws.com/items/boots-of-speed.png",
      price: 338,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 3,
      name: "Curved Blade",
      description:
        "Uma lâmina curva, afiada como o olhar de um predador, forjada por habilidosos artesãos orientais. Ideal para ataques furtivos e cortes precisos em combate corpo a corpo.",
      image: "https://softstar.s3.amazonaws.com/items/curved-blade.png",
      price: 291,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 4,
      name: "Demon Dagger",
      description:
        "Uma adaga negra com runas ígneas incrustadas na lâmina, concedendo ao portador o poder de infligir feridas malditas que queimam a alma de seus adversários.",
      image: "https://softstar.s3.amazonaws.com/items/demon-dagger.png",
      price: 225,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 5,
      name: "Druid Staff",
      description:
        "Um cajado esculpido de madeira de carvalho antigo, entrelaçado com videiras vivas e adornado com gemas naturais. Amplifica os poderes da natureza, permitindo ao druida conjurar tempestades e curar feridas com a energia da vida.",
      image: "https://softstar.s3.amazonaws.com/items/druid-staff.png",
      price: 132,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 6,
      name: "Enchanted Cloak",
      description:
        "Um manto tecido com fios de prata e enfeitiçado com um encantamento de camuflagem. Oculta o portador nas sombras e o protege de ataques mágicos menores.",
      image: "https://softstar.s3.amazonaws.com/items/enchanted-cloak.png",
      price: 385,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 7,
      name: "Fire Hammer",
      description:
        "Um martelo pesado com cabeça de aço flamejante, capaz de infligir golpes ardentes que consomem até mesmo o aço mais resistente.",
      image: "https://softstar.s3.amazonaws.com/items/fire-hammer.png",
      price: 236,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 8,
      name: "Hunter Claw",
      description:
        "Garras afiadas como as presas de um lobo, moldadas em aço negro e aprimoradas com venenos mortais. Ideais para caçadores que preferem atacar suas presas com precisão letal.",
      image: "https://softstar.s3.amazonaws.com/items/hunter-claw.png",
      price: 223,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 9,
      name: "Hunter Dagger",
      description:
        "Uma adaga de caça com cabo entalhado em ossos de presas raras, perfeita para emboscar criaturas selvagens ou inimigos desprevenidos.",
      image: "https://softstar.s3.amazonaws.com/items/hunter-dagger.png",
      price: 265,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 10,
      name: "Ice Sword",
      description:
        "Uma espada de cristal de gelo, esculpida nas cavernas congeladas das montanhas mais altas. Cada golpe congela o ar ao redor do alvo, transformando a batalha em um campo de gelo mortal.",
      image: "https://softstar.s3.amazonaws.com/items/ice-sword.png",
      price: 233,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 11,
      name: "Knife",
      description:
        "Uma faca de lâmina afiada, simples e confiável, ideal para tarefas cotidianas ou como uma arma discreta em situações perigosas.",
      image: "https://softstar.s3.amazonaws.com/items/knife.png",
      price: 347,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 12,
      name: "Knight Shield",
      description:
        "Um escudo de aço polido, ornado com o brasão de um cavaleiro lendário. Oferece proteção sólida contra ataques físicos e mágicos, enquanto inspira coragem naqueles que o empunham.",
      image: "https://softstar.s3.amazonaws.com/items/knight-shield.png",
      price: 361,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 13,
      name: "Lantern Of Truth",
      description:
        "Uma lanterna antiga com vidro fosco, que emite uma luz suave e revela a verdade oculta nas sombras. Usada por investigadores e buscadores da justiça.",
      image: "https://softstar.s3.amazonaws.com/items/lantern-of-truth.png",
      price: 306,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 14,
      name: "Leather Armor",
      description:
        "Uma armadura leve feita de couro resistente, perfeita para exploradores e ladinos que preferem liberdade de movimento sobre proteção pesada.",
      image: "https://softstar.s3.amazonaws.com/items/leather-armor.png",
      price: 311,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 15,
      name: "Long Bow",
      description:
        "Um arco longo feito de madeira de ébano e enfeitiçado com entalhes mágicos. Dispara flechas com precisão mortal, atingindo alvos distantes com facilidade.",
      image: "https://softstar.s3.amazonaws.com/items/long-bow.png",
      price: 103,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 16,
      name: "Magic Ring",
      description:
        "Um anel de ouro incrustado com uma safira pulsante de energia arcano. Amplifica os poderes mágicos do usuário e concede resistência contra encantamentos hostis.",
      image: "https://softstar.s3.amazonaws.com/items/magic-ring.png",
      price: 308,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 17,
      name: "Magic Staff",
      description:
        "Um cajado de cristal claro, contendo um redemoinho de energia mágica em seu núcleo. Capacita feiticeiros a conjurar feitiços poderosos e manipular os elementos naturais.",
      image: "https://softstar.s3.amazonaws.com/items/magic-staff.png",
      price: 150,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 18,
      name: "Magic Wand",
      description:
        "Uma varinha fina e delicada, esculpida de madeira de faia e adornada com uma ponta de quartzo translúcido. Canaliza magia com precisão e controla feitiços com facilidade.",
      image: "https://softstar.s3.amazonaws.com/items/magic-wand.png",
      price: 143,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 19,
      name: "Mana Potion",
      description:
        "Uma poção de vidro contendo um líquido azul cintilante, que restaura a energia mágica esgotada. Essencial para feiticeiros e alquimistas em longas jornadas.",
      image: "https://softstar.s3.amazonaws.com/items/mana-potion.png",
      price: 330,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 20,
      name: "Mystic Orb",
      description:
        "Um orbe brilhante de cristal mágico, que flutua suavemente em torno do usuário. Contém segredos arcanos e pode ser usado para prever o futuro ou lançar magias complexas.",
      image: "https://softstar.s3.amazonaws.com/items/mystic-orb.png",
      price: 339,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 21,
      name: "Nature Book",
      description:
        "Um livro antigo com capa de couro verde, cheio de conhecimento sobre plantas, animais e rituais druídicos. Essencial para aqueles que buscam a sabedoria da natureza.",
      image: "https://softstar.s3.amazonaws.com/items/nature-book.png",
      price: 216,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 22,
      name: "Phoenix Feather",
      description:
        "Uma pena dourada e flamejante, arrancada da cauda de uma fênix lendária. Possui propriedades de regeneração e pode ser usada para criar poções de cura poderosas.",
      image: "https://softstar.s3.amazonaws.com/items/phoenix-feather.png",
      price: 200,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 23,
      name: "Plate Armor",
      description:
        "Uma armadura completa feita de placas de aço polido, que oferece proteção máxima contra ataques físicos e mágicos. Usada por cavaleiros e campeões em batalhas épicas.",
      image: "https://softstar.s3.amazonaws.com/items/plate-armor.png",
      price: 181,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 24,
      name: "Poison",
      description:
        "Um frasco contendo um veneno mortal, extraído de plantas raras e animais peçonhentos. Deve ser usado com cautela, pois até mesmo uma gota pode ser letal.",
      image: "https://softstar.s3.amazonaws.com/items/poison.png",
      price: 183,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 25,
      name: "Poisoned Dagger",
      description:
        "Uma adaga envenenada com um líquido verde sinistro, capaz de infligir danos devastadores ao contato. Ideal para assassinos que preferem ataques sutis e eficazes.",
      image: "https://softstar.s3.amazonaws.com/items/poisoned-dagger.png",
      price: 230,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 26,
      name: "Rangers Hood",
      description:
        "Um capuz de tecido fino e verde, com folhas entrelaçadas e capaz de camuflar o usuário na vegetação. Usado por arqueiros e rastreadores em emboscadas e caçadas.",
      image: "https://softstar.s3.amazonaws.com/items/rangers-hood.png",
      price: 219,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 27,
      name: "Space Helmet",
      description:
        "Um capacete de metal prateado com uma viseira transparente, projetado para proteger contra o vácuo do espaço e radiações cósmicas. Essencial para exploradores intergalácticos.",
      image: "https://softstar.s3.amazonaws.com/items/space-helmet.png",
      price: 306,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 28,
      name: "Spirit Lantern",
      description:
        "Uma lanterna de prata com vidro fosco, que emite uma luz suave e permite ao usuário comunicar-se com espíritos e entidades além do véu da morte.",
      image: "https://softstar.s3.amazonaws.com/items/spirit-lantern.png",
      price: 236,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 29,
      name: "Star Wand",
      description:
        "Uma varinha esculpida de madeira de freixo e incrustada com estrelas brilhantes. Concede ao usuário o poder de conjurar magias estelares e controlar a energia das constelações.",
      image: "https://softstar.s3.amazonaws.com/items/star-wand.png",
      price: 393,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 30,
      name: "War Hammer",
      description:
        "Um martelo de guerra maciço, com cabeça de aço temperado e punho revestido de couro. Causa estragos em armaduras e é usado por guerreiros em combates corpo a corpo.",
      image: "https://softstar.s3.amazonaws.com/items/war-hammer.png",
      price: 298,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 31,
      name: "War Mace",
      description:
        "Uma maça de batalha ornamentada com espinhos afiados e forjada com aço negro. Capaz de quebrar ossos e despedaçar escudos, ideal para confrontos brutais.",
      image: "https://softstar.s3.amazonaws.com/items/war-mace.png",
      price: 164,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
    {
      id: 32,
      name: "War Spear",
      description:
        "Uma lança de guerra com ponta de obsidiana, banhada em chamas mágicas que não consomem o metal. Ideal para cavaleiros que preferem atacar à distância sem abrir mão do poderio de uma arma de fogo.",
      image: "https://softstar.s3.amazonaws.com/items/war-spear.png",
      price: 162,
      createdAt: "2024-07-18T23:55:43.238Z",
    },
  ]);
}

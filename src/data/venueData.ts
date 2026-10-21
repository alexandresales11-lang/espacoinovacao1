export interface VenueImage {
  id: string;
  url: string;
  title: string;
  category: 'todos' | 'piscina' | 'coberta' | 'salao' | 'jardim' | 'banheiros' | 'entrada';
  description: string;
}

export const WHATSAPP_NUMBER = '5574991205293';
export const WHATSAPP_DISPLAY = '(74) 99120-5293';

export const VENUE_INFO = {
  name: 'Espaço Inovação',
  subtitle: 'Espaço para Festas e Eventos',
  hostName: 'Konccy',
  hostPhoto: 'https://i.imgur.com/RnP9jNx.jpeg',
  capacity: 'Comporta mais de 300 convidados',
  city: 'Jacobina, Bahia',
  address: 'Segunda Travessa São Francisco de Assis Catuaba, Jacobina - BA, 44700-000',
  googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=Segunda+Travessa+S%C3%A3o+Francisco+de+Assis+Catuaba+Jacobina+BA',
  wazeLink: 'https://waze.com/ul?q=Segunda%20Travessa%20São%20Francisco%20de%20Assis%20Catuaba%20Jacobina',
  tagline: 'Natureza, elegância e experiências inesquecíveis em um só lugar.',
  welcomeHeading: 'Ao novo conceito em espaço de festa de Jacobina.',
};

export const GALLERY_IMAGES: VenueImage[] = [
  {
    id: 'piscina-1',
    url: 'https://i.imgur.com/yw4NkBg.jpeg',
    title: 'Área com Piscina e Deck',
    category: 'piscina',
    description: 'Piscina cristalina cercada de coqueiros e área aberta para confraternizações ensolaradas ou noites iluminadas.',
  },
  {
    id: 'piscina-2',
    url: 'https://i.imgur.com/CKFRWj4.jpeg',
    title: 'Espaço Aquático e Lazer',
    category: 'piscina',
    description: 'Área de banho de sol e relaxamento integrado com a natureza e área coberta.',
  },
  {
    id: 'coberta-1',
    url: 'https://i.imgur.com/xRR2VAl.jpeg',
    title: 'Área Coberta com Mesas',
    category: 'coberta',
    description: 'Espaço coberto amplo, arejado e protegido do sol e chuva com excelente acabamento.',
  },
  {
    id: 'coberta-2',
    url: 'https://i.imgur.com/COLi1IJ.jpeg',
    title: 'Área de Convivência e Refeições',
    category: 'coberta',
    description: 'Estrutura completa com mesas, cadeiras e churrasqueira para seus convidados.',
  },
  {
    id: 'coberta-3',
    url: 'https://i.imgur.com/HUf83k7.jpeg',
    title: 'Salão Integrado e Espaço Gourmet',
    category: 'coberta',
    description: 'Ambiente aconchegante para montagem de buffet, som e pista de dança.',
  },
  {
    id: 'coberta-4',
    url: 'https://i.imgur.com/U9VD8sP.jpeg',
    title: 'Ponto de Apoio e Circulação',
    category: 'coberta',
    description: 'Espaço livre e organizado que garante conforto e fluidez para todos os convidados.',
  },
  {
    id: 'salao-1',
    url: 'https://i.imgur.com/sY0EA6y.jpeg',
    title: 'Entrada para o Salão Climatizado',
    category: 'salao',
    description: 'Acesso elegante ao salão fechado, com acabamento refinado e portas de vidro.',
  },
  {
    id: 'recepcao-1',
    url: 'https://i.imgur.com/NCziKG3.jpeg',
    title: 'Vista da Recepção do Espaço',
    category: 'jardim',
    description: 'O primeiro impacto visual ao passar pelo portão: amplitude, verde e acolhimento.',
  },
  {
    id: 'recepcao-2',
    url: 'https://i.imgur.com/ovw9nDb.jpeg',
    title: 'Pátio Aberto e Circulação',
    category: 'jardim',
    description: 'Espaço plano e seguro, ideal para recepções, food trucks, brinquedos infantis ou lounges.',
  },
  {
    id: 'entrada-1',
    url: 'https://i.imgur.com/E830ra7.jpeg',
    title: 'Fachada e Entrada Principal',
    category: 'entrada',
    description: 'Portão privativo de acesso seguro com estacionamento e visual moderno.',
  },
  {
    id: 'entrada-2',
    url: 'https://i.imgur.com/O3QQXzO.jpeg',
    title: 'Acesso Fácil e Seguro',
    category: 'entrada',
    description: 'Localização tranquila no bairro Catuaba em Jacobina com facilidade para carga e descarga.',
  },
  {
    id: 'jardim-1',
    url: 'https://i.imgur.com/TSsQLTc.jpeg',
    title: 'Jardim e Área Verde',
    category: 'jardim',
    description: 'Paisagismo exuberante com palmeiras e plantas tropicais perfeitas para fotos memoráveis.',
  },
  {
    id: 'jardim-2',
    url: 'https://i.imgur.com/CqpD88d.jpeg',
    title: 'Cenários para Fotos ao Ar Livre',
    category: 'jardim',
    description: 'Cantinhos decorados com plantas que valorizam as recordações do seu grande dia.',
  },
  {
    id: 'banheiro-1',
    url: 'https://i.imgur.com/R9VrRtc.jpeg',
    title: 'Banheiros com Bancada em Granito',
    category: 'banheiros',
    description: 'Espaço com espelhos modernos, torneiras de alto padrão e acabamento impecável.',
  },
  {
    id: 'banheiro-2',
    url: 'https://i.imgur.com/s6H3nTK.jpeg',
    title: 'Sanitários Masculino e Feminino',
    category: 'banheiros',
    description: 'Cabines individuais higienizadas com portas e fechaduras privativas.',
  },
  {
    id: 'banheiro-3',
    url: 'https://i.imgur.com/OyPbbDy.jpeg',
    title: 'Lavatório e Espelho Iluminado',
    category: 'banheiros',
    description: 'Conforto e elegância que seus convidados merecem durante todo o evento.',
  },
  {
    id: 'banheiro-4',
    url: 'https://i.imgur.com/FhFZuWn.jpeg',
    title: 'Acessibilidade e Espaço Infantil',
    category: 'banheiros',
    description: 'Projetado com cuidado para atender adultos, crianças e necessidades especiais.',
  },
  {
    id: 'banheiro-5',
    url: 'https://i.imgur.com/CzNQKv5.jpeg',
    title: 'Detalhes dos Sanitários',
    category: 'banheiros',
    description: 'Louças sanitárias novas e ambiente sempre limpo e organizado.',
  },
  {
    id: 'recepcao-calorosa',
    url: 'https://i.imgur.com/MOQduAR.jpeg',
    title: 'Recepção Calorosa e Convivência',
    category: 'todos',
    description: 'Momentos inesquecíveis compartilhados entre amigos e família no Espaço Inovação.',
  },
];

export const AMENITIES = [
  {
    icon: 'Trees',
    title: 'Área Aberta com Natureza',
    desc: 'Jardim tropical, ar fresco e ampla área externa para eventos diurnos ou noturnos sob as estrelas.',
  },
  {
    icon: 'Snowflake',
    title: 'Salão Climatizado',
    desc: 'Ambiente fechado com ar-condicionado de alta potência para garantir o máximo conforto térmico.',
  },
  {
    icon: 'Users',
    title: 'Capacidade para 300+ Pessoas',
    desc: 'Estrutura espaçosa e flexível que comporta desde celebrações intimistas até grandes festas.',
  },
  {
    icon: 'Armchair',
    title: 'Cadeiras e Mesas Completas',
    desc: 'Mobiliário incluso para economizar no aluguel avulso e facilitar toda a organização da sua festa.',
  },
  {
    icon: 'ChefHat',
    title: 'Cozinha Equipada',
    desc: 'Espaço estruturado com freezers, bancadas e pias para suporte eficiente de buffet e churrasco.',
  },
  {
    icon: 'Bath',
    title: 'Banheiros Modernos & Família',
    desc: 'Sanitários individuais masculino e feminino com lavabo requintado e suporte infantil.',
  },
  {
    icon: 'Waves',
    title: 'Piscina & Área de Lazer',
    desc: 'Área de piscina refrescante para confraternizações, aniversários e festas de fim de semana.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Segurança & Privacidade',
    desc: 'Espaço totalmente murado e seguro no Catuaba, garantindo total privacidade para você e sua família.',
  },
];

export const EVENT_TYPES = [
  { id: 'casamento', label: 'Casamento', desc: 'Cerimônia ao ar livre ou no salão climatizado', defaultGuests: 150 },
  { id: '15anos', label: 'Festa de 15 Anos', desc: 'Pista de dança, iluminação e espaço fotogênico', defaultGuests: 120 },
  { id: 'aniversario', label: 'Aniversário & Comemoração', desc: 'Espaço com piscina e churrasqueira para curtir', defaultGuests: 80 },
  { id: 'confraternizacao', label: 'Confraternização / Empresa', desc: 'Ampla área para integração de equipes', defaultGuests: 100 },
  { id: 'formatura', label: 'Formatura / Colação', desc: 'Salão nobre com estrutura completa de recepção', defaultGuests: 180 },
  { id: 'infantil', label: 'Festa Infantil / Família', desc: 'Segurança para as crianças e conforto para os pais', defaultGuests: 60 },
  { id: 'religioso', label: 'Retiro / Encontro Espiritual', desc: 'Ambiente tranquilo em contato com a natureza', defaultGuests: 90 },
  { id: 'outro', label: 'Outro Formato de Evento', desc: 'Conte sua ideia para adaptarmos o melhor pacote', defaultGuests: 100 },
];

export const FAQS = [
  {
    question: 'Qual a capacidade máxima do Espaço Inovação?',
    answer: 'Nosso espaço acomoda com conforto e segurança mais de 300 convidados, distribuídos entre o salão climatizado, a área coberta e a área externa da piscina e jardins.',
  },
  {
    question: 'As mesas e cadeiras já estão inclusas no aluguel?',
    answer: 'Sim! Disponibilizamos jogos de mesas e cadeiras inclusos na locação, eliminando custos extras com frete e aluguel de mobiliário básico.',
  },
  {
    question: 'Como faço para agendar uma visita presencial para conhecer o local?',
    answer: 'Você pode agendar diretamente pelo WhatsApp com a Konccy clicando no botão do simulador ou no botão de visita. Teremos enorme prazer em te receber e apresentar cada cantinho!',
  },
  {
    question: 'O espaço possui salão com ar-condicionado?',
    answer: 'Sim, contamos com salão fechado totalmente climatizado, permitindo que seu evento ocorra com conforto independente da temperatura externa.',
  },
  {
    question: 'É permitido levar buffet, DJ e decoração próprios?',
    answer: 'Com certeza! Você tem total liberdade para contratar seus profissionais de preferência para buffet, música, fotografia e decoração.',
  },
  {
    question: 'Onde fica localizado o espaço em Jacobina?',
    answer: 'Estamos localizados na Segunda Travessa São Francisco de Assis, bairro Catuaba, em Jacobina - BA (CEP 44700-000), com acesso fácil e rua tranquila.',
  },
];

export type SpecialtyFaq = {
  answer: string;
  question: string;
};

export type SpecialtySectionCard = {
  description: string;
  title: string;
};

export type SpecialtyContent = {
  benefits: SpecialtySectionCard[];
  ctaLabel: string;
  description: string;
  eyebrow: string;
  faqs: SpecialtyFaq[];
  heroHighlights: string[];
  process: SpecialtySectionCard[];
  slug: "clareamento" | "implantes" | "ortodontia" | "protese";
  subtitle: string;
  title: string;
  trustPoints: SpecialtySectionCard[];
};

export const specialtyContent: Record<SpecialtyContent["slug"], SpecialtyContent> = {
  clareamento: {
    slug: "clareamento",
    eyebrow: "Clareamento Dental em Resende",
    title: "Ilumine o sorriso com um plano de clareamento seguro, orientado e proporcional ao seu caso.",
    subtitle:
      "Se voce sente que o sorriso esta escurecido, amarelado ou sem brilho, a Orthoflow pode avaliar a melhor estrategia para clarear com naturalidade e preservar a saude dental.",
    description:
      "O clareamento nao precisa deixar o sorriso artificial. A proposta e buscar um resultado limpo, harmonioso e compativel com sua estrutura dentaria, com orientacoes claras sobre expectativa e manutencao.",
    ctaLabel: "Quero avaliar meu clareamento",
    heroHighlights: [
      "Avaliacao da tonalidade e sensibilidade",
      "Planejamento proporcional ao seu sorriso",
      "Orientacoes para manter o resultado",
    ],
    trustPoints: [
      {
        title: "Resultado com naturalidade",
        description:
          "A meta nao e exagerar no branco, e sim encontrar um tom mais luminoso que combine com seu rosto e seu sorriso.",
      },
      {
        title: "Cuidado com sensibilidade",
        description:
          "Antes de indicar o clareamento, a avaliacao considera seu historico de sensibilidade e as condicoes do esmalte.",
      },
      {
        title: "Mais seguranca na decisao",
        description:
          "Voce entende o que esperar, quais cuidados seguir e quando o procedimento realmente faz sentido para o seu caso.",
      },
    ],
    benefits: [
      {
        title: "Sorriso mais vivo em pouco tempo",
        description:
          "Quando ha indicacao, o clareamento pode devolver luminosidade ao sorriso de forma objetiva e com boa percepcao estetica.",
      },
      {
        title: "Melhora da confianca ao sorrir",
        description:
          "Muitos pacientes procuram clareamento por impacto visual imediato, especialmente em fotos, reunioes e vida social.",
      },
      {
        title: "Plano com manutencao orientada",
        description:
          "O resultado depende tanto da execucao quanto do cuidado posterior. Por isso, a orientacao faz parte do tratamento.",
      },
    ],
    process: [
      {
        title: "1. Avaliacao de indicacao",
        description:
          "A consulta verifica tonalidade atual, restauracoes aparentes, sensibilidade e se existe indicacao real para o clareamento.",
      },
      {
        title: "2. Definicao da abordagem",
        description:
          "A equipe explica o plano mais adequado e alinha expectativa de cor, tempo de evolucao e cuidados necessarios.",
      },
      {
        title: "3. Acompanhamento do resultado",
        description:
          "Depois do clareamento, as orientacoes ajudam a preservar o tom alcancado e evitar recaidas precoces.",
      },
    ],
    faqs: [
      {
        question: "Clareamento enfraquece os dentes?",
        answer:
          "Quando ha indicacao correta e acompanhamento profissional, o clareamento nao deve ser tratado como um procedimento improvisado. A avaliacao define se seu caso e adequado.",
      },
      {
        question: "Quem tem sensibilidade pode fazer?",
        answer:
          "Depende. Sensibilidade e um ponto importante da consulta inicial. Em alguns casos o procedimento e adaptado; em outros, pode nao ser a melhor escolha naquele momento.",
      },
      {
        question: "O resultado fica artificial?",
        answer:
          "Nao precisa. O objetivo da Orthoflow e buscar um sorriso mais luminoso sem fugir da harmonia facial e das caracteristicas naturais do paciente.",
      },
      {
        question: "Quanto tempo dura o clareamento?",
        answer:
          "A duracao varia conforme habitos, alimentacao, higiene e manutencao. A consulta orienta o que influencia mais na preservacao do resultado.",
      },
    ],
  },
  implantes: {
    slug: "implantes",
    eyebrow: "Implantes Dentarios em Resende",
    title: "Substitua dentes perdidos com estabilidade, conforto e previsibilidade.",
    subtitle:
      "Se voce evita sorrir, mastigar ou falar com confianca por causa da falta de um ou mais dentes, a Orthoflow oferece um plano claro para reconstruir sua mastigacao com seguranca.",
    description:
      "Os implantes funcionam como novas raizes para sustentar dentes fixos com aparencia natural. A avaliacao define o tipo de reabilitacao ideal para o seu caso, do implante unitario ao protocolo.",
    ctaLabel: "Quero avaliar meu caso de implantes",
    heroHighlights: [
      "Avaliacao individualizada",
      "Planejamento digital",
      "Possibilidade de carga imediata em casos selecionados",
    ],
    trustPoints: [
      {
        title: "Para quem perdeu um ou mais dentes",
        description:
          "Indicacao frequente para quem quer voltar a mastigar sem depender de solucoes moveis.",
      },
      {
        title: "Mais seguranca no dia a dia",
        description:
          "Ao estabilizar a reabilitacao, o paciente recupera conforto para sorrir, falar e comer com tranquilidade.",
      },
      {
        title: "Planejamento antes da decisao",
        description:
          "A equipe explica etapas, prazos e cuidados para voce decidir com clareza e sem pressa.",
      },
    ],
    benefits: [
      {
        title: "Aparencia natural",
        description:
          "A reabilitacao e planejada para harmonizar com seu sorriso e preservar a naturalidade do rosto.",
      },
      {
        title: "Firmeza para mastigar",
        description:
          "O objetivo e devolver estabilidade para sua rotina alimentar, com mais confianca e menos limitacoes.",
      },
      {
        title: "Tratamento com previsibilidade",
        description:
          "Fluxo digital e acompanhamento clinico ajudam a reduzir improvisos e tornar cada etapa mais segura.",
      },
    ],
    process: [
      {
        title: "1. Diagnostico e planejamento",
        description:
          "Entendemos sua queixa, avaliamos exames e definimos a estrategia mais indicada para a sua reabilitacao.",
      },
      {
        title: "2. Instalacao e acompanhamento",
        description:
          "O procedimento e conduzido com foco em conforto, orientacoes claras e acompanhamento proximo no pos-operatorio.",
      },
      {
        title: "3. Reabilitacao final",
        description:
          "Depois da fase clinica, finalizamos a protese sobre implantes para devolver funcao e estetica ao sorriso.",
      },
    ],
    faqs: [
      {
        question: "Implante doi?",
        answer:
          "O procedimento e realizado com anestesia local. A maioria dos pacientes relata menos desconforto do que imaginava, e a recuperacao costuma ser acompanhada com orientacoes e medicacao simples.",
      },
      {
        question: "Quem tem diabetes ou hipertensao pode fazer?",
        answer:
          "Em muitos casos, sim. O mais importante e uma avaliacao individual para entender o controle da saude geral e definir o melhor caminho com seguranca.",
      },
      {
        question: "Quanto tempo leva para ficar pronto?",
        answer:
          "Isso depende da quantidade de dentes, condicoes do osso e tipo de reabilitacao. Em alguns casos selecionados existe possibilidade de dentes provisórios em curto prazo, mas o cronograma so e definido apos a consulta.",
      },
      {
        question: "Existe parcelamento?",
        answer:
          "Sim. As formas de pagamento sao explicadas na avaliacao para que voce entenda o investimento e escolha a melhor condicao para o seu momento.",
      },
    ],
  },
  ortodontia: {
    slug: "ortodontia",
    eyebrow: "Ortodontia em Resende",
    title: "Alinhe seu sorriso com mais previsibilidade, conforto e acompanhamento de perto.",
    subtitle:
      "Se os dentes tortos, espacos ou mordida desalinhada afetam sua estetica, higiene ou confianca, a Orthoflow pode montar um plano ortodontico claro para o seu caso.",
    description:
      "A avaliacao identifica necessidades funcionais e esteticas para indicar o tratamento ortodontico mais adequado. O objetivo e corrigir o alinhamento com planejamento individualizado e acompanhamento consistente.",
    ctaLabel: "Quero avaliar meu caso de ortodontia",
    heroHighlights: [
      "Analise da mordida e do alinhamento",
      "Planejamento individualizado",
      "Acompanhamento continuo da evolucao",
    ],
    trustPoints: [
      {
        title: "Para adolescentes e adultos",
        description:
          "Ortodontia nao e apenas para uma fase da vida. O plano considera idade, rotina e expectativa estetica do paciente.",
      },
      {
        title: "Mais do que estetica",
        description:
          "Alinhar os dentes tambem pode facilitar higiene, melhorar distribuicao de forcas e reduzir desconfortos funcionais.",
      },
      {
        title: "Ajustes com acompanhamento real",
        description:
          "O tratamento exige constancia. Por isso, a jornada e pensada com revisoes e orientacoes ao longo da evolucao.",
      },
    ],
    benefits: [
      {
        title: "Sorriso mais harmonioso",
        description:
          "O alinhamento ortodontico melhora proporcao visual e ajuda o paciente a sorrir com mais seguranca.",
      },
      {
        title: "Melhor funcao da mordida",
        description:
          "Quando indicado, o tratamento pode contribuir para encaixe mais equilibrado e distribuicao funcional mais adequada.",
      },
      {
        title: "Mais facilidade na higienizacao",
        description:
          "Dentes melhor posicionados tendem a facilitar a limpeza diaria e o cuidado preventivo da saude bucal.",
      },
    ],
    process: [
      {
        title: "1. Avaliacao ortodontica",
        description:
          "A consulta analisa alinhamento, mordida, queixa principal e objetivos para entender o ponto de partida do tratamento.",
      },
      {
        title: "2. Definicao do plano",
        description:
          "A equipe explica a estrategia recomendada, estimativa de acompanhamento e cuidados necessarios para a fase ativa.",
      },
      {
        title: "3. Revisoes e ajustes",
        description:
          "Ao longo do tratamento, os retornos acompanham a evolucao e refinam movimentos para manter previsibilidade.",
      },
    ],
    faqs: [
      {
        question: "Adulto pode usar aparelho?",
        answer:
          "Sim. Muitos pacientes iniciam ortodontia na fase adulta. A indicacao depende de uma avaliacao clinica, nao apenas da idade.",
      },
      {
        question: "Ortodontia serve so para estetica?",
        answer:
          "Nao. O alinhamento pode ter impacto estetico, mas tambem pode melhorar mordida, distribuicao funcional e higiene.",
      },
      {
        question: "Quanto tempo leva o tratamento?",
        answer:
          "O prazo varia conforme complexidade do caso, colaboracao do paciente e objetivo final. O cronograma so deve ser definido apos avaliacao.",
      },
      {
        question: "Como saber se preciso de ortodontia?",
        answer:
          "Se voce percebe dentes desalinhados, espacos, mordida errada ou dificuldade para higienizar certas regioes, vale passar por avaliacao para entender se ha indicacao.",
      },
    ],
  },
  protese: {
    slug: "protese",
    eyebrow: "Protese Dentaria em Resende",
    title: "Recupere conforto para sorrir, falar e mastigar sem vergonha.",
    subtitle:
      "Quando a dentadura incomoda, a mastigacao fica insegura ou o sorriso deixa de parecer seu, a protese certa pode devolver funcao, encaixe e autoestima.",
    description:
      "A Orthoflow avalia seu caso para indicar a melhor reabilitacao, seja protese fixa, protocolo ou removivel. O foco e encontrar uma solucao que respeite sua rotina, seu conforto e seu objetivo.",
    ctaLabel: "Quero avaliar minha protese",
    heroHighlights: [
      "Opcoes fixas e removiveis",
      "Planejamento individualizado",
      "Mais conforto e estetica no dia a dia",
    ],
    trustPoints: [
      {
        title: "Para quem sofre com dentadura solta",
        description:
          "Quando a adaptacao incomoda ou gera inseguranca, uma nova protese pode mudar completamente a rotina.",
      },
      {
        title: "Reabilitacao alinhada ao seu caso",
        description:
          "Nem todo paciente precisa da mesma solucao. A indicacao depende da estrutura bucal, objetivo e expectativa funcional.",
      },
      {
        title: "Mais liberdade para a vida social",
        description:
          "O ganho nao e apenas estetico: falar, comer e sorrir com mais tranquilidade muda a confianca no dia a dia.",
      },
    ],
    benefits: [
      {
        title: "Melhor encaixe e adaptacao",
        description:
          "O planejamento busca reduzir folgas, desconfortos e dificuldades comuns de protese antiga ou mal ajustada.",
      },
      {
        title: "Mais seguranca para se alimentar",
        description:
          "Com a solucao correta, a mastigacao tende a ficar mais estavel e previsivel no cotidiano.",
      },
      {
        title: "Estetica mais harmoniosa",
        description:
          "A reabilitacao tambem considera proporcao, formato e naturalidade para que o sorriso fique mais leve e confiante.",
      },
    ],
    process: [
      {
        title: "1. Avaliacao do sorriso e da mordida",
        description:
          "A equipe analisa sua adaptacao atual, necessidades funcionais e objetivos esteticos antes de indicar qualquer tratamento.",
      },
      {
        title: "2. Definicao da melhor protese",
        description:
          "Escolhemos a opcao mais adequada para seu caso, explicando vantagens, limites e cuidados de cada alternativa.",
      },
      {
        title: "3. Ajustes e acompanhamento",
        description:
          "O pos-tratamento e importante para refinar encaixe, conforto e seguranca no uso continuo.",
      },
    ],
    faqs: [
      {
        question: "Qual a diferenca entre protese fixa e removivel?",
        answer:
          "A protese fixa fica estabilizada sobre dentes ou implantes e nao sai para higienizacao comum. A removivel pode ser retirada. A melhor escolha depende da sua estrutura bucal e do resultado que voce busca.",
      },
      {
        question: "Quem usa dentadura pode migrar para outra solucao?",
        answer:
          "Muitas vezes, sim. A avaliacao mostra se ha condicoes para melhorar estabilidade, conforto e estetica com outro tipo de protese.",
      },
      {
        question: "A adaptacao demora?",
        answer:
          "Existe um periodo de adaptacao, mas ele varia de pessoa para pessoa e do tipo de protese escolhida. O acompanhamento serve justamente para ajustar esse processo.",
      },
      {
        question: "Como descubro qual protese e ideal para mim?",
        answer:
          "O caminho certo e a consulta de avaliacao. Nela, a equipe entende sua queixa, examina a boca e explica qual solucao faz mais sentido para o seu caso.",
      },
    ],
  },
};

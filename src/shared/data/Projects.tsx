import { Building2 } from "lucide-react";
import { IProject } from "../../features/projects/interfaces/IProject";

export const projects: IProject[] = [
  {
    id: "directluz",
    name: "DirectLuz",
    isHighlighted: true,
    shortDescription:
      "Plataforma multi-tenant de gestão de parques de iluminação pública municipal.",
    fullDescription:
      "O DirectLuz é a plataforma de gestão de parques de iluminação pública municipal utilizada por prefeituras em São Paulo, Paraíba e Pernambuco. Cobre inventário de ativos (postes, transformadores, medidores e telegestores), ingestão contínua de telemetria, motor de alertas, ordens de serviço e operação de campo. Em João Pessoa a operação já soma mais de 38 mil LEDs instalados e 37 mil telegestores conectados, com o pipeline processando mais de 5 milhões de mensagens de telemetria por hora.",
    category: "PLATAFORM",
    url: "https://app.directluz.com.br",
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    role: "Tech Lead e Arquiteto de Software",
    period: "Set 2025 - Presente",
    contributions: [
      "Definição da arquitetura da plataforma, com isolamento de dados por município",
      "Liderança da migração do processamento de telemetria do legado para um serviço dedicado em C# .NET 8",
      "Modelagem do pipeline de ingestão: decodificação de payload, motor de regras de alerta e persistência em lote",
      "Frontend em React com geoprocessamento sobre mapas para milhares de ativos, dashboards operacionais e relatórios",
      "Aplicativo React Native para as equipes de campo, com suporte a operação offline",
      "Implantação da estratégia de observabilidade com OpenTelemetry e Grafana",
      "Levantamento de requisitos em campo, com visitas a João Pessoa e outros municípios atendidos",
    ],
    challenges:
      "O maior desafio foi sustentar a volumetria de telemetria sem degradar a operação: dezenas de milhares de dispositivos enviando dados de forma contínua, 24 horas por dia, em municípios diferentes e com bancos isolados. O componente legado não acompanhava esse crescimento, e a substituição não podia gerar janela de indisponibilidade. Somava-se a isso o requisito das equipes de campo, que trabalham em rua sem sinal confiável.",
    solutions:
      "O novo serviço de telemetria foi escrito em C# .NET 8 e colocado em execução paralela ao legado, permitindo migração gradual e reversível. A escrita no banco passou a usar operações em lote com upsert, o que reduziu drasticamente o custo por mensagem: hoje o serviço absorve a carga total de telegestores com uso de CPU abaixo de 5%. No mobile, adotamos uma estratégia offline-first com sincronização posterior, garantindo que a equipe consiga registrar serviços mesmo sem conectividade.",
    technologies: [
      "PHP",
      ".NET",
      "REACT",
      "REACTNATIVE",
      "MYSQL",
      "MQTT",
      "DOCKER",
      "OPENTELEMETRY",
      "GRAFANA",
    ],
    images: [],
  },
  {
    id: "faceguard",
    name: "FaceGuard",
    isHighlighted: true,
    shortDescription:
      "Plataforma de videomonitoramento inteligente para smart cities e segurança pública.",
    fullDescription:
      "O FaceGuard é uma plataforma de videomonitoramento inteligente voltada a segurança pública e operações privadas. Integra, em um único produto, monitoramento de vídeo ao vivo e gravação, motor de visão computacional, despacho de ocorrências com boletim digital, controle de rondas e gestão de escalas, além de aplicativo para as equipes em campo. Em operação, a plataforma acompanha mais de 4.000 câmeras e processa cerca de 44 mil eventos a cada 15 minutos.",
    category: "PLATAFORM",
    url: "https://faceguard.me/",
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    role: "Tech Lead e Arquiteto de Software",
    period: "Abr 2026 - Presente",
    contributions: [
      "Definição da arquitetura de uma solução distribuída de alta volumetria, com processamento de vídeo e eventos em tempo real",
      "Definição da estratégia técnica do produto: escolha de tecnologias, padrões de engenharia e critérios de qualidade do time",
      "Coordenação das equipes de web, mobile, backend, inteligência artificial e infraestrutura",
      "Autoria dos princípios de engenharia que orientam o code review do repositório",
      "Implantação da estratégia de observabilidade da plataforma",
      "Levantamento de requisitos em campo, acompanhando a operação real de centrais e equipes",
    ],
    challenges:
      "Segurança pública é um domínio em que latência e disponibilidade não são negociáveis: um alerta atrasado perde o valor. O desafio central foi desenhar uma plataforma que processasse vídeo e eventos em tempo real, em volume alto e contínuo, funcionando também em cenários com conectividade instável, sem depender de hardware proprietário de um único fabricante.",
    solutions:
      "A arquitetura adotou uma topologia híbrida, com processamento próximo à origem do vídeo e sincronização assíncrona com a nuvem, o que mantém a operação funcionando mesmo em queda de conectividade. Os modelos de visão computacional foram desacoplados em serviços independentes, permitindo evoluir ou trocar cada capacidade sem impacto no restante do sistema. A integração com câmeras foi feita sobre protocolos abertos, decisão deliberada para eliminar dependência de fornecedor.",
    technologies: [
      "TYPESCRIPT",
      "REACT",
      "REACTNATIVE",
      "PYTHON",
      "POSTGRESQL",
      "DOCKER",
      "OPENTELEMETRY",
      "GRAFANA",
    ],
    images: [],
  },
  {
    id: "portal-transparencia-cultura",
    name: "Portal da Transparência da Cultura",
    shortDescription:
      "Plataforma pública de acesso a contratos, convênios, editais e fomento cultural do Estado de São Paulo.",
    fullDescription:
      "O Portal da Transparência da Secretaria da Cultura, Economia e Indústria Criativas do Estado de São Paulo dá acesso público a dados de contratos, convênios, editais e fomento cultural. É uma plataforma de acesso amplo e sazonal, em que a exigência legal de transparência precisa ser traduzida em navegação clara e informação encontrável pelo cidadão.",
    category: "PLATAFORM",
    url: "https://www.transparenciacultura.sp.gov.br/",
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    role: "Tech Lead",
    period: "Nov 2025 - Presente",
    contributions: [
      "Decisões de arquitetura da solução e definição dos padrões técnicos adotados pelo time",
      "Condução do ciclo completo de desenvolvimento, do refinamento com stakeholders à entrega em produção",
      "Implantação da estratégia de observabilidade e de análise de uso da plataforma",
      "Code review e coordenação da equipe de desenvolvimento",
    ],
    challenges:
      "O acesso a um portal de transparência é sazonal e imprevisível: cresce em picos ligados a publicações e prazos de editais. Manter disponibilidade e tempo de resposta nesses momentos, com custo previsível, foi o principal ponto de atenção da arquitetura.",
    solutions:
      "A solução foi desenhada priorizando disponibilidade e desempenho sob carga variável, com esteira de entrega contínua e observabilidade desde o início, o que permite identificar degradação antes que ela afete o cidadão.",
    technologies: ["NEXTJS", "TYPESCRIPT", ".NET", "SQLSERVER", "AZURE"],
    images: [],
  },
  {
    id: "cedoc-condephaat",
    name: "CEDOC - Centro de Documentação do CONDEPHAAT",
    shortDescription:
      "Digitalização e acesso público ao acervo documental do patrimônio cultural paulista.",
    fullDescription:
      "O CEDOC é o Centro de Documentação do CONDEPHAAT, conselho responsável pela preservação do patrimônio histórico, arquitetônico, arqueológico e cultural do Estado de São Paulo. A plataforma digitaliza e abre ao público um acervo de mais de 5.000 itens, entre processos de tombamento, mapas, plantas, fotografias e publicações, em parceria com o Arquivo Público do Estado de São Paulo.",
    category: "PLATAFORM",
    url: "https://app-cedoc-public-prod.azurewebsites.net/",
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    role: "Tech Lead",
    period: "Jun 2025 - Jan 2026",
    contributions: [
      "Definição da arquitetura da solução, com CMS headless para a curadoria do acervo",
      "Modelagem do domínio documental, contemplando tipologias heterogêneas de documento histórico",
      "Levantamento de requisitos junto ao cliente e reuniões periódicas de alinhamento técnico",
      "Coordenação da equipe e responsabilidade pelo ciclo completo até a entrega em produção",
      "Implantação da estratégia de observabilidade da plataforma",
    ],
    challenges:
      "O acervo do CONDEPHAAT reúne tipologias muito diferentes entre si: um processo de tombamento não se descreve da mesma forma que uma planta arquitetônica ou uma fotografia histórica. O desafio foi modelar um domínio capaz de representar essa diversidade sem engessar o trabalho de curadoria de quem alimenta a plataforma.",
    solutions:
      "Adotamos um CMS headless como camada de curadoria, com tipos de conteúdo flexíveis o suficiente para acomodar as diferentes tipologias documentais mantendo consistência de metadados. Isso permitiu à equipe do arquivo cadastrar e evoluir o acervo sem depender do time de desenvolvimento a cada novo tipo de documento.",
    technologies: ["NEXTJS", "TYPESCRIPT", "STRAPI", "NODEJS", "SQLSERVER", "AZURE"],
    images: [],
  },
  {
    id: "clube-beneficios-agenda-viva-sp",
    name: "Clube de Benefícios - Agenda Viva SP",
    shortDescription:
      "Plataforma de benefícios e parcerias culturais para o público da Agenda Viva SP.",
    fullDescription:
      "O Clube de Benefícios da Agenda Viva SP conecta o público cultural paulista a vantagens e parcerias exclusivas, ampliando o acesso à cultura no Estado. Concebido em conjunto com a Secretaria da Cultura, Economia e Indústria Criativas e a Organização Social Amigos da Arte, o produto se integra ao ecossistema da Agenda Viva SP, reaproveitando identidade e base de usuários já existentes.",
    category: "PLATAFORM",
    url: "https://clube.agendavivasp.com.br",
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    role: "Tech Lead e Arquiteto de Software",
    period: "Out 2025 - Presente",
    contributions: [
      "Concepção da solução desde o início, participando da definição do produto junto aos stakeholders",
      "Definição da arquitetura e da integração com o ecossistema da Agenda Viva SP",
      "Coordenação da equipe de desenvolvimento e responsabilidade pelo ciclo completo até produção",
      "Observabilidade implantada desde o primeiro deploy",
    ],
    challenges:
      "O Clube nasceu como produto novo, mas não podia parecer um sistema à parte: precisava herdar a identidade e a base de usuários da Agenda Viva SP sem criar um segundo cadastro nem duplicar regras de negócio já existentes.",
    solutions:
      "A arquitetura foi desenhada para reutilizar a identidade e a autenticação do ecossistema Agenda Viva SP, mantendo o Clube como um domínio próprio e evolutivo. Isso reduziu o atrito de entrada para o usuário final e evitou duplicação de responsabilidades entre os dois produtos.",
    technologies: ["NEXTJS", "TYPESCRIPT", ".NET", "MONGODB"],
    images: [],
  },
  {
    id: "agenda-viva-sp",
    name: "Agenda Viva SP",
    isHighlighted: true,
    shortDescription:
      "Plataforma colaborativa para descoberta e divulgação de eventos em São Paulo.",
    fullDescription:
      "Agenda Viva SP é uma iniciativa do Governo do Estado de São Paulo que reúne eventos culturais, esportivos, turísticos, agrícolas e econômicos em uma única plataforma digital. Com uma interface intuitiva, a plataforma facilita a descoberta de eventos em todas as regiões do Estado, promovendo o acesso à cultura e incentivando a participação cidadã. Desenvolvida em parceria com a Secretaria de Cultura, Economia e Indústria Criativas e a Organização Social Amigos da Arte, a plataforma é um marco na forma como os paulistas se conectam às atividades locais.",
    category: "PLATAFORM",
    url: "https://agendavivasp.com.br/",
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    role: "Tech Lead e Desenvolvedor",
    period: "Mar 2024 - Presente",
    contributions: [
      "Liderança técnica do projeto desde o início, atuando em todas as áreas da plataforma",
      "Desenvolvimento da plataforma pública e administrativa",
      "Criação e manutenção do backend escalável e orientado a boas práticas",
      "Implementação do fluxo de gestão de eventos com diferentes perfis de usuários (parceiros públicos, produtores independentes, organizações sociais, secretarias)",
      "Integração com serviços de analytics e dashboards personalizados",
      "Desenvolvimento de funcionalidades com IA, incluindo chatbot turístico com RAG, moderação de conteúdo automático entre outros.",
      "Participação ativa em reuniões com o cliente para acompanhamento, levantamento e refinamento de requisitos",
    ],
    challenges:
      "O principal desafio foi construir uma plataforma robusta, rápida e escalável para atender todo o Estado de São Paulo, conciliando entregas ágeis em sprints semanais com a complexidade de fluxos e regras específicas para diferentes tipos de usuários (público, parceiros, organizações sociais, secretarias, etc).",
    solutions:
      "A plataforma foi construída com uma arquitetura sólida, tornando a aplicação escalável, modular e preparada para crescer com novos requisitos. O refinamento contínuo de demandas, objetivando simplifica-las, foi essencial para o sucesso do projeto.",
    technologies: ["NEXTJS", ".NET", "PYTHON", "FASTAPI", "MONGODB"],
    images: [
      {
        title: "Página Principal",
        url: "/assets/agenda-viva-sp-1.png",
      },
      {
        title: "Detalhe do Evento",
        url: "/assets/agenda-viva-sp-2.png",
      },
    ],
  },

  {
    id: "turistic-guide-ai",
    name: "Guia Turístico AI",
    isHighlighted: true,
    shortDescription:
      "Chatbot inteligente com GPT-4 e RAG para recomendação de eventos culturais personalizados.",
    fullDescription:
      "O Guia Turístico AI é um assistente virtual integrado à plataforma Agenda Viva SP que utiliza GPT-4 e tecnologia de Retrieval Augmented Generation (RAG) para oferecer recomendações personalizadas de eventos culturais no Estado de São Paulo. Desenvolvido com FastAPI, Python e Azure Cognitive Search, o chatbot interpreta as preferências do usuário e sua localização para sugerir atividades relevantes, acessíveis e em tempo real. Com uma interface conversacional moderna, ele transforma a experiência de descoberta cultural em algo interativo e personalizado.",
    category: "AI",
    url: "https://agendavivasp.com.br/turist-chat",
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: '<Building2 className=\\"w-5 h-5 text-blue-600\\" />',
    },
    role: "Desenvolvedor",
    period: "Outubro 2024 - Presente",
    contributions: [
      "Desenvolvimento completo do chatbot com foco em recomendação turística inteligente",
      "Integração com Azure Cognitive Search",
      "Implementação da arquitetura RAG (Retrieval Augmented Generation) com uso de embeddings vetoriais",
      "Utilização de geolocalização do usuário para personalização das respostas",
      "Criação da API em Python com FastAPI e consumo via frontend Next.js da plataforma Agenda Viva SP",
    ],
    challenges:
      "O maior desafio foi garantir que as recomendações estivessem sempre atualizadas e condizentes com a realidade temporal dos eventos. Foi necessário evitar que o chatbot sugerisse eventos expirados ou que ainda não começaram, especialmente em perguntas como 'o que tem hoje?' ou 'quais eventos para o fim de semana?'. Isso exigiu uma gestão refinada da temporalidade das informações, sincronização contínua dos dados e um fluxo automatizado e confiável de indexação no Azure Cognitive Search.",
    solutions:
      "Foi implementado um pipeline automatizado de indexação de dados que atualiza os eventos culturalmente relevantes com base em data de início e fim, garantindo que apenas eventos válidos sejam considerados nas respostas. A lógica de recuperação também considera o contexto da pergunta e filtra eventos de acordo com a data e localização, utilizando filtros temporais precisos e segmentação por região.",
    technologies: ["PYTHON", "NEXTJS", "FASTAPI", "DOCKER"],
    images: [
      {
        title: "Interface do Chatbot",
        url: "/assets/chat-agenda-viva-sp-1.png",
      },
      {
        title: "Recomendações",
        url: "/assets/chat-agenda-viva-sp-2.png",
      },
    ],
  },
  {
    id: "fasepro",
    name: "CHATBOT FASE.PRO",
    shortDescription:
      "Chatbot inteligente com RAG e busca vetorial para apoiar programas de fomento cultural e social.",
    fullDescription:
      "O Chatbot FASE.PRO é um assistente virtual inteligente construído para atender usuários da plataforma FASE.PRO, especializada em fomento a projetos culturais e sociais. Integrando tecnologias como GPT-4, Azure Cognitive Search e busca vetorial, o chatbot fornece respostas contextualizadas, sugere editais relevantes, realiza desambiguação de perguntas e coleta feedbacks para aprimoramento contínuo. A arquitetura modular permite escalabilidade e personalização do fluxo RAG para diferentes clientes, com controle completo de parâmetros e módulos.",
    category: "AI",
    url: "https://www.fase.pro/",
    isInternal: true,
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: '<Building2 className=\\"w-5 h-5 text-blue-600\\" />',
    },
    role: "Tech Lead e Desenvolvedor",
    period: "Março 2024 - Presente",
    contributions: [
      "Desenvolvimento completo do chatbot com arquitetura modular baseada em RAG",
      "Decisões estratégicas sobre tipo de busca (semântica vs vetorial) com base em testes reais",
      "Integração com Azure Cognitive Search, OpenAI e banco SQL Server para loggings e métricas",
      "Criação de sistema de smalltalk para interação mais fluida com os usuários",
      "Implementação de fluxo de desambiguação com opções dinâmicas renderizadas na interface",
      "Sistema de feedback para coleta de avaliações sobre as respostas do bot",
      "Desenvolvimento de estrutura multi-cliente com configurações personalizadas por organização",
    ],
    challenges:
      "O maior desafio foi desenvolver uma arquitetura flexível e extensível que permitisse adaptar o fluxo RAG para diferentes realidades e clientes, mantendo qualidade nas respostas e facilidade de manutenção. Também foi desafiador implementar filtros de contexto e desambiguação em perguntas genéricas, além de criar uma estrutura de logging e avaliação robusta com integração direta ao banco de dados SQL Server.",
    solutions:
      "A arquitetura do chatbot foi baseada em módulos independentes que compõem o fluxo do RAG, possibilitando substituição ou extensão de partes específicas (busca, ranking, geração, validação etc). A escolha entre busca vetorial e semântica foi feita com base em testes de precisão e recall. Também foram implementadas estratégias para detectar ambiguidades e oferecer respostas guiadas por múltiplas opções, com feedback de qualidade diretamente integrado ao backend.",
    technologies: ["PYTHON", "FASTAPI", "DOCKER", "SQLSERVER"],
    images: [
      {
        title: "Chatbot UI",
        url: "/assets/chatbot-fase-1.png",
      },
      {
        title: "Chatbot UI",
        url: "/assets/chatbot-fase-2.png",
      },
    ],
  },
  {
    id: "vitrine-projetos",
    name: "Vitrine de Projetos",
    isHighlighted: true,
    shortDescription:
      "A plataforma que potencializa projetos culturais do ProAC ICMS, conectando quem cria a quem apoia.",
    fullDescription:
      "A Vitrine de Projetos é uma plataforma centralizada que conecta proponentes culturais e investidores, facilitando a captação de recursos por meio de transparência, visibilidade e tecnologia otimizada. A plataforma oferece listagem de projetos, busca avançada, perfis de proponentes e dados atualizados, garantindo alta acessibilidade e SEO otimizado. Integra dados extraídos do sistema FasePRO do programa ProAC ICMS.",
    category: "PLATAFORM",
    url: "https://vitrinedeprojetos.cultura.sp.gov.br",
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    role: "Tech Lead e Desenvolvedor",
    images: [
      {
        title: "Tela Inicial",
        url: "/assets/vitrine-de-projetos-1.png",
      },
      {
        title: "Listagem de projetos",
        url: "/assets/vitrine-de-projetos-2.png",
      },
    ],
    technologies: [
      "NEXTJS",
      "SQLSERVER",
      "PRISMA",
      "SHADCNUI",
      "TAILWIND",
      "SQLSERVER",
    ],
    period: "Dez 2024 - Presente",
    contributions: [
      "Definição da arquitetura da aplicação e tecnologias utilizadas",
      "Desenvolvimento completo da plataforma",
      "Padronização e modelagem de dados integrando fontes não relacionais com banco relacional (SQL Server)",
      "Criação da proposta visual e implementação do design com alta usabilidade",
      "Aplicação de boas práticas de SEO e acessibilidade",
      "Integração com Google Analytics para rastreamento de acesso e impacto",
    ],
    challenges:
      "O maior desafio foi transformar dados vindos de um banco não relacional (do sistema FasePRO) em uma estrutura relacional adequada para consumo via Prisma/SQL Server, garantindo integridade e performance. Outro ponto crítico foi atingir um alto nível de SEO e acessibilidade, uma exigência essencial para aumentar a visibilidade pública dos projetos culturais e cumprir o objetivo da plataforma: conectar criadores a patrocinadores.",
    solutions:
      "Foi estruturado um processo de transformação e padronização de dados, garantindo que a informação dos projetos fosse exposta de maneira clara e performática. No frontend, a aplicação foi construída com Next.js, utilizando rendering server-side para maximizar indexação por mecanismos de busca. Adotamos também componentes acessíveis com Shadcn UI, TailwindCSS e práticas modernas de otimização, garantindo performance e acessibilidade para todos os usuários.",
  },
  {
    id: "vitrine-cidades",
    name: "Vitrine de Cidades",
    shortDescription:
      "Plataforma para análise de investimentos em cultura nos municípios de SP.",
    fullDescription:
      "A Vitrine de Cidades é uma plataforma projetada para consolidar informações sobre recursos financeiros investidos no setor cultural em municípios do Estado de São Paulo. Reúne 12 fontes de financiamento, incluindo recursos municipais, estaduais e federais, e oferece relatórios detalhados, visualizações interativas e atualizações mensais para análise comparativa dos investimentos em cultura.",
    category: "WEBISTE",
    url: "#",
    github: "",
    isInternal: true,
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
    role: "Tech Lead e Desenvolvedor",
    images: [
      {
        title: "Tela de Login",
        url: "/assets/vitrine-cidades-1.png",
      },
      {
        title: "Mapa de investimentos",
        url: "/assets/vitrine-cidades-2.png",
      },
    ],
    technologies: ["NEXTJS", "SQLSERVER", "PRISMA"],
    period: "Março 2024 - Presente",
    contributions: [
      "Definição da arquitetura da aplicação e tecnologias utilizadas",
      "Modelagem da estrutura de dados em conjunto com o time de dados",
      "Implementação do backend e frontend completo com foco em segurança e performance",
      "Desenvolvimento de sistema de login passwordless para garantir acesso apenas a dispositivos autorizados",
      "Criação de sistema de extração de relatórios avançados a partir de múltiplas fontes de dados",
      "Configuração de visualizações interativas para análise comparativa de investimentos culturais por cidade",
    ],
    challenges:
      "A principal preocupação do projeto era garantir a segurança e o controle de acesso, dado o caráter sensível das informações disponibilizadas. Além disso, foi desafiador consolidar e estruturar dados provenientes de 12 fontes distintas, cada uma com seu próprio formato e periodicidade. A construção de relatórios confiáveis e visualizações de fácil interpretação também exigiu decisões técnicas cuidadosas desde a estruturação dos dados até a interface final.",
    solutions:
      "Optamos por um sistema de login passwordless com tokens de acesso temporários, garantindo que apenas dispositivos autorizados pudessem acessar a plataforma. A modelagem de dados foi feita em colaboração com o time de dados, utilizando Prisma e SQL Server para garantir integridade, performance e flexibilidade. As visualizações e relatórios foram construídos com foco em clareza, acessibilidade e confiabilidade, possibilitando análises rápidas e detalhadas por município.",
  },
  {
    id: "spot",
    name: "SPOT",
    shortDescription:
      "Plataforma centralizadora de documentação corporativa (Single Source of Truth - SSoT).",
    fullDescription:
      "O SPOT é a principal plataforma interna da BNP para centralização da documentação corporativa, seguindo o conceito de Single Source of Truth (SSoT). Criado para unificar processos e eliminar silos de conhecimento, o sistema permite que qualquer colaborador — técnico ou não — possa contribuir de forma estruturada com a base de conhecimento da empresa. Baseado em boas práticas como DocOps e Public-by-default, o SPOT promove colaboração, padronização e acesso rápido a conteúdos críticos, fortalecendo a cultura de precisão e transparência na organização.",
    category: "WEBISTE",
    isInternal: true,
    url: "https://spot.bnpsolucoes.com.br",
    github: "",
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: '<Building2 className=\\"w-5 h-5 text-blue-600\\" />',
    },
    role: "Desenvolvedor",
    period: "Out 2023 - Presente",
    contributions: [
      "Desenvolvimento completo da plataforma, desde o backend até a experiência do usuário",
      "Integração com o Azure AD para autenticação e controle de acesso",
      "Integração com Azure Cognitive Search para busca semântica",
      "Definição da arquitetura técnica e escolha das ferramentas utilizadas (MongoDB, Next.js, etc.)",
      "Desenho da proposta conceitual e funcional da plataforma baseada em SSoT, DocOps e Public-by-default",
      "Implementação do sistema de escrita e visualização de documentos",
      "Construção de uma interface intuitiva e acessível para colaboradores técnicos e não técnicos",
      "Geração de links públicos para compartilhamento de documentos com stakeholders externos",
    ],
    challenges:
      "O principal desafio foi encontrar uma estrutura flexível e performática para armazenar, editar e exibir documentação colaborativa, atendendo diferentes públicos internos. Era necessário equilibrar performance com usabilidade, permitindo que técnicos e não técnicos pudessem produzir conteúdo relevante, sem barreiras. Além disso, foi desafiador definir o padrão de escrita e renderização: Markdown, HTML puro ou editor visual (WYSIWYG)? A solução final precisou contemplar escalabilidade, simplicidade e clareza.",
    solutions:
      "Após validações e protótipos, optamos por uma abordagem flexível baseada em Markdown com suporte a visualização instantânea e edição WYSIWYG opcional. A estrutura do banco foi modelada em MongoDB para garantir flexibilidade nos documentos e performance em leitura. A interface foi pensada com foco em usabilidade e colaboratividade, integrando permissões, histórico de edições e visualização pública de documentos, fortalecendo o conceito de 'public by default' para comunicação interna e externa.",
    technologies: ["NEXTJS", ".NET", "MONGODB", "TYPESCRIPT", "TAILWIND"],
    images: [
      {
        title: "Tela de carregamento",
        url: "/assets/spot-1.png",
      },
      {
        title: "Listagem de documentos",
        url: "/assets/spot-2.png",
      },
    ],
  },
  {
    id: "milvus-widget",
    name: "Milvus Widget",
    shortDescription:
      "Widget flutuante personalizável para abertura de chamados via Milvus.",
    fullDescription:
      "O Milvus Widget é um script JavaScript injetável que permite integrar rapidamente a ferramenta de suporte Milvus em qualquer aplicação web. Ele oferece um botão flutuante personalizável que, ao ser clicado, exibe um modal para abertura de chamados. Desenvolvido com foco em flexibilidade, o widget aceita parâmetros dinâmicos para adaptar cores, estilos e comportamento a qualquer identidade visual. Também permite que informações do usuário logado sejam pré-carregadas via comandos, proporcionando uma experiência simplificada para quem abre o chamado.",
    category: "LIBRARY",
    url: "#",
    github: "",
    isInternal: true,
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: '<Building2 className="w-5 h-5 text-blue-600" />',
    },
    role: "Desenvolvedor",
    period: "Março 2024 - Presente",
    contributions: [
      "Desenvolvimento completo do widget em TypeScript com Next.js e Webpack",
      "Criação de API JavaScript global que permite comandos personalizados via `window.milvus`",
      "Implementação de sistema de fila local com retry para evitar perda de dados durante o carregamento",
      "Sistema de rastreio do usuário logado com envio de nome, email e dados extras da aplicação cliente",
      "Design e estrutura de botão flutuante personalizável via parâmetros dinâmicos (estilo, ícone, posição, cor, etc.)",
    ],
    challenges:
      "O maior desafio foi garantir que nenhuma informação enviada pela aplicação cliente fosse perdida caso o script do widget ainda estivesse carregando. Também foi essencial permitir personalizações visuais e funcionais para diferentes plataformas, sem exigir alteração no código-fonte do widget.",
    solutions:
      "Implementei um sistema de fila local baseada na `window` do navegador, onde comandos são enfileirados e processados com sistema de retry assim que o script estiver pronto. Essa abordagem garante confiabilidade e permite integração imediata sem impacto no tempo de carregamento da aplicação cliente. Além disso, a API do widget permite envio de informações do usuário logado para pré-preencher o formulário de chamados, otimizando a usabilidade.",
    technologies: ["NEXTJS", "TYPESCRIPT", "WEBPACK"],
    images: [
      {
        title: "Modal de Chamados",
        url: "/assets/milvus-widget-1.png",
      },
      {
        title: "Configurando o Widget",
        url: "/assets/milvus-widget-2.png",
      },
    ],
  },
  {
    id: "smac",
    name: "SMAC",
    shortDescription: "Sistema de Monitoramento e Avaliação da Cultura.",
    isHighlighted: true,
    isInternal: true,
    fullDescription:
      "O SMAC é uma plataforma desenvolvida para a Secretaria da Cultura do Estado de São Paulo com o objetivo de monitorar e avaliar projetos culturais geridos por Organizações Sociais. Ele centraliza indicadores, documentos e metas, permitindo uma gestão mais transparente, estratégica e eficaz das políticas públicas de cultura. Diante da complexidade dos contratos de gestão e do grande volume de documentos exigidos, o sistema promove a automatização, padronização e rastreabilidade dos fluxos, viabilizando o acompanhamento de resultados em tempo real e a tomada de decisões baseadas em dados.",
    category: "PLATAFORM",
    company: {
      name: "BNP Soluções em TI",
      url: "https://bnpsolucoes.com.br",
      icon: '<Building2 className="w-5 h-5 text-blue-600" />',
    },
    role: "Desenvolvedor",
    period: "Set 2023 - Fev 2024",
    contributions: [
      "Desenvolvimento completo do módulo de Recursos Humanos (RH)",
      "Implementação do módulo de envio e controle de documentações obrigatórias",
      "Desenvolvimento do backend para o módulo de plano orçamentário com lógica robusta de validação",
      "Criação do sistema de permissionamento avançado com uso de GlobalFilters do EFCore",
      "Implementação de um gerenciador de acesso dinâmico a nível de banco de dados",
      "Aplicação de boas práticas de arquitetura com uso de Strategy Pattern para consolidação da prestação de contas",
    ],
    challenges:
      "Lidar com a diversidade de regras de negócio relacionadas à mensuração de metas e consolidação de dados de prestação de contas foi um dos grandes desafios. Cada tipo de métrica possuía uma forma distinta de apuração e consolidação, exigindo um sistema flexível e escalável. Além disso, garantir segurança na manipulação dos dados e controle dinâmico de acessos com base em perfis institucionais exigiu uma modelagem cuidadosa e a aplicação de boas práticas com EFCore.",
    solutions:
      "Utilizei o design pattern Strategy para tratar regras de consolidação de métricas, permitindo que o sistema se adaptasse dinamicamente às necessidades específicas de cada contrato de gestão. Implementei um sistema de permissionamento inteligente com filtros globais no Entity Framework Core, aliado a um controle de acesso a nível de dados, garantindo segurança e isolamento de informações. Para o módulo de documentações obrigatórias, adicionei um sistema robusto de logging e rastreamento, garantindo auditoria completa sobre envios e modificações.",
    technologies: ["TYPESCRIPT", ".NET", "SQLSERVER", "NEXTJS"],
    images: [
      {
        title: "Area de login",
        url: "/assets/smac-1.png",
      },
      {
        title: "Listagem de contratos",
        url: "/assets/smac-2.png",
      },
    ],
  },
];

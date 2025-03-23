import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next/types";
import { personalData } from "@/shared/data/PersonalData";

export const metadata: Metadata = {
  title: `Políticas de Privacidade - ${personalData.name}`,
  description: `Política de Privacidade do portfólio do  ${personalData.name}`,
  keywords: personalData.SEOKeywords,
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link
        href="/"
        className="text-sm text-neutral-500 hover:text-foreground flex items-center gap-2 mb-8"
      >
        <ArrowLeft size={16} />
        Voltar para o início
      </Link>

      <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>

      <div className="space-y-8 text-sm text-neutral-700 dark:text-neutral-300">
        <section>
          <h2 className="text-xl font-bold mb-4">1. Introdução</h2>
          <p className="mb-4">
            Esta Política de Privacidade descreve como coletamos, usamos e
            compartilhamos suas informações quando você visita ou interage com
            nosso site.
          </p>
          <p>
            Ao utilizar nosso site, você concorda com a coleta e uso de
            informações de acordo com esta política.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">
            2. Informações que Coletamos
          </h2>
          <p className="mb-4">
            <strong>Informações de Uso:</strong> Coletamos informações sobre
            como você interage com nosso site, incluindo páginas visitadas,
            tempo gasto no site, e ações realizadas.
          </p>
          <p className="mb-4">
            <strong>Informações do Dispositivo:</strong> Podemos coletar
            informações sobre o dispositivo que você usa para acessar nosso
            site, incluindo modelo, sistema operacional, navegador e
            configurações de idioma.
          </p>
          <p>
            <strong>Cookies e Tecnologias Similares:</strong> Utilizamos cookies
            e tecnologias similares para coletar informações sobre sua navegação
            e melhorar sua experiência em nosso site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">
            3. Como Usamos Suas Informações
          </h2>
          <p className="mb-2">Utilizamos as informações coletadas para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analisar o uso do site e melhorar sua experiência</li>
            <li>Personalizar o conteúdo e as funcionalidades do site</li>
            <li>Detectar e prevenir problemas técnicos</li>
            <li>Entender como os visitantes interagem com nosso site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">4. Ferramentas de Análise</h2>
          <p className="mb-4">
            <strong>Google Analytics:</strong> Utilizamos o Google Analytics
            para coletar informações sobre o uso do site. O Google Analytics
            coleta informações como a frequência com que os usuários visitam o
            site, quais páginas eles visitam e quais outros sites eles usaram
            antes de chegar ao nosso. Utilizamos as informações que obtemos do
            Google Analytics apenas para melhorar este site.
          </p>
          <p>
            <strong>Microsoft Clarity:</strong> Utilizamos o Microsoft Clarity
            para entender melhor como os usuários interagem com nosso site
            através de mapas de calor, gravações de sessão e análises de
            comportamento. O Clarity não coleta informações pessoais
            identificáveis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">
            5. Seus Direitos e Escolhas
          </h2>
          <p className="mb-4">
            Você pode optar por não permitir a coleta de suas informações
            recusando cookies através do banner de cookies apresentado quando
            você visita nosso site pela primeira vez.
          </p>
          <p>
            Você também pode configurar seu navegador para recusar todos os
            cookies ou para indicar quando um cookie está sendo enviado. No
            entanto, algumas funcionalidades do site podem não funcionar
            corretamente se você desabilitar os cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">
            6. Alterações nesta Política de Privacidade
          </h2>
          <p>
            Podemos atualizar nossa Política de Privacidade de tempos em tempos.
            Recomendamos que você revise esta página periodicamente para se
            manter informado sobre quaisquer alterações.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">7. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre esta Política de Privacidade,
            entre em contato conosco através do e-mail:{" "}
            <a
              href="mailto:mateusferreira.dev@gmail.com"
              className="underline hover:text-foreground"
            >
              mateusferreira.dev@gmail.com
            </a>
          </p>
        </section>

        <p className="text-xs text-neutral-500 pt-8">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
      </div>
    </div>
  );
}

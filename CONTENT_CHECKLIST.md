# Checklist de Conteúdo — Orthoflow Landing Page

Todos os itens abaixo são placeholders que precisam ser substituídos antes de ir ao ar.

---

## 🟡 Crítico — Substituir antes de publicar

### Número de WhatsApp
- **Onde:** `HeroSection.tsx` linha 4, `TreatmentsSection.tsx` linha 54, `FAQSection.tsx` linha 89, `FooterSection.tsx` linha 4
- **Substituir:** `https://wa.me/5524999999999`
- **Por:** `https://wa.me/55[DDD][NÚMERO SEM TRAÇO]`
- **Exemplo:** `https://wa.me/5524999991234`

---

### Imagem Hero (fundo da seção principal)
- **Onde:** `HeroSection.tsx` — `backgroundImage`
- **Substituir:** `url('https://placehold.co/1440x900/...')`
- **Por:** Uma foto real de paciente sorrindo com confiança (sugestão: ambiente social, meia-idade ou idoso)
- **Opções:**
  - Colocar o arquivo em `/public/images/hero.jpg` e usar `url('/images/hero.jpg')`
  - Ou usar URL do Unsplash/banco de imagens pago

---

### Rodapé — Endereço completo
- **Onde:** `FooterSection.tsx`
- **Substituir:** `[ENDEREÇO COMPLETO]`
- **Por:** Rua, número, bairro (ex: Rua das Flores, 123 – Centro)

---

### Rodapé — Número de telefone/WhatsApp visível
- **Onde:** `FooterSection.tsx`
- **Substituir:** `(24) 9XXXX-XXXX`
- **Por:** Número real da clínica formatado

---

### Rodapé — Horário de Funcionamento
- **Onde:** `FooterSection.tsx`
- **Substituir:** `[HORÁRIO DE FUNCIONAMENTO]`
- **Exemplo:**
  ```
  Segunda a Sexta: 08h às 18h
  Sábado: 08h às 12h
  ```

---

### Rodapé — CRO do Responsável Técnico
- **Onde:** `FooterSection.tsx`
- **Substituir:** `Dr. Ricardo [SOBRENOME] · CRO-RJ [NÚMERO]`
- **Por:** Nome completo e número de registro do CRO-RJ

---

### Rodapé — CNPJ da Clínica
- **Onde:** `FooterSection.tsx`
- **Substituir:** `[XX.XXX.XXX/XXXX-XX]`
- **Por:** CNPJ real da clínica

---

## 🟠 Importante — Substituir para maior conversão

### Depoimentos de Pacientes
- **Onde:** `TestimonialsSection.tsx` — array `testimonials`
- **Substituir:** Os 4 depoimentos fictícios (Maria S., João C., Ana P., Roberto M.)
- **Por:** Depoimentos reais de pacientes (com autorização por escrito)
- **Formato ideal:** Nome + idade + texto + foto (substituir iniciais coloridas por `<img>`)
- **Dica:** Foque em resultados práticos ("voltei a comer", "não escondo mais a boca")

---

### Foto na Seção de Diferenciais / Tratamentos
- **Onde:** `DifferentialsSection.tsx`, `TreatmentsSection.tsx`
- **Sugestão:** Adicionar foto do Dr. Ricardo ou da clínica para humanizar ainda mais

---

## 🟢 Opcional — Melhorias futuras

### Fonte Visby CF
- **Onde:** `app/layout.tsx` e `app/globals.css`
- **Situação atual:** Usando Roboto (Google Fonts) como substituta temporária
- **Para trocar:** Adquirir a fonte em [connary.com](https://connary.com/visby.html) e colocar os arquivos `.woff2` em `/public/fonts/`:
  - `VisbyCF-Regular.woff2`
  - `VisbyCF-Medium.woff2`
  - `VisbyCF-Bold.woff2`
- Depois alterar `layout.tsx` para usar `next/font/local`

### Vídeos de Depoimentos
- O esquema original previa vídeos de 15 segundos de pacientes
- Podem ser adicionados na `TestimonialsSection.tsx` usando `<video>` ou embed do YouTube/Instagram

### Analytics e Pixel
- Adicionar Google Analytics (GA4) e Meta Pixel para rastrear conversões da campanha do Google Ads

### Favicon / Ícone da marca
- Adicionar o ícone da Orthoflow em `/public/favicon.ico` e `/public/icon.png`

---

## Estrutura de arquivos gerada

```
app/
├── page.tsx                       ← página principal
├── layout.tsx                     ← fonte + metadata
├── globals.css                    ← cores da marca (Tailwind v4)
└── components/
    ├── HeroSection.tsx            ← 1ª dobra
    ├── EmpathySection.tsx         ← conexão e empatia
    ├── TreatmentsSection.tsx      ← apresentação dos tratamentos
    ├── DifferentialsSection.tsx   ← diferenciais da clínica
    ├── TestimonialsSection.tsx    ← depoimentos
    ├── FAQSection.tsx             ← perguntas frequentes (accordion)
    └── FooterSection.tsx          ← localização, contato e CTA final
```

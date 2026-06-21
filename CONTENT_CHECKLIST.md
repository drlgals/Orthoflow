# Checklist de Conteúdo — Orthoflow Landing Page

---

## ✅ Concluído

- [x] **Número de WhatsApp** → `https://wa.me/552421091671`
- [x] **Telefone de contato** → `(24) 2109-1671`
- [x] **Endereço** → Av. Rita Maria Ferreira da Rocha, 893 – Nova Liberdade, Resende – RJ
- [x] **Horário** → Segunda a Sexta: 09h às 12h · 14h às 18h30
- [x] **Responsável Técnico** → Dr. Luís Gustavo Amorim · CRO-RJ 44731
- [x] **CNPJ** → 20.507.121/0001-31
- [x] **Imagem Hero** → `caroline-lm-uqveD8dYPUM-unsplash.jpg`
- [x] **Favicon** → `Símbolo Mono@2x.png`
- [x] **Logos** → Navbar (MonoPRETO), Rodapé (MonoBRANCO)
- [x] **Google Maps** → embed real da Orthoflow

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
- **Sugestão:** Adicionar foto do Dr. Luís Gustavo ou da clínica para humanizar ainda mais

---

## 🟢 Opcional — Melhorias futuras

### Fonte Visby CF
- **Situação atual:** Usando Roboto (Google Fonts) como substituta temporária
- **Para trocar:** Adquirir em [connary.com](https://connary.com/visby.html) e colocar os `.woff2` em `/public/fonts/`:
  - `VisbyCF-Regular.woff2`, `VisbyCF-Medium.woff2`, `VisbyCF-Bold.woff2`
- Depois alterar `layout.tsx` para usar `next/font/local`

### Vídeos de Depoimentos
- Podem ser adicionados na `TestimonialsSection.tsx` usando `<video>` ou embed do YouTube/Instagram

### Analytics e Pixel
- Adicionar Google Analytics (GA4) e Meta Pixel para rastrear conversões da campanha do Google Ads

---

## Estrutura de arquivos

```
app/
├── page.tsx
├── layout.tsx                     ← fonte + metadata + favicon
├── globals.css                    ← cores da marca (Tailwind v4)
└── components/
    ├── HeroSection.tsx            ← 1ª dobra
    ├── EmpathySection.tsx         ← conexão e empatia
    ├── TreatmentsSection.tsx      ← tratamentos
    ├── DifferentialsSection.tsx   ← diferenciais
    ├── TestimonialsSection.tsx    ← depoimentos ⚠️ placeholder
    ├── FAQSection.tsx             ← perguntas frequentes
    └── FooterSection.tsx          ← localização, contato e CTA final
```

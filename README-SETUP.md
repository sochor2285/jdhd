# HRUFIA S.R.O. - Web Setup Guide

Kompletní web pro malířské a lakýrnické práce byl úspěšně vytvořen!

## 🎯 Co bylo implementováno

### ✅ Frontend
- **Next.js 14+** s App Router a TypeScript
- **Tailwind CSS** s modrou paletou barev (důvěra a čistota)
- **Responzivní design** (mobile-first přístup)
- **5 hlavních sekcí:**
  - 🎨 Hero sekce s CTA tlačítkem
  - 🛠️ Služby (4 karty)
  - 📸 Portfolio (galerie "Před a Po")
  - ℹ️ O firmě (8 let tradice)
  - 📧 Kontaktní formulář

### ✅ Kontaktní formulář
- **React Hook Form** pro správu formuláře
- **Zod validace** všech polí
- **Supabase integrace** pro ukládání poptávek
- **3 stavy:** Loading, Success, Error
- **6 polí:** Jméno, Email, Telefon, Lokalita, Typ práce, Zpráva

### ✅ Backend
- **Supabase** PostgreSQL databáze
- SQL script pro vytvoření tabulky `leads`
- Row Level Security (RLS) nastavení

---

## 🚀 Jak spustit projekt

### 1. Instalace (již hotovo)
Všechny závislosti jsou již nainstalovány.

### 2. Nastavení Supabase

#### Krok 1: Vytvořte Supabase projekt
1. Jděte na [supabase.com](https://supabase.com)
2. Vytvořte nový projekt
3. Počkejte, až se databáze inicializuje

#### Krok 2: Spusťte SQL script
1. V Supabase dashboardu jděte na **SQL Editor**
2. Otevřete soubor `supabase-setup.sql` z projektu
3. Zkopírujte celý obsah a spusťte v SQL editoru
4. Tabulka `leads` bude vytvořena

#### Krok 3: Získejte API klíče
1. V Supabase jděte na **Settings** → **API**
2. Zkopírujte:
   - `Project URL`
   - `anon/public key`

#### Krok 4: Nastavte environment variables
1. Otevřete soubor `.env.local`
2. Nahraďte placeholder hodnoty svými klíči:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

### 3. Spuštění vývojového serveru

```bash
npm run dev
```

Web bude dostupný na: **http://localhost:3000**

---

## 📝 Další kroky - Customizace

### 1. Aktualizace firemních údajů
Upravte soubor: `lib/constants.ts`

```typescript
export const COMPANY_INFO = {
  name: "HRUFIA S.R.O.",
  email: "info@hrufia.cz",          // ← Změňte na váš email
  phone: "+420 123 456 789",         // ← Změňte na váš telefon
  ico: "12345678",                   // ← Vaše IČO
  dic: "CZ12345678",                 // ← Vaše DIČ
  address: {
    street: "Příkladová 123",        // ← Vaše adresa
    city: "Praha",
    zip: "110 00",
  },
};
```

### 2. Nahrazení obrázků

#### Hero sekce (pozadí)
- Přidejte obrázek do složky `public/hero-bg.jpg`
- Doporučená velikost: 1920x1080px
- Obrázek by měl být kvalitní fotka z realizace

#### Portfolio
V souboru `components/sections/Portfolio.tsx` najděte `PORTFOLIO_ITEMS` a nahraďte placeholder obrázky:

```typescript
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Malování obývacího pokoje",
    category: "Interiér",
    before: "/portfolio/projekt1-before.jpg",  // ← Vaše obrázky
    after: "/portfolio/projekt1-after.jpg",
  },
  // ... další projekty
];
```

Obrázky umístěte do složky `public/portfolio/`

### 3. Změna barev
Pokud chcete upravit modrou paletu, editujte `app/globals.css`:

```css
:root {
  --primary-blue: #2563eb;       /* ← Hlavní modrá */
  --primary-blue-dark: #1e40af;  /* ← Tmavší modrá */
  --accent-blue: #0ea5e9;        /* ← Akcentová barva */
}
```

---

## 🎨 Design systém

### Barvy
- **Primární modrá:** `#2563eb` (důvěra)
- **Akcentová:** `#0ea5e9` (modernost)
- **Pozadí:** Bílá s šedými odstíny

### Typografie
- Font: Geist Sans (moderní sans-serif)
- Velikosti:
  - Hero nadpis: 4xl-7xl
  - Sekce nadpisy: 3xl-4xl
  - Texty: base-lg

### Komponenty
- **Tlačítka:** Zaoblené (rounded-full), stíny
- **Karty:** Zaoblené rohy (rounded-xl/2xl), hover efekty
- **Formulář:** Čisté vstupy s focus stavy

---

## 📦 Deployment na Vercel

### Krok 1: Push do Git
```bash
git add .
git commit -m "Initial commit - HRUFIA website"
git push
```

### Krok 2: Deploy na Vercel
1. Jděte na [vercel.com](https://vercel.com)
2. Klikněte na **New Project**
3. Importujte váš Git repozitář
4. Přidejte environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Klikněte na **Deploy**

Web bude live za ~2 minuty!

---

## 🔧 Správa poptávek

### Zobrazení poptávek v Supabase
1. Jděte do Supabase dashboardu
2. Otevřete **Table Editor**
3. Vyberte tabulku `leads`
4. Zde uvidíte všechny odeslané poptávky

### Notifikace (volitelné)
Pro automatické emailové notifikace můžete nastavit:
- **Supabase Edge Functions**
- **Zapier** integrace
- **Make.com** workflow

---

## 📊 Struktura projektu

```
kokot/
├── app/
│   ├── layout.tsx           # Hlavní layout (Header + Footer)
│   ├── page.tsx             # Homepage (všechny sekce)
│   └── globals.css          # Tailwind + design system
├── components/
│   ├── Header.tsx           # Navigace
│   ├── Footer.tsx           # Patička
│   └── sections/
│       ├── Hero.tsx         # Hero sekce
│       ├── Services.tsx     # Služby
│       ├── Portfolio.tsx    # Portfolio
│       ├── About.tsx        # O firmě
│       └── Contact.tsx      # Kontaktní formulář
├── lib/
│   ├── constants.ts         # Firemní údaje, služby
│   ├── supabase.ts          # Supabase klient
│   ├── validations.ts       # Zod schémata
│   └── utils.ts             # Utility funkce
├── supabase-setup.sql       # SQL pro databázi
└── .env.local               # Environment variables
```

---

## ✅ Checklist před spuštěním

- [ ] Supabase projekt vytvořen
- [ ] SQL script spuštěn
- [ ] Environment variables nastaveny
- [ ] Firemní údaje aktualizovány
- [ ] Obrázky nahrazeny
- [ ] Vývojový server funguje
- [ ] Formulář odesílá data do Supabase
- [ ] Web nasazen na Vercel

---

## 🆘 Podpora

### Časté problémy

**Formulář neodesílá data:**
- Zkontrolujte `.env.local` - jsou správné Supabase klíče?
- Spustili jste `supabase-setup.sql`?
- Je tabulka `leads` vytvořená?

**Tailwind třídy nefungují:**
- Restartujte dev server: `npm run dev`

**TypeScript chyby:**
- Zkuste: `npm run build` pro kontrolu

---

## 📞 Kontakt pro support

Vytvořeno podle specifikace pro HRUFIA S.R.O.
Datum: ${new Date().toLocaleDateString('cs-CZ')}

Úspěšný start! 🎉

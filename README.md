# GLNG AB - glng.se Website

Modern webbplats för **GLNG AB** (`glng.se`), byggd med responsiv semantisk HTML5, CSS custom properties och ren JavaScript.

## Driftsättning

### Alternativ A: Vercel (Rekommenderas)
1. Skapa ett gratis konto på [vercel.com](https://vercel.com).
2. Installera Vercel CLI eller koppla ett GitHub-repo:
   ```bash
   cd glng-web
   npx vercel
   ```
3. Följ instruktionerna och lägg till domänen `glng.se` i Vercel-projektets inställningar under **Domains**.

### Alternativ B: Cloudflare Pages
1. Gå till Cloudflare Dashboard -> **Compute (Workers) / Pages** -> **Create application**.
2. Välj "Upload assets" och ladda upp innehållet i `glng-web/` (eller koppla ett GitHub-repo).
3. Lägg till custom domain: `glng.se`.

---

## DNS-inställningar hos Strato

I ditt Strato-konto under **Domänhantering** -> `glng.se` -> **DNS-inställningar**:

| Typ | Värdnamn (Host) | Värde / Target |
|---|---|---|
| **A-Record** | `@` (eller tomt) | `76.76.21.21` (om Vercel) |
| **CNAME** | `www` | `cname.vercel-dns.com` (om Vercel) |

*Om du väljer Cloudflare Pages anges CNAME till `<ditt-projekt>.pages.dev` istället.*

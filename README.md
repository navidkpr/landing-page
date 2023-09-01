# Landing Page
This is a reusable landing page project.

---
# How to use

1. Git clone
2. Change the text on page.tsx and the website metadata on layout.tsx
3. Duplicate .env.sample into .env.local and add the mixpanel values + demo video url
4. Add a firebase service_account.json to src/pages/api/waitlist
5. Create a collection on your firestore db called waitlist
6. Switch src/app/icon.png with your icon (you'll need to change the rel in layout if you want to use another file name/format)

## Bonus

- You could also change the color to your brand color using tailwind.config.js
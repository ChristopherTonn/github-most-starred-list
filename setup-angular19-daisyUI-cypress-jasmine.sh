#!/bin/bash

# ✅ Angular 19 + Tailwind CSS + DaisyUI + Cypress E2E Setup

# 1. Create a new Angular project
ng new github-most-starred-list --style=css --routing=true
cd github-most-starred-list

# 2. Install Tailwind CSS, PostCSS, and Autoprefixer (stable versions)
npm install -D tailwindcss@3.3.5 postcss@8.4.31 autoprefixer@10.4.16

# 3. Initialize Tailwind CSS
npx tailwindcss init

# 4. Configure Tailwind with DaisyUI plugin
cat <<'EOF' > tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
EOF

# 5. Configure PostCSS
cat <<'EOF' > postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOF

# 6. Add Tailwind directives to the main stylesheet
cat <<'EOF' > src/styles.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# 7. Install DaisyUI
npm install daisyui

# 8. Install and initialize Cypress
npm install --save-dev cypress
npx cypress open --component || true

# 9. Add Cypress scripts to package.json
npx json -I -f package.json -e 'this.scripts["cypress:open"] = "cypress open"'
npx json -I -f package.json -e 'this.scripts["cypress:run"] = "cypress run"'

# ✔ Done! Show instructions
echo -e "\n🎉 Setup complete!"
echo "➡ Start Angular app:         npm run start"
echo "➡ Open Cypress test runner:  npm run cypress:open"
echo "➡ Run Cypress tests headless: npm run cypress:run"
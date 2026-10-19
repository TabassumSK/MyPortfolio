# Portfolio (React + Vite)

## Run locally
1. Install Node.js 18 or newer
2. `npm install`
3. `npm run dev` and open the link it prints

## Edit
- `src/config.js`: name, headline, intro, email, GitHub, LinkedIn, resume, photo, projects, skills, experience, `formEndpoint`
- `src/styles.css`: colours (variables at the top) and the space background (`.space`)
- `src/App.jsx`: components and layout
- `public/`: put `photo.jpg` and your resume PDF here, then set `photo:"/photo.jpg"` and `resume:"/resume.pdf"`

## Contact form
Create a free form at formspree.io or web3forms.com and paste its URL into `formEndpoint`.
Without it, the form opens the visitor's email app.

## Deploy
- Vercel or Netlify: push to GitHub, import the repo, build command `npm run build`, output folder `dist`
- GitHub Pages: run `npm run build`, then publish the `dist` folder

# Adib's Portfolio (Next.js + Chakra UI)

## 1. Run it on your computer

1. Install Node.js: go to https://nodejs.org and download the **LTS** version. Install it with all default options.
2. Unzip this folder (for example to `Documents/adib-portfolio`).
3. Open a terminal **inside that folder**:
   - Windows: open the folder in File Explorer, click the address bar, type `cmd`, press Enter.
   - Mac: right-click the folder, choose "New Terminal at Folder".
   - Or open the folder in VS Code and press `Ctrl + ~`.
4. Type this and press Enter (takes about 1 minute):
   ```
   npm install
   ```
5. Type this and press Enter:
   ```
   npm run dev
   ```
6. Open http://localhost:3000 in your browser. Any file you save updates the page instantly.
   Press `Ctrl + C` in the terminal to stop.

## 2. Change your text, projects and links

Open `lib/data.ts`. Everything is in clearly named lists:

- `profile`: your name, title, tagline, about text
- `links`: email, LinkedIn, GitHub. Fill in `instagram` or `x` (a full URL) to show those buttons too
- `projects`, `experience`, `leadership`, `education`, `achievements`, `skills`

Check the descriptions I wrote for your projects and leadership roles and edit anything that is not accurate. Your photo is `public/profile.png`: replace it with a better one using the same file name.

## 3. Add a new LinkedIn post

LinkedIn does not allow websites to read your posts automatically for free, so you add each post in one small file:

1. On LinkedIn, open your post, click the `...` menu, choose **Copy link to post**.
2. Open `data/linkedin-posts.ts`.
3. Copy the example block from the comments into the `linkedinPosts` list, fill in `date`, `title`, `summary` and paste the link into `url`.
4. Save. The post appears in the "Latest on LinkedIn" section.

## 4. Put it online for free (Vercel)

1. Create a free account at https://github.com and make a new repository called `portfolio`.
2. Upload this project's files to it (not the `node_modules` folder).
3. Go to https://vercel.com, sign up with GitHub, click **Add New... > Project**, pick `portfolio`, and click **Deploy**.
4. Whenever you update a file on GitHub (for example a new LinkedIn post), Vercel redeploys automatically.

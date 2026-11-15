# Setup (free)
1. Create a GitHub repo and upload everything in this folder.
2. Netlify (free): New site > Import from GitHub. Build command: npx @11ty/eleventy   Publish directory: _site
3. Netlify > Site settings > Access control > OAuth > install GitHub provider, so you can log in at /admin
4. Edit src/admin/config.yml: set repo to YOUR-GITHUB-USERNAME/YOUR-REPO
5. Edit src/_data/site.json: set url to your live address, and name if you want another.
6. Open /admin to add posts and ebooks. Add reference costs in src/_data/calcDefaults.json (format below).
7. Submit /sitemap.xml in Google Search Console.
When you buy a domain: add it in Netlify, then change "url" in site.json. Nothing else.
calcDefaults format (key is "Country|Item"): {"Nigeria|Tomato":{"costs":[land,seed,fert,chem,labour,other],"yield":0,"price":0}}

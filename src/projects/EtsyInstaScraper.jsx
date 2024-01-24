export default function EtsyInstaScraper() {
  const techStack = [
    'Javascript',
    'Node.js',
    'Express.js',
    'Puppeteer',
    'Instagram-Private-API',
    'Node-Cron',
  ];

  return (
    <article className="project-card-article">
      <div className="project-card-div">
        <h3>Etsy Scraper to Instagram Poster: An Automation Project</h3>

        <div className="image-div">
          <a
            href="https://www.instagram.com/everything_is_noise/"
            target="_blank"
          >
            <img
              src="project-images/etsy-insta-scraper-big.png"
              alt="Image of Etsy shop and Instagram feed"
            />
          </a>
        </div>
        <div className="desc">
          <div className="description">
            <br />

            <p>
              - Built with using Puppeteer for the web scraping and
              Instagram-Private-API for the posting.
            </p>
            <p>
              - The aim was to automate the task of regularly posting shop items
              from a drop shipping site to Instagram.
            </p>

            <p>- To learn more about the app visit the github links below.</p>
          </div>
        </div>
        <div className="github-link">
          <a
            href="https://github.com/jamesyuill/etsy-gram-scraper"
            target="_blank"
          >
            <p className="p-link">Github</p>
          </a>

          <a
            href="https://www.etsy.com/uk/shop/EverythingIsNoise"
            target="_blank"
          >
            <p className="p-link">Etsy Shop</p>
          </a>
          <a
            href="https://www.instagram.com/everything_is_noise/"
            target="_blank"
          >
            <p className="p-link">Instagram</p>
          </a>
        </div>
        <div className="project-tech-stack">
          <ul>
            {techStack.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}

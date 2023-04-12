const SAM_URL = 'https://kick.com/sam';
const SUSPENDAS_URL = 'https://kick.com/suspendas';

function streamerStatus(url, container) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      const $ = cheerio.load(html);
      if ($('.vjs-playing').length > 0) {
        container.classList.add('online');
        container.classList.remove('offline');
        container.querySelector('span').textContent = 'Online';
      } else {
        container.classList.add('offline');
        container.classList.remove('online');
        container.querySelector('span').textContent = 'Offline';
      }
    })
    .catch(error => {
      console.log(`Error fetching data for ${url}: ${error}`);
    });
}

const samContainer = document.getElementById('sam');
const susContainer = document.getElementById('suspendas');

streamerStatus(SAM_URL, samContainer);
streamerStatus(SUSPENDAS_URL, susContainer);

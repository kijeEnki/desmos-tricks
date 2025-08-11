const body = document.body;
const links = body.querySelectorAll("a");

async function findBrokenLinks(linkList) {
  const brokenLinks = [];

  for (const link of linkList) {
    const target = link.href;

    let promise = await fetch(target);
    if (!promise.ok) {
      brokenLinks.push(link);
    }
  }

  return brokenLinks;
}

function applyRed(linkList) {
  for (const link of linkList) {
    link.classList.add("broken");
  }
}

(async () => {
  applyRed(await findBrokenLinks(links));
})();

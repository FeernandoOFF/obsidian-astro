import * as obsidianLinks from '../../metadata.json';

export function pagePath(pages: { file }[], filters: string[]): any[] {
  let filteredPages = pages.filter(
    (page) => !filters.find((filter) => page.file.includes(filter))
  );
  filteredPages = filteredPages.map((page) => ({
    ...page,
    ...fileParser(page.file),
  }));
  return filteredPages;
}

function fileParser(file) {
  // index.md / Zettelkasten/the big book.md
  let fileName = file.split(
    '/Users/fernandooff/development/personal/projects/astro-obsidian/content/'
  )[1];

  let parsedName = urlParser(fileName);
  parsedName = parsedName.replace(' ', '-');

  return { parsedUrl: parsedName, unparsedURL: fileName };
}

export function urlParser(fileName: string) {
  if (!fileName) return;
  return fileName.replace('.md', '');
}

export function findInGraph(pageName: string) {
  const fileInfo = obsidianLinks.default.find(
    (x) => x.relativePath == pageName
  );

  return {
    outGoingLinks: fileInfo.links,
    backLinks: fileInfo.backlinks,
  };
}

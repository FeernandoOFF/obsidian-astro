import path from 'path';
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

  let fileName = file.split(path.resolve('./content') + '/')[1];

  let parsedName = urlParser(fileName);
  parsedName = parsedName?.replace(' ', '-');

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
    outGoingLinks: fileInfo?.links || [],
    backLinks: fileInfo?.backlinks || [],
  };
}

type link = {
  link: string;
  fileName?: string;
  relativePath?: string;
  cleanLink?: string;
  displayLink?: string;
};

export function getNodesFromLinks(links: link[], backLinks: link[]) {
  const allLinks = [...links, ...backLinks];

  const linkNodes = allLinks.map(
    (link) => link.cleanLink || link.displayLink || link.link
  );
  const nodeLinks = allLinks.map((link) => ({
    source: 'index',
    target: link.cleanLink || link.displayLink || link.link,
    value: 1,
  }));

  return { nodes: Array.from(new Set(linkNodes)), nodeLinks };
}

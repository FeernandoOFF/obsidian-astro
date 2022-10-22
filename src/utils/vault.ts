import path from 'path';
import * as obsidianLinks from '../../metadata.json';
import * as tagsJSON from '../../tags.json';

type link = {
  link: string;
  fileName?: string;
  relativePath?: string;
  cleanLink?: string;
  displayLink?: string;
};

export class Vault {
  metadata = obsidianLinks;
  tags = tagsJSON;
  fileFilters = [
    'Journal/',
    'excalidraw.md',
    'Files/',
    'Drawings/',
    'Dawings/',
    'Templates/',
  ];

  private allNotes = [];
  public filteredNotes;

  constructor(allNotes) {
    this.allNotes = allNotes;
    this.filterNotes();
  }

  filterNotes() {
    // Delete files which contain fileFilters (Could be better with regEx)
    let filteredPages = this.allNotes.filter(
      (page) => !this.fileFilters.find((filter) => page.file.includes(filter))
    );

    // Append filename (without location )
    filteredPages = filteredPages.map((page) => ({
      ...page,
      ...this.fileParser(page.file),
    }));

    // Append Page metadata
    const pagesWithContent = filteredPages.map((page) => {
      if (!page.frontmatter) return;
      return {
        page: page.parsedUrl == 'index' ? undefined : page.parsedUrl,
        title: page.frontmatter.title,
        text: page.rawContent(),
        links: { ...this.findInGraph(page.unparsedURL) },
      };
    });

    this.filteredNotes = pagesWithContent;
  }
  fileParser(file) {
    let fileName = file.split(path.resolve('./content') + '/')[1];

    let parsedName = fileName?.replace('.md', '').replace(' ', '-');

    return { parsedUrl: parsedName, unparsedURL: fileName };
  }
  findInGraph(pageName) {
    const fileInfo = this.metadata.default.find(
      (x) => x.relativePath == pageName
    );

    return {
      outGoingLinks: fileInfo?.links || [],
      backLinks: fileInfo?.backlinks || [],
    };
  }

  getNodesFromLinks(links: link[], backLinks: link[]) {
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
}

export class Thesis {
  id: number;
  title: string;
  authors: string[];
  linkToPDF: string;

  constructor(id: number, title: string, authors: string[], linkToPDF: string) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.linkToPDF = linkToPDF;
  }
}

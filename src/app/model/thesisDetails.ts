import {Thesis} from './thesis';

export class ThesisDetails extends Thesis {
  citationNo: number;
  publicationDate: Date;
  relatedTheses: string[];
  keyWords: string[];
}

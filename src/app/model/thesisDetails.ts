import {Thesis} from './thesis';

export class ThesisDetails extends Thesis {
  cititationNo: number;
  publicationDate: Date;
  relatedTheses: string[];
  keyWords: string[];
}

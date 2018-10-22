import {Thesis} from './thesis';

export class ThesisDetails extends Thesis {
  cititationNo: number;
  date: Date;
  relatedTheses: string[];
  keyWords: string[];
}

export class ThesisFilters {
  public _author: string;
  public _positionFrom: number;
  public _positionTo: number;
  public _dateFrom: Date;
  public _dateTo: Date;
  public _title: string;
  public _institution: string;
  public _keyWords: string;
  public _quotationNumber: number;

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get positionFrom(): number {
    return this._positionFrom;
  }

  set positionFrom(value: number) {
    this._positionFrom = value;
  }

  get positionTo(): number {
    return this._positionTo;
  }

  set positionTo(value: number) {
    this._positionTo = value;
  }

  get dateFrom(): Date {
    return this._dateFrom;
  }

  set dateFrom(value: Date) {
    this._dateFrom = value;
  }

  get dateTo(): Date {
    return this._dateTo;
  }

  set dateTo(value: Date) {
    this._dateTo = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get institution(): string {
    return this._institution;
  }

  set institution(value: string) {
    this._institution = value;
  }

  get keyWords(): string {
    return this._keyWords;
  }

  set keyWords(value: string) {
    this._keyWords = value;
  }

  get quotationNumber(): number {
    return this._quotationNumber;
  }

  set quotationNumber(value: number) {
    this._quotationNumber = value;
  }
}

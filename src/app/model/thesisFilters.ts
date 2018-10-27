export class ThesisFilters {
  public author: string;
  public positionFrom: number;
  public positionTo: number;
  public dateFrom: Date;
  public dateTo: Date;
  public title: string;
  public institution: string;
  public keyWords: string;
  public quotationNumber: number;

  get getAuthor(): string {
    return this.author;
  }

  set setAuthor(value: string) {
    this.author = value;
  }

  get getPositionFrom(): number {
    return this.positionFrom;
  }

  set setPositionFrom(value: number) {
    this.positionFrom = value;
  }

  get getPositionTo(): number {
    return this.positionTo;
  }

  set setPositionTo(value: number) {
    this.positionTo = value;
  }

  get getDateFrom(): Date {
    return this.dateFrom;
  }

  set setDateFrom(value: Date) {
    this.dateFrom = value;
  }

  get getDateTo(): Date {
    return this.dateTo;
  }

  set setDateTo(value: Date) {
    this.dateTo = value;
  }

  get getTitle(): string {
    return this.title;
  }

  set setTitle(value: string) {
    this.title = value;
  }

  get getInstitution(): string {
    return this.institution;
  }

  set setInstitution(value: string) {
    this.institution = value;
  }

  get getKeyWords(): string {
    return this.keyWords;
  }

  set setKeyWords(value: string) {
    this.keyWords = value;
  }

  get getQuotationNumber(): number {
    return this.quotationNumber;
  }

  set setQuotationNumber(value: number) {
    this.quotationNumber = value;
  }
}

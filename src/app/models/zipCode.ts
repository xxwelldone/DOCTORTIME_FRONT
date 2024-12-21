export class zipCode {
  public cep: string;
  public logradouro: string;
  public complemento: string;
  public unidade: string;
  public bairro: string;
  public localidade: string;
  public uf: string;
  public estado: string;
  public regiao: string;
  public ibge: string;
  public gia: string;
  public ddd: string;
  public siafi: string;
  public erro!: string;

  formattingAddress(): string {
    return `${this.logradouro}, ${this.bairro}, ${this.localidade} - ${this.uf}`;
  }
  constructor(apiPlainObject: zipCode) {
    this.cep = apiPlainObject.cep;
    this.logradouro = apiPlainObject.logradouro;
    this.complemento = apiPlainObject.complemento;
    this.unidade = apiPlainObject.unidade;
    this.bairro = apiPlainObject.bairro;
    this.localidade = apiPlainObject.localidade;
    this.uf = apiPlainObject.uf;
    this.estado = apiPlainObject.estado;
    this.regiao = apiPlainObject.regiao;
    this.ibge = apiPlainObject.ibge;
    this.gia = apiPlainObject.gia;
    this.ddd = apiPlainObject.ddd;
    this.siafi = apiPlainObject.siafi;
  }
}

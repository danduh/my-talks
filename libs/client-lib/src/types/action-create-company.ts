import { ClientRequest } from "@danduh/client-lib";



export interface Company {
  applications: Array<string>;
  createdAt: string;
  readonly id?: number;
  name: string;
  updatedAt: string;
}

export class ActionCreateCompanyArgs {
  company: Company;
}

export class ActionCreateCompany extends ClientRequest<Company> {
  company: Company;

  constructor(data: ActionCreateCompanyArgs){
    super();
    this.company = data.company;
  }

}

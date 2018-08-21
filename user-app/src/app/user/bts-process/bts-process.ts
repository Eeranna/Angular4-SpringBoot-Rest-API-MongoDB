export class BtsProcess {

  id: string;
  name: string;
  service_offering: string;

  constructor(id: string,  name: string, service_offering: string){
    this.id = id;
    this.name = name;
    this.service_offering = service_offering;
  }

}

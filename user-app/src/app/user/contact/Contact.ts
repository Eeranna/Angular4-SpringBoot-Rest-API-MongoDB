export class Contact {

  name: string;
  address: string;
  city: string;
  phone: number;
  email: string;

  constructor(name: string, address: string, city: string, phone: number, email: string){
    this.name = name;
    this.address = address;
    this.city = city;
    this.phone = phone;
    this.email = email;
  }

}

export class Contact {

  id: number;
  name: string;
  address: string;
  city: string;
  phone: number;
  email: string;
  otp: string;

  constructor(id: number, name: string, address: string, city: string, phone: number, email: string, otp: string){
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.phone = phone;
    this.email = email;
    this.otp = otp;
  }

}

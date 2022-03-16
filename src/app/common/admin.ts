import { User } from '../models/user.interface';

export class Admin {
  public static ListOFAdmin: User[] = [
    { id: 1, email: 'admin@gmail.com', password: 'password', isAdmin: true },
    { id: 2, email: 'admin1@gmail.com', password: 'password', isAdmin: true },
  ];
  public static ThisUSerISAdmin = false;
}

export interface AuthFormInterface {
  username: string;
  password: string;
  brand: string;
}

export interface UpdatePasswordInterface {
  current_password: string;
  new_password: string;
  retype_password: string;
}

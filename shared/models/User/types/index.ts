export enum UserType {
  GUEST = "guest",
}

export interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userType: UserType;
}

export interface AuthDto extends UserDto {
  token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

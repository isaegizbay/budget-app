import { UserDto, UserType } from "~/shared/models/User/types";

export abstract class User implements UserDto {
  token: string = "";
  id: string = "";
  email: string = "";
  firstName: string = "";
  lastName: string = "";
  abstract userType: UserType;

  abstract setData(userDto: UserDto): void;

  abstract logUser(): void;
}

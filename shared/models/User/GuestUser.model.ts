import { User } from "./classes/User";
import { AuthDto, UserType } from "./types";

export class GuestUserModel implements User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  token: string;
  userType: UserType;

  constructor(authDto: AuthDto) {
    if (authDto.userType !== UserType.GUEST) {
      throw new Error("Guest must have GUEST user type");
    }

    this.token = authDto.token;
    this.id = authDto.id;
    this.firstName = authDto.firstName;
    this.lastName = authDto.lastName;
    this.email = authDto.email;
    this.userType = authDto.userType;
  }

  setData(authDto: AuthDto) {
    this.token = authDto.token;
    this.id = authDto.id;
    this.firstName = authDto.firstName;
    this.lastName = authDto.lastName;
    this.email = authDto.email;
    this.userType = authDto.userType;
  }

  logUser() {
    // eslint-disable-next-line no-console
    console.log("LOGGING GUEST: ", { user: this });
  }
}

import { IsNotEmpty } from 'class-validator';

export class Contact {
  @IsNotEmpty()
  name: {
    first: string;
    last: string;
  };
  email: string;
  login: {
    uuid: string;
  };
  picture?: {
    thumbnail: string;
    large: string;
    medium: string;
  };
}

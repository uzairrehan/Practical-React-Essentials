export type Contact = {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  email: string;
  picture: {
    thumbnail: string;
    medium: string;
    large: string;
  };
};

export type User = {
  id: number;
  username: string;
  avatar_url: string;
};

export type SinglePost = {
  id: number;
  content: string;
  created_at: string;
  user: User;
  likes: SinglePost[];
};


export type LoginData = {
  username: string,
  password: string
}

export type LoggedInUser = {
  username: string,
  jwt_token: string,
  error: boolean,
  id: number  
}
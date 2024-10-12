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

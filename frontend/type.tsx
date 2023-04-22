export type TweetType = {
    id: string,
    createdAt: string,
    user: UserType,
    content: string,
    image?: string,
    numberOfComments?: number,
    numberOfRetweets?: number,
    numberOfLikes?: number,
  }
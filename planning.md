# Schema
>## User
```
{
  id: int,
  profilePicture: string,
  userName: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  comments:[comment],
  threads:[thread],
  subscriptions: [topic],
}
```

>## Topic
```
{
  id: int,
  name: string, 
  subscribers:int,
  threads: [thread],
  leader,
  moderators: [user]
}
```
>## Thread
```
{
  title: string,
  description: string,
  upvotes:[userIds],
  downvotes: [userIds],
  comments:[comment]
  createdAt: time,
  userId: int,
  topicId: int
}
```
>## Comment
```{
  id: int,
  content: string,
  upvotes: [userId],
  downvotes: [userId],
  createdAt: time,
  replies: [replies],
  threadId: int,
}
```

>## Reply
```
{
  id: int,
  content: string,
  upvotes: [userId],
  downvotes: [userId],
  createdAt: time,
  replies: [replies],
  commentId: int,
}
```

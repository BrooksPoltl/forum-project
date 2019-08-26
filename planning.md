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
}
```

>## Topic
```
{
  id: int,
  name: string, 
  subscribers:int,
  user: user
}
```
>## Thread
```
{
  title: string,
  description: string,
  upvotes:[userIds],
  downvotes: [userIds],
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
  threadId: int,
}
```

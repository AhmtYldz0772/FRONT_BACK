import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Muhammet",
      userId: 1,
      profilePic:
        "https://i.cnnturk.com/i/cnnturk/75/740x416/546886b9e50aa808f8a3b746.jpg",
      desc: "'Sadece Ölüler Görür'",
      img: "https://i.pinimg.com/originals/e8/1f/6a/e81f6a7281ad7cffcbb32bd7f16e2f49.jpg",
    },
    {
      id: 2,
      name: "Selçuk",
      userId: 2,
      profilePic:
        "https://pbs.twimg.com/media/FNQqZxEXwAAC-NO.jpg",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
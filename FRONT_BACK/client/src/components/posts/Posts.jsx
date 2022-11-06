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
        "https://shiftdelete.net/wp-content/uploads/2020/02/hizli-ve-ofkeli-9-fragmaninda-ilginc-detay.jpg",
      desc: "...",
      img: "https://cdn.wannart.com/production/content/suphe-ve-karar-12-kizgin-adam-zmDuy.jpg",
    },
    {
      id: 2,
      name: "Selçuk",
      userId: 2,
      profilePic:
        "https://i.pinimg.com/originals/e8/1f/6a/e81f6a7281ad7cffcbb32bd7f16e2f49.jpg",
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
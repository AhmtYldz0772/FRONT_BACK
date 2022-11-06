import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Emirhan",
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
      desc: "'Bir kaplanı, fil gibi dövüştürmeye çalışma. Sonra kaplan, ne kaplan gibi dövüşür ne de fil gibi. \n -Dangal'"

      
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
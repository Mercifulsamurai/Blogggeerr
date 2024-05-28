
import getPostMetadata from "@/utils/getPostMetadata";
import BlogList from "@/components/BlogList";

export default function Home() {
  const postMetadata = getPostMetadata('posts')

  return (
   <main>
    <div >
      {postMetadata.map((post,postIndex) => {
        return (
          <BlogList key={postIndex}  post={post} />
        )
      })}
    </div>
   </main>
  );
}

import blogposts from "@/public/blogposts.json";
import Blogpost from "@/components/blogpost";

export default function Blog() {
  return (
    <div className="grid grid-cols-1 gap-2">
      {blogposts.map((item, key) => {
        return <Blogpost key={key} {...item} />;
      })}
    </div>
  );
}

import fs from "fs";
import path from "path";
import Header from "../components/header";
import PostList from "../components/post-list";

import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

function getposts(directory) {
  const dirPath = path.join(process.cwd(), directory);
  const files = fs.readdirSync(dirPath);

  const posts = files
    .filter(file => file.endsWith('.html'))
    .map(file => {
        const filePath = path.join(dirPath, file);
        const htmlContent = purify.sanitize(fs.readFileSync(filePath, "utf-8"));
        return {
          file,
          content: htmlContent,
          mtime: fs.statSync(filePath).mtime
        };
      })
      .sort((a, b) => b.mtime - a.mtime);

  return posts;
}

export default function Blog({idx=0}) {
  const posts = getposts("src/app/blog/posts");
  
  return (
    <div className="grid grid-cols-7">
        <Header className="flex col-span-7"/>
        <div className="col-span-5 col-start-1 p-4 text-white">
            {/* <h1>Latest Post</h1> */}
            {/* <p>{posts ? posts[idx].file : "No posts found"}</p> */}
            {/* <div/> */}
            <div dangerouslySetInnerHTML={{ __html: posts[idx].content }} />
        </div>
        <div className="col-span-2 col-start-6 p-4 text-white">
          <PostList posts={posts} cur={idx} />
        </div>
    </div>
  );
}

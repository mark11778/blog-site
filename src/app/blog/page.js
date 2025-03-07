import fs from "fs";
import path from "path";
import Header from "../components/header";
import {marked} from "marked";
import DOMPurify from "dompurify";

function getposts(directory) {
  const dirPath = path.join(process.cwd(), directory);
  const files = fs.readdirSync(dirPath);

  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
        const filePath = path.join(dirPath, file);
        const markdown = fs.readFileSync(filePath, "utf-8");
        const htmlContent = marked.parse(markdown);
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
        <div className="col-span-5 col-start-1 bg-green-500 p-4 text-white">
            <h1>Latest Post</h1>
            <p>{posts ? posts[idx].file : "No posts found"}</p>
            <div
                className="prose prose-lg prose-headings:text-black bg-white p-4 text-black rounded-lg"
                dangerouslySetInnerHTML={{ __html: posts[0].content}}
                />
      </div>
    </div>
  );
}

import Link from "next/link";

export default function PostList({ posts, cur }) {
    return (
      <div className="col-span-2 p-4 border-r border-gray-300 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4">Posts</h2>
        <ul className="space-y-2">
          {posts.map((post, idx) => (
            <li key={post.file}>
                <Link
                href={`?idx=${idx}`}
                className={`block p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 ${
                    idx === cur ? "bg-gray-300 dark:bg-gray-900 font-semibold" : ""
                }`}
                >
                {post.file.replace(".html", "")}
                </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
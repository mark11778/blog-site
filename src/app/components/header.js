import Link from "next/link";

export default function header() {
    return (
        <div className="grid grid-cols-6">
            <Link className="col-span-1 bg-blue-500 flex justify-center items-center text-center" href="/">home</Link>
        </div>
    );
}
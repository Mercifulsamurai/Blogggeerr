import Link from "next/link"
export default function BlogList({post}) {
    return(
        <Link href={`/post/${post.slug}`}>
            <div class="inline-block items-center  bg-gray-100 m-5  hover:shadow-lg hover:scale-105">

            <div class="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden" >
                <div class="p-4">

                <h3 class="text-lg font-semibold mb-2">{post.title}</h3>
                <p class="text-sm text-gray-600">{post.author}</p>
                <p class="text-sm text-gray-600">{post.date}</p>
                </div>
                    <div class="p-4 border-t border-gray-200">
                        <h5>Summary</h5>
                        <p class="text-sm text-gray-700">{post.summary}</p>
                    </div>
            </div>
            </div>
        </Link>
    )
}
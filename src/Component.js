import { useEffect, useState } from "react";
const tabs = ["posts", "comments", "albums"]

function Component() {

    const [title, setTitle] = useState("")
    const [posts, setPosts] = useState([])
    const [type, setType] = useState("posts")
    const [showGoToTop, setShowGoToTop] = useState(false)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handlScroll = () => {
            if (window.scrollY >= 200) {
                //show
                setShowGoToTop(true)
            } else {
                //Hide
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handlScroll)

        return () => {
            window.removeEventListener('scroll', handlScroll)

        }
    }, [])
    return (
        <div >
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</ li>
                ))}
            </ul>

            {showGoToTop && (
                <button style={{
                    position: "fixed",
                    right: 20,
                    bottom: 20,
                }}>
                    Go to top
                </button>)
            }
        </div>
    );
}

export default Component;

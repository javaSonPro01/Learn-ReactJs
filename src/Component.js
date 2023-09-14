import { useEffect, useState } from "react";
const tabs = ["posts", "comments", "albums"]

function Component() {
    const [width, setWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        <div >
            <h1>{width}</h1>
        </div>
    );
}

export default Component;

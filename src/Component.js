import { useEffect, useState } from "react";

function Component() {
    const [avatar, setAvatar] = useState()
    useEffect(() => {
        avatar && URL.revokeObjectURL(avatar)
    }, [avatar])
    const handlePreviewAvatar = (event) => {
        const file = event.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    return (
        <div >
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {
                avatar && (
                    <img
                        src={avatar.preview}
                        alt=""
                        width="80%"
                    />
                )
            }
        </div>
    );
}

export default Component;

'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react'
import Avatar from 'react-avatar-edit'

const ProfilePicture = () => {

    const [ src, setSrc ] = useState(null);
    const [ preview, setPreview ] = useState(null);

    const onClose = () => {
        setPreview(null);
    };

    const onCrop = (view) => {
        setPreview(view)
    }
    

    return (
        <div>
            <Avatar
                width={400}
                height={300}
                onCrop={onCrop}
                onClose={onClose}
                src={src}
            />
            {preview && <img src={preview} alt='preview'/>}
        </div>
    )
}

export default ProfilePicture
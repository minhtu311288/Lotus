import { useState, useEffect } from 'react'

export default function message({ arrMessage }) {
    const [showMessage, setShowMessage] = useState(0)
    useEffect(() => {
        // Random change message in 3 seconds
        const showMessageTimer = setInterval(() => {
            const random = Math.floor(Math.random() * Number(arrMessage.length))
            setShowMessage(random);
        }, 3000)
        return () => { clearInterval(showMessageTimer) }
    }, []);
    return (
        <div className='flex'>
            {arrMessage.map(message => (
                showMessage == message.id && <p className='m-auto text-amber-300 text-lg font-bold p-2 text-center' key={message.id}>{message.name}</p>
            ))}
        </div>
    )
}
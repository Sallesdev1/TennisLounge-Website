import { useState } from 'react';
export function Background() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <div className="w-full h-full overflow-hidden">
                <video src="public/image/PinDown.io_@petepinz_1769738512.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>
            </div>
        </div>
    )
}
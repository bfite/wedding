import { ReactNode } from "react";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (
                <div className="flex z-[9999] w-full h-full absolute items-center justify-center bg-black/20" onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className="block bg-white w-3/4 h-3/4 p-4 rounded-2xl">
                        {props.children}
                    </div>
                </div>
            )}
        </>
    );
}
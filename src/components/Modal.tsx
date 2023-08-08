"use client";
import { useRef, ReactNode } from "react";
import classNames from "classnames";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  size,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={classNames(
        "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto",
        {
          "pointer-events-none": !isOpen,
        }
      )}
    >
      <div
        className={classNames(
          "fixed inset-0 transition-opacity bg-black bg-opacity-50",
          {
            "opacity-0 pointer-events-none": !isOpen,
          }
        )}
      ></div>
      <div
        ref={modalRef}
        className={classNames(
          "relative w-full bg-white rounded-md",
          "opacity-0 transform scale-95 transition-opacity duration-300",
          size ? size : "max-w-lg",
          {
            "opacity-100 scale-100": isOpen,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

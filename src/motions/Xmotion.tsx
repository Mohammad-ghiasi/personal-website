"use client"
import React from 'react'
import { motion, MotionProps } from "framer-motion"

interface XmotionProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}

export default function DivMotion({ className, children, ...rest }: XmotionProps) {
    return (
        <motion.div
            {...rest}
            className={className}
        >
            {children}
        </motion.div>
    )
}

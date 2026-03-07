"use client";

import {useCallback, useEffect, useRef, useState} from "react";
import {ArrowRight, Play, Sparkles} from "lucide-react";
import {useNavigate} from "@tanstack/react-router";
import {AnimatePresence, motion, Variants} from "framer-motion";
import {AnimatedContainer} from "./animation-utils";

const logs = [
    {
        id: 1,
        level: "info",
        time: "10:42:15 AM",
        message: "User authentication successful",
        metadata: '{ userId: "usr_123" }',
    },
    {
        id: 2,
        level: "warn",
        time: "10:42:18 AM",
        message: "API response slow",
        metadata: "{ duration: 2.3s }",
    },
    {
        id: 3,
        level: "error",
        time: "10:42:23 AM",
        message: "Database connection failed",
        metadata: "{ retry: 1/3 }",
    },
];

const aiSuggestion = {
    title: "AI Analysis",
    message: "Connection timeout suggests DNS resolution issue. Check if the database host is reachable.",
};

const levelColors = {
    info: "text-blue-500",
    warn: "text-yellow-600",
    error: "text-red-600",
};

export function DemoSection() {
    const navigate = useNavigate();
    const [visibleLogs, setVisibleLogs] = useState<number[]>([]);
    const [showAISuggestion, setShowAISuggestion] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const resetAnimation = useCallback(() => {
        setVisibleLogs([]);
        setShowAISuggestion(false);
    }, []);

    const runAnimation = useCallback(() => {
        if (isHovered) {
            resetAnimation();
            return;
        }

        const steps = [
            {delay: 0, action: () => setVisibleLogs([0])},
            {delay: 800, action: () => setVisibleLogs([0, 1])},
            {delay: 800, action: () => setVisibleLogs([0, 1, 2])},
            {delay: 600, action: () => setShowAISuggestion(true)},
            {delay: 4000, action: () => setShowAISuggestion(false)},
            {delay: 1000, action: resetAnimation},
        ];

        let totalDelay = 0;
        steps.forEach((step, index) => {
            totalDelay += step.delay;
            timeoutRef.current = setTimeout(() => {
                if (isHovered) {
                    resetAnimation();
                    return;
                }
                step.action();
                if (index === steps.length - 1 && !isHovered) {
                    runAnimation();
                }
            }, totalDelay);
        });
    }, [isHovered, resetAnimation]);

    useEffect(() => {
        if (isHovered) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            setVisibleLogs([]);
            setShowAISuggestion(false);
            return;
        }

        timeoutRef.current = setTimeout(() => {
            runAnimation();
        }, 100);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isHovered, runAnimation]);

    const variants: Variants = {
        hidden: {
            opacity: 0,
            x: -50,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 20,
            },
        },
        exit: {
            opacity: 0,
            x: -50,
            scale: 0.8,
            transition: {
                duration: 0.3,
            },
        },
    };

    const aiVariants: Variants = {
        hidden: {
            opacity: 0,
            height: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            height: "auto",
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut" as const,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            y: -10,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <section
            className="w-full py-20 md:py-28 bg-fd-muted/30"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <AnimatedContainer className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">
                        See It In Action
                    </h2>
                    <p className="text-sm md:text-lg text-muted-foreground px-2 md:px-0">
                        Clean. Readable. Actionable. No training required.
                    </p>
                </AnimatedContainer>

                <AnimatedContainer delay={0.1}>
                    <div className="relative mx-auto max-w-5xl">
                        <div className="absolute -inset-1 bg-fd-card/10 rounded-2xl blur-xl opacity-30"/>

                        <div className="relative rounded-xl overflow-hidden border bg-card shadow-lg/5">
                            <div className="flex items-center gap-2 px-4 py-3 border-b bg-fd-muted/20">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"/>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                                    <div className="w-3 h-3 rounded-full bg-green-500"/>
                                </div>
                                <div className="flex-1 mx-4">
                                    <div
                                        className="max-w-md mx-auto px-4 py-1.5 rounded-md bg-fd-accent text-xs text-muted-foreground text-center font-mono">
                                        vedatrace.dev/dashboard
                                    </div>
                                </div>
                            </div>

                            <div className="min-h-80 md:min-h-112.5 bg-fd-background relative">
                                <div className="absolute inset-0 p-3 md:p-6">
                                    <div className="flex items-center justify-between mb-4 md:mb-6">
                                        <div className="flex items-center gap-2 md:gap-4">
                                            <div className="h-6 w-20 md:h-8 md:w-32 bg-fd-muted rounded animate-pulse"/>
                                            <div
                                                className="h-6 w-24 md:h-8 md:w-48 bg-fd-muted rounded animate-pulse hidden sm:block"
                                                style={{animationDelay: "0.1s"}}
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="h-6 w-16 md:h-8 md:w-24 bg-fd-muted rounded animate-pulse hidden xs:inline"/>
                                            <div
                                                className="h-6 w-6 md:h-8 md:w-8 bg-fd-muted rounded animate-pulse"
                                                style={{animationDelay: "0.2s"}}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 md:space-y-2 font-mono text-[10px] md:text-sm relative">
                                        <AnimatePresence mode="popLayout">
                                            {logs.map((log, index) => (
                                                <motion.div
                                                    key={log.id}
                                                    initial="hidden"
                                                    animate={visibleLogs.includes(index) ? "visible" : "hidden"}
                                                    exit="exit"
                                                    variants={variants}
                                                    layout
                                                    className={`flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-4 p-2 md:p-3 rounded-lg bg-fd-muted/50 cursor-default ${
                                                        visibleLogs.includes(index) ? "hover:bg-fd-muted/80" : ""
                                                    }`}
                                                >
                                                  <span
                                                      className={`text-[10px] md:text-xs font-medium w-12 md:w-16 ${levelColors[log.level as keyof typeof levelColors]}`}>
                                                    [{log.level.toUpperCase()}]
                                                  </span>
                                                    <span
                                                        className="text-[10px] text-muted-foreground w-16 md:w-24 hidden xs:inline">{log.time}</span>
                                                    <span className="flex-1 truncate">{log.message}</span>
                                                    <span
                                                        className="text-[10px] text-muted-foreground hidden md:inline shrink-0">{log.metadata}</span>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>

                                        <AnimatePresence>
                                            {showAISuggestion && (
                                                <motion.div
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    variants={aiVariants}
                                                    className="mt-2 md:mt-4 p-2 md:p-4 rounded-lg bg-blue-500/5 border border-blue-500/20 overflow-hidden"
                                                >
                                                    <div className="flex items-start gap-2 md:gap-3">
                                                        <div
                                                            className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                                            <Sparkles size={10}
                                                                      className="text-blue-400 md:w-3.5 md:h-3.5"/>
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] md:text-sm font-medium mb-0.5 md:mb-1 text-blue-500">{aiSuggestion.title}</p>
                                                            <p className="text-[10px] md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-none">{aiSuggestion.message}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedContainer>

                <AnimatedContainer delay={0.15} className="text-center mt-12 justify-center flex">
                    <button
                        className="px-4 py-3 bg-fd-primary flex gap-3 items-center rounded-lg hover:scale-105 duration-300"
                        onClick={() => navigate({to: "/docs/$"})}
                    >
                        Try It Yourself
                        <ArrowRight className="w-4 h-4"/>
                    </button>
                </AnimatedContainer>
            </div>
        </section>
    );
}

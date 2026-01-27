"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import {
    AtIcon,
    ChatTextIcon,
    IdentificationCardIcon,
    PaperPlaneTiltIcon,
    TagSimpleIcon,
    CheckCircleIcon,
    WarningCircleIcon,
    ArrowClockwiseIcon,
} from "@phosphor-icons/react";

const baseInput =
    "w-full bg-[#f5f5f5] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10";

const labelClass =
    "flex items-center gap-2 text-sm font-medium tracking-wide text-gray-600";

const iconProps = {
    size: 18,
    className: "text-gray-600",
};

type Status = "idle" | "loading" | "success" | "error";

export default function Form() {
    const [status, setStatus] = useState<Status>("idle");
    const [feedback, setFeedback] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        setStatus("loading");
        setFeedback("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    type: formData.get("type"),
                    message: formData.get("message"),
                }),
            });

            if (!res.ok) throw new Error();

            form.reset();
            setStatus("success");
            setFeedback(
                "Your message has been sent successfully. I’ll get back to you soon."
            );
        } catch {
            setStatus("error");
            setFeedback(
                "Something went wrong while sending your message. Please try again."
            );
        }
    }

    function handleReset() {
        setStatus("idle");
        setFeedback("");
    }

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            {/* FORM */}
            {(status === "idle" || status === "loading") && (
                <div className="flex flex-col gap-6">

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className={labelClass}>
                                <IdentificationCardIcon {...iconProps} />
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className={baseInput}
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className={labelClass}>
                                <AtIcon {...iconProps} />
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={baseInput}
                                placeholder="you@email.com"
                                required
                            />
                        </div>
                    </div>

                    {/* Type */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="type" className={labelClass}>
                            <TagSimpleIcon {...iconProps} />
                            Type of message
                        </label>
                        <select
                            id="type"
                            name="type"
                            className={baseInput}
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select an option
                            </option>
                            <option value="project">Project</option>
                            <option value="job">Job opportunity</option>
                            <option value="collaboration">Collaboration</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className={labelClass}>
                            <ChatTextIcon {...iconProps} />
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            className={`${baseInput} resize-none`}
                            placeholder="Tell me about your idea..."
                            required
                        />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end">
                        <button type="submit" disabled={status === "loading"}>
                            <Button
                                text={status === "loading" ? "Sending..." : "Send message"}
                                bgColor="bg-black"
                                textColor="text-white"
                                icon={<PaperPlaneTiltIcon size={18} />}
                                iconPosition="right"
                            />
                        </button>
                    </div>
                </div>
            )}

            {/* FEEDBACK */}
            {(status === "success" || status === "error") && (
                <div className="flex flex-col items-center gap-6 rounded-xl bg-gray-100 px-6 py-8 text-center">

                    {status === "success" ? (
                        <CheckCircleIcon size={32} className="text-gray-800" />
                    ) : (
                        <WarningCircleIcon size={32} className="text-gray-800" />
                    )}

                    <p className="max-w-md text-sm text-gray-800">
                        {feedback}
                    </p>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
                    >
                        <ArrowClockwiseIcon size={16} />
                        Send another message
                    </button>
                </div>
            )}
        </form>
    );
}

"use client";

import Button from "@/components/ui/Button";
import {
    AtIcon,
    ChatTextIcon,
    IdentificationCardIcon,
    PaperPlaneTiltIcon,
    TagSimpleIcon,
} from "@phosphor-icons/react";

const baseInput =
    "w-full bg-[#f5f5f5] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10";

const labelClass =
    "flex items-center gap-2 text-sm font-medium tracking-wide text-gray-600";

const iconProps = {
    size: 18,
    className: "text-gray-600",
};

export default function Form() {

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget; // 👈 guardar referencia

        const formData = new FormData(form);

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

        if (res.ok) {
            form.reset(); // ✅ ahora sí
            alert("Message sent successfully ✅");
        } else {
            alert("Something went wrong ❌");
        }
    }


    return (
        <form className="w-full" onSubmit={handleSubmit}>
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

                {/* Type of message */}
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
                    <button type="submit">
                        <Button
                            text="Send message"
                            bgColor="bg-black"
                            textColor="text-white"
                            icon={<PaperPlaneTiltIcon size={18} />}
                            iconPosition="right"
                        />
                    </button>
                </div>

            </div>
        </form>
    );
}

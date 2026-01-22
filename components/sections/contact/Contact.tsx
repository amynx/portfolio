'use client';

import SectionInner from "../../layout/SectionInner";
import SectionWrapper from "../../layout/SectionWrapper";
import Form from "./Form";
import ContactCard from "./ContactCard";

export default function Contact() {
    return (
        <SectionWrapper>
            <SectionInner className="flex flex-col gap-8 justify-center items-center">
                <h2 className="text-4xl font-semibold mb-8">
                    Contact
                </h2>

                {/* Container – 80% width */}
                <div className="mx-auto w-full lg:w-4/5">
                    <div
                        className="
                            flex flex-col lg:flex-row gap-8
                            p-8 rounded-lg
                            bg-gradient-to-b
                            from-transparent
                            via-white/70
                            to-white
                            lg:bg-gradient-to-r
                            lg:from-transparent
                            lg:via-white/60
                            lg:to-white
                        "
                    >
                        {/* Card – 60% */}
                        <div className="w-full lg:w-3/5">
                            <ContactCard />
                        </div>

                        {/* Form – 40% */}
                        <div className="w-full lg:w-2/5">
                            <Form />
                        </div>

                    </div>
                </div>
            </SectionInner>
        </SectionWrapper>
    );
}

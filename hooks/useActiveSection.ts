import { useState, useEffect } from "react";

/**
 * Custom hook to determine which section is currently active in the viewport.
 * Uses IntersectionObserver to detect section visibility.
 * 
 * @param sectionIds - Array of section IDs to observe
 * @param options - Optional IntersectionObserver options
 * @returns The ID of the currently active section
 */
export function useActiveSection(
    sectionIds: string[],
    options: IntersectionObserverInit = { rootMargin: "-50% 0px -50% 0px" }
) {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        // Create observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        // Observe all sections
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        // Cleanup
        return () => {
            observer.disconnect();
        };
    }, [sectionIds, options]);

    return activeSection;
}

/**
 * @param {string} id
 */
export function scrollToSection (id, offset = -60) {
    const element = document.getElementById(id);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY + offset;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
        });
    }
}

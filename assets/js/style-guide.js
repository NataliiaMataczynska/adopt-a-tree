// Wybierz wszystkie przyciski
const btnStyleguideCode = document.querySelectorAll(".js-btn-styleguide-code");

// Funkcja do wyświetlania kodu
const toggleCodeDisplay = (button) => {
    const codeBlock = button.nextElementSibling; // Pobierz następny element <pre>
    const exampleDiv = button.previousElementSibling; // Pobierz poprzedni element <div class="example">

    // Wygeneruj kod HTML na podstawie innerHTML dzieci exampleDiv
    const generatedCode = Array.from(exampleDiv.children).map(child => child.outerHTML).join('\n'); // Wygeneruj kod HTML dla dzieci

    // Funkcja do kodowania HTML
    const escapeHtml = (html) => {
        return html
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

    // Ustaw wygenerowany kod jako tekst
    codeBlock.innerHTML = `<code>${escapeHtml(generatedCode)}</code>`; // Użyj <code> do sformatowania
    codeBlock.style.display = codeBlock.style.display === "none" || codeBlock.style.display === "" ? "block" : "none"; // Przełącz widoczność
};

// Nasłuchiwacze zdarzeń dla przycisków
btnStyleguideCode.forEach((button) => {
    button.addEventListener('click', (evt) => {
        toggleCodeDisplay(evt.target);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById("js-btn-styleguide-menu");
    const sidebarMenu = document.getElementById("js-styleguide-sidebar");

    // Ustaw domyślnie nawigację jako ukrytą
    sidebarMenu.style.display = "none"; // Upewnij się, że nawigacja jest ukryta na początku

    btnMenu.addEventListener('click', () => {
        // Przełącz widoczność nawigacji
        if (sidebarMenu.style.display === "none" || sidebarMenu.style.display === "") {
            sidebarMenu.style.display = "block"; // Pokaż menu
        } else {
            sidebarMenu.style.display = "none"; // Ukryj menu
        }
    });

    // Nasłuchiwacz zdarzeń dla linków w menu
    sidebarMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sidebarMenu.style.display = "none"; // Ukryj menu po kliknięciu w link
        });
    });
});
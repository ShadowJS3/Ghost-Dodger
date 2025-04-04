document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Captura os dados do formulário
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // Verifica se todos os campos estão preenchidos
        if (!name || !email || !message) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Validação do nome (impede números)
        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name)) {
            alert("O nome não pode conter números ou caracteres especiais.");
            return;
        }

        // Validação do e-mail (formato correto)
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        // Exibe os dados no console
        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Mensagem:", message);

        // Exibe uma mensagem de sucesso
        alert("Formulário enviado com sucesso!");

        // Limpa o formulário
        form.reset();
    });
});
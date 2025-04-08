document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const phoneInput = form.phone;

    // Adiciona a máscara ao campo de telefone
    phoneInput.addEventListener("input", (event) => {
        let value = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
        if (value.length > 10) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3"); // Formato (XX) XXXXX-XXXX
        } else if (value.length > 6) {
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3"); // Formato (XX) XXXX-XXXX
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,4})/, "($1) $2"); // Formato (XX) XXXX
        } else {
            value = value.replace(/^(\d*)/, "($1"); // Formato (XX
        }
        event.target.value = value;
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Captura os dados do formulário
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const message = form.message.value.trim();

        // Verifica se todos os campos estão preenchidos
        if (!name || !email || !phone || !message) {
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

        // Validação do telefone (formato com máscara)
        if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(phone)) {
            alert("Por favor, insira um telefone válido no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.");
            return;
        }

        // Exibe os dados no console
        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Telefone:", phone);
        console.log("Mensagem:", message);

        // Exibe uma mensagem de sucesso
        alert("Formulário enviado com sucesso!");

        // Limpa o formulário
        form.reset();
    });
});
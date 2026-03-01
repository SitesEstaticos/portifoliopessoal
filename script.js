// Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Form handling
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      // Validation
      if (!name || !email || !message) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Por favor, insira um email válido.';
        return;
      }

      // Build WhatsApp message
      let whatsappMessage = `Olá, meu nome é ${name}.\nEmail: ${email}`;
      if (phone) {
        whatsappMessage += `\nTelefone: ${phone}`;
      }
      whatsappMessage += `\n\nGostaria de agendar uma sessão.\n\nMensagem: ${message}`;

      // Show feedback
      formFeedback.className = 'form-feedback success';
      formFeedback.textContent = 'Redirecionando para o WhatsApp…';

      // Redirect to WhatsApp
      const whatsappURL = `https://wa.me/5589994256021?text=${encodeURIComponent(whatsappMessage)}`;
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
        // Reset form
        contactForm.reset();
        formFeedback.textContent = 'Mensagem enviada com sucesso!';
        setTimeout(() => {
          formFeedback.className = 'form-feedback';
        }, 3000);
      }, 500);
    });
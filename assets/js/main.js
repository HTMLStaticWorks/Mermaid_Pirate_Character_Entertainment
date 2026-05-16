/* ==========================================================================
   Piratica - Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle ---
  const themeToggles = document.querySelectorAll('.theme-toggle');
  const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggles.forEach(toggle => {
    // Set initial icon
    const icon = toggle.querySelector('i');
    if(icon) {
      icon.className = currentTheme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
    }

    toggle.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggles.forEach(t => t.querySelector('i').className = 'ph ph-moon');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggles.forEach(t => t.querySelector('i').className = 'ph ph-sun');
      }
    });
  });

  // --- RTL Toggle ---
  const rtlToggles = document.querySelectorAll('.rtl-toggle');
  rtlToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      if (isRtl) {
        document.documentElement.removeAttribute('dir');
      } else {
        document.documentElement.setAttribute('dir', 'rtl');
      }
    });
  });

  // --- Mobile Drawer ---
  const hamburger = document.querySelector('.hamburger');
  const drawer = document.querySelector('.drawer');
  const drawerOverlay = document.querySelector('.drawer-overlay');
  const closeDrawerBtn = document.querySelector('.close-drawer');

  if(hamburger && drawer && drawerOverlay && closeDrawerBtn) {
    const openDrawer = () => {
      drawer.classList.add('open');
      drawerOverlay.classList.add('open');
    };

    const closeDrawer = () => {
      drawer.classList.remove('open');
      drawerOverlay.classList.remove('open');
    };

    hamburger.addEventListener('click', openDrawer);
    closeDrawerBtn.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  // --- Form Validation Helpers ---
  const forms = document.querySelectorAll('form[novalidate]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      
      inputs.forEach(input => {
        const errorElement = input.parentElement.querySelector('.form-error');
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
          input.classList.remove('success');
          if(errorElement) {
             errorElement.style.display = 'block';
             errorElement.textContent = 'This field is required';
          }
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          isValid = false;
          input.classList.add('error');
          input.classList.remove('success');
          if(errorElement) {
             errorElement.style.display = 'block';
             errorElement.textContent = 'Please enter a valid email';
          }
        } else if (input.type === 'password' && input.value.length < 8) {
          isValid = false;
          input.classList.add('error');
          input.classList.remove('success');
          if(errorElement) {
             errorElement.style.display = 'block';
             errorElement.textContent = 'Password must be at least 8 characters';
          }
        } else if (input.type === 'checkbox' && !input.checked) {
          isValid = false;
          // specific handling for checkbox
          if(errorElement) {
             errorElement.style.display = 'block';
             errorElement.textContent = 'You must agree to proceed';
          }
        } else {
          input.classList.remove('error');
          input.classList.add('success');
          if(errorElement) errorElement.style.display = 'none';
        }
      });

      // Confirm Password Check
      const pwd = form.querySelector('input[name="password"]');
      const confirmPwd = form.querySelector('input[name="confirm_password"]');
      if (pwd && confirmPwd && pwd.value !== confirmPwd.value) {
         isValid = false;
         confirmPwd.classList.add('error');
         const err = confirmPwd.parentElement.querySelector('.form-error');
         if(err) {
             err.style.display = 'block';
             err.textContent = 'Passwords do not match';
         }
      }

      if (isValid) {
        // Handle success logic (e.g. show message, submit to Formspree via fetch)
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Sending...';
        btn.disabled = true;
        
        // Mock API Call
        setTimeout(() => {
          form.innerHTML = '<div style="text-align:center; padding: 20px;"><i class="ph ph-check-circle" style="font-size: 3rem; color: #388e3c; margin-bottom:10px;"></i><h3 style="font-family: var(--font-display);">Ahoy! Success!</h3><p>Your request has been received.</p></div>';
        }, 1500);
      }
    });
  });

  // --- Back to Top ---
  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.id = 'backToTop';
  backToTop.innerHTML = '<i class="ph ph-caret-up"></i>';
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

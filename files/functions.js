// Age Verification Modal Logic
document.addEventListener('DOMContentLoaded', function() {
    const ageVerificationModalElement = document.getElementById('ageVerificationModal');
    if (ageVerificationModalElement) {
        const ageVerificationModal = new bootstrap.Modal(ageVerificationModalElement);
        const confirmAgeBtn = document.getElementById('confirmAgeBtn');
        const declineAgeBtn = document.getElementById('declineAgeBtn');

        const hasConfirmedAge = localStorage.getItem('grafzorflit_age_confirmed');

        if (!hasConfirmedAge) {
            ageVerificationModal.show();
        }

        if (confirmAgeBtn) {
            confirmAgeBtn.addEventListener('click', function() {
                localStorage.setItem('grafzorflit_age_confirmed', 'true');
                ageVerificationModal.hide();
            });
        }

        if (declineAgeBtn) {
            declineAgeBtn.addEventListener('click', function() {
                alert('You must be 18 or older to access this site.');
       
            });
        }
    }

    document.querySelectorAll('.smooth-scroll').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
   

            const offcanvasElement = document.getElementById('offcanvasNavbar');
            if (offcanvasElement && offcanvasElement.classList.contains('show')) {
                const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                if (offcanvas) {
                    offcanvas.hide(); 
                }
            }

            const targetId = this.getAttribute('href');
    
            if (targetId && targetId.startsWith('#') && document.querySelector(targetId)) {
   
            }
        });
    });


    const gameModalElement = document.getElementById('gameModal');
    const gameIframe = document.getElementById('gameIframe');
    const playButtons = document.querySelectorAll('.play-game-btn, .game-link');
    const body = document.body;

    if (gameModalElement && gameIframe && playButtons.length > 0) {
        const gameModal = new bootstrap.Modal(gameModalElement);

        playButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const gamePath = this.getAttribute('data-game-path');
                if (gamePath) {
                    gameIframe.src = gamePath;
                    gameModal.show();
                    body.style.overflow = 'hidden'; 
                }
            });
        });

        gameModalElement.addEventListener('hidden.bs.modal', function () {
            gameIframe.src = ''; 
            body.style.overflow = '';
        });
    }

    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
});

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("#closeModal");
const overlay = document.getElementById("overlay");

// Fix the touch event

openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
    // button.addEventListener("touchstart", (ev) => {
    //     console.log("click");
    //     ev.preventDefault();
    // });
});

closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    });
});

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}


const modalEl = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text")

setTimeout(function(){
    modalEl.style.display = "inline"
}, 1500);

modalCloseBtn.addEventListener("click", function(){
    modalEl.style.display = "none"
});

consentForm.addEventListener("submit", function(event){
    event.preventDefault()
    modalText.innerHTML =`
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="uploadText">
                Uploading your data to the dark web...
            </p>
        </div>`
    console.log("form submitted")
});


const adults = document.getElementById("adults");
const children = document.getElementById("children");
const rooms = document.getElementById("rooms");
const guest_and_rooms_element = document.getElementById("guestsRoomsElement");
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

function onClickSubmit() {
    const updated_text = adults.value + ", " + children.value + ", " + rooms.value;
    console.log(updated_text);
    guest_and_rooms_element.textContent = updated_text;
    modal.style.display = "none";
}


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

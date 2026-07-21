const API_URL = "/tour";

const tourList = document.getElementById("tourList");
const form = document.getElementById("tourForm");
const message = document.getElementById("message");

// Update Form
const updateCard = document.getElementById("updateCard");
const updateForm = document.getElementById("updateForm");

// Delete Modal
const deleteModal = document.getElementById("deleteModal");
const confirmDelete = document.getElementById("confirmDelete");
const cancelUpdate = document.getElementById("cancelUpdate");
let deleteTourId = "";
let deleteTourTitle = "";

// =======================================
// Show Success / Error Message
// =======================================

function showMessage(text, type) {
  message.className = type;
  message.innerHTML = text;

  setTimeout(() => {
    message.innerHTML = "";
    message.className = "";
  }, 3000);
}

// =======================================
// Load All Tours
// =======================================

async function loadTours() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();

    tourList.innerHTML = "";

    result.data.forEach((tour) => {
      tourList.innerHTML += `

      <div class="tour-card">

      <h3>${tour.title}</h3>

      <p><b>Tour ID:</b> ${tour.tour_id}</p>

      <p><b>Description:</b> ${tour.description}</p>

      <p><b>Pickup:</b> ${tour.pick_up}</p>

      <p><b>Meeting Point:</b> ${tour.meeting_point}</p>

      <p><b>Drop Off:</b> ${tour.drop_off}</p>

      <p><b>Duration:</b> ${tour.duration} ${tour.duration_unit}</p>

      <div class="actions">

      <button
      class="update-btn"
      onclick="showUpdateForm(
        '${tour._id}',
        '${tour.title}',
        '${tour.duration}',
        '${tour.duration_unit}'
      )">

      Update

      </button>

      <button
      class="delete-btn"
      onclick="deleteTour('${tour._id}','${tour.title}')">

      Delete

      </button>

      </div>

      </div>

      `;
    });

  } catch (error) {
    showMessage(error.message, "error");
  }
}

// =======================================
// Create Tour
// =======================================

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const body = {

    tour_id: Number(document.getElementById("tour_id").value),

    title: document.getElementById("title").value,

    description: document.getElementById("description").value,

    pick_up: document.getElementById("pickup").value,

    meeting_point: document.getElementById("meeting").value,

    drop_off: document.getElementById("dropoff").value,

    duration: Number(document.getElementById("duration").value),

    duration_unit: document.getElementById("duration_unit").value,

  };

  try {

    const response = await fetch(API_URL, {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify(body),

    });

    const result = await response.json();

    if (response.ok) {

      showMessage(result.message, "success");

      form.reset();

      loadTours();

    } else {

      showMessage(result.message, "error");

    }

  } catch (error) {

    showMessage(error.message, "error");

  }

});

// =======================================
// Show Update Form
// =======================================

function showUpdateForm(id, title, duration, unit) {

  updateCard.classList.remove("hidden");

  document.getElementById("update_id").value = id;

  document.getElementById("update_title").value = title;

  document.getElementById("update_duration").value = duration;

  document.getElementById("update_duration_unit").value = unit;

  updateCard.scrollIntoView({

    behavior: "smooth"

  });

}

// =======================================
// Update Tour
// =======================================

updateForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  const id = document.getElementById("update_id").value;

  const body = {

    title: document.getElementById("update_title").value,

    duration: Number(document.getElementById("update_duration").value),

    duration_unit: document.getElementById("update_duration_unit").value,

  };

  try {

    const response = await fetch(`${API_URL}/${id}`, {

      method: "PUT",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify(body),

    });

    const result = await response.json();

    if (response.ok) {

      showMessage(result.message, "success");

      updateForm.reset();

      updateCard.classList.add("hidden");

      loadTours();

    } else {

      showMessage(result.message, "error");

    }

  } catch (error) {

    showMessage(error.message, "error");

  }

});

// =======================================
// Delete Tour
// =======================================

function deleteTour(id, title) {

    deleteTourId = id;

    deleteTourTitle = title;

    document.getElementById("deleteTourTitle").textContent = title;

    deleteModal.classList.remove("hidden");

}

function closeDeleteModal() {

    deleteModal.classList.add("hidden");

}

confirmDelete.addEventListener("click", async () => {

    try {

        const response = await fetch(`${API_URL}/${deleteTourId}`, {

            method: "DELETE",

        });

        const result = await response.json();

        if (response.ok) {

            showMessage(result.message, "success");

            closeDeleteModal();

            loadTours();

        } else {

            showMessage(result.message, "error");

        }

    } catch (error) {

        showMessage(error.message, "error");

    }

});

// =======================================
// Cancel Update
// =======================================

cancelUpdate.addEventListener("click", () => {

    // Hide update section
    updateCard.classList.add("hidden");

    // Clear all update fields
    document.getElementById("update_id").value = "";
    document.getElementById("update_title").value = "";
    document.getElementById("update_duration").value = "";
    document.getElementById("update_duration_unit").value = "days";

});
// =======================================
// Initial Load
// =======================================

loadTours();
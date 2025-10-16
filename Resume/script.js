

const updateBtn = document.getElementById("updateBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Load saved data on page load
window.onload = function() {
  const savedData = JSON.parse(localStorage.getItem("resumeData"));
  if (savedData) {
    renderResume(savedData);
    fillForm(savedData);
  }
};

// Update resume when button clicked
updateBtn.addEventListener("click", () => {
  const data = {
    name: document.getElementById("inputName").value,
    email: document.getElementById("inputEmail").value,
    phone: document.getElementById("inputPhone").value,
    about: document.getElementById("inputAbout").value,
    skills: document.getElementById("inputSkills").value.split(","),
    experience: document.getElementById("inputExperience").value.split(";"),
    education: document.getElementById("inputEducation").value.split(";")
  };

  renderResume(data);
  localStorage.setItem("resumeData", JSON.stringify(data));
});

// Render resume content dynamically
function renderResume(data) {
  document.getElementById("name").textContent = data.name || "Your Name";
  document.getElementById("email").textContent = data.email || "your.email@example.com";
  document.getElementById("phone").textContent = data.phone || "+91 1234567890";
  document.getElementById("about").textContent = data.about || "Write something about yourself.";

  // Skills
  const skillsList = document.getElementById("skills");
  skillsList.innerHTML = "";
  data.skills.forEach(skill => {
    if (skill.trim()) {
      const li = document.createElement("li");
      li.textContent = skill.trim();
      skillsList.appendChild(li);
    }
  });

  // Experience
  const expDiv = document.getElementById("experience");
  expDiv.innerHTML = "";
  data.experience.forEach(exp => {
    if (exp.trim()) {
      const p = document.createElement("p");
      p.textContent = exp.trim();
      expDiv.appendChild(p);
    }
  });

  // Education
  const eduDiv = document.getElementById("education");
  eduDiv.innerHTML = "";
  data.education.forEach(edu => {
    if (edu.trim()) {
      const p = document.createElement("p");
      p.textContent = edu.trim();
      eduDiv.appendChild(p);
    }
  });
}

// Fill the form fields from saved data
function fillForm(data) {
  document.getElementById("inputName").value = data.name || "";
  document.getElementById("inputEmail").value = data.email || "";
  document.getElementById("inputPhone").value = data.phone || "";
  document.getElementById("inputAbout").value = data.about || "";
  document.getElementById("inputSkills").value = data.skills.join(", ");
  document.getElementById("inputExperience").value = data.experience.join("; ");
  document.getElementById("inputEducation").value = data.education.join("; ");
}

// Download as PDF
downloadBtn.addEventListener("click", () => {
  const element = document.getElementById("resume");
  html2pdf().from(element).save("My_Resume.pdf");
});

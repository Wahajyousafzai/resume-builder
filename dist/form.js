// Add skills to localStorage
function addSkill() {
    const skillInput = document.getElementById("skill-input");
    const skill = skillInput?.value.trim();
    if (skill) {
        let skills = JSON.parse(localStorage.getItem("skills") || "[]");
        if (!skills.includes(skill)) {
            skills.push(skill);
            localStorage.setItem("skills", JSON.stringify(skills));
            if (skillInput)
                skillInput.value = ""; // Clear the input
        }
    }
}
// Reset skills in localStorage
function resetSkills() {
    localStorage.removeItem("skills");
}
resetSkills();
document.getElementById("userForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Personal Info
    const myname = document.getElementById("name").value;
    sessionStorage.setItem("userName", myname);
    const job = document.getElementById("job").value;
    sessionStorage.setItem("jobTitle", job);
    const email = document.getElementById("email").value;
    sessionStorage.setItem("email", email);
    const phone = document.getElementById("phone").value;
    sessionStorage.setItem("phone", phone);
    const radios = Array.from(document.getElementsByName("check"));
    let gender;
    for (const radio of radios) {
        if (radio.checked) {
            gender = radio.value;
            break;
        }
    }
    sessionStorage.setItem("gender", gender || "");
    const city = document.getElementById("city").value;
    sessionStorage.setItem("city", city);
    const address = document.getElementById("address").value;
    sessionStorage.setItem("address", address);
    const state = document.getElementById("state").value;
    sessionStorage.setItem("state", state);
    const postalCode = document.getElementById("postalCode").value;
    sessionStorage.setItem("postalCode", postalCode);
    // Experience
    const experience_name = document.getElementById("experience_name").value;
    sessionStorage.setItem("experience_name", experience_name);
    const experience_Years = document.getElementById("experience_Years").value;
    sessionStorage.setItem("experience_Years", experience_Years);
    const experience_ins = document.getElementById("experience_institute").value;
    const experience_institute = ` |  ${experience_ins}`;
    sessionStorage.setItem("experience_institute", experience_institute);
    const experience = document.getElementById("experience").value;
    sessionStorage.setItem("experience", experience);
    // Certificates
    const certificates_name = document.getElementById("certificates_name").value;
    sessionStorage.setItem("certificates_name", certificates_name);
    const certificates_date = document.getElementById("certificates_date").value;
    sessionStorage.setItem("certificates_date", certificates_date);
    const certificates_para = document.getElementById("certificates_para").value;
    sessionStorage.setItem("certificates_para", certificates_para);
    // Education
    const edu_institute = document.getElementById("edu_institute").value;
    sessionStorage.setItem("edu_institute", edu_institute);
    const edu_degree = document.getElementById("edu_degree").value;
    sessionStorage.setItem("edu_degree", edu_degree);
    const education_date = document.getElementById("education_date").value;
    sessionStorage.setItem("education_date", education_date);
    const links = {
        github: document.getElementById('github').value,
        linkedin: document.getElementById('linkedin').value,
        youtube: document.getElementById('youtube').value,
        instagram: document.getElementById('instagram').value,
    };
    // Store in localStorage for accessibility from index.ts
    localStorage.setItem('socialLinks', JSON.stringify(links));
    window.location.href = "index.html";
});

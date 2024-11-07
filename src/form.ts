// Add skills to localStorage
function addSkill() {
    const skillInput = document.getElementById("skill-input") as HTMLInputElement | null;
    const skill = skillInput?.value.trim();
    if (skill) {
      let skills = JSON.parse(localStorage.getItem("skills") || "[]") as string[];
      if (!skills.includes(skill)) {
        skills.push(skill);
        localStorage.setItem("skills", JSON.stringify(skills));
        if (skillInput) skillInput.value = ""; // Clear the input
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
    const myname = (document.getElementById("name") as HTMLInputElement).value;
    sessionStorage.setItem("userName", myname);
  
    const job = (document.getElementById("job") as HTMLInputElement).value;
    sessionStorage.setItem("jobTitle", job);
  
    const email = (document.getElementById("email") as HTMLInputElement).value;
    sessionStorage.setItem("email", email);
  
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    sessionStorage.setItem("phone", phone);
  
    const radios = Array.from(document.getElementsByName("check") as NodeListOf<HTMLInputElement>);
    let gender;
    for (const radio of radios) {
      if (radio.checked) {
        gender = radio.value;
        break;
      }
    }    
    
    sessionStorage.setItem("gender", gender || "");
  
    const city = (document.getElementById("city") as HTMLInputElement).value;
    sessionStorage.setItem("city", city);
  
    const address = (document.getElementById("address") as HTMLInputElement).value;
    sessionStorage.setItem("address", address);
  
    const state = (document.getElementById("state") as HTMLInputElement).value;
    sessionStorage.setItem("state", state);
  
    const postalCode = (document.getElementById("postalCode") as HTMLInputElement).value;
    sessionStorage.setItem("postalCode", postalCode);
  
    // Experience
    const experience_name = (document.getElementById("experience_name") as HTMLInputElement).value;
    sessionStorage.setItem("experience_name", experience_name);
  
    const experience_Years = (document.getElementById("experience_Years") as HTMLInputElement).value;
    sessionStorage.setItem("experience_Years", experience_Years);
  
    const experience_ins = (document.getElementById("experience_institute") as HTMLInputElement).value;
    const experience_institute = ` |  ${experience_ins}`;
    sessionStorage.setItem("experience_institute", experience_institute);
  
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    sessionStorage.setItem("experience", experience);
  
    // Certificates
    const certificates_name = (document.getElementById("certificates_name") as HTMLInputElement).value;
    sessionStorage.setItem("certificates_name", certificates_name);
  
    const certificates_date = (document.getElementById("certificates_date") as HTMLInputElement).value;
    sessionStorage.setItem("certificates_date", certificates_date);
  
    const certificates_para = (document.getElementById("certificates_para") as HTMLInputElement).value;
    sessionStorage.setItem("certificates_para", certificates_para);
  
    // Education
    const edu_institute = (document.getElementById("edu_institute") as HTMLInputElement).value;
    sessionStorage.setItem("edu_institute", edu_institute);
  
    const edu_degree = (document.getElementById("edu_degree") as HTMLInputElement).value;
    sessionStorage.setItem("edu_degree", edu_degree);
  
    const education_date = (document.getElementById("education_date") as HTMLInputElement).value;
    sessionStorage.setItem("education_date", education_date);
  
    const links = {
      github: (document.getElementById('github') as HTMLInputElement).value,
      linkedin: (document.getElementById('linkedin') as HTMLInputElement).value,
      youtube: (document.getElementById('youtube') as HTMLInputElement).value,
      instagram: (document.getElementById('instagram') as HTMLInputElement).value,
  };

  // Store in localStorage for accessibility from index.ts
  localStorage.setItem('socialLinks', JSON.stringify(links));

    window.location.href = "index.html";
  });
  

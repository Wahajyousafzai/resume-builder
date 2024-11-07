// Types for global libraries
declare const html2pdf: any;

const resume = document.getElementById("full_pdf") as HTMLElement;
const opt = {
  margin: 0, // [top, right, bottom, left]
  filename: "myfile.pdf",
  image: { type: "jpeg", quality: 1 },
  html2canvas: {
     scale: 5,
     width: 1000, // Set to a desktop width in pixels
    windowWidth: 1400 // Window width for capturing
     },
  jsPDF: { unit: "px", format: [1000, resume.scrollHeight], orientation: "portrait" },
};

const download = document.getElementById("download") as HTMLElement;

if (download) {
  download.onclick = () => {
    const style = document.createElement("style");
    style.innerHTML = `
    .detail_info{
      padding-left: 50px;
    }
    `;
    document.head.appendChild(style);

    document.querySelectorAll(".removebutton").forEach((button) => {
      (button as HTMLElement).style.display = "none";
    });
    document.querySelectorAll(".create_resume").forEach((button) => {
      (button as HTMLElement).style.display = "none";
    });

    html2pdf().set(opt).from(resume).save().then(() => {
      document.head.removeChild(style);
      document.querySelectorAll(".removebutton").forEach((button) => {
        (button as HTMLElement).style.display = "";
      });
      document.querySelectorAll(".create_resume").forEach((button) => {
        (button as HTMLElement).style.display = "";
      });
    });
  };
}

let dynamicScript: HTMLScriptElement | null;
const profileDiv = document.getElementById("transformZ") as HTMLElement;

document.getElementById("toggleScriptButton")?.addEventListener("click", function () {
  const button = document.getElementById("toggleScriptButton") as HTMLElement;

  if (!dynamicScript) {
    dynamicScript = document.createElement("script");
    dynamicScript.src = "tilt.js";
    dynamicScript.type = "text/javascript";

    document.body.appendChild(dynamicScript);

    button.textContent = "Reset";

    dynamicScript.onload = () => {
      console.log("Script loaded successfully!");
      profileDiv.classList.add("tilt1");
    };
    dynamicScript.onerror = () => console.error("Failed to load the script.");
  } else {
    document.body.removeChild(dynamicScript);
    dynamicScript = null;
    button.textContent = "3D Effect";
    location.reload();
  }
});

const myname: string | null = sessionStorage.getItem('userName');
const job: string | null = sessionStorage.getItem('jobTitle');
const email: string | null = sessionStorage.getItem('email');
const phone: string | null = sessionStorage.getItem('phone');
const gender: string | null = sessionStorage.getItem('gender');
const city: string | null = sessionStorage.getItem('city');
const address: string | null = sessionStorage.getItem('address');
const state: string | null = sessionStorage.getItem('state');
const postalCode: string | null = sessionStorage.getItem('postalCode');

const experience_name: string | null = sessionStorage.getItem('experience_name');
const experience_Years: string | null = sessionStorage.getItem('experience_Years');
const experience_institute: string | null = sessionStorage.getItem('experience_institute');
const experience: string | null = sessionStorage.getItem('experience');

const edu_institute: string | null = sessionStorage.getItem('edu_institute');
const edu_degree: string | null = sessionStorage.getItem('edu_degree');
const education_date: string | null = sessionStorage.getItem('education_date');

const certificates_name: string | null = sessionStorage.getItem('certificates_name');
const certificates_date: string | null = sessionStorage.getItem('certificates_date');
const certificates_para: string | null = sessionStorage.getItem('certificates_para');

if (myname) {
  document.querySelectorAll(".name").forEach((v) => {
    (v as HTMLElement).innerText = myname;
  });
  if (job) {
    document.getElementById("job")!.textContent = job;
    document.querySelectorAll(".position").forEach((v) => ((v as HTMLElement).innerText = `${job}`));
  }
  if (email) {
    document.getElementById("email")!.textContent = email;
  }
  if (phone) {
    document.getElementById("phone")!.textContent = phone;
  }
  if (gender) {
    document.getElementById("gender")!.textContent = gender;
  }
  if (city) {
    document.getElementById("city")!.textContent = city;
  }
  if (address) {
    document.getElementById("address")!.textContent = address;
  }
  if (state) {
    document.getElementById("state")!.textContent = state;
  }
  if (postalCode) {
    document.getElementById("postalCode")!.textContent = postalCode;
  }
  if (experience_name) {
    document.getElementById("experience_name")!.textContent = experience_name;
  }
  if (experience_Years) {
    document.getElementById("experience_Years")!.textContent = experience_Years;
  }
  if (experience_institute) {
    document.getElementById("experience_institute")!.textContent = experience_institute;
  }
  if (experience) {
    document.getElementById("experience")!.textContent = experience;
  }
  if (certificates_name) {
    document.getElementById("certificates_name")!.textContent = certificates_name;
  }
  if (certificates_date) {
    document.getElementById("certificates_date")!.textContent = certificates_date;
  }
  if (certificates_para) {
    document.getElementById("certificates_para")!.textContent = certificates_para;
  }
  if (edu_institute) {
    document.getElementById("edu_institute")!.textContent = edu_institute;
  }
  if (edu_degree) {
    document.getElementById("edu_degree")!.textContent = edu_degree;
  }
  if (education_date) {
    document.getElementById("education_date")!.textContent = education_date;
  }

  // Clear session storage after displaying data
  sessionStorage.removeItem("userName");
  sessionStorage.removeItem("jobTitle");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("phone");
  sessionStorage.removeItem("gender");
  sessionStorage.removeItem("city");
  sessionStorage.removeItem("address");
  sessionStorage.removeItem("state");
  sessionStorage.removeItem("postalCode");
  sessionStorage.removeItem("experience_name");
  sessionStorage.removeItem("experience_Years");
  sessionStorage.removeItem("experience_institute");
  sessionStorage.removeItem("experience");
  sessionStorage.removeItem("edu_institute");
  sessionStorage.removeItem("edu_degree");
  sessionStorage.removeItem("education_date");
  sessionStorage.removeItem("certificates_name");
  sessionStorage.removeItem("certificates_date");
  sessionStorage.removeItem("certificates_para");

const skillsList = document.getElementById("skills-list") as HTMLElement | null;

function displaySkills():void {
  skillsList.innerHTML = ""; // Clear existing list

  const skills = JSON.parse(localStorage.getItem("skills")) || [] as string[];
  skills.forEach(skill => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });
}

// Initial display of skills
displaySkills();

// Listen for changes to localStorage (e.g., if skills are updated in form.html)
window.addEventListener("storage", displaySkills);
}


function removeTag():void {
  const tag = document.getElementById("tag-to-remove");
  if (tag) {
    tag.remove();
  }
}

function removeTag2():void {
  const tag = document.getElementById("tag-to-remove2");
  if (tag) {
    tag.remove();
  }
}
function removeTag3():void {
  const tag = document.getElementById("tag-to-remove3");
  if (tag) {
    tag.remove();
  }
}
function removeTag4():void {
  const tag = document.getElementById("tag-to-remove4");
  if (tag) {
    tag.remove();
  }
}

function removeTag5():void {
  const tag = document.getElementById("tag-to-remove5");
  if (tag) {
    tag.remove();
  }
}


const images = document.querySelectorAll("img") as NodeListOf<HTMLImageElement>;
const inputFile = document.getElementById("input-file") as HTMLInputElement | null;

let imageSrc: string | undefined;
inputFile?.addEventListener("change", function () {
  imageSrc = URL.createObjectURL(inputFile.files?.[0] as File);

  const newImageSrcs = Array(5).fill(imageSrc as string);

  images.forEach((img, index) => {
    if (newImageSrcs[index]) {
      img.src = newImageSrcs[index];
    }
  });
});

// index.ts
function setSocialLinks() {
  const socialLinks = JSON.parse(localStorage.getItem('socialLinks') || '{}');
  if (!socialLinks) return;

  const iconElements: { [key: string]: HTMLAnchorElement | null } = {
      github: document.querySelector('.social_icons a:nth-child(1)'),
      linkedin: document.querySelector('.social_icons a:nth-child(2)'),
      youtube: document.querySelector('.social_icons a:nth-child(3)'),
      instagram: document.querySelector('.social_icons a:nth-child(4)'),
  };

  for (const platform in iconElements) {
      const icon = iconElements[platform];
      if (icon && socialLinks[platform]) {
          icon.href = socialLinks[platform];
      }
  }
  if (true) {
    setTimeout(() => {
      localStorage.removeItem('socialLinks');
    },3000)
  }
}

// Call `setSocialLinks` when the page loads
window.addEventListener('DOMContentLoaded', setSocialLinks);


const resume = document.getElementById("full_pdf");
const opt = {
    margin: 0, // [top, right, bottom, left]
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
        scale: 3,
        width: 1000, // Set to a desktop width in pixels
        windowWidth: 1400 // Window width for capturing
    },
    jsPDF: { unit: "px", format: [1000, resume.scrollHeight], orientation: "portrait" },
};
const download = document.getElementById("download");
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
            button.style.display = "none";
        });
        document.querySelectorAll(".create_resume").forEach((button) => {
            button.style.display = "none";
        });
        html2pdf().set(opt).from(resume).save().then(() => {
            document.head.removeChild(style);
            document.querySelectorAll(".removebutton").forEach((button) => {
                button.style.display = "";
            });
            document.querySelectorAll(".create_resume").forEach((button) => {
                button.style.display = "";
            });
        });
    };
}
let dynamicScript;
const profileDiv = document.getElementById("transformZ");
document.getElementById("toggleScriptButton")?.addEventListener("click", function () {
    const button = document.getElementById("toggleScriptButton");
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
    }
    else {
        document.body.removeChild(dynamicScript);
        dynamicScript = null;
        button.textContent = "3D Effect";
        location.reload();
    }
});
const myname = sessionStorage.getItem('userName');
const job = sessionStorage.getItem('jobTitle');
const email = sessionStorage.getItem('email');
const phone = sessionStorage.getItem('phone');
const gender = sessionStorage.getItem('gender');
const city = sessionStorage.getItem('city');
const address = sessionStorage.getItem('address');
const state = sessionStorage.getItem('state');
const postalCode = sessionStorage.getItem('postalCode');
const experience_name = sessionStorage.getItem('experience_name');
const experience_Years = sessionStorage.getItem('experience_Years');
const experience_institute = sessionStorage.getItem('experience_institute');
const experience = sessionStorage.getItem('experience');
const edu_institute = sessionStorage.getItem('edu_institute');
const edu_degree = sessionStorage.getItem('edu_degree');
const education_date = sessionStorage.getItem('education_date');
const certificates_name = sessionStorage.getItem('certificates_name');
const certificates_date = sessionStorage.getItem('certificates_date');
const certificates_para = sessionStorage.getItem('certificates_para');
if (myname) {
    document.querySelectorAll(".name").forEach((v) => {
        v.innerText = myname;
    });
    if (job) {
        document.getElementById("job").textContent = job;
        document.querySelectorAll(".position").forEach((v) => (v.innerText = `${job}`));
    }
    if (email) {
        document.getElementById("email").textContent = email;
    }
    if (phone) {
        document.getElementById("phone").textContent = phone;
    }
    if (gender) {
        document.getElementById("gender").textContent = gender;
    }
    if (city) {
        document.getElementById("city").textContent = city;
    }
    if (address) {
        document.getElementById("address").textContent = address;
    }
    if (state) {
        document.getElementById("state").textContent = state;
    }
    if (postalCode) {
        document.getElementById("postalCode").textContent = postalCode;
    }
    if (experience_name) {
        document.getElementById("experience_name").textContent = experience_name;
    }
    if (experience_Years) {
        document.getElementById("experience_Years").textContent = experience_Years;
    }
    if (experience_institute) {
        document.getElementById("experience_institute").textContent = experience_institute;
    }
    if (experience) {
        document.getElementById("experience").textContent = experience;
    }
    if (certificates_name) {
        document.getElementById("certificates_name").textContent = certificates_name;
    }
    if (certificates_date) {
        document.getElementById("certificates_date").textContent = certificates_date;
    }
    if (certificates_para) {
        document.getElementById("certificates_para").textContent = certificates_para;
    }
    if (edu_institute) {
        document.getElementById("edu_institute").textContent = edu_institute;
    }
    if (edu_degree) {
        document.getElementById("edu_degree").textContent = edu_degree;
    }
    if (education_date) {
        document.getElementById("education_date").textContent = education_date;
    }
    const skillsList = document.getElementById("skills-list");
    function displaySkills() {
        skillsList.innerHTML = ""; // Clear existing list
        const skills = JSON.parse(localStorage.getItem("skills")) || [];
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
function removeTag() {
    const tag = document.getElementById("tag-to-remove");
    if (tag) {
        tag.remove();
    }
}
function removeTag2() {
    const tag = document.getElementById("tag-to-remove2");
    if (tag) {
        tag.remove();
    }
}
function removeTag3() {
    const tag = document.getElementById("tag-to-remove3");
    if (tag) {
        tag.remove();
    }
}
function removeTag4() {
    const tag = document.getElementById("tag-to-remove4");
    if (tag) {
        tag.remove();
    }
}
function removeTag5() {
    const tag = document.getElementById("tag-to-remove5");
    if (tag) {
        tag.remove();
    }
}
const images = document.querySelectorAll("img");
const inputFile = document.getElementById("input-file");
let imageSrc;
inputFile?.addEventListener("change", function () {
    imageSrc = URL.createObjectURL(inputFile.files?.[0]);
    const newImageSrcs = Array(5).fill(imageSrc);
    images.forEach((img, index) => {
        if (newImageSrcs[index]) {
            img.src = newImageSrcs[index];
        }
    });
});
function setSocialLinks() {
    const socialLinks = JSON.parse(localStorage.getItem('socialLinks') || '{}');
    if (!socialLinks)
        return;
    const iconElements = {
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
}
// Call `setSocialLinks` when the page loads
window.addEventListener('DOMContentLoaded', setSocialLinks);
// Existing code for setting social links
// New sharing functionality
function shareResume() {
    const resumeData = {
        name: sessionStorage.getItem('userName'),
        job: sessionStorage.getItem('jobTitle'),
        email: sessionStorage.getItem('email'),
        phone: sessionStorage.getItem('phone'),
        gender: sessionStorage.getItem('gender'),
        city: sessionStorage.getItem('city'),
        address: sessionStorage.getItem('address'),
        state: sessionStorage.getItem('state'),
        postalCode: sessionStorage.getItem('postalCode'),
        experience_name: sessionStorage.getItem('experience_name'),
        experience_Years: sessionStorage.getItem('experience_Years'),
        experience_institute: sessionStorage.getItem('experience_institute'),
        experience: sessionStorage.getItem('experience'),
        edu_institute: sessionStorage.getItem('edu_institute'),
        edu_degree: sessionStorage.getItem('edu_degree'),
        education_date: sessionStorage.getItem('education_date'),
        certificates_name: sessionStorage.getItem('certificates_name'),
        certificates_date: sessionStorage.getItem('certificates_date'),
        certificates_para: sessionStorage.getItem('certificates_para'),
        skills: JSON.parse(localStorage.getItem('skills') || '[]'),
        socialLinks: JSON.parse(localStorage.getItem('socialLinks') || '{}')
    };
    const encodedData = btoa(JSON.stringify(resumeData));
    const baseUrl = window.location.origin;
    const shareableUrl = `${baseUrl}/public/index.html?data=${encodedData}`;
    navigator.clipboard.writeText(shareableUrl)
        .then(() => {
        alert('Share link copied to clipboard!');
    })
        .catch(err => {
        console.error('Failed to copy link:', err);
        alert('Could not copy link automatically. Please copy it manually: ' + shareableUrl);
    });
}
// ... keep all your existing code ...
// Modify the existing loadSharedResume function
function loadSharedResume() {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedData = urlParams.get('data');
    if (sharedData) {
        try {
            const resumeData = JSON.parse(atob(sharedData));
            // Update all resume fields with shared data
            const elements = {
                name: document.getElementById('name'),
                email: document.getElementById('email'),
                phone: document.getElementById('phone'),
                job: document.getElementById('job'),
                gender: document.getElementById('gender'),
                city: document.getElementById('city'),
                address: document.getElementById('address'),
                state: document.getElementById('state'),
                postalCode: document.getElementById('postalCode'),
                experience_name: document.getElementById('experience_name'),
                experience_Years: document.getElementById('experience_Years'),
                experience_institute: document.getElementById('experience_institute'),
                experience: document.getElementById('experience'),
                edu_institute: document.getElementById('edu_institute'),
                edu_degree: document.getElementById('edu_degree'),
                education_date: document.getElementById('education_date'),
                certificates_name: document.getElementById('certificates_name'),
                certificates_date: document.getElementById('certificates_date'),
                certificates_para: document.getElementById('certificates_para')
            };
            // Update each element if it exists and has corresponding data
            for (const [key, element] of Object.entries(elements)) {
                if (element && resumeData[key]) {
                    element.textContent = resumeData[key];
                }
            }
            // Update position elements that use the job title
            if (resumeData.job) {
                document.querySelectorAll(".position").forEach((v) => v.innerText = resumeData.job);
            }
            // Update name elements that appear multiple times
            if (resumeData.name) {
                document.querySelectorAll(".name").forEach((v) => v.innerText = resumeData.name);
            }
            const skillsList = document.getElementById("skills-list");
            if (skillsList && resumeData.skills) {
                skillsList.innerHTML = ""; // Clear existing skills
                resumeData.skills.forEach((skill) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = skill;
                    skillsList.appendChild(listItem);
                });
            }
            // Also update social links if they exist
            if (resumeData.socialLinks) {
                const socialLinks = resumeData.socialLinks;
                setSocialLinks();
            }
        }
        catch (error) {
            console.error('Error loading shared resume:', error);
        }
    }
    else {
        // If no shared data, load from session storage (your existing code)
        const myname = sessionStorage.getItem('userName');
        const job = sessionStorage.getItem('jobTitle');
        const email = sessionStorage.getItem('email');
        const phone = sessionStorage.getItem('phone');
        const gender = sessionStorage.getItem('gender');
        const city = sessionStorage.getItem('city');
        const address = sessionStorage.getItem('address');
        const state = sessionStorage.getItem('state');
        const postalCode = sessionStorage.getItem('postalCode');
        const experience_name = sessionStorage.getItem('experience_name');
        const experience_Years = sessionStorage.getItem('experience_Years');
        const experience_institute = sessionStorage.getItem('experience_institute');
        const experience = sessionStorage.getItem('experience');
        const edu_institute = sessionStorage.getItem('edu_institute');
        const edu_degree = sessionStorage.getItem('edu_degree');
        const education_date = sessionStorage.getItem('education_date');
        const certificates_name = sessionStorage.getItem('certificates_name');
        const certificates_date = sessionStorage.getItem('certificates_date');
        const certificates_para = sessionStorage.getItem('certificates_para');
        if (myname) {
            document.querySelectorAll(".name").forEach((v) => {
                v.innerText = myname;
            });
            if (job) {
                document.getElementById("job").textContent = job;
                document.querySelectorAll(".position").forEach((v) => (v.innerText = `${job}`));
            }
            if (email) {
                document.getElementById("email").textContent = email;
            }
            if (phone) {
                document.getElementById("phone").textContent = phone;
            }
            if (gender) {
                document.getElementById("gender").textContent = gender;
            }
            if (city) {
                document.getElementById("city").textContent = city;
            }
            if (address) {
                document.getElementById("address").textContent = address;
            }
            if (state) {
                document.getElementById("state").textContent = state;
            }
            if (postalCode) {
                document.getElementById("postalCode").textContent = postalCode;
            }
            if (experience_name) {
                document.getElementById("experience_name").textContent = experience_name;
            }
            if (experience_Years) {
                document.getElementById("experience_Years").textContent = experience_Years;
            }
            if (experience_institute) {
                document.getElementById("experience_institute").textContent = experience_institute;
            }
            if (experience) {
                document.getElementById("experience").textContent = experience;
            }
            if (certificates_name) {
                document.getElementById("certificates_name").textContent = certificates_name;
            }
            if (certificates_date) {
                document.getElementById("certificates_date").textContent = certificates_date;
            }
            if (certificates_para) {
                document.getElementById("certificates_para").textContent = certificates_para;
            }
            if (edu_institute) {
                document.getElementById("edu_institute").textContent = edu_institute;
            }
            if (edu_degree) {
                document.getElementById("edu_degree").textContent = edu_degree;
            }
            if (education_date) {
                document.getElementById("education_date").textContent = education_date;
            }
            const skillsList = document.getElementById("skills-list");
            function displaySkills() {
                skillsList.innerHTML = ""; // Clear existing list
                const skills = JSON.parse(localStorage.getItem("skills")) || [];
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
    }
}
window.onload = loadSharedResume;
// Keep all your existing code below...

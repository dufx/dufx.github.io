//======CHANGE MENU ON SCROLL======
const menuBtn = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__list');

if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	});

	menu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			menuBtn.classList.toggle('active');
			menu.classList.toggle('active');
		});
	});
}

//===========A N C H O R S===============

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', e => {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	});
});

const createSelectedSection = (root) => {
	const nav = root.querySelector('nav');

	root.querySelectorAll('.observe').forEach(s => {
		new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					nav.querySelectorAll('a').forEach(link => link.classList.remove('active'));
					let id = entry.target.getAttribute('id');
					nav.querySelector(`a[href="#${id}"]`).classList.add('active');
				}
			});
		}, {}).observe(s);
	});
};

createSelectedSection(document.querySelector('#page'));

//=============FOOTER LANGUAGES==============


const codingLanguages = ["HTML", "CSS", "JavaScript"]; //Storing the Languages
const text = codingLanguages.toString(); //Making Sure everything is a string
const spaced = text.replace(/,/g, ', '); //Putting Spaces
const ready = spaced.replace(/,(?=[^,]*$)/, ' and'); //Putting the "and" word
document.getElementById("coding").innerHTML = ready; //Adding the string to the html


//==========F O R M    V A L I D A T I O N ===============

const submitBtn = document.getElementById('submit');
const firstName = document.getElementById('name');
const email = document.getElementById('email');
const comment = document.getElementById('message');

function updateSubmitBtn() {
	const firstNameValue = firstName.value.trim();
	const emailValue = email.value.trim();
	const commentValue = comment.value.trim();
	if (firstNameValue && emailValue && commentValue) {
		submitBtn.removeAttribute('disabled');
	} else {
		submitBtn.setAttribute('disabled', 'disabled');
	}
}

firstName.addEventListener('keyup', updateSubmitBtn);
email.addEventListener('keyup', updateSubmitBtn);
comment.addEventListener('keyup', updateSubmitBtn);


//============MAP CHANGING==============

const mapBtn = document.getElementById('map__button');
const mapBtnBack = document.getElementById('map__button__back');



var mapCount = 0;
var maps = [
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.53177978152!2d35.10531875061222!3d31.796445332992263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem!5e0!3m2!1sen!2sil!4v1664155163649!5m2!1sen!2sil",
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53592.015697592185!2d35.27650543386796!3d32.91135967548106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c33e664765f2b%3A0x1b61c5431d415446!2sKarmiel!5e0!3m2!1sen!2sil!4v1664155278270!5m2!1sen!2sil",
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155710.78896498858!2d30.810826640520077!3d52.42514055551774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d4699b50faf1a5%3A0x5ecca30fd2361396!2sGomel%2C%20Belarus!5e0!3m2!1sen!2sil!4v1664155329582!5m2!1sen!2sil",
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.81388292176!2d34.65371716020922!3d32.08799604711842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1664153488924!5m2!1sen!2sil"
];

const jerusalem = {link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.53177978152!2d35.10531875061222!3d31.796445332992263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem!5e0!3m2!1sen!2sil!4v1664155163649!5m2!1sen!", year:"2019", country:"Israel", city:"Jerusalem" };
const karmiel = {link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53592.015697592185!2d35.27650543386796!3d32.91135967548106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c33e664765f2b%3A0x1b61c5431d415446!2sKarmiel!5e0!3m2!1sen!2sil!4v1664155278270!5m2!1sen!2sil", year:"2018", country:"Israel", city:"Karmiel" };
const gomel = {link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155710.78896498858!2d30.810826640520077!3d52.42514055551774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d4699b50faf1a5%3A0x5ecca30fd2361396!2sGomel%2C%20Belarus!5e0!3m2!1sen!2sil!4v1664155329582!5m2!1sen!2sil", year:"2006", country:"Belarus", city:"Gomel" };


const maps2 = [jerusalem, karmiel, gomel];
const tablerwd = document.querySelector(".rwd-table");

console.log(tablerwd);
for (let a of maps2) {
	const tr = document.createElement("tr")
	tr.innerHTML = `
	<td id=${a.city} data-th="City">${a.city}</td>
	<td data-th="Country">${a.country}</td>
	<td data-th="Year">${a.year}</td>
	  `;
    tablerwd.appendChild(tr);
}

function change() {
	if (mapCount < maps2.length - 1) {
		mapCount++;
		console.log(maps2.length);
		var map = document.getElementById("map");
		map.src = maps2[mapCount].link;
		mapBtnBack.removeAttribute('disabled');
	} else {
		mapBtn.setAttribute('disabled', 'disabled');
	}
}

function changeback() {
	if (mapCount > 0) {
		mapCount--;
		var map = document.getElementById("map");
		map.src = maps2[mapCount].link;
		mapBtn.removeAttribute('disabled');
	} else {
		mapBtnBack.setAttribute('disabled', 'disabled');
		
	}
}

function btncheck() {
	if (mapCount == 0) {
		mapBtnBack.setAttribute('disabled', 'disabled');
	};
	if (mapCount == maps2.length - 1) {
		mapBtn.setAttribute('disabled', 'disabled');
	};
}

mapBtn.addEventListener('click', btncheck);
mapBtnBack.addEventListener('click', btncheck);


//============== F E T C H ====================


fetch(`https://api.github.com/users/uxzh`)
  .then(response => {
  console.log(response)
  return response.json()
})
  .then(profile => {
    let img = document.getElementById('github__image');
      img.src = profile.avatar_url;
      img.className = "avatar";
	let name = document.getElementById('github__name');
	  name.innerHTML = profile.login;
	  name.className = "github__name"
	let repos = document.getElementById('github__repos');
	  repos.innerHTML = profile.public_repos;
	  repos.className = "github__repos"
	let link = document.getElementById('github__link');
	  link.setAttribute("href", profile.html_url);
	  link.className = "github__link"
	let bio = document.getElementById('github__bio');
	  bio.innerHTML = profile.bio;
	  bio.className = "github__bio"
  })
  .catch(er => alert("The fetch error is: " + er.message));
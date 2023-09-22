
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
};

window.onload.clean = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('middleNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthMonthOutput').innerText = '';
    document.getElementById('birthDayOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
};

document.getElementById('btnGeneration').addEventListener('click', window.onload);
document.getElementById('btnClean').addEventListener('click', window.onload.clean);

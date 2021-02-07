const dataSkill = {
    professional: [
        { nama: "Interpersonal & Communication", persen: "85%" },
        { nama: "Problem Solving", persen: "65%" },
        { nama: "Critical thinking", persen: "75%" },
        { nama: "Sensitivity", persen: "90%" },
        { nama: "Teamwork", persen: "80%" },
    ],
    software: [
        { nama: "Adobe Photoshop", persen: "60%" },
        { nama: "CorelDraw", persen: "80%" },
        { nama: "Figma", persen: "70%" },
        { nama: "Adobe XD", persen: "65%" },
    ],
    code: [
        { nama: "HTML, CSS, JavaScript", persen: "75%" },
        { nama: "Bootstrap", persen: "75%" },
        { nama: "Java", persen: "60%" },
        { nama: "C/C++", persen: "55%" },
        { nama: "ReactJS", persen: "60%" },
        { nama: "MySQL", persen: "65%" },
        { nama: "OOP", persen: "65%" },
    ],
};

export const skill = (state = dataSkill, action) => {
    return state;
};
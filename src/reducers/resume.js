const dataResume = {
    education: [{
        jurusan: "Electrical Engineering",
        sekolah: "Politeknik Negeri Malang",
        tahun: "2015-2018",
    }, ],
    work: [{
            perusahaan: "PT PJB UP Muara Karang",
            jabatan: "Control & Instrument Engineer Intern",
            lama: "Aug 2017- Sep 2017",
        },
        {
            perusahaan: "PT Triple One Global Indonesia",
            jabatan: "Backend Developer Intern",
            lama: " Nov 2020- Dec 2020",
        },
    ],
    testimoni: [{
            nama: "Gondal",
            pendapat: "Fantastic Baby !",
            perusahaan: "PT Goyang atas",
            foto: "kosong",
        },
        {
            nama: "Gandul",
            pendapat: "Unexpected skills ! Good job !",
            perusahaan: "PT Goyang bawah",
            foto: "kosong",
        },
        {
            nama: "Erosenin",
            pendapat: "Hai ! He know what to do for the best of us!",
            perusahaan: "PT Gunung Myoboku",
            foto: "kosong",
        },
    ],
    quotes: "Never give up till the end!",
    quotesmaker: "Me",
};

export const resume = (state = dataResume, action) => {
    return state;
};
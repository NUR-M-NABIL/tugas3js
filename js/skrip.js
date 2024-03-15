function dataPersen() {
    let nama = document.getElementById('frm').nama.value;
    let pekerjaan = document.getElementById('frm').pekerjaan.value;
    let hobby = document.getElementById('frm').hobby.value;
    let input = '<br> ' + nama + '<br> '+pekerjaan + '<br> '+hobby;
    let no_input = 'isi terlebih dahulu yang kosong';
    let hasil = (nama && pekerjaan && hobby !='') ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;


    //tugasnya adalah melengkapi kode berikut dan tampilkan hasilnya ada pada HTML
    //1. isian nama
    //2. isian pekerjaan
    //3. isian Hobby
}
function FungsiEdit()
{
    document.getElementById("profile").style.display="none";
    document.getElementById("form-edit").style.visibility="visible";
}

function FungsiSubmit()
{
    var nama = document.getElementById("nama").value;
    var jabatan = document.getElementById("jabatan").value;
    var ava = document.getElementById("ava").value;
    var usia = document.getElementById("usia").value;
    var lokasi = document.getElementById("lokasi").value;
    var peng = document.getElementById("peng").value;
    var email = document.getElementById("email").value;

    document.getElementById("d_nama").innerHTML = nama;
    document.getElementById("d_jabatan").innerHTML = jabatan;
    document.getElementById("d_ava").innerHTML = ava;
    document.getElementById("d_usia").innerHTML = usia;
    document.getElementById("d_lokasi").innerHTML = lokasi;
    document.getElementById("d_peng").innerHTML = peng;
    document.getElementById("d_email").innerHTML = email;
    
    document.getElementById("profile").style.display="block";
    document.getElementById("form-edit").style.visibility="hidden";
}

function FungsiKonfirmasi()
{
    var cek_huruf = /^[a-zA-Z\s]*$/;
    var cek_angka = /^[0-9]*$/;
    var cek_email = /[\w]+@[a-z.]+/;

    var nama = document.getElementById("nama").value;
    console.log(cek_huruf.test(nama));
    var jabatan = document.getElementById("jabatan").value;
    console.log(cek_huruf.test(jabatan));
    var ava = document.getElementById("ava").value;
    console.log(cek_huruf.test(ava));
    var usia = document.getElementById("usia").value;
    console.log(cek_angka.test(usia));
    var lokasi = document.getElementById("lokasi").value;
    console.log(cek_huruf.test(lokasi));
    var peng = document.getElementById("peng").value;
    console.log(cek_angka.test(peng));
    var email = document.getElementById("email").value;
    console.log(cek_email.test(email));

    a = cek_huruf.test(nama);
    b = cek_huruf.test(jabatan);
    c = cek_huruf.test(ava);
    d = cek_angka.test(usia);
    e = cek_huruf.test(lokasi);
    f = cek_angka.test(peng);
    g = cek_email.test(email);
    if (a == true) {
        if (b == true) {
            if (c == true) {
                if (d == true) {
                    if (e == true) {
                        if (f == true) {
                            if (g == true) {
                                alert("Berhasil Edit");
                                FungsiSubmit();
                            } else {
                                alert("Inputan Email Hanya Email");
                            }
                        } else {
                            alert("Inputan Pengalaman Hanya Angka");
                        }
                    } else {
                        alert("Inputan Lokasi Hanya Huruf");
                    }
                } else {
                    alert("Inputan Usia Hanya Angka");
                }
            } else {
                alert("Inputan Availability Hanya Huruf");
            }
        } else {
            alert("Inputan Jabatan Hanya Huruf");
        }
    } else {
        alert("Inputan Nama Hanya Huruf");
    }
}




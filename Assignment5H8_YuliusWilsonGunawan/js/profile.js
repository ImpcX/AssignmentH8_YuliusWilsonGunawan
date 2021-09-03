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




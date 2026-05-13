document.body.appendChild(createInput('x'))
document.body.appendChild(createInput('y'))
document.body.appendChild(buatKotak('hasil','green','32px'))
document.body.appendChild(buatKotak('history','blue','20px'))


document.body.appendChild(buatTombol('tambah','+'))
document.body.appendChild(buatTombol('kurang','-'))
document.body.appendChild(buatTombol('kali','x'))
document.body.appendChild(buatTombol('bagi','/'))
document.body.appendChild(buatTombol('mod','%'))
document.body.appendChild(buatTombol('hapusHistory','hapus history'))
document.body.appendChild(buatTombol('hapusInput','hapus input'))



function createInput(id) {
    let input = document.createElement('input');
    input.setAttribute('id',id);
    input.setAttribute('type','number');
    return input
}

function buatTombol(id,text) {
    let button = document.createElement('button');
    button.setAttribute('id',id);
    button.setAttribute('style','margin:5px;padding:10px;cursor:pointer;background-color:#45919d;color:white;');
    button.innerHTML = text;
    return button;  
}

function buatKotak(id,warna,tinggi) {
    let div = document.createElement('div');
    div.setAttribute('id',id);
    div.setAttribute('style',`margin:10px;padding:10px;background-color:${warna};color:white;font-size:${tinggi}`);
    return div;  
}

function hitung(op,x,y){
    if(op==='+') return x+y;
    if(op==='-') return x-y;
    if(op==='x') return x*y;
    if(op==='/') return y==0 ? "tidak bisa bagi 0" : x/y;
    if(op==='%') return x%y;
}


function ambilNilai(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;

    if(!x || !y){
        document.getElementById("hasil").innerHTML = 'input harus diisi';
        return null;
    }

    if(isNaN(x) || isNaN(y)){
        document.getElementById("hasil").innerHTML = 'harus angka';
        return null;
    }

    return {x:Number(x), y:Number(y)};
}

function tampilkan(op){
    let data = ambilNilai();
    if(!data) return;

    let hasil = hitung(op,data.x,data.y);

    document.getElementById("hasil").innerHTML = hasil;

    document.getElementById("history").innerHTML += 
        `<p>${data.x} ${op} ${data.y} = ${hasil}</p>`;
}

document.getElementById('tambah').onclick = ()=> tampilkan('+');
document.getElementById('kurang').onclick = ()=> tampilkan('-');
document.getElementById('kali').onclick   = ()=> tampilkan('x');
document.getElementById('bagi').onclick   = ()=> tampilkan('/');
document.getElementById('mod').onclick    = ()=> tampilkan('%');

document.getElementById('hapusHistory').onclick = ()=>{
    document.getElementById("history").innerHTML = '';
}

document.getElementById('hapusInput').onclick = ()=>{
    document.getElementById("x").value = '';
    document.getElementById("y").value = '';
}
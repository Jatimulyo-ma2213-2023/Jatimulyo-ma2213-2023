let url ="https://api.openweathermap.org/data/2.5/weather?q=JATI%20MULYO&appid=6690fa214e4146088bb8f1946c21cfad&units=metric" //API

let url1 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRwm5HHkOTza7JoJSMd8xTKQNALTm4lKy4xaMEOG8nMxvu7U5dA3c93ZlqDxiskBsuN9nl6l_v8HSS2/pub?gid=0&single=true&output=csv" //umur

let url2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRe3saRSYjV7C_G2UTaZgsI2_JPKDZkEoVyyobcU51nyyFPiXVdHKRy3Pdd7VNQ4IjrkV_XkWez0--U/pub?output=csv" //Pekerjaan

let url3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTSvYV5_m73V6MgAT3z7xh38gMoP3JjkmB_Dva093e6dW_beUjqkR1sFAO5wqmMvSTSGMd57ReiBap5/pub?gid=0&single=true&output=csv" //Pendidikan

let url4 ="https://docs.google.com/spreadsheets/d/e/2PACX-1vT8Hyek-jodPh_Nv5yMVBNRH8Yg-LRg4D6jWVmdbhsIZ2gpKLpBuJnTHTSRtCN8M2jU-wE7TqYI0mjY/pub?gid=0&single=true&output=csv" //Jeniskelamin

let url5 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCoG8zCVJAqfbJE6xc1b-zowq7iF4JDAOqoV10y5Q7uW2EvHBeQ9zLF6IwalmPCwd9FZFd7nosKp68/pub?gid=0&single=true&output=csv" //Agama

let dataAPI;
let diagramUmur;
let diagramPekerjaan;
let diagramPendidikan;
let diagramJeniskelamin;
let diagramAgama ;
let bagan;
let profil;
let itera;
let f1;
let f2;
let lamsel;
let mtk;
let struktur;
let latar;

function preload(){
  dataAPI = loadJSON(url);
  diagramUmur = loadTable(url1, 'csv', 'header');
  diagramPekerjaan = loadTable(url2, 'csv', 'header');
  diagramPendidikan = loadTable(url3, 'csv', 'header');
  diagramJeniskelamin = loadTable(url4, 'csv', 'header');
  diagramAgama = loadTable(url5, 'csv', 'header');
  f1 = loadFont('f1.otf');
  f2 = loadFont('f2.otf');
  bagan = loadImage('Bagan.jpg');
  profil = loadImage('Profil.jpg');
  lamsel =loadImage('lamsel.png');
  itera =loadImage('ITERA.png');
  mtk = loadImage('mtk.png')
  bg=loadImage('bg.jpg')
  struktur=loadImage('struktur.png')
  latar=loadImage('latar.png')

}

function API(a, b, data){
  fill('white')
  noStroke()
  textFont(f1)
  textSize (25)
  text ('"Informasi Cuaca"',25,520)
  textFont(f2)
  textSize (15)
  text(data.name,30,580)
  textSize(20)
  text(data.main.temp +" °c",30,610);
  textSize(15)
  text('Weather',30,650)
  textSize (20)
  text(data.weather [0].main,30,680)
  textSize(15)
  text('Wind Speed',30,720)
  textSize (20)
  text(data.wind.speed +" km/h ",30 ,750)
  textSize(15)
  text('Humidity',30,790)
  textSize (20)
  text (data.main.humidity + " % ",30,820)
}

function setup() {
  createCanvas(1600,5560);
  let div = createDiv();
  div.id('maps')
  div.style('height', '400px');
  div.style('width', '400px');
  div.position(1110, 3000);  
}
let penduduk2022 = [1703, 1856, 1227, 2562,1603, 1255, 1226,1949,2108,2353,1311,1341] //per dusun

function draw() {
  background('	#F0F8FF')
  
  image(latar,25,520,75,75)

  //bagian logo
  image(bg,0,0,1600,870);
  image(lamsel,620,40,400,550);
  image(itera,1400,25,70,70);
  image(mtk,1500, 25,70,70);

  //BAGIAN ATAS
  fill('black');
  textFont(f1);
  textSize(50);
  text("Dashboard",670,80);

  //tanggal, waktu dll
  API (0, 0, dataAPI, 500/20)
  fill("red");
  noStroke();
  textSize(40);
  var currentYear = year();
  var currentMonth = month();
  var currentDay = day();
  var currentHour = hour();
  var currentMinute = minute();
  var currentSecond = second();
  var currentDate = currentDay + '/' + nf(currentMonth, 2) + '/' + nf(currentYear, 2);
  var currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);
  text(currentDate, 1200, 770);//tanggal
  textSize(25);
  text(currentTime, 1200,800);//waktu

  
  //SEJARAH DESA
  fill("	#ADD8E6")
  rect(0,920,1600,350)
  textSize(30)
  textFont(f1)
  fill('black')
  text("Profil dan sejarah desa Jati Mulyo",700,955)
  image(profil,0,985,370,270);
  textSize(20)
  textFont(f2)
  text("Pada zaman dahulu, Desa Jati Mulyo adalah berbentuk hutan. Menurut cerita / narasumber yang ditemui / saksi hidup,",440,1005)
  text("konon penduduk desa ini berasal dari eks kontrak perkebunan Kedaton dan sebagian lagi berasal dari Pulau Jawa yaitu",440,1035)
  text("dari Yogyakarta, Jawa Tengah, dan Jawa Barat.", 440, 1065)
  text("Menurut sejarah, desa ini diperkirakan dihuni sejak 1910 dengan kondisi pada waktu itu ekonomi masyarakat tidak",440,1095)
  text("menentu, sehingga penduduknya pun belum banyak yang menetap (sering berpindah-pindah). Baru sekitar tahun 1920,",440,1125)
  text("berdirilah Desa Jati Mulyo yang memisahkan diri dari Kedaton dengan Kepala Desa yang pertama yaitu Bapak SOIKROMO.",440,1155)
  text("Desa Jati Mulyo berlokasi di Kecamatan Jati Agung, yang terletak 7  Km ke arah Barat dari  ibukota kecamatan.",440,1185)
  text("Desa Jati Mulyo mempunyai luas wilayah seluas 12.234 hektare.",440,1215)

  //GAMBAR STRUKTUR
  image(struktur, 630,4920,600,600);
  
  //DIAGRAM BATANG DUSUN
  let dusun = ['Dusun 1A','Dusun 1B','Dusun 1C','Dusun 1D','Dusun 2A','Dusun 2B','Dusun 2C','Dusun 2D','Dusun 3','Dusun 4','Dusun 5A','Dusun 5B' ]
  var warna = ['#DB7093','	#98FB98','	#800080','	#DA70D6','#FFA500','	#800000','	#808080','#FFFACD','	#7FFFD4','	#800080','	#FFD700','#778899']
  var maxBar = max(penduduk2022);
  var w = 35
  for (var i = 0; i < penduduk2022.length; i++) {
    fill(warna[i])
    var dat = map(penduduk2022[i], 0, maxBar, 0, 200)
    rect(i*w,4800 - dat, w, dat)
    textFont(f2)
    textSize(7)
    fill('black')
    text(penduduk2022[i],i*w, 4795-dat)
    text(dusun[i],i*w,4820)
  }

  //KETERANGAN DIAGRAM BATANG
  textAlign(LEFT);
  textFont(f1)
  textSize(20)
  text('Diagram Kependudukan tahun 2021',0,4540)
  textFont(f2)
  text('Berdasarkan diagram batang kependudukan tahun 2022 di samping, Desa Jati Mulyo Kec. Jati Agung ',440,4710)
  text('terdiri dari 12 dusun, dengan penduduk terbanyak yaitu Dusun 1D dengan jumlah 2.562 jiwa. Sedangkan dusun paling',440,4740)
  text('sedikit penduduknya yaitu Dusun 2C dengan jumlah 818 jiwa. Dusun lainya yaitu Dusun 1 berjumlah 1.226 jiwa,',440,4770)
  
  sudut1 = diagramUmur.getColumn('umur')
  diagram1(200, sudut1);
  sudut2 = diagramPekerjaan.getColumn('pekerjaan')
  diagram2(200, sudut2);
  sudut3 = diagramPendidikan.getColumn('pendidikan')
  diagram3(200, sudut3);
  sudut4 = diagramJeniskelamin.getColumn('jeniskelamin')
  diagram4(200, sudut4);
  sudut5 = diagramAgama.getColumn('agama')
  diagram5(200, sudut5);

  //STRUKTUR PERANGKAT
  textSize(25)
  textFont(f1)
  text("A. Struktur Perangkat Desa Jati Mulyo",700,1320)
  image(bagan,140,1340,1290,600)

//KETERANGAN JUDUL
  text("B. Diagram Kependudukan Desa Jati Mulyo",0,2000)
  text ("C. Kepala desa yang pernah memimpin",700,4880)
  text("D. Peta wilayah", 0, 5550)
  
}


function diagram1(diameter, diagramUmur) {
  
  var warna = ['#5E421F','#FCEBB6','#78C0A8 ','	#F07818','	#F0A830 ', '#D8BFD8']
  let lastAngle = 0; 
  for (var i = 0; i < diagramUmur.length; i++) {
    fill(warna[i])
    
    arc( 185,2175,diameter,diameter,lastAngle,lastAngle + radians(sudut1[i]));
    lastAngle += radians(sudut1[i]);
  }
  textAlign(LEFT);
  fill(192,192,192,100)
  rect(0,2025,370,470)
  textSize(20)
  textFont(f1)
  fill('black')
  text("Diagram Umur",100,2050)
  textFont(f2)
  text("kurang dari 1 tahun = 474",10,2315)
  text("1 - ≤ 6 tahun       = 1.054",10,2340)
  text("6 - ≤ 1047 tahun = 2.379",10,2365)
  text("12 - ≤ 20 tahun   = 2.676",10,2390)
  text("20 - ≤ 45 tahun  = 6.477",10,2415)
  text("Lebih dari 45 tahun = 2.863",10,2440)
  
  fill(warna[0]) ;
  rect(300,2305,20,10);
  fill(warna[1]) ;
  rect(300,2330,20,10);
  fill(warna[2]) ;
  rect(300,2355,20,10);
  fill(warna[3]) ;
  rect(300,2380,20,10);
  fill(warna[4]) ;
  rect(300,2405,20,10);
  fill(warna[5]) ;
  rect(300,2430,20,10);

  
  fill(0)
  text('Berdasarkan diagram umur disamping, Desa Jati Mulyo Kec. Jati Agung memiliki angka ',440,2175)
  text("data umur paling tinggi di usia 20-45 tahun yaitu sebanyak 6.477 jiwa. Sedangkan usia yang",440,2205)
  text("memiliki jumlah penduduk paling rendah yaitu kisaran usia kurang dari 1 tahun. Pada usia",440,2235)
  text("1-6 tahun sebanyak 1.074 jiwa, usia 6-12 tahun sebanyak 2.379 jiwa, 12-20 tahun sebanyak",440,2265)
  text("2.676 jiwa dan diatas 45 tahun sebanyak 2.863 jiwa.",440,2295)
  


}

function diagram2(diameter, diagramPekerjaan) {
  var warna = ['#173F5F','#20639','	#3CAEA3 ','	#F6C55C','#ED553B ', '#5E412F','#9BAADD','	#FA364A']
  let lastAngle = 0; 
  for (var i = 0; i < diagramPekerjaan.length; i++) {
    fill(warna[i])
    arc(185,2675,diameter,diameter,lastAngle,lastAngle + radians(sudut2[i]));
    lastAngle += radians(sudut2[i]);
  }
  fill(192,192,192,100)
  rect(0,2525,370,470)
  textSize(20)
  textFont(f1)
  fill('black')
  text("Diagram Pekerjaan",60,2550)
  textFont(f2)
  text("Petani       = 2165",10,2815)
  text("Buruh      = 2067",10,2840)
  text("Pedagang  = 597",10,2865)
  text("PNS/Abri = 328",10,2890)
  text("Karyawan Swasta = 682",10,2915)
  text("Wiraswasta = 1546",10,2940)
  text("Pensiunan    = 439",10,2965)
  text("Lain-lain     = 4227",10,2990)
  fill(warna[0]);
  rect(300,2805,20,10);
  fill(warna[1]);
  rect(300,2830,20,10);
  fill(warna[2]);
  rect(300,2855,20,10);
  fill(warna[3]);
  rect(300,2880,20,10);
  fill(warna[4]);
  rect(300,2905,20,10);
  fill(warna[5]);
  rect(300,2930,20,10);
  fill(warna[5]);
  rect(300,2955,20,10);
  fill(warna[6]);
  rect(300,2980,20,10);
  
  fill(0)
  text('Karena Desa Jati Mulyo merupakan desa pertanian, maka sebagian besar  penduduknya bermata pencaharian',440,2675)
  text("sebagai petani yaitu sebanyak 2.165 jiwa. Selain itu, ada yang berprofesi sebagai buruh sebanyak 2.064 jiwa,",440,2705)
  text("wiraswasta sebanyak 1.546 jiwa, karyawan swasta sebanyak 682 jiwa, pedagang sebanyak 597 jiwa, pensiunan sebanyak",440,2735)
  text('439, dan PNS sebanyak 328 jiwa.',440,2765)

}

function diagram3(diameter, diagramPendidikan) {
  var warna = ['#8B0000','	#FF0000','	#B22222','	#DC143C','#CD5C5C ', '	#F08080','	#E9967A']
  let lastAngle = 0;
  for (var i = 0; i < diagramPendidikan.length; i++) {
    fill(warna[i])
    arc(185,3175,diameter,diameter,lastAngle,lastAngle + radians(sudut3[i]));
    lastAngle += radians(sudut3[i]);
  }
  fill(192,192,192,100)
  rect(0,3025,370,470)
  textSize(20)
  textFont(f1)
  fill('black')
  text("Diagram Pendidikan",60,3050)
  textFont(f2)
  text("Tidak pernah sekolah = 571",10,3320)
  text("Belum sekolah           = 1.907",10,3345)
  text("Tidak /belum  tamat SD = 1.557",10,3370)
  text("Tamat SD/sederajat     = 5.187",10,3395)
  text("Tamat SLTP/sederajat = 3.126",10,3420)
  text("Tamat SMU/ sederajat = 3.139",10,3445)
  text("Perguruan tinggi/sederajat = 888",10,3470)

  fill(warna[0]) ;
  rect(300,3305,20,10);
  fill(warna[1]) ;
  rect(300,3330,20,10);
  fill(warna[2]) ;
  rect(300,3355,20,10);
  fill(warna[3]) ;
  rect(300,3380,20,10);
  fill(warna[4]) ;
  rect(300,3405,20,10);
  fill(warna[5]) ;
  rect(300,3430,20,10);
  fill(warna[6]) ;
  rect(300,3455,20,10);

  
  fill(0)
  text('Berdasarkan diagram pendidikan di samping, Desa Jati Mulyo Kec. Jati Agung memiliki',440,3175)
  text("angka paling tinggi di tamat SD/sederajat yaitu sebanyak 5.186 jiwa. Sedangkan penduduk yang",440,3205)
  text("tidak pernah sekolah sebanyak 571 jiwa, belum sekolah 1.907 jiwa, tidak/belum tamat SD 1.557 jiwa,",440,3235)
  text('tamat SLTP/sederajat 3.126 jiwa, tamat SMU/sederajat 3.139 jiwa, tamat perguruan tinggi/sederajat 888 jiwa.',440,3265)
  
}

function diagram4(diameter, diagramJeniskelamin) {
  var warna = ['#FF4500','#D2691E']
  let lastAngle = 0; 
  for (var i = 0; i < diagramJeniskelamin.length; i++) {
    fill(warna[i])
    arc(185,3675,diameter,diameter,lastAngle,lastAngle + radians(sudut4[i]));
    lastAngle += radians(sudut4[i]);
  }
  fill(192,192,192,100)
  rect(0,3525,370,470)
  fill('black')
  textSize(20)
  textFont(f1)
  text("Diagram Jenis Kelamin",50,3550)
  textFont(f2);
  text("Laki-Laki   = 8234",10,3945);
  text("Perempuan  = 7632",10,3970);
  fill(warna[0]) ;
  rect(300,3935,20,10);
  fill(warna[1]) ;
  rect(300,3960,20,10);
  
  fill(0)
  text('Berdasarkan diagram jenis kelamin di samping, Desa Jati Mulyo Kec. Jati Agung memiliki',440,3675)
  text("jumlah penduduk dengan jenis kelamin laki-laki lebih tinggi dibandingkan dengan ",440,3705)
  text('perempuan, yaitu laki-laki sebanyak 8.234 jiwa dan perempuan sebanyak 7.632 jiwa.',440,3735)
}

function diagram5(diameter, diagramAgama) {
  var warna = ['#f67e7d ','#ffb97','	#843b62 ','	#621940 ', '#FFD700'];
  let lastAngle = 0;
  for (var i = 0; i < diagramAgama.length; i++) {
    fill(warna[i])
    arc(185,4175,diameter,diameter,lastAngle,lastAngle + radians(sudut5[i]));
    lastAngle += radians(sudut5[i]);
  }
  fill(192,192,192,100)
  rect(0,4025,370,470)
  fill('black')
  textFont(f1)
  text("Diagram Agama",85,4050)
  textFont(f2)
  text("Islam     = 15189",10,4390)
  text("Kristen  = 50",10,4415)
  text("Katolik  = 413",10,4440)
  text("Hindu   = 0",10,4465)
  text("Buddha = 16",10,4490)
  
  fill(warna[0]) ;
  rect(300,4380,20,10);
  fill(warna[1]);
  rect(300,4405,20,10);
  fill(warna[2]);
  rect(300,4430,20,10);
  fill(warna[3]) ;
  rect(300,4455,20,10);
   fill(warna[3]) ;
  rect(300,4480,20,10);
  
  fill(0)
  text('Berdasarkan diagram agama di samping, Desa Jati Mulyo Kec. Jati Agung terdiri dari ',440,4175)
  text("berbagai macam agama, sebagian besar penduduknya beragama Islam yaitu sebanyak 15.189",440,4205)
  text("jiwa. Sedangkan penduduk yang lain yang menganut agama Kristen sebanyak 50 jiwa,",440,4235)
  text('Khatolik 413 jiwa, Hindu 0 jiwa, dan Buddha 16 jiwa.',440,4265)
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 1000 && mouseY > 0 && mouseY < 900) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
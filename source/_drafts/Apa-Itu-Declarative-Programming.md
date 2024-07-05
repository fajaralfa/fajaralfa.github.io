---
title: Apa Itu Declarative Programming?
tags:
---

## Apa Itu Deklaratif Programming?

Deklaratif programming adalah gaya pemrograman yang _"menjelaskan sesuatu yang ingin dibuat"_. Beda dengan imperatif, dimana kita menyusun prosedur untuk membuat sesuatu.

Untuk lebih jelasnya kita bisa lihat contoh berikut:

{% codeblock lang:js 'Contoh Imperatif' %}
const h1 = document.createElement('h1')
h1.innerText = 'Belajar SolidJS'
const header = document.querySelector('#header')
header.append(h1)
{% endcodeblock %}

{% codeblock lang:html 'Contoh Deklaratif' %}
<div id="header">
    <h1>Belajar SolidJS</h1>
</div>
{% endcodeblock %}

Penjelasan contoh kode imperatif: 
1. membuat objek elemen dengan menggunakan function createElement
2. properti innerText di objek elemen tersebut diisi dengan teks 'Belajar SolidJS'.
3. Lalu selanjutnya memilih elemen dengan id header dengan querySelector
4. terakhir menambahkan objek h1 ke dalam elemen header yang telah dipilih.

Penjelasan contoh kode deklaratif:
1. Membuat elemen dengan id header dan
2. Elemen header diisi dengan h1 dan teks 'Belajar SolidJS'

Walaupun penjelasannya agak berbelit, tapi semoga bisa dimengerti perbedaan antara deklaratif dan imperatif. Intinya, pemrograman deklaratif bisa mempermudah dan mempercepat pengembangan aplikasi web yang menggunakan javascript karena kode yang kita buat lebih ringkas dan to the point.

Pertanyaan yang mungkin menarik:
- Apakah html adalah bahasa deklaratif?
iya, Coba searching aja.
- Kalau html deklaratif kenapa masih pakai library UI?
Karena html tidak bisa membuat UI yang dinamis, yang tampilannya berubah - ubah sesuai dengan data yang diberikan, html tidak bisa membuat loop, dll. JavaScript tanpa library bisa, tapi programnya terlalu verbose seperti contoh diatas.

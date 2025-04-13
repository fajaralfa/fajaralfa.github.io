---
title: Belajar Struktur Data dan Algoritma
date: 2024-07-03 23:24:44
tags:
description:
---


Halo semuanya,
kali ini kita akan belajar struktur data dan algoritma.

Struktur data dan algoritma menjadi salah satu ilmu penting dalam _computer science_. Walaupun kebanyakan programmer jarang membuat struktur data dan algoritma dari awal karena kebanyakan bahasa pemrograman sudah menyediakan struktur data, pemahaman pada hal ini bisa membantu melatih kita dalam menyelesaikan suatu masalah, juga dapat membuat kita menjadi programmer yang lebih efisien dan lebih baik dalam pemilihan teknik yang digunakan.

Pada artikel ini saya akan membahas apa itu struktur data dan algoritma, dan juga memberikan beberapa contoh struktur data dan algoritma yang sering digunakan oleh programmer.
Lalu artikel selanjutnya insya allah saya akan membuat implementasi dari semua struktur data yang ada di contoh ini satu per satu menggunakan bahasa pemrograman C.

_Catatan: Artikel ini ditujukan untuk yang sudah mengerti konsep - konsep pemrograman, seperti variable, statement, expresion, looping, function, pointer, struct / class, dan lain - lain._
_Catatan Lagi: Artikel ini kemungkinan akan sering direvisi agar semakin mudah dipahami._


- [Apa Itu Algoritma?](#apa-itu-algoritma)
    - [Big O Notation](#big-o-notation)
- [Apa Itu Struktur Data?](#apa-itu-struktur-data)
    - [Array](#array)
    - [Linked List](#linked-list)
    - [Stack](#stack)
    - [Queue](#queue)
    - [Tree](#tree)
    - [Hash Table](#hash-table)

## Apa Itu Algoritma?

Algoritma adalah langkah - langkah yang dibuat secara tersusun dan bertujuan untuk memecahkan suatu masalah atau melakukan sesuatu.  Kita menggunakan algoritma dalam setiap aktivitas kita. Memasak, merakit PC, membakar ikan, semuanya menggunakan algoritma.

Dalam program komputer juga tidak berbeda, algoritma digunakan untuk memecahkan suatu masalah seperti untuk:

- menyimpan (insertion)
- mengurutkan (sorting)
- mencari (searching)
- menghapus (deletion)
- mengubah (updating)
- dan lain - lain.

> Kenapa insertion bukan inserting?
> saya tidak tahu :)

### Big O Notation

Ada beberapa notasi yang sering digunakan untuk mengukur tingkat efisiensi sebuah algoritma, yang paling populer adalah __"Big O Notation"__ (Big O). _Big O_ adalah notasi matematika yang mengukur kecepatan algoritma ketika jumlah inputnya berubah berdasarkan tahapan dan memori yang dibutuhkan untuk menjalankannya.

Contoh pengukuran _Big O_:
1. __O(n)__
Linear, jumlah tahapan atau memori algoritma akan bertambah seiring bertambahnya input.
Contoh:
    - Perulangan untuk menampilkan semua elemen di sebuah array, tahapan yang dilalui akan bertambah sesuai jumlah elemen array.
2. __O(n2)__
Eksponensial, jumlah tahapan atau memori algoritma akan bertambah secara eksponensial seiring bertambahnya input.
Contoh:
    - Mengurutkan elemen dalam array dari yang terkecil dengan cara melakukan perulangan dalam perulangan (selection sort, untuk lebih jelasnya silahkan google)
3. __O(log n)__
Logaritmik, jumlah tahapan atau memori algoritma akan bertambah tapi pertambahannya sedikit (intinya semakin besar input, semakin efisien)
Contoh:
    - Mencari elemen dalam sebuah array yang sudah terurut dimulai dari tengah array, lalu pindah ke tengah kiri atau kanan dan seterusnya.
4. __O(1)__
Konstan, jumlah tahapan akan tetap sebanyak apapun inputnya.
Contoh:
    - Menyimpan elemen di atas stack (tumpukan).

Kekurangan dari Notasi _Big O_ adalah notasi ini tidak peduli dengan faktor konstan. Misal, ada sebuah algoritma yang memiliki 20 prosedur ditambah satu prosedur iterasi (perulangan) elemen di sebuah array dengan panjang 100 elemen. Notasinya bisa kita tulis dengan __O(n+20)__ (__n__ adalah jumlah elemen array, 20 adalah jumlah prosedur algoritma yaitu faktor konstannya). Notasi __O(n+20)__ dalam _Big O_ tidak lebih baik dari __O(n)__ karena _Big O_ hanya mengukur jumlah prosedur yang bertambah jika diberi input dengan jumlah yang bertambah.

## Apa Itu Struktur Data?

Struktur data adalah cara menyimpan dan mengatur data. Struktur data berfungsi untuk menyimpan data secara efisien. Setiap struktur data memiliki kelebihan dan kekurangan masing - masing. Pemilihan struktur data akan mempengaruhi tingkat kesulitan pengembangan dan performa sebuah sistem.

Berikut contoh struktur data yang sering digunakan:

### Array

Array adalah struktur data yang berisi elemen - elemen dengan tipe data yang sama, semua elemen disimpan di dalam satu blok memori yang berdekatan.

Ukuran dari sebuah array adalah statis, yaitu tidak berubah. Jadi jika kita membuat array dengan ukuran lima elemen, maka array tersebut bisa menyimpan maksimal lima elemen saja.

Elemen di array diakses menggunakan indeks, yaitu angka yang merepresentasikan posisi elemen tersebut. Index pada bahasa pemrograman (kecuali Lua) biasanya dimulai dari nol. Jadi jika kita ingin mengakses elemen pertama, maka kita harus mengaksesnya dengan angka nol. Begitupun elemen kedua, kita mengaksesnya dengan angka satu, dan seterusnya.

### Linked List

Linked list adalah struktur data yang setiap elemennya dihubungkan dengan pointer. Elemen di dalam linked list terdiri dari nilai yang disimpan dan pointer yang mengarah ke elemen selanjutnya.

Ukuran linked list adalah dinamis. Kita bisa menghubungkan berapapun elemen ke dalam linked list.

Cara mengakses elemen di linked list adalah dengan mengikuti pointer dari depan linked list, lalu mengarah ke elemen selanjutnya sampai ke elemen yang dicari.

### Stack

Stack adalah tumpukan.

Di dalam sebuah stack, elemen yang baru akan disimpan di bagian paling belakang stack. Lalu elemen yang akan diambil pertama juga adalah elemen paling belakang.

Jika kita ingin mengambil elemen depan, maka kita harus mengambil setiap elemen dari yang paling belakang sampai ke elemen yang dituju. Mirip seperti tumpukan :).

Konsep operasi di stack ini disebut Last In First Out (LIFO) (yang terakhir masuk adalah yang pertama keluar).

Stack bisa dibuat dengan ukuran statis atau dinamis.

Struktur data stack ini sering digunakan dalam pembuatan function. Setiap parameter, variabel, dan return address sebuah function disimpan didalam sebuah stack. Untuk lebih jelasnya kalian bisa belajar bahasa assembly, biar keren.

### Queue

Queue adalah antrian.

Dalam sebuah queue, data paling depan adalah data yang bisa diakses lalu baru ke data selanjutnya. Data yang baru akan disimpan di bagian paling belakang.

Konsep operasi di queue disebut First In First Out (FIFO).

Queue juga bisa dibuat dengan ukuran statis atau dinamis.

### Tree

adalah struktur data yang mirip linked list, setiap elemennya dihubungkan dengan pointer. Tapi tidak seperti linked list, pointer elemen tree dapat terhubung ke beberapa elemen.

Ukuran tree adalah dinamis. Kita bisa menghubungkan berapapun elemen ke dalam tree.

### Hash Table

adalah struktur data yang indexnya dibuat dari sebuah hash function.

Hash function adalah sebuah function yang memproses input menjadi angka random. Hash function akan menghasilkan output yang sama (tidak akan berubah) dengan input yang sama.

Elemen hash table akan disimpan di posisi indeks hasil dari hash function, yaitu angka random tersebut.
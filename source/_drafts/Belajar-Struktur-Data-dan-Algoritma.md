---
title: Struktur Data dan Algoritma
tags:
---

Halo semuanya,
kali ini kita akan belajar struktur data dan algoritma.

Struktur data dan algoritma menjadi salah satu ilmu penting karena kegunaannya dalam computer science. Walaupun kebanyakan programmer jarang membuat struktur data dan algoritma dari awal, pemahaman pada hal ini akan menjadikan kita programmer yang lebih baik. Selain untuk mengasah otak kita dalam menyelesaikan suatu masalah, juga dapat membuat kita menjadi programmer yang lebih efisien dan lebih baik dalam pemilihan teknik yang digunakan.

Di artikel ini saya akan membahas apa itu struktur data dan algoritma, dan juga memberikan beberapa contoh struktur data dan algoritma yang sering digunakan oleh programmer, baik secara langsung atau tidak langsung.

## Apa Itu Struktur Data?

Struktur data adalah cara menyimpan dan mengatur data. Struktur data berfungsi untuk menyimpan data secara efisien, baik dari waktu dan memori yang digunakan. Setiap struktur data memiliki kelebihan dan kekurangan masing - masing. Pemilihan struktur data akan mempengaruhi tingkat kesulitan pengembangan dan performa sebuah sistem.

## Apa Itu Algoritma?

Algoritma adalah langkah - langkah yang dibuat secara tersusun dan bertujuan untuk memecahkan suatu masalah atau melakukan sesuatu.  Kita menggunakan algoritma dalam setiap aktivitas kita. Memasak, merakit PC, membakar ikan, semuanya menggunakan algoritma.

Dalam program komputer juga tidak berbeda, algoritma digunakan untuk memecahkan suatu masalah seperti untuk mencari elemen dalam struktur data, memproses input, dan mengeluarkan output.

Ada beberapa notasi yang sering digunakan untuk mengukur tingkat efisiensi sebuah algoritma, yang paling populer adalah __"Big O Notation"__ (Big O). _Big O_ adalah notasi matematika yang mengukur kecepatan algoritma ketika jumlah inputnya berubah berdasarkan tahapan yang dibutuhkan untuk menjalankannya.

Contoh _Big O_:
1. __O(n)__ Linear, tahapan bertambah seiring bertambahnya input
2. __O(n2)__ Eksponensial, tahapan bertambah secara eksponensial seiring bertambahnya input
3. __O(log n)__ Logaritmik, tahapan berkurang berdasarkan suatu faktor input (intinya semakin besar input, semakin efisien)
4. __O(1)__ Konstan, tahapan tetap sebanyak apapun inputnya.

### Array

Array adalah struktur data yang berisi elemen - elemen dengan tipe data yang sama, semua elemen disimpan di dalam satu blok memori yang berdekatan.

Ukuran dari sebuah array adalah statis, yaitu tidak berubah. Jadi jika kita membuat array dengan ukuran lima elemen, maka array tersebut bisa menyimpan maksimal lima elemen saja.

Elemen di array diakses menggunakan indeks, yaitu angka yang merepresentasikan posisi elemen tersebut. Index pada bahasa pemrograman (kecuali lua) biasanya dimulai dari nol. Jadi jika kita ingin mengakses elemen pertama, maka kita harus mengaksesnya dengan angka nol. Begitupun elemen kedua, kita mengaksesnya dengan angka satu, dan seterusnya.

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
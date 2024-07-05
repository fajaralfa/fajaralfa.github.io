---
title: Belajar SolidJS
tags:
---

Pastikan sudah menguasai javascript.

## Apa Itu SolidJS?

SolidJS adalah library UI web deklaratif berbasis javascript. Library ini memiliki fitur seperti reactivity, jsx, binding, props, dan lain - lain. Fitur - fitur standarnya mirip seperti Library UI lain seperti React, Vue, dan Svelte.

Untuk API nya, SolidJS terinspirasi dari React. jadi jika kalian menguasai React, kalian akan cepat menguasai SolidJS. Tapi tidak seperti React, SolidJS diimplementasikan tanpa Virtual DOM tapi pakai DOM native javascript yang sudah dicompile dari template JSX nya. Hal ini membuat SolidJS menjadi sangat ringan karena tidak perlu runtime untuk VDOM dan juga menjadikan ini salah satu library UI javascript tercepat!

__Catatan dari orang rakus:__
_Rata - rata Library UI seperti SolidJS, React, Svelte, dan VueJS fungsinya kurang lebih sama, yaitu untuk mempermudah pengembangan UI. Saran saya untuk pemula belajarlah satu library UI saja, buat aplikasi dengan library tersebut, dan dalami sampai benar - benar mahir. Jika kalian sudah menguasai salah satu Library UI seperti yang disebutkan, maka kalian tidak perlu melihat tutorial lagi, kalian tinggal lihat dokumentasi karena konsep - konsep yang diterapkan sebenarnya mirip, cuma beda buzzword saja._

## Instalasi

Ada beberapa cara untuk menginstal solid, daftarnya ada di website officialnya.
Disini saya akan menggunakan nodejs npm dengan perintah:

{% codeblock lang:bash %}
npm create vite@latest my-app -- --template solid
{% endcodeblock %}

## Dasar

Di bagian ini kita akan bahas fitur inti dari SolidJS.

### JSX

JSX (JavaScript XML) adalah ekstensi sintaks javascript. JSX memungkinkan kita untuk menambahkan elemen HTML di javascript. Ini adalah salah satu alasan kenapa library ini disebut library ui deklaratif. elemen HTML yang ada di JSX disebut JSX expression (expression adalah sesuatu yang memiliki/mengembalikan nilai). JSX expression bisa disimpan dalam variabel, di kembalikan dari function, disimpan dalam JSX expression lain, disimpan dalam argumen, dan lain - lain. Sama seperti expression lain dalam pemrograman.

### Components

Component adalah function yang mengembalikan JSX. Component juga dapat diisi dengan logic lain seperti membuat variabel dan lain - lain. Sama seperti function biasa. Component di SolidJS hanya dieksekusi satu kali, jika ada perubahan data, maka hanya data tersebut yang dirubah, dan Componentnya tidak akan dieksekusi kembali tidak seperti react.

### Signal

Signal adalah variabel reaktif, artinya jika kita merubah data signal, maka semua tempat yang menggunakan signal tersebut datanya juga akan ikut berubah.

### Effects

Effect adalah pendengar perubahan signal. Jika data signal berubah, maka effect akan otomatis dijalankan kembali.

### Derived Signal

Function yang mengembalikan signal dengan data lain disebut derived signal, dan secara otomatis akan reaktif seperti signal biasa. Kita bisa menggunakan effect untuk mendengar perubahan derived signal seperti biasa.

### Memo

Masalah dari derived signal adalah jika ada signal yang berubah, dan banyak tempat yang menggunakan derived signal dengan signal tersebut, maka semua function tersebut akan terus dieksekusi dan akan terus mengevaluasi data yang baru.
Memo mirip seperti derived signal, tapi data yang baru akan dicache, jika ada effect yang menggunakan signal, maka effect tersebut akan menggunakan nilai yang sudah dicache.

## Control Flow
### Show
### For
### Index
### Switch
### Dynamic
### Portal
### Error Boundary

## Lifecycle
### onMount
### onCleanup

## Binding
### Events
### Style
### Classlist
### Refs
### Forwarding Refs
### Spreads
### Directives

## Props
### Default Props
### Splitting Props
### Children

## Store
### Nested Reactivity
### Create Store
### Mutation
### Context
### Immutable Store
### Without Context

## Customizing Reactivity
### Batching Updates
### Untrack
### On

## Async
### Lazy Components
### Resources
### Suspense
### Suspense List
### Transition

## Router
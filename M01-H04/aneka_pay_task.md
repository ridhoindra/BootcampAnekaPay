#### Instruksi
1. Simpanlah hasil pengerjaan andi di project bootcamp anda masing-masing dengan format directory: PENGAYAAN/M01-H04, namafile : PENGAYAAN_M01H01_sd_M01H04_NOMOR_1.tulis_extensinya
2. Silahkan kerjakan soal yang anda anggap paling mudah terlebih dahulu dan jangan lupa untuk dipahami jawaban yang anda tulis yaa.
3. Untuk yang task uraian, anda bisa menggunakan extensi .md, untuk cara penulisannya bisa dilihat dari sini : https://www.markdownguide.org/basic-syntax/ , atau boleh ditulis memakai identasi yang rapi 
4. Anda tidak boleh mencontek teman anda, tetapi anda boleh mencari dari internet.

#### Soal Praktik M01-H01 sd M01-H04
 1. Jelaskan kegunaan dan berikan fungsi-fungsi array javascript berikut ini : map, reduce, filter, sum, push, pop, unsift, shift .
 2. Buatlah sendiri fungsi untuk mengolah array dengan menggukan paradigma Functional Programming dari fungsi-fungsi yang disebutkan di soal nomor  1.
 3. Buatlah sebuah class yang berfungsi untuk mengolah array yang mengimplementasikan fungsi-fungsi dr soal nomor 1 ( disini kita akan mencoba membuat Functional Class Array dengan Class array kita sendiri dengan functional method yang sama ). sebagai contoh : 
 
 <code>  
	// example result task 3
	
	class MyArray{
		constructor(data){
		}
		// ini hasilnya bila jalankan akan sama dengan Array.reduce
		reduce(callback, def){ 
			return result
		}
		// write your other method
	}	
	
	// test myArray 
	var variableTest = [1,2,3,4];
	var reduceBuiltIn = variableTest.reduce(function(acc, c){return acc+c}, 0);
	var objMyArray = new MyArray(variableTest);
	var MyArrayReduce = objMyArray.reduce(function(acc, c){return acc+c}, 0)
	console.log('test compare MyArray.reduce : '+(reduceBuiltIn==MyArrayReduce)) // result test compare MyArray.reduce : true
	// buat sendiri test2 selanjutnya 
 </code>  
 
 4. Apa perbedaan dari fungsi import, require di javascript ? 
 5. Apa perbedaan, kelebihan dan kelebihan  dari masing-masing fungsi let, const, var, Map, Set, WeakMap, WeakSet di javascript ?
 6. Dijavscrit banyak sekali keanehan-keanehan/jebakan(pitfall) kode. Tugas anda : carilah sebanyak-banyaknya pitfall yang biasa terjadi dijavascript dan bagaimana solusinya masing-masing.
 7. di ES6 javascript ada istilah arrow function, function.
 8. Cari tahu apa itu typescript di dalam javascript dan apa kelebihannya ? 
 
 ##### Selamat Mengerjakan ^_^ ( kerjakan dan dipahami yaa )
 
 
    

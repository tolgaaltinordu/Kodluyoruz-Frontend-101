# Insertion Sort Projesi
## [22,27,16,2,18,6] -> Insertion Sort
1. Yukarıda verilen dizinin sort türüne göre aşamalarını yazınız. <br> <br>
   * İlk aşamada dizi içerisindeki bütün değerler taranarak en küçük değer tespit edildi ve dizinin ilk elemanıyla yeri değiştirildi. [2,27,16,22,18,6]
   * İkinci adımda, kalan elemanlar ($n$-1) içerisinde en küçük değer bulundu ve kalan elemanların ilkiyle yeri değiştirildi. [2,6,16,22,18,27]
   * Son olarak $n$-2 eleman sayısına sahip dizinin kalan bölümünde aynı işlem gerçekleşerek 18 ve 22 sayıları yer değiştirdi. [2,6,16,18,22,27] <br><br>

2. Big-O gösterimini yazınız.
    * $n$ + ($n$-1) + ($n$-2) + ... + 1 = $n$*($n$+1)/2 = ($n^2$+n)/2
    * Sonuca göre Big O Notation O($n^2$)'dir. <br> <br>
3. Time Complexity
    * Average case : O($n^2$) 
    * Worst case : O($n^2$)
    * Best case : O($n^2$) 
4. Dizi sıralandıktan sonra  18 sayısı hangi case kapsamına girer? Yazınız.  
    * 18 sayısı dizinin ortasında olduğundan Average Case kapsamına girer
---
## [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.
 1. [2,3,5,8,7,9,4,15,6] -> 2 ile 7 yer değiştirdi.
 2. [2,3,5,8,7,9,4,15,6] -> 3 sayısı $n$-1 eleman içerisinde en küçüğü olduğundan sabit kaldı.
 3. [2,3,4,8,7,9,5,15,6] -> 4 ile 5 yer değiştirdi.
 4. [2,3,4,5,7,9,8,15,6] -> 5 ile 8 yer değiştirdi.



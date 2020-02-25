
var today_obj=new Date()
var today_date=today_obj.getDate()
 
var tips=new Array()
//Configure the below variable to contain the "header" of the tip
var tiptitle='<img src="../../tip.png">'
 
//Configure the below array to hold the 31 possible tips of the month
tips[1]='<b>Herkes tarafından doğru kabul edilen şeyler büyük olasılıkla yanlıştır.</b><br /> Paul Valery'
tips[2]='<b>Başarının sırrını bilmiyorum ama başarızılığın yolu herkesi memnun etmeye çalışmaktan geçer.</b><br /> Bill Cosby'
tips[3]='<b>Bir araya gelmek bir başlangıçtır, beraberliği sürdürmek bir ilerleme. Beraber çalışmaksa gerçek başarıdır.</b><br /> Henry Ford'
tips[4]='<b>Akıllı adamlar söyleyecek sözleri olduğu için, aptallar illa konuşmak zorunda oldukları için konuşurlar.</b><br /> Plato'
tips[5]='<b>İyi olduğunuz için herkesin size adil davranmasını beklemek, vejetaryan olduğunuz için boğanın saldırmayacağını düşünmeye benzer.</b><br /> Dennis Wholey'
tips[6]='<b>Oyun bittiğinde Şah ve piyon aynı kutuya girer.</b><br /> İtalyan atasözü'
tips[7]='<b>Politika politikacılara bırakılmayacak kadar önemli bir konudur.</b><br /> Charles De Gaulle'
tips[8]='<b>Yaşlanarak değil yaşayarak tecrübe kazanılır, zaman insanları değil armutları olgunlaştırır.</b><br /> Peyami Safa'
tips[9]='<b>Tecrübe çok acımasız bir öğretmen; önce sınavı yapıyor, dersi sonra öğretiyor.</b><br /> Vernon Law'
tips[10]='<b>Teknoloji sayesinde insanlar, teknolojinin kendisi hariç her şeyi kontrol edebilecek güce sahip oldular.</b><br /> John Tudor'
tips[11]='<b>Erkek çocuk ile babası arasındaki tek fark oyuncaklarının fiyatıdır.</b><br /> Jurg Weber'
tips[12]='<b>İnsanın tüm evrende kesin olarak düzeltebileceği tek bir şey vardır: kendisi.</b><br /> Aldous Huxley'
tips[13]='<b>Bu dünyaya istediğimiz gibi gelmedik, bu dünyadan istediğimiz gibi gidemeyiz.</b><br /> Ömer Hayyam'
tips[14]='<b>Hedefi olmayan gemiye hiçbir rüzgar yardım edemez.</b><br /> Montaigne'
tips[15]='<b>Okul hayatımın eğitimime karışmasına izin vermedim.</b><br /> Mark Twain'
tips[16]='<b>Güzellik fazlalıktan arınmışlıktır.</b><br /> Michelangelo'
tips[17]='<b>Cevizin kabuğunu kırıp özüne inmeyen, cevizin hepsini kabuk zanneder.</b><br /> Gazali'
tips[18]='<b>Geçici bir güven uğruna temel özgürlüklerinden vazgeçenler, ne özgürlüğü hak ederler ne de güveni.</b><br /> Benjamin Franklin'
tips[19]='<b>Ne kadar çok insan, ne kadar az insaniyet var.</b><br /> Robert Zend'
tips[20]='<b>Gelecek, bugünden ona hazırlananlara aittir.</b><br /> Malcolm X'
tips[21]='<b>Olgun bir adamı dost edinmek isterseniz, eleştirin; basit bir adamı dost edinmek isterseniz methedin.</b><br /> Şeyh Said Şirazi'
tips[22]='<b>Bilgili bir ahmak, cahil bir ahmaktan daha çok ahmaktır.</b><br /> Moliere'
tips[23]='<b>Kaptanın ustalığı deniz durgunken anlaşılmaz.</b><br /> Lukianos'
tips[24]='<b>İdealler yıldızlara benzer.</b><br /> Onlara ulaşamazsınız, ama size yol gösterirler.<br /> Waldo Emerson'
tips[25]='<b>Dünyanın en güç işi bir şeyin nasıl yapılacağını bilirken, başka birinin nasıl yapamadığını ses çıkarmadan seyretmektir.</b><br /> Mevlana'
tips[26]='<b>Bilginin efendisi olmak için çalışmanın uşağı olmak şarttır.</b><br /> Honore de Balzac'
tips[27]='<b>Bir insanın hayatının ikinci yarısı, ilk yarıda kazanılan alışkanlıkların sürdürülmesinden ibarettir.</b><br /> Dostoyevski'
tips[28]='<b>Demokrasi, hakettiğimizden daha iyi yönetilmeyeceğimizi garanti eden bir sistemdir.</b><br /> George Bernard Shaw'
tips[29]='<b>İyi kararlar tecrübeden kaynaklanır.</b><br /> Tecrübeler ise kötü kararlardan.<br /> Barry LePatner'
tips[30]='<b>Uzman, dar bir alanda yapılabilecek tüm hataları yapmış kişiye denir.</b><br /> Niels Bohr'
tips[31]='<b>Gömleğin ilk düğmesi yanlış iliklenince, diğerleri de yanlış gider.</b><br /> C. Bruno'
 
// document.write(tiptitle)

document.getElementById("ozlu-1").innerHTML = tips[30-today_date];
document.getElementById("ozlu-2").innerHTML = tips[today_date+3];
// document.write(tips[today_date])
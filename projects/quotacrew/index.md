# QuotaCrew for Codex

> Codex hesapların, kalan kotaların ve devam eden işlerin tek pencerede. QuotaCrew ile kullanım limitini ve kota yenilenme zamanını gör, kullanılabilir hesabı bul, geçişi yönet ve Desktop ya da VS Code’daki uygun sohbete kaldığın yerden devam et.

Codex Account Manager, artık QuotaCrew for Codex.

[QuotaCrew: Codex Kota ve Hesap Yöneticisi | Erkan Pulat](https://erkanpulat.github.io/projects/quotacrew/)

Ücretsiz · Windows x64 · Python pakete dahil · Node.js gerekmez

## Codex hesap yönetimi ve kullanım kotası takibi.

### Codex kullanım limitleri tek bakışta

Beş saatlik ve haftalık kalan kotayı, yenilenme zamanlarını, etkin hesabını ve mevcut sıfırlama haklarını aynı tabloda karşılaştır. Hesapları ara, filtrele ve abonelik dönemi bilgisine göre sırala.

### Codex hesap değiştirme

Hesabı kendin değiştir, öneriyi onayla veya kullanılabilir hesaba otomatik geçişi aç. İzleme ve devam tercihlerini dilediğinde duraklat.

### Desktop ve VS Code’da devam

Kota nedeniyle kesilen uygun iş için aynı konuşmaya devam isteği gönderilir. Mevcut hedef, talimatlar ve bütçe korunur; Desktop hedefleri uygun olduğunda fazladan mesaj olmadan açılır.

### İşler ve etkinlik takibi

Çalışan, tamamlanan ve kota nedeniyle kesilen işleri gör. Son 50 hesap geçişini, devam isteğinin hazırlığını, gönderimini ve yeni turun gerçekten başlayıp başlamadığını incele.

### Çalışma düzenine uyum

Sistem tepsisinde izle, Windows ile başlat veya seçili iş bitince, kayıtlı hesapların doğrulanmış 5 saatlik kotaları tükenince ya da süre sonunda kapatma planla.

### Uygulama içinden güncelle

Yeni kararlı sürümü ve sürüm notlarını gör. Kurulu uygulama, paketi doğrular ve verilerini yedekleyerek güncellenir.

## Limit dolduğunda sohbetin kaybolmasın.

İzleme ve ilgili devam seçeneği açıkken QuotaCrew kota nedeniyle kesilen işi ve hedef hesabı yeniden kontrol eder. Geçişten sonra uygun Desktop hedef konuşmasını fazladan mesaj göndermeden açar; diğer desteklenen konuşmalara aynı sohbet içinde devam isteği gönderir ve yeni turun sonucunu İşler sayfasında takip eder.

Desktop ve IDE’de otomatik devam deneyseldir; kurulu Codex sürümünün bağlantı desteğine bağlıdır. Hesap ve konuşmalar geçiş sırasında yeniden kontrol edilir; işlem birkaç dakika sürebilir. Onay veya yanıt gereken adımlar sende kalır.

[Devam akışının ayrıntıları ↗](https://github.com/erkanpulat/codex-quotacrew/blob/main/docs/continuity.md)

## İşin nerede kaldığını bil.

İşler sayfasında konuşmayı, bağlı hesabı ve son kontrol zamanını birlikte gör. Yerel sohbetlerini proje, kaynak, başlık veya klasöre göre ara; ilgili projeyi editöründe aç.

## Editöründeki sohbette de devam et.

VS Code’da OpenAI Codex eklentisini kullan. QuotaCrew’de IDE’de devam seçeneğini aç; oturumun yenilenmesi gerekiyorsa VS Code’u yenile seçeneğini etkinleştir. Tek yerel pencere, kesilen konuşmanın çalışma klasörü ve aynı sohbetle yeniden açılır.

README’deki yapay zekâ ile hazırlanmış temsili görsel; canlı test ekranı değildir.

## Başlat, takip et, tamamla.

### Otomatik kapatma

Seçilen iş tamamlandığında, tüm kayıtlı hesapların limitleri dolduğunda veya 1–1440 dakika sonunda kapatma planla. İş ve limit koşulları doğrulandığında, başka iş çalışmıyorsa iki dakikalık iptal edilebilir geri sayım başlar. Süreli mod işlerin bitmesini beklemez.

### Doğrulanmış güncellemeler

Kurulu sürüm yeni kararlı yayınları kontrol eder. Sürüm notlarını inceleyip Güncelle’ye bas: paket boyutu ve SHA-256 doğrulanır, veriler yedeklenir ve QuotaCrew yeniden başlar. Taşınabilir sürüm elle güncellenir.

## QuotaCrew Windows kurulumu.

1. **İndir ve aç.** Son sürümden Windows kurulum paketini indir. Taşınabilir kullanım için ZIP’in tamamını bir klasöre çıkar ve QuotaCrew.exe dosyasını aç.
2. **Tercihlerini seç.** İlk açılış yardımcısında izleme, geçiş, devam ve tepsi seçeneklerini ayarla. Codex CLI eksikse onayınla resmî Windows kurulumunu başlatır.
3. **Hesaplarını ekle.** Hesaplarım → Hesap ekle bölümünden hesabına tanınabilir bir ad ver. Açılan terminal ve tarayıcıdaki girişi tamamla; istersen bağlantıyı başka tarayıcıya kopyala ama QuotaCrew hesabı doğrulayıncaya kadar terminali açık tut.

## Hesapların ve geçmişin cihazında.

Profiller, ayarlar ve takip kayıtları yerel olarak saklanır. QuotaCrew telemetri toplamaz; giriş bilgilerini kendi sunucusuna göndermez. Kurulum ve güncellemeler mevcut Codex sohbet geçmişini korur.

[Güvenlik ve veri saklama ↗](https://github.com/erkanpulat/codex-quotacrew/blob/main/SECURITY.md)

## Merak edilenler

### QuotaCrew nedir? Codex Account Manager ile aynı proje mi?

Evet. QuotaCrew for Codex, Codex Account Manager projesinin güncel adıdır. Codex hesapları, kullanım kotaları, hesap geçişi ve uygun konuşmalarda devam için geliştirdiğim ücretsiz, MIT lisanslı Windows uygulamasıdır.

### Codex kullanım limitleri ve kotaları nasıl takip edilir?

QuotaCrew, kayıtlı Codex hesaplarının beş saatlik ve haftalık kalan kotalarını, yenilenme zamanlarını ve etkin hesabını tek ekranda gösterir. Böylece hangi hesabın kullanılabilir olduğunu ve kota sıfırlanmasını bekleyip beklememen gerektiğini daha kolay görebilirsin.

### Codex kotam veya kullanım limitim dolunca ne olur?

QuotaCrew kota artırmaz ve Codex limitlerini değiştirmez. İzleme açıksa kota nedeniyle kesilen işi ve kullanılabilir hesabı gösterir; istersen başka bir hesaba geçişi yönetebilir ve desteklenen konuşmalar için devam isteği gönderebilirsin.

### Codex hesabı nasıl değiştirilir veya otomatik hesap geçişi nasıl açılır?

Hesabı elle değiştirebilir, QuotaCrew önerisini onaylayabilir veya kullanılabilir hesaba otomatik geçişi etkinleştirebilirsin. Geçişten önce hesap ve konuşma durumu kontrol edilir; kullanıcı onayı gereken adımlar atlanmaz.

### Codex kotası ne zaman sıfırlanır veya yenilenir?

Tek bir genel sıfırlama saati yoktur. Hesabındaki resmî kullanım ekranında veya Codex CLI içinde /status komutuyla ilgili beş saatlik ya da haftalık pencerenin yenilenme zamanını kontrol et. QuotaCrew bu bilgiyi hesaplarını karşılaştırırken görünür kılar; OpenAI limitini değiştirmez.

### Birden fazla Codex hesabı QuotaCrew ile yönetilebilir mi?

Evet. Hesaplarım bölümüne yetkili olduğun hesapları ekleyebilir, kalan kapasiteyi ve etkin hesabı aynı tabloda karşılaştırabilir, geçişi elle yapabilir veya uygun hesaba otomatik geçişi açabilirsin.

### QuotaCrew Windows’ta ücretsiz bir Codex uygulaması mı?

Evet. QuotaCrew ücretsiz, MIT lisanslı ve açık kaynaklı bir Windows x64 uygulamasıdır. Python pakete dahildir; Node.js kurman gerekmez. Windows paketleri kod imzalı değildir ve yayınlanan SHA-256 değerleriyle kontrol edilebilir.

### VS Code’da çalışıyor mu?

Yerel VS Code’da, OpenAI Codex eklentisiyle açılmış konuşmalar için deneysel devam sunar. İsteğe bağlı otomatik yenileme tek yerel pencereyi destekler. Remote, WSL, bulut ve başka cihazdaki konuşmalar bu kapsamda değildir.

### Kesilen her görev otomatik devam eder mi?

Her görev için garanti verilmez. İzleme ve ilgili devam seçeneği açık olmalı; kota kesintisi, kullanılabilir hesap ve konuşma bağlantısı doğrulanmalıdır. Devam isteği yeni model girdisidir ve kota tüketebilir. Kullanıcı onayı gereken adımlar otomatik geçilmez.

### Python veya Node.js kurmam gerekiyor mu?

Windows paketi Python içerir; Node.js gerekmez. Codex CLI eksikse ilk açılış yardımcısı onayınla kurulumu sunar. Desktop geçişi Codex Desktop’ı yeniden başlatır; çalışmalarını önce kaydet.

### Giriş bilgileri nasıl saklanıyor?

Cihazında saklanır. Hazırlanan Microsoft Store sürümünde kayıtlı profil giriş bilgileri ve geçiş kurtarma verileri Windows DPAPI ile şifrelenir. Ortak Codex giriş dosyası ve SQLite metadata’sı şifrelenmez; eski yayımlanmış sürümler dosya izinleri kullanır. Ayrıntıları gizlilik politikasında bulabilirsin. Tanılama dışa aktarımı giriş bilgilerini, veritabanını ve konuşma metnini içermez.

### Ücretsiz mi? Hesap kotalarını artırıyor mu?

QuotaCrew ücretsiz ve açık kaynaklıdır. Hesap kotalarını artırmaz; mevcut hesapların kapasitesini takip etmeni ve geçişleri yönetmeni sağlar. OpenAI ile bağlantılı veya OpenAI tarafından onaylanmış değildir.

## Bağlantılar

- [Windows için indir](https://github.com/erkanpulat/codex-quotacrew/releases/latest)
- [GitHub](https://github.com/erkanpulat/codex-quotacrew)
- [Codex limit ve kota takibi rehberi](https://erkanpulat.github.io/projects/quotacrew/codex-usage-limits/)
- [README — English](https://github.com/erkanpulat/codex-quotacrew/blob/main/README.md)
- [README — Türkçe](https://github.com/erkanpulat/codex-quotacrew/blob/main/README.tr.md)

Bağımsız topluluk yazılımı. OpenAI ile bağlantılı değildir.

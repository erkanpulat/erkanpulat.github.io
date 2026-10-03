# QuotaCrew for Codex

> Codex hesapların, kalan kotaların ve devam eden işlerin tek pencerede. QuotaCrew ile kullanılabilir hesabı bul, geçişi yönet ve Desktop ya da VS Code’daki uygun sohbete kaldığın yerden devam et.

Codex Account Manager, artık QuotaCrew for Codex.

[QuotaCrew: Codex Hesap ve Kota Yöneticisi | Erkan Pulat](https://erkanpulat.github.io/projects/quotacrew/)

Ücretsiz · Windows x64 · Python pakete dahil · Node.js gerekmez

## Limitleri gör. Bir sonraki adımı seç.

### Kalan kapasite tek bakışta

Beş saatlik ve haftalık kalan kotayı, yenilenme zamanlarını, etkin hesabını ve sıfırlama haklarını aynı tabloda karşılaştır.

### Geçişin kontrolü sende

Hesabı kendin değiştir, öneriyi onayla veya kullanılabilir hesaba otomatik geçişi aç. İzleme ve devam tercihlerini dilediğinde duraklat.

### Desktop ve VS Code’da devam

Kota nedeniyle kesilen uygun iş için aynı konuşmaya devam isteği gönderilir. Mevcut hedef, talimatlar ve bütçe korunur.

### İşler ve etkinlik takibi

Çalışan, tamamlanan ve kota nedeniyle kesilen işleri gör. Devam isteğinin hazırlığını, gönderimini ve gözlenen sonucunu incele.

### Çalışma düzenine uyum

Sistem tepsisinde izle, Windows ile başlat veya iş tamamlanması, limitlerin dolması ya da süre sonunda kapatma planla.

### Uygulama içinden güncelle

Yeni kararlı sürümü ve sürüm notlarını gör. Kurulu uygulama, paketi doğrular ve verilerini yedekleyerek güncellenir.

## Limit dolduğunda sohbetin kaybolmasın.

İzleme ve ilgili devam seçeneği açıkken QuotaCrew kesilen işi ve kullanılabilir hesabı kontrol eder. Hesap geçişinden sonra aynı konuşmaya devam isteği gönderir ve yeni turun sonucunu takip eder.

Desktop ve IDE’de otomatik devam deneyseldir; kurulu Codex sürümünün bağlantı desteğine bağlıdır. İşlem birkaç dakika sürebilir. Onay veya yanıt gereken adımlar sende kalır.

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

## Üç adımda kendi iş akışında.

1. **İndir ve aç.** Son sürümden Windows kurulum paketini indir. Taşınabilir kullanım için ZIP’in tamamını bir klasöre çıkar ve QuotaCrew.exe dosyasını aç.
2. **Tercihlerini seç.** İlk açılış yardımcısında izleme, geçiş, devam ve tepsi seçeneklerini ayarla. Codex CLI eksikse onayınla resmî Windows kurulumunu başlatır.
3. **Hesaplarını ekle.** Hesaplarım → Hesap ekle bölümünden hesabına ad ver. Terminal ve tarayıcıdaki girişi tamamla; diğer hesaplarını ekleyip kotaları yenile.

## Hesapların ve geçmişin cihazında.

Profiller, ayarlar ve takip kayıtları yerel olarak saklanır. QuotaCrew telemetri toplamaz; giriş bilgilerini kendi sunucusuna göndermez. Kurulum ve güncellemeler mevcut Codex sohbet geçmişini korur.

[Güvenlik ve veri saklama ↗](https://github.com/erkanpulat/codex-quotacrew/blob/main/SECURITY.md)

## Merak edilenler

### QuotaCrew nedir? Codex Account Manager ile aynı proje mi?

Evet. QuotaCrew for Codex, Codex Account Manager projesinin güncel adıdır. Codex hesapları, kullanım kotaları, hesap geçişi ve uygun konuşmalarda devam için geliştirdiğim ücretsiz, MIT lisanslı Windows uygulamasıdır.

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
- [README — English](https://github.com/erkanpulat/codex-quotacrew/blob/main/README.md)
- [README — Türkçe](https://github.com/erkanpulat/codex-quotacrew/blob/main/README.tr.md)

Bağımsız topluluk yazılımı. OpenAI ile bağlantılı değildir.

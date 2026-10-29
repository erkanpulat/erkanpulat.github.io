# Codex limit ve kota takibi.

https://erkanpulat.github.io/projects/quotacrew/codex-usage-limits/

Kalan kullanımını kontrol etmek, bir sonraki yenilenmeyi görmek ve kota yüzünden kesilen işin durumunu kaybetmemek için pratik bir rehber.

Erkan Pulat

Kaynak kontrolü: 2026-10-30

## Codex kullanım limitim nerede görünüyor?

Güncel limit ve yenilenme zamanı için hesabının resmi kullanım paneline bak. Codex CLI oturumunda /status komutunu kullanabilirsin. Limitler plan, model ve işin kapsamına göre değişir; sabit bir mesaj sayısı varsayma.

[OpenAI Help: Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)

## Kalan kota ile yenilenme zamanı aynı şey değil.

QuotaCrew tablosunda kalan kapasiteyi ve yenilenme zamanını birlikte oku. Bir yüzdelik değer kapasiteyi, bir tarih veya geri sayım ise ilgili pencerenin yenilenmesini anlatır. Bunları tamamlanan iş sayısıyla karıştırma.

Beş saatlik ve haftalık alanlar hesabın sağladığı verilerde bulunuyorsa ayrı ayrı değerlendirilir. Alan boşsa bunu sıfır kota olarak yorumlama; önce veriyi yenile ve resmi panelle karşılaştır. Her plan aynı limit pencerelerini kullanmak zorunda değildir.

[OpenAI Help: How resets work in Codex](https://help.openai.com/en/articles/20001498-how-resets-work-in-codex)

## Kota sıfırlama hakkı ile normal yenilenme farklıdır.

Normal beş saatlik veya haftalık yenilenme, hesabındaki kullanım penceresinin kendi zamanıdır. Hesabında sunuluyorsa banked reset ya da satın alınan reset ayrı bir işlemdir; uygunluk, kapsanan limitler ve son kullanma tarihi için resmî kullanım ekranını kontrol et.

QuotaCrew, görünen sıfırlama haklarını ve yenilenme zamanlarını karşılaştırmana yardım eder; bunları yeni kredi, kalıcı limit artışı veya her hesap için geçerli bir kampanya gibi yorumlama.

[OpenAI Help: How resets work in Codex](https://help.openai.com/en/articles/20001498-how-resets-work-in-codex)

## Codex limit veya kota dolduğunda ne yapmalı?

Önce kesintinin gerçekten kota kaynaklı olduğunu kontrol et. Ağ hatası, giriş sorunu ve kullanıcı onayı bekleyen bir adım aynı şey değildir. Tekrar tekrar devam isteği göndermek sorunu açıklığa kavuşturmaz.

1. Çalışan işin ve konuşmanın hangi hesaba bağlı olduğunu not et.
2. Kalan kapasiteyi ve yenilenme zamanını yenile; eksik veriyi resmi panelden doğrula.
3. Beklemeyi seçiyorsan ilgili pencerenin yenilenmesini esas al. Başka hesabın varsa yalnızca kullanmaya yetkili olduğun hesabı değerlendir.
4. Geçiş yapmadan önce çalışmalarını kaydet. Desktop yeniden başlatılabilir; devamın sonucunu ayrıca kontrol et.

## QuotaCrew ile hesap ve kota kontrolü.

QuotaCrew for Codex, ücretsiz ve açık kaynaklı bir Windows uygulamasıdır. Kayıtlı hesapları, mevcut kotaları ve devam eden işleri tek pencerede karşılaştırmaya yardımcı olur. Kurulumdan sonra hesaplarını ekle, kotaları yenile ve etkin hesabı kontrol et.

Manuel geçiş, öneriyi onaylama ve otomatik hesap geçişi seçenekleri farklı çalışma biçimleridir. Önce manuel akışı kullanarak hangi hesabın aktif olduğunu ve işin nerede kaldığını kontrol et; otomasyonu bundan sonra kendi tercihlerine göre aç.

[QuotaCrew documentation](https://github.com/erkanpulat/codex-quotacrew)

## Desktop ve VS Code’da aynı sohbete devam.

QuotaCrew desteklenen, kota nedeniyle kesilen konuşmaya devam isteği gönderebilir. Bu bir devam garantisi değildir: izleme, ilgili devam tercihi, kullanılabilir hesap ve kurulu Codex sürümünün bağlantı desteği gerekir.

Devam isteği yeni model girdisidir ve kota tüketebilir. Kullanıcı onayı gereken adımlar atlanmaz. Yerel VS Code desteği deneyseldir; Remote, WSL, bulut ve başka cihazdaki konuşmaları bu kapsamda varsayma.

[QuotaCrew continuation support](https://github.com/erkanpulat/codex-quotacrew/blob/main/docs/continuity.md)

## QuotaCrew limit artırmaz veya kotayı sıfırlamaz.

QuotaCrew mevcut hesap kapasitesini gösterir ve geçişleri yönetir; yeni kullanım hakkı üretmez. OpenAI limitlerini, fiyatlandırmasını veya erişim koşullarını değiştirmez. Bağımsız bir topluluk projesidir; OpenAI ile bağlantılı veya OpenAI tarafından onaylanmış değildir.

## Kaynaklar ve kapsam

Bu rehber bir plan veya fiyat tablosu değildir. Güncel kullanım hakkı için resmi OpenAI panelini esas al; QuotaCrew özellikleri için kullandığın sürümün dokümantasyonunu kontrol et.

- [OpenAI Help: Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)
- [OpenAI Help: How resets work in Codex](https://help.openai.com/en/articles/20001498-how-resets-work-in-codex)
- [QuotaCrew documentation](https://github.com/erkanpulat/codex-quotacrew)
- [QuotaCrew continuation support](https://github.com/erkanpulat/codex-quotacrew/blob/main/docs/continuity.md)

[QuotaCrew özelliklerini ve Windows kurulumunu incele](https://erkanpulat.github.io/projects/quotacrew/)

Bağımsız topluluk yazılımı. OpenAI ile bağlantılı değildir.

import { RevealOnScroll } from '../components/RevealOnScroll';

export default function PersonalData() {
  return (
    <div className="pt-[88px]">
      {/* Page Hero */}
      <section className="bg-[#C41E2A] min-h-[30vh] flex items-end pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#C41E2A] to-[#0A0A0A]" />

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.08) 3px, rgba(255,255,255,0.08) 4px)',
          }}
        />

        <RevealOnScroll delay={0.2}>
          <div className="max-w-[900px] mx-auto px-12 max-[880px]:px-5 relative z-10">
            <div className="text-[10px] tracking-[4px] uppercase text-white/60 mb-3.5">
              RBSD Combatives Brno <span className="text-white">/ Ochrana osobních údajů</span>
            </div>
            <h1 className="font-serif text-[clamp(30px,4.5vw,50px)] font-bold text-white leading-tight">
              Ochrana <span className="text-white/90">osobních údajů</span>
            </h1>
          </div>
        </RevealOnScroll>
      </section>

      {/* Obsah */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-12 max-[880px]:px-5">
          <div className="space-y-10 text-[15px] text-[#0A0A0A]/70 leading-relaxed">
            <p>
              V naší společnosti řešíme ochranu osobních údajů dle patřičných zákonů. Veškeré osobní
              údaje poskytované návštěvníkem jsou shromažďovány, zpracovávány a uchovávány v souladu
              s platnou legislativou České republiky, zejména se zákonem č. 101/2000 Sb. o ochraně
              osobních údajů ve znění pozdějších předpisů a zákonem o elektronických komunikacích
              č. 127/2005 Sb. Samozřejmě také nově dle Nařízení Evropského parlamentu a rady (EU)
              2016/679, tzv. „GDPR“.
            </p>

            <div>
              <p className="mb-3">Vaše osobní údaje budou zpracovávány:</p>
              <p className="mb-5">
                Společností <strong className="text-[#0A0A0A]">Sdružení tradičního Kung Fu Brno, z.s.</strong>,
                IČO 26639998, se sídlem Kuklenská 516/8, Židenice (Brno-Židenice), 615 00 Brno.
              </p>
              <ul className="space-y-1.5">
                <li>Google Analytics: zaznamenává cookie a použití webu</li>
                <li>Google Adwords: zaznamenává cookie a použití webu, konverze</li>
                <li>Sklik: zaznamenává cookie a použití webu, konverze</li>
              </ul>
            </div>

            <p>
              Tyto www stránky se zabývají primárně nabídkou výuky reálné sebeobrany. Evidujeme vaše
              objednávky a přihlášky na tréninky, pro tyto účely si od vás bereme jen ty údaje, které
              jsou nezbytné k jejich vyřízení. Zároveň jsme přijali patřičná bezpečnostní opatření
              k zabezpečení vašich dat (šifrování atd.). Sběr osobních údajů probíhá přímo od subjektu
              (vyplníte formulář), tak automaticky. Níže všechny případy rozebíráme podrobněji,
              především z pohledu právních důvodů zpracování, účelu zpracování i o možnostech, jakými
              dosáhnete na svá práva.
            </p>

            <p>
              Pokud požádáte o výmaz svých údajů, uděláme to neprodleně, nejpozději do 1 měsíce od vaší
              žádosti, kterou prosím směřujte na náš e-mail. Upozorňujeme, že výmaz můžeme udělat jen
              v případě, pokud k archivaci dat nejsou zákonné důvody.
            </p>

            <p>
              Není-li to výslovně uvedeno,{' '}
              <a href="https://www.hunggar.cz" target="_blank" rel="noopener noreferrer" className="text-[#C41E2A] hover:text-[#A01822] underline underline-offset-2">
                www.hunggar.cz
              </a>{' '}
              nasbírané osobní údaje nepředává dalším příjemcům ani správcům.
            </p>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-[#0A0A0A] mb-3">Osobní údaje získané automaticky</h2>
              <p>
                Webový server www.hunggar.cz automaticky zpracovává a ukládá údaje o návštěvě stránky.
                Automatické údaje jsou sbírány vlastními logy www serveru a přes Google Analytics.
                Mezi automaticky sbírané údaje patří identifikátory času, doby strávené na stránce,
                IP adresy, údaj o operačním systému a prohlížeči, vypočítané geolokační informace.
                Tyto údaje neumožňují přímo identifikovat osobu, ale umožňují ve většině případů
                identifikovat počítač, ze kterého bylo na www stránku přistupováno. Tyto informace
                používáme jen a pouze k vyhodnocení provozu webu a pro optimalizaci webu.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-[#0A0A0A] mb-3">Údaje pro reklamní systémy</h2>
              <p className="mb-3">
                Využíváme technologie retargetingu od služby Sklik provozované společností Seznam.cz,
                a.s. To nám umožňuje ukázat návštěvníkům, kteří projevili zájem o naše služby, naše
                reklamy v reklamní síti společnosti Seznam.cz, a.s.
              </p>
              <p>
                Využíváme technologie remarketingu od služby Adwords provozované společností Google
                Ireland Limited. To nám umožňuje ukázat návštěvníkům, kteří projevili zájem o naše
                služby, naše reklamy v reklamní síti společnosti Google.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-[#0A0A0A] mb-3">Ukládání dat na počítač uživatele</h2>
              <p>
                V některých případech webová stránka ukládá data na počítač uživatele, a při opětovné
                návštěvě tato data může číst a měnit. Jedná se o tzv. cookies.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-[#0A0A0A] mb-3">Zabezpečení osobních údajů</h2>
              <p>
                Pro přenos dat využíváme výhradně zabezpečené připojení s protokoly HTTPS, SSH, SFTP.
                Data jsou ukládána v zabezpečené databázi a na cloudu. Cloudové služby zajišťují
                certifikovaní smluvní partneři (Google). Omezujeme přístup do administrace dle IP
                adres, pravidelně měníme přístupové údaje, hesla jsou hashovaná.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-[#0A0A0A] mb-3">Správce</h2>
              <p>
                Správce odpovídá za dodržování povinností kladených Obecným nařízením. Zcela zásadní je
                dodržování zásad zpracování, jejichž dodržování zároveň musí být správce schopen
                doložit. Základním nezbytným předpokladem je existence řádného právního důvodu
                zpracování osobních údajů, kterým správce musí disponovat, aby vůbec mohl osobní údaje
                zpracovávat. Zároveň je nutné osobní údaje dostatečně zabezpečit. Samozřejmostí však
                musí být plnění i dalších povinností stanovených Obecným nařízením.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-[#0A0A0A] mb-3">Zpracovatelé</h2>
              <p>
                Zpracovávají osobní údaje dle pokynů a potřeb správců. Patří mezi ně webmaster,
                poskytovatel webhostingových služeb. Mezi zpracovatelem a správcem existuje smluvní
                vztah.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-[#0A0A0A] mb-3">Pověřená osoba pro ochranu osobních údajů</h2>
              <p>
                Dle interní analýzy nemáme povinnost zřídit funkci pověřence pro ochranu osobních
                údajů (ve smyslu článku č. 37 Nařízení). Za veškeré záležitosti týkající se ochrany
                osobních údajů odpovídá Ing. Jiří Holáň.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-[#0A0A0A] mb-3">Jak dlouho budeme vaše osobní údaje zpracovávat?</h2>
              <p>
                Správce bude vaše osobní údaje zpracovávat po dobu trvání smluvního vztahu (tj.
                především po dobu vyřízení objednávky) a následně po dobu dalších 10 let, nebude-li
                tento souhlas se zpracováním osobních údajů z vaší strany odvolán. Tím však není
                dotčeno zpracování osobních údajů v nezbytném rozsahu pro splnění povinností
                vyplývajících z obecně závazných právních předpisů.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-[#0A0A0A] mb-3">Kdo všechno bude mít přístup k vašim osobním údajům?</h2>
              <p>
                Správce a případně též třetí osoby – zpracovatelé, kteří poskytují vhodné záruky
                a jejichž zpracování splňuje požadavky dle platných právních předpisů a které zajišťuje
                náležitou ochranu vašich práv.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-[#0A0A0A] mb-3">Jaká máte v souvislosti s ochranou osobních údajů práva?</h2>
              <ul className="space-y-2">
                {[
                  'právo svůj souhlas kdykoli odvolat',
                  'právo osobní údaje opravit či doplnit',
                  'právo požadovat omezení zpracování',
                  'právo vznést námitku či stížnost proti zpracování v určitých případech',
                  'právo požadovat přenesení údajů',
                  'právo na přístup k osobním údajům',
                  'právo být informován o porušení zabezpečení osobních údajů v určitých případech',
                  'právo na výmaz osobních údajů (právo být „zapomenut“) v určitých případech',
                  'další práva stanovená v zákoně o ochraně osobních údajů a po nabytí účinnosti též v obecném nařízení o ochraně osobních údajů č. 2016/679',
                ].map((right, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#C41E2A] font-bold shrink-0">▸</span>
                    {right}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-[#0A0A0A] mb-1.5">Žádost o přenositelnost údajů</h3>
                <p>
                  Pokud chcete požádat o přenos svých údajů (tedy těch, co jste vy sami zadali),
                  kontaktujte nás na{' '}
                  <a href="mailto:info@hunggar.cz" className="text-[#C41E2A] hover:text-[#A01822] underline underline-offset-2">
                    info@hunggar.cz
                  </a>.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#0A0A0A] mb-1.5">Vznesení námitky</h3>
                <p>
                  Pokud chcete vznést námitku, kontaktujte nás na{' '}
                  <a href="mailto:info@hunggar.cz" className="text-[#C41E2A] hover:text-[#A01822] underline underline-offset-2">
                    info@hunggar.cz
                  </a>.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#0A0A0A] mb-1.5">Žádost o odvolání souhlasu se zpracováním osobních údajů</h3>
                <p>
                  Pokud chcete odvolat souhlas, kontaktujte nás na{' '}
                  <a href="mailto:info@hunggar.cz" className="text-[#C41E2A] hover:text-[#A01822] underline underline-offset-2">
                    info@hunggar.cz
                  </a>.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#0A0A0A] mb-1.5">Žádost o odstranění osobních údajů (právo být zapomenut)</h3>
                <p>
                  Pokud chcete kompletně vymazat svoje data z našich databází, kontaktujte nás na{' '}
                  <a href="mailto:info@hunggar.cz" className="text-[#C41E2A] hover:text-[#A01822] underline underline-offset-2">
                    info@hunggar.cz
                  </a>.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-[#0A0A0A] mb-4">Osobní údaje získané od subjektu</h2>
              <div className="border border-[#0A0A0A]/10 p-5">
                <h3 className="font-bold text-[#0A0A0A] mb-2">Kontaktní formulář</h3>
                <p className="mb-3">
                  Kontaktní formulář slouží subjektům, které se chtějí dotázat na jakoukoliv informaci
                  ohledně naší nabídky. Případně mají zájem přihlásit se na trénink. Povinná pole pro
                  odeslání formuláře jsou: kontakt na vás, což může být e-mailová adresa, vaše jméno
                  a samotná zpráva či poptávka. Odesláním formuláře souhlasíte se zpracováním vašich
                  údajů jen a pouze pro tyto účely. Pokud nás budete kontaktovat přes kontaktní
                  formulář, souhlasíte s uchováním osobních údajů pro účely komunikace o tématu, kvůli
                  kterému nás oslovujete.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
                  <div>
                    <span className="font-bold text-[#0A0A0A]">Osobní údaj: </span>
                    E-mailová adresa, jméno, telefon, zpráva
                  </div>
                  <div>
                    <span className="font-bold text-[#0A0A0A]">Získání osobního údaje: </span>
                    Od subjektu
                  </div>
                  <div>
                    <span className="font-bold text-[#0A0A0A]">Zákonnost: </span>
                    Souhlas subjektu
                  </div>
                  <div>
                    <span className="font-bold text-[#0A0A0A]">Účel: </span>
                    Kontaktní informace, využitelné pro uživatelskou podporu, případně vznik smluvního vztahu
                  </div>
                </div>
                <p className="mt-3">
                  <span className="font-bold text-[#0A0A0A]">Informace o zpracování: </span>
                  Je-li fyzická osoba ve smluvním vztahu s Ing. Jiřím Holáněm, nastává zákonnost
                  zpracování podle článku 6 1.b. V jiných případech jsou osobní údaje zpracovávány jako
                  kontaktní informace. Pokud jde jen o zaslání dotazu, data archivujeme jen po dobu
                  komunikace, maximálně 1 měsíc. Pak dojde k odstranění vašich dat (e-mailu i veškeré
                  komunikace).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

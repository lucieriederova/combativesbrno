import adaPhoto from '@/imports/ada.jpg';
import krystofPhoto from '@/imports/krystof.jpg';
import matyPhoto from '@/imports/maty.jpg';
import kataPhoto from '@/imports/kata.jpg';

export type NewsContentBlock = {
  heading?: string;
  text?: string;
  list?: string[];
  link?: { href: string; label: string };
};

export type NewsArticleData = {
  slug: string;
  tag: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: NewsContentBlock[];
};

export const newsArticles: NewsArticleData[] = [
  {
    slug: 'nabor-combatives-brno',
    tag: 'Nábor',
    title: 'Nábor sebeobrana Combatives Brno',
    date: 'Léto 2026',
    excerpt: 'Momentálně jsme uzavřeli nábor nováčků. Další nábor na sebeobranu bude probíhat až v září 2026.',
    image: matyPhoto,
    content: [
      { text: 'Momentálně jsme uzavřeli nábor nováčků. Další nábor na sebeobranu bude probíhat až v září 2026.' },
      { text: 'Pokud máte zájem o naše tréninky, sledujte náš web nebo Facebook. Další informace budou k dispozici během června.' },
      { text: 'Budeme se na vás těšit.' },
      {
        heading: 'Informace k rozvrhu tréninků a ceny',
        text: 'Rozpis tréninků kung-fu, které také vedeme, najdete na',
        link: { href: 'https://hunggar.cz', label: 'hunggar.cz' },
      },
    ],
  },
  {
    slug: 'treninky-sandy',
    tag: 'Nový program',
    title: 'Otevíráme tréninky Sandy',
    date: '2026',
    excerpt: 'Sanda je čínský plnokontaktní bojový sport, který je podobný kickboxu. Využívá údery,…',
    image: krystofPhoto,
    content: [
      {
        text: 'Sanda je čínský plnokontaktní bojový sport, který je podobný kickboxu. Využívá údery, kopy, páky i hody. Je skvělou nadstavbou a zároveň doplňkem pro sebeobranu v pojetí Urban Combatives — umožní vám v praxi vyzkoušet celou řadu technik a zjistit, zda vaše údery či kopy fungují tak, jak mají. Tím vám skvěle pomůže i s tréninkem sebeobrany.',
      },
      {
        heading: 'Rozvrh',
        text: 'Tréninky sandy probíhají v pátek od 6:15 do 7:30 v tělocvičně na Josefské. Vítáni jsou všichni starší třinácti let, tréninky jsou uzpůsobené pro všechny výkonnostní kategorie — přidat se mohou i začátečníci.',
      },
      {
        heading: 'Tréninky pro vás povede Šimon Klein',
        text: '„Moje meno je Šimon Klein, mám 21 rokov a bojovým športom sa venujem aktuálne 16 rokov. Za tieto roky som nazbieral v grapplingu cez 400 zápasov na rôznych podujatiach. V amatérskom MMA som nazbieral 24 zápasov a aktuálne minulý rok som absolvoval prvý profesionálny zápas. Medzi moje úspechy v bojových športoch patria rôzne umiestnenia, a to napríklad 12-násobný majster Slovenska v grapplingu v profesionáloch, taktiež majster Slovenska v amatérskom MMA, majster Poľska v profi kategórii, 4-násobný majster Česka, majster Rakúska a taktiež niekoľkonásobný medailista z majstrovstiev Európy a majster Európy v profi kategórii grapplingu. Taktiež som zápasil na množstve súťaží a šampionátoch po celom svete, takže skúsenosti som naberal hlavne na žinenke v rôznych odvetviach bojových umení a teším sa s vami na žinenku!“',
      },
      {
        text: 'Zaujala vás sanda? Kontaktujte nás! Před prvním tréninkem je potřeba rezervace.',
      },
    ],
  },
  {
    slug: 'letni-soustredeni-2026',
    tag: 'Soustředění',
    title: 'Letní soustředění 2026',
    date: '11.–18. 7. 2026',
    excerpt: 'Termín: 11. 7. – 18. 7. – Blatiny 33 (u Nového Města na Moravě)',
    image: adaPhoto,
    content: [
      { text: 'Termín: 11. 7. – 18. 7. – Blatiny 33 (u Nového Města na Moravě)' },
      {
        text: 'Letní soustředění 2026 (neboli Letní škola – LŠ) je určeno pro všechny naše cvičence. Standardně se mohou přihlásit děti starší osmi let. Pokud jsou děti samostatné, či mají doprovod, mohou i mladší.',
      },
      {
        heading: 'Ubytování',
        text: 'Chata VHS Brno – vícelůžkové pokoje, jednodušší vybavení, rekonstruované sociální zařízení společné (dámy vlastní, pánové vlastní), společenská místnost, vybavená kuchyně.',
      },
      {
        heading: 'Cena',
        text: '7 200 Kč (7 700 Kč při platbě zálohy po 15. 6., hlásit se je možné i poté, a to až do vyčerpání kapacity). Bonusový program je letos již v ceně, viz níže.',
      },
      {
        heading: 'Registrace',
        list: [
          'Účastníkům 18+ stačí pro registraci zaslat nebo donést zálohu.',
          'Všichni pod 18 let se pro účast na soustředění registrují online. Systém pošle platební údaje a zároveň další informace potřebné pro rodiče.',
          'Na soustředění se přihlásíte složením zálohy 2 000 Kč. Záloha je vratná do 20. 5. v plné výši. Po tomto datu je možné ji přesunout na jinou osobu.',
          'Storno poplatek méně než 21 dní před začátkem akce je 2 700 Kč.',
          'Doplatek částky do 30. 6. na účet nebo hotově.',
          'Není problém přijet na LŠ o den později či odjet o den dříve, každopádně nám dejte vědět.',
          'V případě potřeby je platbu možno zaplatit ve více splátkách – kontaktujte prosím Jirku.',
          'Akci i zálohu je možné hradit pomocí „Rodičovských voučerů“. Je nicméně nutné zadat platbu do systému co nejdříve (nejpozději 20. května).',
        ],
      },
      {
        heading: 'Strava',
        text: 'Obědy a večeře (polévka, hlavní jídlo) přímo na chatě. Jednoduchý koncept, většinou maso plus příloha. V případě zájmu je možno jídlo odhlásit, ale pouze na celý pobyt (sleva 1 000 Kč z ceny).',
      },
      {
        text: 'V omezené míře jsme schopni připravit i vegetariánskou stravu. Každopádně se, prosíme, dopředu domluvte s Jirkou, stejně tak v případě jiných dietních omezení.',
      },
      {
        text: 'Děti do 12 let mají zajištěny i snídaně a svačiny kdykoliv během dne včetně ovoce a zeleniny. Junioři 13–18 let si mohou tyto přiobjednat za doplatek 500 Kč.',
      },
      {
        heading: 'Program',
        text: 'Tréninky různého zaměření po celý den. Některé povinné, jiné volitelné. V programu budou: tréninky sebeobrany (letos budeme pracovat s pepřovým sprejem a improvizovanými zbraněmi), sportovního boje (sanda a grappling). Na řadu přijdou i modelovky, strečink a dechová cvičení (čchi kung). Pokud bude zájem, tak i meditace či masáže. A samozřejmě nás čekají každovečerní výzvy.',
      },
      { text: 'Pro děti jsou připraveni animátoři s herním programem či vycházkami.' },
      {
        text: 'Mimo tréninky samozřejmě budou k dispozici karetní a deskové hry, budeme promítat fotky a filmy, čeká vás filozofický večer i bečička (nebo tři) ve sklepě.',
      },
      {
        heading: 'S sebou',
        list: [
          'Spacák, případně i polštář, či prostěradlo.',
          'Plavky, opalovací krém či čelovka.',
          'Tréninkový oděv na ven, cvičí se (téměř) za jakéhokoliv počasí.',
        ],
      },
      {
        text: 'Prosím, nedávejte dětem s sebou cennosti – zejména elektroniku. Sladkosti a slanosti děti odevzdají při příjezdu, ze společného „banku“, ze kterého dostanou každý den drobný příděl. Sladké nápoje (Cola, Kofola…) rovnou vrátíme rodičům. Děkujeme za pochopení.',
      },
      {
        heading: 'Doprava',
        text: 'Dopravu si zajišťuje každý individuálně. Pokud poptáváte nebo nabízíte dopravu, dejte vědět Jirkovi, určitě půjde vás s někým spojit.',
      },
      {
        heading: 'Ostatní',
        text: 'V dosahu jsou 3–4 restaurace, kavárna/cukrárna, jízdárna, skály na lezení, rybník, ping pong, ohniště, hřiště na volejbal… Vhodné je drobné kapesné, neberte si, prosíme, cennosti.',
      },
      {
        heading: 'Bonusový program',
        text: 'Bude zajištěn i letos a zabere nám menší část volného dne. Náklady na něj jsou již v ceně. Opět jej letos zajistí specializovaná firma. Bude to opět zážitek, trochu to může být i adrenalin a rozhodně se něco zajímavého přiučíte.',
      },
      {
        text: 'Pro menší děti bude zážitek upraven tak, aby se lehce omezil adrenalin, každopádně klidně nám zavolejte a pobavíme se o vhodnosti pro vaše dítko.',
      },
      {
        heading: 'Organizace',
        text: 'Tréninky začnou v sobotu odpoledne od 17.30 hod. (od 16.00 hod. je možno se ubytovávat), poté večeře.',
      },
      {
        text: 'V pátek 17. 7. proběhne od 17.00 hodin závěrečná exhibice všech účastníků soustředění. Zváni jsou rodiče i kamarádi. Následně večer proběhne opékání a další program. Přespání dle volné kapacity je možné v rámci areálu uvnitř či na pozemku po domluvě.',
      },
      { text: 'V sobotu 18. 7. ranní trénink, balení, úklid a odjezd v 10.00 hodin.' },
      { text: 'Budeme se na vás těšit na letním soustředění 2026!' },
    ],
  },
  {
    slug: 'letni-treninky-sebeobrany-2025',
    tag: 'Rozvrh',
    title: 'Letní tréninky sebeobrany 2025',
    date: 'Červen 2025',
    excerpt: 'Tréninky dětí Tréninky sebeobrany pro děti proběhnou naposledy 10. června. Tréninky juniorů…',
    image: kataPhoto,
    content: [
      {
        heading: 'Tréninky dětí',
        text: 'Tréninky sebeobrany pro děti proběhnou naposledy 10. června.',
      },
      {
        heading: 'Tréninky juniorů a dospělých',
        text: 'Junioři a dospělí budou mít od začátku června společné tréninky v reálném prostředí, a to vždy v úterý v čase 18:00 – 19:30 hodin.',
      },
      {
        text: 'Místo budeme každé úterý střídat. Aktuální lokalitu se dozvíte vždy na předchozím tréninku, ve vnitřní FB skupině, nebo si o ni s předstihem napište. Na tréninky se budou hodit pevné boty a oblečení s dlouhým rukávem, které se může ušpinit. Poslední trénink proběhne v úterý 24. 6.',
      },
    ],
  },
  {
    slug: 'treninky-29-10-zruseny',
    tag: 'Zrušeno',
    title: 'Tréninky 29. 10. zrušeny z důvodu podzimních prázdnin',
    date: '29. října 2024',
    excerpt: 'Upozorňujeme Vás, že v úterý 29. 10. nebudou tréninky sebeobrany pro děti a juniory z důvodu podzimních prázdnin.',
    image: adaPhoto,
    content: [
      {
        text: 'Upozorňujeme vás, že v úterý 29. 10. nebudou tréninky sebeobrany pro děti a juniory z důvodu podzimních prázdnin.',
      },
      { text: 'Trénink dospělých bude probíhat normálně.' },
      { text: 'Budeme se na vás těšit, příští týden už podle rozvrhu.' },
      { text: 'V případě dotazů nás kontaktujte.' },
    ],
  },
];

export const newsSidebarExtras: { title: string; date: string }[] = [
  { title: 'Tréninky dětí 11. 2. zrušeny z důvodu jarních prázdnin', date: '11. února 2025' },
];

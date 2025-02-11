'use client';
import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';
import Head from 'next/head';

type AccordionProps = {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

const list: AccordionProps[] = [
  {
    id: 'nature',
    title: <h3 className='text-green-100'>Ympäristönsuojelu</h3>,
    description: (
      <>
        <p>
          Ympäristö ja kestävä elämäntyyli ovat poliittisen ajatteluni
          keskiössä, ja vaikka globaalien ympäristöongelmien ratkaiseminen
          vaatii tekoja etenkin politiikan ylimmiltä tasoilta kuten
          valtionjohdolta, niin uskon, että myös kuntatasolla voi tehdä paljon.
          Jatkuvaan talouskasvuun pyrkiminen resursseiltaan rajallisella
          planeetalla on pitkässä juoksussa täysin mahdoton yhtälö.
          Kapitalistinen kertakäyttökulttuuri kannustaa voittojen maksimoinnin
          nimissä tuottamaan kaiken halvasti ja kestämättömästi, jotta tuotteen
          rikkoutuessa kuluttaja ostaisi aina uutta tilalle. Kuntapolitiikassa
          pitäisikin pyrkiä mahdollisimman paljon ylläpitämään ja
          uusiokäyttämään kaikkea jo rakennettua infrastruktuuria jatkuvan
          purkamisen ja uudelleenrakentamisen sijasta. Vaille käyttöä jäävät
          rakennukset tulisi antaa käyttöön esimerkiksi erilaisille harrastaja-
          tai kulttuuritoimijoille. Alakulttuuritalo Kramsu on loistava
          esimerkki tällaisesta toiminnasta. Myös kaikenlainen julkisten
          rakennusten – kuten koulujen - hyödyntäminen iltaisin
          harrastustoimintaan on mielestäni fiksua kuntapolitiikkaa.
        </p>
        <p>
          Olen kiinnostunut selvittämään, kuinka paljon pystyisimme
          kunnallispoliittisilla päätöksillä vaikuttamaan laitoskeittiöiden ja
          kauppojen hävikkiruoan määrään. Haluaisin, että kaikilla ruoan kanssa
          tekemisissä olevilla yrityksillä olisi velvollisuus jakaa tai myydä
          halvalla muutoin hävikkiin meneviä ruokia eteenpäin. Sekä
          työntekijöillä että laitoskeittiöiden piirissä olevilla asiakkailla
          pitäisi olla mahdollisuus ottaa päivän jälkeen hävikkiruoat mukaansa
          roskiin heittämisen sijaan. Haluaisin olla kehittämässä järjestelmää,
          jossa hävikkiruoat saataisiin tehokkaammin jaettua esimerkiksi
          leipäjonojen kautta apua tarvitseville.
        </p>
        <p>
          Kunnan ostopäätöksissä tulee suosia paikallista ja kestävää - en näe
          järkeä siinä, että esimerkiksi Kiinassa tuotetaan vaatteita
          Eurooppaan, kun Euroopassa voisi tuottaa vaatteita Eurooppaan. Ainoa
          peruste tälle onkin se, että monessa Euroopan ulkopuolisessa valtiossa
          on helpommin saatavilla hyväksikäytettävää halpatyövoimaa. Tämä on
          yksi hyvä esimerkki siitä, kuinka ilmastokysymykset kytkeytyvät myös
          ihmisoikeuskysymyksiin, ja ilmaston kannalta kestävät poliittiset
          päätökset ovat myös ihmisoikeuksien kannalta parempia.
        </p>
      </>
    ),
  },
  {
    id: 'anticap',
    title: <h3 className='text-red-100'>Antikapitalismi</h3>,
    description: (
      <>
        {' '}
        <p>
          Politiikassa ollaan jo pitkään menty sillä suunnalla, että vain
          rahalla on väliä ja vahvimmat selviävät. Kampanjani pyrkii menemään
          vastakarvaan tälle suunnalle – sen sijaan että panostetaan vain
          kaikkeen, mikä tuottaa rahaa, olisi tärkeä panostaa siihen, mikä
          tuottaa hyvinvointia. Ymmärrän tietysti, miksi taloudellinen tuotto on
          tärkeä elementti ottaa huomioon päätöksenteossa ja miten
          kapitalistisessa maailmassa hyvinvointi on monelta osin sidoksissa
          rahan määrään, mutta kyseenalaistan vahvasti pelkän raha silmissä
          etenemisen hyödyn pitkässä juoksussa. Suuret Kirkkopuiston
          parkkihallin kaltaiset hankkeet tehdään tuoton ja kasvun vuoksi, mutta
          valitettavan usein tällaisissa tapauksissa tuotto menee pääosin
          isoille yrityksille, eikä päädy näkymään tavallisten kansalaisten
          elämässä muuten kuin lakkautettuina kyläkouluina. Pelkkä isojen
          yritysten etu ei ole paras lähtökohta kunnan hyvinvoinnille – on
          tärkeä panostaa siihen, että kunnassa viihdytään, jolloin asukkaat
          haluavat todennäköisemmin myös jatkaa siellä asumista. Panostamalla
          monipuoliseen kulttuuritarjontaan ja matalan kynnyksen
          toimintamahdollisuuksien ja tilojen luomiseen saamme pidettyä
          Jyväskylän kaupunkina, johon moni ihminen innostuu jäämään esimerkiksi
          opiskelujensa jälkeen asumaan. On myös tärkeää, etteivät palvelut
          keskity pelkästään keskustan alueelle, vaan myös syrjäisemmissä
          taajamissa asuminen saataisiin pidettyä mielekkäänä.
        </p>
        <p>
          Kuulen usein puhuttavan, ettei Suomessa olisi korruptiota, mutta väite
          on mielestäni naurettava. Isoilla yrityksillä on varaa lahjoittaa
          heille mieleisten poliitikkojen vaalikampanjoihin, ja monet poliitikot
          ovat myös itse yritysten johtoportaissa. Lobbauksella ja
          hyvävelikerhoilla varmistetaan sellaiset poliittiset päätökset ja
          hankkeet, joilla yritykset pystyvät tekemään tuottoa. Mielestäni yksi
          isoimmista vahvuuksistani poliitikkona olisikin se, ettei minulla ole
          rahaa kiinni missään yrityksissä, ei kiinnostusta sijoittamiseen, eikä
          tavoitteeni henkilökohtaisessa elämässäni ole rikastua, joten
          äänestäjät voivat luottaa, että kunnanvaltuutettuna tekisin päätöksiä
          aidosti kunnan asukkaiden parasta ajatellen.
        </p>
      </>
    ),
  },
  {
    id: 'equality',
    title: <h3 className='text-cyan-100'>Tasa-arvo & ihmisoikeudet</h3>,
    description: (
      <>
        {' '}
        <p>
          Tasa-arvoon ja oikeudenmukaisuuteen pyrkimisen kuuluisi olla
          yhteiskunnan perusolettamus, mutta silti useiden eri vähemmistöjen
          sekä köyhien ja heikommassa asemassa olevien oikeuksien puolustaminen
          vaatii jatkuvaa taistelua. Olen kuitenkin lopen kyllästynyt nykyisen
          kaltaisiin kulttuurisotiin ja keskustelukulttuuriin aiheen suhteen.
          Haluan tehdä osani edistääkseni rakentavaa keskustelukulttuuria, jossa
          ihmisoikeudet ovat tinkimätön tavoite eivätkä mielipideasia, ja jossa
          kouluttautumisen ja vähemmistöjen kokemusten kuuntelemisen kautta
          alettaisiin puhumaan konkreettisista toimista. Rasistit, ableistit ja
          homo- ja transfoobikot eivät tarvitse lisää tilaa tai megafoneja.
          Mielestäni oikeiston moraalipanikoijat voidaan jättää keskenään omaan
          arvoonsa, jotta tasa-arvoasioita saadaan ajettua mahdollisimman
          häiriöttä eteenpäin.
        </p>
        <p>
          Tiedostan, että kunnanvaltuutettuna tai kuntavaaliehdokkaana ei voi
          tehdä määräänsä enempää maailmanpolitiikan suurien linjojen eteen,
          mutta jotta äänestäjät tietävät, millaista ehdokasta ovat
          äänestämässä, niin haluan myös ilmaista vahvat tuntemukseni
          ulkopolitiikan kysymyksistä, jotka peilaavat hyvin
          ihmisoikeuskäsityksiäni, ja jotka varmasti vaikuttaisivat
          päätöksentekooni tilanteen tullen mikäli päädyn valtuutetuksi.
          Mielestäni Suomen pitäisi tiukemmin tuomita muiden valtioiden –
          erityisesti omien liittolaistensa - ihmisoikeusrikkomukset, sekä
          boikotoida ja kieltäytyä rahoittamasta tällaisten valtioiden toimia.
          Olen esimerkiksi vahva vapaan Palestiinan ja palestiinalaisten
          itsemääräämisoikeuden kannattaja, ja Suomen liittolaisuus ja asekaupat
          kansanmurhaa ja rotusortoa toteuttavan Israelin kanssa ovat
          häpeäpilkku, josta meidän olisi pitänyt kauan sitten siirtyä pois.
          NATO-jäsenyytemme ja valtionjohtomme suopea suhtautuminen
          Yhdysvaltoihin ovat muutenkin, mutta etenkin nyt Donald Trumpin
          vaalivoiton myötä, asia johon suhtaudun todella kriittisesti.
          Sotilasliittoon mentiin liian innokkaasti pelon ja militaristisen
          ajattelun provosoimana, ja Yhdysvaltojen ajaessa imperialistista
          ulkopolitiikkaa minun on vaikea nähdä, miten tämä eroaa moraalisesti
          esimerkiksi siitä, että olisimme Putinin Venäjän kanssa liitossa.
          Maailmassa, jossa itseään täynnä olevat militaristijohtajat
          uhittelevat kilpaa toisilleen, tarvitaan enemmän diplomatiaa ja
          de-eskalaatiota jatkuvan kilpa-asevarustelun sijaan. Suomen olisi
          ulkopolitiikassa myös tehtävä kaikkensa köyhimpien maiden
          itsemääräämisoikeuden takaamisen eteen. Edelleen esimerkiksi Afrikan
          manner on Länsimaiden uuskolonialistisessa otteessa, kun monen Afrikan
          maan luonnonvarat varastetaan suuryritysten toiminnan kautta
          Länsimaiden käyttöön lähtömaiden pysyessä köyhinä.
        </p>
        <p>
          Nyt jos koskaan on aika laittaa yhteiskuntamme peruspilarit uusiksi,
          lopettaa luonnon ja ihmisten riisto, tehdä varallisuuden
          uudelleenjakoa rikkailta leikaten, päästää irti jatkuvan kasvun
          tavoittelusta ja pyrkiä tuottamaan hyödykkeitä kestävästi vain sen
          verran kuin niitä oikeasti tarvitaan. Ei anneta epätoivon voittaa!
        </p>
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Aaro Viitanen</title>
        <meta name='description' content='Aaro Viitasen portfolio-sivu' />
      </Head>
      <div className=''>
        <Image
          className='fixed w-screen h-screen -z-50 opacity-5'
          src='/morningwood.jpg'
          alt='Background'
          width={700}
          height={700}
        />
        <div className='fixed md:block hidden h-screen top-0 right-0 w-10 bg-[#080401]'></div>

        <main className=' '>
          <div className='sticky border-b top-0 bg-black bg-opacity-50 z-50 backdrop-blur'>
            <h1>Aaro Viitanen</h1>
            <div className='flex flex-row'>
              <h2 className='font-bold text-5xl text-pink-500'>V</h2>
              <h2 className='-mt-1'>asemmistoliitto</h2>
            </div>
          </div>
          <Image
            id='pfp'
            className='md:fixed md:right-10 top-28 mt-4 md:mt-0 content-center rounded-full md:rounded-l-none -scale-x-100 -z-50'
            src='/aaro.jpg'
            alt='Aaro Viitanen'
            width={500}
            height={500}
          />
          <section id='intro'>
            <h3>Tervehdys!</h3>
            <p>
              Olen Aaro Viitanen, 26-vuotias muusikko ja musiikkikasvatuksen
              opiskelija Jyväskylästä. Olen Vasemmistoliiton ehdokkaana kevään
              2025 kuntavaaleissa, koska politiikka ja siinä mukana oleminen on
              kiinnostanut aina, ja nyt jos koskaan tarvitaan täyskäännös pois
              nykyisen hallituksen ajamasta brutaalin oikeistolaisesta
              politiikasta. Tämänhetkinen jatkuvaan kasvuun pohjautuva
              kapitalistinen yhteiskuntajärjestelmämme on ajanut planeetan
              massiiviseen ekokatastrofiin, ja meidän on mahdollisimman pian
              kehitettävä vähemmän tuhoisa vaihtoehto pyörittää yhteiskuntaa.
              Kestävän yhteiskunnan luominen on suuri prosessi, joka vaatii
              toimia yhteiskunnan kaikilta tasoilta, eli myös kunnilta.
            </p>
            <p>
              Puoluepolitiikan suhteen olen vielä noviisi, ja nämä ovat
              ensimmäiset vaalit, joihin olen ehdolla. Minulla on kuitenkin
              jonkin verran ulkoparlamentaarista poliittista kokemusta
              mielenosoituksiin ja kansalaisaktivismiin sekä niiden
              järjestämiseen osallistumisesta esimerkiksi No Cuts Jkl
              –kollektiivin riveissä. Olen myös tehnyt vuosia someaktivismia
              erään keskikokoisen poliittisen meemitilin ylläpitäjänä
              Instagramissa ja osallistunut aktiivisesti poliittiseen
              keskusteluun niin sosiaalisen median alustoilla kuin ihmisten
              kanssa kasvotusten. Minulla tulee varmasti olemaan paljon
              opittavaa kuntapolitiikasta, mutta mielestäni tärkeintä onkin se,
              että olen valmis oppimaan, kuuntelemaan ja keskustelemaan avoimin
              mielin, samalla kuitenkin omasta arvomaailmastani tiukasti kiinni
              pitäen.
            </p>
          </section>
          <Accordion>
            {list.map((item) => (
              <section key={item.id} id={item.id}>
                <AccordionItem id={item.id}>
                  <AccordionTrigger> {item.title}</AccordionTrigger>
                  <AccordionContent>{item.description}</AccordionContent>
                </AccordionItem>
              </section>
            ))}
          </Accordion>
        </main>
        {/* ------------------ */}
      </div>
    </>
  );
}

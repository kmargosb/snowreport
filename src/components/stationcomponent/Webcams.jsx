
import ModalImage from "react-modal-image";
import Loading from "../loading/Loading";


const WebCams = ({ stationDB }) => {


  const webcamsDataJson = [
    {
      "Alp 2500": [
        "https://media.turismefgc.cat/lamolina/tubbing.jpg?intmp=1709508810",
        "https://www.masella.com/cam1/pla2tmp.jpg?intmp=1709508810",
      ]
    },
    {
      "La Molina": [
        "https://media.turismefgc.cat/lamolina/comella.jpg?intmp=1709508823",
        "https://media.turismefgc.cat/lamolina/cam-niu.jpg?intmp=1709508823",
        "https://media.turismefgc.cat/lamolina/plcomercial.jpg?intmp=1709508823",
        "https://media.turismefgc.cat/lamolina/torrent.jpg?intmp=1709508823",
        "https://media.turismefgc.cat/lamolina/tubbing.jpg?intmp=1709508823",
        "https://media.turismefgc.cat/lamolina/estadi.jpg?intmp=1709508823",
        "https://media.turismefgc.cat/lamolina/font-canaleta-01.jpg?intmp=1709508823",
        "https://www.masella.com/cam1/pla2tmp.jpg?intmp=1709508823",
      ]
    },
    {
      "Masella": [
        "https://www.masella.com/webcam/view/23?intmp=1709508836",
        "https://www.masella.com/cam1/bosc2150tmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/bosctmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/lesfustestmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/comaoriolatmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/comapregonatmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/enamoratstmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/isardtmp.jpg?intmp=1709508836",
        "https://www.masella.com/webcam/view/19?intmp=1709508836",
        "https://www.masella.com/cam1/tosa2500tmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/piatmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/lapletatmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/latosatmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/platmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/jettmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/pla2tmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/tgvtmp.jpg?intmp=1709508836",
        "https://www.masella.com/cam1/tmpcomaoriola.jpg?intmp=1709508836",
        "https://media.turismefgc.cat/lamolina/tubbing.jpg?intmp=1709508836"
      ]
    },
    {
      "Baqueira Beret": [
        "https://www.infonieve.es/webcams/baqueira-baqueira-nucleo-1800_2024-03-06-14-00-679.jpg",
        "https://www.infonieve.es/webcams/baqueira-jorgejordana-superior_2024-03-06-14-00-771.jpg",
        "https://www.infonieve.es/webcams/baqueira-1800_2024-03-06-14-00-901.jpg",
        "https://www.infonieve.es/webcams/baqueira-beret-debutantes_2024-03-06-14-00-914.jpg",
        "https://www.infonieve.es/webcams/baqueira-baqueira_2024-03-06-14-00-587.jpg",
        "https://www.infonieve.es/webcams/baqueira-peulla_2024-03-06-14-00-841.jpg",
        "https://www.infonieve.es/webcams/baqueira-pladeberet_2024-03-06-14-00-539.jpg",
        "https://www.infonieve.es/webcams/baqueira-saumet_2024-03-06-14-30-358.jpg",
      ]
    },
    {
      "Boí Taüll": [
        "https://webtvhotspot.feratel.com/hotspot/35/15100/3.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15100/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15100/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15100/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://media.turismefgc.cat/fgc/boitaull002.jpg?intmp=1709508864",
        "https://media.turismefgc.cat/fgc/boitaull001.jpg?intmp=1709508864",
      ]
    },
    {
      "Espot": [
        "https://www.infonieve.es/webcams/espot-cota2000-cafeteria_2024-03-06-14-30-711.jpg",
        "https://www.infonieve.es/webcams/espot-cota2000-debutantes_2024-03-06-14-30-931.jpg",
        "https://www.infonieve.es/webcams/espot-cota2000-paladeixe_2024-03-06-14-30-153.jpg",
        "https://media.turismefgc.cat/espot/espot-esqui-hd.jpg?intmp=1709508879",
      ]
    },
    {
      "Port Ainé": [
        "https://www.infonieve.es/webcams/portaine-cota2100-picdelorri_2024-03-06-14-31-696.jpg",
        "https://www.infonieve.es/webcams/portaine-cota2100-tsroni_2024-03-06-14-31-370.jpg",
        "https://media.turismefgc.cat/portaine/port-aine-hd.jpg?intmp=1709508889",
        "https://www.infonieve.es/webcams/portaine-tv3_2024-03-06-14-31-948.jpg",
      ]
    },
    {
      "Port del Comte": [
        "https://www.infonieve.es/webcams/portdelcomte-debutantes_2024-03-06-14-31-599.jpg",
        "https://www.infonieve.es/webcams/portdelcomte-miradorquerol_2024-03-06-14-31-113.jpg",
        "https://www.infonieve.es/webcams/portdelcomte-donado_2024-03-06-14-31-141.jpg",
        "https://www.infonieve.es/files/historico/2024/2024-02-06/2941_2024-02-06-14-179.jpg",
      ]
    },
    {
      "Tavascán": [
        "https://www.infonieve.es/webcams/tavascan-pletadelprat_2024-03-06-14-31-650.jpg",
      ]
    },
    {
      "Vall de Nuria": [
        "https://www.infonieve.es/webcams/valldenuria-estany_2024-03-06-14-31-731.jpg",
        "https://media.turismefgc.cat/valldenuria/nuriapistes.jpg?intmp=1709732639",
        "https://media.turismefgc.cat/valldenuria/nurialudic.jpg?intmp=1709732639",
        "https://www.infonieve.es/webcams/valldenuria-tv3_2024-03-06-14-31-585.jpg",
      ]
    },
    {
      "Vallter": [
        "https://media.turismefgc.cat/vallter2000/webcam2.jpg?intmp=1709508931",
        "https://media.turismefgc.cat/vallter2000/webcam1.jpg?intmp=1709508931",
      ]
    },
    {
      "100K Astún - Candanchú": [
        "https://astuncandanchu.com/camara/pradoblanco.jpg?intmp=1709508944",
        "https://astuncandanchu.com/camara/cimaraca.jpg?intmp=1709732907",
        "https://astuncandanchu.com/camara/canalroya.jpg?intmp=1709732907"
      ]
    },
    {
      "Astún": [
        "https://astuncandanchu.com/camara/CAFETERIASARRIOS.jpg?intmp=1709508954",
        "https://astuncandanchu.com/camara/cimaraca.jpg?intmp=1709508954",
        "https://astuncandanchu.com/camara/canalroya.jpg?intmp=1709508954",
        "https://astuncandanchu.com/camara/pradoblanco.jpg?intmp=1709508954",
        "https://astuncandanchu.com/camara/sarrios-aguila.jpg?intmp=1709508954",
        "https://astuncandanchu.com/camara/truchas.jpg?intmp=1709508954",
        "https://astuncandanchu.com/camara/aguila.jpg?intmp=1709508954",
        "https://www.candanchu.com/camaras/candanchu_pg001M.jpg?intmp=1709508954",
      ]
    },
    {
      "Candanchú": [
        "https://www.candanchu.com/camaras/candanchu_pg001M.jpg?intmp=1709508965",
        "https://www.candanchu.com/camaras/candanchu_tuca001M.jpg?intmp=1709508965",
        "https://astuncandanchu.com/camara/pradoblanco.jpg?intmp=1709508965",
      ]
    },
    {
      "Cerler": [
        "https://webtvhotspot.feratel.com/hotspot/35/15080/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15080/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15079/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15082/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15082/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15082/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15081/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15081/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15081/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15079/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://www.barrabes.com/actualidad/webcam/benasque.jpg?intmp=1709508974",
        "https://www.turismobenasque.com/webcam/benasque_00001.jpg?intmp=1709508974",
      ]
    },
    {
      "Formigal - Panticosa": [
        "https://webtvhotspot.feratel.com/hotspot/35/15023/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15025/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
      ]
    },
    {
      "Formigal": [
        "https://webtvhotspot.feratel.com/hotspot/35/15020/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvpicture.feratel.com/picture/35/15020.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15021/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvpicture.feratel.com/picture/35/15023.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15023/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15026/4.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15026/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15026/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15021/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15025/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
      ]
    },
    {
      "Alto Campoo": [
        "https://cantur.com/camaras/VALLE/VALLE.jpg?intmp=1709509034",
        "https://cantur.com/camaras/CUCHILLON/CUCHILLON.jpg?intmp=1709509034",
        "https://cantur.com/camaras/home/cantucom/public.html/camaras/calgosa002.jpg?intmp=1709509034",
        "https://cantur.com/camaras/home/cantucom/public.html/camaras/tresmares002.jpg?intmp=1709509034",
        "https://cantur.com/camaras/home/cantucom/public.html/camaras/chivo000M.jpg?intmp=1709509034",
      ]
    },
    {
      "Fuentes de Invierno": [
        "https://www.infonieve.es/webcams/fuentesinvierno-zonabaja_2024-03-06-14-30-901.jpg",
        "https://www.infonieve.es/webcams/fuentesinvierno-zonamedia_2024-03-06-14-30-382.jpg",
      ]
    },
    {
      "Manzaneda": [
        "https://www.infonieve.es/webcams/manzaneda-pistaregato_2024-03-06-14-31-719.jpg",
      ]
    },
    {
      "Panticosa": [
        "https://webtvhotspot.feratel.com/hotspot/35/15025/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15025/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15025/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15024/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://casaescolano.com/camara/Webcam000M.jpg?intmp=1709509020",
        "https://webtvhotspot.feratel.com/hotspot/35/15023/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
      ]
    },
    {
      "San Isidro": [
        "https://www.dipuleon.es/img/sanisidro/webcam/CebolledoI.jpg?intmp=1709509064",
        "https://www.dipuleon.es/img/sanisidro/webcam/CebolledoII.jpg?intmp=1709509064",
        "https://www.dipuleon.es/img/sanisidro/webcam/Riopinos.jpg?intmp=1709509064",
        "https://www.dipuleon.es/img/sanisidro/webcam/Salencias.jpg?intmp=1709509064",
        "https://www.dipuleon.es/img/sanisidro/webcam/Requejines.jpg?intmp=1709509064",
      ]
    },
    {
      "Valgrande-Pajares": [
        "https://www.infonieve.es/webcams/pajares-panoramica_2024-03-06-14-31-739.jpg",
        "https://www.infonieve.es/webcams/pajares-cuetonegro_2024-03-06-14-31-918.jpg",
        "https://www.infonieve.es/webcams/pajares-taquillas_2024-03-06-14-31-830.jpg",
        "https://www.infonieve.es/webcams/pajares-zonabaja_2024-03-06-14-31-266.jpg",
        "https://www.infonieve.es/webcams/pajares-tsvalledelsol_2024-03-06-14-31-293.jpg",
        "https://www.infonieve.es/webcams/pajares-valledelsol_2024-03-06-14-31-204.jpg",
      ]
    },
    {
      "Valle Laciana - Leitariegos": [
        "https://www.dipuleon.es/img/leitariegos/webcam/Zona-Alta.jpg?intmp=1709509084",
        "https://www.dipuleon.es/img/leitariegos/webcam/Zona-Media.jpg?intmp=1709509084",
        "https://www.dipuleon.es/img/leitariegos/webcam/Base.jpg?intmp=1709509084",
      ]
    },
    {
      "Javalambre": [
        "https://webtvhotspot.feratel.com/hotspot/35/15075/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15075/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
      ]
    },
    {
      "La Pinilla": []
    },
    {
      "Puerto de Navacerrada": [
        "https://www.infonieve.es/webcams/puertonavacerrada-telegrafo_2024-03-06-15-01-697.jpg",
        "https://www.infonieve.es/webcams/navacerrada-m601-acceso_2024-03-06-15-01-725.jpg",
        "https://www.infonieve.es/webcams/navacerrada-m601-puerto_2024-03-06-15-01-919.jpg",
      ]
    },
    {
      "Punto de Nieve Santa Inés": [
        "-"
      ]
    },
    {
      "Sierra de Béjar": [
        "https://www.sierradebejar-lacovatilla.com/webcam/webcam4.jpg?intmp=1709509161",
        "https://www.sierradebejar-lacovatilla.com/webcam/webcam3.jpg?intmp=1709509161",
        "https://www.sierradebejar-lacovatilla.com/webcam/webcam2.jpg?intmp=1709509161",
        "https://www.sierradebejar-lacovatilla.com/webcam/webcam1.jpg?intmp=1709509161",
      ]
    },
    {
      "Valdelinares": [
        "https://webtvhotspot.feratel.com/hotspot/35/15070/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15070/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://image.ibericam.com/poster/webcam-valdelinares.jpg?intmp=1709509118",
      ]
    },
    { "Valdezcaray": [] },
    {
      "Valdesquí": [
        "https://valdesqui.es/~cam/cota1800new.jpg?intmp=1709509171",
        "https://valdesqui.es/~cam/estadiumnew.jpg?intmp=1709509171",
        "https://valdesqui.es/~cam/parkingnew.jpg?intmp=1709509171",
        "https://valdesqui.es/~cam/bolanew.jpg?intmp=1709509171",
        "https://valdesqui.es/~cam/valdemartinnew.jpg?intmp=1709509171",
        "https://meteocercedilla.com/webcams/webcamsur.jpg?&intmp=1709509171",
      ]
    },
    {
      "Grandvalira": [
        "https://webtvhotspot.feratel.com/hotspot/35/15065/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15065/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15065/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15090/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15090/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15090/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15050/5.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15050/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15050/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15050/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15055/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15055/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15055/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15060/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/36/15045/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/36/15045/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/36/15045/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15060/3.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15060/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15060/5.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15067/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
      ]
    },
    {
      "Sierra Nevada": [
        "https://webtvhotspot.feratel.com/hotspot/35/15111/4.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvpicture.feratel.com/picture/35/15111.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15111/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15110/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15110/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15110/4.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15110/3.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15110/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15111/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15113/4.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15113/3.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15113/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15111/3.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15111/5.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15112/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15113/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15112/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvpicture.feratel.com/picture/35/15112.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15113/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15113/5.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://sierranevada.es/_extras/fotos_camaras/borreguiles/borreguilesgr.jpg?IPIGNORE=TRUE&intmp=1709509189",
        "https://sierranevada.es/_extras/fotos_camaras/montebajo/snap_c1.jpg?IPIGNORE=TRUE&intmp=1709509189",
        "https://recursos.sierranevada.es/_extras/fotos_camaras/camaramsn/snap_c1.jpg?IPIGNORE=TRUE&intmp=1709509189",
        "https://sierranevada.es/_extras/fotos_camaras/pradollano/snap_c1.jpg?IPIGNORE=TRUE&intmp=1709509189",
        "https://www.infonieve.es/webcams/sierranevada-tsveleta-superior_2024-03-04-00-31-128.jpg",
        "https://www.osn.iaa.csic.es/sites/default/files/camOSN/OSN_Norte.jpg?intmp=1709509189",
        "https://www.osn.iaa.csic.es/sites/default/files/camOSN/OSN_Sur.jpg?intmp=1709509189",
        "https://www.infonieve.es/webcams/sierranevada-pradollano.jpg?intmp=1709509189",
        "https://webtvhotspot.feratel.com/hotspot/35/15114/3.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15114/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15114/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15114/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://sierranevada.es/_extras/fotos_camaras/mobotix3/mirloblancogr.jpg?IPIGNORE=TRUE&intmp=1709509189",
        "https://www.infonieve.es/webcams/sierranevada-a395-cruce_2024-03-04-00-31-244.jpg"
      ]
    },
    {
      "Ordino Arcalís": [
        "https://webtvhotspot.feratel.com/hotspot/35/15030/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15030/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15031/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15031/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvpicture.feratel.com/picture/35/15030.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
      ]
    },
    {
      "Pal Arinsal": [
        "https://webtvhotspot.feratel.com/hotspot/35/15035/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15037/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15035/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15035/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15036/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15036/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15037/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15037/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15086/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15040/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15040/0.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15085/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15040/4.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvpicture.feratel.com/picture/35/15085.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15040/3.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15086/2.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15086/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
        "https://webtvhotspot.feratel.com/hotspot/35/15085/1.jpeg?design=v5&dcsdesign=WTP_infonieve.es",
      ]
    },
    {
      "Artouste": [
        "https://www.infonieve.es/files/historico/2024/2024-03-06/2801_2024-03-06-15-909.jpg",
      ]
    },
    { "Ski Canaro": [] },
    {
      "Gourette": [
        "https://www.infonieve.es/webcams/gourette-penneblanque_2024-03-06-15-02-929.jpg",
        "https://www.infonieve.es/webcams/gourette-panoramique_2024-03-06-15-02-267.jpg",
        "https://www.infonieve.es/webcams/gourette-village_2024-03-06-15-02-307.jpg",
        "https://www.infonieve.es/webcams/gourette-secteurcotch_2024-03-06-15-02-159.jpg",
        "https://www.infonieve.es/webcams/gourette-espacebezou_2024-03-06-15-02-702.jpg",
        "https://www.infonieve.es/webcams/gourette-frontdeneige_2024-03-06-15-02-234.jpg",
      ]
    },
    {
      "La Pierre Saint-Martin": [
        "https://www.infonieve.es/webcams/la-pierre-arlas-sommet_2024-03-06-15-02-651.jpg",
        "https://www.infonieve.es/webcams/la-pierre-palombiere_2024-03-06-15-02-519.jpg",
        "https://www.infonieve.es/webcams/la-pierre-horizon-sommet_2024-03-06-15-02-498.jpg",
        "https://www.infonieve.es/webcams/la-pierre-frontdeneige_2024-03-06-15-02-186.jpg",
        "https://www.infonieve.es/webcams/la-pierre-espace-nordique_2024-03-06-15-02-800.jpg",
      ]
    },
    {
      "Cauterets": [
        "https://www.infonieve.es/webcams/cauterets-tsgrandbarbat_2024-03-06-15-01-510.jpg",
        "https://www.infonieve.es/webcams/pontdespagne-plateauduclot_2024-03-06-15-03-503.jpg",
      ]
    },
    {
      "Cauterets Cirque du Lys": [
        "https://www.infonieve.es/webcams/cauterets-tsgrandbarbat_2024-03-06-15-01-510.jpg",
        "https://www.infonieve.es/webcams/cauterets-tscretes_2024-03-06-15-01-609.jpg",
        "https://www.infonieve.es/webcams/cauterets-cretes_2024-03-06-15-01-885.jpg",
        "https://www.infonieve.es/webcams/cauterets-lelys_2024-03-06-15-01-137.jpg",
        "https://www.infonieve.es/webcams/cauterets-terrasse-panorama_2024-03-06-15-01-610.jpg",
        "https://www.infonieve.es/webcams/cauterets-snowpark_2024-03-06-15-01-884.jpg",
      ]
    },
    {
      "Cauterets Pont d´Espagne": [
        "https://www.infonieve.es/webcams/pontdespagne-plateauduclot_2024-03-06-15-03-503.jpg",
        "https://www.infonieve.es/webcams/pontdespagne-puntas_2024-03-06-15-03-125.jpg",
        "https://www.infonieve.es/webcams/pontdespagne-cascade_2024-03-06-15-02-394.jpg",
        "https://www.infonieve.es/webcams/cauterets-vignemale_2024-03-06-15-02-287.jpg",
        "https://www.infonieve.es/webcams/cauterets-terrasse-panorama_2024-03-04-00-31-734.jpg"
      ]
    },
    {
      "Gavarnie-Gèdre": [
        "https://www.infonieve.es/webcams/gavarnie-base_2024-03-06-15-02-458.jpg",
        "https://www.infonieve.es/webcams/gavarnie-coldestentes_2024-03-06-15-02-633.jpg",
        "https://www.infonieve.es/webcams/gavarnie-kidpark_2024-03-06-15-02-495.jpg",
        "https://www.infonieve.es/webcams/gavarnie-teleseigedepart_2024-03-06-15-02-143.jpg",
      ]
    },
    {
      "Grand Tourmalet": [
        "https://www.infonieve.es/webcams/tourmalet-lienz_2024-03-06-15-02-771.jpg",
        "https://www.infonieve.es/webcams/tourmalet-superbareges_2024-03-06-15-02-913.jpg",
        "https://www.infonieve.es/webcams/tourmalet-tournaboup_2024-03-06-15-02-869.jpg",
        "https://www.infonieve.es/webcams/tourmalet-toue_2024-03-06-15-02-929.jpg",
        "https://www.infonieve.es/webcams/tourmalet-col-bareges_2024-03-06-15-02-421.jpg",
        "https://www.infonieve.es/webcams/tourmalet-coumelounque_2024-03-06-15-02-496.jpg",
        "https://www.infonieve.es/webcams/tourmalet-laquette-foret_2024-03-06-15-02-164.jpg",
        "https://www.infonieve.es/webcams/tourmalet-freestylepark_2024-03-06-15-02-752.jpg",
        "https://www.infonieve.es/webcams/tourmalet-4termes_2024-03-06-15-02-941.jpg",
        "https://www.infonieve.es/webcams/tourmalet-lamongie-coltourmalet_2024-03-06-15-02-966.jpg",
      ]
    },
    {
      "Hautacam": [
        "https://www.infonieve.es/webcams/hautacam-frontdeneige_2024-03-06-15-02-489.jpg",
        "https://www.infonieve.es/webcams/hautacam-tramassel_2024-03-06-15-02-751.jpg",
        "https://www.infonieve.es/webcams/hautacam-basdespistes_2024-03-06-15-02-111.jpg",
        "https://www.infonieve.es/webcams/hautacam-mountainluge_2024-03-06-15-02-920.jpg",
        "https://www.infonieve.es/webcams/hautacam-cardouet_2024-03-06-15-02-800.jpg",
        "https://www.infonieve.es/webcams/hautacam-naouit_2024-03-06-15-02-478.jpg",
      ]
    },
    {
      "Luz Ardiden": [
        "https://filmssite.viewsurf.com/luzardiden02_7_7/media.jpg?intmp=1709509366",
        "https://filmssite.viewsurf.com/luzardiden02_5_5/media.jpg?intmp=1709509366",
      ]
    },
    {
      "Peyragudes": [
        "https://www.infonieve.es/webcams/peyragudes-belvedere_2024-03-06-15-02-407.jpg",
        "https://www.infonieve.es/webcams/peyragudes-belvedere-panoramique_2024-03-06-15-02-806.jpg",
        "https://www.infonieve.es/webcams/peyragudes-capdepales_2024-03-06-15-02-874.jpg",
        "https://www.infonieve.es/webcams/peyragudes-lesagudes-capdepales_2024-03-06-15-02-453.jpg",
        "https://www.infonieve.es/webcams/peyragudes-lesagudes-pioupiou_2024-03-06-15-02-163.jpg",
        "https://www.infonieve.es/webcams/peyragudes-peyresourde-blanche_2024-03-06-15-02-979.jpg",
      ]
    },
    {
      "Piau-Engaly": [
        "https://www.infonieve.es/webcams/piau-balneo_2024-03-06-15-32-471.jpg",
        "https://www.infonieve.es/webcams/piau-campbielh_2024-03-06-15-32-194.jpg",
        "https://www.infonieve.es/webcams/piau-combedepiau_2024-03-06-15-32-122.jpg",
        "https://www.infonieve.es/webcams/piau-debutants_2024-03-06-15-32-278.jpg",
        "https://www.infonieve.es/webcams/piau-frontdeneige_2024-03-06-15-32-396.jpg",
        "https://www.infonieve.es/webcams/piau-col_2024-03-06-15-32-635.jpg",
      ]
    },
    {
      "Saint-Lary": [
        "https://www.infonieve.es/webcams/saintlary-tourette-haut_2024-03-06-16-02-293.jpg",
        "https://www.infonieve.es/webcams/saintlary-merlans_2024-03-06-16-02-713.jpg",
        "https://www.infonieve.es/webcams/saintlary-pladadet_2024-03-06-16-02-794.jpg",
        "https://www.infonieve.es/webcams/saintlary-bouleaux_2024-03-06-16-02-963.jpg",
        "https://www.infonieve.es/webcams/saintlary-soumdematte_2024-03-06-16-02-317.jpg",
        "https://www.infonieve.es/webcams/saintlary-village_2024-03-06-16-02-224.jpg"
      ]
    },
    {
      "Val Louron": [
        "https://www.infonieve.es/webcams/vallouron-base_2024-03-06-10-04-816.jpg",
        "https://www.infonieve.es/webcams/vallouron-myrtilles_2024-03-06-16-02-482.jpg",
        "https://www.infonieve.es/webcams/vallouron-loudenvielle_2024-03-06-16-02-521.jpg"
      ]
    },
    { "Bourg d´Oueil": [] },
    {
      "Le Mourtis": [
        "https://www.infonieve.es/webcams/lemourtis-tstucdepan_2024-03-06-16-02-133.jpg"
      ]
    },
    {
      "Luchon - Superbagnères": [
        "https://www.infonieve.es/webcams/luchon-superbagneres-plateau_2024-03-06-16-02-183.jpg",
        "https://www.infonieve.es/webcams/luchon-bagneres_2024-03-06-16-02-620.jpg"
      ]
    },
    {
      "Ascou-Pailhères": [
        "https://www.infonieve.es/webcams/ascou-frontdeneige_2024-03-06-16-01-216.jpg",
        "https://www.infonieve.es/webcams/ascou-caburlet_2024-03-06-16-01-235.jpg",
        "https://www.infonieve.es/webcams/ascou-pieddepistes_2024-03-06-16-01-136.jpg",
        "https://www.infonieve.es/webcams/ascou-pistedeluge_2024-03-06-16-01-831.jpg",
      ]
    },
    {
      "Ax 3 Domaines": [
        "https://www.infonieve.es/webcams/ax-campels-prat_2024-03-06-16-01-193.jpg",
        "https://www.infonieve.es/webcams/ax-bonascre-frontdeneige_2024-03-06-16-01-134.jpg",
        "https://www.infonieve.es/webcams/ax-bonascre-pieddepistes_2024-03-06-16-01-567.jpg",
        "https://www.infonieve.es/webcams/ax-secteurcampels_2024-03-06-16-01-886.jpg",
      ]
    },
    {
      "Goulier Neige": [
        "https://www.infonieve.es/webcams/goulier-frontdeneige_2024-03-06-16-02-655.jpg"
      ]
    },
    {
      "Guzet": [
        "https://live.neos360.com/guzet/picou/img/latest/Prat.jpg?intmp=1709738788",
      ]
    },
    {
      "Les Monts d´Olmes": [
        "https://www.infonieve.es/webcams/lesmontsdolmes-arriveepiste_2024-03-06-16-02-522.jpg",
        "https://www.infonieve.es/webcams/lesmontsdolmes-baby_2024-03-06-16-02-237.jpg",
        "https://www.infonieve.es/webcams/lesmontsdolmes-pradeilles_2024-03-06-16-02-585.jpg",
        "https://www.infonieve.es/webcams/lesmontsdolmes-telecorde_2024-03-06-16-02-916.jpg"
      ]
    },
    {
      "Mijanès-Donezan": [
        "https://www.infonieve.es/webcams/mijanes-skidefond_2024-03-06-16-02-613.jpg",
        "https://www.infonieve.es/webcams/mijanes-debutant_2024-03-06-16-02-133.jpg",
        "https://www.infonieve.es/webcams/mijanes-front_2024-03-06-16-02-302.jpg",
        "https://www.infonieve.es/webcams/mijanes-pistes_2024-03-06-16-02-579.jpg",
      ]
    },
    {
      "Camurac": [
        "https://www.infonieve.es/webcams/camurac-pistes_2024-03-06-16-01-988.jpg"
      ]
    },
    {
      "Cambre d´Aze": [
        "https://filmssite.viewsurf.com/forcats01_2_2/media.jpg?intmp=1709509523",
      ]
    },
    {
      "Font-Romeu Pyrénées 2000": [
        "https://www.webcam-hd.com/images/font-romeu_roc-de-la-calme/zooms/font-romeu_roc-de-la-calme7.jpg?intmp=1709728826",
        "https://www.webcam-hd.com/images/font-romeu_roc-de-la-calme/zooms/font-romeu_roc-de-la-calme1.jpg?intmp=1709509533",
        "https://www.webcam-hd.com/images/font-romeu_roc-de-la-calme/zooms/font-romeu_roc-de-la-calme2.jpg?intmp=1709509533",
        "https://www.webcam-hd.com/images/font-romeu_roc-de-la-calme/zooms/font-romeu_roc-de-la-calme3.jpg?intmp=1709509533"
      ]
    },
    {
      "Formiguères": [
        "https://www.infonieve.es/webcams/formigueres-tscalmazeille_2024-03-06-16-02-118.jpg",
        "https://www.infonieve.es/webcams/formigueres-frontdeneige_2024-03-06-16-02-829.jpg",
        "https://www.infonieve.es/webcams/formigueres-chapelle_2024-03-06-16-02-821.jpg",
        "https://www.infonieve.es/webcams/formigueres-panorama_2024-03-06-16-02-365.jpg",
        "https://www.infonieve.es/webcams/formigueres-basdespistes_2024-03-06-16-02-678.jpg",
        "https://www.infonieve.es/webcams/formigueres-station_2024-03-06-16-02-955.jpg",
      ]
    },
    {
      "La Quillane": [
        "https://www.infonieve.es/webcams/laquillane-col_2024-03-06-16-02-254.jpg",
      ]
    },
    {
      "Les Angles": [
        "https://www.infonieve.es/webcams/lesangles-arriveeplademir_2024-03-06-16-02-536.jpg",
        "https://www.infonieve.es/webcams/lesangles-pladelmir_2024-03-06-16-02-651.jpg",
        "https://www.infonieve.es/webcams/lesangles-costaverde_2024-03-06-16-02-258.jpg",
        "https://www.infonieve.es/webcams/lesangles-plateau_2024-03-06-16-02-710.jpg",
        "https://www.infonieve.es/webcams/lesangles-rocdaude_2024-03-06-16-02-734.jpg",
        "https://www.infonieve.es/webcams/lesangles-rocdaude-secours_2024-03-06-16-02-286.jpg",
      ]
    },
    {
      "Porté-Puymorens": [
        "https://www.infonieve.es/webcams/portepuymorens-estagnol_2024-03-06-16-02-619.jpg",
        "https://www.infonieve.es/webcams/portepuymorens-lavignole_2024-03-06-16-02-343.jpg",
        "https://www.infonieve.es/webcams/portepuymorens-estagnol-depart_2024-03-06-16-02-141.jpg",
        "https://www.infonieve.es/webcams/portepuymorens-mine-bas_2024-03-06-16-02-287.jpg",
        "https://www.infonieve.es/webcams/portepuymorens-mine-haut_2024-03-06-16-02-255.jpg",
      ]
    },
    {
      "Serra da Estrela": [
        "https://www.meteoestrela.pt/assets/webcam/cam_7.jpg?intmp=1709509587",
        "https://www.meteoestrela.pt/assets/webcam/cam_60.jpg?intmp=1709509587",
        "https://www.meteoestrela.pt/assets/webcam/cam_50.jpg?intmp=1709509587",
        "https://www.meteoestrela.pt/assets/webcam/cam_20.jpg?intmp=1709509587",
        "https://www.meteoestrela.pt/assets/webcam/cam_2.jpg?intmp=1709509587",
        "https://www.meteoestrela.pt/assets/webcam/cam_3.jpg?intmp=1709509587",
        "https://www.meteoestrela.pt/assets/webcam/cam_4.jpg?intmp=1709509587",
        "https://www.meteoestrela.pt/assets/webcam/cam_40.jpg?intmp=1709509587",
      ]
    }
  ];

  const searchedStation = stationDB.estacion
  const foundedStation = []

  const findStation = () => {
    webcamsDataJson.forEach(item => {
      for (let key in item) {
        if (key === searchedStation) {
          return foundedStation.push(item[key])
        }
      }
    });
  };

  findStation();


  if (!foundedStation) {
    return (
      <Loading />
    )
  }


  return (
    <div className="mt-[100px] w-full flex flex-wrap gap-4 justify-center max-sm:px-10 md:gap-10">
      {foundedStation[0].map((imageUrl, i) => {
        return (
          <div key={i} className="lg:w-1/5 md:w-1/3">
            <ModalImage
              small={imageUrl}
              medium={imageUrl}
              hideDownload={true}
              showRotate={false}

              alt="webcammmmsss"
            />
          </div>
        )
      })}

    </div>
  );
};

export default WebCams;
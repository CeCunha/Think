
var logo = document.getElementById("logo"); // change logo
var pageLanguage = true; // variable to change list based on language
var language = document.getElementById("language"); // div with language toggler
var restart = document.getElementById("restart"); // restart button

// function to change language page
function toggle() {

    pageLanguage = !pageLanguage; // Invert variable value
    // console.log(pageLanguage);
    //Change array of words and Logo based on language chosen 
    if (pageLanguage == false){
        list = ["ABAIXO","ABALAR","ABERTO","ABISMO","ABOLIR","ABONAR","ABORTO","ABRACO","ABRIGO","ABSTEM","ACABAR","ACATAR","ACEDER","ACENAR","ACERCA","ACERVO","ACINTE","ACOITE","ACORDO","ACUADO","ACUCAR","ACUSAR","ADENDO","ADESAO","ADICAO","ADOCAO","ADORAR","ADORNO","ADOTAR","ADREDE","ADULAR","ADUZIR","AFAGAR","AFASIA","AFAVEL","AFEITO","AFERIR","AFETAR","AFFAIR","AFINAL","AFINCO","AFLIGE","AFLITO","AFOITO","AGENTE","AGONIA","AGOURO","AGRAVO","AGRURA","AGUCAR","AJUDAR","ALARDE","ALCOOL","ALCOVA","ALDEIA","ALEGAR","ALEGRE","ALFACE","ALGICO","ALGUEM","ALGUMA","ALGUNS","ALHEIO","ALIJAR","ALINEA","ALJAVA","ALMEJA","ALUSAO","AMANHA","AMANTE","AMARGO","AMASIA","AMAVEL","AMBITO","AMEACA","AMORFO","AMPARO","AMUADO","ANCIAO","ANEXAR","ANIMAL","ANOMIA","ANSEIA","ANSEIO","ANSIAR","ANTIGO","APELAR","APENAS","APENSO","APESAR","APOGEU","APOIAR","APORTE","APOSTO","APURAR","ARAGEM","ARAUTO","ARGUIR","ARGUTO","ARISCA","ARISCO","ARRASA","ARREAR","ARRIAR","ARRIMO","ARROIO","ARTIGO","ARVORE","ASCETA","ASPERA","ASPERO","ASTUTA","ASTUTO","ATENTO","ATICAR","ATRASO","ATRITO","AURORA","AUTUAR","AVANTE","AVARIA","AVATAR","AVENCA","AVESSO","AVISAR","AVOCAR","AVULSO","BABACA","BACANA","BAGACA","BAIUCA","BAIXAR","BALEIA","BALELA","BANANA","BASICO","BEBADO","BELEZA","BENCAO","BEOCIO","BIBELO","BILTRE","BIRUTA","BOCADO","BODEGA","BOEMIA","BONITA","BONITO","BORDAO","BRADAR","BRANCO","BRANDA","BRANDO","BRASIL","BRECHA","BRILHO","BRUCOS","BURACO","BURLAR","CABARE","CABECA","CACOAR","CACULA","CADEIA","CAFOFO","CALIDO","CAMERA","CANICO","CANONE","CANTAR","CAPETA","CAPTAR","CARONA","CARTEL","CASSAR","CASUAL","CASULO","CATIVO","CAUCAO","CAUSAR","CAVALO","CAXIAS","CEDICO","CEDIDO","CEDULA","CEIFAR","CELERE","CELULA","CERRAR","CETICO","CHAMAR","CHANCE","CHAPEU","CHARCO","CHARME","CHAVAO","CHEGAR","CHEGUE","CHEIRO","CHEQUE","CHIQUE","CHISTE","CHOFER","CHUCRO","CIDADE","CILADA","CINICA","CINICO","CISCAR","CISMAR","CIVICO","CLAMAR","CLAMOR","CLASSE","CLICHE","CLIMAX","COACAO","COBAIA","COBRAR","COBRIR","CODIGO","COELHO","COIBIR","COLEGA","COLERA","COLETA","COLHAO","COLHER","COMECO","COMIGO","COMODO","COMPLO","COMPOR","CONDAO","CONDIZ","CONEGO","CONSTA","CONSUL","CONTAR","CONTEM","CONTER","CONTRA","CONVEM","CONVIR","COPULA","CORDEL","CORRER","COTEJO","COVADO","CRASSO","CRIVEL","CROQUI","CUIDAR","CUMULO","CUNHAR","CUPULA","CURTIR","DADIVA","DANADA","DEBATE","DECADA","DECORO","DEFESA","DEFESO","DEFINA","DEIXAR","DELITO","DEMAIS","DENODO","DENTRE","DENTRO","DEPOIS","DERIVA","DESCER","DESDEM","DESIGN","DESPIR","DESTRA","DESUSO","DEVIDO","DEVOTO","DEXTRO","DIACHO","DIARIO","DICCAO","DIFUSA","DILEMA","DIRETO","DIRIJO","DISPAR","DITAME","DITOSO","DIVINA","DIVINO","DIVISA","DIZIMO","DOACAO","DOCURA","DOENCA","DOENTE","DORMIR","DOTADO","EFEITO","EFUSAO","EIRADO","EIVADO","ELEGIA","ELENCO","ELEVAR","ELIDIR","ELOGIO","EMBATE","EMENDA","EMENTA","EMERSO","EMITIR","EMOCAO","EMULAR","ENCHER","ENFADO","ENFASE","ENGANO","ENGODO","ENIGMA","ENLACE","ENLEVO","ENORME","ENREDO","ENSEJA","ENSINO","ENTOAR","ENTRAR","ENVIAR","ENXADA","ENXAME","EQUIPE","ERARIO","ERGUER","ERIGIR","EROSAO","ERRADO","ESBOCO","ESCALA","ESCOLA","ESCOPO","ESCORE","ESCUMA","ESCURO","ESCUSO","ESFERA","ESGUIO","ESNOBE","ESPIAR","ESPOSA","ESTADO","ESTAIS","ESTARA","ESTASE","ESTETA","ESTILO","ESTIMA","ESTUDO","ESVAIR","ETEREA","ETERNO","ETNICO","EUNUCO","EVADIR","EVASAO","EVENTO","EVITAR","EVOCAR","EXACAO","EXALAR","EXARAR","EXCETO","EXIBIR","EXIGIR","EXIGUO","EXIMIO","EXPERT","EXPIAR","EXTASE","FABULA","FADADO","FADIGA","FALICO","FASTIO","FAUSTO","FAXINA","FECHAR","FEICAO","FEIJAO","FEITIO","FELINO","FERIAS","FERTIL","FETIDO","FICCAO","FIGURA","FINDAR","FISICO","FIXADO","FLANCO","FLECHA","FLEUMA","FLORAO","FLUIDO","FOFOCA","FOGOSA","FOLEGO","FORJAR","FORMAL","FORMAR","FOSSIL","FRAGIL","FRANCO","FRAUDE","FRENTE","FRESTA","FRISAR","FRONTE","FROUXO","FRUGAL","FUGIDO","FULCRO","FULGOR","FUNCAO","FUNDIR","FURTAR","FUTEIS","FUTURO","GAIATO","GALERA","GALGAR","GANHAR","GENERO","GENESE","GENTIL","GENTIO","GESTAO","GIGOLO","GITANO","GLORIA","GLOSAR","GLUTAO","GOIABA","GOSTAR","GOZADO","GRAFAR","GRAFIA","GRATIS","GROSSO","GROTAO","GUARDA","GUERRA","GUILDA","HABITO","HAURIR","HELENA","HETERO","HIGIDO","HONRAR","HORROR","HOSANA","HOSTIL","HUMANO","IDILIO","IDIOTA","IDONEA","IDONEO","IGNOTO","IGREJA","ILIDIR","ILUDIR","ILUSAO","IMAGEM","IMENSO","IMERSO","IMOLAR","IMORAL","IMOVEL","IMPUNE","IMUNDO","INACAO","INAPTO","INCISO","INDICE","INDOLE","INEPTA","INEPTO","INFAME","INFIMA","INFIMO","INIBIR","INICIO","INIQUO","INOCUA","INOCUO","INOVAR","INSANA","INSTAR","INSUMO","INTIMO","INUTIL","IREMOS","JAMAIS","JANELA","JANOTA","JARDIM","JARGAO","JIBOIA","JOCOSO","JOVIAL","JULGAR","JUNCAO","JUNTAR","LABUTA","LACAIO","LACUNA","LADINO","LADRAO","LANCAR","LAPELA","LARICA","LASTRO","LATINO","LAVRAR","LAYOUT","LEGADO","LEGIAO","LEILAO","LEPIDO","LESADO","LEVADO","LEVEZA","LEXICO","LIBELO","LIBIDO","LICITO","LIMIAR","LIMITE","LINGUA","LISURA","LIVIDO","LOGICA","LOQUAZ","LOTADO","LOUVAR","LOUVOR","LUCIDO","MACACO","MACICA","MACICO","MACULA","MALOCA","MALUCO","MANADA","MANDAR","MANEJO","MANJAR","MANTER","MARGEM","MAROTO","MARTIR","MATRIZ","MATURO","MATUTO","MAXIMA","MAXIMO","MEADOS","MEDIAR","MEDICO","MEDIDA","MEDRAR","MEMBRO","MENINA","MENTIR","MENTOR","MERITO","MESTRA","MESTRE","METIDO","METIER","METODO","MIGRAR","MIMADO","MIMOSO","MINGUA","MINIMO","MINUTA","MISERA","MISSAO","MISTER","MITICO","MODELO","MODICO","MODULO","MOLDAR","MONTAR","MORADA","MORDAZ","MOROSO","MORRER","MOSTRA","MOTIVO","MOTRIZ","MUITOS","MULATO","MUNIDO","MUSICA","MUXOXO","NASCER","NATIVO","NECTAR","NENHUM","NESCIO","NEUTRO","NITIDO","NOCIVO","NORMAL","NOUTRO","NUANCA","NUCLEO","NUMERO","OBSTAR","OBTUSO","OCULOS","OCULTO","OFENSA","OFERTA","OFICIO","OITIVA","OMISSO","OMITIR","ONERAR","ONIBUS","ONLINE","OPINAR","OPOSTO","ORACAO","ORBITA","OSCULO","OTARIO","OUSADO","PACATA","PACATO","PAIRAR","PAIXAO","PANACA","PARTIR","PASCOA","PASTOR","PATIFE","PATRAO","PATRIA","PATROA","PAUTAR","PECADO","PEDIDO","PELEJA","PENDAO","PENDER","PENDOR","PENOSO","PERDAO","PERDER","PERIGO","PERITO","PESADO","PESSOA","PIEGAS","PLAGIO","PLANTA","PLEBEU","PLEITO","PLURAL","PODIDO","POENTE","POESIA","POLIDO","PORCAO","PORQUE","PORTAR","PORVIR","POSSAM","POSTAR","POSTER","POUPAR","PRANTO","PRAXIS","PREDIO","PREGAR","PRENDA","PRESSA","PREVER","PREVIA","PREVIA","PREVIO","PREZAR","PRIMAR","PRIMOR","PRISMA","PROEZA","PRONTO","PROPOR","PROVEM","PROVIR","PSEUDO","PUDICA","PUDICO","PUERIL","PUGNAR","PUREZA","PURGAR","QUANTO","QUEIJO","QUEIRA","QUEIXA","QUEIXO","QUERER","QUIETO","QUISER","RAINHA","RAPIDO","RAPINA","RASTRO","REACAO","REAVER","REDOMA","REDUTO","REFUGO","REGACO","REGALO","REGATO","REGIAO","REGIDO","REGIME","REGRAS","RELATO","RELEVO","REMIDO","REMOTA","RENDER","RENOVO","REPTIL","REQUER","RESTIA","RESUMO","RETIDO","RETIRO","RIGIDO","RINCAO","RITUAL","ROMPER","ROTURA","ROUBAR","SABIDO","SACANA","SACIAR","SADICO","SAGUAO","SAIRAM","SALVAR","SANADO","SATIRA","SAUDAR","SECCAO","SECULO","SEGUIR","SEGURO","SEMEAR","SENHOR","SENIOR","SENTAR","SENTIR","SEQUER","SERENA","SERENO","SERMAO","SERMOS","SERRAR","SERTAO","SERVIL","SERVIR","SESSAO","SEVERO","SHALON","SIGILO","SIMILE","SINICO","SOBEJO","SOBRIO","SOCIAL","SOFRER","SOLENE","SOLIDO","SOMBRA","SONDAR","SONHAR","SORVER","SOVACO","SOVINA","STATUS","SUBITO","SUCCAO","SUDITO","SUGERE","SUMULA","SUPRIR","SURGIR","SURTIR","SUSTAR","TALVEZ","TAMBEM","TANGER","TARDIO","TAREFA","TEMPLO","TENHAM","TENSAO","TENTAR","TEORIA","TEPIDO","TERMOS","TEXTIL","TIMIDO","TIPICO","TIRANO","TIRICA","TISICO","TITULO","TOLHER","TOLICE","TONICA","TOPICO","TORCER","TORNAR","TORPOR","TORRAO","TOUCHE","TOXICO","TRACAR","TRAGAR","TRATAR","TRAUMA","TRAZER","TRECHO","TREGUA","TREVAS","TRIADE","TRISTE","TROUXA","TROUXE","TURBAR","TUTELA","UBIQUO","UFANAR","ULTIMA","ULTIMO","UMBRAL","URBANO","UTOPIA","VACINA","VALIDO","VARIAR","VARIAS","VARIOS","VARZEA","VELADA","VELADO","VENCER","VENHAM","VENTRE","VEREDA","VERMOS","VERSAO","VERSAR","VERSUS","VERTER","VETADO","VEXAME","VIAGEM","VIAJAR","VIAVEL","VIERAM","VIGIAR","VILEZA","VIOLAR","VIRGEM","VISITA","VITIMA","VIVIDO","VOLTAR","XERIFE","XICARA","XINGAR","ZOMBAR"];
        
        logo.src = "images/PT-logo.png";//PT Logo
        document.getElementById("start").innerHTML = "COMEÇAR";
        document.getElementById("restart").innerHTML = "RECOMEÇAR";
        document.getElementById("check").innerHTML = "CHECAR";

        document.getElementById("offcanvasNavbarLabel").innerHTML = "COMO JOGAR";
        document.getElementById("rule1").innerHTML = "PENSE! e adivinhe a palavra em 5 tentativas."
        document.getElementById("rule2").innerHTML ="Cada palpite deve ser uma palavra válida de 6 letras."
        document.getElementById("rule3").innerHTML = "A cor dos ladrilhos mudará para mostrar o quão perto seu palpite estava da palavra."
        document.getElementById("exampleTitle").innerHTML = "Exemplo:"
        document.getElementById("exampleImg1").src = "images/PT-ex1.png"
        document.getElementById("example1").innerHTML ="A está na palavra e no local correto."
        document.getElementById("exampleImg2").src = "images/PT-ex2.png"
        document.getElementById("example2").innerHTML ="A está na palavra, mas no lugar errado."
        document.getElementById("exampleImg3").src = "images/PT-ex3.png"
        document.getElementById("example3").innerHTML ="U não está na palavra em nenhum lugar."

    }else if(pageLanguage == true){
        logo.src = "images/EN-logo.png";
        document.getElementById("start").innerHTML = "START";
        document.getElementById("check").innerHTML = "CHECK";
        document.getElementById("offcanvasNavbarLabel").innerHTML = "HOW TO PLAY";
        document.getElementById("rule1").innerHTML = "THINK! and guess the word in 5 tries."
        document.getElementById("rule2").innerHTML ="Each guess must be a valid 6-letter word."
        document.getElementById("rule3").innerHTML = "The color of the tiles will change to show how close your guess was to the word."
        document.getElementById("exampleTitle").innerHTML = "Example:"
        document.getElementById("exampleImg1").src = "images/EN-ex1.png"
        document.getElementById("example1").innerHTML ="M is in the word and in the correct spot."
        document.getElementById("exampleImg2").src = "images/EN-ex2.png"
        document.getElementById("example2").innerHTML ="M is in the word but in the wrong spot."
        document.getElementById("exampleImg3").src = "images/EN-ex3.png"
        document.getElementById("example3").innerHTML ="N is not in the word in any spot."
    }
}

// Variables 
let currentWord;
let stringCurrentWord;
var counter = 1; // round counter
let currentGuess; // current input Guess

// Inputs
var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");
var char3 = document.getElementById("char3");
var char4 = document.getElementById("char4");
var char5 = document.getElementById("char5");
var char6 = document.getElementById("char6");
// Button check
const check = document.getElementById("check");

// Function to move input focus to the next one, after filled.
function moveToNext(event, nextFieldId) {
    const currentField = event.target;
    const maxLength = currentField.getAttribute("maxlength");
  
    if (currentField.value.length >= maxLength) {
        const nextField = document.getElementById(nextFieldId);
        if (nextField) {
            nextField.focus();
        }
    }
}


// Function to start the game
const start = document.getElementById("start");
start.addEventListener("click",startFunction);
function startFunction(){

    // hide language toggler, start button and display Restart button 
    language.style.display = "none";
    start.style.display = "none";
    restart.style.display = "block";
    var div = document.getElementById('wrapper');
    
    // scroll div with transition delay
    if (div.clientHeight === 0) {
      div.style.height = div.scrollHeight + 'px';
    } else {
      div.style.height = 0;
    }
  
    // get random number from array list length
    var randomIndex = Math.floor(Math.random() * list.length);

    // get an word from array using random index
    var randomWord = list[randomIndex];

    // slpit the word
    var caracteres = randomWord.split("");
    // console.log(caracteres);
    // console.log(caracteres[0]);
    // console.log(caracteres[1]);
    // console.log(caracteres[2]);
    // console.log(caracteres[3]);
    // console.log(caracteres[4]);
    // console.log(caracteres[5]);
    currentWord = caracteres;
    stringCurrentWord = randomWord
}

// FUNCTION TO CHECK THE ANSWER 
check.addEventListener("click",checkFunction);
function checkFunction(){

    // WARNING MESSAGE IF MISSING INPUT FIELD
    if(char1.value === "" || char2.value === "" || char3.value === "" || char4.value === "" || char5.value === "" || char6.value === ""){

        //SHAKE TILES
        var input = document.getElementById("inputField");
        input.classList.add('shake-animation');
        setTimeout(function() {
          input.classList.remove('shake-animation');
        }, 500);
        counter--;

    }else if(counter == 1){
        // USER FIRST TRY INPUTS 
        var w1c1 = document.getElementById("w1c1").innerHTML = char1.value.toUpperCase();
        var w1c2 = document.getElementById("w1c2").innerHTML = char2.value.toUpperCase();
        var w1c3 = document.getElementById("w1c3").innerHTML = char3.value.toUpperCase();
        var w1c4 = document.getElementById("w1c4").innerHTML = char4.value.toUpperCase();
        var w1c5 = document.getElementById("w1c5").innerHTML = char5.value.toUpperCase();
        var w1c6 = document.getElementById("w1c6").innerHTML = char6.value.toUpperCase();

        // Check char (guess x word)
        if(w1c1 === currentWord[0]){
            document.getElementById("w1c1").style.backgroundColor = "#33CC33";
        }else if(w1c1 !== currentWord[0] && currentWord.includes(w1c1)){
            document.getElementById("w1c1").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w1c1").style.backgroundColor = "#CC3300";
        }
        if(w1c2 === currentWord[1]){
            document.getElementById("w1c2").style.backgroundColor = "#33CC33";
        }else if(w1c2 !== currentWord[1] && currentWord.includes(w1c2)){
            document.getElementById("w1c2").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w1c2").style.backgroundColor = "#CC3300";
        }
        if(w1c3 === currentWord[2]){
            document.getElementById("w1c3").style.backgroundColor = "#33CC33";
        }else if(w1c3 !== currentWord[2] && currentWord.includes(w1c3)){
            document.getElementById("w1c3").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w1c3").style.backgroundColor = "#CC3300";
        }
        if(w1c4 === currentWord[3]){
            document.getElementById("w1c4").style.backgroundColor = "#33CC33";
        }else if(w1c4 !== currentWord[3] && currentWord.includes(w1c4)){
            document.getElementById("w1c4").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w1c4").style.backgroundColor = "#CC3300";
        }
        if(w1c5 === currentWord[4]){
            document.getElementById("w1c5").style.backgroundColor = "#33CC33";
        }else if(w1c5 !== currentWord[4] && currentWord.includes(w1c5)){
            document.getElementById("w1c5").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w1c5").style.backgroundColor = "#CC3300";
        }
        if(w1c6 === currentWord[5]){
            document.getElementById("w1c6").style.backgroundColor = "#33CC33";
        }else if(w1c6 !== currentWord[5] && currentWord.includes(w1c6)){
            document.getElementById("w1c6").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w1c6").style.backgroundColor = "#CC3300";
        }

        //JOIN CHARS OF GUESS INPUTS
        currentGuess = w1c1+w1c2+w1c3+w1c4+w1c5+w1c6

        // add border to all chars
        for(var i = 0; i< 6; i++){
            document.querySelectorAll(".word1chars")[i].style.borderColor = "black";
        }    

    }else if(counter == 2){
        // USER SECOND TRY INPUTS 
        var w2c1 = document.getElementById("w2c1").innerHTML = char1.value.toUpperCase();
        var w2c2 = document.getElementById("w2c2").innerHTML = char2.value.toUpperCase();
        var w2c3 = document.getElementById("w2c3").innerHTML = char3.value.toUpperCase();
        var w2c4 = document.getElementById("w2c4").innerHTML = char4.value.toUpperCase();
        var w2c5 = document.getElementById("w2c5").innerHTML = char5.value.toUpperCase();
        var w2c6 = document.getElementById("w2c6").innerHTML = char6.value.toUpperCase();

        // Check char (guess x word)
        if(w2c1 === currentWord[0]){
            document.getElementById("w2c1").style.backgroundColor = "#33CC33";
        }else if(w2c1 !== currentWord[0] && currentWord.includes(w2c1)){
            document.getElementById("w2c1").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w2c1").style.backgroundColor = "#CC3300";
        }
        if(w2c2 === currentWord[1]){
            document.getElementById("w2c2").style.backgroundColor = "#33CC33";
        }else if(w2c2 !== currentWord[1] && currentWord.includes(w2c2)){
            document.getElementById("w2c2").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w2c2").style.backgroundColor = "#CC3300";
        }
        if(w2c3 === currentWord[2]){
            document.getElementById("w2c3").style.backgroundColor = "#33CC33";
        }else if(w2c3 !== currentWord[2] && currentWord.includes(w2c3)){
            document.getElementById("w2c3").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w2c3").style.backgroundColor = "#CC3300";
        }
        if(w2c4 === currentWord[3]){
            document.getElementById("w2c4").style.backgroundColor = "#33CC33";
        }else if(w2c4 !== currentWord[3] && currentWord.includes(w2c4)){
            document.getElementById("w2c4").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w2c4").style.backgroundColor = "#CC3300";
        }
        if(w2c5 === currentWord[4]){
            document.getElementById("w2c5").style.backgroundColor = "#33CC33";
        }else if(w2c5 !== currentWord[4] && currentWord.includes(w2c5)){
            document.getElementById("w2c5").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w2c5").style.backgroundColor = "#CC3300";
        }
        if(w2c6 === currentWord[5]){
            document.getElementById("w2c6").style.backgroundColor = "#33CC33";
        }else if(w2c6 !== currentWord[5] && currentWord.includes(w2c6)){
            document.getElementById("w2c6").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w2c6").style.backgroundColor = "#CC3300";
        }

        //JOIN CHARS OF GUESS INPUTS
        currentGuess = w2c1+w2c2+w2c3+w2c4+w2c5+w2c6;

        // add border to all chars
        for(var i = 0; i< 6; i++){
            document.querySelectorAll(".word2chars")[i].style.borderColor = "black";
        }    

    }else if(counter == 3){
        // USER THIRD TRY INPUTS
        var w3c1 = document.getElementById("w3c1").innerHTML = char1.value.toUpperCase();
        var w3c2 = document.getElementById("w3c2").innerHTML = char2.value.toUpperCase();
        var w3c3 = document.getElementById("w3c3").innerHTML = char3.value.toUpperCase();
        var w3c4 = document.getElementById("w3c4").innerHTML = char4.value.toUpperCase();
        var w3c5 = document.getElementById("w3c5").innerHTML = char5.value.toUpperCase();
        var w3c6 = document.getElementById("w3c6").innerHTML = char6.value.toUpperCase();

        // Check char (guess x word)
        if(w3c1 === currentWord[0]){
            document.getElementById("w3c1").style.backgroundColor = "#33CC33";
        }else if(w3c1 !== currentWord[0] && currentWord.includes(w3c1)){
            document.getElementById("w3c1").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w3c1").style.backgroundColor = "#CC3300";
        }
        if(w3c2 === currentWord[1]){
            document.getElementById("w3c2").style.backgroundColor = "#33CC33";
        }else if(w3c2 !== currentWord[1] && currentWord.includes(w3c2)){
            document.getElementById("w3c2").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w3c2").style.backgroundColor = "#CC3300";
        }
        if(w3c3 === currentWord[2]){
            document.getElementById("w3c3").style.backgroundColor = "#33CC33";
        }else if(w3c3 !== currentWord[2] && currentWord.includes(w3c3)){
            document.getElementById("w3c3").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w3c3").style.backgroundColor = "#CC3300";
        }
        if(w3c4 === currentWord[3]){
            document.getElementById("w3c4").style.backgroundColor = "#33CC33";
        }else if(w3c4 !== currentWord[3] && currentWord.includes(w3c4)){
            document.getElementById("w3c4").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w3c4").style.backgroundColor = "#CC3300";
        }
        if(w3c5 === currentWord[4]){
            document.getElementById("w3c5").style.backgroundColor = "#33CC33";
        }else if(w3c5 !== currentWord[4] && currentWord.includes(w3c5)){
            document.getElementById("w3c5").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w3c5").style.backgroundColor = "#CC3300";
        }
        if(w3c6 === currentWord[5]){
            document.getElementById("w3c6").style.backgroundColor = "#33CC33";
        }else if(w3c6 !== currentWord[5] && currentWord.includes(w3c6)){
            document.getElementById("w3c6").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w3c6").style.backgroundColor = "#CC3300";
        }

        //JOIN CHARS OF GUESS INPUTS
        currentGuess = w3c1+w3c2+w3c3+w3c4+w3c5+w3c6;

        // add border to all chars
        for(var i = 0; i< 6; i++){
            document.querySelectorAll(".word3chars")[i].style.borderColor = "black";
        }    

    }else if(counter == 4){
        // USER FOURTH TRY INPUT
        var w4c1 = document.getElementById("w4c1").innerHTML = char1.value.toUpperCase();
        var w4c2 = document.getElementById("w4c2").innerHTML = char2.value.toUpperCase();
        var w4c3 = document.getElementById("w4c3").innerHTML = char3.value.toUpperCase();
        var w4c4 = document.getElementById("w4c4").innerHTML = char4.value.toUpperCase();
        var w4c5 = document.getElementById("w4c5").innerHTML = char5.value.toUpperCase();
        var w4c6 = document.getElementById("w4c6").innerHTML = char6.value.toUpperCase();

        // Check char (guess x word)
        if(w4c1 === currentWord[0]){
            document.getElementById("w4c1").style.backgroundColor = "#33CC33";
        }else if(w4c1 !== currentWord[0] && currentWord.includes(w4c1)){
            document.getElementById("w4c1").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w4c1").style.backgroundColor = "#CC3300";
        }
        if(w4c2 === currentWord[1]){
            document.getElementById("w4c2").style.backgroundColor = "#33CC33";
        }else if(w4c2 !== currentWord[1] && currentWord.includes(w4c2)){
            document.getElementById("w4c2").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w4c2").style.backgroundColor = "#CC3300";
        }
        if(w4c3 === currentWord[2]){
            document.getElementById("w4c3").style.backgroundColor = "#33CC33";
        }else if(w4c3 !== currentWord[2] && currentWord.includes(w4c3)){
            document.getElementById("w4c3").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w4c3").style.backgroundColor = "#CC3300";
        }  
        if(w4c4 === currentWord[3]){
            document.getElementById("w4c4").style.backgroundColor = "#33CC33";
        }else if(w4c4 !== currentWord[3] && currentWord.includes(w4c4)){
            document.getElementById("w4c4").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w4c4").style.backgroundColor = "#CC3300";
        }
        if(w4c5 === currentWord[4]){
            document.getElementById("w4c5").style.backgroundColor = "#33CC33";
        }else if(w4c5 !== currentWord[4] && currentWord.includes(w4c5)){
            document.getElementById("w4c5").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w4c5").style.backgroundColor = "#CC3300";
        }
        if(w4c6 === currentWord[5]){
            document.getElementById("w4c6").style.backgroundColor = "#33CC33";
        }else if(w4c6 !== currentWord[5] && currentWord.includes(w4c6)){
            document.getElementById("w4c6").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w4c6").style.backgroundColor = "#CC3300";
        }
        //JOIN CHARS OF GUESS INPUTS
        currentGuess = w4c1+w4c2+w4c3+w4c4+w4c5+w4c6;

        // add border to all chars
        for(var i = 0; i< 6; i++){
            document.querySelectorAll(".word4chars")[i].style.borderColor = "black";
        }    

    }else if(counter == 5){
        // USER FIFTH TRY INPUTS
        var w5c1 = document.getElementById("w5c1").innerHTML = char1.value.toUpperCase();
        var w5c2 = document.getElementById("w5c2").innerHTML = char2.value.toUpperCase();
        var w5c3 = document.getElementById("w5c3").innerHTML = char3.value.toUpperCase();
        var w5c4 = document.getElementById("w5c4").innerHTML = char4.value.toUpperCase();
        var w5c5 = document.getElementById("w5c5").innerHTML = char5.value.toUpperCase();
        var w5c6 = document.getElementById("w5c6").innerHTML = char6.value.toUpperCase();

        // Check char (guess x word)
        if(w5c1 === currentWord[0]){
            document.getElementById("w5c1").style.backgroundColor = "#33CC33";
        }else if(w5c1 !== currentWord[0] && currentWord.includes(w5c1)){
            document.getElementById("w5c1").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w5c1").style.backgroundColor = "#CC3300";
        }
        if(w5c2 === currentWord[1]){
            document.getElementById("w5c2").style.backgroundColor = "#33CC33";
        }else if(w5c2 !== currentWord[1] && currentWord.includes(w5c2)){
            document.getElementById("w5c2").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w5c2").style.backgroundColor = "#CC3300";
        }
        if(w5c3 === currentWord[2]){
            document.getElementById("w5c3").style.backgroundColor = "#33CC33";
        }else if(w5c3 !== currentWord[2] && currentWord.includes(w5c3)){
            document.getElementById("w5c3").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w5c3").style.backgroundColor = "#CC3300";
        }
        if(w5c4 === currentWord[3]){
            document.getElementById("w5c4").style.backgroundColor = "#33CC33";
        }else if(w5c4 !== currentWord[3] && currentWord.includes(w5c4)){
            document.getElementById("w5c4").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w5c4").style.backgroundColor = "#CC3300";
        }  
        if(w5c5 === currentWord[4]){
            document.getElementById("w5c5").style.backgroundColor = "#33CC33";
        }else if(w5c5 !== currentWord[4] && currentWord.includes(w5c5)){
            document.getElementById("w5c5").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w5c5").style.backgroundColor = "#CC3300";
        }  
        if(w5c6 === currentWord[5]){
            document.getElementById("w5c6").style.backgroundColor = "#33CC33";
        }else if(w5c6 !== currentWord[5] && currentWord.includes(w5c6)){
            document.getElementById("w5c6").style.backgroundColor = "#FFCC00";
        }else{
            document.getElementById("w5c6").style.backgroundColor = "#CC3300";
        }
        //JOIN CHARS OF GUESS INPUTS
        currentGuess = w5c1+w5c2+w5c3+w5c4+w5c5+w5c6;

        // add border to all chars
        for(var i = 0; i< 6; i++){
            document.querySelectorAll(".word5chars")[i].style.borderColor = "black";
        }            
    }

    // ADD ROUND COUNTER
    counter++;
    console.log(counter);
    // CLEAR INPUT VALUE FOR NEXT GUESS
    char1.value = "";
    char2.value = "";
    char3.value = "";
    char4.value = "";
    char5.value = "";
    char6.value = "";

    //CHECK IF ANSWER IS CORRECT OR GAME OVER
    if(currentGuess === stringCurrentWord){
        var popup = document.getElementById("popup");
        var overlay = document.getElementById("overlay");
        var finalMessageWord = document.getElementById("finalMessageWord");
        if(pageLanguage == true){
            finalMessageWord.innerHTML = stringCurrentWord;
            popup.style.display = "block";
            overlay.style.display = "block"
        }else{
            document.getElementById("finalImg").src = "images/PT-finalMessage.png";
            document.getElementById("finalMessage").style.display = "none";
            document.getElementById("finalMessage2").innerHTML = "VOCÊ ACERTOU A PALAVRA";
            document.getElementById("close").innerHTML = "FECHAR";
            finalMessageWord.innerHTML = stringCurrentWord;
            popup.style.display = "block";
            overlay.style.display = "block"
        }
    }else if(counter > 5){
        var popup = document.getElementById("popup");
        var overlay = document.getElementById("overlay");
        document.getElementById("finalMessage").style.display = "none";
        document.getElementById("finalMessageWord").style.display = "none";
        var finalImg = document.getElementById("finalImg");
        finalImg.src = "images/FAIL-finalMessage.png";
        if(pageLanguage == true){
            document.getElementById("finalMessage2").innerHTML = "YOU CAN TRY AGAIN!";
            popup.style.display = "block";
            overlay.style.display = "block";
        }else{
            document.getElementById("finalMessage2").innerHTML = "VOCÊ PODE TENTAR NOVAMENTE";
            document.getElementById("close").innerHTML = "FECHAR";
            popup.style.display = "block";
            overlay.style.display = "block";
        }
    }
}

// English Array
let list = ["ABACUS","ABASED","ABATED","ABATES","ABAYAS","ABBESS","ABBEYS","ABBOTS","ABDUCT","ABHORS","ABIDED","ABIDES","ABJECT","ABJURE","ABLATE","ABLAZE","ABOARD","ABODES","ABORTS","ABOUND","ABRADE","ABROAD","ABRUPT","ABSENT","ABSORB","ABSURD","ABUSED","ABUSER","ABUSES","ACACIA","ACCEDE","ACCENT","ACCEPT","ACCESS","ACCORD","ACCOST","ACCRUE","ACCUSE","ACETIC","ACETYL","ACHING","ACIDIC","ACINAR","ACORNS","ACROSS","ACTING","ACTION","ACTIVE","ACTORS","ACTUAL","ACUITY","ACUMEN","ADAGES","ADAGIO","ADAPTS","ADDEND","ADDERS","ADDICT","ADDING","ADDLED","ADDUCE","ADDUCT","ADEPTS","ADHERE","ADIPIC","ADJOIN","ADJUST","ADMIRE","ADMITS","ADOBES","ADOPTS","ADORED","ADORES","ADORNS","ADRIFT","ADROIT","ADSORB","ADULTS","ADVENT","ADVERB","ADVERT","ADVICE","ADVISE","ADWARE","ADZUKI","AERATE","AERIAL","AERIES","AFFAIR","AFFECT","AFFINE","AFFIRM","AFFORD","AFFRAY","AFGHAN","AFIELD","AFLAME","AFLOAT","AFRAID","AFRESH","AGATES","AGAVES","AGEING","AGEISM","AGENCY","AGENDA","AGENTS","AGHAST","AGOUTI","AGREED","AGREES","AHIMSA","AIDERS","AIDING","AIKIDO","AILING","AIMING","AIRBAG","AIRIER","AIRILY","AIRING","AIRMAN","AIRMEN","AIRWAY","AISLES","ALARMS","ALBEDO","ALBEIT","ALBINO","ALBITE","ALBUMS","ALCOVE","ALDERS","ALERTS","ALIBIS","ALIENS","ALIGHT","ALIGNS","ALIYAH","ALKALI","ALKANE","ALKYDS","ALLAYS","ALLEGE","ALLELE","ALLEYS","ALLIED","ALLIES","ALLOTS","ALLOWS","ALLOYS","ALLUDE","ALLURE","ALMOND","ALMOST","ALPACA","ALPHAS","ALPINE","ALTARS","ALTERS","ALUMNA","ALUMNI","ALWAYS","AMAZED","AMAZES","AMAZON","AMBERS","AMBLED","AMBLES","AMBUSH","AMENDS","AMICUS","AMIDST","AMINES","AMNION","AMOEBA","AMORAL","AMOUNT","AMOURS","AMPERE","AMPLER","AMPULE","AMTRAK","AMULET","AMUSED","AMUSES","ANALLY","ANALOG","ANCHOR","ANEMIA","ANEMIC","ANGELS","ANGERS","ANGINA","ANGLED","ANGLER","ANGLES","ANGORA","ANGSTY","ANIMAL","ANIMUS","ANIONS","ANKLES","ANKLET","ANNALS","ANNOYS","ANNUAL","ANNULS","ANODES","ANODIC","ANOINT","ANOLES","ANOMIE","ANORAK","ANOXIA","ANOXIC","ANSWER","ANTHEM","ANTHER","ANTICS","ANTLER","ANTRAL","ANTRUM","ANUSES","ANVILS","ANYHOW","ANYONE","ANYWAY","AORIST","AORTIC","APACHE","APATHY","APEXES","APHIDS","APIARY","APICAL","APICES","APIECE","APLOMB","APNEAS","APNEIC","APNOEA","APOGEE","APPALL","APPEAL","APPEAR","APPEND","APPLES","APPLET","APRONS","ARABIC","ARABLE","ARBORS","ARBOUR","ARCADE","ARCANA","ARCANE","ARCHED","ARCHER","ARCHES","ARCHLY","ARCTIC","ARDENT","ARDOUR","ARENAS","AREOLA","ARGENT","ARGUED","ARGUER","ARGUES","ARGYLE","ARIGHT","ARISEN","ARISES","ARMADA","ARMFUL","ARMIES","ARMING","ARMLET","ARMORY","ARMOUR","ARMPIT","ARNICA","AROMAS","AROUND","AROUSE","ARRANT","ARRAYS","ARREAR","ARREST","ARRIVE","ARROWS","ARROYO","ARSONS","ARTERY","ARTFUL","ARTIST","ASCEND","ASCENT","ASHORE","ASHRAM","ASIDES","ASKING","ASLEEP","ASPECT","ASPENS","ASPIRE","ASSAIL","ASSAYS","ASSENT","ASSERT","ASSESS","ASSETS","ASSIGN","ASSIST","ASSIZE","ASSUME","ASSURE","ASTERN","ASTERS","ASTHMA","ASTRAL","ASTRAY","ASTUTE","ASYLUM","ATAXIA","ATLATL","ATOLLS","ATOMIC","ATONAL","ATOPIC","ATRIAL","ATRIUM","ATTACH","ATTACK","ATTAIN","ATTEND","ATTEST","ATTICS","ATTIRE","ATTUNE","AUBURN","AUDIOS","AUDITS","AUGERS","AUGURS","AUGURY","AUGUST","AUNTIE","AUREUS","AURORA","AUTEUR","AUTHOR","AUTISM","AUTUMN","AUXINS","AVAILS","AVATAR","AVENGE","AVENUE","AVERSE","AVERTS","AVIANS","AVIARY","AVIDLY","AVOIDS","AVOWAL","AVOWED","AWAITS","AWAKED","AWAKEN","AWAKES","AWARDS","AWHILE","AWNING","AWOKEN","AXEMAN","AXILLA","AXIOMS","AXIONS","AXONAL","AZALEA","BABBLE","BABIED","BABIES","BABOON","BACKED","BACKER","BACKUP","BACONS","BADASS","BADDER","BADDIE","BADGED","BADGER","BADGES","BADMAN","BAFFLE","BAGELS","BAGGED","BAGGER","BAGGIE","BAGMAN","BAGMEN","BAILED","BAILER","BAIRNS","BAITED","BAITER","BAKERS","BAKERY","BAKING","BALDER","BALDLY","BALEEN","BALERS","BALING","BALKED","BALLAD","BALLED","BALLER","BALLET","BALLOT","BALLSY","BALSAM","BAMBOO","BANANA","BANDED","BANDER","BANDIT","BANGED","BANGER","BANGLE","BANISH","BANJOS","BANKED","BANKER","BANNED","BANNER","BANTAM","BANTER","BANYAN","BANZAI","BAOBAB","BARBED","BARBEL","BARBER","BARBIE","BARDIC","BARELY","BAREST","BARFED","BARGED","BARGES","BARING","BARITE","BARIUM","BARKED","BARKER","BARLEY","BARMAN","BARONS","BARONY","BARQUE","BARRED","BARREL","BARREN","BARROW","BARTER","BARYON","BASALT","BASELY","BASEST","BASHED","BASHER","BASHES","BASICS","BASILS","BASING","BASINS","BASKED","BASKET","BASQUE","BASSES","BASSET","BASTED","BASTER","BASTES","BATEAU","BATHED","BATHER","BATHES","BATHOS","BATIKS","BATMAN","BATONS","BATTED","BATTEN","BATTER","BATTLE","BAUBLE","BAWLED","BAYING","BAZAAR","BEACHY","BEACON","BEADED","BEAGLE","BEAKED","BEAKER","BEAMED","BEANIE","BEARDS","BEARER","BEASTS","BEATEN","BEATER","BEAUTY","BEAVER","BECAME","BECKON","BECOME","BEDBUG","BEDDED","BEDECK","BEDLAM","BEDPAN","BEDSIT","BEEFED","BEEPED","BEEPER","BEETLE","BEFALL","BEFELL","BEFITS","BEFORE","BEGETS","BEGGAR","BEGGED","BEGINS","BEHALF","BEHAVE","BEHELD","BEHEST","BEHIND","BEHOLD","BEIGES","BEINGS","BELFRY","BELIEF","BELIES","BELLES","BELLOW","BELONG","BELTED","BELTER","BELUGA","BEMOAN","BEMUSE","BENDED","BENDER","BENIGN","BERATE","BEREFT","BERETS","BERLIN","BERTHS","BESETS","BESIDE","BESTED","BESTIR","BESTOW","BETAKE","BETIDE","BETRAY","BETTER","BETTOR","BEVELS","BEWAIL","BEWARE","BEYOND","BEZELS","BHAKTI","BIASED","BIASES","BIBLES","BICEPS","BICKER","BIDDEN","BIDDER","BIDETS","BIDING","BIFFED","BIFOLD","BIGAMY","BIGEYE","BIGGER","BIGGIE","BIGOTS","BIGWIG","BIKERS","BIKING","BIKINI","BILGES","BILKED","BILLED","BILLER","BILLET","BILLON","BILLOW","BIMBOS","BINARY","BINDER","BINGED","BINGES","BIOGAS","BIOMES","BIONIC","BIOPSY","BIOTAS","BIOTIC","BIOTIN","BIPEDS","BIRDER","BIRDIE","BIRTHS","BISECT","BISHOP","BISONS","BISQUE","BISTRO","BITCHY","BITERS","BITING","BITMAP","BITTEN","BITTER","BLACKS","BLADED","BLADER","BLADES","BLAMED","BLAMES","BLANCH","BLANKS","BLARED","BLARES","BLASTS","BLAZED","BLAZER","BLAZES","BLAZON","BLEACH","BLEARY","BLEATS","BLEEDS","BLEEPS","BLENDS","BLENNY","BLIGHT","BLIMEY","BLIMPS","BLINDS","BLINIS","BLINKS","BLITHE","BLOBBY","BLOCKS","BLOCKY","BLOGGY","BLOKES","BLONDE","BLONDS","BLOODS","BLOODY","BLOOMS","BLOTCH","BLOUSE","BLOUSY","BLOWED","BLOWER","BLOWUP","BLUESY","BLUFFS","BLUING","BLUISH","BLUNTS","BLURBS","BLURRY","BLURTS","BOARDS","BOASTS","BOATED","BOATER","BOBBED","BOBBER","BOBBIN","BOBBLE","BOBCAT","BODEGA","BODICE","BODIED","BODIES","BODILY","BODING","BODKIN","BOFFIN","BOGEYS","BOGGED","BOGGLE","BOGIES","BOILED","BOILER","BOLDER","BOLDLY","BOLERO","BOLTED","BOMBED","BOMBER","BONBON","BONDED","BONERS","BONGOS","BONIER","BONITO","BONKED","BONNET","BONOBO","BONSAI","BOOBIE","BOOBOO","BOOGER","BOOGIE","BOOHOO","BOOING","BOOKED","BOOKER","BOOKIE","BOOMED","BOOMER","BOOSTS","BOOTED","BOOTHS","BOOTIE","BOOZED","BOOZER","BOPPED","BOPPER","BORAGE","BORATE","BORDER","BOREAL","BORERS","BORING","BORROW","BOSOMS","BOSONS","BOSSED","BOSSES","BOTANY","BOTHER","BOTNET","BOTTLE","BOTTOM","BOUCLE","BOUDIN","BOUGHS","BOUGHT","BOUGIE","BOULES","BOUNCE","BOUNCY","BOUNDS","BOUNTY","BOURNE","BOURSE","BOVINE","BOWELS","BOWERS","BOWERY","BOWING","BOWLED","BOWLER","BOWMAN","BOWMEN","BOXCAR","BOXERS","BOXIER","BOXING","BOYARS","BOYISH","BRACED","BRACER","BRACES","BRACTS","BRAHMA","BRAIDS","BRAINS","BRAINY","BRAISE","BRAKED","BRAKES","BRANCH","BRANDS","BRANDY","BRASSY","BRATTY","BRAVED","BRAVER","BRAVES","BRAVOS","BRAWLS","BRAWNS","BRAWNY","BRAYED","BRAYER","BRAZED","BRAZEN","BRAZIL","BREACH","BREADS","BREADY","BREAKS","BREAST","BREATH","BREECH","BREEDS","BREEZE","BREEZY","BREVET","BREWED","BREWER","BRIARS","BRIBED","BRIBES","BRICKS","BRIDAL","BRIDES","BRIDGE","BRIDLE","BRIEFS","BRIERS","BRIGHT","BRINED","BRINES","BRINGS","BRINKS","BROACH","BROADS","BROGUE","BROILS","BROKEN","BROKER","BRONCO","BRONCS","BRONZE","BRONZY","BROOCH","BROODS","BROODY","BROOKS","BROOMS","BROTHS","BROWNS","BROWSE","BRUINS","BRUISE","BRUNCH","BRUSHY","BRUTAL","BRUTES","BUBBLE","BUBBLY","BUCCAL","BUCKED","BUCKET","BUCKLE","BUDDED","BUDGED","BUDGET","BUDGIE","BUFFED","BUFFER","BUFFET","BUGGED","BUGGER","BUGLER","BUGLES","BUILDS","BULGED","BULGES","BULGUR","BULKED","BULLED","BULLET","BUMBLE","BUMMED","BUMMER","BUMPED","BUMPER","BUNDLE","BUNGEE","BUNGLE","BUNION","BUNKED","BUNKER","BUNKUM","BUNTED","BUOYED","BURBLE","BURDEN","BUREAU","BURGER","BURGLE","BURIAL","BURIED","BURIES","BURKAS","BURLAP","BURLEY","BURNED","BURNER","BURNET","BURPED","BURQAS","BURROS","BURROW","BURSAR","BURSTS","BURTON","BUSBOY","BUSHED","BUSHEL","BUSHES","BUSIED","BUSIER","BUSIES","BUSILY","BUSING","BUSKER","BUSSED","BUSSES","BUSTED","BUSTER","BUSTLE","BUTANE","BUTLER","BUTTED","BUTTER","BUTTES","BUTTON","BUYERS","BUYING","BUYOUT","BUZZED","BUZZER","BUZZES","BYGONE","BYLAWS","BYLINE","BYPASS","BYWAYS","BYWORD","CABALS","CABANA","CABBIE","CABINS","CABLED","CABLES","CACHET","CACKLE","CACTUS","CADDIE","CADDIS","CADETS","CADRES","CAECUM","CAFTAN","CAGING","CAIMAN","CAIRNS","CAKING","CALICO","CALIPH","CALLED","CALLER","CALLOW","CALLUS","CALMED","CALMER","CALMLY","CALVED","CALVES","CAMBER","CAMELS","CAMEOS","CAMERA","CAMPED","CAMPER","CAMPOS","CAMPUS","CANALS","CANAPE","CANARD","CANARY","CANCEL","CANCER","CANDID","CANDLE","CANDOR","CANIDS","CANINE","CANING","CANKER","CANNAS","CANNED","CANNER","CANNON","CANOED","CANOES","CANOLA","CANONS","CANOPY","CANTED","CANTER","CANTON","CANTOR","CANTOS","CANVAS","CANYON","CAPERS","CAPFUL","CAPITA","CAPONS","CAPPED","CAPPER","CAPSID","CAPTOR","CARAFE","CARATS","CARBON","CARBOS","CARBOY","CARDED","CARDER","CARDIA","CARDIO","CAREEN","CAREER","CARERS","CARESS","CARGOS","CARIES","CARINA","CARING","CARNAL","CARNEY","CAROLS","CAROMS","CARPAL","CARPED","CARPEL","CARPET","CARREL","CARROT","CARTED","CARTEL","CARTER","CARTON","CARVED","CARVER","CARVES","CASEIN","CASHED","CASHES","CASHEW","CASING","CASINO","CASKET","CASQUE","CASSIA","CASSIS","CASTER","CASTES","CASTLE","CASTOR","CASUAL","CATCHY","CATERS","CATION","CATKIN","CATNAP","CATNIP","CATSUP","CATTLE","CAUCUS","CAUDAL","CAUGHT","CAUSAL","CAUSED","CAUSES","CAVEAT","CAVERN","CAVIAR","CAVILS","CAVING","CAVITY","CAVORT","CAYMAN","CEASED","CEASES","CEDARS","CEDING","CELEBS","CELERY","CELIAC","CELLAR","CELLED","CELLOS","CEMENT","CENOTE","CENSER","CENSOR","CENSUS","CENTER","CENTRE","CEREAL","CEREUS","CERISE","CERIUM","CERVIX","CESIUM","CETANE","CHADOR","CHAFED","CHAFES","CHAINS","CHAIRS","CHAISE","CHALET","CHALKS","CHALKY","CHAMPS","CHANCE","CHANCY","CHANGE","CHANTS","CHAPEL","CHARGE","CHARMS","CHARRO","CHARTS","CHASED","CHASER","CHASES","CHASMS","CHASSE","CHASTE","CHATTY","CHEAPO","CHEATS","CHECKS","CHEEKS","CHEEKY","CHEERS","CHEERY","CHEESE","CHEESY","CHEQUE","CHERRY","CHERUB","CHESTS","CHESTY","CHEVRE","CHEWED","CHEWER","CHIASM","CHICKS","CHICLE","CHIDED","CHIDES","CHIEFS","CHILES","CHILLI","CHILLS","CHILLY","CHIMED","CHIMES","CHIMPS","CHINAS","CHINCH","CHINES","CHOICE","CHOOSE","CHORDS","CHORUS","CHOSEN","CHROME","CHUNKS","CHURCH","CINEMA","CIRCLE","CIRCUS","CITIES","CITING","CITRUS","CLAIMS","CLASSY","CLAUSE","CLEVER","CLICKS","CLIENT","CLIFFS","CLINIC","CLOSED","CLOSER","CLOSES","CLOSET","CLOUDS","CLUTCH","COATED","CODING","COFFEE","COHORT","COLDER","COLLAR","COLONY","COLORS","COLOUR","COLUMN","COMBAT","COMEDY","COMICS","COMING","COMMIT","COMMON","COMPLY","CONVEY","COOKED","COOKER","COOKIE","COOLER","COPIED","COPIES","COPPER","CORNER","COSMIC","COSTLY","COTTON","COUNTS","COUNTY","COUPLE","COUPON","COURSE","COURTS","COUSIN","COVERS","CRACKS","CRAFTS","CREAMS","CREAMY","CREATE","CREDIT","CREEPY","CRIMES","CRISIS","CRITIC","CROWDS","CRUISE","CRYING","CURSOR","CURVED","CURVES","CUSTOM","CUTTER","CYCLES","DAMAGE","DANCER","DANGER","DANISH","DARKER","DATING","DEADLY","DEALER","DEATHS","DEBATE","DEBRIS","DECADE","DECENT","DECIDE","DEEMED","DEEPER","DEEPLY","DEFEAT","DEFECT","DEFEND","DEFINE","DEGREE","DELAYS","DELETE","DEMAND","DEMONS","DENIAL","DENIED","DENTAL","DEPART","DEPEND","DEPLOY","DEPTHS","DEPUTY","DESERT","DESIGN","DESIRE","DETAIL","DETECT","DEVICE","DEVILS","DIALOG","DIESEL","DIFFER","DIGITS","DINING","DINNER","DIRECT","DISHES","DIVIDE","DIVINE","DIVING","DOCTOR","DOLLAR","DOMAIN","DONATE","DONORS","DOSAGE","DOUBLE","DOUBTS","DOZENS","DRAGON","DRAWER","DREAMS","DRILLS","DRINKS","DRIVEN","DRIVER","DRIVES","DRONES","DRYING","DUBBED","DUMPED","DURING","DUTIES","EAGLES","EARNED","EASIER","EASILY","EASTER","EATING","EDIBLE","EDITED","EDITOR","EFFECT","EFFORT","EIGHTH","EITHER","ELDERS","ELEVEN","EMAILS","EMERGE","EMPIRE","EMPLOY","ENABLE","ENDING","ENDURE","ENERGY","ENGAGE","ENGINE","ENJOYS","ENOUGH","ENROLL","ENSURE","ENTERS","ENTIRE","ENTITY","ENZYME","EQUALS","EQUITY","ERRORS","ESCAPE","ESSAYS","ESTATE","ETHICS","ETHNIC","EVENLY","EVENTS","EVOLVE","EXCEED","EXCEPT","EXCESS","EXCUSE","EXEMPT","EXISTS","EXOTIC","EXPAND","EXPECT","EXPERT","EXPIRE","EXPORT","EXPOSE","EXTEND","EXTENT","EXTRAS","FABRIC","FACIAL","FACING","FACTOR","FAILED","FAIRLY","FALLEN","FAMILY","FAMOUS","FARMER","FASTER","FATHER","FAULTS","FAULTY","FAVOUR","FEARED","FELLOW","FELONY","FEMALE","FENDER","FIBERS","FIELDS","FIERCE","FIGHTS","FIGURE","FILING","FILLED","FILLER","FILMED","FILTER","FINALE","FINALS","FINELY","FINEST","FINGER","FINISH","FIRING","FIRMLY","FISCAL","FITTED","FIXING","FLAMES","FLAVOR","FLAWED","FLIGHT","FLOORS","FLORAL","FLOWER","FLUFFY","FLUIDS","FLYERS","FLYING","FOLDED","FOLDER","FOLLOW","FORCED","FORCES","FOREST","FORGET","FORGOT","FORMAL","FORMAT","FORMED","FORMER","FORUMS","FOSSIL","FOSTER","FOUGHT","FOURTH","FRAMES","FREELY","FREEZE","FRENCH","FRIDGE","FRIEND","FRINGE","FROZEN","FRUITS","FUNDED","FUNNEL","FUSION","FUTURE","GAINED","GALAXY","GALLON","GAMERS","GAMING","GARAGE","GARDEN","GARLIC","GATHER","GEARED","GENDER","GENIUS","GENRES","GENTLE","GENTLY","GERMAN","GHOSTS","GIANTS","GIFTED","GINGER","GIVING","GLANCE","GLANDS","GLOBAL","GLOSSY","GLOVES","GLUTEN","GOLDEN","GOOGLE","GOSPEL","GOTTEN","GOVERN","GRADES","GRAINS","GRANTS","GRAPES","GRAPHS","GRAVEL","GRAVES","GREASE","GREENS","GROOVE","GROUND","GROUPS","GROWTH","GUARDS","GUESTS","GUIDED","GUIDES","GUILTY","GUITAR","HABITS","HAMMER","HANDED","HANDLE","HAPPEN","HARBOR","HARDER","HARDLY","HASSLE","HATRED","HAVING","HAZARD","HEADED","HEADER","HEALED","HEALTH","HEARTS","HEATED","HEATER","HEAVEN","HEIGHT","HELMET","HELPED","HERBAL","HEREBY","HEREIN","HEROES","HEROIC","HEROIN","HIDDEN","HIDING","HIGHER","HIGHLY","HIKING","HIRING","HOCKEY","HOLDER","HOLLOW","HONEST","HONORS","HONOUR","HOOKED","HOPING","HORROR","HORSES","HOSTED","HOTELS","HOURLY","HOUSED","HOUSES","HUGELY","HUMANE","HUMANS","HUMBLE","HUMOUR","HUNGER","HUNGRY","HUNTER","HYBRID","ICONIC","IDEALS","IGNORE","IMAGES","IMMUNE","IMPACT","IMPORT","IMPOSE","INCHES","INCOME","INDEED","INDOOR","INDUCE","INFANT","INFORM","INJURY","INNING","INPUTS","INSANE","INSECT","INSERT","INSIDE","INSIST","INSURE","INTACT","INTAKE","INTEND","INTENT","INVEST","INVITE","ISLAND","ISSUED","ISSUES","ITSELF","JACKET","JERSEY","JOINED","JOINTS","JUDGED","JUDGES","JUICES","JUMPED","JUNGLE","JUNIOR","KEEPER","KERNEL","KICKED","KIDNEY","KILLED","KILLER","KINDLE","KINDLY","KNIGHT","KNIVES","LABELS","LABOUR","LACKED","LADDER","LADIES","LANDED","LAPTOP","LARGER","LASTED","LASTLY","LATELY","LATEST","LATTER","LAUGHS","LAUNCH","LAWFUL","LAWYER","LAYERS","LAYING","LAYOUT","LEADER","LEAGUE","LEARNS","LEARNT","LEAVES","LEGACY","LEGEND","LEGION","LENDER","LENGTH","LENSES","LESSER","LESSON","LETHAL","LETTER","LEVELS","LIABLE","LIFTED","LIGHTS","LIKELY","LIMITS","LINEAR","LINEUP","LINING","LINKED","LIQUID","LIQUOR","LISTED","LISTEN","LITTER","LITTLE","LIVELY","LIVING","LOADED","LOCALS","LOCATE","LOCKED","LOCKER","LOGGED","LONELY","LONGER","LOOKED","LOOSEN","LOSING","LOSSES","LOUNGE","LOVELY","LOVERS","LOVING","LOWEST","LUMBER","LUXURY","LYRICS","MAGNET","MAILED","MAINLY","MAJORS","MAKERS","MAKEUP","MAKING","MANAGE","MANNER","MANUAL","MARBLE","MARGIN","MARINE","MARKED","MARKER","MARKET","MARVEL","MASSES","MASTER","MATRIX","MATTER","MATURE","MEDALS","MEDIAN","MEDIUM","MELODY","MELTED","MEMBER","MEMORY","MENTAL","MENTOR","MERELY","MERGER","MERITS","METALS","METERS","METHOD","METRES","METRIC","MIDDLE","MIGHTY","MINERS","MINING","MINORS","MINUTE","MIRROR","MISERY","MISSED","MIXING","MOBILE","MODELS","MODERN","MODEST","MODIFY","MODULE","MOMENT","MONKEY","MONTHS","MOSTLY","MOTHER","MOTION","MOTORS","MOUNTS","MOVIES","MOVING","MURDER","MUSCLE","MUSEUM","MUTUAL","MYRIAD","MYSELF","NAMELY","NARROW","NATION","NATIVE","NATURE","NAUSEA","NEARBY","NEARLY","NEATLY","NEEDED","NEEDLE","NERVES","NEWEST","NICELY","NICKEL","NIGHTS","NOBODY","NOISES","NORMAL","NOTICE","NOTIFY","NOTING","NOTION","NOVELS","NOVICE","NUMBER","NURSES","OBJECT","OBTAIN","OCCUPY","OCCURS","OCEANS","OFFERS","OFFICE","OFFSET","OLDEST","ONIONS","ONLINE","OPENED","OPENER","OPENLY","OPPOSE","OPTICS","OPTION","ORACLE","ORANGE","ORDERS","ORGANS","ORIGIN","OUNCES","OUTFIT","OUTLET","OUTPUT","OVERLY","OWNERS","OWNING","OXYGEN","PACKED","PACKET","PAIRED","PALACE","PANELS","PANTRY","PAPERS","PARADE","PARCEL","PARENT","PARISH","PARKED","PAROLE","PARTLY","PASSED","PASSES","PASTOR","PASTRY","PATENT","PATROL","PATRON","PAYING","PEANUT","PEDALS","PENCIL","PEOPLE","PEPPER","PERIOD","PERMIT","PERSON","PETROL","PHASES","PHONES","PHOTOS","PHRASE","PICKED","PICKUP","PICNIC","PIECES","PILLAR","PILLOW","PILOTS","PIRATE","PISTOL","PISTON","PIXELS","PLACED","PLACES","PLAINS","PLANES","PLANET","PLANTS","PLAQUE","PLASMA","PLATES","PLAYED","PLAYER","PLEASE","PLEDGE","PLENTY","POCKET","PODIUM","POETRY","POINTS","POISON","POLICE","POLICY","POLISH","POLITE","POORLY","POPPED","PORTAL","POSTAL","POSTED","POSTER","POTATO","POTENT","POUNDS","POURED","POWDER","POWERS","PRAISE","PRAYER","PREFER","PRETTY","PRICED","PRICES","PRICEY","PRIEST","PRIMER","PRINCE","PRINTS","PRISON","PRIZES","PROFIT","PROMPT","PROPER","PROVED","PROVEN","PROVES","PUBLIC","PULLED","PUNISH","PUPILS","PURELY","PURITY","PURPLE","PURSUE","PUSHED","PUSHES","PUZZLE","PYTHON","QUARTZ","QUESTS","QUIRKY","QUOTED","QUOTES","RABBIT","RACIAL","RACING","RACISM","RACIST","RADIUS","RAISED","RAISES","RANDOM","RANGED","RANGER","RANGES","RANKED","RARELY","RATHER","RATING","RATIOS","READER","REALLY","REASON","REBELS","RECALL","RECENT","RECIPE","RECORD","REDEEM","REDUCE","REFERS","REFINE","REFORM","REFUGE","REFUND","REFUSE","REGAIN","REGARD","REGIME","REGION","REGRET","REJECT","RELATE","RELIED","RELIEF","RELIES","REMAIN","REMEDY","REMIND","REMOTE","REMOVE","RENDER","RENTAL","RENTED","REPAIR","REPEAT","REPORT","RESCUE","RESIDE","RESIST","RESORT","RESULT","RESUME","RETAIL","RETAIN","RETIRE","RETURN","REVEAL","REVIEW","REWARD","RHYTHM","RIBBON","RICHER","RIDERS","RIDING","RIFLES","RIGHTS","RIPPED","RISING","RITUAL","RIVALS","RIVERS","ROBOTS","ROBUST","ROCKET","ROLLED","ROLLER","ROMANS","ROOKIE","ROOTED","ROSTER","ROTARY","ROTATE","ROUNDS","ROUTER","ROUTES","RUBBER","RUGGED","RUINED","RULING","RUMORS","RUNNER","RUNWAY","RUSHED","RUSTIC","SACRED","SADDLE","SAFARI","SAFELY","SAFEST","SAFETY","SAINTS","SALADS","SALARY","SALMON","SAMPLE","SAVING","SAYING","SCALES","SCARED","SCENES","SCENIC","SCHEME","SCHOOL","SCORED","SCORES","SCOUTS","SCREEN","SCREWS","SCRIPT","SCROLL","SEALED","SEARCH","SEASON","SEATED","SECOND","SECRET","SECTOR","SECURE","SEEING","SEEMED","SEIZED","SELDOM","SELECT","SELLER","SENATE","SENDER","SENIOR","SENSES","SENSOR","SEQUEL","SERIAL","SERIES","SERVED","SERVER","SERVES","SETTLE","SEVERE","SEWING","SEXUAL","SHADES","SHADOW","SHAPED","SHAPES","SHARED","SHARES","SHARKS","SHEETS","SHELLS","SHIELD","SHIFTS","SHINES","SHIRTS","SHOOTS","SHORES","SHORTS","SHOULD","SHOWED","SHOWER","SHRIMP","SHRINK","SIGHTS","SIGNAL","SIGNED","SILENT","SILVER","SIMMER","SIMPLE","SIMPLY","SINGER","SINGLE","SISTER","SKETCH","SKIING","SKILLS","SKINNY","SLAVES","SLEEVE","SLICES","SLIDER","SLIDES","SLIGHT","SLOPES","SLOWED","SLOWER","SLOWLY","SMELLS","SMILED","SMOOTH","SNACKS","SNAKES","SOCCER","SOCIAL","SOCKET","SODIUM","SOFTER","SOLELY","SOLVED","SOONER","SORTED","SOUGHT","SOUNDS","SOURCE","SOVIET","SPACES","SPEAKS","SPEECH","SPEEDS","SPELLS","SPENDS","SPHERE","SPICES","SPIDER","SPIKES","SPINAL","SPIRIT","SPLASH","SPOKEN","SPONGE","SPORTS","SPOUSE","SPREAD","SPRING","SPRINT","SQUARE","SQUASH","STABLE","STACKS","STAGES","STAINS","STAIRS","STAKES","STAMPS","STANCE","STANDS","STAPLE","STARTS","STATED","STATES","STATIC","STATUE","STATUS","STAYED","STEADY","STEREO","STICKS","STICKY","STITCH","STOCKS","STOLEN","STONES","STORED","STORES","STORMS","STRAIN","STRAPS","STREAK","STREAM","STREET","STRESS","STRICT","STRIKE","STRING","STRIPS","STRIVE","STROKE","STRONG","STRUCK","STUDIO","STUPID","STURDY","STYLES","SUBMIT","SUBTLE","SUBWAY","SUCKED","SUDDEN","SUFFER","SUGARS","SUITED","SUITES","SUMMER","SUMMIT","SUMMON","SUNSET","SUPERB","SUPPLY","SURELY","SURVEY","SWITCH","SWORDS","SYMBOL","SYNTAX","SYSTEM","TABLES","TABLET","TACKLE","TACTIC","TAGGED","TAKING","TALENT","TALKED","TALLER","TARGET","TASTED","TASTES","TATTOO","TAUGHT","TEAMED","TEMPLE","TENANT","TENDED","TENDER","TENNIS","TENURE","TERROR","TESTED","THANKS","THEIRS","THEMES","THEORY","THESIS","THIGHS","THINGS","THINKS","THIRTY","THOUGH","THREAD","THREAT","THRILL","THRIVE","THROAT","THRONE","THROWN","THROWS","TICKET","TIGERS","TIMBER","TIMELY","TIMING","TISSUE","TITLED","TITLES","TOILET","TOKENS","TOMATO","TONGUE","TONNES","TOPICS","TOPPED","TORQUE","TOSSED","TOWARD","TOWELS","TOWERS","TOXINS","TRACED","TRACKS","TRADED","TRADER","TRADES","TRAGIC","TRAILS","TRAINS","TRAITS","TRAUMA","TRAVEL","TREATS","TREATY","TRENDS","TRENDY","TRIALS","TRIBAL","TRIBES","TRICKS","TRICKY","TRIPLE","TROOPS","TROPHY","TRUCKS","TRUSTS","TRUTHS","TRYING","TUBING","TUCKED","TUMORS","TUNING","TUNNEL","TURKEY","TURNED","TURTLE","TWEETS","TWELVE","TWENTY","TYPING","UNABLE","UNEVEN","UNFAIR","UNIONS","UNIQUE","UNITED","UNLESS","UNLIKE","UNLOCK","UNPAID","UNSAFE","UNSURE","UNUSED","UPDATE","UPLOAD","UPSIDE","UPWARD","URGENT","USABLE","USEFUL","UTMOST","VACANT","VACUUM","VALLEY","VALUED","VALUES","VALVES","VANITY","VARIED","VARIES","VASTLY","VECTOR","VELVET","VENDOR","VENUES","VERBAL","VERIFY","VERSES","VERSUS","VESSEL","VIABLE","VICTIM","VIDEOS","VIEWED","VIEWER","VIOLIN","VIRGIN","VIRTUE","VISION","VISITS","VISUAL","VOICES","VOLUME","VOTERS","VOTING","VOYAGE","WAITED","WAIVER","WAKING","WALKED","WALLET","WALNUT","WANDER","WANTED","WARMER","WARMTH","WARNED","WASHED","WASHER","WASTED","WATERS","WEAKER","WEALTH","WEAPON","WEEKLY","WEIGHS","WEIGHT","WHALES","WHEELS","WHILST","WHITES","WHOLLY","WICKED","WIDELY","WIDGET","WILDLY","WINDOW","WINNER","WINTER","WIRING","WISDOM","WISELY","WISHED","WISHES","WITHIN","WIZARD","WOLVES","WONDER","WOODEN","WORKED","WORKER","WORLDS","WORTHY","WOUNDS","WRITER","WRITES","YEARLY",];










    







// 1.constantele care stim canu se vor schimba niciodata in proiectul nostru PUTEM SA LE PASTRAM CU CONST iar denumirea lor poate fi scris uppercase
// 2.API KEyY urile sau tokenurile nu ar trebui sa stea intr un fisier text, pentru ca nu este sigur, aceste key ar trebui sa stea pe un server dar in cazul nostru cum API ul de la openweathermap este gratuit atunci e ok sa il tinem asa
const API_KEY = "c49d60aab2e626d2dfac6332cf8074ce";

// construim linkurile (endpointurile) serverelor catre care vom face callurile ca sa primim date de despre vreme
function getCurrentWeatherEndpoint(city) {
    // cand se foloseste semnul intrebarii dupa URL inseamna ca avem de a face cu un query params (queri string) inseamna ca api ul va lua in considaerare acei parametrii pentru a ne intoarce date in functie de acei parametrii
    // noi avem urmatorii querii params
    // 1.q = este folosit pentru a identifica orasul
    // land = este folosit pentru a i pune API sa ne intoarca datele in limba romana
    // 3.units = este folosit pentru a i pune API sa ne intoarca datele in grade celsius
    // 4.appid = este folosit pentru a identifica aplicatia care face requestul
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
};

function getForecastEndPoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
};
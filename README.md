# X509-Certificate

Ky projekt implementon një sistem komunikimi TCP klient-server ku të dhënat e shkëmbyera midis klientit dhe serverit janë të enkriptuara dhe të nënshkruara digjitalisht duke përdorur certifikatat X.509. Enkriptimi siguron konfidencialitetin e mesazheve, ndërsa nënshkrimet digjitale ofrojnë autentikimin dhe integritetin e të dhënave.

## Veçoritë

- Komunikim i Enkriptuar: Të gjitha mesazhet e shkëmbyera midis klientit dhe serverit janë të enkriptuara duke përdorur enkriptimin RSA.
- Nënshkrime Digjitale: Mesazhet janë të nënshkruara digjitalisht për të siguruar autenticitetin dhe integritetin e të dhënave.
- Certifikata X.509: Përdoren certifikatat X.509 për enkriptim dhe nënshkrim.

## Kërkesat

- Node.js i instaluar në kompjuterin tuaj.
- OpenSSL i instaluar për të gjeneruar certifikatat dhe çelësat.

## Përdorimi

#### Nisja Serverit
1.Ekzekutoni serverin:
- node server.js

#### Nisja Klientit
1.Ekzekutoni klientin:
- node client.js
2.Ndiqni udhëzimet për të futur mesazhin tuaj

## Skedarët

- client.js: Implementimi i klientit TCP që lidhet me serverin, dërgon një mesazh të enkriptuar dhe të nënshkruar, dhe merr një përgjigje.
- server.js: Implementimi i serverit TCP që dëgjon për lidhjet e klientit, dekripton dhe verifikon mesazhet hyrëse, dhe dërgon një përgjigje.
- utils.js:Funksionet ndihmëse për enkriptim, dekriptim, nënshkrim dhe verifikim të mesazheve.

## Grupi punues: 
Elisa Gjurkaj,
Elion Maksutaj,
Elisë Gashi,
Elisa Berisha,

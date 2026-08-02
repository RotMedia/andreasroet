Google Search Console — HTML file verification (Alternative zu DNS):
1. In der Search Console bei "Property hinzufügen" den Typ "URL-Präfix" wählen
   (statt "Domain") und https://andreasroet.de eingeben.
2. Google bietet "HTML-Datei" als Bestätigungsmethode an und gibt dir eine Datei
   wie "google1a2b3c4d5e.html".
3. Diese Datei nach public/ legen (Dateiname exakt übernehmen), hochladen, deployen.
4. In der Search Console auf "Bestätigen" klicken.

Bing Webmaster Tools:
1. bing.com/webmasters → Property hinzufügen → https://andreasroet.de
2. Option "XML-Datei" → Datei "BingSiteAuth.xml" herunterladen → nach public/ legen.
   ODER: Google-Verifizierung importieren (einfacher, wenn Google schon bestätigt ist).

DNS-Methode (empfohlen für "Domain"-Property, deckt alles ab):
- Bei webgo im DNS-Bereich der Domain einen TXT-Record hinzufügen.
- Wert = der google-site-verification=... String aus der Search Console.
- Für Bing analog den von Bing angegebenen TXT- oder CNAME-Record.

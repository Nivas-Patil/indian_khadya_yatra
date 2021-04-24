
function currentTime()
{
    var mytime = setInterval(myTimer, 1000);
    function myTimer()
    {
        var d = new Date();
        document.getElementById("time").innerHTML = d.toLocaleTimeString();
    }
}

function chickenbiryaniracipe()
{
    var heading = "<h3 style='padding-top:10px;'>चिकन बिर्याणी सर्व सामग्री</h3><hr>"
    var txt = 
    `
    <img src='images/Chicken-Biryani-Recipe.jpg' height='200px' width='250px'>
    <img src='images/चिकन-बिर्याणी1.webp' height='200px' width='250px'>
    <img src='images/चिकन-बिर्याणी2.webp' height='200px' width='250px'>
    <img src='images/चिकन-बिर्याणी3.webp' height='200px' width='250px'>
    <hr>

    `;
    var things = `<b>घटक <br> (12 व्यक्ती)</b><br>

    1 किलो बासमती तांदूळ<br>
    1 1/2 किलो चिकन <br>
    1/4 किलो कांदे<br>
    1/4 किलो टोमॅटो<br>
    3 टेबल स्पून आलं लसूण पेस्ट<br>
    1 टेबल स्पून जिरं<br>
    3 टेबल स्पून बर्यानी मसाला<br>
    1 जुडी कोथिंबीर<br>
    1/2 जुडी पुदिना<br>
    100 ग्राम दही<br>
    2 टेबल स्पून लिंबूरस<br>
    2 टेबल स्पून लाल तिखट<br>
    1 टी स्पून हळद<br>
    4 तमालपत्र<br>
    2 मसाला वेलची<br>
    2 हिरवी वेलची<br>
    1 टी स्पून मिरी<br>
    5/6 लवंग<br>
    1 इंच दालचिनी तुकडा <hr>
    <h3>कृती</h3>
    <b>1)</b>
    कांदा उभा चिरून त्याला तळून घ्यावं. चिकन स्वच्छ करून त्याला हळद, मीठ, लाल तिखट, बिर्याणी मसाला, तळलेला कांदा, पुदिना, 
    कोथिंबीर, खडा मसाला आणि दही घालून मुरवत ठेवायचं.<br><br>
    <b>2)</b>
    दुसऱ्या भांड्यात तांदळाच्या 3 पट पाणी उकळत ठेवावं, त्यात खडा मसाला, हळद, मीठ, तेल घालून उकळी काढून घ्यावी. 
    त्यात भिजवलेले तांदूळ टाकून भात अर्धा कच्चा शिजवून घ्यावा. भात चाळणीत गाळून घ्यावा.<br><br>
    <b>3)</b>
    एका भांड्यात शिजवलेलं चिकन आणि भाताचे थर लावून त्याला कमी आचेवर 20 मिनिट शिजायला ठेवावे. आपली बिर्याणी तयार.
    <br><br>
    <button type='submit' onclick='print()' class='btn btn-success'>कृती डाउनलोड करा</button>
    <hr>
    `
    document.getElementById("demo").innerHTML = heading + "" + txt + "" + things;
}
function paneer()
{
    var heading = "<h3 style='padding-top:10px;'>पनीर मसाला सर्व सामग्री</h3><hr>"
    var txt = 
    `
    <img src='images/पनीर-मसाला.webp' height='200px' width='200px'>
    <img src='images/पनीर-भाजी-रेसिपी1.webp' height='200px' width='200px'>
    <img src='images/पनीर-भाजी-रेसिपी2.webp' height='200px' width='200px'>
    <img src='images/पनीर-भाजी-रेसिपी3.webp' height='200px' width='200px'>
    <img src='images/पनीर-भाजी-रेसिपी4.webp' height='200px' width='200px'>
    <hr>`;
    var things = `<b>घटक</b><br>
    घटक<br>
    1 पाव पनीर<br>
    2 कांदे किसलेले<br>
    तुकडे अर्ध्या कांद्याचे<br>
    1 हिरवी शिमला मिरची<br>
    2 टोमॅटो<br>
    2 तेजपान<br>
    1 दालचिनी तुकडा<br>
    1 टेबल स्पून तिखट<br>
    1 टी स्पून गरम मसाला<br>
    1 टी स्पून धणे-जिरे पावडर<br>
    1/2 टी स्पून हळद<br>
    1/2 टीस्पून आलेलसूण पेस्ट<br>
    2 टीस्पून कस्तुरी मेथी<br>
    1/2 टेबल स्पून मीठ<br>
    4 टेबलस्पून तेल<br>
    1/2 टेबलस्पून बटर
    <br><br>
    <button type='submit' onclick='print()' class='btn btn-success'>कृती डाउनलोड करा</button>
    <hr>
    `
    document.getElementById("demo").innerHTML = heading + "" + txt + "" + things;
}

function vegbiryani()
{
    var heading = "<h3 style='padding-top:10px;'>शाकाहारी बिर्याणी सर्व सामग्री</h3><hr>"
    var txt = 
    `<img src='images/veg-biryani.jpg' height='200px' width='250px'>
    <img src='images/veg-biryani1.jpg' height='200px' width='250px'>
    <img src='images/veg-biryani2.jpg' height='200px' width='250px'>
    <img src='images/veg-biryani3.jpg' height='200px' width='250px'>
    <hr>`;
    var things = `<b>घटक <br> (2 व्यक्ती)</b><br>

    1 कप बासमती तांदुळ<br>
    1 कप चिरलेला कांदा<br>
    1 कप फुलकोबी<br>
    1 कप हिरव्या शेंगा<br>
    1 कप गाजर<br>
    आवश्यकतेनुसार ऑनियन फ्लेक्स<br>
    1.2 कप मटार<br>
    1 चमचे लसूूण पेस्ट<br>
    1 चमचे आल्याची पेस्ट<br>
    1 कप टोमॅटो पेस्ट<br>
    आवश्यकतेनुसार पुदिन्याची पाने<br>
    1 कप कोथिंबीरीची पाने<br>
    4 चमचे तूप<br>
    1 कप योगर्ट<br>
    आवश्यकतेनुसार दालचिनी<br>
    आवश्यकतेनुसार तेजपत्ता<br>
    आवश्यकतेनुसार लवंग<br>
    आवश्यकतेनुसार हिंग<br>
    आवश्यकतेनुसार मीठ<br>
    1 चमचे मिरची पावडर<br>
    आवश्यकतेनुसार जिरे<br>
    1 चमचे गरम मसाला पावडर<br>
    250 mililitre पाणी<br>
    आवश्यकतेनुसार हिरवी वेलची
    <hr>
    <h3>कृती</h3>
    <b>1)</b>
    तांदूळ स्वच्छ धुवून ५ ते १० मिनिटे पाण्यात भिजत ठेवा
    <br><br>
    <b>2)</b>
    पाण्यात तांदूळ, मीठ, तमालपत्र, दालचिनी, लवंग, वेलदोडा आणि साजूक तूप घालून सर्व सामग्री उकळवून घ्या
    <br><br>
    <b>3)</b>
    आता दुस-या एका पॅनमध्ये साजूक तूप घेऊन गरम करा. त्यात हिंग, जिरे, आलं-लसणाची पेस्ट, कांदे घाला. 
    कांद्याचा रंग गोल्डन-ब्राऊन होऊ लागताच त्यात वेलदोडा व तमालपत्र घाला.
    <br><br>
    <b>4)</b>
    पुढे, त्यात फ्लॉवर, गाजर, फरसबी घालून २ ते ३ मिनिटे शिजवून घ्या. त्यात चिमुटभर मीठ मिक्स करुन २ मिनिटे मिश्रण पुन्हा शिजवून घ्या.
    आता त्यात टोमॅटो प्युरी घाला.
    <br><br>
    <b>5)</b>
    आता त्यात हळद, लाल तिखट, मीठ, वाटाणे, दही घालून भाज्या मऊ होईपर्यंत सर्व सामग्री शिजवून घ्या.
    आता गॅसवर कोळसा गरम करुन तो एका वाटीत ठेवा. 
    त्या कोळशावर साजूक तूपाचे थेंब सोडून ती वाटी पॅनमध्ये शिजवलेल्या भाज्यांवर ठेवून पॅनचे झाकण बंद करा.
    <br><br>
    <b>6)</b>
    आता एक बाऊल घेऊन त्यात भाज्यांचं मिश्रण घ्या व त्यावर शिजवलेल्या भाताची लेअर घाला.
    भाजी व भात अशा २ ते ३ लेअर एकमेकांवर घाला. तयार झाली आहे आपली रुचकर व्हेजिटेबल बिर्याणी!
    गार्निशिंगसाठी बिर्याणीवर तळलेला कांदा, पुदीना व 
    कोथिंबीरीची पाने घालून गरमा गरम बिर्याणी सर्व्ह करा. या बिर्याणीचा आस्वाद तुम्ही थंडगार कोशिंबीरीसोबतही घेऊ शकता.
    <br><br>
    <button type='submit' onclick='print()' class='btn btn-success'>कृती डाउनलोड करा</button>
    <hr>
    `
    document.getElementById("demo").innerHTML = heading + "" + txt + "" + things;
}
function masalebhat()
{
    var heading = "<h3 style='padding-top:10px;'>बेडगी मिरची व खोबऱ्याचा मसाले भात सामग्री</h3><hr>"
    var txt = 
    `
    <img src='images/masale-bhat1.jpeg' height='200px' width='250px'>
    <img src='images/masale-bhat2.jpeg' height='200px' width='250px'>
    <img src='images/masale-bhat3.jpeg' height='200px' width='250px'>
    <img src='images/masale-bhat4.jpeg' height='200px' width='250px'>
    <img src='images/masale-bhat5.jpeg' height='200px' width='250px'>
    <img src='images/masale-bhat6.jpeg' height='200px' width='250px'>
    <hr>`;
    var things = `<b>घटक <br> (2 व्यक्ती)</b><br>

    1 कप उकडलेले तांदूळ<br>
    1 कप किसलेले नारळ<br>
    8/10 - लाल मिरची<br>
    1 कप शेंगदाणा तेल<br>
    2 चमचे मोहरीच्या बिया<br>
    2 चमचे चणा डाळ<br>
    1 चमचे उडदाची डाळ<br>
    आवश्यकतेनुसार कच्चे शेंगदाणे<br>
    2 चमचे गूळ<br>
    आवश्यकतेनुसार चिंच<br>
    आवश्यकतेनुसार मीठ<br>
    आवश्यकतेनुसार कढीपत्ता<br>
    आवश्यकतेनुसार हळद<br>
    आवश्यकतेनुसार हिंग<hr>
    <h3>कृती</h3>
    <b>1)</b>
    मिक्सरच्या भांड्यामध्ये तळलेल्या बेडगी मिरच्या, किसलेले ओले खोबरे, एक चमचा मोहरी,
    चिंच आणि गूळ पावडर एकत्र घ्या व सर्व सामग्री वाटून जाडसर पेस्ट तयार करा.
    <br><br>
    <b>2)</b>
    पॅनमध्ये तेल गरम करत ठेवा. त्यात मोहरी, चण्याची आणि उडदाची डाळ घालावी. सर्व सामग्री नीट फ्राय करा.
    आता तेलात शेंगदाणे मिक्स करा आणि ३-४ मिनिटे फ्राय करा.
    <br><br>
    <b>3)</b>
    नंतर हळद, चिमूटभर हिंग, कढीपत्ता आणि तयार केलेली पेस्ट पॅनमध्ये मिक्स करा.
    <br><br>
    <b>4)</b>
    सर्व सामग्री नीट फ्राय झाल्यानंतर शिजवलेले तांदूळ त्यात घालावेत आणि फ्राय करावा.
    गॅसच्या मध्यम आचेवर भात २-३ मिनिटे शिजू द्यावा. चवीनुसार मीठ मिक्स करा.
    <br><br>
    <b>5)</b>
    टेस्टी मसाला भात तयार झाला आहे.
    <br><br>
    <button type='submit' onclick='print()' class='btn btn-success'>कृती डाउनलोड करा</button>
    <hr>
    `
    document.getElementById("demo").innerHTML = heading + "" + txt + "" + things;
}
function matanbiryani()
{
    var heading = "<h3 style='padding-top:10px;'>मटण बिर्याणी सामग्री</h3><hr>"
    var txt = 
    `
    <img src='images/मटण-बिर्याणी1.webp' height='200px' width='150px'>
    <img src='images/मटण-बिर्याणी2.webp' height='200px' width='150px'>
    <img src='images/मटण-बिर्याणी3.webp' height='200px' width='150px'>
    <img src='images/मटण-बिर्याणी4.webp' height='200px' width='150px'>
    <img src='images/मटण-बिर्याणी5.webp' height='200px' width='150px'>
    <img src='images/मटण-बिर्याणी6.webp' height='200px' width='150px'>
    <img src='images/मटण-बिर्याणी7.webp' height='200px' width='150px'>
    <img src='images/मटण-बिर्याणी8.webp' height='200px' width='150px'>
    <img src='images/मटण-बिर्याणी10.webp' height='200px' width='150px'>
    <hr>`;
    var things = `<b>घटक <br> (2 व्यक्ती)</b><br>

    1/2 किलो मटण<br>
    ४०० ग्रॅम तांदूळ (बासमती)<br>
    4 मोठे कांदे<br>
    2 टोमॅटो<br>
    4 चमचे आले लसूण पेस्ट<br>
    1 कप दही<br>
    2 उकडलेले अंडे<br>
    2 मोठे चमचे धने<br>
    1 चमचा खसखस<br>
    3/4 लवंग<br>
    २/३ काळीमिरी<br>
    1 मोठी वेलीची<br>
    ४/५ हिरवी वेलीची<br>
    1 इंच दालचिनी<br>
    २/३ तमालपत्र<br>
    2 छोटे चमचे तीळ<br>
    2 चक्री फुल<br>
    1 जाईपत्री फुल<br>
    2 चमचा तिखट<br>
    1 चमचा हळद<br>
    आवडीनुसार तेल / तूप<br>
    चवीनुसार मीठ
    <hr>
    <h3>कृती</h3>
    <b>1)</b>
    तांदूळ १ तास आधी भिजवून ठेवा...आणि नंतर पाणी काढून घ्या..मटण पण चांगले धुऊन घ्या..
    <br><br>
    <b>2)</b>
    कुकर मध्ये तेल या तूप घाला आणि त्या मध्ये तमालपत्र आणि दालचिनी घाला...
    आणि लांब कापलेला कांदा घाला...आणि कांदा चांगला गोल्डन ब्राऊन होई पर्यंत भाजा.मग त्या मध्ये मटण घाला...मटण परतून घ्यावे..
    आणि त्या मध्ये तिखट मीठ हळद आले लसूण पेस्ट आणि टॉमॅटो घालून चांगले परतून करून घ्या...
    <br><br>
    <b>3)</b>
    मटण परतून घेतले की कुकर चे झाकण लावून ३/४ सिटी द्या...दुसरी कडे एका टोप मध्ये पाणी ठेवा गरम करायला
    ...त्या मध्ये दालचिनी लवंग मीठ आणि तेल घाला.. चक्रिफुळ पण घाला..
    <br><br>
    <b>4)</b>
    आता एक टोप घ्या त्या मध्ये दही घाला...आणि धने तीळ चक्रिफुल लवंग जायपत्री खसखस 
    काळीमिरी हिरवी वेलीची जायफळ तिखट हळद मीठ घालून पावडर करुन दही मध्ये मिक्स करा... तळलेले कांदा पण घाला वाटताना...
    मटण बिर्याणी
    <br><br>
    <b>5)</b>
    आता कुकर उघडा आणि त्या मध्ये हा दही मिक्स मसाला घाला आणि चांगला मिक्स करून घ्या...आणि कोथांबिर आणि पुदीना कापून घाला..
    गॅस चालू करा आणि मसाला चांगला मटण मध्ये मिक्स होऊ द्या...
    <br><br>
    <b>6)</b>
    पाणी कमी असेल तर थोडे घालू शकता...मग मटण चांगले मिक्स झाले..मग त्याच्या वर कापलेला पुदीना आणि कोथींबीर 
    तळलेला कांदा आणि २ उकडलेली अंडी..आणि मग अर्धा शिजलेला भात घाला...मग भात सेट करा आणि त्या वर परत तळलेले 
    कांदा घाला आणि एक कप दूध घाला....
    आणि वाफ बाहेर जाऊ नये असे झाकण लावून ठेवा...कमीत कमी १/२ तास....झाली आपली मस्त बिर्याणी तयार...
    <br><br>
    <button type='submit' onclick='print()' class='btn btn-success'>कृती डाउनलोड करा</button>
    <hr>
    `
    document.getElementById("demo").innerHTML = heading + "" + txt + "" + things;
}
function contact()
{
    var heading = `
    <h3 style='padding-top:10px;'>संपर्क  तयार करा व पाठवा</h3>
    <p>आपण नाव आणि ईमेल रिक्त करू शकता</p>
    `
    var things = `
    <form>
        <label for='name' style='float:left;'>नाव </label>
        <input type='text' id='name' class='form-control'>
        <label for='email' style='float:left;'>ईमेल </label>
        <input type='text' id='email' class='form-control'>
        <label for='message' style='float:left;'>संदेश </label>
        <input type='text' id='message' class='form-control'><br>
        <button class='btn btn-primary  btn-success'>पाठवा</button>
        <hr>
    </form>
   
    `
    document.getElementById("demo").innerHTML = heading + " " + things;
}

